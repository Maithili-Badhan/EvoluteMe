import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [prompt, setPrompt] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [audioUrl, setAudioUrl] = useState("");

  const handleSubmit = async () => {
    const response = await fetch("http://127.0.0.1:5000/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    setGeneratedText(data.message);
    setAudioUrl(data.audio_url);
  };

  return (
    <div className="container">
      <h1 className="my-4">5-Minute Learning Snippet Generator</h1>
      <div className="form-group">
        <label htmlFor="prompt">Enter your prompt</label>
        <input
          type="text"
          id="prompt"
          className="form-control"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>
      <button className="btn btn-primary my-3" onClick={handleSubmit}>
        Generate Snippet
      </button>
      <h4>Generated Text:</h4>
      <p>{generatedText}</p>
      {audioUrl && (
        <>
          <h4>Generated Audio:</h4>
          <audio controls>
            <source src={audioUrl} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </>
      )}
    </div>
  );
}

export default App;