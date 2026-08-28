const fs = require('fs');

async function test() {
  const response = await fetch('http://localhost:5173/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      messages: [
        { role: 'system', content: 'You are Mahateer...' },
        { role: 'user', content: 'tell me about deepvision' }
      ]
    })
  });
  
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let text = '';
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    text += decoder.decode(value);
  }
  console.log(text);
}

test();
