# Simple Retirement Savings Guide

A beautiful, modern website that explains retirement savings accounts in language anyone can understand - even a child! Now with AI-powered chat support.

## ✨ Features

### 📊 5 Retirement Accounts Covered
  - Roth IRA
  - Traditional IRA
  - 401(k)
  - Roth 401(k)
  - SEP IRA

### 📚 Clear Information on:
  - Eligibility criteria (who can use it)
  - Contribution limits (how much you can save)
  - Withdrawal rules (when you can take money out)
  - Inheritance rules for children (what happens when you pass away)

### 🎨 Modern UI Design:
  - Sleek glassmorphism effects
  - Beautiful gradient backgrounds
  - Inter font for clean typography
  - Smooth animations and transitions
  - Mobile-responsive design
  - Easy dropdown selection
  - Direct link to open Fidelity account

### 🤖 AI Chat Assistant (NEW!) - 100% FREE!
  - Powered by Google Gemini AI (completely free, no credit card needed!)
  - Ask questions about retirement accounts in natural language
  - Get personalized answers about contribution limits, tax implications, and more
  - Chat remembers conversation context
  - Beautiful chat interface with typing indicators
  - No cost, no limits for personal use!

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

4. **Use the website:**
   - Select a retirement account from the dropdown
   - Read the simple explanations
   - Click the chat button to ask questions
   - Click "Open Account with Fidelity" when ready to start saving!

## 🤖 Setting Up AI Chat (100% FREE!)

The AI chat feature uses Google Gemini - **completely free, no credit card required!**

1. **Get your FREE API key** (takes 1 minute):
   - Go to https://makersuite.google.com/app/apikey
   - Sign in with your Google account
   - Click "Create API Key"
   - Copy it!

2. **Configure the key**:
   ```bash
   cp .env.example .env
   # Edit .env and add your API key
   ```

3. **Restart the server**:
   ```bash
   npm start
   ```

See **[CHAT_SETUP.md](CHAT_SETUP.md)** for detailed instructions!

**Note:** The website works without the chat feature, but the AI chat makes it SO much better - and it's FREE!

## Deploy to the Internet (Make it Public!)

Want anyone in the world to access your website? See **[DEPLOYMENT.md](DEPLOYMENT.md)** for step-by-step instructions!

**Quick deploy with Vercel:**
```bash
npm install -g vercel
vercel
```

## 🛠️ Technology Stack

- **Frontend:** HTML5, CSS3 (Glassmorphism), JavaScript
- **Backend:** Node.js with Express
- **AI:** Google Gemini Pro (100% FREE!)
- **Styling:** Modern CSS with Inter font, gradients, and smooth animations
- **APIs:** Google Generative AI API

## 📁 Project Structure

```
finance/
├── public/
│   ├── index.html       # Main HTML with chat interface
│   ├── styles.css       # Modern CSS with glassmorphism
│   ├── app.js           # Retirement account data and logic
│   └── chat.js          # Chat UI controller
├── server.js            # Express server with Claude API integration
├── package.json         # Project dependencies
├── .env.example         # Environment variables template
├── .gitignore           # Git ignore rules
├── README.md            # This file
├── CHAT_SETUP.md        # AI chat setup guide
└── DEPLOYMENT.md        # Deployment instructions
```

## 💡 Why This Project?

Retirement savings can be confusing, with complicated terms and rules. This website breaks down all the important information into simple, easy-to-understand language that anyone can follow - whether you're new to finance or just want a quick refresher!

**Now with AI chat**, you can ask specific questions about your situation and get personalized guidance in real-time!

## 🎯 Example Chat Questions

- "What's the difference between Roth IRA and Traditional IRA?"
- "I make $80,000 a year. Which retirement account should I use?"
- "Can I have both a 401(k) and an IRA?"
- "How much should I save for retirement at age 30?"
- "What happens if I withdraw early from my Roth IRA?"
- "How do taxes work with a Traditional 401(k)?"

## 🚀 Future Enhancements

- ✅ ~~AI-powered chat assistant~~ (Completed!)
- ✅ ~~Modern UI with glassmorphism~~ (Completed!)
- Add a retirement savings calculator
- Include comparison charts between different account types
- Add more retirement account options (SIMPLE IRA, 403(b), etc.)
- Multi-language support
- Save chat history across sessions
- Add voice input for questions

## License

ISC

---

Made with care to help people understand retirement savings!
