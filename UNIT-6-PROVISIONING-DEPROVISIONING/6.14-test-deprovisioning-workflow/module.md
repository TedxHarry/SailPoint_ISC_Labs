# 6.14 - Test Deprovisioning Workflow

**Unit:** Provisioning & Deprovisioning | **Tier:** 2 | 

---

## 🎯 Learning Objectives

- Test deprovisioning by removing role assignments
- Verify access removed across all systems
- Test disable vs. delete strategies
- Verify audit trail completeness

---

## 📋 Prerequisites

Module 6.13: Deprovisioning Fundamentals. Concepts understood.

---

## 📚 HANDS-ON LAB

### Objective

Test deprovisioning workflows by simulating department transfer and verifying access removal across all 5 systems.

---

### TASK 1: Test Scenario - Department Transfer

**Simulate: User4 transferred from Engineering to Sales**

```
Before Transfer:
├─ User4: Engineer_Developer role
├─ Access: GitHub (contributor), AWS (dev/staging), AD (engineering group)
└─ Systems: Engineering department only

Transfer Action:
├─ Manager removes: Engineer_Developer role
├─ Manager adds: Sales_Representative role
├─ Effective: Immediately
└─ ISC triggers: Deprovisioning + provisioning workflows

Expected After:
├─ User4: Sales_Representative role
├─ Access: Salesforce (sales rep), AD (sales group), ADP (sales)
├─ No Access: GitHub, AWS (removed)
└─ Systems: Sales department only
```

**Step 1: Remove Engineer_Developer Role**

```
ISC > Identities > User4
├─ Current roles: Engineer_Developer, Engineering_Employee, Technical_Staff
├─ Remove role: Engineer_Developer (manual removal)
├─ Action: Click "Remove from role"
├─ Confirm: "Remove User4 from Engineer_Developer?"
├─ Result: Role removed
└─ Trigger: Deprovisioning workflows start

ISC detects:
├─ Engineer_Developer role removed
├─ ISC evaluates: What access does Engineer_Developer provide?
│  ├─ GitHub: Contributor access
│  ├─ AWS: Dev/staging access
│  └─ AD: Engineering groups
├─ ISC triggers deprovisioning: For GitHub, AWS, AD
└─ Expected: User4 loses Engineer access
```

**Step 2: Add Sales_Representative Role**

```
ISC > Identities > User4
├─ Add role: Sales_Representative (manual add)
├─ Action: Click "Add to role"
├─ Select: Sales_Representative
├─ Confirm: "Add User4 to Sales_Representative?"
├─ Result: Role added
└─ Trigger: Provisioning workflows start

ISC detects:
├─ Sales_Representative role added
├─ ISC evaluates: What access does Sales_Representative provide?
│  ├─ Salesforce: Sales rep permission set
│  ├─ ADP: Sales features
│  └─ AD: Sales groups
├─ ISC triggers provisioning: For Salesforce, ADP, AD
└─ Expected: User4 gains Sales access
```

---

### TASK 2: Verify Deprovisioning - GitHub

**GitHub Deprovisioning:**

```
Before (Engineer_Developer role):
├─ User4 in GitHub: username user4.contoso
├─ Teams: Engineering (contributor), Technical_Staff
├─ Repos: main (write), staging (write), infrastructure (read)
├─ Can: Push code, create PRs
└─ Status: Active developer access

Deprovisioning Trigger:
├─ Engineer_Developer role removed
├─ ISC → GitHub Connector: Remove from Engineering team
├─ Connector action: Remove user4 from Engineering, Technical_Staff teams
└─ Timing: < 5 minutes

After Deprovisioning:
├─ User4 in GitHub: Still exists (account not deleted)
├─ Teams: Removed from Engineering, Technical_Staff
├─ Repos: No access (removed from all repos)
├─ Can: Cannot push code (revoked write access)
├─ Status: Disabled (account exists but no permissions)

Verify:
├─ GitHub org > Members
├─ Find: user4.contoso
├─ Teams: Empty (or not in any team)
├─ Repos: No access listed
├─ Test: Try to push code → Denied
└─ Audit log: Shows "Removed from Engineering team" timestamp
```

