const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Load environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Configure Gemini
console.log('Initializing Gemini with model: gemini-pro');
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// Endpoint for chat
app.post('/api/chat', async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {
        console.log(`Processing message: "${message.substring(0, 50)}..."`);
        const result = await model.generateContent(
            `You are a helpful AI assistant for an AI educational website. Question: ${message}`
        );
        const responseText = result.response.text();
        res.json({ response: responseText });
    } catch (error) {
        console.error('Gemini API Error:', error);
        res.status(500).json({ error: 'Failed to generate content from AI' });
    }
});

app.listen(PORT, () => {
    console.log(`Backend server is running on http://127.0.0.1:${PORT}`);
});
