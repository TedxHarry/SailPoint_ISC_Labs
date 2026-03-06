# SAMPLE LAB 2: Module 2.4 - Configure Entra ID Connector in ISC

**Unit:** Setup, Configuration & Administration | **Tier:** 1 | 

**NOTE:** This is a shortened sample showing how a setup/integration lab is structured.

---

## 🎯 Learning Objectives

By the end of this module, you will:
- Configure ISC to connect to your Entra ID tenant via Microsoft Graph API
- Create a connector definition in ISC
- Test the connection and verify ISC can read user data from Entra ID
- Understand the Entra ID connector architecture

---

## 📋 Prerequisites

- ✅ Completed: Module 1.1 (ISC Fundamentals)
- ✅ Completed: Module 2.1-2.3 (ISC Setup & User Management)
- ✅ Have: ISC sandbox access
- ✅ Have: Entra ID Free tier tenant (from SETUP-GUIDES/00-ENTRA-ID-FREE-TIER-GUIDE.md)
- ✅ Have: Test users created in Entra ID (minimum 10 users)
- ✅ Have: Application registered in Entra ID (ISC_Test_App with credentials noted)

**Difficulty:** Intermediate | **Time:** ~12 hours

---

## 🔍 CONTEXT & BUSINESS SCENARIO

**Scenario:** Contoso Ltd - Connecting First System

Contoso is ready to connect their first system to ISC: Microsoft Entra ID (Azure AD). This is the source of truth for employee identities. Once connected, ISC will aggregate Contoso's 50+ employee identities and use them as the foundation for role management and provisioning.

**What You'll Do:**
You'll configure ISC to connect to Entra ID, create a connector definition, test the connection, and perform the first aggregation of user data into ISC.

---

## 📚 CONCEPTUAL FOUNDATION

### Core Concept 1: What is a Source/Connector?

**Definition:**
A source (or connector) is ISC's connection to an external system. It defines HOW ISC reads data from (and writes data to) that system.

**Why It Matters:**
Without a connector, ISC has no data. Connectors are how ISC stays synchronized with your actual systems.

**In ISC Context:**
Each system (Entra ID, Salesforce, Finance app, HRIS, etc.) needs its own connector definition.

**Example:**
The Entra ID connector tells ISC: "Connect to our Entra ID tenant using Microsoft Graph API, read all users and groups, and sync them every 4 hours."

### Core Concept 2: Microsoft Graph API

**Definition:**
Microsoft Graph API is Microsoft's official way to connect to and read data from Microsoft services (Entra ID, Microsoft 365, Teams, etc.).

**Why It Matters:**
ISC uses Microsoft Graph API to securely authenticate and read data from Entra ID without needing to know passwords.

**In ISC Context:**
ISC acts as an "application" registered in Entra ID. This application has permissions to read user/group data.

**Example:**
When you registered "ISC_Test_App" in Entra ID earlier, you created the credentials that ISC will use to authenticate.

### Core Concept 3: Aggregation vs Provisioning

**Definition:**
- **Aggregation:** ISC reads (pulls) data FROM Entra ID
- **Provisioning:** ISC writes (pushes) data TO Entra ID

**Why It Matters:**
You'll start with read-only aggregation. Later, you'll enable provisioning to create accounts in systems based on ISC decisions.

**In ISC Context:**
Aggregation happens first. Once ISC has data from Entra ID, you can create roles and policies. Then you enable provisioning to actually create accounts.

**Example:**
- **Aggregation:** ISC reads "finance_user1 is in Finance group"
- **Provisioning:** ISC creates "finance_user1 account in Finance App with AP_Clerk role"

---

## 🧪 HANDS-ON LAB

### Pre-Lab Checklist

- [ ] ISC sandbox access verified
- [ ] Entra ID tenant with 10+ test users
- [ ] ISC_Test_App registered in Entra ID
- [ ] Application ID and Tenant ID saved from Entra ID
- [ ] 3+ hours available for this lab

### Lab Scenario

**Given:**
- ISC sandbox is configured (from previous modules)
- Entra ID has 50+ employee test identities
- You have ISC_Test_App credentials

**Task:**
Create a connector in ISC that connects to Entra ID, test the connection, and perform initial data aggregation.

**Expected Outcome:**
- ISC is connected to Entra ID
- ISC has imported all Entra ID users and groups
- You can search for users in ISC and see Entra ID data

---

## 📍 STEP-BY-STEP INSTRUCTIONS

### STEP 1: Navigate to Sources Configuration

1. Log into ISC sandbox
2. Click: **Administration** (left sidebar)
3. Click: **Sources** (under Administration section)
4. Expected: Sources page appears, showing list of configured sources (probably empty or few)
5. Click: **+ New Source** button (top-right)

