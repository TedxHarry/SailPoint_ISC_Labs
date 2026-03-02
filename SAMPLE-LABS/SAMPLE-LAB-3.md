# SAMPLE LAB 3: Module 4.3 - Create Standard Role (Finance_AP_Clerk) for Contoso

**Unit:** Access Modeling | **Tier:** 2 | **Duration:** ~10 hours

**NOTE:** This sample shows how a practical **access modeling lab** is structured.

---

## 🎯 Learning Objectives

By the end of this module, you will:
- Create a standard role in ISC from scratch
- Add entitlements (groups/permissions) to a role
- Set role ownership and governance parameters
- Test role to ensure it's correctly configured
- Understand role documentation best practices

---

## 📋 Prerequisites

- ✅ Completed: Units 1-3 (Fundamentals, Setup, Search)
- ✅ Completed: Module 4.1-4.2 (Access Modeling fundamentals)
- ✅ Have: ISC sandbox with Entra ID data imported
- ✅ Have: Contoso identities and groups loaded from Entra ID

**Difficulty:** Intermediate | **Time:** ~10 hours

---

## 🔍 BUSINESS SCENARIO

**Scenario:** Contoso Finance Department Access Model

Contoso's Finance team currently has inconsistent access. Some people have access to "Approve Payments" AND "Sign Checks"—a serious control issue. You're creating the first ISC role to fix this.

**Role to Create:** Finance_AP_Clerk
- **Purpose:** Accounts Payable Clerk with access to enter/review AP transactions
- **Who Gets It:** New AP clerks, junior finance staff
- **Entitlements:** Finance App AP module, Finance reports group, HRIS read-only access
- **Owner:** Finance Manager (finance_mgr@contoso.com)

**What You'll Do:**
Design and create this role in ISC, add it to test users, and verify it works correctly.

---

## 📚 CONCEPTUAL FOUNDATION

### Core Concept 1: Standard Roles vs Dynamic Roles

**Definition:**
- **Standard Role:** Manually maintained, static assignment. "These specific people get this access."
- **Dynamic Role:** Rules-based, automatic assignment. "Anyone in Finance department gets this access."

**Why It Matters:**
Standard roles are best for specific job functions. You'll create standard roles first, then advance to dynamic roles.

**In ISC Context:**
When you create a role, you choose: Standard or Dynamic. For now, we're using Standard.

**Example:**
- Standard: "finance_user1, finance_user2, and finance_user3 are AP Clerks"
- Dynamic: "Anyone with department='Finance' AND jobTitle contains 'Clerk' gets AP Clerk role"

### Core Concept 2: Entitlements

**Definition:**
An entitlement is a specific permission or group access. Roles are made up of entitlements.

**Why It Matters:**
You combine entitlements to create roles. Same entitlements can be used in multiple roles.

**In ISC Context:**
When you add entitlements to a role, you're defining exactly what access people in that role get.

**Example:**
- Entitlement 1: "Finance_AP_Group" (Entra ID group)
- Entitlement 2: "FinanceApp_APModule_Access" (application role)
- Entitlement 3: "HRIS_ReadOnly" (HRIS access)
- Combined: These 3 entitlements = Finance_AP_Clerk role

### Core Concept 3: Role Owner and Certification

**Definition:**
The role owner is responsible for managing who has the role and certifying they should keep it.

**Why It Matters:**
Governance requires someone accountable. The role owner certifies access during reviews.

**In ISC Context:**
When you create a role, you assign an owner. That owner reviews and approves who gets the role.

**Example:**
Finance Manager is Finance_AP_Clerk role owner. During quarterly certification, they review who has the role and say "yes, all 3 people should have this access."

---

## 🧪 HANDS-ON LAB

### Pre-Lab Checklist

- [ ] ISC sandbox access
- [ ] Entra ID identities imported
- [ ] Understand Contoso Finance team structure
- [ ] Know who finance_mgr@contoso.com is (the role owner)
- [ ] Have 2+ hours for this lab

### Lab Scenario

**Given:**
- Contoso Finance team has 5 AP Clerks/Analysts
- These people need specific access
- Finance Manager should own the role

**Task:**
Create Finance_AP_Clerk role with proper entitlements and ownership

**Expected Outcome:**
- Role is created and visible in ISC
- Entitlements are assigned
- Finance Manager is set as owner
- Role is ready for assignment to users

---

## 📍 STEP-BY-STEP INSTRUCTIONS

### STEP 1: Navigate to Roles Section

1. Log into ISC
2. Click: **Governance** or **Access** (left sidebar)
3. Click: **Roles** (submenu)
4. Expected: Roles page shows existing roles (may be empty)
5. Click: **+ New Role** or **+ Create Role** button

### STEP 2: Enter Role Basic Information

**In the role creation form, enter:**

1. **Role Name:** `Finance_AP_Clerk`
2. **Role Description:** `Accounts Payable Clerk with access to AP modules and Finance reporting`
3. **Role Type:** Select `Standard` (not Dynamic)
4. **Owner:** Search and select `finance_mgr@contoso.com` (Finance Manager)
5. **Business Justification:** `Controls segregation of duties in AP processes. Prevents any single person from approving and signing payments.`

