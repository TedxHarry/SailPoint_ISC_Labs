# 8.3 - Entitlement Intelligence

**Unit:** Identity Analytics | **Tier:** 2 | **Duration:** ~10 hours

Discover entitlements: Analyze permissions, identify unnecessary access, optimize assignments.

---

## 🎯 Learning Objectives

- Understand entitlements and permissions
- Identify unnecessary access
- Discover redundant roles
- Optimize access assignments

---

## 📋 Prerequisites

Module 8.2: Access Pattern Analysis. Patterns understood.

---

## 📚 HANDS-ON LAB

### Entitlement Mapping

```
Definition:
Entitlement = Specific permission/access granted to user
Example: "QB Admin permission" or "GitHub Contributor role"

For Each User:
├─ What systems do they access?
├─ What permission level in each system?
├─ What groups are they in?
├─ What roles do they have?
└─ What data can they access?

Contoso Example - Casey Kim (Finance_Manager):

Entitlements:
├─ QB: admin (can approve invoices, run reports)
├─ AD: Finance group (domain access), Finance_Manager group
├─ ADP: Payroll admin features (view all employee data)
├─ GitHub: Read-only (view code, not required)
└─ AWS: None (not needed)

Analysis:
├─ QB admin: REQUIRED (manager needs approval capability)
├─ AD access: REQUIRED (foundational, all employees)
├─ ADP payroll: REQUIRED (needs budget/compensation info)
├─ GitHub read: QUESTIONABLE (not part of finance duties)
└─ AWS none: CORRECT (not needed)

Finding: GitHub access may be unnecessary
Action: Investigate if still needed
```

### Unnecessary Access Discovery

```
Common Patterns of Unnecessary Access:

1. Access Creep (Old Role, New Job):
   User: User4 (former Developer, now Senior)
   ├─ Old role: Engineer_Developer
   ├─ New role: Engineer_Senior
   ├─ Issue: Still has Developer access even though promoted
   ├─ Impact: Highest-level access + lower-level access
   ├─ Discovery: Role changed but access not updated
   └─ Action: Remove old Developer access

2. Project Ended Access Not Removed:
   User: User7 (Sales Rep)
   ├─ Project: Sales Engineer initiative (ended 6 months ago)
   ├─ Granted: AWS developer access (temporary)
   ├─ Issue: Still has AWS access after project ended
   ├─ Discovery: Exception should have auto-expired
   └─ Action: Remove AWS access, improve auto-expiration

3. System That User Doesn't Actually Use:
   User: Casey Kim (Finance Manager)
   ├─ Access: GitHub read-only
   ├─ Usage: Requested by manager "just in case"
   ├─ Reality: Never accessed or used
   ├─ Discovery: Check system access logs
   └─ Action: Remove if not used in 90 days

4. Redundant Role Assignment:
   User: User10 (IT Administrator)
   ├─ Roles: IT_Administrator + IT_Senior_Admin + Security_Ops
   ├─ Issue: Three roles with overlapping permissions
   ├─ Impact: Confusing, too much privilege
   ├─ Discovery: Role comparison shows redundancy
   └─ Action: Keep highest, remove lower two

5. Wrong Department Access:
   User: User5 (Finance AP Clerk)
   ├─ Access: QB (finance), ADP (finance), LinkedIn Sales (why?)
   ├─ Issue: Sales system access inappropriate
   ├─ Discovery: System doesn't match department
   └─ Action: Remove LinkedIn access
```

### Access Optimization

```
Optimization Opportunity #1:

Current State:
├─ User4: Has Engineer_Developer + Engineer_Senior roles
├─ Both roles provide: GitHub contributor + AWS staging access
├─ Impact: Redundant permissions
├─ Storage: Both roles active, creating duplicate access

Optimized State:
├─ Remove: Engineer_Developer role
├─ Keep: Engineer_Senior role
├─ Result: Same access, cleaner assignment
├─ Benefit: Easier to manage, faster deprovisioning

Opportunity #2:

Current State:
├─ GitHub Access: 6 users total
├─ All assigned: "Engineer" + specific role-based permissions
├─ Issue: Too granular, hard to manage

Optimized State:
├─ Create: GitHub_Engineering team (composite)
├─ Members: Auto-add based on dept = Engineering
├─ Benefit: Simpler, auto-provisioning, faster updates

Opportunity #3:

Current State:
├─ Exceptions granted: 2 time-bound
├─ Tracking: Scattered across tickets
├─ Expiration: Manual reminder system

Optimized State:
├─ Centralized: All exceptions in ISC dashboard
├─ Auto-expiration: System removes on date
├─ Notifications: 30-day before reminder
├─ Benefit: No manual overhead, compliance tracked
```

### Entitlement Audit Results

```
ISC Entitlement Intelligence Report:

Audit Findings:

Finding #1 (HIGH): Redundant Role - User10
├─ User: User10 (IT Administrator)
├─ Roles: IT_Administrator + Security_Ops (redundant)
├─ Issue: Both provide domain admin access
├─ Recommendation: Remove redundant role
├─ Impact: Cleaner access, same functionality
└─ Timeline: Immediate

Finding #2 (MEDIUM): Unused Access - User7
├─ User: User7 (Sales Rep)
├─ Access: AWS developer access (90+ days unused)
├─ Reason: Old project (ended 6 months ago)
├─ Recommendation: Remove if still not needed
├─ Verification: Manager confirmation needed
└─ Timeline: 30 days

Finding #3 (LOW): Questionable Access - Casey
├─ User: Casey Kim (Finance Manager)
├─ Access: GitHub read-only (not in job description)
├─ Reason: Might be used for vendor communications
├─ Recommendation: Verify business need
├─ Verification: Manager interview
└─ Timeline: 60 days

Optimization Summary:

Access Removed:
├─ Redundant roles: 1
├─ Unused systems: 1
└─ Total: 2 access removals (benefit: simplified management)

Access Kept:
├─ Verified as needed: All reviewed access
├─ Business justified: All exceptional access
└─ Total: All remaining access is appropriate

Entitlement Health Score: 92/100
├─ Actual: 92% of access is necessary
├─ Minimal: Only 8% redundant/unnecessary
├─ Trend: Improving (was 90% last year)
└─ Target: > 95% by end of year
```

---

## 🧪 EXPECTED RESULTS

✅ Entitlements mapped
✅ Unnecessary access identified
✅ Optimization opportunities found
✅ Redundancy eliminated

---

## ✅ SUCCESS CRITERIA

- ☑️ Entitlements documented
- ☑️ Unnecessary access identified
- ☑️ Redundancies found
- ☑️ Optimization plan created
- ☑️ Cleanup executed

---

## 🎓 CERTIFICATION

**Q:** User has been in new role for 6 months but old role's systems still assigned. What should happen?

A) Keep it (might need it later)
B) ✅ Remove unnecessary access (clean up after role change)
C) Ask user if they want it
D) Never remove access

**Answer: B.** Old role access should be removed when user moves to new role.

---

## 📚 RESOURCES

- [Module 8.2: Access Pattern Analysis](/modules/8.2-access-pattern-analysis)
- [Next: 8.4 - Anomaly Detection](/modules/8.4-anomaly-detection)

---

## ✅ NEXT STEPS

1. Map current entitlements
2. Identify unnecessary access
3. Find redundant roles
4. Proceed to 8.4
