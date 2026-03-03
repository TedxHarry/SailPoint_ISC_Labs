# 6.12 - Troubleshoot Provisioning Issues

**Unit:** Provisioning & Deprovisioning | **Tier:** 2 | **Duration:** ~10 hours

---

## 🎯 Learning Objectives

- Identify provisioning failures
- Troubleshoot connector issues
- Resolve permission mismatches
- Document and prevent future issues

---

## 📋 Prerequisites

Module 6.11: Test Provisioning Results. Testing complete, issues identified.

---

## 📚 HANDS-ON LAB

### Objective

Troubleshoot and resolve common provisioning issues to ensure all 13 users have complete, correct access.

---

### TASK 1: Provisioning Status Dashboard

**Monitor Provisioning Health:**

```
ISC > Provisioning > Status Dashboard

Summary:
├─ Total provisioning attempts: 65+ (13 users × 5 systems)
├─ Successful: [count]
├─ Failed: [count]
├─ Pending: [count]
├─ Success rate: [percentage]%
└─ Last updated: [timestamp]

By System:
├─ QB: [successes] / [attempts] = [%]
├─ GitHub: [successes] / [attempts] = [%]
├─ AWS: [successes] / [attempts] = [%]
├─ AD: [successes] / [attempts] = [%]
└─ ADP: [successes] / [attempts] = [%]

Issues:
├─ If success rate < 100%: Investigate failures
├─ If pending > 0: Check connector status
└─ If any failures: Follow troubleshooting steps below
```

---

### TASK 2: Common Provisioning Issues & Solutions

**Issue Type 1: Connector Connection Failures**

```
SYMPTOM: "Cannot connect to system" error for all users

Example error:
"QB Connector: Connection timeout after 30 seconds"

Diagnosis Steps:
1. Check system status
   ├─ Is QB website responding?
   ├─ Check: status.intuit.com
   ├─ Check: Twitter for outages (@QB_Support)
   └─ If down: Wait for system to come back online

2. Check network connectivity
   ├─ From ISC appliance: ping [system IP]
   ├─ From ISC appliance: traceroute [system IP]
   └─ If no response: Network issue, check firewall

3. Check ISC IP whitelisting
   ├─ QB Settings: Verify ISC IP whitelisted
   ├─ GitHub Settings: Verify ISC IP accessible
   ├─ If not whitelisted: Add ISC IP
   └─ Retry provisioning

4. Check connector credentials
   ├─ API key might have expired
   ├─ ISC > Connectors > QB > Settings
   ├─ Check: Last used, expiration date
   ├─ If expired: Regenerate in target system
   ├─ Update ISC with new credentials
   └─ Retry

Solution Checklist:
☐ Verify target system online
☐ Verify network connectivity
☐ Verify ISC IP whitelisted
☐ Verify credentials valid (not expired)
☐ Verify connector timeout setting appropriate
☐ Retry provisioning

If still failing:
├─ Contact target system support
├─ Provide: Error log, timestamp, system affected
└─ Temporary: Manually create accounts while waiting
```

**Issue Type 2: Partial Provisioning (Success Then Failure)**

```
SYMPTOM: Account created in QB but permissions not set

Example:
├─ Account: casey exists in QB
├─ Problem: Permission level is "user", should be "admin"
├─ Workflow: Created account (success) but failed setting permissions

Diagnosis:
1. Check workflow error handling
   ├─ ISC > Workflows > QB_Finance_Manager_Provisioning
   ├─ Step: "Set QB Permissions"
   ├─ Status: Did this step fail?
   └─ Error message: What error occurred?

2. Check QB API error
   ├─ Workflow might have timed out
   ├─ Or permission level name wrong
   ├─ Or API doesn't support requested level
   └─ Review QB API docs

3. Fix manually then update workflow
   ├─ Manually in QB: Set casey's permission to admin
   ├─ Update workflow: Fix permission name or add retry logic
   └─ Retry for other users with corrected workflow

Solution Checklist:
☐ Identify which workflow step failed
☐ Check QB API docs for correct permission names
☐ Manually fix the incomplete account
☐ Update workflow with correct parameters
☐ Retry for remaining users
☐ Verify: Permissions now correct

Example Fix:
│ Original workflow: "Set permission level to 'admin'"
│ Error: "Permission 'admin' not found"
│ Solution: Check QB docs - it's actually "Admin User" (two words)
│ Updated: "Set permission level to 'Admin User'"
│ Result: Now works ✓
```