### STEP 2: Select Entra ID Connector Type

1. A dialog appears asking "What type of source?"
2. Search: Type "Entra ID" or "Microsoft Entra"
3. Select: **Microsoft Entra ID** from results
4. Click: **Next** or **Create**
5. Expected: Source configuration form appears

### STEP 3: Configure Basic Settings

1. **Name field:** Enter `Contoso-Entra-ID-Primary`
2. **Description:** Enter "Primary Entra ID tenant for Contoso employees"
3. **Account Schema:** Should auto-populate (shows user attributes)
4. Click: **Next** or **Continue**

### STEP 4: Add Authentication Credentials

1. Look for: "Authentication" or "API Credentials" section
2. Enter fields:
   - **Tenant ID:** [Paste from your ISC_Test_App details]
   - **Application ID (Client ID):** [Paste from ISC_Test_App]
   - **Client Secret:** [You may need to generate this in Entra ID if not already created]
3. Click: **Test Connection** button
4. Expected: Shows "Connection successful" ✓

### STEP 5: Configure Data Mapping

1. ISC shows: Account attributes and where they map from Entra ID
2. Verify these mappings (defaults are usually fine):
   - Display Name → displayName
   - Email → mail
   - Department → department
3. Click: **Save** or **Next**

### STEP 6: Perform Initial Aggregation

1. ISC shows: Option to "Aggregate now" or "Schedule aggregation"
2. Click: **Aggregate Now**
3. Expected: Progress bar appears, "Importing data..."
4. Wait: 1-3 minutes for aggregation to complete
5. Expected: Success message "X identities imported, Y accounts correlated"

### STEP 7: Verify Data in ISC

1. Navigate to: **Search** (left sidebar)
2. Click: Search box, type "finance"
3. Results: You should see Contoso finance users from Entra ID
4. Click: On a user to see details
5. Verify: User attributes from Entra ID are displayed

---

## ✅ VALIDATION

| Check | Expected | How to Verify |
|-------|----------|---|
| Connector created | Source appears in Sources list | Go to Admin > Sources, see "Contoso-Entra-ID-Primary" |
| Connection works | Test connection shows "Success" | Click Test button, see ✓ |
| Data imported | 50+ identities in ISC | Search > Search for "user", count results |
| Attributes mapped | User shows Entra ID data | Click user in search, see department/email |

---

## 🔧 TROUBLESHOOTING

### Issue: "Invalid credentials" when testing connection

**Solution:**
1. Verify Tenant ID and Application ID are copied exactly (no extra spaces)
2. Check if Client Secret was generated in Entra ID
3. Verify ISC_Test_App has permission to read user data in Entra ID
4. Try regenerating Client Secret in Entra ID

### Issue: Aggregation "hangs" or takes very long

**Solution:**
1. This is normal for first aggregation (depends on user count)
2. Wait up to 5 minutes
3. If still not done, check ISC logs for errors
4. Try aggregating again

### Issue: Data imported but attributes are empty

**Solution:**
1. Verify attributes are mapped correctly in step 5
2. Check if Entra ID users actually have those attributes filled in
3. Wait 10-15 minutes (ISC may still be processing)
4. Refresh search results

---

## 📝 DELIVERABLES

Create a document with:
1. Connector configuration details (URL, tenant name, etc.)
2. Screenshot of successful connection test
3. Screenshot of imported data in search
4. Count of identities imported
5. Any issues encountered and how you resolved them

---

## 🎓 CERTIFICATION ALIGNMENT

**Domains Covered:**
- **Setup & Administration:** Configuring sources
- **Platforms:** Understanding API integration
- **Sources:** Connector configuration

**Practice Question:**

Which protocol does the Entra ID connector use to authenticate with Microsoft services?
- A) LDAP
- B) SAML
- C) OAuth2/Microsoft Graph API
- D) Basic HTTP Authentication

**Answer:** C - Microsoft Graph API uses OAuth2 for authentication

---

## 🎯 NEXT STEPS

1. ✅ Complete all 7 steps above
2. ✅ Verify all data is imported
3. ✅ Answer practice exam question
4. → Proceed to **Module 2.5 - Virtual Appliances** (if using on-prem connectors)
5. → Proceed to **Module 3.1 - Search ISC** (next logical step)

---

**Sample Lab 2 Complete**
This demonstrates how **setup/integration labs** are structured.
Key differences from Sample 1:
- More technical (credentials, APIs)
- Includes troubleshooting for configuration issues
- Validates successful system integration
- Focuses on practical connectivity
