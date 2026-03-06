# 1.1 - Introduction to SailPoint Identity Security Cloud

**Unit:** ISC Fundamentals | **Tier:** 1 | 

---

## 🎯 Learning Objectives

By the end of this module, you will be able to:
- Navigate the SailPoint ISC user interface confidently
- Understand the core purpose of ISC in identity governance
- Identify the four main modules (Access Modeling, Lifecycle, Compliance, Analytics)
- Distinguish ISC from on-premises IdentityIQ
- Explore your ISC sandbox and identify key sections

---

## 📋 Prerequisites

**Knowledge Required:**
- Basic computer skills and web browser navigation
- No previous ISC or identity management experience required
- Understanding of basic concepts: users, groups, access

**Access Required:**
- [ ] ISC sandbox access (from Identity University enrollment)
- [ ] Working web browser (Chrome, Edge, Firefox, Safari)
- [ ] Stable internet connection

**Difficulty:** Beginner

---

## 🔍 CONTEXT & BUSINESS SCENARIO

**Scenario:** Contoso Ltd (Small Organization)

**Business Background:**
Contoso Ltd is a 50-person professional services firm with Finance, HR, Engineering, and Operations departments. Currently, their user access is managed manually across multiple systems (Active Directory, Salesforce, a custom Finance app, and an HRIS system). When new employees join, it takes 3-5 days to manually provision access to all systems. When employees move departments, access is often not cleaned up, creating compliance risk. Leadership has decided to implement SailPoint Identity Security Cloud to automate these processes and ensure compliance.

As the identity admin beginning this implementation, your first task is to understand what ISC is and how it will help Contoso solve these problems.

**What You'll Be Doing:**
In this lab, you'll explore your ISC sandbox for the first time, tour the interface, understand the core modules, and complete some basic navigation tasks. This is your first hands-on experience with ISCthe starting point for building professional expertise.

---

## 📚 CONCEPTUAL FOUNDATION

### Core Concept 1: What is SailPoint Identity Security Cloud (ISC)?

**Definition:**
SailPoint Identity Security Cloud is a cloud-native, multi-tenant Software-as-a-Service (SaaS) platform that enables organizations to govern user identities, manage access rights, enforce compliance policies, and automate provisioning/deprovisioning across all business systems.

**Why It Matters:**
Without ISC, Contoso manually manages accessa slow, error-prone process that creates security risks and compliance violations. ISC automates these processes, reducing onboarding time from days to minutes, ensuring access reviews happen regularly, and providing audit trails for compliance.

**In ISC Context:**
When you log into ISC, you're accessing a cloud-hosted system shared by thousands of customers. You don't need to install software or manage servers. ISC automatically updates with new features without your involvement.

**Example:**
When finance_user1 is hired at Contoso, instead of manually creating accounts in Entra ID, Finance App, and HRIS, ISC automatically provisions access to all three systems based on her Finance department rolea process that takes minutes instead of days.

### Core Concept 2: Identity Governance

**Definition:**
Identity governance is the process of ensuring the right people have the right access to the right resources at the right time, and that access is continuously reviewed and managed.

**Why It Matters:**
At Contoso, several Finance employees have access to both "Approve Payments" and "Sign Checks" in the Finance appa conflict that creates risk of fraud. ISC enforces policies to prevent such conflicts and automatically detects them during reviews.

**In ISC Context:**
ISC provides tools for access certification (reviews), policy enforcement (preventing conflicts), and governance workflows (approvals).

**Example:**
An access certification in ISC allows the Finance Manager to review all Finance team members' access and revoke anything that shouldn't be therea task that happens automatically on a schedule.

### Core Concept 3: The Four Core Modules

**Definition:**
ISC is built on four primary modules: **Access Modeling** (design roles), **Lifecycle Management** (automate join/move/leave), **Compliance Management** (policy enforcement and reviews), and **Analytics** (insights into access patterns).

**Why It Matters:**
Each module solves a different part of Contoso's identity problem. Together, they create a complete identity governance solution.

**In ISC Context:**
When you log into ISC, you'll see these four areas prominently featured. Most of your work will involve one of these modules.

