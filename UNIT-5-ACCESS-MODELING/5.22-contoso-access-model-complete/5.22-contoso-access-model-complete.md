# 5.22 - Contoso Access Model Complete

**Unit:** Access Modeling | **Tier:** 2 | 

---

## 🎯 Learning Objectives

- Validate complete access model is production-ready
- Understand business value of implemented access model
- Confirm all 22 modules completed successfully
- Transition to Unit 6: Provisioning & Deprovisioning

---

## 📋 Prerequisites

Module 5.21: Access Model Validation. All validation audits completed.

---

## 📚 CAPSTONE REVIEW

### What We Built

Over 22 modules, we designed and implemented a complete access model for Contoso Ltd (50-person professional services firm). Here's what exists now:

---

### COMPONENT 1: Role Architecture

**Standard Roles (Manually Assigned):**

```
Finance Department:
├─ Finance_Manager (Casey Kim) - Approve invoices, reconcile GL, reports
├─ Senior_Accountant (Morgan Chen) - Create GL entries, post transactions
└─ Finance_AP_Clerk (User5) - Create invoices, expense entry

Engineering Department:
├─ Engineer_Senior (Alex Lee) - Code review, deployment approval, team lead
├─ Engineer_Developer (User4) - Write code, submit PRs, staging deploy
└─ DevOps (User12) - Infrastructure, deployment, CI/CD pipelines

IT Department:
├─ IT_Administrator (User10) - Create/manage users, manage accounts
└─ Security_Officer (User11) - Security monitoring, audit, policy enforcement

Sales Department:
└─ Sales_Representative (User6, User7) - CRM access, pipeline management, deals

HR Department:
├─ HR_Specialist (User8) - Benefits, payroll, hiring workflows
└─ HR_Manager (User9) - Approvals, compensation, policy

TOTAL: 11 standard roles covering 13 users
```

**Dynamic Roles (Automatically Assigned):**

```
Department-Based:
├─ Engineering_Employee (rule: dept = "Engineering") - 3 users
├─ Finance_Employee (rule: dept = "Finance") - 3 users
├─ Sales_Employee (rule: dept = "Sales") - 2 users
├─ HR_Employee (rule: dept = "HR") - 2 users
└─ IT_Employee (rule: dept = "IT") - 2 users

Cross-Department:
├─ Managers (rule: jobTitle contains "Manager") - 2-3 users
├─ Technical_Staff (rule: dept = "Engineering" OR dept = "IT") - 5 users
└─ Senior_Staff (rule: jobTitle contains "Senior" OR "Manager") - 4 users

TOTAL: 8 dynamic roles (6 department + 2 cross-cutting)
All 13 users automatically included in appropriate dynamic roles
```

---

### COMPONENT 2: Separation of Duties Enforcement

**Finance SoD Rules (Prevent Fraud):**

```
Rule 1: Finance_AP_Clerk ↔ Finance_Manager CONFLICT
 ├─ Reason: AP Clerk creates invoices, Manager approves
 ├─ Fraud Risk: Create + approve = pay yourself
 └─ Status: ENFORCED (blocks conflicting assignment)

Rule 2: Create_GL_Entry ↔ Reconcile_GL CONFLICT
 ├─ Reason: Create (transaction posting) + Reconcile (hiding discrepancies)
 ├─ Fraud Risk: Post unauthorized entries then hide them
 └─ Status: ENFORCED

Rule 3: Delete_Invoice ↔ Create_Invoice CONFLICT
 ├─ Reason: Create (transaction) + Delete (audit trail destruction)
 ├─ Fraud Risk: Create fake transaction, delete evidence
 └─ Status: ENFORCED
```

**IT/Security SoD Rules (Prevent Unauthorized Access):**

```
Rule 4: Create_User ↔ Approve_Access_Request CONFLICT
 ├─ Reason: Create account + approve own access requests
 ├─ Security Risk: Self-approving unauthorized access
 └─ Status: ENFORCED

Rule 5: Deploy_Production ↔ Approve_Deployment CONFLICT
 ├─ Reason: Deploy code + approve own deployments
 ├─ Security Risk: Bypass code review, inject malware
 └─ Status: ENFORCED

Rule 6: Manage_Audit_Logs ↔ System_Admin CONFLICT
 ├─ Reason: Admin actions + ability to delete audit evidence
 ├─ Security Risk: Commit unauthorized changes, delete evidence
 └─ Status: FLAG FOR REVIEW (allows with documentation)
```

