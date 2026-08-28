import { generateSystemPrompt, buildScopedContext } from './src/services/aiContext.js';

async function parseOpenAICompatibleStream(response) {
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    let full = '';

    while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const events = buffer.split('\n\n');
        buffer = events.pop() || '';

        for (const event of events) {
            const dataLines = event
                .split('\n')
                .filter((line) => line.startsWith('data:'))
                .map((line) => line.slice(5).trim());

            for (const data of dataLines) {
                if (!data || data === '[DONE]') continue;
                console.log("CHUNK:", data);
                try {
                    const parsed = JSON.parse(data);
                    if (parsed.choices && parsed.choices[0]) {
                        const content = parsed.choices[0].delta?.content;
                        if (content) full += content;
                        
                        if (parsed.choices[0].finish_reason) {
                            console.log(`[FINISH REASON] ${parsed.choices[0].finish_reason}`);
                            if (parsed.x_groq && parsed.x_groq.error) {
                                console.log(`[GROQ ERROR]`, parsed.x_groq.error);
                            }
                        }
                    }
                } catch (error) {}
            }
        }
    }
    return full;
}

async function testQuery(query) {
    const systemPrompt = generateSystemPrompt();
    const scopedContext = buildScopedContext(query);
    
    const messages = [
        { role: 'system', content: systemPrompt },
        ...(scopedContext ? [{ role: 'system', content: scopedContext }] : []),
        { role: 'user', content: query }
    ];

    const response = await fetch('http://localhost:5173/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages })
    });
    
    console.log(`\n--- QUERY: "${query}" ---`);
    console.log(`STATUS: ${response.status}`);
    
    if (!response.ok) {
        console.log("ERROR BODY:", await response.text());
        return;
    }
    
    const fullText = await parseOpenAICompatibleStream(response);
    console.log("RAW OUTPUT:");
    console.log(fullText);
}

async function run() {
    console.log("TECH STACK:", buildScopedContext("Tell me about your tech stack"));
    console.log("PROJECTS:", buildScopedContext("Show me your projects"));
    console.log("ZEENE:", buildScopedContext("zeene"));
}

run();
