# 5.6 - Create Standard Role (Part 1)

**Unit:** Access Modeling | **Tier:** 2 | 

---

## 🎯 Learning Objectives

- Create first role in ISC
- Understand role creation workflow
- Configure access profiles
- Add entitlements to role

---

## 📋 Prerequisites

Module 5.5: Entitlements & Access Profiles. ISC accessible with admin credentials.

---

## 📚 HANDS-ON LAB

### Objective
Create "Finance_Manager" role for Casey Kim (Finance Manager at Contoso).

**Role Definition:**
- Name: Finance_Manager
- Owner: (You - for test purposes)
- Access Profiles needed:
  - QB_Finance_Manager (QuickBooks manager access)
  - Bank_Reconciliation (bank systems)
  - Excel_Reports (report creation)
- Users: Casey Kim

---

### TASK 1: Access Role Management

**Navigate:** ISC Console > Administration > Roles (or Governance > Roles)

**Page shows:**
```
Roles List
├─ Existing roles (if any)
└─ Create Role button
```

**Click:** "Create Role" or "New Role"

---

### TASK 2: Role Configuration - Basic Info

**Form appears requesting:**

**Role Name:**
- Enter: "Finance_Manager"
- Format: Department_JobTitle (from Module 5.2)
- Save

**Role Owner:**
- Select: Your user (or designated role owner)
- This person approves who gets this role

**Description:**
- Enter: "Finance Manager role for Contoso Ltd. Provides QuickBooks manager access, bank reconciliation, reporting capabilities."

**Enabled:**
- Check: Yes (role is active)

**Click:** Save or Continue

---

### TASK 3: Add Access Profiles to Role

**Next section:** Access Profiles

**Click:** "Add Access Profile" or "Add Entitlements"

**Dialog appears:** Select access profiles to add

**Available profiles shown:**
```
(Depends on what was aggregated from your systems)
- QB_Manager (if QuickBooks connected)
- QB_Clerk
- QB_User
- Bank_Admin (if bank system connected)
- Azure_Admin (if Azure connected)
- (others...)
```

**For Finance_Manager role, select:**
- ☑ QB_Manager profile
- ☑ Bank_Reconciliation profile (if available)
- ☑ Excel_Reports profile

**Click:** Add Selected Profiles

**Role now shows:**
```
Finance_Manager role
├─ Access Profiles:
│  ├─ QB_Manager
│  ├─ Bank_Reconciliation
│  └─ Excel_Reports
└─ (Entitlements will auto-populate from profiles)
```

---

### TASK 4: Review Entitlements

**Section:** Entitlements (auto-populated from access profiles)

**Shows all entitlements for this role:**
```
Entitlements from QB_Manager:
├─ create_invoice
├─ approve_invoice
├─ reconcile_account
├─ generate_report
└─ (others)

Entitlements from Bank_Reconciliation:
├─ view_accounts
├─ initiate_transfer
└─ download_statements

Entitlements from Excel_Reports:
├─ create_report
├─ share_report
└─ schedule_report
```

**Review:** Verify these are correct for Finance Manager
- ✅ create_invoice (can create)
- ✅ approve_invoice (can approve)
- ✅ reconcile_account (can reconcile)
- etc.

**If something missing:** Can add individual entitlements (usually not needed)

**Click:** Save

---

### TASK 5: Save Role

**Final page:** Review Role Summary

```
Finance_Manager Role
├─ Owner: (Your name)
├─ Enabled: Yes
├─ Access Profiles: 3
│  ├─ QB_Manager
│  ├─ Bank_Reconciliation
│  └─ Excel_Reports
└─ Total Entitlements: 15
```

**Click:** "Create" or "Save Role"

**Success message:** "Role Finance_Manager created successfully"

---

### TASK 6: Verify Role Created

**Navigate:** ISC > Roles (or administration menu)

**List shows:**
```
Finance_Manager role
├─ Owner: (Your name)
├─ Access Profiles: 3
├─ Enabled: Yes
└─ Members: 0 (not assigned yet)
```

**Click on role:** View full details

**Details show:**
- Name
- Owner
- Access profiles
- Entitlements
- Members (none yet - will add in Module 5.9)

---

## 🧪 EXPECTED RESULTS

✅ Finance_Manager role created in ISC
✅ 3 access profiles assigned
✅ All relevant entitlements populated
✅ Role shows enabled and ready for assignment

---

## 🔧 TROUBLESHOOTING

**Issue: "Access Profiles not showing"**
- Access profiles come from system aggregation (Unit 4)
- If none shown: Entra ID or other systems not aggregated yet
- Solution: Go back to Unit 4, verify aggregation complete

**Issue: "Can't create role - permission denied"**
- Need admin credentials
- Verify: You're logged in as ISC admin
- Check: Administration menu is accessible

**Issue: "Role name rejected"**
- ISC may have naming restrictions
- Try: Remove spaces, use underscore instead (Finance_Manager)
- Keep it short (< 50 characters)

---

## ✅ SUCCESS CRITERIA

- ☑️ Finance_Manager role created
- ☑️ 3 access profiles assigned
- ☑️ Entitlements auto-populated
- ☑️ Role visible in ISC roles list
- ☑️ Role enabled and ready

---

## 🎓 CERTIFICATION

**Q:** When creating a role in ISC, what automatically populate from access profiles?

A) Role owner
B) ✅ Entitlements
C) User assignments
D) Expiration date

**Answer: B.** When you add access profiles, ISC automatically includes their entitlements.

**Q:** The Finance_Manager role owner should be:**

A) IT Administrator
B) ✅ Finance Manager (or finance department leader)
C) CEO
D) Random user

**Answer: B.** Role owner = person responsible for that role (finance manager).

---

## 📚 RESOURCES

- [Module 5.5: Entitlements & Access Profiles](/modules/5.5-entitlements-access-profiles)
- [Next: 5.7 - Create Standard Role (Part 2)](/modules/5.7-create-standard-role-part-2)

---

## ✅ NEXT STEPS

1. Verify Finance_Manager role created
2. Proceed to 5.7 to create HR_Specialist and Sales_Rep roles
3. Then assign users to roles (5.9)

