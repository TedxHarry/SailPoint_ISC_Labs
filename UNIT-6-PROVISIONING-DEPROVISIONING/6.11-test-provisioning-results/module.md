# 6.11 - Test Provisioning Results

**Unit:** Provisioning & Deprovisioning | **Tier:** 2 | 

---

## 🎯 Learning Objectives

- Verify all users have correct system access
- Test account functionality across systems
- Identify and resolve provisioning issues
- Document successful provisioning

---

## 📋 Prerequisites

Module 6.10: Provision Remaining Systems. All provisioning complete.

---

## 📚 HANDS-ON LAB

### Objective

Comprehensive testing of all 13 users' provisioning across all 5 systems to verify complete and correct access.

---

### TASK 1: Access Verification Matrix

**Test All Users Against All Systems:**

```
User: Casey Kim (Finance_Manager)

QB Account:
├─ Account exists: YES ✓
├─ Can log in: YES ✓
├─ Permission level: Admin ✓
├─ Can create invoice: YES ✓
├─ Can approve invoice: YES ✓
├─ Can reconcile GL: YES ✓
└─ Status: READY ✓

AD Account:
├─ Account exists: YES ✓
├─ Can log in (domain): YES ✓
├─ OU placement: /Contoso/Finance ✓
├─ Groups: Finance, Finance_Manager, Managers ✓
├─ Email working: YES ✓
└─ Status: READY ✓

GitHub:
├─ Account exists: YES (read-only) ✓
├─ Can access repos: YES (read-only) ✓
├─ Teams: Engineering (member) ✓
└─ Status: READY ✓

AWS:
├─ Account: Should NOT exist (Finance doesn't need AWS)
├─ Status: CORRECT (no access) ✓
└─ Security: CORRECT ✓

ADP:
├─ Account exists: YES ✓
├─ Can log in: YES ✓
├─ Features: Self-service + payroll view (manager perk)
├─ Can view team members: YES (manager)
└─ Status: READY ✓

Overall Status: ✅ Casey has exactly the right access

---

User: User4 (Engineer_Developer)

QB Account:
├─ Account: Should NOT exist (engineer doesn't need QB)
├─ Status: CORRECT (no access) ✓

AD Account:
├─ Account exists: YES ✓
├─ Can log in: YES ✓
├─ OU: /Contoso/Engineering ✓
├─ Groups: Engineering, Engineer_Developer, Technical_Staff ✓
└─ Status: READY ✓

GitHub:
├─ Account exists: YES ✓
├─ Can log in: YES ✓
├─ Teams: Engineering (contributor)
├─ Repos: main (write), staging (write), infrastructure (read-only)
├─ Can push code: YES ✓
├─ Can merge PRs: NO ✗ (correct - needs review)
└─ Status: READY ✓

AWS:
├─ Account exists: YES ✓
├─ Can log in: YES (with MFA) ✓
├─ Groups: Developers, StagingOnly
├─ Environment: Staging/Dev only ✓
├─ Can access prod: NO ✗ (correct - junior dev restricted)
└─ Status: READY ✓

ADP:
├─ Account exists: YES ✓
├─ Can access: Self-service only ✓
└─ Status: READY ✓

Overall Status: ✅ User4 has exactly the right access (restricted prod for safety)

---

(Repeat for all 13 users - verify each user has EXACTLY the right access, no more, no less)
```

---

### TASK 2: System Functionality Testing

**Test 1: QB Invoice Workflow (Finance)**

```
Test: Can Casey create and approve an invoice?

Setup:
├─ Casey logs into QB with provisioned account
├─ QB shows: Dashboard with available functions
└─ Verify: Admin permissions active

Test steps:
1. Casey creates invoice:
   ├─ Click: Create > Invoice
   ├─ Customer: Test customer
   ├─ Amount: $100
   ├─ Description: Test invoice
   ├─ Save
   └─ Result: Invoice created ✓

2. User5 cannot see the invoice (separate account)
   └─ Correct: Different users, different access ✓

3. Casey approves invoice:
   ├─ Find invoice in pending
   ├─ Click: Approve
   ├─ Reason: "Approved for test"
   ├─ Save
   └─ Result: Approved ✓

4. Invoice status: Approved, can post to bank
   └─ Workflow complete ✓

Result: QB provisioning working ✓
```

**Test 2: GitHub Code Review (Engineering)**

