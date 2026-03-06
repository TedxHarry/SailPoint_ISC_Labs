# 8.2 - Access Pattern Analysis

**Unit:** Identity Analytics | **Tier:** 2 | 

Analyze access patterns: Distribution, concentration, outliers, trends.

---

## 🎯 Learning Objectives

- Analyze access distribution
- Identify concentration of access
- Spot outliers and anomalies
- Trend access changes over time

---

## 📋 Prerequisites

Module 8.1: Analytics Fundamentals. Analytics concepts understood.

---

## 📚 HANDS-ON LAB

### Access Distribution Analysis

```
Contoso Access Snapshot (Q1 2026):

By Department:
┌─ Finance (3 users)
│  ├─ Total roles: 7
│  ├─ Total systems: 3 (QB, AD, ADP)
│  ├─ Admin users: 1 (Casey - Finance_Manager)
│  └─ Avg access per user: 2.3 roles
├─ Engineering (3 users)
│  ├─ Total roles: 8
│  ├─ Total systems: 3 (GitHub, AWS, AD)
│  ├─ Admin users: 2 (Alex, User12)
│  └─ Avg access per user: 2.7 roles
├─ IT (2 users)
│  ├─ Total roles: 6
│  ├─ Total systems: 4 (AD, GitHub, AWS, ADP)
│  ├─ Admin users: 2 (User10, User11)
│  └─ Avg access per user: 3.0 roles
├─ Sales (2 users)
│  ├─ Total roles: 3
│  ├─ Total systems: 3 (Salesforce, AD, QB)
│  ├─ Admin users: 0
│  └─ Avg access per user: 1.5 roles
└─ HR (2 users)
   ├─ Total roles: 4
   ├─ Total systems: 2 (ADP, AD)
   ├─ Admin users: 1 (User9)
   └─ Avg access per user: 2.0 roles

Pattern: IT/Engineering have highest access, Sales lowest (expected)
Observation: IT has higher admin concentration (2/2) vs others
```

### Privilege Distribution

```
By Privilege Level:

Read-Only Access:
├─ Users: 4 (User6, User7, User11, others)
├─ Systems: Mostly reporting/audit systems
├─ Percentage: 31% of total access
└─ Risk: Low (limited change capability)

Editor/Contributor Access:
├─ Users: 6 (most engineers, finance staff)
├─ Systems: QB, GitHub, ADP
├─ Percentage: 46% of total access
└─ Risk: Medium (can create/modify data)

Admin/Super-User Access:
├─ Users: 3 (Casey, User10, User12)
├─ Systems: QB, AD, GitHub, AWS, ADP
├─ Percentage: 23% of total access
└─ Risk: High (full control, requires oversight)

Distribution Analysis:
├─ Expected: 60% read, 30% editor, 10% admin
├─ Actual: 31% read, 46% editor, 23% admin
├─ Finding: Higher admin concentration than expected
├─ Recommendation: Review admin role necessity
└─ Action: Downgrade where possible to editor
```

### System Access Concentration

```
Which Users Can Access Which Systems:

QuickBooks (Finance):
├─ Users: 3 (Casey, Morgan, User5)
├─ All finance department (expected)
├─ Access level: Admin, Editor, Data Entry
└─ Concentration: 100% in finance (good)

GitHub (Engineering/IT):
├─ Users: 6 (Alex, User4, User12, User10, others)
├─ Spread: 3 engineering + 2 IT + 1 other
├─ Access level: Maintainer, Contributor, Member
└─ Concentration: Appropriate for dev/ops

AWS (Infrastructure):
├─ Users: 3 (Alex, User4, User12)
├─ Spread: 2 engineering + 1 DevOps
├─ Access level: Production, Staging, Audit
└─ Concentration: Limited appropriately (infrastructure-only)

Active Directory (Foundational):
├─ Users: 13 (all employees)
├─ Access level: Standard domain user
├─ Groups: Department-based + role-based
└─ Concentration: 100% (baseline requirement)

Salesforce (Sales):
├─ Users: 2 (User6, User7)
├─ All sales department (expected)
├─ Access level: Full user
└─ Concentration: 100% in sales (good)

Insight: Access appropriately concentrated by department/function
```

