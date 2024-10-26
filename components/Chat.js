import { useState } from 'react';

export default function Chat() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleChat = async () => {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <div>
      <textarea onChange={(e) => setPrompt(e.target.value)} value={prompt} />
      <button onClick={handleChat}>Send to ChatGPT</button>
      <p>{response}</p>
    </div>
  );
}
