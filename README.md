# AI.INSIGHTS // Neural Protocol 3.0

A premium, high-performance portal exploring the frontier of Artificial Intelligence. This project features a sophisticated "Deep Nebula" aesthetic, a directory of 100+ AI tools, and a secure AI Assistant powered by Google's Gemini Pro.

## 🚀 Features

- **Deep Nebula Theme:** A high-end UI built with Tailwind CSS, featuring glassmorphism, mesh gradients, and smooth animations.
- **100+ AI Directory:** A massive, categorized collection of industry-leading AI architectures.
- **AI Chat Terminal:** A secure, terminal-style interface for real-time inference with Gemini Pro.
- **Node.js Backend:** Robust Express server handling API security, rate limiting, and system prompts.
- **Responsive Design:** Optimized for seamless performance across all devices.

## 🛠️ Tech Stack

- **Frontend:** HTML5, Tailwind CSS, Plus Jakarta Sans.
- **Backend:** Node.js, Express.js.
- **AI Engine:** Google Generative AI (Gemini Pro).
- **Security:** Dotenv for credential management, CORS for secure cross-origin requests.

## 🔧 Installation & Setup

### 1. Prerequisites
- [Node.js](https://nodejs.org/) installed.
- A [Google Gemini API Key](https://aistudio.google.com/).

### 2. Backend Configuration
Navigate to the backend directory and install dependencies:
```bash
cd backend
npm install
```
Create a `.env` file in the `backend/` folder:
```env
GEMINI_API_KEY=your_actual_api_key_here
PORT=8000
```

### 3. Running the Project
Start the backend server:
```bash
node server.js
```
Now, simply open `frontend/index.html` in your preferred browser.

## 📂 Project Structure

```text
├── backend/
│   ├── server.js       # Express server & Gemini integration
│   ├── package.json    # Backend dependencies
│   └── .env            # Private API keys (git-ignored)
└── frontend/
    ├── index.html      # Main Landing Page
    ├── aisites.html    # 100+ Tool Directory
    ├── chatbot.html    # AI Chat Terminal
    └── assets/         # UI Styles & Images
```

## 📜 License
This project is for educational purposes. All neural architectures referenced belong to their respective owners.

---
**AI.INSIGHTS // BUILT FOR THE FUTURE**