### Outliers and Anomalies

```
User-Level Anomalies:

User10 (IT Administrator):
├─ Access: AD admin, GitHub admin, AWS power user
├─ Systems: 4 (highest)
├─ Privilege: Admin (highest)
├─ Finding: Highest access concentration (expected for IT)
├─ Risk: High (justify quarterly)
└─ Status: EXPECTED (role-appropriate)

User12 (DevOps):
├─ Access: AWS full admin, GitHub admin, AD admin
├─ Systems: 3 (high)
├─ Privilege: Admin on all (100% admin access)
├─ Finding: All access is admin-level (unusual)
├─ Risk: High
└─ Status: ACCEPTABLE (infrastructure specialist)

User6 (Sales Rep):
├─ Access: Salesforce, AD, QB read-only
├─ Systems: 3
├─ Privilege: Standard user + read
├─ Finding: QB read-only (unusual for sales)
├─ Risk: Low
├─ Justification: Required for commission reports
└─ Status: ACCEPTABLE (documented)

User9 (HR Manager):
├─ Historic: ADP admin (project ended)
├─ Current: ADP standard + AD
├─ Systems: 2
├─ Finding: ADP admin access was removed (remediation)
├─ Risk: Was HIGH, now LOW
└─ Status: REMEDIATED ✓

Insight: Most access patterns are role-appropriate
Outliers identified and either justified or remediated
```

### Trend Analysis

```
Q1 2026 vs Q4 2025:

User Count:
├─ Q4 2025: 13 users (no changes during quarter)
├─ Q1 2026: 13 users (no new hires)
└─ Trend: STABLE

Access Count:
├─ Q4 2025: 65+ total access assignments
├─ Q1 2026: 65+ total access assignments
└─ Trend: STABLE (no growth or reduction)

New Requests:
├─ Q4 2025: 8 requests (1-2 per month)
├─ Q1 2026: 12 requests (4 per month)
├─ Trend: INCREASING (25% growth)
├─ Reason: More role movement (promotions, transfers)
└─ Action: Monitor if continues

Exceptions Granted:
├─ Q4 2025: 1 exception
├─ Q1 2026: 2 exceptions
├─ Trend: Slight increase
├─ Reason: Temporary project work
└─ Action: Track if becomes pattern

Access Removals:
├─ Q4 2025: 2 removals (deprovisioning)
├─ Q1 2026: 1 removal (remediation)
├─ Trend: Minimal (good - stable access)
└─ Observation: Access sticking (creep risk)

Violations Detected:
├─ Q4 2025: 0 SoD violations
├─ Q1 2026: 0 SoD violations
└─ Trend: GOOD (controls working)
```

---

## 🧪 EXPECTED RESULTS

✅ Access distribution mapped
✅ Privilege concentration analyzed
✅ Outliers identified
✅ Trends tracked

---

## ✅ SUCCESS CRITERIA

- ☑️ Distribution by department analyzed
- ☑️ Privilege levels understood
- ☑️ Outliers identified and explained
- ☑️ Trends documented
- ☑️ Insights documented

---

## 🎓 CERTIFICATION

**Q:** Access distribution shows IT has 2/2 admins. Q1 trend shows requests up 25%. What's the pattern?

A) Normal variation
B) ✅ Track it; if continues, may indicate need for better access delegation
C) Remove admin access immediately
D) Do nothing

**Answer: B.** Trends require monitoring; one quarter isn't definitive, but watch for patterns.

---

## 📚 RESOURCES

- [Module 8.1: Analytics Fundamentals](/modules/8.1-analytics-fundamentals)
- [Next: 8.3 - Entitlement Intelligence](/modules/8.3-entitlement-intelligence)

---

## ✅ NEXT STEPS

1. Analyze current access distribution
2. Identify concentration patterns
3. Document outliers
4. Proceed to 8.3
