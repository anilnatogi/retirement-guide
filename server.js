require('dotenv').config();
const express = require('express');
const path = require('path');
const Anthropic = require('@anthropic-ai/sdk');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Anthropic client
const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
});

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// System prompt for Claude with retirement context
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
        if (!process.env.ANTHROPIC_API_KEY) {
            return res.status(500).json({
                error: 'ANTHROPIC_API_KEY not configured. Please add it to your .env file.'
            });
        }

        // For simplicity, we'll use a single conversation thread
        // In production, you'd want to use session IDs
        let conversationHistory = conversations.get('default') || [];

        // Add user message to history
        conversationHistory.push({
            role: 'user',
            content: message
        });

        // Call Claude API
        const response = await anthropic.messages.create({
            model: 'claude-3-5-sonnet-20241022',
            max_tokens: 1024,
            system: SYSTEM_PROMPT,
            messages: conversationHistory
        });

        const assistantMessage = response.content[0].text;

        // Add assistant response to history
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

        if (error.status === 401) {
            res.status(401).json({
                error: 'Invalid API key. Please check your ANTHROPIC_API_KEY in .env file.'
            });
        } else {
            res.status(500).json({
                error: 'Failed to get response from Claude. Please try again.'
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

    if (!process.env.ANTHROPIC_API_KEY) {
        console.log(`⚠️  WARNING: ANTHROPIC_API_KEY not found in .env file`);
        console.log(`   The chat feature will not work until you add your API key.`);
        console.log(`   Get your API key from: https://console.anthropic.com/`);
    } else {
        console.log(`✅ Claude AI chat is ready!`);
    }

    console.log(`💡 Press Ctrl+C to stop the server`);
});
