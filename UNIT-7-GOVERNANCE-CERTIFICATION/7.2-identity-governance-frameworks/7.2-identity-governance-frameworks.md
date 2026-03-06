# 7.2 - Identity Governance Frameworks

**Unit:** Governance & Certification | **Tier:** 2 | 

---

## 🎯 Learning Objectives

- Know RBAC vs ABAC governance
- Understand role ownership model
- Know approval workflows
- Understand compliance frameworks

---

## 📋 Prerequisites

Module 7.1: Governance Fundamentals. Governance concepts understood.

---

## 📚 CORE CONCEPTS

### RBAC vs ABAC Governance

**RBAC (Role-Based Access Control):**

```
Access based on: Role assignment

Structure:
├─ User has role
├─ Role has permissions
└─ Access = permissions in user's roles

Governance:
├─ Review: Is user in correct role?
├─ Certification: Role owner certifies membership
├─ Changes: Add/remove roles as needed
└─ Simple: Easy to understand and audit

Contoso: Uses RBAC (Finance_Manager, Engineer_Developer, etc.)
```

**ABAC (Attribute-Based Access Control):**

```
Access based on: User attributes (department, job title, location, etc.)

Structure:
├─ Rules: IF department = "Finance" THEN access = QB
├─ Dynamic: Access changes automatically when attributes change
└─ Flexible: No manual role assignment needed

Governance:
├─ Review: Do the rules still make sense?
├─ Certification: Audit rule logic quarterly
├─ Changes: Update rules when job requirements change
└─ Complex: Need to understand rules

Contoso: Uses ABAC for dynamic roles (Finance_Employee, Engineering_Employee)
```

**Hybrid Approach (Contoso):**

```
Combine both:
├─ RBAC: Manual role assignment for specific functions
├─ ABAC: Automatic dynamic role assignment based on attributes
└─ Result: Flexibility + Simplicity
```

---

### Role Ownership Model

**Every Role Has Owner:**

```
Finance_Manager Role:
├─ Owner: Casey Kim (the Finance Manager)
├─ Responsibility: Ensure role members have correct permissions
├─ Quarterly: Certify that members still need access
├─ Approve: New assignments to this role
└─ Update: Modify role if job requirements change

Engineer_Senior Role:
├─ Owner: Alex Lee
├─ Certification: Quarterly review of members
├─ Approval: Can add new engineers to senior role
└─ Maintenance: Update permissions as needed
```

**Ownership Hierarchy:**

```
CEO
├─ Finance Manager (Casey) owns Finance_Manager, Senior_Accountant, AP_Clerk roles
├─ Engineering Manager (Alex) owns Engineer_Senior, Developer, DevOps roles
├─ IT Director (User10) owns IT_Administrator, Security_Officer roles
└─ etc.
```

---

### Approval Workflows

**Access Request → Approval → Provisioning:**

```
User1 requests: "I need GitHub access"

Step 1: Submission
├─ User: Submits access request in ISC
├─ Reason: "Need to review code for project X"
└─ Role: Engineer_Developer

Step 2: Routing
├─ ISC: Routes to role owner (Alex Lee)
├─ OR: Routes to manager (if policy requires)
└─ Based on: Role and user department

Step 3: Approval
├─ Alex receives: "User1 requesting Engineer_Developer role"
├─ Alex reviews: "Does User1 need this? Is purpose legitimate?"
├─ Alex decides: Approve ✓ or Deny ✗
└─ Alex comments: "Approved, needed for project X"

Step 4: Provisioning
├─ If approved: ISC automatically provisions GitHub access
├─ If denied: User notified of rejection
└─ Audit: All decision logged

Step 5: Certification
├─ Quarterly: Alex must certify User1 still needs access
├─ If no longer needed: Access removed
└─ Ongoing: Access governed continuously
```

---

### Compliance Frameworks

**SOX (Sarbanes-Oxley - Finance):**

```
Requirement: Access segregation in finance systems
├─ Who: Anyone with financial access
├─ What: Cannot have both create + approve (SoD)
└─ How: ISC enforces SoD rules

Contoso:
├─ Finance users: Subject to SoD controls
├─ QB access: Cannot approve own invoices
├─ Governance: Quarterly certification of financial access
└─ Audit: Prove controls work
```

**HIPAA (Health Insurance - if applicable):**

```
Requirement: Access based on "need to know"
├─ Who: Healthcare staff
├─ What: Only access patient data needed for job
└─ How: Access approval + quarterly review

Contoso: Not healthcare, but same principles apply
```

**GDPR (General Data Protection - EU):**

```
Requirement: Right to access, right to be forgotten
├─ Who: Anyone processing personal data
├─ What: Document who has data access, why
└─ How: Audit trail, easy data removal on request

Contoso:
├─ If EU employees: Must comply
├─ Access: Documented and justified
└─ Offboarding: Complete data deletion possible
```

**NIST (General Security Framework):**

```
Recommendation: Regular access reviews
├─ Quarterly: Review access against job function
├─ Annual: Full enterprise access audit
├─ Risk-based: Extra scrutiny for sensitive access
└─ Remediation: Remove unauthorized access

Contoso:
├─ Governance: Quarterly reviews (follows NIST)
├─ Certification: Role owners sign-off
└─ Compliance: Ready for audits
```

---

## 🧠 KEY TAKEAWAYS

- RBAC: Role-based (manual assignment) + ABAC (rule-based automatic)
- Role ownership: Every role has owner responsible for oversight
- Approval workflows: Request → Approve → Provision → Govern
- Compliance frameworks: SOX, HIPAA, GDPR, NIST guide governance
- Contoso: Hybrid RBAC + ABAC with role ownership and quarterly reviews

---

## ✅ SUCCESS CRITERIA

- ☑️ Understand RBAC vs ABAC
- ☑️ Know role ownership model
- ☑️ Know approval workflow steps
- ☑️ Know compliance framework requirements

---

## 🎓 CERTIFICATION

**Q:** What's role ownership?

A) Executive responsible for all access
B) ✅ Person responsible for specific role's correctness
C) Same as department manager
D) ISC system ownership

**Answer: B.** Role owner = person accountable for role members and permissions.

---

## 📚 RESOURCES

- [Module 7.1: Governance Fundamentals](/modules/7.1-governance-fundamentals)
- [Next: 7.3 - Access Reviews Concepts](/modules/7.3-access-reviews-concepts)

---

## ✅ NEXT STEPS

1. Understand governance frameworks
2. Know RBAC and ABAC approaches
3. Proceed to 7.3 for access review process