**SoD Validation Result:**
```
✅ All 13 users checked against 6+ SoD rules
✅ ZERO violations detected
✅ All conflicting assignments blocked
✅ Audit trail logs all SoD rule evaluations
```

---

### COMPONENT 3: Governance & Compliance

**Role Ownership:**

```
Finance_Manager (Casey Kim)
├─ Owns: Finance_Manager, Senior_Accountant, Finance_AP_Clerk
├─ Responsible for: Quarterly certification, member changes, policy compliance
└─ Approval Authority: Yes

Engineering_Manager (Alex Lee)
├─ Owns: Engineer_Senior, Engineer_Developer, DevOps
├─ Responsible for: Skills verification, deployment access control
└─ Approval Authority: Yes

IT Director (User10)
├─ Owns: IT_Administrator, Security_Officer, IT_Employee
├─ Responsible for: Access audits, security compliance
└─ Approval Authority: Yes

Sales Director (User6)
├─ Owns: Sales_Representative, Sales_Employee
├─ Responsible for: Sales process compliance
└─ Approval Authority: Yes

HR Director (User9)
├─ Owns: HR_Specialist, HR_Manager, HR_Employee
├─ Responsible for: Privacy compliance, hiring workflows
└─ Approval Authority: Yes
```

**Approval Workflows:**

```
New Role Assignment Request:
1. Employee/Manager requests access
2. Role Owner reviews and approves/denies
3. ISC provisions access if approved
4. Audit log records: Requester, Owner, Decision, Timestamp
5. Quarterly review: Role Owner certifies members still need access
```

**Certification Schedule:**

```
Quarterly Reviews:
├─ Q1 (Jan-Mar): Finance roles, HR roles
├─ Q2 (Apr-Jun): Engineering roles, Technical roles
├─ Q3 (Jul-Sep): Sales roles, IT roles
├─ Q4 (Oct-Dec): Management roles, Security roles

Annual Review:
└─ December: Complete re-certification of all roles and access
```

---

### COMPONENT 4: Documentation Artifacts

**Role Specifications (Complete Template Implemented):**

```
Example: Finance_Manager Role

Purpose:
 Manage company financial operations, approve transactions, reconcile accounts.
 Required for: CFO, Accounting managers, financial planning staff.

Owner: Casey Kim (Finance Manager)
Status: Active
Created: Module 5.20
Last Reviewed: Today

Access Includes:
 ├─ QB_Admin (create/approve invoices, post GL, reconcile)
 ├─ Reports_Finance (P&L, balance sheet, aging reports)
 ├─ Bank_Access (view transfers, approve payments)
 └─ GL_Reconciliation (period close, variance analysis)

Users: Casey Kim (1 user)

SoD Conflicts (Cannot combine with):
 ├─ Finance_AP_Clerk role (conflict with creation + approval)
 ├─ Create_GL_Entry + Reconcile_GL combo
 └─ Delete_Invoice entitlement

Certification:
 ├─ Quarterly: Q1 certification
 ├─ Owner: Casey Kim
 └─ Next review: April 2026

(Repeat for all 11 standard + 8 dynamic roles)
```

**SoD Conflicts Matrix (Complete):**

```
 Create Invoice Approve Invoice Post GL Delete GL Manage Audit
AP Clerk ✓ ✗ ✗ ✗ ✗
Finance Manager ✗ ✓ ✓ ✓ ✗
Senior Accountant ✗ ✗ ✓ ✗ ✗
Create User ✓ ✗ ✗ ✗ ✗
Approve Access ✗ ✓ ✗ ✗ ✗
Deploy Code ✓ ✗ ✗ ✗ ✗
Approve Deploy ✗ ✓ ✗ ✗ ✗
System Admin ✗ ✗ ✗ ✗ ✓*
Audit Manager ✗ ✗ ✗ ✗ ✗

* System Admin + Manage Audit flagged for review (compensating controls exist)
✓ = Has this permission
✗ = Does NOT have this permission (enforced by SoD rule)
```

**Access Model Diagram (Conceptual):**

