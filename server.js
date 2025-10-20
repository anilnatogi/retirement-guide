require('dotenv').config();
const express = require('express');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Gemini client
let genAI;
let model;

if (process.env.GEMINI_API_KEY) {
    genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    model = genAI.getGenerativeModel({ model: 'gemini-pro' });
}

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// System prompt for Gemini with retirement context
const SYSTEM_PROMPT = `You are a friendly, knowledgeable retirement planning assistant. You help people understand retirement savings accounts in simple, easy-to-understand language.

You have expertise in:
- Roth IRA
- Traditional IRA
- 401(k)
- Roth 401(k)
- SEP IRA

For each account type, you know:
- Eligibility criteria
- Contribution limits (2024 values)
- Withdrawal rules
- Tax implications
- Inheritance and beneficiary rules

Important guidelines:
1. Explain concepts in very simple language, as if talking to someone new to finance
2. Use examples with actual dollar amounts when helpful
3. Be encouraging and positive about saving for retirement
4. If you're not 100% certain about specific numbers or rules, acknowledge it
5. Remind users that tax laws can change and they should verify current year limits
6. For complex situations, suggest consulting with a financial advisor
7. Keep responses concise but comprehensive (2-4 paragraphs max unless asked for more detail)

Always be helpful, friendly, and make retirement planning feel accessible!`;

// Store conversation history per session (in production, use a proper session store)
const conversations = new Map();

// Chat endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Check if API key is configured
        if (!process.env.GEMINI_API_KEY) {
            return res.status(500).json({
                error: 'GEMINI_API_KEY not configured. Please add it to your .env file.'
            });
        }

        // For simplicity, we'll use a single conversation thread
        // In production, you'd want to use session IDs
        let conversationHistory = conversations.get('default') || [];

        // Build the full conversation context for Gemini
        let fullPrompt = SYSTEM_PROMPT + '\n\n';

        // Add previous conversation history
        conversationHistory.forEach(msg => {
            fullPrompt += `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}\n\n`;
        });

        // Add current user message
        fullPrompt += `User: ${message}\n\nAssistant:`;

        // Call Gemini API
        const result = await model.generateContent(fullPrompt);
        const response = await result.response;
        const assistantMessage = response.text();

        // Add user message and assistant response to history
        conversationHistory.push({
            role: 'user',
            content: message
        });

        conversationHistory.push({
            role: 'assistant',
            content: assistantMessage
        });

        // Keep only last 10 messages to avoid token limits
        if (conversationHistory.length > 10) {
            conversationHistory = conversationHistory.slice(-10);
        }

        // Update conversation history
        conversations.set('default', conversationHistory);

        res.json({ response: assistantMessage });

    } catch (error) {
        console.error('Chat API error:', error);

        if (error.message && error.message.includes('API_KEY')) {
            res.status(401).json({
                error: 'Invalid API key. Please check your GEMINI_API_KEY in .env file.'
            });
        } else {
            res.status(500).json({
                error: 'Failed to get response from Gemini. Please try again.'
            });
        }
    }
});

// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`🌟 Retirement Guide Server is running!`);
    console.log(`📍 Open your browser and go to: http://localhost:${PORT}`);

    if (!process.env.GEMINI_API_KEY) {
        console.log(`⚠️  WARNING: GEMINI_API_KEY not found in .env file`);
        console.log(`   The chat feature will not work until you add your API key.`);
        console.log(`   Get your FREE API key from: https://makersuite.google.com/app/apikey`);
    } else {
        console.log(`✅ Gemini AI chat is ready! (100% FREE)`);
    }

    console.log(`💡 Press Ctrl+C to stop the server`);
});
