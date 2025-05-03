# 🎧 EvoluteMe — Spotify for Learning  
*Global MIT AI Hackathon 2025 | Rapid Application Building Track*

This repository contains **EvoluteMe**, a web-based tool that turns any curiosity, mood, or activity into a personalized 5-minute audio learning experience — like a Spotify playlist, but for knowledge.

---

## 🔥 Problem

Today’s learners struggle to stay engaged or find time to learn due to information overload, long content formats, and low personalization. We’re either passively consuming long lectures or skipping learning entirely.

---

## 💡 Solution

**EvoluteMe** addresses this by providing hyper-personalized microlearning snippets. The platform uses AI to generate relevant, mood-based content on the fly, which is then converted to audio — offering learning that fits into your moment.

---

## 🚀 Features

- **🎯 Prompt-Based Personalization**  
  Type a prompt like *“I'm walking, curious about AI”* — and get content tailored to your situation.

- **🧠 5-Minute Microlearning Tracks**  
  Digestible content chunks, automatically generated and voiced using AI.

- **🔁 Replace Track**  
  Don’t like a topic? Instantly swap with another 5-minute track.

- **🎙️ Interactive Personal Touch**  
  Adds user-preferred lines or questions (only when idle/safe).

- **🗂️ Dashboard**  
  View recent listens, custom playlists, playback controls.

- **🧵 Conversation Mode**  
  Deep dive into any track with follow-up content.

- **📜 Transcript Downloads**  
  Access offline versions of your audio content for review or note-taking.

---

## 🌍 Why It Matters

✅ **Inclusive** — Quick learning, no tech barrier, voice input & localization (planned)  
✅ **Safe** — Adapts to activity state (e.g., running vs. idle)  
✅ **Scalable** — Modular architecture, API-driven  
✅ **Ethical** — Includes breaks, citations, no addictive dopamine loops

---

## 🧩 Tech Stack

| Layer        | Tools Used                          |
|--------------|--------------------------------------|
| Frontend     | React, Tailwind CSS                  |
| Backend      | Flask (Python), Flask-CORS           |
| AI Text Gen  | HuggingFace (GPT-2)                  |
| TTS          | gTTS (Google Text-to-Speech)         |
| Storage      | Local (for MVP), cloud-ready         |

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourname/evoluteme.git
cd evoluteme
````

### 2. Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Add your OpenAI API key in a `.env` file or directly in app.py
python app.py
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 📈 Future Enhancements

* 🌐 Multi-language generation & localization
* 🎧 Voice input prompts
* 📱 PWA (Progressive Web App) support
* 🎓 Public educator-generated tracks
* 🏆 Gamification: badges, streaks, milestones
* 🤝 Shareable playlists/snippets

---

## 🧠 Team

Made by **Maithili Badhan**
MIT Hackathon 2025 — Rapid Application Building Track

---

## 📜 License

This project is licensed under the **MIT License** — feel free to fork, remix, or contribute!