```
Contoso Ltd (50 people)
│
├─ Finance Dept (3 users)
│ ├─ Finance_Manager → QB_Admin, Reports_Finance, Bank_Access
│ ├─ Senior_Accountant → QB_User, GL_Reporting
│ └─ AP_Clerk → QB_Invoice_Entry, Expense_Reporting
│ └─ Finance_Employee (dynamic) → QB_User (all dept members)
│
├─ Engineering Dept (3 users)
│ ├─ Engineer_Senior → GitHub_Admin, Jenkins_Admin, AWS_Prod
│ ├─ Engineer_Developer → GitHub_User, Jenkins_Build, AWS_Dev
│ └─ DevOps → GitHub_Admin, Jenkins_Full, AWS_Infrastructure
│ └─ Engineering_Employee (dynamic) → GitHub_User (all dept members)
│ └─ Technical_Staff (dynamic) → Tools_Admin (dept + IT)
│
├─ IT Dept (2 users)
│ ├─ IT_Administrator → AD_Admin, Exchange_Admin, ISC_Admin
│ └─ Security_Officer → ISC_Monitor, Audit_Reports, Security_Tools
│ └─ IT_Employee (dynamic) → Tools_Admin (all dept members)
│ └─ Technical_Staff (dynamic) → Tools_Admin (engineering + IT)
│
├─ Sales Dept (2 users)
│ ├─ Sales_Rep → Salesforce_User, CRM_Reports, Slack_Sales
│ └─ Sales_Rep → Salesforce_User, CRM_Reports, Slack_Sales
│ └─ Sales_Employee (dynamic) → Salesforce_User (all dept members)
│
└─ HR Dept (2 users)
 ├─ HR_Specialist → ADP_User, Workday_Benefits, Recruiting_Tools
 ├─ HR_Manager → ADP_Admin, Workday_Admin, Recruiting_Admin
 └─ HR_Employee (dynamic) → ADP_User (all dept members)
```

---

### COMPONENT 5: Final Validation Results

**User Coverage Audit:**

```
✅ All 13 users assigned to appropriate roles
✅ Each user has minimum required access
✅ No users without roles (zero orphans)
✅ All departments covered
✅ All job functions mapped to roles

User Breakdown:
├─ Finance: Casey, Morgan, User5 (3 users, 3 standard roles + Finance_Employee)
├─ Engineering: Alex, User4, User12 (3 users, 3 standard roles + Engineering_Employee + Technical_Staff)
├─ IT: User10, User11 (2 users, 2 standard roles + IT_Employee + Technical_Staff)
├─ Sales: User6, User7 (2 users, 1 standard role + Sales_Employee)
├─ HR: User8, User9 (2 users, 2 standard roles + HR_Employee)
└─ TOTAL: 13 users, 11 standard + 8 dynamic roles, zero gaps
```

**Entitlement Coverage Audit:**

```
✅ Finance Manager: QB_Admin, Reports, Bank, GL_Reconciliation ✓
✅ Engineer Developer: GitHub, Jenkins staging, AWS dev ✓
✅ Sales Rep: Salesforce, CRM Reports, Slack ✓
✅ HR Specialist: ADP, Workday, Recruiting Tools ✓
✅ IT Admin: AD, Exchange, ISC Admin ✓
✅ Security Officer: ISC Monitor, Audit Reports, Security Tools ✓

(Repeat for all 13 users - all have required entitlements)

Result: 100% entitlement coverage
```

**SoD Compliance Audit:**

```
✅ Casey Kim (Finance_Manager, Finance_Employee):
 └─ NOT assigned Finance_AP_Clerk (conflict prevented) ✓

✅ User5 (Finance_AP_Clerk, Finance_Employee):
 └─ NOT assigned Finance_Manager (conflict prevented) ✓

✅ User10 (IT_Administrator, IT_Employee):
 └─ NOT assigned Approve_Access_Request (conflict prevented) ✓

(Repeat for all users - ZERO violations)

Result: 100% SoD compliance, 6+ rules actively enforcing
```

**Dynamic Role Validation:**