```
Test: Can User4 push code, and Alex review/approve?

Setup:
├─ User4 and Alex both log into GitHub
├─ Both see same repositories
└─ Verify: Permissions correct

Test steps:
1. User4 creates feature:
   ├─ Clone main repo
   ├─ Create branch: git checkout -b test-feature
   ├─ Add code: echo "test code" > file.txt
   ├─ Commit: git commit -m "Test feature"
   ├─ Push: git push origin test-feature
   └─ Result: Code pushed ✓

2. User4 creates Pull Request:
   ├─ GitHub: Create PR
   ├─ Base: main
   ├─ Compare: test-feature
   ├─ Submit PR
   └─ Result: PR created, awaiting review ✓

3. Alex reviews code:
   ├─ GitHub notification: New PR from user4
   ├─ Alex views PR
   ├─ Alex approves: "Looks good"
   ├─ Alex merges: Click merge button
   └─ Result: Code merged to main ✓

4. Verify merge:
   ├─ main branch shows: new commit
   ├─ Author: user4
   ├─ Merged by: alex.lee
   ├─ GitHub audit log updated
   └─ Result: Two-person workflow verified ✓

Result: GitHub provisioning and workflows working ✓
```

**Test 3: AWS Infrastructure Management (DevOps)**

```
Test: Can User12 deploy infrastructure?

Setup:
├─ User12 has AWS credentials (access key + secret)
├─ MFA enabled
├─ Can access AWS
└─ Verify: Infrastructure permissions active

Test steps:
1. User12 configures AWS CLI:
   ├─ AWS configure
   ├─ Access Key ID: (from email)
   ├─ Secret Access Key: (from email)
   ├─ Default region: us-east-1
   └─ Configured

2. User12 checks current infrastructure:
   ├─ aws ec2 describe-instances
   ├─ Result: Lists all EC2 instances ✓
   └─ Verify: User12 has access ✓

3. User12 deploys test infrastructure:
   ├─ Write Terraform file: main.tf
   ├─ terraform init
   ├─ terraform plan (preview changes)
   ├─ terraform apply (create resources)
   └─ Result: New infrastructure created ✓

4. Verify in AWS Console:
   ├─ Log into AWS
   ├─ EC2 dashboard
   ├─ New instance visible
   ├─ CloudTrail shows: User12 created instance
   └─ Result: Infrastructure management working ✓

Result: AWS provisioning and permissions working ✓
```

**Test 4: AD Domain Functionality (All Users)**

```
Test: Can all users log into domain and access shared folders?

Setup:
├─ Windows workstations configured
├─ Domain: CONTOSO.COM
└─ Shared folders: \\contoso\Finance, \\contoso\Engineering, etc.

Test steps:
1. Casey logs into domain:
   ├─ Username: CONTOSO\casey
   ├─ Password: (new password after changing temp)
   ├─ Result: Logged in successfully ✓
   ├─ Desktop: Finance shared folder accessible ✓
   ├─ Desktop: Finance network printer available ✓
   └─ Verify: Domain admin permissions applied ✓

2. Casey accesses Finance shared folder:
   ├─ Open: File Manager > Network
   ├─ Navigate: \\contoso\Finance\Shared
   ├─ Verify: Casey can read/write files ✓
   └─ Result: File access working ✓

3. Casey tries to access Engineering folder:
   ├─ Navigate: \\contoso\Engineering\Shared
   ├─ Result: Access Denied ✗ (correct)
   ├─ Reason: Casey in Finance group, not Engineering
   └─ Verify: Permissions enforced ✓

4. Repeat for User4 (Engineer):
   ├─ User4 logs in: SUCCESS ✓
   ├─ Can access Engineering folder: YES ✓
   ├─ Can access Finance folder: NO (correct) ✓
   ├─ Can access IT folder: NO (correct) ✓
   └─ Result: Cross-department access blocked ✓

Result: AD provisioning and permissions working ✓
```

---

### TASK 3: Error Handling and Edge Cases

**Test Case 1: What if user logs in immediately after provisioning?**

```
Scenario: Casey logs in to QB exactly 5 minutes after provisioning completed

Expected: Account fully created and accessible
Actual:
├─ Account exists: YES ✓
├─ Can log in: YES ✓
├─ Permissions applied: YES ✓
└─ Result: Works immediately ✓

Conclusion: No waiting period needed for provisioning
```

**Test Case 2: What if user tries wrong password first?**

```
Scenario: Casey tries wrong password, then right password

Process:
1. Casey enters wrong password: "Access Denied"
2. Casey tries again with right password: Success ✓
3. Password attempt counter: Incremented but not locked (< 5 attempts)

Lockout test:
├─ Intentionally enter wrong password 5 times
├─ After 5th attempt: Account locked
├─ Lock 
├─ After 30 min: Can try again
└─ Result: Lockout policy working ✓
```