**Example:**
- **Access Modeling:** Contoso defines "Finance_AP_Clerk" role with specific permissions
- **Lifecycle:** When new finance clerk hired, ISC auto-assigns that role
- **Compliance:** Annual access review ensures all Finance team members should have their access
- **Analytics:** Dashboard shows 2 people have excessive access and 5 access requests are pending

### Core Concept 4: ISC vs IdentityIQ (On-Premises)

**Definition:**
IdentityIQ (IIQ) is an on-premises identity platform requiring significant infrastructure and customization. ISC is cloud-native, SaaS, and configuration-focused.

**Why It Matters:**
ISC eliminates infrastructure overheadyou don't manage servers, databases, or patches. This is especially important for smaller organizations like Contoso that don't have large identity teams.

**In ISC Context:**
Everything you do in ISC is configuration, not coding. No need to know Java or write connectors (though advanced users can extend ISC with APIs).

**Example:**
With IdentityIQ, Contoso would need to: buy servers, hire infrastructure team, perform database maintenance, manually upgrade software. With ISC, Contoso configures access models and policiesSailPoint handles everything else.

---

## 🧪 HANDS-ON LAB

### Pre-Lab Checklist

Before starting, verify:
- [ ] You have ISC sandbox access (email with access details)
- [ ] You have a working web browser (Chrome recommended)
- [ ] You have internet connectivity
- [ ] You have 2-3 hours available for this session
- [ ] You have a notepad or Word doc to save important info

### Lab Scenario

