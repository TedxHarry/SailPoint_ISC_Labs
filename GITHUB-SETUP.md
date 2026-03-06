# GitHub Setup Instructions

## Quick Steps to Push to GitHub

### Option 1: Using GitHub Web Interface (Easiest)

1. **Go to GitHub:** https://github.com/new
2. **Create new repository:**
 - Repository name: `SailPoint_ISC_Labs`
 - Description: "Complete hands-on learning curriculum for SailPoint ISC from beginner to professional"
 - Visibility: **Public**
 - **DO NOT** initialize with README (we have our own)
 - Click: **Create repository**

3. **After creation, you'll see commands. Copy the HTTPS URL** (looks like `https://github.com/TedxHarry/SailPoint_ISC_Labs.git`)

4. **In your terminal, run:**
```bash
cd "C:/Users/punna/Videos/Github Learning/SailPoint_ISC_Labs"
git remote add origin https://github.com/TedxHarry/SailPoint_ISC_Labs.git
git branch -M main
git push -u origin main
```

5. **When prompted for password:**
 - If using HTTPS: Use your GitHub personal access token (not password)
 - Generate token at: https://github.com/settings/tokens

---

### Option 2: Using SSH (If you have SSH key set up)

```bash
cd "C:/Users/punna/Videos/Github Learning/SailPoint_ISC_Labs"
git remote add origin git@github.com:TedxHarry/SailPoint_ISC_Labs.git
git branch -M main
git push -u origin main
```

---

## Step-by-Step Instructions

### Step 1: Create Repository on GitHub

1. Open browser → Go to https://github.com/new
2. Fill in form:
 - **Repository name:** `SailPoint_ISC_Labs`
 - **Description:** "Complete hands-on learning curriculum for SailPoint ISC: beginner to professional level with labs, test data, and certification alignment"
 - **Public or Private:** Select **Public**
 - **Initialize this repository with:**
 - ☐ DO NOT check "Add a README file" (we have one)
 - ☐ DO NOT check ".gitignore"
 - ☐ DO NOT check "Choose a license"
3. Click: **[Create repository]** button
4. You'll see a success page with instructions

### Step 2: Copy the Repository URL

On the GitHub success page, you'll see a section "Quick setup".

**Choose HTTPS (easier):**
```
https://github.com/TedxHarry/SailPoint_ISC_Labs.git
```

Copy this URL.

### Step 3: Add Remote and Push

Open Command Prompt or PowerShell:

```bash
# Navigate to your local repository
cd "C:/Users/punna/Videos/Github Learning/SailPoint_ISC_Labs"

# Add remote (replace with your URL if different)
git remote add origin https://github.com/TedxHarry/SailPoint_ISC_Labs.git

# Rename branch to main (GitHub default)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 4: Authenticate (if needed)

If prompted for username/password:
- **Username:** `TedxHarry`
- **Password:** Use your GitHub Personal Access Token, NOT your password
 - Create token at: https://github.com/settings/tokens
 - Need: `repo` scope
 - Copy token and paste when prompted

### Step 5: Verify

Go to: https://github.com/TedxHarry/SailPoint_ISC_Labs

You should see:
- All your files (README.md, TABLE-OF-CONTENTS.md, etc.)
- SAMPLE-LABS folder
- TEST-DATA folder
- SETUP-GUIDES folder
- SERIES-PROMPT.md

---

## Troubleshooting

### "fatal: not a git repository"
- Make sure you're in the correct directory
- Run: `cd "C:/Users/punna/Videos/Github Learning/SailPoint_ISC_Labs"`

### "Authentication failed"
- Make sure you're using a GitHub Personal Access Token, not your password
- Create one at: https://github.com/settings/tokens
- Use `repo` scope

### "Repository already exists"
- You may have already pushed
- Check: https://github.com/TedxHarry/SailPoint_ISC_Labs

### "fatal: remote origin already exists"
- The remote is already configured
- You can just push: `git push -u origin main`

---

## After Pushing

Once successfully pushed:

1. **Verify on GitHub:**
 - Go to your repository URL
 - All files should be visible
 - README shows with proper formatting

2. **Update local tracking:**
 - You're now tracking `main` branch
 - Future commits: `git push` (no -u needed)

3. **Next steps:**
 - Start writing Unit 1 modules
 - Create branch for each unit or module
 - Commit and push regularly

---

## Git Workflow for Ongoing Development

For each new module:

```bash
# Create a new branch for the module
git checkout -b unit-1-module-1

# Make changes, add files
git add .

# Commit
git commit -m "Add Unit 1 Module 1: Introduction to ISC"

# Push branch
git push origin unit-1-module-1

# Create Pull Request on GitHub (optional)
# Then merge to main
```

---

Need help? Check your git status:

```bash
git status
```

This shows:
- Current branch
- What files are changed
- What's staged for commit