**Test Case 3: What if provisioning partially fails?**

```
Scenario: QB provisioning succeeds but AD provisioning times out

Expected outcome:
├─ ISC detects: AD provisioning failed
├─ Audit log: Shows QB success, AD timeout
├─ Alert: Admin notified of failure
├─ Action: Admin retries AD provisioning
├─ Result: Eventually succeeds
└─ User gets complete access after retry ✓
```

---

### TASK 4: Audit Trail Verification

**Verify Complete Provisioning Audit Trail:**

```
ISC > Audit > Provisioning Logs

For Casey Kim (example entry):

Timestamp: 2026-03-02 09:00:15
User: Casey Kim
Action: Provision
Role: Finance_Manager
System: QuickBooks
Status: Success
Details:
├─ Account created: casey
├─ Permission: Admin
├─ Groups: Accounting, Management, Reports
├─ Initiated by: ISC Provisioning Workflow
├─ Completed by: QB Connector
├─ 
└─ Log: "QB account provisioned successfully"

Result: Audit trail entry complete ✓

---

For same user, AD provisioning:

Timestamp: 2026-03-02 09:05:30
User: Casey Kim
Action: Provision
Role: All roles
System: Active Directory
Status: Success
Details:
├─ Account created: casey
├─ OU: Contoso/Finance
├─ Groups: Finance, Finance_Manager, Managers
├─ Password: Generated, temporary
├─ Initiated by: AD_User_Provisioning Workflow
├─ Completed by: AD Connector
├─ 
└─ Log: "AD account created and replicated"

Result: Audit trail entry complete ✓

---

Aggregate for Casey:
├─ QB provisioning: 1 success entry
├─ AD provisioning: 1 success entry
├─ GitHub provisioning: 1 success entry
├─ ADP provisioning: 1 success entry
└─ Total: 4 success audit entries ✓

Same for all 13 users = complete audit trail ✓
```

---

### TASK 5: User Readiness Verification

**Verify Users Can Immediately Work:**

```
Day 1 Readiness Check:

Finance_Manager (Casey):
├─ Workstation login: READY ✓
├─ Email access: READY ✓
├─ QB account: READY ✓
├─ Can create/approve invoices: READY ✓
├─ Manager reports visible: READY ✓
└─ Status: Ready to work on Day 1 ✓

Engineer_Developer (User4):
├─ Workstation login: READY ✓
├─ Email access: READY ✓
├─ GitHub access: READY ✓
├─ AWS staging access: READY (with MFA) ✓
├─ Can push code: READY ✓
├─ Build pipeline: READY ✓
└─ Status: Ready to work on Day 1 ✓

(All 13 users verified READY on Day 1)
```

---

## 🧪 EXPECTED RESULTS

After comprehensive testing:

✅ All 13 users verified in all systems
✅ Each user has exactly correct access (not more, not less)
✅ All workflows tested (QB invoice, GitHub review, AWS deploy, etc.)
✅ Cross-system functionality verified
✅ Error handling tested
✅ Audit trails complete and verified
✅ Users ready to work immediately

---

## ✅ SUCCESS CRITERIA

- ☑️ All 13 users tested against all systems
- ☑️ All access verified correct
- ☑️ All workflows tested and working
- ☑️ No SoD violations
- ☑️ Audit trails complete
- ☑️ All users ready for production
- ☑️ All issues documented and resolved

---

## 🎓 CERTIFICATION

**Q:** After provisioning, User4 tries to merge their own PR. What happens?

A) Merge succeeds (User4 is senior dev)
B) ✅ Merge blocked - User4 can only contribute, not approve
C) Merge requires User4 to wait 24 hours
D) Merge succeeds but requires ADP approval

**Answer: B.** User4 = Contributor (can push), Alex = Maintainer (can approve/merge). Two-person rule enforced.

**Q:** Casey logs in Day 1 and QB account doesn't exist. What went wrong?

A) Provisioning wasn't run
B) Wrong user account
C) ✅ Provisioning failed - should have alerted admin
D) QB system down (unrelated to provisioning)

**Answer: C.** If provisioning failed, admin should be alerted. User4 shouldn't start work without verified access.

---

## 📚 RESOURCES

- [Module 6.10: Provision Remaining Systems](/modules/6.10-provision-remaining-systems)
- [Next: 6.12 - Troubleshoot Provisioning Issues](/modules/6.12-troubleshoot-provisioning-issues)

---

## ✅ NEXT STEPS

1. Test all 13 users across all systems
2. Verify access matrices
3. Test critical workflows
4. Document any issues found
5. Proceed to 6.12 for troubleshooting guide