**Issue Type 3: User Already Exists (Duplicate Account)**

```
SYMPTOM: "Account already exists" error

Example:
"QB: Account 'casey' already exists in system"

Causes:
├─ Account manually created before ISC provisioning
├─ Provisioning run twice for same user
├─ Test user account not cleaned up
└─ Previous employee same name

Diagnosis:
1. Check if old account is same person
   ├─ QB: Find account 'casey'
   ├─ Email: Is it casey@contoso.com?
   ├─ Created date: When was it created?
   └─ If same person: Can reuse account

2. Check if old account needs deletion
   ├─ If test account or different person: Delete it
   ├─ Note: Some systems need 24-hour grace before reuse
   └─ After deletion: Retry provisioning

Solution Checklist:
☐ Identify if account is old (same user) or different
☐ If same user: Update workflow to use existing account
☐ If different user: Delete old account first
☐ Wait 24 hours for system cache/replication
☐ Retry provisioning
☐ Verify: Correct account now has permissions

Example:
│ Problem: QB has account 'casey' from 2022 (old hire, same person)
│ Action: Don't delete, instead disable new account creation
│ Updated workflow: "Check if account exists, use if exists, set perms"
│ Result: Uses existing account, sets correct permissions ✓
```

**Issue Type 4: Missing Required Attributes**

```
SYMPTOM: "Cannot provision, missing required field"

Example:
"AWS: Cannot create user, email attribute missing"

Diagnosis:
1. Check ISC user attributes
   ├─ ISC > Identities > User4
   ├─ Email field: Is it filled in?
   ├─ Department field: Is it filled in?
   ├─ Other fields: Check workflow requirements
   └─ If missing: Add the data

2. Check workflow requirements
   ├─ Workflow might require: Email, phone, manager, etc.
   ├─ AWS requires: Email for login
   ├─ GitHub requires: Email for notifications
   └─ Check what's required

Solution Checklist:
☐ Identify which attribute missing
☐ Verify it's actually required (not optional)
☐ Add missing attribute to user in ISC
☐ Retry provisioning
☐ Verify: Attribute now present, provisioning succeeds

Example:
│ Problem: User4 has no email in ISC
│ Action: Go to ISC > Identities > User4
│ Edit: Email = user4@contoso.com
│ Save
│ Retry provisioning in GitHub (needs email)
│ Result: Success ✓
```

**Issue Type 5: Permission Level Mismatch**

```
SYMPTOM: User has wrong permission level in target system

Example:
├─ Expected: User4 should have "Contributor" in GitHub
├─ Actual: User4 has "Member" (less powerful)
├─ Problem: GitHub team roles named differently than expected

Diagnosis:
1. Check GitHub documentation
   ├─ GitHub role levels: Owner > Maintainer > Write > Triage > Read > Pull
   ├─ ISC "Contributor" might map to "Write" (not "Member")
   ├─ Mapping might be wrong
   └─ Check ISC workflow configuration

2. Check ISC workflow mapping
   ├─ ISC > Workflows > GitHub_Engineer_Developer_Provisioning
   ├─ Step: "Add to GitHub team"
   ├─ Configured role: What's currently set?
   ├─ Expected role: What should it be?
   └─ If wrong: Fix the mapping

Solution Checklist:
☐ Check target system documentation for role names
☐ Verify ISC workflow has correct role mapping
☐ Update workflow with correct role names
☐ Manually fix User4's GitHub role (or remove/re-add to team)
☐ Retry for other users with corrected workflow
☐ Verify: Correct permissions now set

Example:
│ ISC workflow: Grant GitHub role "Contributor"
│ GitHub teams don't have "Contributor" role
│ GitHub actual roles: maintainer, member, none
│ Fix: Change workflow to grant "maintainer" role (or "member" for read-only)
│ Result: Now works ✓
```

