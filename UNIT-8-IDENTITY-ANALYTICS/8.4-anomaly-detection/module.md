# 8.4 - Anomaly Detection

**Unit:** Identity Analytics | **Tier:** 2 | 

Detect access anomalies: Identify unusual patterns, investigate causes, recommend actions.

---

## 🎯 Learning Objectives

- Understand anomaly detection
- Identify unusual access patterns
- Investigate root causes
- Recommend corrective actions

---

## 📋 Prerequisites

Module 8.3: Entitlement Intelligence. Entitlements understood.

---

## 📚 HANDS-ON LAB

### What Is an Anomaly?

```
Definition:
Anomaly = Access that doesn't fit expected pattern

Normal Patterns:
├─ Finance users have QB, AD, ADP access
├─ Engineers have GitHub, AWS, AD access
├─ IT admins have AD admin, GitHub admin
└─ Sales reps have Salesforce, AD, QB read-only

Anomalies:
├─ Sales rep with AWS developer access (unexpected)
├─ Finance AP clerk with QB admin (escalated)
├─ Engineer with ADP payroll access (wrong system)
└─ Non-IT user with domain admin rights (unusual)
```

### Anomaly Detection Methods

```
Method 1: Peer Group Comparison
├─ Baseline: What access does this role normally have?
├─ User: Does individual match role baseline?
├─ If different: Why? Is it justified?
├─ Example: All 3 engineers have GitHub + AWS
│ → User4 has GitHub + AWS + ADP
│ → ANOMALY: Why has ADP (payroll)?

Method 2: Statistical Outliers
├─ Normal: Finance users have 2-3 roles
├─ User10 (IT): Has 6 roles
├─ Calculation: > 2 standard deviations = outlier
├─ Finding: IT admin access concentration unusual
├─ Investigation: Is it necessary?

Method 3: Access Velocity
├─ Normal: User gets access slowly (1-2 per month)
├─ User7: Got 3 accesses in 
├─ Finding: Rapid access grant (unusual)
├─ Cause: New project role assigned
├─ Status: Explained, not anomalous

Method 4: Historical Baseline
├─ User5 historically: QB access only
├─ Today: QB + ADP + GitHub access
├─ Change: Big jump in access (3x normal)
├─ Cause: Promotion to senior role
├─ Status: Expected (role change), not anomaly

Method 5: System Access Pattern
├─ QB users: All from Finance department
├─ User6 (Sales): Has QB read-only access
├─ Finding: Outside normal QB user group
├─ Verification: Sales rep needs QB for commissions
├─ Status: Explained exception
```

### Anomaly Examples & Investigation

```
Anomaly #1: User6 (Sales Rep) with AWS Access

Detection:
├─ Finding: User6 assigned AWS developer role
├─ Expected: Only Salesforce + AD + QB read
├─ Variation: New system outside pattern
└─ Alert: Unusual access for sales

Investigation:
├─ Question: Why does sales rep need AWS?
├─ Interview: Sales manager explains
├─ Finding: Assigned to "Sales Engineer" project
├─ Requirement: Needs staging environment access
└─ Justification: Legitimate project role

Determination:
├─ Classification: EXPLAINED (not true anomaly)
├─ Documentation: Project + role documented
├─ Monitoring: Remove access when project ends
└─ Status: Documented exception (time-bound)

Anomaly #2: User10 Access Expansion

Detection:
├─ Finding: IT admin access across 4 systems
├─ Expected: AD admin + maybe GitHub
├─ Variation: More systems than historical pattern
└─ Alert: High privilege concentration increase

Investigation:
├─ Question: Why expand AWS + ADP admin?
├─ Interview: IT director explains
├─ Finding: Business requirements changed
├─ Role: Now managing cloud + HR systems
└─ Justification: Required for infrastructure

Determination:
├─ Classification: EXPECTED (role expansion)
├─ Documentation: Role definition updated
├─ Monitoring: Quarterly review (high-risk user)
└─ Status: Legitimate access elevation

Anomaly #3: User5 System Access

Detection:
├─ Finding: QB clerk has ADP access
├─ Expected: QB only for AP role
├─ Variation: System outside normal pattern
└─ Alert: Finance employee accessing HR system

Investigation:
├─ Question: Why ADP access for AP clerk?
├─ Check: No documented business reason
├─ Finding: Access likely from old project (6 mo ago)
├─ Root Cause: Deprovisioning not completed
└─ Conclusion: Unnecessary access (access creep)

Determination:
├─ Classification: VIOLATION (access creep)
├─ Action: Remove ADP access immediately
├─ Prevention: Improve deprovisioning process
└─ Status: Remediated, process improved
```

### Anomaly Scoring

```
Anomaly Risk Score (1-10):

Risk Factors:
├─ Privilege level: Admin = 5, Editor = 2, Read = 1
├─ System sensitivity: Finance/HR = 5, Ops = 3, General = 1
├─ Expected pattern match: Matches 1, Unusual 3, Unexpected 5
├─ Justification: Documented = 1, Unclear = 3, None = 5
└─ 

Calculation:
Score = (Privilege + Sensitivity + Expectation + Justification + Duration) / 5

Example 1 - User6 AWS Access:
├─ Privilege: 3 (developer)
├─ Sensitivity: 3 (infrastructure)
├─ Expectation: 3 (unusual for sales)
├─ Justification: 1 (project documented)
├─ 
├─ Score: 2.4 (LOW RISK - explained)
└─ Action: Monitor, remove when project ends

Example 2 - User5 ADP Access:
├─ Privilege: 2 (standard user)
├─ Sensitivity: 5 (HR/payroll)
├─ Expectation: 5 (no business reason)
├─ Justification: 5 (no justification)
├─ 
├─ Score: 4.4 (MEDIUM-HIGH RISK - action needed)
└─ Action: Remove access immediately

Scoring Guide:
├─ 1-2: Low risk (monitor)
├─ 2-4: Medium risk (investigate)
├─ 4-6: High risk (remediate)
└─ 6-10: Critical risk (immediate action)
```

---

## 🧪 EXPECTED RESULTS

✅ Anomalies detected automatically
✅ Root causes investigated
✅ Risk scores assigned
✅ Corrective actions recommended

---

## ✅ SUCCESS CRITERIA

- ☑️ Anomaly detection methods understood
- ☑️ Anomalies identified and scored
- ☑️ Root causes determined
- ☑️ Justifications documented
- ☑️ Corrective actions recommended

---

## 🎓 CERTIFICATION

**Q:** User10 (IT admin) gets ADP access. Anomaly score = 2.2. What happens?

A) Immediate removal
B) ✅ Monitor (low risk, likely role-appropriate)
C) Escalate to CISO
D) Add to high-risk list

**Answer: B.** Low anomaly score = monitor, not immediate action.

---

## 📚 RESOURCES

- [Module 8.3: Entitlement Intelligence](/modules/8.3-entitlement-intelligence)
- [Next: 8.5 - Risk Scoring & Prediction](/modules/8.5-risk-scoring-prediction)

---

## ✅ NEXT STEPS

1. Detect access anomalies
2. Score risk level
3. Investigate causes
4. Proceed to 8.5
