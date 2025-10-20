require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Intelligent chat response system - NO API KEY NEEDED!
const chatResponses = {
    greetings: {
        patterns: ['hi', 'hello', 'hey', 'good morning', 'good afternoon'],
        responses: [
            "Hello! I'm here to help you understand retirement savings. What would you like to know about retirement accounts?",
            "Hi there! Feel free to ask me anything about Roth IRAs, Traditional IRAs, 401(k)s, or other retirement accounts!",
        ]
    },
    rothVsTraditional: {
        patterns: ['roth vs traditional', 'difference between roth', 'roth or traditional', 'which ira'],
        response: "Great question! Here's the simple difference:\n\n**Roth IRA**: You pay taxes NOW, but your money grows tax-free forever. When you retire, you take it out TAX-FREE!\n\n**Traditional IRA**: You DON'T pay taxes now (tax deduction), but you pay taxes when you take it out in retirement.\n\n**Quick tip**: If you think you'll be in a higher tax bracket when you retire, choose Roth. If you want to save on taxes today, choose Traditional."
    },
    contributionLimits: {
        patterns: ['how much can i contribute', 'contribution limit', 'maximum contribution', 'how much can i save', 'how much can i put in'],
        response: "Here are the 2024 contribution limits:\n\n**IRAs (Roth & Traditional)**: $7,000/year (or $8,000 if you're 50+)\n\n**401(k) & Roth 401(k)**: $23,000/year (or $30,500 if you're 50+)\n\n**SEP IRA**: Up to 25% of income or $69,000 (whichever is less)\n\nThe extra amount for people 50+ is called a \"catch-up contribution\" to help you save more as you get closer to retirement!"
    },
    rothIRA: {
        patterns: ['what is roth ira', 'tell me about roth', 'roth ira', 'explain roth'],
        response: "**Roth IRA** - One of the BEST retirement accounts!\n\n✅ You pay taxes on money before putting it in\n✅ Your money grows TAX-FREE forever\n✅ When you retire, you take it out 100% TAX-FREE!\n✅ You can take out what you put in anytime (no penalty)\n✅ Great if you're young or expect higher income later\n\n**Limits**: Must earn under $161k (single) or $240k (married) to contribute the full amount. Can save up to $7,000/year ($8,000 if 50+)."
    },
    traditionalIRA: {
        patterns: ['what is traditional ira', 'tell me about traditional', 'traditional ira', 'explain traditional'],
        response: "**Traditional IRA** - Tax savings now, pay later!\n\n✅ Money goes in BEFORE taxes (reduces your taxable income)\n✅ You save on taxes THIS year\n✅ Money grows tax-deferred\n❌ You pay taxes when you take it out in retirement\n\n**Example**: If you put in $7,000, you might save $1,500 on taxes this year!\n\n**Note**: At age 73, you MUST start taking money out (Required Minimum Distributions)."
    },
    fourZeroOneK: {
        patterns: ['what is 401k', 'tell me about 401', '401k', 'explain 401'],
        response: "**401(k)** - Employer retirement plan with BIG limits!\n\n✅ Can save up to $23,000/year ($30,500 if 50+)\n✅ Money goes in BEFORE taxes\n✅ Many employers MATCH your contributions (FREE MONEY!)\n✅ Great way to save a lot for retirement\n\n**Employer Match Example**: If your company matches 50% up to 6% of your salary:\n- You make $50,000\n- You save 6% = $3,000\n- Employer adds $1,500 FREE\n- That's instant 50% return!\n\n**Golden Rule**: Always save enough to get the full employer match!"
    },
    roth401k: {
        patterns: ['roth 401k', 'roth 401', 'what is roth 401'],
        response: "**Roth 401(k)** - Best of both worlds!\n\n✅ HIGH limits like regular 401(k): $23,000/year\n✅ Tax-free withdrawals like Roth IRA\n✅ NO income limits (unlike Roth IRA)\n✅ When you retire, take money out 100% TAX-FREE\n\n**Example**: Save $200k over your career, it grows to $1 million, take out all $1 million TAX-FREE!\n\n**Note**: Your employer must offer this - not all companies do. Ask your HR department!"
    },
    sepIRA: {
        patterns: ['sep ira', 'self employed', 'freelancer retirement', 'own business'],
        response: "**SEP IRA** - Perfect for self-employed & small business owners!\n\n✅ HUGE contribution limits: up to $69,000/year!\n✅ Can contribute up to 25% of your income\n✅ Tax deductible (save on taxes now)\n✅ Flexible - decide how much each year\n\n**Great for**: Freelancers, contractors, small business owners, side hustlers\n\n**Example**: Made $100k this year? You can contribute up to $25,000!"
    },
    earlyWithdrawal: {
        patterns: ['withdraw early', 'take money out early', 'penalty', 'before 59'],
        response: "**Early Withdrawal Rules**:\n\n**Roth IRA**: You can take out what you CONTRIBUTED anytime penalty-free! But the EARNINGS need to wait until 59½.\n\n**Traditional IRA & 401(k)**: 10% penalty + taxes if you withdraw before 59½\n\n**Exceptions (no penalty)**:\n✅ First home purchase (up to $10,000)\n✅ Qualified education expenses\n✅ Medical expenses over 7.5% of income\n✅ Disability\n\n**Tip**: Try not to touch retirement money early - let it grow!"
    },
    taxBenefits: {
        patterns: ['tax', 'taxes', 'tax benefit', 'tax deduction', 'save on taxes'],
        response: "**Tax Benefits Comparison**:\n\n**Tax Break NOW** (Traditional IRA, 401k, SEP IRA):\n- Money goes in BEFORE taxes\n- Reduces your taxable income this year\n- Pay taxes when you retire\n\n**Tax Break LATER** (Roth IRA, Roth 401k):\n- Pay taxes now\n- Money grows tax-free\n- Take it out TAX-FREE in retirement\n\n**Which is better?** If you're young or expect to make more later, Roth is often better. If you want tax savings now, choose Traditional."
    },
    howToStart: {
        patterns: ['how to start', 'how do i open', 'where to open', 'getting started', 'begin'],
        response: "**Getting Started is Easy!**\n\n1. **Choose your account type** (use the dropdown on this page to learn more)\n2. **Pick a provider**: Fidelity, Vanguard, Charles Schwab (all are great!)\n3. **Click the 'Open Account with Fidelity' button** on this page\n4. **Fill out the application** (takes 10-15 minutes)\n5. **Fund your account** - link your bank account\n6. **Start investing!**\n\n**How much to start?** Many places let you start with just $1! \n\n**What to invest in?** Target-date funds are perfect for beginners - they do everything for you!"
    },
    howMuch: {
        patterns: ['how much should i save', 'how much to retire', 'how much do i need'],
        response: "**How Much Should You Save?**\n\n**Quick Rules**:\n- Save at least 15% of your income for retirement\n- Start as early as possible (compound interest is magic!)\n- Always get your full employer match (it's free money!)\n\n**The Power of Starting Early**:\n- Start at 25, save $500/month → $1.4 million at 65\n- Start at 35, save $500/month → $600k at 65\n- Start at 45, save $500/month → $200k at 65\n\n**Tip**: Even $50/month is better than $0! Just start, and increase when you can."
    },
    inheritance: {
        patterns: ['inheritance', 'leave to kids', 'beneficiary', 'what happens when i die', 'pass to children'],
        response: "**Leaving Retirement Accounts to Your Kids**:\n\n**Roth IRA & Roth 401(k)**:\n✅ Your kids inherit it TAX-FREE!\n✅ They must take it out within 10 years\n✅ But pay $0 in taxes - amazing gift!\n\n**Traditional IRA & 401(k)**:\n❌ Your kids pay income taxes when they withdraw\n✅ Can spread withdrawals over 10 years to minimize taxes\n\n**Tip**: Name your beneficiaries! Update them when you have kids, get married, etc."
    },
    bothAccounts: {
        patterns: ['can i have both', 'multiple accounts', '401k and ira', 'more than one'],
        response: "**Yes! You can have MULTIPLE retirement accounts!**\n\nCommon combinations:\n✅ 401(k) at work + Roth IRA\n✅ 401(k) at work + Traditional IRA\n✅ Roth 401(k) + Roth IRA\n\n**Why have both?**\n- Max out 401(k) to get employer match\n- Then contribute to IRA for more options\n- Diversify your tax strategy (some tax-free, some taxed)\n\n**Limits**: Each account has its OWN limit - they don't affect each other!"
    },
    default: {
        response: "I can help you with questions about:\n\n• Roth IRA vs Traditional IRA\n• 401(k) and Roth 401(k)\n• SEP IRA for self-employed\n• Contribution limits\n• Tax benefits\n• Early withdrawals\n• Inheritance rules\n• Getting started\n• How much to save\n\nWhat would you like to know?"
    }
};

// Smart pattern matching function
function findBestResponse(message) {
    const lowerMessage = message.toLowerCase();

    // Check each response category
    for (const [key, data] of Object.entries(chatResponses)) {
        if (key === 'default') continue;

        if (data.patterns) {
            for (const pattern of data.patterns) {
                if (lowerMessage.includes(pattern)) {
                    return data.responses ?
                        data.responses[Math.floor(Math.random() * data.responses.length)] :
                        data.response;
                }
            }
        }
    }

    return chatResponses.default.response;
}

// Chat endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Get intelligent response
        const response = findBestResponse(message);

        // Add a small delay to simulate thinking (makes it feel more natural)
        setTimeout(() => {
            res.json({ response });
        }, 500);

    } catch (error) {
        console.error('Chat error:', error);
        res.status(500).json({
            error: 'Sorry, something went wrong. Please try again!'
        });
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
    console.log(`✅ Smart chat is ready! (NO API KEY NEEDED!)`);
    console.log(`💡 Press Ctrl+C to stop the server`);
});