```
✅ Engineering_Employee: 3 users, auto-assigned, rule active
✅ Finance_Employee: 3 users, auto-assigned, rule active
✅ Sales_Employee: 2 users, auto-assigned, rule active
✅ HR_Employee: 2 users, auto-assigned, rule active
✅ IT_Employee: 2 users, auto-assigned, rule active
✅ Technical_Staff: 5 users (engineering + IT), auto-assigned, rule active
✅ Managers: 2-3 users, auto-assigned, rule active
✅ Senior_Staff: 4 users, auto-assigned, rule active

Result: 8 dynamic roles functioning perfectly
```

**Documentation Completeness:**

```
✅ Role specifications documented (all 11 standard roles)
✅ Dynamic role specifications documented (all 8 dynamic roles)
✅ SoD conflicts matrix completed (6+ rules documented)
✅ Approval workflows configured (role owner + manager approval)
✅ Certification schedule defined (quarterly + annual)
✅ Access model diagram created (user view)
✅ This validation completed
```

---

## 🎓 BUSINESS VALUE DELIVERED

### Risk Reduction

**Before Access Modeling:**
```
Risk: Finance person could create AND approve own invoices
Impact: $100K+ potential fraud per year
Mitigation: Manual spot-checking (unreliable)
```

**After Access Modeling:**
```
Risk: Finance person CANNOT create AND approve (SoD prevents it)
Impact: Fraud impossible without collusion
Mitigation: Technical enforcement (100% reliable)
```

**Security Improvement:**
```
Before: 13 users had ad-hoc access = unclear who has what
After: 11 standard roles + 8 dynamic roles = clear visibility

Compliance:
Before: Manual audits, hard to prove controls
After: ISC logs all access decisions, complete audit trail
```

### Operational Benefits

**Onboarding (new hire):**
```
Before: Manual role assignment by IT, ~ per person, error-prone
After: Dynamic rules auto-assign based on department (instant + accurate)

Department Transfer (person changes jobs):**
Before: Manual role removal + assignment, forget something? They keep old access
After: Dynamic rules re-evaluate = automatic access changes, zero orphan access

Offboarding (person leaves):**
Before: Manual removal of all access, easy to miss one
After: Remove person from ISC = all role memberships (dynamic + standard) auto-deleted
```

**Governance:**
```
Before: No clear role ownership, no one responsible for access review
After: Each role has owner, quarterly certifications, approval workflows

Cost:**
Before: Manual IT effort managing access
After: Automation, compliance proof, risk reduction
```

---

## ✅ UNIT 5 COMPLETE CHECKLIST

### Fundamentals (Modules 5.1-5.5)
- ☑ Access modeling definition and importance
- ☑ Role design principles
- ☑ Standard vs dynamic roles comparison
- ☑ Business role definition
- ☑ Entitlements and access profiles

### Role Creation (Modules 5.6-5.10)
- ☑ Standard role creation (Finance, Engineering, IT, Sales, HR)
- ☑ User-to-role assignment (all 13 users)
- ☑ Role hierarchy and inheritance

### Dynamic Roles (Modules 5.11-5.14)
- ☑ Dynamic role fundamentals
- ☑ Basic dynamic rules (department-based)
- ☑ Advanced dynamic rules (AND/OR logic)
- ☑ Dynamic role testing and validation

### Separation of Duties (Modules 5.15-5.18)
- ☑ SoD concepts and importance
- ☑ Finance SoD rules (3+ rules)
- ☑ IT/Security SoD rules (3+ rules)
- ☑ SoD rule testing and enforcement

### Governance (Modules 5.19-5.21)
- ☑ Role ownership assignment
- ☑ Approval workflows configuration
- ☑ Role documentation and specifications
- ☑ SoD matrix and access model diagram
- ☑ Comprehensive validation audit

### Capstone (Module 5.22)
- ☑ Complete access model review
- ☑ All components operational
- ☑ Validation results confirmed
- ☑ Business value demonstrated
- ☑ Ready for Unit 6

---

## 🎯 WHAT'S NEXT: UNIT 6 - PROVISIONING & DEPROVISIONING

The access model is now complete and validated. Unit 6 takes this design and actually PROVISIONS it (pushes access to real systems).

**Unit 6 Will Cover:**

