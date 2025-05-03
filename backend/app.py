from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import GPT2LMHeadModel, GPT2Tokenizer
from gtts import gTTS
import os

app = Flask(__name__)
CORS(app)

# Ensure static directory exists
if not os.path.exists("static"):
    os.makedirs("static")

# Load GPT-2 model and tokenizer once when the app starts
model = GPT2LMHeadModel.from_pretrained("gpt2")
tokenizer = GPT2Tokenizer.from_pretrained("gpt2")

@app.route("/generate", methods=["POST"])
def generate_snippet():
    data = request.get_json()
    prompt = data.get("prompt")

    # Encode the input and generate text using GPT-2
    inputs = tokenizer(prompt, return_tensors="pt")
    outputs = model.generate(inputs["input_ids"], max_length=150, num_return_sequences=1)
    generated_text = tokenizer.decode(outputs[0], skip_special_tokens=True)

    # Generate speech from the text
    tts = gTTS(generated_text)
    audio_path = "static/generated_audio.mp3"
    tts.save(audio_path)

    return jsonify({
        "message": "Working!",
        "text": generated_text,
        "audio_url": "http://127.0.0.1:5000/static/generated_audio.mp3"
    })

if __name__ == "__main__":
    app.run(debug=True)