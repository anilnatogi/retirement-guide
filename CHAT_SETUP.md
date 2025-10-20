# Setting Up the AI Chat Feature

The chat feature uses Claude AI to answer questions about retirement accounts. Here's how to set it up:

## Step 1: Get Your Anthropic API Key

1. **Go to Anthropic Console**: https://console.anthropic.com/
2. **Sign up** for a free account (or log in if you have one)
3. **Get API credits**:
   - New users get $5 in free credits
   - Each chat conversation costs about $0.003-$0.01
   - Your free credits will last for hundreds of conversations!
4. **Generate an API key**:
   - Click on "API Keys" in the console
   - Click "Create Key"
   - Copy the key (you won't see it again!)

## Step 2: Configure Your API Key

1. **Create a `.env` file** in your project root:
   ```bash
   cp .env.example .env
   ```

2. **Edit the `.env` file** and add your API key:
   ```
   ANTHROPIC_API_KEY=your_actual_api_key_here
   ```

3. **Important**: Never commit the `.env` file to Git! It's already in `.gitignore`

## Step 3: Restart the Server

```bash
npm start
```

You should see: ✅ Claude AI chat is ready!

## How to Use the Chat

1. Click the chat button in the bottom-right corner
2. Ask questions like:
   - "What's the difference between Roth IRA and Traditional IRA?"
   - "How much can I contribute to my 401(k)?"
   - "When can I withdraw from my Roth IRA without penalty?"
   - "Which retirement account is best for me?"

## Pricing

- **Free tier**: $5 in credits (good for ~500-1500 conversations)
- **After free tier**: ~$0.003 per conversation
- **Example**: 1000 conversations = about $3

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
- Your API key might be incorrect or expired
- Generate a new key from the Anthropic console

### Want to disable chat temporarily?
- Just remove or comment out the `ANTHROPIC_API_KEY` in `.env`
- The website will work, but chat will show an error

## For Deployment (Vercel, Render, etc.)

Add the environment variable in your hosting platform:

**Vercel:**
```bash
vercel env add ANTHROPIC_API_KEY
```

**Render:**
1. Go to your service settings
2. Add environment variable: `ANTHROPIC_API_KEY`
3. Paste your key and save

**Other platforms:**
Follow their documentation for adding environment variables.