---

### TASK 3: Verify Provisioning - Salesforce

**Salesforce Provisioning:**

```
Before (no Salesforce account):
├─ User4: No Salesforce access
├─ Account: Does not exist
└─ Can: Cannot access CRM

Provisioning Trigger:
├─ Sales_Representative role added
├─ ISC → Salesforce Connector: Create account
├─ Connector action: Create Salesforce user, assign Sales_Rep permission set
└─ Timing: < 3 minutes

After Provisioning:
├─ User4 in Salesforce: username user4.contoso
├─ Email: user4@contoso.com
├─ Permission set: Sales_Rep (can create opportunities, update deals)
├─ Status: Active
├─ Can: Access CRM, view/create deals, run sales reports

Verify:
├─ Salesforce Setup > Users
├─ Find: user4.contoso
├─ Status: Active
├─ Permission sets: Sales_Rep assigned
├─ Test: Log in with provided credentials → Success
├─ Test: Create test opportunity → Success
└─ Audit log: Shows "Account created" timestamp
```

---

### TASK 4: Verify AD Group Membership Changes

**Active Directory Changes:**

```
Before:
├─ User4 AD account: user4
├─ Groups: Engineering, Engineer_Developer, Technical_Staff
├─ Can access: Engineering shared folders
└─ Cannot access: Sales shared folders

Changes Triggered:
├─ Engineer_Developer role removed
│  ├─ ISC removes: Engineer_Developer group, Engineering group (if applicable)
│  └─ ISC removes: Technical_Staff group
│
├─ Sales_Representative role added
│  ├─ ISC adds: Sales, Sales_Representative groups
│  └─ ISC adds: Sales_Employee group
└─ Timing: < 2 minutes

After:
├─ User4 AD account: user4
├─ Groups: Sales, Sales_Representative, Sales_Employee
├─ Can access: Sales shared folders
├─ Cannot access: Engineering shared folders (removed)

Verify in AD:
├─ ADUC > Find user4
├─ Groups: Should show Sales groups only
├─ Test: Access \\contoso\Engineering\Shared → Denied (correct)
├─ Test: Access \\contoso\Sales\Shared → Success (correct)
└─ Audit log: Group removal/addition recorded

Replication wait:
├─ AD changes take 15 minutes to replicate across domain
├─ User4 will notice access changes after domain cache updates
├─ Can force update: gpupdate /force on user4's workstation
└─ Or: Wait 15 minutes for automatic replication
```

---

### TASK 5: Verify AWS Deprovisioning

**AWS Access Removal:**

```
Before (Engineer_Developer role):
├─ User4 IAM user: user4-dev
├─ Groups: Developers, StagingOnly
├─ Can: Access AWS dev/staging, cannot access prod
└─ Status: Active

Deprovisioning Trigger:
├─ Engineer_Developer role removed
├─ ISC → AWS Connector: Remove from groups
├─ Connector action: Remove user4-dev from Developers, StagingOnly groups
└─ Timing: < 2 minutes

After Deprovisioning:
├─ User4 IAM user: user4-dev still exists (disabled, not deleted)
├─ Groups: Removed from all groups
├─ Can: Cannot access anything (no permissions)
├─ MFA: Still required (but no access anyway)

Verify:
├─ AWS IAM > Users
├─ Find: user4-dev
├─ Groups: Empty
├─ Test: Try to describe instances → Access Denied
├─ Audit log: CloudTrail shows "User4 removed from group StagingOnly"
└─ Result: AWS access removed ✓
```

---

### TASK 6: Complete Deprovisioning Verification

**Comprehensive Verification:**

