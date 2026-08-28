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

                try {
                    const parsed = JSON.parse(data);
                    const content = parsed.choices?.[0]?.delta?.content;
                    if (content) {
                      full += content;
                    }
                } catch (error) {
                }
            }
        }
    }
    console.log("FULL TEXT:", full);
}

async function test() {
  const response = await fetch('http://localhost:5173/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      messages: [
        { role: 'system', content: `You ARE Mahateer - Mahateer Muhammad. You are NOT an assistant or a bot. You are Mahateer himself, answering visitors who come to your portfolio website. Speak in FIRST PERSON at all times ("I", "my", "me").
  Keep answers SHORT, conversational, and directly to the point. No robotic introductions.
  Never say "As an AI...". If asked personal questions, answer based on the PORTFOLIO DATA.
  
  ## YOUR IDENTITY & DATA
  ### ABOUT YOU
  - Name: Mahateer Muhammad
  ### YOUR PROJECTS
  Project: DeepVision (slug: deepvision)
  Category: Interactive ML Tooling
  Tagline: Neural network visualizer
  Year: 2024
  Stack: PyTorch, React, D3
  Features: Semantic-zoom graphs; activation labs; 255 automated tests
  Impact: Used by 10k students; trending on GitHub
  Links: Live (https://deepvision.demo), Repo (https://github.com/mahateer/deepvision)` },
        { role: 'user', content: 'Show me your projects' }
      ]
    })
  });
  await parseOpenAICompatibleStream(response);
}

test();