**Issue Type 6: Insufficient Connector Permissions**

```
SYMPTOM: "Connector account doesn't have permission"

Example:
"AWS: Cannot create IAM user, connector account not admin"

Cause:
├─ Connector uses service account with limited permissions
├─ Service account doesn't have admin rights
├─ Service account can't perform requested action

Diagnosis:
1. Check connector account permissions
   ├─ AWS: Is service account (via IAM credentials) an admin?
   ├─ QB: Is API key from admin user account?
   ├─ GitHub: Does token have org admin scope?
   └─ Each system different

2. Upgrade connector account
   ├─ AWS: Make service account IAM admin
   ├─ QB: Use admin user's API key
   ├─ GitHub: Use token with admin:org scope
   └─ Depends on system

Solution Checklist:
☐ Identify which connector account is insufficient
☐ Determine what permissions needed
☐ Upgrade connector account in target system
☐ Update ISC with new credentials/keys
☐ Test connection: Should now succeed
☐ Retry provisioning
☐ Verify: Accounts now created successfully

Security Note:
├─ Connector account should be: Service account (not personal)
├─ Connector account should have: Minimum permissions needed
├─ Access should be: Monitored and audited
├─ Credentials should be: Rotated regularly
└─ If compromised: Account immediately disabled
```

---

### TASK 3: Issue Resolution Process

**Step-by-Step Resolution:**

```
Issue Found: User5 QB provisioning failed with "Permission denied"

Step 1: Identify the issue
├─ User: User5
├─ System: QB
├─ Error: Permission denied
├─ Timestamp: 2026-03-02 09:15:30 (from audit log)
└─ Status: FAILED

Step 2: Gather information
├─ Check ISC audit log: Full error message
├─ Check QB audit log: Any activity for user5?
├─ Check connectivity: Can ISC reach QB?
├─ Check credentials: QB API key valid?
└─ Result: Information gathered

Step 3: Diagnose
├─ QB API key: Valid (confirmed)
├─ Connectivity: Working (confirmed)
├─ Error message: "QB permission error: User account already exists"
├─ Root cause: Account 'user5' already exists (legacy account)
└─ Diagnosis: Duplicate account, workflow failed to handle

Step 4: Resolve
├─ Option A: Delete old account
│  ├─ QB: Delete 'user5' account
│  ├─ Wait: 24 hours for QB cache clear
│  ├─ Retry: Provisioning (will create new account)
│  └─ Verify: New account has correct permissions
│
├─ Option B: Reuse existing account
│  ├─ ISC workflow: Update to handle "account exists" case
│  ├─ New logic: Use existing account, set permissions
│  ├─ Retry: Provisioning (will use existing, set perms)
│  └─ Verify: Permissions now correct
│
└─ Choose: Option B (faster, keeps account history)

Step 5: Prevent recurrence
├─ Document: Why duplicate account existed
├─ Improve: Workflow to check for existing accounts
├─ Train: Never manually create accounts (let ISC do it)
├─ Monitor: Alert if provisioning fails
└─ Result: Issue prevented in future

Step 6: Verify fix
├─ Retry provisioning for User5
├─ Monitor: Provisioning status
├─ Wait: Completion (should be quick)
├─ Check QB: User5 account has correct permissions
└─ Confirm: User5 can access QB successfully ✓
```

---

### TASK 4: Escalation and Support

**When to Escalate:**

