# Simple Retirement Savings Guide

A beautiful, user-friendly website that explains retirement savings accounts in language anyone can understand - even a child!

## Features

- **5 Retirement Accounts Covered:**
  - Roth IRA
  - Traditional IRA
  - 401(k)
  - Roth 401(k)
  - SEP IRA

- **Clear Information on:**
  - Eligibility criteria (who can use it)
  - Contribution limits (how much you can save)
  - Withdrawal rules (when you can take money out)
  - Inheritance rules for children (what happens when you pass away)

- **User-Friendly Design:**
  - Beautiful gradient purple background
  - Easy dropdown selection
  - Clean, readable layout
  - Smooth animations
  - Direct link to open Fidelity account

## How to Run

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
   - Click "Open Account with Fidelity" when ready to start saving!

## Deploy to the Internet (Make it Public!)

Want anyone in the world to access your website? See **[DEPLOYMENT.md](DEPLOYMENT.md)** for step-by-step instructions!

**Quick deploy with Vercel:**
```bash
npm install -g vercel
vercel
```

## Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** Node.js with Express
- **Styling:** Custom CSS with gradients and animations

## Project Structure

```
finance/
├── public/
│   ├── index.html       # Main HTML file
│   ├── styles.css       # All styling
│   └── app.js           # Frontend JavaScript with retirement data
├── server.js            # Express server
├── package.json         # Project dependencies
└── README.md            # This file
```

## Why This Project?

Retirement savings can be confusing, with complicated terms and rules. This website breaks down all the important information into simple, easy-to-understand language that anyone can follow - whether you're new to finance or just want a quick refresher!

## Future Enhancements

- Add a calculator to see how much your savings could grow
- Include comparison charts between different account types
- Add more retirement account options (SIMPLE IRA, 403(b), etc.)
- Multi-language support

## License

ISC

---

Made with care to help people understand retirement savings!