**Expected:** Form is filled with your entries

### STEP 3: Add Entitlements to Role

1. Look for: **"Entitlements"** or **"Add Entitlements"** section
2. Click: **+ Add Entitlements**
3. You'll see a search/selection dialog
4. Search for and select (Contoso test data):
   - `Finance_Team` (Entra ID group - from when you created it)
   - `Finance_Dept` (HRIS group)
   - Any application roles you set up

5. **If you don't see real entitlements**, use test names:
   - Add: "AP_Module_Access"
   - Add: "Finance_Reports_Group"
   - Add: "HRIS_Read_Access"

6. Click: **Save** or **Add Selected**
7. Expected: Entitlements appear in the role definition

### STEP 4: Set Role Parameters (Optional)

1. Look for additional sections:
   - **Provisioning Rules:** (Set how this role is provisioned)
   - **Risk Settings:** (Define any SoD conflicts)
   - **Expiration:** (Set access duration - optional)

2. For now, keep defaults (these are advanced)

3. Leave as-is for this lab

### STEP 5: Review and Save Role

1. Review all entries:
   - Name: `Finance_AP_Clerk` ✓
   - Owner: `finance_mgr@contoso.com` ✓
   - Entitlements: 3 items listed ✓

2. Click: **Save** or **Create Role** button

3. Expected: Success message "Role created successfully"

4. Role now appears in Roles list

### STEP 6: Assign Role to Test Users

1. You're either automatically taken to role details, or you click the role from the list
2. Click: **Assign Members** or **Add Users**
3. Search for test users:
   - Select: `finance_user1`
   - Select: `finance_user2`
   - Select: `finance_user3`
4. Click: **Save** or **Assign**
5. Expected: Users are added to the role

### STEP 7: Verify Role Configuration

1. **In ISC, go to:** Search > Identity
2. Search for: `finance_user1`
3. Click on user details
4. Look for: **"Roles"** section
5. Verify: `Finance_AP_Clerk` is shown as their role
6. Verify: Role shows all 3 entitlements

---

## ✅ VALIDATION

| Check | Expected | How to Verify |
|-------|----------|---|
| Role created | Finance_AP_Clerk appears in Roles list | Go to Governance > Roles, see the role |
| Owner assigned | Finance Manager shown as owner | Click role, see owner field filled |
| Entitlements added | 3 entitlements in role | Click role, see entitlements section |
| Users assigned | 3 finance users have the role | Search each user, see role assigned |
| Access granted | Users show correct access | Review user details for role membership |

---

## 🔧 TROUBLESHOOTING

### Issue: Can't find "Governance" or "Roles" menu

**Solution:**
1. Look for "Access" menu instead
2. Or search for "Roles" in top search bar
3. Different ISC versions may vary

### Issue: Can't find Finance_Team group as entitlement

**Solution:**
1. Entitlements come from integrated sources
2. If Entra ID groups not showing, aggregation may not be complete
3. Wait 10 minutes and refresh
4. Use test entitlement names instead

### Issue: Can't select finance_mgr as owner

**Solution:**
1. The user may not be in ISC yet
2. Verify finance_mgr user was imported from Entra ID
3. Create a test user in ISC first, then assign as owner
4. Or use your own admin account as owner for testing

---

## 📝 DELIVERABLES

Create a document with:
1. Role configuration details (name, owner, entitlements)
2. Screenshot of role details page
3. List of users assigned to role
4. Why you chose this role design for AP Clerks
5. What Separation of Duties rules might apply (advanced thinking)

---

## 🔄 EXTENDING THE LAB

### Challenge 1: Create Related Role

Create `Finance_AP_Manager` role with:
- Owner: Same Finance Manager
- Entitlements: Includes AP approval permissions
- Note: What would differ between AP_Clerk and AP_Manager?

### Challenge 2: Design SoD Rule

Design a Separation of Duties rule:
- Conflict: Finance_AP_Clerk who also has "Check Signing" permission
- Enforcement: Prevent same person from having both
- Exception process: How exceptions would be handled

---

## 🎓 CERTIFICATION ALIGNMENT

**Domains:** Access Management, Rule & Transforms

**Practice Question:**

You want to automatically assign Finance_AP_Clerk role to all employees whose department = "Finance" AND jobTitle contains "Clerk". What type of role should you use?
- A) Standard Role
- B) Dynamic Role
- C) Access Profile
- D) Entitlement Group

**Answer:** B - Dynamic Role uses rules to automatically assign based on criteria. Standard Role is manual assignment.

---

## 🎯 NEXT STEPS

1. ✅ Create Finance_AP_Clerk role
2. ✅ Assign to 3+ test users
3. ✅ Verify users show the role
4. → Module 4.4: Create Dynamic Role (automatic assignment)
5. → Module 4.5: Create SoD Rules (prevent conflicts)
6. → Module 5.1: Lifecycle Management (automate role assignment)

---

**Sample Lab 3 Complete**
This demonstrates how **access modeling/governance labs** are structured.
Key characteristics:
- Real business scenario (Finance controls)
- Configuration + validation
- Preparation for advanced topics
- Focus on governance/compliance
