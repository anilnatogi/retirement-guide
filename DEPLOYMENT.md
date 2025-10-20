# Deployment Guide - Make Your Website Public!

Your retirement guide website is ready to deploy. Here are the easiest options:

## Option A: Deploy to Vercel (Recommended - Takes 5 Minutes!)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Initialize Git (if not already done)
```bash
git init
git add .
git commit -m "Initial commit - Retirement guide website"
```

### Step 3: Deploy!
```bash
vercel
```

Follow the prompts:
- "Set up and deploy?": **Yes**
- "Which scope?": Choose your account
- "Link to existing project?": **No**
- "What's your project's name?": **retirement-guide** (or whatever you want)
- "In which directory is your code located?": **./** (press Enter)

### Step 4: Done!
Vercel will give you a URL like: `https://retirement-guide.vercel.app`

**To deploy updates later:**
```bash
vercel --prod
```

---

## Option B: Deploy to Render (Also Free & Easy!)

### Step 1: Create a GitHub Account (if you don't have one)
Go to https://github.com and sign up

### Step 2: Create a New Repository
1. Click "New repository"
2. Name it: `retirement-guide`
3. Make it Public
4. Don't initialize with README (we already have files)
5. Click "Create repository"

### Step 3: Push Your Code to GitHub
```bash
git init
git add .
git commit -m "Initial commit - Retirement guide website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/retirement-guide.git
git push -u origin main
```

### Step 4: Deploy on Render
1. Go to https://render.com and sign up (use your GitHub account)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Render will auto-detect the settings from `render.yaml`
5. Click "Create Web Service"

### Step 5: Done!
Your site will be live at: `https://retirement-guide.onrender.com`

**Free tier note:** The site may sleep after 15 minutes of inactivity. It wakes up when someone visits (takes ~30 seconds).

---

## Option C: Deploy to Netlify

### Using Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Or Using Netlify Website:
1. Go to https://netlify.com
2. Sign up
3. Drag and drop your `public` folder
4. Done!

---

## Quick Comparison

| Platform | Setup Time | Free Tier | Best For |
|----------|------------|-----------|----------|
| **Vercel** | 2 min | Yes, unlimited | Fastest setup |
| **Render** | 5 min | Yes, with sleep | Keeps Node.js server |
| **Netlify** | 3 min | Yes, generous | Static sites |

---

## Custom Domain (Optional)

Once deployed, you can add a custom domain like `www.retirementguide.com`:

1. Buy a domain from Namecheap, GoDaddy, or Google Domains (~$10-15/year)
2. In your deployment platform (Vercel/Render/Netlify):
   - Go to Settings → Domains
   - Add your custom domain
   - Update your domain's DNS settings (they'll give you instructions)

---

## Need Help?

If you run into any issues:
1. Make sure you're in the correct directory: `/Users/anilsuma/practice/finance`
2. Make sure Node.js is installed: `node --version`
3. Make sure dependencies are installed: `npm install`

---

## What Happens After Deployment?

Your website will be accessible to ANYONE in the world with the URL. They can:
- Choose retirement accounts from the dropdown
- Learn about eligibility, contribution limits, withdrawals, and inheritance
- Click the Fidelity button to open an account

**You can share the URL with:**
- Friends and family
- Social media
- Email
- Anywhere you want!

The website is completely self-contained and doesn't require any database or backend services - it just works!