**Given:**
- You have a new ISC sandbox with zero configuration
- Your Entra ID test users have NOT yet been imported (that's a future lab)
- You're the sole admin of this tenant

**Task:**
Navigate and explore your ISC sandbox to understand its structure, main features, and how the interface is organized. Complete several basic UI tasks to build confidence.

**Expected Outcome:**
- You understand ISC's main navigation areas
- You can identify the four core modules
- You know where key features like "Search" and "Identities" are located
- You feel comfortable navigating the ISC interface

---

## 📍 STEP-BY-STEP INSTRUCTIONS

### STEP 1: Log Into Your ISC Sandbox

**Context:** This is your first time accessing ISC. You'll need your sandbox credentials.

**Actions:**

1. **Open your web browser**
   - Open Chrome, Edge, Firefox, or Safari
   - Do NOT use Internet Explorer (too old, won't work)

2. **Navigate to your ISC sandbox URL**
   - Check your ISC onboarding email for "Sandbox Access" link
   - Should look like: `https://[your-org].identitynow.com` or similar
   - Click the link OR copy/paste into address bar
   - Expected: You see ISC login page with username/password fields

3. **Enter your credentials**
   - **User principal name:** [Email address from onboarding email]
   - **Password:** [Temporary password from onboarding email]
   - Click: **[Sign In]** button
   - Expected: You see "Loading..." briefly, then ISC dashboard appears
   - Note: First login may take 30-45 seconds

4. **If prompted for Multi-Factor Authentication (MFA)**
   - Check email for verification code OR
   - Use authenticator app if configured
   - Enter code in MFA prompt
   - Click: **[Verify]**
   - Expected: You proceed to ISC dashboard

**Troubleshooting (for this step):**
- **If:** You see "Invalid credentials" error → **Then:** Double-check you copied email/password correctly from onboarding email. Try again. If still fails after 3 attempts, wait 10 minutes (account lockout protection).
- **If:** You don't see the login page → **Then:** Verify you're using the correct sandbox URL from your onboarding email. Bookmark it for future use.
- **If:** ISC loads but says "Loading..." for >1 minute → **Then:** Refresh the page (Ctrl+R or Cmd+R). If problem persists, try different browser.

### STEP 2: Understand the ISC Dashboard

**Context:** When you first log in, you see the ISC dashboard. This is your "home base." Let's understand what you're seeing.

**Actions:**

1. **Look at the main dashboard page**
   - You'll see several sections:
     - Top bar (with logo, search bar, user profile icon)
     - Left sidebar (navigation menu)
     - Main content area (shows dashboard/widgets)
   - Don't click anything yet, just observe

2. **Identify the left sidebar navigation**
   - Look at the **left side** of the screen
   - You should see menu items like:
     - Search
     - Identities
     - Access
     - Reports
     - Administration
     - [Other items]
   - **Count how many main menu items** you see
   - Note down any that look interesting

3. **Find the main dashboard widgets**
   - In the center of the screen, you should see **cards/boxes** showing:
     - Number of identities ("X identities in your system")
     - Tasks or requests ("X pending requests")
     - Access insights or charts
     - Recent activity
   - These widgets may be empty (that's okay, you have no data yet)

4. **Locate the top bar**
   - At the very top, you should see:
     - SailPoint logo (left side)
     - Search bar in the middle
     - Your user profile icon (right side - usually a circle with initials)
   - This top bar is available on every page

**Expected Visual:**
```
┌─────────────────────────────────────────────────┐
│ SailPoint Logo    [Search Bar]    [Profile 👤] │  ← TOP BAR
├──────────────┬───────────────────────────────────┤
│              │                                   │
│ ☰ Search    │    DASHBOARD                      │
│   Identities │    ┌──────────────────────────┐  │
│   Access    │    │ 0 Identities             │  │  ← WIDGETS
│   Reports   │    │ 0 Pending Tasks          │  │
│   Admin     │    │ 0 Access Violations      │  │
│              │    └──────────────────────────┘  │
│              │                                   │
└──────────────┴───────────────────────────────────┘

LEFT SIDEBAR      MAIN CONTENT AREA
```

**Troubleshooting (for this step):**
- **If:** Dashboard looks different than described → **Then:** That's okay! ISC UI updates over time. Look for similar concepts: navigation on left, search at top, dashboard in center.
- **If:** Left sidebar is collapsed → **Then:** Click the **hamburger menu icon** (☰) to expand it.

### STEP 3: Explore the Search Feature

**Context:** Search is the most-used feature in ISC. It lets you find identities, accounts, entitlements, and more.

**Actions:**

1. **Locate the Search bar**
   - At the **top center** of the page, you'll see a text box that says "Search"
   - Click: On this search box
   - Expected: Search box becomes active (you can see cursor)

2. **See search suggestion**
   - Type: `user` (just the word "user")
   - You should see a dropdown with search types:
     - Identity
     - Account
     - Entitlement
     - Access Profile
     - [Others]
   - Don't click anything yet, just observe

3. **Perform a simple search**
   - In the search box, type: `finance`
   - Press: **Enter** key
   - Expected: Search results page loads showing identities/accounts matching "finance"
   - Note: Results may be empty right now (no data imported yet) - that's okay

4. **Navigate back to dashboard**
   - Click: **SailPoint logo** (top-left) OR
   - Click: **"Dashboard"** in left sidebar
   - Expected: You return to the main dashboard

**Troubleshooting (for this step):**
- **If:** Search doesn't work → **Then:** Refresh the page and try again.
- **If:** Search returns "No results found" → **Then:** That's expectedyou haven't imported any identities yet. We'll do that in future labs.

### STEP 4: Identify the Four Core Modules

**Context:** ISC has four main product modules. Let's find where each one is in the interface.

**Actions:**

1. **Find Access Modeling features**
   - In left sidebar, click: **"Access"** or **"Governance"** menu item
   - Look for sub-items like:
     - Roles
     - Access Profiles
     - Role Recommendations
   - Click: **"Roles"** (if visible)
   - Expected: You see a Roles page (probably empty)
   - **Note:** This is the Access Modeling module

2. **Find Lifecycle Management features**
   - Look in left sidebar for:
     - Lifecycle
     - Identity Profiles
     - Identity Creation Rules
   - If you see these items, click one to explore
   - **Note:** This is the Lifecycle Management module

3. **Find Compliance Management features**
   - Look in left sidebar for:
     - Compliance
     - Certifications
     - Access Reviews
     - Policies
   - Click: **"Certifications"** (if visible)
   - Expected: You see certifications page (empty for now)
   - **Note:** This is the Compliance Management module

4. **Find Analytics features**
   - In left sidebar, click: **"Reports"** or **"Analytics"**
   - Expected: You see a Reports page with charts/dashboards
   - Look for items like:
     - Identity Analytics
     - Access Risk Dashboard
     - Compliance Dashboard
   - **Note:** This is the Analytics module

5. **Document what you found**
   - Create a simple list in notepad:
     ```
     ISC MODULES FOUND:
     ✓ Access Modeling: Located in [Left Sidebar > ...]
     ✓ Lifecycle Mgmt: Located in [Left Sidebar > ...]
     ✓ Compliance Mgmt: Located in [Left Sidebar > ...]
     ✓ Analytics: Located in [Left Sidebar > ...]
     ```

**Troubleshooting (for this step):**
- **If:** You can't find some modules → **That's okay!** Different ISC tenants may have different menu structures. Look for the concepts (Roles for Access Modeling, Reviews for Compliance, etc.)
- **If:** Menu items have different names → **That's fine!** The important thing is understanding the concepts, not exact naming.

### STEP 5: Explore Administration Settings

**Context:** As the admin, you need to know where to configure ISC. Let's find the administration area.

**Actions:**

1. **Navigate to Administration**
   - Click: **"Administration"** in left sidebar
   - Expected: Admin dashboard loads
   - You should see sections like:
     - Tenants
     - Identity Sources
     - Applications
     - Users
     - System

2. **Look at Tenants section**
   - Under Administration, find and click: **"Tenants"** or **"System Settings"**
   - Expected: You see your ISC tenant information
   - Look for details like:
     - Tenant name
     - Org name
     - Status
   - Note down: Your tenant name/ID

3. **Explore Users section**
   - Under Administration, find and click: **"Users"**
   - Expected: You see a list of ISC users (probably just you)
   - Look for:
     - Your user account
     - Your email
     - Your role (probably "Admin")

4. **Look at System settings**
   - Under Administration, find and click: **"System"** or **"Settings"**
   - Explore available options (don't change anything)
   - You should see:
     - Logging settings
     - API configuration
     - Audit settings
     - Other infrastructure items

5. **Return to Dashboard**
   - Click: **"Dashboard"** in left sidebar
   - You're back at the main page

**Troubleshooting (for this step):**
- **If:** You don't see Administration menu → **Then:** You may not have admin permissions. Ask your ISC administrator to grant you admin access.
- **If:** Administration section is different → **Then:** That's expecteddifferent ISC versions may differ. The important thing is finding where configuration happens.

### STEP 6: Test the Top Navigation Bar

**Context:** The top bar is always available. Let's make sure we understand how to use it.

**Actions:**

1. **Use the Search Bar (top center)**
   - Click: The search box at very top center
   - Type: `admin`
   - Look for dropdown showing search options
   - Press: **Escape** to close (don't perform search)

2. **Access Your Profile (top right)**
   - Click: Your profile icon (circle with initials, top-right corner)
   - Expected: Menu appears showing:
     - Your name
     - Your email
     - "Settings" or "My Settings"
     - "Sign Out"
   - Click: **"Settings"** (if available)
   - Explore your user settings page
   - Click: Back button or navigate away

3. **Look for Help/Support (if visible)**
   - Some sandboxes show help icon in top bar
   - If you see a **?** or **Help** icon, click it
   - Expected: Help menu appears with links to:
     - Documentation
     - Support
     - Community
   - If it appears, note the links

4. **Return to Dashboard**
   - Click: **SailPoint Logo** (top-left)
   - Expected: You're back at dashboard

**Troubleshooting (for this step):**
- **If:** Profile menu doesn't appear → **Then:** Try clicking a bit lower or to the left of where you clicked.
- **If:** Icons look different → **That's okay.** ISC regularly updates its interface. Look for similar functionality.

---

## ✅ VALIDATION & EXPECTED RESULTS

After completing all steps, you should have achieved:

| Check | Expected Result | How to Verify |
|-------|-----------------|---------------|
| **Logged in successfully** | You can see ISC dashboard | You're on a page with widgets/cards showing |
| **Found Search feature** | Can access search bar at top | Click search bar and see dropdown options |
| **Located 4 modules** | Found Access, Lifecycle, Compliance, Analytics areas | You have locations written down for each |
| **Explored Admin section** | Found Administration panel | You can navigate to Admin and back |
| **Understand navigation** | Can navigate using top bar and sidebar | You can move between pages without getting lost |

### Success Criteria

You have successfully completed this lab if:
- ☑️ You can log into ISC sandbox without assistance
- ☑️ You understand the layout: left sidebar (navigation), top bar (search/profile), main area (content)
- ☑️ You can identify where the four core modules are located (even if menus look slightly different)
- ☑️ You can navigate to Administration and back to Dashboard
- ☑️ You can use the Search feature (even if results are empty)

---

## 🔧 TROUBLESHOOTING GUIDE

### Common Issue 1: "Login Failed" Error

**Problem:** When trying to log in, you see error: "Invalid credentials" or "Login failed"

**Root Cause:** Usually caused by typo in username/password, or account lockout after multiple failed attempts

**Solution:**
1. Check your onboarding email for exact username (including domain)
2. Verify you're copying password exactly (watch for extra spaces)
3. Clear your browser cache: Ctrl+Shift+Delete (most browsers)
4. Try again
5. If still failing, wait 15 minutes (account might be temporarily locked)
6. If problem persists, contact ISC administrator

**Prevention:** Save your username and password in a password manager immediately after first successful login

### Common Issue 2: Page Takes Forever to Load

**Problem:** After login, ISC dashboard takes >1 minute to appear, or shows "Loading..." indefinitely

**Root Cause:** Usually slow internet connection, or ISC service temporarily slow

**Solution:**
1. Wait 30 more seconds (some loads are genuinely slow)
2. If still loading, refresh page: Ctrl+R (or Cmd+R on Mac)
3. If refresh doesn't help, try different browser
4. If problem continues, try again in 10 minutes (service may be temporarily slow)
5. Check internet connection speed

**Prevention:** Use a modern browser (Chrome/Edge) on a stable internet connection

### Common Issue 3: Left Sidebar Collapsed/Hidden

**Problem:** Left sidebar with navigation is not visible

**Root Cause:** Sidebar is collapsed to save screen space

**Solution:**
1. Look for hamburger menu icon (☰) usually at top-left below logo
2. Click the ☰ icon
3. Sidebar should expand to show menu items
4. Click a menu item to navigate

**Prevention:** None neededsidebar can be toggled as needed

### Common Issue 4: Can't Find Search Bar

**Problem:** The search bar that should be at top center is not visible

**Root Cause:** Different screen resolutions/zoom levels, or ISC UI variation

**Solution:**
1. Look at the very top of the page (below the SailPoint logo)
2. You should see a text input field
3. If you're on a mobile device, search may be behind a magnifying glass icon (🔍)
4. Try scrolling up to see top bar
5. If still not found, use left sidebar to navigate instead

**Prevention:** Keep browser at 100% zoom (Ctrl+0 to reset)

### Common Issue 5: Different UI Than Described

**Problem:** The interface looks different from the descriptions in this lab

**Root Cause:** ISC frequently updates its UI and features

**Solution:**
1. That's completely okay! The core concepts are the same
2. Look for equivalent functionality:
   - Search still at top
   - Navigation still on left (or hamburger menu)
   - Modules still present (may have different names)
3. Focus on understanding concepts, not exact button names
4. If something important is missing, ask in SailPoint community

**Prevention:** This is normal and expectedISC evolves regularly

---

## 📝 DOCUMENTATION & DELIVERABLES

**For This Module, Create:**

1. **Exploration Notes (5-10 minutes to complete):**
   Save a document with:
   ```
   ISC SANDBOX EXPLORATION NOTES

   1. Sandbox URL: ______________________
   2. Admin Username: __________________
   3. Tenant Name: _____________________

   4. Navigation Findings:
      - Access Modeling: Found in ________
      - Lifecycle: Found in ______________
      - Compliance: Found in _____________
      - Analytics: Found in ______________

   5. First Impression: [2-3 sentences about ISC]
   ```

2. **Saved Screenshots (Optional):**
   - Take screenshot of ISC dashboard (full screen)
   - Take screenshot of each module you found
   - Save in a "screenshots" folder

3. **Key Observations:**
   - What surprised you about ISC?
   - What looks most useful?
   - What was confusing at first?

---

## 🧠 KEY CONCEPTS TO REMEMBER

- **ISC is cloud-native SaaS:** You don't manage servers, databases, or patches
- **Four modules work together:** Access Modeling + Lifecycle + Compliance + Analytics = complete identity governance
- **Navigation is standardized:** Left sidebar for menu, top bar for search/profile, main area for content
- **Empty sandbox is normal:** You're starting freshdata comes from integrating your systems
- **ISC is configurable, not code-heavy:** You won't be writing code to make ISC work

---

## 🎓 CERTIFICATION ALIGNMENT

**Certification Domain(s) Covered:**
- **Domain:** Fundamentals
  - Exam focus: Understanding what ISC is and how it's structured
  - Coverage level: Basic (foundational knowledge)

- **Domain:** Platforms & Architecture
  - Exam focus: Cloud-native architecture, multi-tenant design
  - Coverage level: Basic

**Practice Exam Questions:**

**Q1:** Which of the following best describes SailPoint Identity Security Cloud (ISC)?
- A) An on-premises software that requires significant infrastructure management
- B) A cloud-native SaaS platform for identity governance and access management
- C) A database system for storing user credentials
- D) A tool for creating Microsoft Active Directory users

**Correct Answer:** B

**Explanation:** ISC is explicitly cloud-native (no infrastructure), SaaS-delivered (cloud-hosted), and designed for identity governance and access management (Modules: Access, Lifecycle, Compliance, Analytics). Option A describes IdentityIQ (older product). Options C and D are incorrectISC doesn't store credentials and ISC doesn't directly manage AD (though it integrates with it).

---

**Q2:** In ISC, which of the four core modules is responsible for automating the process of when a new employee joins the organization?
- A) Access Modeling
- B) Analytics
- C) Lifecycle Management
- D) Compliance Management

