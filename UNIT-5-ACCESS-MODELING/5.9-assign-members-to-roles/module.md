# 5.9 - Assign Members to Roles

**Unit:** Access Modeling | **Tier:** 2 | **Duration:** ~10 hours

---

## 🎯 Learning Objectives

- Assign users to standard roles
- Understand role membership
- Use ISC assignment interface
- Verify assignments

---

## 📋 Prerequisites

Module 5.8: Create Standard Role (Part 3). 10+ roles created. 13 Contoso users aggregated (Unit 4).

---

## 📚 HANDS-ON LAB

### Objective
Assign 13 Contoso users to appropriate roles based on their jobs.

---

### USER-TO-ROLE MAPPING

**Based on Module 5.4 business definitions:**

| User Name | Department | Job Title | Role Assignment |
|---|---|---|---|
| Casey Kim | Finance | Finance Manager | Finance_Manager |
| Morgan Chen | Finance | Senior Accountant | Senior_Accountant |
| Alex Lee | Engineering | Senior Engineer | Engineer_Senior |
| (User 4) | Engineering | Software Developer | Engineer_Developer |
| (User 5) | Finance | AP Clerk | Finance_AP_Clerk |
| (User 6) | Sales | Sales Rep | Sales_Representative |
| (User 7) | Sales | Sales Rep | Sales_Representative |
| (User 8) | HR | HR Specialist | HR_Specialist |
| (User 9) | HR | HR Manager | HR_Manager (if exists) |
| (User 10) | IT | IT Administrator | IT_Administrator |
| (User 11) | IT | Security Officer | Security_Officer |
| (User 12) | Engineering | DevOps Engineer | Engineer_DevOps (if exists) |
| (User 13) | Other | (varies) | (varies) |

---

### TASK 1: Access Role Assignment Interface

**Method 1: Assign from User**
- Navigate: ISC > Identities
- Click: User (example: Casey Kim)
- Find: Roles section or tab
- Click: "Assign Role" button

**Method 2: Assign from Role**
- Navigate: ISC > Administration > Roles
- Click: Role (example: Finance_Manager)
- Find: Members section
- Click: "Add Member" or "Assign Users"

**Use Method 2 for this exercise** (easier to see all members)

---

### TASK 2: Assign Casey Kim to Finance_Manager

**Navigate:** ISC > Roles > Finance_Manager

**Role detail page shows:**
```
Finance_Manager
├─ Owner: (your user)
├─ Members: 0
├─ Access Profiles: 3
└─ [Add Member] button
```

**Click:** "Add Member" or "Assign User"

**Dialog appears:** Select users to add

**Search/Select:** Casey Kim

**Expected:** List shows all 13 Contoso users available

**Find and click:** Casey Kim

**Role assignment options (if prompted):**
- Permanent (until manually removed)
- Temporary (set expiration date)
- Conditional (other criteria)

**Select:** Permanent (for testing)

**Click:** Add/Confirm

---

### TASK 3: Verify Assignment

**Role detail page updates:**
```
Finance_Manager
├─ Owner: (your user)
├─ Members: 1
│  └─ Casey Kim
└─ Access Profiles: 3
```

**Or verify from user side:**
- Navigate: ISC > Identities > Casey Kim
- Click: Roles section
- Should show: Finance_Manager assigned
- Access includes: QB full access, bank reconciliation, reports

---

### TASK 4: Assign Remaining Users

**Repeat for all 13 users following mapping above:**

**Finance Department:**
- [ ] Casey Kim → Finance_Manager
- [ ] Morgan Chen → Senior_Accountant
- [ ] (User 5) → Finance_AP_Clerk

**Engineering Department:**
- [ ] Alex Lee → Engineer_Senior
- [ ] (User 4) → Engineer_Developer
- [ ] (User 12) → Engineer_DevOps (if role exists)

**Sales Department:**
- [ ] (User 6) → Sales_Representative
- [ ] (User 7) → Sales_Representative

**HR Department:**
- [ ] (User 8) → HR_Specialist
- [ ] (User 9) → HR_Manager (if role exists)

**IT Department:**
- [ ] (User 10) → IT_Administrator
- [ ] (User 11) → Security_Officer

**Process for each:**
1. Navigate to Role
2. Click "Add Member"
3. Select user
4. Confirm/Save

---

## 🧪 EXPECTED RESULTS

After assignment, verify:

✅ All 13 users assigned to appropriate roles
✅ Each role shows correct member count
✅ No user left unassigned
✅ Each user assigned to ONE primary role (for testing)

**Example final state:**
```
Finance_Manager: 1 member (Casey Kim)
Senior_Accountant: 1 member (Morgan Chen)
Finance_AP_Clerk: 1 member (User 5)
Engineer_Senior: 1 member (Alex Lee)
Engineer_Developer: 1 member (User 4)
Sales_Representative: 2 members (Users 6, 7)
HR_Specialist: 1 member (User 8)
IT_Administrator: 1 member (User 10)
Security_Officer: 1 member (User 11)

Total assignments: 13 users
```

---

## 🔧 TROUBLESHOOTING

**Issue: "User already assigned to this role"**
- User may already be member
- Remove and re-add if needed
- Or skip duplicate assignment

**Issue: "Can't find user"**
- User not aggregated yet (go back to Unit 4)
- Search by different name format
- Verify user exists in ISC > Identities

**Issue: "Role not showing in user's list"**
- Assignment not saved
- Refresh page (F5)
- Try assigning again

---

## ✅ SUCCESS CRITERIA

- ☑️ All 13 Contoso users assigned to roles
- ☑️ Each assignment shows correct role
- ☑️ Each role shows correct members
- ☑️ No users left unassigned
- ☑️ Assignments verified from both role and user views

---

## 🎓 CERTIFICATION

**Q:** To assign Casey Kim to Finance_Manager role, which method is easiest?

A) Edit Casey's profile manually
B) ✅ Navigate to Finance_Manager role, click Add Member, select Casey
C) Use API call
D) Delete and recreate user

**Answer: B.** Go to role → add member → select user. Done.

**Q:** After assigning Casey Kim to Finance_Manager role, what access does she get?

A) Random access
B) Only the role name, no actual access
C) ✅ Entitlements from Finance_Manager (QB manager, bank, reports)
D) Access to all systems

**Answer: C.** Role assignment = gets all entitlements from role's access profiles.

---

## 📚 RESOURCES

- [Module 5.8: Create Standard Role (Part 3)](/modules/5.8-create-standard-role-part-3)
- [Module 5.4: Business Role Definition](/modules/5.4-business-role-definition)
- [Next: 5.10 - Role Hierarchy & Management](/modules/5.10-role-hierarchy-management)

---

## ✅ NEXT STEPS

1. Assign all 13 users to appropriate roles
2. Verify all assignments in ISC
3. Proceed to 5.10 for role hierarchy and inheritance
4. Then move to dynamic roles (5.11+)

