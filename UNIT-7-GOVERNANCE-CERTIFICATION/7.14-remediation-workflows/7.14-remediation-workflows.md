# 7.14 - Remediation Workflows

**Unit:** Governance & Certification | **Tier:** 2 | 

Execute remediation: Remove unauthorized access, resolve violations, document actions.

---

## 🎯 Learning Objectives

- Understand remediation process
- Remove unauthorized access
- Document remediation actions
- Verify resolution

---

## 📋 Prerequisites

Module 7.13: Risk Assessment. Risk assessment complete.

---

## 📚 HANDS-ON LAB

### Remediation Process

```
Issue Identified:
├─ User5 has unauthorized QB admin access
├─ Should have: AP_Clerk permissions only
├─ Problem: Admin access from old role assignment
└─ Action required: Remove admin, keep clerk

Remediation Steps:

1. Approval:
 ├─ Compliance team: Reviews and approves removal
 ├─ Manager: Confirms no business need
 ├─ Role owner: Authorizes access removal
 └─ Status: APPROVED for remediation

2. Pre-removal verification:
 ├─ Current state: QB admin (verified)
 ├─ Data check: Any pending work?
 ├─ Notification: Inform user before removal
 └─ Backup: Ensure data backed up

3. Remove access:
 ├─ ISC: Remove QB_Admin role
 ├─ Systems: QB removes admin permissions
 ├─ Verify: User logs in, no admin options
 └─ Timestamp: Log removal at [time]

4. Add correct access (if needed):
 ├─ ISC: Assign Finance_AP_Clerk role
 ├─ Systems: QB gives clerk permissions
 ├─ Verify: User can work as clerk
 └─ Test: Confirm access working

5. Notify:
 ├─ User: "Your admin access removed, clerk access confirmed"
 ├─ Manager: "Remediation complete for User5"
 ├─ Compliance: "Violation resolved"
 └─ Audit log: Complete record kept

6. Documentation:
 ├─ Issue: Description of problem
 ├─ Root cause: Why it happened
 ├─ Remediation: What was done
 ├─ Approval: Who approved
 ├─ Timestamp: When executed
 ├─ Verification: How confirmed
 └─ Prevention: How to prevent recurrence
```

### Remediation Types

```
SoD Violation (Finance_Manager + AP_Clerk):
├─ Scope: Remove conflicting role
├─ Options:
│ ├─ Remove Manager role (if not current)
│ ├─ Remove Clerk role (if not current)
│ └─ Remove both (if neither current)
├─ 
└─ Example: User has both roles from old assignments

Access Creep (User has more than needed):
├─ Issue: User accumulated extra access over time
├─ Example: Finance user has GitHub access (unneeded)
├─ Action: Remove unnecessary access
├─ Verification: Check if access is still needed
└─ 

Orphaned Access (User changed roles, old access remains):
├─ Issue: Role changed but old system access not removed
├─ Example: User was Developer, now Manager, still has GitHub
├─ Action: Remove old role's systems access
├─ Maintain: Manager-specific access only
└─ 

Stale Exception (Temporary access not expired):
├─ Issue: Exception should have expired but didn't
├─ Root cause: Manual cleanup missed
├─ Action: Remove exception access
├─ Process: Auto-expire in future
└─ 
```

### Remediation Tracking

```
Remediation Ticket System:

Ticket #REM-001:
├─ User: User5 (AP Clerk)
├─ Issue: Has QB admin, should have clerk only
├─ Severity: HIGH (SoD violation)
├─ Status: OPEN → IN PROGRESS → RESOLVED
├─ Created: 2026-03-15
├─ Resolved: 2026-03-17
├─ Actions:
│ ├─ Notify user
│ ├─ Get approval
│ ├─ Remove admin role
│ ├─ Verify access changed
│ └─ Document resolution
└─ Notes: Access creep from old assignment

Ticket #REM-002:
├─ User: User9 (HR Manager)
├─ Issue: ADP admin after project ended
├─ Severity: MEDIUM (unauthorized access)
├─ Status: RESOLVED
├─ Resolution: Removed ADP admin, kept standard access
└─ 
├─ Scope: 12 users with expired access
├─ Approvals: Automated (all auto-expired)
├─ 
├─ Verification: Morning audit confirms all removed
└─ Report: Remediation summary to management
```

---

## 🧪 EXPECTED RESULTS

✅ All violations identified and addressed
✅ Unauthorized access removed
✅ Correct access restored
✅ Remediation documented

---

## ✅ SUCCESS CRITERIA

- ☑️ Violations identified with approval
- ☑️ User notified before removal
- ☑️ Access removed successfully
- ☑️ Correct access verified
- ☑️ Audit trail complete

---

## 🎓 CERTIFICATION

**Q:** SoD violation needs remediation. Manager says "too urgent to follow process." What happens?

A) Skip approval, remove immediately
B) ✅ Require approval even in urgent cases
C) Wait until next review cycle
D) Let manager decide

**Answer: B.** Approval required always. Urgent = fast-track, not skip.

---

## 📚 RESOURCES

- [Module 7.13: Risk Assessment](/modules/7.13-risk-assessment)
- [Next: 7.15 - Identity Analytics](/modules/7.15-identity-analytics)

---

## ✅ NEXT STEPS

1. Create remediation tickets
2. Get approvals
3. Execute removals
4. Verify and document
5. Proceed to 7.15