**Correct Answer:** C

**Explanation:** Lifecycle Management automates the join/move/leave processes. When an employee joins (joins), ISC automatically provisions access based on their role (part of Lifecycle module). Access Modeling defines roles. Compliance manages reviews. Analytics provides insights.

---

## 📚 ADDITIONAL RESOURCES

### Official Documentation
- [SailPoint ISC Getting Started](https://documentation.sailpoint.com/saas/help/getting_started/index.html)
- [ISC Product Overview](https://www.sailpoint.com/products/identity-security-cloud/)

### Related Modules
- **Next Module:** Module 1.2 - ISC Architecture & Components (deeper technical dive)
- **Next After That:** Module 2.1 - ISC Setup & Configuration (practical setup)

### External Resources
- [SailPoint Identity University](https://www.sailpoint.com/university/)
- [Developer Community - ISC](https://developer.sailpoint.com/discuss/c/identity-security-cloud/)

---

## 🔄 OPTIONAL: EXTENDING THIS LAB

### Challenge 1: API Exploration (Intermediate)

If you finish early and want to explore more:
- Navigate to Administration → APIs
- Explore available API documentation
- Note down: What API calls might be useful for identity management
- Try using the API explorer (if available in your sandbox)

**Expected Time:** +30 minutes

### Challenge 2: Customization Exploration (Advanced)

For those wanting deeper understanding:
- Navigate to Administration → Customization
- Look for options for:
  - Custom fields
  - Custom branding
  - Custom workflows
- Document: What customizations are available in your sandbox

**Expected Time:** +1 hour

---

## 📊 PROGRESS TRACKING

**Time Spent:** _____ hours

**Difficulty Rating (1-10):** _____ (1=too easy, 10=too hard)

**Confidence Level (1-10):** _____ (1=confused, 10=completely confident)

**Notes/Feedback:**

---

## 🎯 NEXT STEPS AFTER THIS MODULE

1. ✅ Complete all 6 steps above
2. ✅ Review Key Concepts section
3. ✅ Answer both practice exam questions
4. ✅ Complete exploration notes document
5. → Proceed to **Module 1.2 - ISC Architecture & Components**

In Module 1.2, you'll learn the technical architecture behind ISChow the platform is built and why that matters for your deployment.

---

## 📞 SUPPORT

**Need Help?**
1. Check Troubleshooting section above (likely has your issue)
2. Review the step that's giving you trouble
3. Ask in [SailPoint Developer Community](https://developer.sailpoint.com/discuss/)

**Have Suggestions?**
- Found an error in this lab?
- ISC UI looks different than described?
- Have a better way to explain something?
- [Submit feedback to the GitHub repository](https://github.com/TedxHarry/SailPoint_ISC_Labs)

---

**Module Created:** March 2, 2026
**Last Updated:** March 2, 2026
**Difficulty:** Beginner
**
**Status:** Complete
