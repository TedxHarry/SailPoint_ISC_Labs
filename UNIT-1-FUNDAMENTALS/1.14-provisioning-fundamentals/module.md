# 1.14 - Provisioning Fundamentals

**Unit:** ISC Fundamentals & Concepts | **Tier:** 1 | 

---

## 🎯 Learning Objectives

- Understand provisioning (creating/updating accounts in target systems)
- Know provisioning vs deprovisioning
- Understand provisioning rules and triggers
- Recognize provisioning status and troubleshooting
- Know the difference between automatic and manual provisioning

---

## 📋 Prerequisites

Module 1.6: ISC Four Core Modules. Module 1.13: Correlation Concepts.

---

## 📚 CORE CONCEPTS

### What is Provisioning?

**Definition:** Provisioning is ISC's process of creating and updating user accounts in target systems (Finance app, QuickBooks, email, etc.) based on identity attributes and access rules.

**Types:**
- **Create:** New account in system (first time user gets access)
- **Update:** Modify existing account (change permissions, add to groups)
- **Disable/Delete:** Remove account (user left, role changed, no longer needs access)

---

### Provisioning Flow

```
1. IDENTITY: Morgan Chen (department=Finance, title=Manager)
   ↓
2. RULES EVALUATED: "If dept=Finance AND title=Manager, provision Manager role in Finance app"
   ↓
3. RULE MATCHES: Morgan should have Finance app Manager access
   ↓
4. ACCOUNT CHECK: Does Morgan already have Finance app account?
   - No → CREATE new account
   - Yes → UPDATE existing account with new permissions
   ↓
5. PROVISIONING REQUEST: Send to target connector
   ↓
6. TARGET SYSTEM: Finance app creates account, assigns Manager role
   ↓
7. CONFIRMATION: ISC logs provisioning event (audit trail)
```

---

### Provisioning Triggers

**Automatic triggers:**
- **New hire:** Identity created → Provision all access for role
- **Promotion:** Job title changes → Revoke old, provision new
- **Transfer:** Department changes → Different access rules apply
- **Termination:** Employee terminated → Deprovision all access
- **Manual request:** User requests access → Approval → Provisioning

**Scheduled provisioning:**
- Access rules change? → Re-evaluate all identities, re-provision if rules match differently
- Manager assigned? → New manager gets approval authority roles → Provision those accounts

---

### Deprovisioning (Access Removal)

**Definition:** Removing access when no longer needed.

**Triggers:**
- **Termination:** All access removed immediately
- **Role change:** Old role access revoked
- **Rule change:** Access rule no longer matches, remove access
- **Manual deprovisioning:** User requests removal or manager revokes

**Example:** Morgan transferred from Accounting to Sales
- Old rule (Accounting Manager) no longer matches
- ISC revokes: Accounting Manager role in Finance app, accounting report access
- New rule (Sales Manager) now matches
- ISC provisions: Sales CRM access, sales commission access

---

### Provisioning Status and Troubleshooting

**Provisioning states:**
- **Pending:** Queued, waiting to execute
- **In Progress:** ISC is creating/updating account
- **Success:** Account created/updated successfully
- **Failed:** Provisioning failed (connector error, invalid credentials, system doesn't support operation)
- **Denied:** Approval denied, provisioning request rejected

**Common failures:**
- **Connector error:** Can't connect to target system (check connector health)
- **Invalid data:** Trying to create account with bad data (check identity attributes)
- **Insufficient permissions:** Target system says ISC doesn't have permission to create account
- **Duplicate account:** Account already exists with same username (correlation issue)

**Recovery:**
- Fix underlying issue (connector, data, permissions)
- Retry provisioning request
- Log incident for audit trail

---

### Manual vs Automatic Provisioning

**Automatic:** ISC evaluates rules, provisions immediately, no human approval.
- Advantage: Fast, no delays, scalable
- Risk: Wrong rule = wrong access provisioned

**Manual:** User requests access, manager approves, ISC provisions.
- Advantage: Control, approval required, audit trail
- Risk: Slower, bottleneck

**Typical hybrid:** Automatic for role-based access, manual for exceptional/sensitive access.

---

## 🧠 KEY TAKEAWAYS

- **Provisioning = creating/updating accounts in target systems**
- **Triggered by:** Hire, promotion, transfer, termination, manual request, rule changes
- **Deprovisioning = removing access** when no longer needed or rule no longer matches
- **Status matters:** Track pending, failed, denied provisioning requests
- **Audit trail:** ISC logs all provisioning events for compliance

---

## 🎓 CERTIFICATION ALIGNMENT

**Question 1:** Morgan Chen's job title changes from Senior Accountant to Accounting Manager. What should ISC do?

A) Nothingaccount already exists
B) Create new accounts for Manager role
C) ✅ Revoke Senior Accountant permissions, provision Accounting Manager permissions in existing accounts
D) Require manager approval before proceeding

**Answer: C.** Provisioning updates accounts when rules change. Senior Accountant rule no longer matches; Manager rule matches. Update access in existing accounts.

---

**Question 2:** ISC attempted to provision Finance app access for new user Casey. Status shows "Failed: Connector error." What's the impact?

A) Casey will get access eventually when ISC retries
B) Access is provisioned but hasn't synced yet
C) ✅ Casey doesn't have Finance app access until failure is fixed and provisioning retried
D) Manual provisioning is required

**Answer: C.** Failed provisioning means account wasn't created. Connector error must be fixed. Account creation isn't automatic until issue resolved.

---

## 📚 ADDITIONAL RESOURCES

- [Next: 1.15 - Roles & Access Profiles](/modules/1.15-roles-and-access-profiles)
- Unit 5: Access Modeling (future - provisioning rules configuration)
- Unit 6: Provisioning & Deprovisioning (future - detailed provisioning workflows)

---

## 🔄 NEXT STEPS

Module 1.15 covers roles and access profilesthe building blocks of provisioning rules.

---

## ✅ SUCCESS CRITERIA

- ☑️ Explain provisioning (create/update/remove accounts)
- ☑️ Understand provisioning vs deprovisioning
- ☑️ Know provisioning triggers
- ☑️ Recognize provisioning status and failures
- ☑️ Answer practice questions correctly
