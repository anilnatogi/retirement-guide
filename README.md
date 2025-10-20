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

### 🤖 AI Chat Assistant (NEW!)
  - Powered by Claude AI
  - Ask questions about retirement accounts in natural language
  - Get personalized answers about contribution limits, tax implications, and more
  - Chat remembers conversation context
  - Beautiful chat interface with typing indicators

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

## 🤖 Setting Up AI Chat (Optional but Recommended!)

The AI chat feature requires an Anthropic API key. Don't worry - it's free to get started!

1. **Get your API key** (takes 2 minutes):
   - Go to https://console.anthropic.com/
   - Sign up for free (get $5 in credits!)
   - Create an API key

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

**Note:** The website works without the chat feature, but you'll get much more value with it!

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
- **AI:** Anthropic Claude 3.5 Sonnet
- **Styling:** Modern CSS with Inter font, gradients, and smooth animations
- **APIs:** Anthropic Messages API

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