```
Problem: You've tried basic troubleshooting, still failing

Examples requiring escalation:
├─ Connector API errors that persist
├─ Target system outages (out of ISC control)
├─ Permission conflicts (system design issue)
├─ Vendor-specific issues (need target system support)
└─ Data integrity problems (corrupted during provisioning)

Escalation Process:
1. Gather documentation
   ├─ ISC audit logs
   ├─ Target system logs
   ├─ Error messages (full text)
   ├─ Timestamps
   ├─ All attempted solutions
   └─ Step-by-step reproduction

2. Contact target system support
   ├─ Provide: Full error message (not summary)
   ├─ Provide: API key/token used (securely)
   ├─ Provide: Steps to reproduce
   ├─ Ask: Is this known issue?
   └─ Ask: What's the workaround?

3. Contact ISC support (if connector issue)
   ├─ Provide: ISC version
   ├─ Provide: Connector version
   ├─ Provide: Audit logs from ISC
   ├─ Ask: Is this known connector issue?
   └─ Ask: Any fixes available?

4. Implement workaround
   ├─ While waiting for fix
   ├─ Manual account creation (temporary)
   ├─ Alert users: Access will be automated soon
   └─ Don't leave users without access
```

---

### TASK 5: Prevention & Monitoring

**Prevent Future Issues:**

```
Best Practices:

1. Test before production
   ├─ Sandbox environment first
   ├─ Test all scenarios (success and failure)
   ├─ Test error handling
   └─ Only deploy after successful testing

2. Monitor ongoing
   ├─ Weekly check: Provisioning dashboard
   ├─ Alert on: Any failures
   ├─ Review: Audit logs for anomalies
   └─ Action: Fix before they become problems

3. Document everything
   ├─ Issue: Description, cause, resolution
   ├─ Change: What was modified and why
   ├─ Lesson learned: How to prevent next time
   └─ Runbook: Step-by-step procedure for fix

4. Rotate credentials regularly
   ├─ API keys: Every 90 days
   ├─ Service accounts: Every 6 months
   ├─ Passwords: Follow organizational policy
   └─ Retired: Old credentials fully disabled

5. Have backup plans
   ├─ If connector down: Manual provisioning process
   ├─ If system down: Temporary system access via other method
   ├─ If ISC down: Standalone credentials for emergency
   └─ Plan: Tested and documented
```

---

## 🧪 EXPECTED RESULTS

After troubleshooting:

✅ All provisioning failures identified
✅ Root causes documented
✅ Issues resolved (100% success rate)
✅ Prevention measures implemented
✅ Support processes documented
✅ All 13 users verified with correct access

---

## ✅ SUCCESS CRITERIA

- ☑️ All provisioning failures investigated
- ☑️ Root causes identified
- ☑️ Issues resolved successfully
- ☑️ Prevention measures in place
- ☑️ Support processes documented
- ☑️ All users have correct access

---

## 🎓 CERTIFICATION

**Q:** QB provisioning fails with "account already exists". What should the workflow do?

A) Delete the account and create new one
B) ✅ Check if it's the same user, reuse account and set permissions
C) Fail and alert admin (can't handle duplicates)
D) Skip QB and provision other systems

**Answer: B.** Smart workflow = check if exists, reuse if same user, set permissions.

**Q:** Provisioning keeps timing out. Timeout is set to 30 seconds. What's the first fix?

A) Increase timeout to 60 seconds
B) ✅ Check if target system is online and responsive
C) Delete ISC and start over
D) Manual provisioning only (no automation)

**Answer: B.** First check if problem is external (system slow) vs. ISC (timeout too short).

---

## 📚 RESOURCES

- [Module 6.11: Test Provisioning Results](/modules/6.11-test-provisioning-results)
- [Next: 6.13 - Deprovisioning Fundamentals](/modules/6.13-deprovisioning-fundamentals)

---

## ✅ NEXT STEPS

1. Identify any remaining provisioning issues
2. Follow troubleshooting process for each issue
3. Verify all 13 users have correct access
4. Document issues and resolutions
5. Proceed to 6.13 for deprovisioning (removing access)

