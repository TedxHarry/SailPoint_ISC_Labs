# 5.21 - Access Model Validation

**Unit:** Access Modeling | **Tier:** 2 | 

---

## 🎯 Learning Objectives

- Validate complete access model
- Run audit checks
- Verify SoD enforcement
- Confirm role structure completeness

---

## 📋 Prerequisites

Module 5.20: Role Documentation & Design. All documentation complete.

---

## 📚 HANDS-ON LAB

### Objective
Perform comprehensive validation of Contoso access model before moving to provisioning.

---

### TASK 1: Role Coverage Validation

**Checklist - All job functions covered:**

```
ROLE COVERAGE AUDIT

Finance Department:
☑ Finance Manager (Casey Kim) → Finance_Manager role ✓
☑ Senior Accountant (Morgan) → Senior_Accountant role ✓
☑ AP Clerk (User5) → Finance_AP_Clerk role ✓
☑ All finance staff → Finance_Employee (dynamic) ✓

Engineering Department:
☑ Senior Engineer (Alex) → Engineer_Senior role ✓
☑ Developer (User4) → Engineer_Developer role ✓
☑ DevOps (User12) → DevOps role (if exists) ✓
☑ All engineers → Engineering_Employee (dynamic) ✓

IT Department:
☑ IT Administrator (User10) → IT_Administrator role ✓
☑ Security Officer (User11) → Security_Officer role ✓
☑ All IT staff → IT_Employee (dynamic) ✓

Sales Department:
☑ Sales Reps (User6,7) → Sales_Representative role ✓
☑ All sales → Sales_Employee (dynamic) ✓

HR Department:
☑ HR Specialist (User8) → HR_Specialist role ✓
☑ HR Manager (User9) → HR_Manager role ✓
☑ All HR → HR_Employee (dynamic) ✓

SUMMARY:
- All 13 users assigned: ✓
- All departments covered: ✓
- Standard + dynamic blend: ✓
```

---

### TASK 2: Entitlement Coverage

**Verify users have appropriate access:**

```
ENTITLEMENT COVERAGE AUDIT

Finance_Manager (Casey):
├─ QB create invoice: ✓
├─ QB approve invoice: ✓
├─ QB reconcile: ✓
├─ Reports: ✓
├─ Bank access: ✓
└─ All needed for role: ✓

Engineer_Developer (User4):
├─ GitHub push code: ✓
├─ GitHub create PR: ✓
├─ Jenkins staging: ✓
├─ AWS dev access: ✓
└─ All needed for role: ✓

Sales_Representative (User6):
├─ Salesforce CRM: ✓
├─ Pipeline reports: ✓
├─ Slack #sales: ✓
└─ All needed for role: ✓

RESULT: All users have required entitlements ✓
```

---

### TASK 3: SoD Compliance Verification

**Run SoD audit:**

```
SoD COMPLIANCE AUDIT

Check each user for conflicts:

Casey Kim:
├─ Roles: Finance_Manager, Finance_Employee
├─ Check: Finance_Manager + Finance_AP_Clerk conflict rule
│         Casey only has Manager, not AP_Clerk
├─ Result: COMPLIANT ✓

User5 (AP_Clerk):
├─ Roles: Finance_AP_Clerk, Finance_Employee
├─ Check: Finance_AP_Clerk + Manager conflict rule
│         User5 only has Clerk, not Manager
├─ Result: COMPLIANT ✓

User10 (IT_Admin):
├─ Roles: IT_Administrator, IT_Employee
├─ Check: Create User + Approve Access conflict rule
│         User10 has Create but not Approve
├─ Result: COMPLIANT ✓

(Repeat for all 13 users)

SUMMARY: All users SoD compliant ✓
No violations detected ✓
```

---

### TASK 4: Dynamic Role Validation

**Verify dynamic rules working:**

```
DYNAMIC ROLE VALIDATION

Engineering_Employee rule (dept == "Engineering"):
├─ Alex Lee: department = Engineering? YES → Included ✓
├─ User4: department = Engineering? YES → Included ✓
├─ User12: department = Engineering? YES → Included ✓
├─ Casey Kim: department = Finance? NO → Not included ✓
└─ Rule working correctly: ✓

Finance_Employee rule (dept == "Finance"):
├─ Casey Kim: department = Finance? YES → Included ✓
├─ Morgan Chen: department = Finance? YES → Included ✓
├─ User5: department = Finance? YES → Included ✓
├─ Alex Lee: department = Engineering? NO → Not included ✓
└─ Rule working correctly: ✓

(Repeat for all dynamic rules)

SUMMARY: All dynamic rules evaluating correctly ✓
```

---

### TASK 5: Completeness Checklist

**Final validation:**

```
COMPLETENESS CHECKLIST

Setup & Configuration:
☑ All 13 identities aggregated (Unit 4)
☑ All 10+ standard roles created (Modules 5.6-5.8)
☑ 6+ dynamic roles created (Modules 5.12-5.13)
☑ All 13 users assigned to roles (Module 5.9)

SoD & Governance:
☑ 6+ SoD rules created (Modules 5.16-5.17)
☑ All rules actively enforcing (Module 5.18)
☑ Role owners assigned (Module 5.19)
☑ Approval workflows configured (Module 5.19)

Documentation & Validation:
☑ Role specifications documented (Module 5.20)
☑ SoD matrix documented (Module 5.20)
☑ Access model diagram created (Module 5.20)
☑ This validation audit completed (Module 5.21)

FINAL RESULT: ACCESS MODEL COMPLETE & VALIDATED ✓
Ready for Provisioning (Unit 6)
```

---

## 🧪 EXPECTED RESULTS

After validation:

✅ All 13 users properly assigned
✅ All departments covered by roles
✅ All required entitlements present
✅ SoD rules enforcing correctly
✅ No violations detected
✅ Documentation complete

---

## ✅ SUCCESS CRITERIA

- ☑️ All 13 users assigned to appropriate roles
- ☑️ All entitlements present for each role
- ☑️ SoD compliance verified for all users
- ☑️ Dynamic rules working correctly
- ☑️ Documentation audit passed

---

## 🎓 CERTIFICATION

**Q:** What should Access Model Validation check?

A) Only role names
B) ✅ Coverage (all users), entitlements (correct access), SoD (no conflicts)
C) Database size
D) Just documentation

**Answer: B.** Validation = verify users covered, access correct, conflicts prevented.

**Q:** If validation finds SoD violation, what does it mean?

A) Access model is complete
B) ✅ Someone has conflicting roles - needs remediation
C) Everything is working
D) SoD rules broken

**Answer: B.** Violation = someone has roles they shouldn't (conflict). Must remove one role.

---

## 📚 RESOURCES

- [Module 5.20: Role Documentation & Design](/modules/5.20-role-documentation-design)
- [Next: 5.22 - Contoso Access Model Complete](/modules/5.22-contoso-access-model-complete)

---

## ✅ NEXT STEPS

1. Run complete validation audit
2. Address any issues found
3. Proceed to 5.22 (capstone) to confirm complete

