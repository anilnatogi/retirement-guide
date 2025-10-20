// Retirement account information in simple language
const retirementTools = {
    'roth-ira': {
        name: 'Roth IRA',
        eligibility: `
            <p><strong>Think of it like this:</strong> You need to have a job and earn money to put money in here.</p>
            <p><strong>How much you earn matters:</strong></p>
            <ul>
                <li>If you're single and make less than $146,000 a year (2024) - You're good to go!</li>
                <li>If you make between $146,000 and $161,000 - You can put in some money, but not the full amount</li>
                <li>If you make more than $161,000 - Sorry, this isn't for you</li>
            </ul>
            <p><strong>For married couples:</strong> The limits are $230,000 to $240,000</p>
        `,
        contributionLimits: `
            <p><strong>How much can you save each year?</strong></p>
            <p>If you're under 50 years old: <strong>$7,000 per year</strong> (2024)</p>
            <p>If you're 50 or older: <strong>$8,000 per year</strong> (You get a bonus $1,000!)</p>
            <p><strong>Think of it like a piggy bank:</strong> You can only put this much money in each year. Any more and you'll get in trouble with the tax police!</p>
        `,
        withdrawalRules: `
            <p><strong>The Simple Version:</strong></p>
            <p>You can take out the money you put in <strong>anytime</strong> - no punishment! It's your money!</p>
            <p><strong>But here's the tricky part:</strong></p>
            <p>The <strong>EXTRA money</strong> your savings made (the profit) - you need to wait until:</p>
            <ul>
                <li>You're at least 59½ years old, AND</li>
                <li>The account has been open for at least 5 years</li>
            </ul>
            <p><strong>What happens if you take it out too early?</strong> You pay a 10% penalty (like a fee) plus taxes. Ouch!</p>
            <p><strong>Good news:</strong> Some special situations let you take money out early without penalty - like buying your first home (up to $10,000) or having a baby!</p>
        `,
        inheritanceRules: `
            <p><strong>When you pass away, what happens to your money?</strong></p>
            <p>Your kids (or whoever you pick) get the money!</p>
            <p><strong>The AWESOME news for your kids:</strong> They DON'T have to pay income taxes on it! The money comes to them tax-free!</p>
            <p><strong>The rule they need to follow:</strong></p>
            <p>They must take out ALL the money within 10 years. Think of it like they have to empty the piggy bank within 10 years.</p>
            <p><strong>Why this is GREAT:</strong> If you had $100,000 in there and it's now worth $500,000, your kids get all $500,000 and pay $0 in income taxes! Pretty amazing!</p>
        `
    },
    'traditional-ira': {
        name: 'Traditional IRA',
        eligibility: `
            <p><strong>Good news - Almost everyone can use this!</strong></p>
            <p>You just need to:</p>
            <ul>
                <li>Have a job and earn money</li>
                <li>Be under 73 years old (you used to have to stop at 70½, but they changed it!)</li>
            </ul>
            <p><strong>The tax deduction part (saving on taxes now):</strong></p>
            <p>If you have a retirement plan at work (like a 401k), whether you can save on taxes NOW depends on how much you earn:</p>
            <ul>
                <li>Single and make less than $77,000 - Full tax break!</li>
                <li>Single and make $77,000-$87,000 - Partial tax break</li>
                <li>Single and make more than $87,000 - No tax break (but you can still save money here!)</li>
            </ul>
        `,
        contributionLimits: `
            <p><strong>How much can you save each year?</strong></p>
            <p>Under 50 years old: <strong>$7,000 per year</strong> (2024)</p>
            <p>50 or older: <strong>$8,000 per year</strong> (Bonus $1,000!)</p>
            <p><strong>The cool part:</strong> This money comes out BEFORE taxes, so you save on taxes this year!</p>
            <p><strong>Example:</strong> If you put in $7,000, you might save $1,500 on your taxes right now! It's like getting a discount for saving!</p>
        `,
        withdrawalRules: `
            <p><strong>When can you take money out?</strong></p>
            <p><strong>The basic rule:</strong> Wait until you're 59½ years old</p>
            <p><strong>What happens if you take it out early?</strong> You pay:</p>
            <ul>
                <li>A 10% penalty (like a fee for taking it out too soon)</li>
                <li>PLUS regular taxes on the money</li>
            </ul>
            <p><strong>Important:</strong> When you turn 73, you MUST start taking money out each year. The government says "You've waited long enough, time to use it!"</p>
            <p><strong>Good exceptions:</strong> You can take money out early without the penalty for:</p>
            <ul>
                <li>First home purchase (up to $10,000)</li>
                <li>Big medical bills</li>
                <li>College expenses</li>
            </ul>
            <p><strong>Remember:</strong> You ALWAYS pay regular income tax when you take money out (because you didn't pay it when you put it in!)</p>
        `,
        inheritanceRules: `
            <p><strong>What happens to your money when you pass away?</strong></p>
            <p>Your kids (or whoever you choose) inherit it!</p>
            <p><strong>The tax situation for your kids:</strong></p>
            <p>They WILL have to pay income taxes when they take the money out. Think of it like the tax bill was just delayed.</p>
            <p><strong>The 10-year rule:</strong> They must take out all the money within 10 years</p>
            <p><strong>Example to understand:</strong></p>
            <p>If you have $500,000 in the account, your child inherits all of it. But when they withdraw it, they pay income taxes at their tax rate. If they're in a 24% tax bracket, they'd pay about $120,000 in taxes and keep $380,000.</p>
            <p><strong>Smart tip for your kids:</strong> They can spread the withdrawals over 10 years to avoid paying too much tax in one year!</p>
        `
    },
    '401k': {
        name: '401(k)',
        eligibility: `
            <p><strong>The simple answer:</strong> Your employer (your job) has to offer this to you</p>
            <p>Not everyone's job has a 401(k). It's like asking "Can I join the company sports team?" - only if your company has one!</p>
            <p><strong>Usually you can join if:</strong></p>
            <ul>
                <li>You're at least 21 years old</li>
                <li>You've worked there for a certain time (often 1 year, but some companies let you start right away!)</li>
            </ul>
            <p><strong>Ask your HR department:</strong> "Do we have a 401(k) and can I join?"</p>
        `,
        contributionLimits: `
            <p><strong>This is where 401(k)s are AWESOME - you can save WAY more!</strong></p>
            <p>Under 50 years old: <strong>$23,000 per year</strong> (2024)</p>
            <p>50 or older: <strong>$30,500 per year</strong> (Bonus $7,500!)</p>
            <p><strong>FREE MONEY ALERT!</strong> Many employers "match" your contributions!</p>
            <p><strong>Example:</strong> If your employer matches 50% up to 6% of your salary:</p>
            <ul>
                <li>You make $50,000 a year</li>
                <li>You put in 6% = $3,000</li>
                <li>Your employer adds $1,500 for FREE!</li>
                <li>That's instant 50% return on your money!</li>
            </ul>
            <p><strong>Golden rule:</strong> ALWAYS save at least enough to get the full employer match. It's literally free money!</p>
        `,
        withdrawalRules: `
            <p><strong>When can you take money out?</strong></p>
            <p>Generally, wait until you're 59½ years old</p>
            <p><strong>Take it out early? You'll pay:</strong></p>
            <ul>
                <li>10% penalty</li>
                <li>PLUS regular income taxes</li>
            </ul>
            <p><strong>Special situation:</strong> If you leave your job at age 55 or older, you can access this 401(k) without the penalty!</p>
            <p><strong>At age 73:</strong> You must start taking money out each year (Required Minimum Distributions)</p>
            <p><strong>Still working?</strong> If you're still working at 73 and don't own more than 5% of the company, you can wait to take money out of THAT job's 401(k)!</p>
            <p><strong>Emergency money:</strong> Some 401(k)s let you borrow from yourself, but you have to pay it back with interest - to yourself!</p>
        `,
        inheritanceRules: `
            <p><strong>What happens to your 401(k) when you pass away?</strong></p>
            <p><strong>If you're married:</strong> Usually your spouse automatically gets it (unless you both agree in writing to give it to someone else)</p>
            <p><strong>Your kids inherit it:</strong></p>
            <p>They'll pay income taxes when they withdraw the money (just like you would have)</p>
            <p><strong>The 10-year rule:</strong> They must empty the account within 10 years</p>
            <p><strong>Tax impact example:</strong></p>
            <ul>
                <li>Your 401(k) has $600,000</li>
                <li>Your child inherits it all</li>
                <li>When they take it out, they pay their income tax rate</li>
                <li>If they take it all at once, they might pay 35% tax = $210,000 in taxes!</li>
                <li>If they spread it over 10 years, they might pay only 24% = $144,000 in taxes</li>
            </ul>
            <p><strong>Smart move:</strong> Your kids should take it out slowly over 10 years to pay less tax!</p>
        `
    },
    'roth-401k': {
        name: 'Roth 401(k)',
        eligibility: `
            <p><strong>Just like regular 401(k):</strong> Your employer must offer it</p>
            <p><strong>Not all companies offer Roth 401(k)!</strong> Some only offer regular 401(k)</p>
            <p>Ask your HR: "Do we have a Roth 401(k) option?"</p>
            <p><strong>Usually you can join if:</strong></p>
            <ul>
                <li>You're at least 21 years old</li>
                <li>You've worked there for the required time</li>
            </ul>
            <p><strong>GREAT NEWS:</strong> Unlike Roth IRA, there's NO income limit! Even if you make millions, you can use this!</p>
        `,
        contributionLimits: `
            <p><strong>Same high limits as regular 401(k):</strong></p>
            <p>Under 50: <strong>$23,000 per year</strong> (2024)</p>
            <p>50 or older: <strong>$30,500 per year</strong></p>
            <p><strong>You can even split it!</strong> Do some in regular 401(k) and some in Roth 401(k), just don't go over the total limit</p>
            <p><strong>Employer match:</strong> If your employer matches, that match goes into a regular 401(k) account (not Roth)</p>
            <p><strong>The difference:</strong> With Roth 401(k), you pay taxes NOW on the money you put in, but it grows tax-free forever!</p>
        `,
        withdrawalRules: `
            <p><strong>The beautiful part of Roth 401(k):</strong></p>
            <p>If you wait until you're 59½ AND the account is at least 5 years old - <strong>ALL withdrawals are 100% TAX-FREE!</strong></p>
            <p><strong>Example magic:</strong></p>
            <ul>
                <li>You put in $200,000 over your career</li>
                <li>It grows to $1,000,000</li>
                <li>You take out all $1,000,000 - PAY $0 IN TAXES!</li>
            </ul>
            <p><strong>Early withdrawal?</strong></p>
            <p>The money you put in - you can take out anytime (but check your plan's rules!)</p>
            <p>The growth - wait until 59½ or pay 10% penalty plus taxes on the earnings</p>
            <p><strong>At age 73:</strong> You used to have to take money out, but NEW LAW (2024) - you DON'T have to take Required Minimum Distributions anymore! Let it grow!</p>
        `,
        inheritanceRules: `
            <p><strong>This is where Roth 401(k) is AMAZING for your kids!</strong></p>
            <p>Your kids inherit it <strong>100% TAX-FREE!</strong></p>
            <p><strong>The 10-year rule:</strong> They must take it all out within 10 years</p>
            <p><strong>But here's the AWESOME part:</strong></p>
            <ul>
                <li>They take out the money</li>
                <li>Pay ZERO income taxes!</li>
                <li>Keep every single penny!</li>
            </ul>
            <p><strong>Example that will blow your mind:</strong></p>
            <p>Your Roth 401(k) grows to $1.5 million. Your child inherits it. They take out all $1.5 million over 10 years and pay $0 in federal income taxes on it!</p>
            <p><strong>Compare to regular 401(k):</strong> They'd pay maybe $400,000-$500,000 in taxes!</p>
            <p><strong>This is one of the BEST gifts you can leave your children!</strong></p>
        `
    },
    'sep-ira': {
        name: 'SEP IRA',
        eligibility: `
            <p><strong>This is for people who work for themselves or own a business!</strong></p>
            <p><strong>Think of it as:</strong> The retirement plan for freelancers, self-employed people, and small business owners</p>
            <p><strong>You can use this if:</strong></p>
            <ul>
                <li>You have your own business (even a side hustle!)</li>
                <li>You're a freelancer or contractor</li>
                <li>You own a small company and want to help your employees save too</li>
            </ul>
            <p><strong>Employee requirements (if you have them):</strong></p>
            <ul>
                <li>They're at least 21 years old</li>
                <li>They've worked for you in 3 of the last 5 years</li>
                <li>They made at least $750 in the year (2024)</li>
            </ul>
            <p><strong>The catch:</strong> If you contribute for yourself, you must contribute the same percentage for all eligible employees!</p>
        `,
        contributionLimits: `
            <p><strong>This is where SEP IRA is SUPER POWERFUL - HUGE contribution limits!</strong></p>
            <p>You can put in up to <strong>25% of your income</strong> OR <strong>$69,000</strong> (2024), whichever is LESS</p>
            <p><strong>Example for self-employed person:</strong></p>
            <ul>
                <li>You made $100,000 this year from your business</li>
                <li>You can put in up to $25,000!</li>
            </ul>
            <p><strong>Example for high earner:</strong></p>
            <ul>
                <li>You made $300,000 this year</li>
                <li>25% would be $75,000, BUT the max is $69,000</li>
                <li>So you can put in $69,000!</li>
            </ul>
            <p><strong>The beautiful part:</strong> This comes out before taxes, so it reduces your tax bill THIS year!</p>
            <p><strong>Flexibility:</strong> You can decide each year how much to contribute - don't have to be consistent!</p>
        `,
        withdrawalRules: `
            <p><strong>SEP IRA works just like Traditional IRA for withdrawals:</strong></p>
            <p><strong>The basic rule:</strong> Wait until 59½ years old</p>
            <p><strong>Take it early? You pay:</strong></p>
            <ul>
                <li>10% penalty</li>
                <li>PLUS regular income taxes</li>
            </ul>
            <p><strong>At age 73:</strong> You MUST start taking Required Minimum Distributions each year</p>
            <p><strong>When you take money out:</strong> You pay regular income tax (because you didn't pay tax when you put it in!)</p>
            <p><strong>Exceptions to the penalty:</strong></p>
            <ul>
                <li>First home purchase (up to $10,000)</li>
                <li>Disability</li>
                <li>High medical expenses</li>
                <li>Health insurance premiums if you're unemployed</li>
            </ul>
        `,
        inheritanceRules: `
            <p><strong>What happens when you pass away?</strong></p>
            <p>Your kids (or chosen beneficiaries) inherit the SEP IRA</p>
            <p><strong>Tax impact on your children:</strong></p>
            <p>They pay income taxes when they withdraw the money (just like Traditional IRA and 401(k))</p>
            <p><strong>The 10-year rule applies:</strong> They must take out all money within 10 years</p>
            <p><strong>Example:</strong></p>
            <ul>
                <li>You built up $800,000 in your SEP IRA</li>
                <li>Your child inherits it</li>
                <li>As they withdraw, they pay their income tax rate</li>
                <li>If they're in 24% tax bracket: pay about $192,000 in taxes, keep $608,000</li>
            </ul>
            <p><strong>Smart strategy for your kids:</strong></p>
            <p>Spread withdrawals over the 10 years in low-income years to minimize taxes!</p>
            <p><strong>If they withdraw in a year they have low income:</strong> They might pay only 12% tax instead of 24%!</p>
        `
    }
};

// Get elements
const dropdown = document.getElementById('retirement-tool');
const infoDisplay = document.getElementById('info-display');
const placeholder = document.getElementById('placeholder');
const toolName = document.getElementById('tool-name');
const eligibility = document.getElementById('eligibility');
const contributionLimits = document.getElementById('contribution-limits');
const withdrawalRules = document.getElementById('withdrawal-rules');
const inheritanceRules = document.getElementById('inheritance-rules');

// Handle dropdown change
dropdown.addEventListener('change', function() {
    const selectedTool = this.value;

    if (selectedTool === '') {
        // Show placeholder, hide info
        placeholder.classList.remove('hidden');
        infoDisplay.classList.add('hidden');
    } else {
        // Hide placeholder, show info
        placeholder.classList.add('hidden');
        infoDisplay.classList.remove('hidden');

        // Populate information
        const tool = retirementTools[selectedTool];
        toolName.textContent = tool.name;
        eligibility.innerHTML = tool.eligibility;
        contributionLimits.innerHTML = tool.contributionLimits;
        withdrawalRules.innerHTML = tool.withdrawalRules;
        inheritanceRules.innerHTML = tool.inheritanceRules;

        // Smooth scroll to info
        infoDisplay.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});
