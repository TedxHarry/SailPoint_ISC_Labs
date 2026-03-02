# Entra ID Free Tier Setup Guide: Complete Step-by-Step
## For SailPoint ISC Labs (Beginners)

**Audience:** Complete beginners with no Entra ID experience
**Time Required:** 30-45 minutes
**Prerequisites:** None (just need Entra ID Free tier access)

---

## ✅ Pre-Check: Do You Have Everything?

Before starting, verify you have:
- [ ] Access to **Azure portal** (https://portal.azure.com)
- [ ] An Entra ID Free tier tenant (usually created automatically with Azure account)
- [ ] Admin access to your Entra ID (or ability to ask admin to create resources)
- [ ] ISC sandbox access (or in progress)

---

## 📖 What You'll Create in This Guide

By the end, you'll have:

| Resource Type | What | Why |
|---|---|---|
| **Test Users (3)** | Finance_User, HR_User, Admin_User | For basic labs |
| **Test Groups (2)** | Finance_Team, Admin_Team | For group-based access |
| **Test Application (1)** | ISC_Test_App | For provisioning practice |
| **Additional Users** | 10 more test users | For realistic scenarios |

**Total setup time:** 30-45 minutes

---

## PART 1: Access Your Entra ID Tenant

### Step 1.1: Navigate to Azure Portal

1. **Open browser** → Go to https://portal.azure.com
2. **Sign in** with your account
   - If prompted, enter your email address
   - Enter your password
   - Complete any MFA if required
3. **You should see:** Azure Portal dashboard

### Step 1.2: Navigate to Entra ID

1. **Look for** the search bar at the top (has magnifying glass icon)
2. **Type:** `Entra ID` or `Azure Active Directory`
3. **Click** on "Microsoft Entra ID" (first result)
4. **You'll see:** Entra ID overview page
   - Shows your tenant name
   - Shows number of users/groups
   - Shows monitoring information

**If you see "Enterprise applications" instead, go back:**
- Click "Microsoft Entra ID" in left sidebar
- You'll return to main Entra ID page

---

## PART 2: Create Test Users

### Step 2.1: Navigate to Users Section

1. **In Entra ID left sidebar**, look for "Users" (under "Manage" section)
2. **Click** "Users"
3. **You'll see:** List of current users in your tenant
4. **Look for** button labeled "+ New user" (usually top-left)

### Step 2.2: Create First Test User (Finance_User1)

1. **Click** "+ New user" button
2. **Click** "Create new user" (first option)
3. **You'll see a form with fields:**

**Fill in these fields:**

| Field | Value | Notes |
|---|---|---|
| **User principal name** | finance_user1 | This is the username (like email prefix) |
| **Display name** | Finance_User1 | Friendly name displayed in lists |
| **Password** | Auto-generated | Check "Auto-generate password" box |
| **First name** | Finance | First name |
| **Last name** | User1 | Last name |
| **Job title** | Accountant | Job function |
| **Department** | Finance | Department for testing |
| **Usage location** | United States | (or your country) |

**Detailed steps for each field:**

```
FIELD: User principal name
├─ Click the text box
├─ Type: finance_user1
├─ System will show: finance_user1@yourdomain.onmicrosoft.com
└─ This is their unique identifier

FIELD: Display name
├─ Click the text box
├─ Type: Finance_User1
└─ This is what appears in lists

FIELD: Password
├─ Check box: "Auto-generate password"
├─ Check box: "Require password change on first sign-in" (optional)
└─ System will create random password

FIELD: Job title
├─ Click the text box
├─ Type: Accountant
└─ For organizational context

FIELD: Department
├─ Click the text box
├─ Type: Finance
└─ Important for role assignment later

FIELD: Usage location
├─ Click dropdown
├─ Select: United States (or your country)
└─ Required for licensing
```

4. **Scroll down** to see all fields
5. **When complete, click** "Create" button (bottom-left)
6. **You'll see:** Success message "User created successfully"
7. **Copy password** if shown (you may need it later)

### Step 2.3: Create Second Test User (HR_User1)

**Repeat Step 2.2 with these values:**

| Field | Value |
|---|---|
| User principal name | hr_user1 |
| Display name | HR_User1 |
| Job title | HR Manager |
| Department | Human Resources |

**Steps:**
1. Click "+ New user"
2. Click "Create new user"
3. Fill in fields as above (use HR values)
4. Click "Create"

### Step 2.4: Create Third Test User (Admin_User1)

**Repeat Step 2.2 with these values:**

| Field | Value |
|---|---|
| User principal name | admin_user1 |
| Display name | Admin_User1 |
| Job title | IT Administrator |
| Department | IT |

---

## PART 3: Create Test Groups

### Step 3.1: Navigate to Groups Section

1. **In Entra ID left sidebar**, look for "Groups" (under "Manage" section)
2. **Click** "Groups"
3. **You'll see:** List of existing groups
4. **Look for** button labeled "+ New group" (top-left)

### Step 3.2: Create Finance Group

1. **Click** "+ New group"
2. **You'll see a form:**

**Fill in these fields:**

| Field | Value |
|---|---|
| Group type | Security (default) |
| Group name | Finance_Team |
| Group description | Finance department team members |
| Membership type | Assigned |

**Detailed steps:**

```
FIELD: Group type
├─ Leave as: Security (already selected)
└─ This is the standard type for access control

FIELD: Group name
├─ Click text box
├─ Type: Finance_Team
└─ Name of the group

FIELD: Group description
├─ Click text box
├─ Type: Finance department team members
└─ Helps identify purpose later

FIELD: Membership type
├─ Leave as: Assigned (already selected)
├─ This means we manually add members
└─ (Dynamic groups require Premium)
```

3. **Click** "Create"
4. **You'll see:** Success message

### Step 3.3: Add Members to Finance_Team Group

1. **You'll be taken to** the Finance_Team group page
2. **Look for** "Members" in left sidebar
3. **Click** "Members"
4. **Click** "+ Add members" button
5. **Search for** "Finance_User1"
6. **Click** on Finance_User1 in results
7. **Click** "Select" button
8. **You'll see:** Finance_User1 added to group

**Verify success:**
- Finance_User1 appears in Members list

### Step 3.4: Create Admin Group

**Repeat Step 3.2 with these values:**

| Field | Value |
|---|---|
| Group name | Admin_Team |
| Group description | IT and system administrators |

**Then add members:**
1. Click "Members"
2. Click "+ Add members"
3. Add "Admin_User1"
4. Click "Select"

---

## PART 4: Register Test Applications

### Step 4.1: Navigate to App Registrations

1. **In Entra ID left sidebar**, look for "App registrations" (under "Manage" section)
2. **Click** "App registrations"
3. **You'll see:** List of registered apps (might be empty)
4. **Click** "+ New registration"

### Step 4.2: Register ISC Test Application

1. **You'll see registration form:**

**Fill in:**

| Field | Value |
|---|---|
| Name | ISC_Test_App |
| Supported account types | Single tenant |
| Redirect URI | Leave blank for now |

**Steps:**

```
FIELD: Name
├─ Click text box
├─ Type: ISC_Test_App
└─ Name of your test application

FIELD: Supported account types
├─ Keep selected: "Accounts in this organizational directory only"
└─ This is single-tenant (restricted to your org)

FIELD: Redirect URI
├─ Leave blank (not needed for this lab)
└─ Used for OAuth flows (advanced topic)
```

2. **Click** "Register"
3. **You'll see:** Application page with details

### Step 4.3: Note Down Application Details

**On the application details page, you'll see:**

1. **Application (client) ID** - Copy this
   - Format: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`
   - **You'll need this for ISC**

2. **Directory (tenant) ID** - Copy this
   - Format: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`
   - **You'll need this for ISC**

**Store these somewhere safe** (notepad or password manager):
```
ISC_Test_App Details:
├─ Application ID: [PASTE_HERE]
├─ Tenant ID: [PASTE_HERE]
└─ Created: [DATE]
```

### Step 4.4: **CRITICAL - Grant Microsoft Graph API Permissions**

⚠️ **THIS STEP IS REQUIRED FOR ISC TO CONNECT TO ENTRA ID**

Without these permissions, ISC will NOT be able to read your users and groups. Follow carefully:

1. **On the ISC_Test_App page**, look at left sidebar
2. **Click:** "API permissions" (under "Manage" section)
3. **You'll see:** "No API permissions configured"
4. **Click:** "+ Add a permission"
5. **A panel opens** - Click: **"Microsoft Graph"** (top option)
6. **You'll see:** "Delegated permissions" and "Application permissions"
7. **Click:** **"Application permissions"** (not Delegated)

**Now add these permissions (one by one):**

**Permission 1: User.Read.All**
1. Search box: Type `user.read`
2. Look for: `User.Read.All` (with checkbox)
3. **Check the box** next to `User.Read.All`
4. Scroll down and look for next permission

**Permission 2: Group.Read.All**
1. In the list, find: `Group.Read.All`
2. **Check the box** next to `Group.Read.All`

**Permission 3: Directory.Read.All**
1. In the list, find: `Directory.Read.All`
2. **Check the box** next to `Directory.Read.All`

**Note:** If you want ISC to provision (create/update) users and groups, also add:
- `User.ReadWrite.All`
- `Group.ReadWrite.All`

For now, just the Read permissions are fine.

8. **After selecting all three**, scroll down and click: **"Add permissions"** button
9. **You'll see:** Permissions are now added to the list
10. **Important:** You'll see a message: "Grant admin consent". Click: **"Grant admin consent for [your tenant]"**
11. **Confirm** by clicking "Yes"
12. **You should see:** Green checkmarks next to all three permissions

**Why these permissions matter:**
- `User.Read.All` = ISC can read user data from Entra ID
- `Group.Read.All` = ISC can read groups
- `Directory.Read.All` = ISC can read directory structure

**Without these, ISC cannot aggregate your users/groups!**

### Step 4.5: **CRITICAL - Generate Client Secret**

⚠️ **THIS IS THE PASSWORD ISC USES TO AUTHENTICATE**

You must create and save a Client Secret. ISC will use this to prove it's authorized to access Entra ID:

1. **On the ISC_Test_App page**, click left sidebar
2. **Click:** "Certificates & secrets" (under "Manage" section)
3. **You'll see:** Tabs for "Certificates" and "Client secrets"
4. **Click:** "Client secrets" tab
5. **You'll see:** "No client secrets created"
6. **Click:** "+ New client secret" button
7. **A box appears** asking for:
   - **Description:** Type `ISC_Test_Secret` (just a name for you)
   - **Expires:** Select `6 months` (recommended for testing)
8. **Click:** "Add" button
9. **⚠️ IMPORTANT:** You'll see the secret value displayed. **COPY IT IMMEDIATELY** - it will only show once!
10. **Paste it** into your safe storage:

```
ISC_Test_App Credentials:
├─ Application ID: [FROM STEP 4.3]
├─ Tenant ID: [FROM STEP 4.3]
├─ Client Secret: [PASTE_SECRET_HERE - KEEP SAFE!]
└─ Created: [TODAY'S DATE]
```

**⚠️ WARNING:** If you close this page without copying the secret, you'll have to delete it and create a new one.

If you missed it:
1. Go back to "Certificates & secrets"
2. Click the three dots next to your secret
3. Delete it
4. Create a new one and copy it

---

## PART 5: Create Additional Test Users (For Realistic Labs)

### Step 5.1: Bulk User Creation

For ISC labs to be realistic, create ~10 test users. Instead of doing one-by-one, use this pattern:

**Create these users with pattern:**

| User | Department | Job Title |
|---|---|---|
| finance_user2 | Finance | Financial Analyst |
| finance_user3 | Finance | Finance Manager |
| hr_user2 | Human Resources | HR Specialist |
| sales_user1 | Sales | Sales Representative |
| sales_user2 | Sales | Sales Manager |
| eng_user1 | Engineering | Software Engineer |
| eng_user2 | Engineering | Engineering Manager |
| ops_user1 | Operations | Operations Analyst |
| ops_user2 | Operations | Operations Manager |
| general_user1 | General | Standard User |

**Steps for each:**
1. Click "+ New user" → "Create new user"
2. Fill in:
   - **User principal name:** [username from table]
   - **Display name:** [Firstname_Lastname]
   - **Department:** [From table]
   - **Job title:** [From table]
   - **Usage location:** United States
3. Click "Create"

**Time estimate:** 5 minutes for all 10

---

## PART 6: Create Department Groups

Create groups for departments (for realistic provisioning):

| Group Name | Description | Add Members |
|---|---|---|
| Finance_Dept | Finance department all | finance_user1, finance_user2, finance_user3 |
| HR_Dept | HR department all | hr_user1, hr_user2 |
| Sales_Dept | Sales department all | sales_user1, sales_user2 |
| Engineering_Dept | Engineering team | eng_user1, eng_user2 |
| All_Employees | All company employees | All users created above |

**Steps for each group:**
1. Click "+ New group"
2. Enter Group name
3. Enter description
4. Click "Create"
5. Click "Members"
6. Click "+ Add members"
7. Select users from table
8. Click "Select"

---

## PART 7: Verify Your Setup

### Checklist: Confirm Everything Created

```
USERS CREATED:
☐ finance_user1 (Finance, Accountant)
☐ finance_user2 (Finance, Analyst)
☐ finance_user3 (Finance, Manager)
☐ hr_user1 (HR, Manager)
☐ hr_user2 (HR, Specialist)
☐ sales_user1 (Sales, Rep)
☐ sales_user2 (Sales, Manager)
☐ eng_user1 (Engineering, Engineer)
☐ eng_user2 (Engineering, Manager)
☐ ops_user1 (Operations, Analyst)
☐ ops_user2 (Operations, Manager)
☐ admin_user1 (IT, Admin)
☐ general_user1 (General, Standard)

GROUPS CREATED:
☐ Finance_Team (contains: finance_user1)
☐ Admin_Team (contains: admin_user1)
☐ Finance_Dept (contains: finance_user1, 2, 3)
☐ HR_Dept (contains: hr_user1, 2)
☐ Sales_Dept (contains: sales_user1, 2)
☐ Engineering_Dept (contains: eng_user1, 2)
☐ All_Employees (contains: all users)

APPLICATIONS REGISTERED:
☐ ISC_Test_App (note down Application ID + Tenant ID)

NOTES SAVED:
☐ ISC_Test_App Application ID
☐ ISC_Test_App Tenant ID
☐ Your Entra ID tenant name
```

### Verification Steps

1. **Check Users:**
   - Go to Users
   - Count should be ~13 (3 original + 10 test + 1 system account)

2. **Check Groups:**
   - Go to Groups
   - Should see: Finance_Team, Admin_Team, Finance_Dept, HR_Dept, Sales_Dept, Engineering_Dept, All_Employees

3. **Check Apps:**
   - Go to App registrations
   - Should see: ISC_Test_App with your Application ID noted

---

## PART 8: Enable Sign-In Logs (Optional But Recommended)

This helps troubleshoot ISC connection issues:

### Step 8.1: Enable Audit Logging

1. **Go to:** Entra ID → "Monitoring" → "Sign-in logs"
2. **You should see** recent sign-in activities
3. **No action needed** - just verify it's accessible
4. **These logs show** user authentication attempts (useful for debugging)

---

## PART 9: Prepare for ISC Connection

### What You'll Need for ISC

When you connect ISC to Entra ID, you'll need:

```
ISC Configuration Information:
├─ Tenant Name: [Your tenant name from Entra ID]
├─ Tenant ID: [From ISC_Test_App details]
├─ Application ID: [From ISC_Test_App details]
├─ Test Users: [finance_user1, hr_user1, etc.]
└─ Groups: [Finance_Team, Admin_Team, etc.]
```

**You now have everything needed for ISC labs!**

---

## 🔧 Troubleshooting

### Issue: Can't Create Users
**Problem:** "You don't have permission to create users"
**Solution:**
- You need Global Admin role
- Contact your Entra ID admin
- Or switch to a different admin account

### Issue: Can't Find Groups Section
**Problem:** Groups menu is not visible
**Solution:**
- Scroll down in left sidebar
- Or search for "Groups" in the top search bar

### Issue: Can't Add Members to Group
**Problem:** "User not found"
**Solution:**
- Wait 5-10 minutes after creating user
- Entra ID takes time to sync
- Then try again

### Issue: Application Registration Failed
**Problem:** Error when registering app
**Solution:**
- Entra ID Free tier allows unlimited app registrations
- Try registering again
- If still failing, refresh the page and retry

---

## ✅ Next Steps After This Setup

1. **Go to:** `SETUP-GUIDES/01-ISC-SANDBOX-ACCESS.md`
2. **Set up ISC** to connect to this Entra ID
3. **Then start:** Unit 1 labs

---

## 📞 Need Help?

### Common Questions

**Q: Do I need Premium licenses to complete these labs?**
A: No! Free tier is sufficient for all core labs. Premium features will be simulated with CSV files.

**Q: How many users should I create?**
A: Minimum 3, recommended 10+ for realistic scenarios.

**Q: Can I use real company data?**
A: No, use test users only to avoid security issues.

**Q: Can I delete users after labs?**
A: Yes, you can delete test users anytime.

---

## 📋 Summary

**You've completed:**
- ✅ Created 13 test users (3 core + 10 realistic)
- ✅ Created 7 test groups
- ✅ Registered ISC test application
- ✅ Noted down application credentials
- ✅ Ready for ISC connection

**Time taken:** ~30-45 minutes

**Next:** Follow `SETUP-GUIDES/01-ISC-SANDBOX-ACCESS.md` to connect ISC

---

**Document Version:** 1.0
**Last Updated:** March 2, 2026
**Difficulty:** Beginner
**Estimated Time:** 30-45 minutes