```
User4 After Department Transfer (Engineering → Sales):

QB Account:
├─ Before: No account (engineer doesn't use QB)
├─ After: No account (sales doesn't use QB either)
└─ Status: Correct, no change ✓

GitHub Account:
├─ Before: user4.contoso, Engineering teams, write access
├─ After: user4.contoso, NO teams, NO access
├─ Can push: NO (removed from repos) ✓
└─ Status: Deprovisioned ✓

AWS Account:
├─ Before: user4-dev, Developers + StagingOnly groups
├─ After: user4-dev, NO groups, NO access
├─ Can access AWS: NO (no permissions) ✓
└─ Status: Deprovisioned ✓

Salesforce Account:
├─ Before: No account (engineer doesn't use Salesforce)
├─ After: user4.contoso, Sales_Rep permission set, full access ✓
├─ Can access CRM: YES ✓
└─ Status: Provisioned ✓

AD Account:
├─ Before: user4, Engineering groups
├─ After: user4, Sales groups
├─ Can access Engineering folders: NO (groups removed) ✓
├─ Can access Sales folders: YES (groups added) ✓
└─ Status: Deprovisioned + Provisioned ✓

ADP Account:
├─ Before: Self-service access (basic)
├─ After: Self-service access (unchanged)
└─ Status: No change needed ✓

SUMMARY:
✅ All old access (Engineering) removed
✅ All new access (Sales) added
✅ User4 has exactly right access for Sales_Representative role
✅ No leftover access from Engineering
✅ Audit trail complete showing all changes
```

---

### TASK 7: Test Audit Trail

**Verify Complete Audit Log:**

```
ISC > Audit > Deprovisioning

Entry 1:
├─ Timestamp: 2026-03-02 14:00:00
├─ User: User4
├─ Action: Role removed - Engineer_Developer
├─ System: All (triggered multiple connectors)
├─ Details:
│  ├─ GitHub: Removed from Engineering team
│  ├─ AWS: Removed from Developers group
│  ├─ AD: Removed from Engineer_Developer group
│  └─ All deprovisioning completed
└─ Status: Success

Entry 2:
├─ Timestamp: 2026-03-02 14:05:00
├─ User: User4
├─ Action: Role added - Sales_Representative
├─ System: All (triggered multiple connectors)
├─ Details:
│  ├─ Salesforce: Created account, assigned Sales_Rep
│  ├─ AD: Added to Sales groups
│  ├─ ADP: Enabled sales features
│  └─ All provisioning completed
└─ Status: Success

Result:
├─ Audit trail comprehensive ✓
├─ Timestamps accurate ✓
├─ All systems documented ✓
├─ Actions clear and traceable ✓
└─ Compliance ready ✓
```

---

## 🧪 EXPECTED RESULTS

After deprovisioning test:

✅ Engineer_Developer access completely removed from User4
✅ Sales_Representative access completely added to User4
✅ User4 has exactly correct access for new role
✅ Audit trail shows all changes
✅ No access sprawl (old access not retained)
✅ Cross-system workflows work correctly

---

## ✅ SUCCESS CRITERIA

- ☑️ User4 removed from Engineer_Developer role
- ☑️ User4 deprovisioned from GitHub and AWS
- ☑️ User4 added to Sales_Representative role
- ☑️ User4 provisioned to Salesforce
- ☑️ All access verified in each system
- ☑️ Audit trail complete

---

## 🎓 CERTIFICATION

**Q:** User4 is transferred to Sales. What should happen?

A) Keep both Engineering and Sales access (more secure)
B) ✅ Remove Engineering access, add Sales access automatically
C) Manually remove access from each system individually
D) Delete User4's account and create new sales user

**Answer: B.** ISC automatically deprovisions old + provisions new = clean access.

**Q:** After deprovisioning from GitHub, User4's account is:

A) Deleted (cannot be recovered)
B) ✅ Disabled (exists but no permissions, can be reactivated)
C) Still active (deprovisioning failed)
D) Moved to archive

**Answer: B.** Best practice = disable not delete (keeps audit history, can recover if needed).

---

## 📚 RESOURCES

- [Module 6.13: Deprovisioning Fundamentals](/modules/6.13-deprovisioning-fundamentals)
- [Next: 6.15 - Offboarding Complete](/modules/6.15-offboarding-complete)

---

## ✅ NEXT STEPS

1. Test deprovisioning by removing roles
2. Verify access removed across all systems
3. Verify new access added for new role
4. Confirm audit trail complete
5. Proceed to 6.15 for employee offboarding