```
Provisioning Concepts (6.1-6.5):
├─ How provisioning works (ISC → target systems)
├─ Connector architecture
├─ Workflow automation
├─ Error handling

Contoso Provisioning Setup (6.6-6.15):
├─ Create provisioning workflows for each system
├─ Test provisioning with subset of users
├─ Validate access was actually granted

Advanced Scenarios (6.16-6.20):
├─ Deprovisioning (removing access)
├─ Re-provisioning (fixing access)
├─ Emergency access (break glass)
└─ Disaster recovery

Total: 20 modules, ~ each = 
```

**Why Provisioning Matters:**
```
Access Model (Unit 5): "Casey should have QB_Admin access"
Provisioning (Unit 6): "Give Casey QB_Admin access in QuickBooks"

Without provisioning, the access model is just documentation.
With provisioning, the access model becomes REAL enforced access.
```

---

## 📊 CURRICULUM PROGRESS

```
Complete Progress:
├─ Unit 1: ISC Fundamentals (20 modules) ✅ COMPLETE
├─ Unit 2: Entra ID Setup & ISC Sandbox (22 modules) ✅ COMPLETE
├─ Unit 3: Identity Profiles & Sources (18 modules) ✅ COMPLETE
├─ Unit 4: Aggregation & Correlation (18 modules) ✅ COMPLETE
├─ Unit 5: Access Modeling (22 modules) ✅ COMPLETE ← YOU ARE HERE
│
├─ Unit 6: Provisioning & Deprovisioning (20 modules) ⏳ NEXT
├─ Unit 7: Governance & Certification (20 modules) ⏳ PLANNED
├─ Unit 8: Identity Analytics (18 modules) ⏳ PLANNED
├─ Unit 9: Advanced ISC Features (20 modules) ⏳ PLANNED
└─ Unit 10-14: Specialization tracks... ⏳ PLANNED

Total Progress: 100 of 226-260 modules (38% complete)
Students Ready: Units 1-5 teach complete access model design
Next Challenge: Unit 6 teaches how to actually deliver that access
```

---

## 🎓 CERTIFICATION

**Q:** What is the complete Contoso access model structure?

A) Only 13 standard roles
B) Only 8 dynamic roles
C) ✅ 11 standard roles + 8 dynamic roles with SoD enforcement
D) No role structure (just manual assignment)

**Answer: C.** Complete model = manual + dynamic roles with SoD rules preventing conflicts.

**Q:** If a new engineer is hired, what happens to role assignments?

A) Manual IT admin must assign roles ()
B) ✅ Dynamic rules auto-assign Engineering_Employee role (instant)
C) New hire has no access until next quarter review
D) New hire must request access manually

**Answer: B.** Dynamic role rules continuously evaluate. New employee with dept=Engineering auto-included.

**Q:** Why is the SoD rule preventing Finance_AP_Clerk + Finance_Manager so important?

A) It's just bureaucracy
B) ✅ It prevents fraud by ensuring invoices require two people (creator + approver)
C) It slows down business processes
D) It's only needed for large companies

**Answer: B.** SoD prevents one person from creating AND approving fraudulent transactions.

---

## 📚 RESOURCES

- [Module 5.21: Access Model Validation](/modules/5.21-access-model-validation)
- [Unit 6: Provisioning & Deprovisioning](/units/6-provisioning-deprovisioning)
- [Unit 5 Complete: All 22 Modules](/units/5-access-modeling)

---

## ✅ COMPLETION SUMMARY

🎉 **Unit 5: Access Modeling is COMPLETE**

**What You've Accomplished:**

1. ✅ Designed complete access model for 13-user organization
2. ✅ Created 11 standard roles covering all departments and job functions
3. ✅ Created 8 dynamic roles for automatic membership based on attributes
4. ✅ Implemented 6+ SoD rules preventing fraud and unauthorized access
5. ✅ Assigned role owners and governance structure
6. ✅ Documented all roles, policies, and workflows
7. ✅ Validated 100% user coverage, 100% entitlement coverage, 0% SoD violations
8. ✅ Ready to provision access in Unit 6

**Ready for Unit 6:** Your access model is production-ready. You now understand how to design access for real organizations. Next you'll learn how to actually deliver that access to target systems.

**
**Knowledge Level:** Can design role structures, implement SoD controls, and validate access models

Proceed to Unit 6: Provisioning & Deprovisioning when ready. The hard part (designing access correctly) is done. Now comes the technical implementation (actually granting access).

---
