# 7.3 - Access Reviews Concepts

**Unit:** Governance & Certification | **Tier:** 2 | **Duration:** ~10 hours

---

## 🎯 Learning Objectives

- Understand access review types
- Know review schedules
- Understand certification process
- Know review scope and participants

---

## 📋 Prerequisites

Module 7.2: Identity Governance Frameworks. Frameworks understood.

---

## 📚 CORE CONCEPTS

### Access Review Types

**Quarterly Department Reviews:**

```
Who: Department managers
When: Every 3 months (Q1, Q2, Q3, Q4)
Scope: Their department's team members
Task: "Does everyone still have the right access for their current job?"

Process:
1. Manager receives: Report of team's current access
2. Manager reviews: Each team member's roles and entitlements
3. Manager certifies: "Correct" or "Needs change"
4. ISC records: Certification with timestamp and approver
5. Remediation: If changes needed, execute them
```

**Role Certification:**

```
Who: Role owners
When: Quarterly (same schedule)
Scope: Specific role (Finance_Manager, Engineer_Developer, etc.)
Task: "Are all members of this role supposed to be here?"

Process:
1. Role owner receives: List of current role members
2. Role owner reviews: Each member
3. Role owner certifies: "All correct" or "Remove X person"
4. ISC records: Certification
5. Remediation: Remove anyone not certified
```

**Annual Full Review:**

```
Who: Executives, compliance team
When: Annually (once per year)
Scope: Entire organization
Task: "Complete access audit, are all controls working?"

Process:
1. Full audit: Every user, every role, every system
2. Report: Detailed findings
3. Executive sign-off: Approve access governance
4. Remediation: Address any issues found
5. Compliance: Satisfies auditors
```

**Risk-Based Review:**

```
Who: Security team
When: As needed (continuous)
Scope: High-risk access (admin, finance, security)
Task: "Is access to sensitive systems justified?"

Process:
1. Identify: High-risk users or access
2. Verify: Legitimate access reason
3. Escalate: If access questionable
4. Remediate: Remove if not justified
5. Monitor: Alert on unusual activity
```

---

### Review Schedules

**Contoso Review Calendar:**

```
Q1 (Jan-Mar):
├─ Finance department review
├─ Finance_Manager role certification
├─ Finance_Employee dynamic role review
└─ Timing: End of March

Q2 (Apr-Jun):
├─ Engineering department review
├─ Engineer_Senior role certification
├─ Engineering_Employee dynamic role review
└─ Timing: End of June

Q3 (Jul-Sep):
├─ IT & Sales department reviews
├─ IT_Administrator role certification
├─ Sales_Representative role certification
└─ Timing: End of September

Q4 (Oct-Dec):
├─ HR department review
├─ Annual full organization audit
├─ Executive sign-off
└─ Timing: End of December (before year-end)

Continuous:
├─ Risk-based reviews (high-risk access)
├─ Ad-hoc reviews (role changes, departures)
└─ Monitoring (anomaly detection)
```

---

### Certification Process

**Step 1: Report Generation:**

```
ISC generates: "Finance Department Access Report"
├─ Users in Finance: Casey, Morgan, User5
├─ Each user's roles: Finance_Manager, Finance_Employee, etc.
├─ Each user's entitlements: QB access, ADP access, etc.
├─ System accounts: QB account (casey), AD account (casey), etc.
└─ Sent to: Department manager
```

**Step 2: Manager Review:**

```
Manager (Casey) reviews:
├─ Casey Kim: Finance_Manager role - CORRECT ✓
├─ Morgan Chen: Senior_Accountant role - CORRECT ✓
├─ User5: Finance_AP_Clerk role - CORRECT ✓
├─ All access matches current jobs
└─ All SoD rules enforced
```

**Step 3: Certification:**

```
Manager certifies: "I reviewed our team's access and certify it's correct"
├─ Timestamp: 2026-03-31 (Q1 deadline)
├─ Approver: Casey Kim (Finance Manager)
├─ Statement: "Reviewed and approved for Q1 2026"
└─ ISC records: Certification in audit trail
```

**Step 4: Remediation (if needed):**

```
If manager found issues during review:
├─ Issue: "User X has access they shouldn't"
├─ Action: Remove the access
├─ Ticket: Create remediation task
├─ Verify: Confirm access removed
└─ Document: Record reason for removal
```

**Step 5: Audit Trail:**

```
ISC audit log records:
├─ Q1 2026 certification: Completed by Casey Kim
├─ Date: 2026-03-31
├─ Scope: Finance department (3 users)
├─ Status: All access approved
└─ Issues: 0 (all correct)
```

---

### Review Scope

**Quarterly Review Covers:**

```
✓ All users in department
✓ All assigned roles
✓ All entitlements/permissions
✓ All system accounts
✓ All group memberships (AD groups, distribution lists)
✗ Does NOT include: User behavior monitoring or activity logs
```

---

## 🧠 KEY TAKEAWAYS

- Reviews: Quarterly (departments), Role certification (roles), Annual (full), Risk-based (sensitive access)
- Certification: Manager/role owner certifies access is correct
- Scope: All roles, entitlements, accounts, groups
- Frequency: Quarterly minimum, continuous risk monitoring
- Results: Approve, request change, or remove access

---

## ✅ SUCCESS CRITERIA

- ☑️ Know review types
- ☑️ Know review schedule
- ☑️ Know certification process
- ☑️ Know review scope

---

## 🎓 CERTIFICATION

**Q:** How often should departments review their team's access?

A) Annually
B) ✅ Quarterly (every 3 months)
C) Monthly
D) Never (one-time)

**Answer: B.** Quarterly reviews catch drift, prevent sprawl.

---

## 📚 RESOURCES

- [Module 7.2: Identity Governance Frameworks](/modules/7.2-identity-governance-frameworks)
- [Next: 7.4 - Design Review Workflow](/modules/7.4-design-review-workflow)

---

## ✅ NEXT STEPS

1. Understand access review types
2. Know certification process
3. Proceed to 7.4 to design review workflow

