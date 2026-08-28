import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'local-api-proxy',
      configureServer(server) {
        server.middlewares.use('/api/chat', async (req, res) => {
          if (req.method !== 'POST') {
            res.statusCode = 405;
            return res.end('Method not allowed');
          }

          const env = loadEnv(server.config.mode, process.cwd(), '');
          const apiKey = env.GROQ_API_KEY || env.VITE_GROQ_API_KEY;

          let body = '';
          req.on('data', chunk => body += chunk);
          req.on('end', async () => {
            try {
              const { messages } = JSON.parse(body);
              const upstream = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                method: 'POST',
                headers: {
                  'Authorization': `Bearer ${apiKey}`,
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  messages,
                  model: 'openai/gpt-oss-120b',
                  max_tokens: 1024,
                  temperature: 0.35,
                  stream: true
                })
              });

              console.log(`[Vite Proxy] Upstream status: ${upstream.status} ${upstream.statusText}`);
              res.statusCode = upstream.status;
              if (!upstream.ok) {
                 const errBody = await upstream.text();
                 console.log(`[Vite Proxy] Upstream error body:`, errBody);
                 res.setHeader('Content-Type', 'application/json');
                 res.end(errBody);
                 return;
              }

              res.setHeader('Content-Type', 'text/event-stream');
              res.setHeader('Cache-Control', 'no-cache');
              res.setHeader('Connection', 'keep-alive');

              const reader = upstream.body.getReader();
              const decoder = new TextDecoder();
              while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                res.write(decoder.decode(value, { stream: true }));
              }
              res.end();
            } catch (err) {
              console.error('Local Proxy Error:', err);
              res.statusCode = 500;
              res.end('Internal Server Error');
            }
          });
        });
      }
    }
  ],
  envPrefix: ['VITE_', 'REACT_APP_'],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
