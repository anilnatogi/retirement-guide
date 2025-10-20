# Setting Up the AI Chat Feature (100% FREE!)

The chat feature uses Google's Gemini AI to answer questions about retirement accounts. The best part? **It's completely FREE** with no credit card required!

## Step 1: Get Your FREE Gemini API Key

1. **Go to Google AI Studio**: https://makersuite.google.com/app/apikey
2. **Sign in** with your Google account (the one you use for Gmail, YouTube, etc.)
3. **Click "Create API Key"**
4. **Copy the key** (you can always come back to see it later)

**That's it!** No credit card, no billing, completely free!

## Step 2: Configure Your API Key

1. **Create a `.env` file** in your project root:
   ```bash
   cp .env.example .env
   ```

2. **Edit the `.env` file** and add your API key:
   ```
   GEMINI_API_KEY=your_actual_api_key_here
   ```

3. **Important**: Never commit the `.env` file to Git! It's already in `.gitignore`

## Step 3: Restart the Server

```bash
npm start
```

You should see: ✅ Gemini AI chat is ready! (100% FREE)

## How to Use the Chat

1. Click the chat button in the bottom-right corner
2. Ask questions like:
   - "What's the difference between Roth IRA and Traditional IRA?"
   - "How much can I contribute to my 401(k)?"
   - "When can I withdraw from my Roth IRA without penalty?"
   - "Which retirement account is best for me?"
   - "I make $75,000 a year, which account should I use?"

## Pricing & Limits

**COMPLETELY FREE!** 🎉

- **No credit card required**
- **No billing whatsoever**
- **60 requests per minute** (way more than you'll need!)
- **Generous daily limits**
- **Perfect for personal projects**

Unlike other AI services, Google Gemini's free tier is truly free with no hidden costs!

## Why Gemini?

- ✅ **100% Free** - No trial period, no credit card
- ✅ **No expiration** - Free tier doesn't expire
- ✅ **Fast responses** - Quick and accurate
- ✅ **Smart AI** - Powered by Google's latest technology
- ✅ **Easy setup** - Just need a Google account

## Security Notes

- Your API key is stored only in your `.env` file (never in code)
- The `.env` file is excluded from Git by `.gitignore`
- When deploying, add the API key as an environment variable in your hosting platform

## Troubleshooting

### Chat not working?
1. Make sure you created the `.env` file (not `.env.example`)
2. Check that your API key is correct
3. Restart the server after adding the key
4. Check the console for error messages

### "Invalid API key" error?
- Your API key might be incorrect
- Make sure you copied the entire key (no spaces)
- Generate a new key from Google AI Studio

### Want to disable chat temporarily?
- Just remove or comment out the `GEMINI_API_KEY` in `.env`
- The website will work, but chat will show an error

## For Deployment (Vercel, Render, etc.)

Add the environment variable in your hosting platform:

**Vercel:**
```bash
vercel env add GEMINI_API_KEY
```

**Render:**
1. Go to your service settings
2. Add environment variable: `GEMINI_API_KEY`
3. Paste your key and save

**Other platforms:**
Follow their documentation for adding environment variables.

---

## Getting Started (Quick Version)

1. Visit: https://makersuite.google.com/app/apikey
2. Click "Create API Key"
3. Copy the key
4. Run: `cp .env.example .env`
5. Paste your key in `.env`
6. Run: `npm start`
7. Enjoy FREE AI chat! 🎉
