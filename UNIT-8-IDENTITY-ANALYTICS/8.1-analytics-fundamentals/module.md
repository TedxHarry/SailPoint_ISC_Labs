# 8.1 - Analytics Fundamentals

**Unit:** Identity Analytics | **Tier:** 2 | **Duration:** ~10 hours

Understand identity analytics: Data collection, analysis types, business value.

---

## 🎯 Learning Objectives

- Understand analytics in identity governance
- Know data collection methods
- Understand analysis types
- Recognize business value of analytics

---

## 📋 Prerequisites

Unit 7: Governance & Certification complete. Foundation for analytics.

---

## 📚 CORE CONCEPTS

### What Is Identity Analytics?

```
Definition:
Identity Analytics = Using access data to understand patterns,
detect risks, and improve governance.

NOT about:
- Tracking user behavior/activity logs
- Monitoring individual logins
- Real-time activity alerts

YES about:
- Understanding access distribution (who has what)
- Finding access anomalies (unexpected patterns)
- Predicting access risks (high-risk users)
- Trending changes over time
- Identifying opportunities for access removal
- Improving governance decisions
```

### Data Sources

```
Identity Data Available for Analytics:

User Data:
├─ User profiles (name, department, location)
├─ Roles assigned (current + historical)
├─ Entitlements (access to systems)
├─ Account status (active, inactive, terminated)
├─ Attributes (job title, manager, cost center)
└─ Historical changes (hired, transferred, roles changed)

Access Data:
├─ System accounts created per user
├─ Permissions/groups assigned
├─ Access level (read, edit, admin)
├─ Application access (QB, GitHub, AWS, etc.)
├─ Access creation date (when provisioned)
└─ Access removal date (when deprovisioned)

Change Data:
├─ Provisioning events (access added)
├─ Deprovisioning events (access removed)
├─ Role changes (assigned/unassigned)
├─ Exception grants (temporary access)
├─ Approval decisions (approved/denied)
└─ Remediation actions (violations fixed)

Review Data:
├─ Certification decisions (access approved/questioned)
├─ Review completion rates (on-time vs late)
├─ Violations found (during reviews)
├─ Remediation completion (issues resolved)
└─ Exception requests (approved/denied)

Audit Data:
├─ All access changes logged
├─ Timestamps (exact timing of actions)
├─ Approvers (who authorized)
├─ Reasons (why access given/removed)
├─ Compliance status (compliant/non-compliant)
└─ Audit trail completeness (100% or gaps)
```

### Analysis Types

```
1. Descriptive Analytics (What happened?)
├─ Question: "How many users have admin access?"
├─ Answer: "12 users have admin role"
├─ Data: Count of users by role/privilege
├─ Timeline: Point-in-time snapshot
├─ Use: Understand current access state
└─ Example: "Finance has 3 users, 7 roles, 3 systems"

2. Diagnostic Analytics (Why did it happen?)
├─ Question: "Why does User7 have AWS access?"
├─ Answer: "Assigned to Sales Engineer project role"
├─ Data: Role definition + project assignment
├─ Timeline: Historical role assignment
├─ Use: Understand reasons for access
└─ Example: "User4 has GitHub because Engineer role"

3. Predictive Analytics (What will happen?)
├─ Question: "What users might have SoD conflicts?"
├─ Answer: "User6 requesting Manager + Analyst roles"
├─ Data: Role definitions + SoD rules
├─ Timeline: Before assignment happens
├─ Use: Prevent problems before they occur
└─ Example: "Alert: Request would create SoD conflict"

4. Prescriptive Analytics (What should happen?)
├─ Question: "What access should User5 have?"
├─ Answer: "Only QB clerk access (current role)"
├─ Data: Role definition + job requirements
├─ Timeline: Current vs needed
├─ Use: Identify access to remove
└─ Example: "Remove User5's ADP access (not needed)"

5. Trend Analysis (How is it changing?)
├─ Question: "Is access increasing or decreasing?"
├─ Answer: "Access growing 10% per month"
├─ Data: Access count over time
├─ Timeline: Multiple snapshots (quarterly)
├─ Use: Understand growth patterns
└─ Example: "Request volume up 25% vs last year"

6. Cohort Analysis (How do groups compare?)
├─ Question: "Do admins vs regular users differ?"
├─ Answer: "Admins have 10x more access"
├─ Data: Grouped by role/department
├─ Timeline: Compare similar time periods
├─ Use: Find outliers and unusual patterns
└─ Example: "Engineering has 2x access vs Sales"
```

### Business Value

```
Why Identity Analytics Matters:

Risk Management:
├─ Identify high-risk users before incident
├─ Spot unusual access patterns
├─ Detect access creep early
├─ Prevent compliance violations
└─ Business impact: Reduce security incidents

Operational Efficiency:
├─ Automate access right-sizing
├─ Reduce manual reviews
├─ Speed up remediation
├─ Improve decision-making
└─ Business impact: Save admin time

Compliance:
├─ Prove access controls working
├─ Demonstrate SoD enforcement
├─ Provide audit evidence
├─ Reduce audit risk
└─ Business impact: Pass audits confidently

Cost Reduction:
├─ Remove unnecessary access (cost of unused licenses)
├─ Identify unused systems
├─ Optimize entitlements
├─ Right-size access
└─ Business impact: Save licensing costs

Decision Making:
├─ Data-driven governance policies
├─ Objective access decisions
├─ Evidence-based remediation
├─ Measurable improvements
└─ Business impact: Better governance outcomes
```

---

## 🧠 KEY TAKEAWAYS

- Analytics = understanding access patterns and risks (not tracking behavior)
- Data sources: User, access, change, review, audit data
- Analysis types: Descriptive, diagnostic, predictive, prescriptive, trends, cohorts
- Business value: Risk management, efficiency, compliance, cost, decision-making
- Foundation: Clean, complete identity data enables good analytics

---

## ✅ SUCCESS CRITERIA

- ☑️ Understand identity analytics purpose
- ☑️ Know data sources available
- ☑️ Know analysis types
- ☑️ Understand business value
- ☑️ Ready for hands-on analytics modules

---

## 🎓 CERTIFICATION

**Q:** What is identity analytics?

A) Tracking user login activity
B) ✅ Understanding access patterns and risks from identity data
C) Recording who accessed what system
D) Real-time activity monitoring

**Answer: B.** Analytics = patterns and insights, not real-time monitoring.

---

## 📚 RESOURCES

- [Unit 7: Governance & Certification](/units/7-governance-certification)
- [Next: 8.2 - Access Pattern Analysis](/modules/8.2-access-pattern-analysis)

---

## ✅ NEXT STEPS

1. Understand analytics fundamentals
2. Learn data sources
3. Know analysis types
4. Proceed to 8.2
