export const config = {
  runtime: 'edge',
};

const GROQ_CHAT_COMPLETIONS_URL = "https://api.groq.com/openai/v1/chat/completions";

export default async function handler(req) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Use GROQ_API_KEY from environment variables (securely on the server)
  // For Vercel Edge functions, process.env.GROQ_API_KEY works automatically.
  // We'll also support VITE_GROQ_API_KEY as a fallback just in case they haven't renamed it yet.
  const apiKey = process.env.GROQ_API_KEY || process.env.VITE_GROQ_API_KEY;
  
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "Server is missing GROQ_API_KEY" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json();
    const { messages } = body;

    if (!Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "Invalid 'messages' payload" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const upstream = await fetch(GROQ_CHAT_COMPLETIONS_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages,
        model: "openai/gpt-oss-120b",
        max_tokens: 1024,
        temperature: 0.35,
        stream: true,
      }),
    });

    if (!upstream.ok || !upstream.body) {
      const errorText = await upstream.text();
      console.error("Groq API Error:", upstream.status, errorText);
      return new Response(JSON.stringify({ error: "Upstream error", details: errorText }), {
        status: upstream.status || 502,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Stream the provider response straight back to the browser.
    return new Response(upstream.body, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
    });
  } catch (err) {
    console.error("Proxy error:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
