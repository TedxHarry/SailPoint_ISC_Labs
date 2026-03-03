# 6.5 - Configure Provisioning Workflows

**Unit:** Provisioning & Deprovisioning | **Tier:** 2 | **Duration:** ~10 hours

---

## 🎯 Learning Objectives

- Configure ISC provisioning workflows
- Map roles to provisioning actions
- Set up error handling and notifications
- Test workflows before production

---

## 📋 Prerequisites

Module 6.4: Contoso Provisioning Plan. Provisioning plan complete.

---

## 📚 HANDS-ON LAB

### Objective

Configure provisioning workflows in ISC for each target system (QB, GitHub, AWS, AD, ADP) based on Module 6.4 plan.

---

### TASK 1: Access Provisioning Workflow Configuration

**Navigate in ISC:**

```
ISC > Administration > Provisioning > Workflows
    └─ This is where you configure provisioning actions

Or:

ISC > Administration > Connectors > [Select Connector] > Provisioning
    └─ Configure provisioning at connector level
```

**Workflow Interface:**

```
Create New Provisioning Workflow:
├─ Name: "QB Finance Manager Provisioning"
├─ Trigger: Role assignment
│   └─ Specific role: Finance_Manager
├─ Target system: QuickBooks connector
├─ Actions: (define below)
└─ Save
```

---

### TASK 2: Configure QB Provisioning Workflow

**Workflow 1: QB Finance Manager Provisioning**

```
Step 1: Create Workflow
├─ Name: QB_Finance_Manager_Provisioning
├─ Description: Provision Finance Manager to QB with admin access
└─ Status: Active

Step 2: Define Trigger
├─ Event: User assigned to Finance_Manager role
├─ Condition: Department = Finance (should be true)
└─ Action: Run this workflow

Step 3: Define Provisioning Actions
├─ Action 1: Create QB Account
│  ├─ Action: Create Account in QB
│  ├─ Username: [ISC: email.prefix] (casey → casey)
│  ├─ Email: [ISC: email]
│  ├─ Password: Generate random 16 chars, send via secure email
│  └─ Full Name: [ISC: name]
│
├─ Action 2: Set QB Permissions
│  ├─ Action: Add to QB permission group
│  ├─ Permission level: "admin"
│  ├─ QB groups: ["Accounting", "Management", "Reports"]
│  └─ GL access: enabled
│
├─ Action 3: Send Notification
│  ├─ Recipient: User email
│  ├─ Subject: "Your QuickBooks Admin Access is Ready"
│  ├─ Body: "Casey, your QB account is active. Temp password: [password]. Please change on first login."
│  └─ Send: Secure email
│
├─ Action 4: Log Provisioning
│  ├─ Log: "User [Casey] provisioned to QB [admin], Date: [today], Result: Success"
│  └─ Audit trail: Complete

Step 4: Error Handling
├─ If QB account already exists:
│  └─ Action: Use existing account, set permissions (don't create duplicate)
├─ If QB API timeout:
│  ├─ Action: Retry 3 times
│  ├─ Wait: 30 seconds between retries
│  └─ Alert: Notify admin if all retries fail
├─ If user missing required attributes (email):
│  └─ Action: Fail and alert admin
└─ Result: Documented, admin can manually fix

Step 5: Verification
├─ After provisioning, verify:
│  ├─ Account created in QB ✓
│  ├─ Permission level set to admin ✓
│  ├─ User can log in ✓
│  └─ Audit logged ✓
```

**Workflow 2: QB Senior Accountant Provisioning**

```
Similar to above, but:
├─ Trigger: User assigned Senior_Accountant role
├─ Permission level: "editor" (not admin)
└─ QB groups: ["Accounting"] (no "Management")

Workflow 3: QB AP Clerk Provisioning

Similar, but:
├─ Trigger: User assigned Finance_AP_Clerk role
├─ Permission level: "data entry"
└─ QB groups: ["Accounting", "Invoice Entry"]

Workflow 4: QB Finance Employee Provisioning

Trigger: Dynamic role Finance_Employee
├─ Applies to: Any user with department = Finance
├─ Permission level: "user"
└─ QB groups: ["Accounting", "Reports"]
```

---

### TASK 3: Configure GitHub Provisioning Workflow

**Workflow 1: GitHub Engineer Senior Provisioning**

```
Step 1: Create Workflow
├─ Name: GitHub_Engineer_Senior_Provisioning
├─ Description: Provision Engineer Senior to GitHub with maintainer access
└─ Status: Active

Step 2: Define Trigger
├─ Event: User assigned to Engineer_Senior role
├─ Condition: Department = Engineering
└─ Action: Run this workflow

Step 3: Define Provisioning Actions
├─ Action 1: Create GitHub Account
│  ├─ Action: Create user in GitHub
│  ├─ Username: [ISC: firstname.lastname] (alex.lee)
│  ├─ Email: [ISC: email]
│  ├─ Display name: [ISC: name]
│  └─ Password: Generate random, email to user
│
├─ Action 2: Add to GitHub Organization
│  ├─ Action: Add user to organization "contoso"
│  ├─ Organization: contoso
│  ├─ Invitation: Sent via email
│  └─ Status: Pending acceptance
│
├─ Action 3: Add to GitHub Teams
│  ├─ Team 1: Engineering (role: maintainer)
│  ├─ Team 2: Technical_Staff (role: member)
│  └─ Team 3: Managers (role: maintainer)
│
├─ Action 4: Grant Repository Access
│  ├─ Repository 1: main
│  │  ├─ Permission: Push (write)
│  │  └─ Includes: Code review, merge PRs
│  ├─ Repository 2: staging
│  │  └─ Permission: Push (write)
│  ├─ Repository 3: infrastructure
│  │  └─ Permission: Push (write)
│  └─ Repository 4: archived (if needed)
│      └─ Permission: Read-only
│
├─ Action 5: Send Notification
│  ├─ Recipient: User email
│  ├─ Subject: "Welcome to Contoso GitHub"
│  ├─ Body: "Alex, you're now part of the Engineering team. Set your GitHub password and accept invitation."
│  └─ Link: GitHub org invitation
│
├─ Action 6: Log Provisioning
│  ├─ Log: User [Alex] provisioned to GitHub, teams/permissions set
│  └─ Audit trail: Complete

Step 4: Error Handling
├─ If GitHub account exists:
│  └─ Action: Update team membership and permissions
├─ If user doesn't accept invitation within 7 days:
│  └─ Alert: Resend invitation
└─ If API fails:
   └─ Retry 3 times, alert admin

Step 5: Verification
├─ After provisioning:
│  ├─ Account created in GitHub ✓
│  ├─ Teams correct ✓
│  ├─ Repository access correct ✓
│  └─ User can clone repos ✓
```

**Workflow 2: GitHub Engineer Developer Provisioning**

```
Similar, but:
├─ Teams: Engineering (role: contributor)
├─ Repositories: main (push), staging (push), dev (push)
└─ Infrastructure repo: Read-only (not write)

Workflow 3: GitHub DevOps Provisioning

Similar, but:
├─ Teams: Infrastructure (role: maintainer)
├─ Repositories: All repos with admin access
└─ Webhooks: Can manage CI/CD configurations
```

---

### TASK 4: Configure AWS Provisioning Workflow

**Workflow: AWS DevOps/Engineer Provisioning**

```
Step 1: Create Workflow
├─ Name: AWS_DevOps_Provisioning
├─ Description: Provision user to AWS with IAM access
└─ Status: Active

Step 2: Define Trigger
├─ Event: User assigned to DevOps or Engineer_Senior role
├─ Condition: Department = Engineering
└─ Action: Run this workflow

Step 3: Define Provisioning Actions
├─ Action 1: Create IAM User
│  ├─ Action: Create AWS IAM user
│  ├─ Username: [ISC: firstname.lastname.role] (user12.devops)
│  ├─ Access Key: Auto-generate
│  ├─ Secret Key: Generate and encrypt
│  └─ Send securely to user email
│
├─ Action 2: Add to IAM Groups (based on role)
│  ├─ If Engineer_Senior:
│  │  ├─ Group: Developers
│  │  ├─ Group: Production (with restrictions)
│  │  └─ Group: ReadOnlyAccess (safety fallback)
│  ├─ If Engineer_Developer:
│  │  ├─ Group: Developers
│  │  └─ Group: StagingOnly (no prod access)
│  └─ If DevOps:
│      ├─ Group: DevOps_Admins
│      └─ Group: Infrastructure
│
├─ Action 3: Enforce MFA Requirement
│  ├─ Requirement: MFA must be enabled before use
│  ├─ Grace period: 24 hours
│  ├─ Method: Virtual (Google Authenticator, etc.)
│  └─ If not enabled: Access revoked
│
├─ Action 4: Attach Policies
│  ├─ Managed policy: PowerUserAccess or ReadOnlyAccess
│  ├─ Custom policies: Environment-specific
│  └─ Boundary: Prevent privilege escalation
│
├─ Action 5: Configure Permissions
│  ├─ For DevOps: Full infrastructure access
│  ├─ For Engineer_Senior: Production with approval
│  ├─ For Engineer_Developer: Staging and dev only
│  └─ Verify: CLI can assume roles
│
├─ Action 6: Send Notification
│  ├─ Email to user: "Your AWS access is ready"
│  ├─ Include: Access Key (encrypted), setup instructions
│  ├─ Attach: MFA setup guide
│  └─ Link: AWS console login
│
├─ Action 7: Log Provisioning
│  ├─ Log: User provisioned to AWS, IAM user created
│  └─ Audit: Complete

Step 4: Error Handling
├─ If IAM user exists:
│  └─ Action: Update groups and permissions
├─ If MFA not enabled within 24 hours:
│  └─ Alert: Admin, disable access until MFA set
└─ If API fails:
   └─ Retry, alert on failure

Step 5: Verification
├─ After provisioning:
│  ├─ IAM user created ✓
│  ├─ Groups assigned ✓
│  ├─ MFA requirement enforced ✓
│  ├─ User can generate access keys ✓
│  └─ User can switch roles (if applicable) ✓
```

---

### TASK 5: Configure AD Provisioning Workflow

**Workflow: Active Directory User Provisioning**

```
Step 1: Create Workflow
├─ Name: AD_User_Provisioning
├─ Description: Provision user to Active Directory
└─ Status: Active

Step 2: Define Trigger
├─ Event: New user created in ISC OR user department changed
└─ Action: Run this workflow

Step 3: Define Provisioning Actions
├─ Action 1: Create AD Account
│  ├─ Action: Create user in AD
│  ├─ Username: [ISC: email.prefix]
│  ├─ Email: [ISC: email]
│  ├─ Password: Auto-generate, force change on first login
│  ├─ Full Name: [ISC: name]
│  ├─ Office: [ISC: office location]
│  └─ Phone: [ISC: phone number]
│
├─ Action 2: Place in Organizational Unit
│  ├─ OU: /Contoso/[ISC: department]
│  ├─ Example OUs:
│  │  ├─ /Contoso/Finance
│  │  ├─ /Contoso/Engineering
│  │  ├─ /Contoso/IT
│  │  ├─ /Contoso/Sales
│  │  └─ /Contoso/HR
│  └─ Manager: Set from ISC manager field
│
├─ Action 3: Add to Security Groups
│  ├─ Department group: [Department] (Finance, Engineering, etc.)
│  ├─ Role groups: [Department]_[Role] (Finance_Manager, etc.)
│  ├─ Function groups: Technical_Staff (if applicable)
│  └─ Management groups: Managers (if applicable)
│
├─ Action 4: Add to Distribution Lists
│  ├─ Distribution list: [Department] (all-finance@contoso.com, etc.)
│  └─ All-company list: all-staff@contoso.com
│
├─ Action 5: Apply Group Policies
│  ├─ Policy 1: Domain user policy (password, login hours)
│  ├─ Policy 2: Department-specific policy (software, permissions)
│  └─ Policy 3: Role-specific policy (admin rights, restrictions)
│
├─ Action 6: Send Notification
│  ├─ To user: "Your AD account created, initial password: [pass]"
│  ├─ To manager: "Your team member [name] account is active"
│  └─ To IT: "AD account created for [name], ready for provisioning"
│
├─ Action 7: Log Provisioning
│  ├─ Log: User [name] created in AD with groups [list]
│  └─ Audit: Complete

Step 4: Error Handling
├─ If user exists in AD:
│  └─ Action: Update groups and attributes
├─ If OU doesn't exist:
│  └─ Create OU first
├─ If group doesn't exist:
│  └─ Alert admin
└─ If API fails:
   └─ Retry, alert on failure

Step 5: Verification
├─ After provisioning:
│  ├─ Account created in AD ✓
│  ├─ OU placement correct ✓
│  ├─ Security groups assigned ✓
│  ├─ Distribution lists updated ✓
│  └─ User can log in to domain ✓
```

---

### TASK 6: Test Workflows

**Test Approach:**

```
Phase 1: Unit Testing (each workflow in isolation)
├─ Create test user (TestUser1)
├─ Assign test role (Finance_Manager)
├─ Run QB provisioning workflow manually
├─ Verify: Account created in QB test environment
└─ Check: Audit logs show provisioning action

Phase 2: Integration Testing (role → multiple systems)
├─ Create test user (TestUser2)
├─ Assign role (Engineer_Developer)
├─ Run all workflows for that role
├─ Verify: Account created in GitHub AND AWS
└─ Check: Audit logs show all actions

Phase 3: Error Testing (what if things fail)
├─ Test: QB API timeout
│  ├─ Expected: Retry logic works, alert if all fail
│  └─ Verify: No partial/duplicate accounts
├─ Test: Missing required attributes
│  ├─ Expected: Fail gracefully, alert admin
│  └─ Verify: User not left in undefined state
└─ Test: System already has account
   ├─ Expected: Use existing, set permissions
   └─ Verify: No duplicate accounts created

Phase 4: Scale Testing (multiple users)
├─ Create 5 test users
├─ Assign various roles
├─ Run all workflows simultaneously
├─ Verify: All provisioned correctly in < 10 minutes
└─ Check: No race conditions or conflicts
```

---

## 🧪 EXPECTED RESULTS

After configuration:

✅ QB provisioning workflow configured for all finance roles
✅ GitHub provisioning workflow configured for engineering roles
✅ AWS provisioning workflow configured for infrastructure roles
✅ AD provisioning workflow configured for all users
✅ All workflows tested and working
✅ Error handling and notifications configured
✅ Audit trail logging complete

---

## ✅ SUCCESS CRITERIA

- ☑️ All provisioning workflows configured
- ☑️ Workflows trigger on correct role assignments
- ☑️ Actions create accounts with correct permissions
- ☑️ Error handling and notifications work
- ☑️ Workflows tested in sandbox
- ☑️ Ready for production deployment

---

## 🎓 CERTIFICATION

**Q:** What should happen if QB provisioning fails due to API timeout?

A) Skip and continue
B) ✅ Retry 3 times, then alert admin for manual intervention
C) Disable user's role
D) Delete user and start over

**Answer: B.** Failed provisioning requires resolution - user shouldn't lose access, admin must fix manually if retries fail.

**Q:** When configuring GitHub provisioning for Engineer_Developer, what permission level should they have?

A) Admin (can manage repos)
B) ✅ Contributor (can push code, create PRs, but not delete repos)
C) Read-only (can view code only)
D) No access (manual approval needed)

**Answer: B.** Engineer_Developer = contributor level (write access to dev/staging, no admin).

---

## 📚 RESOURCES

- [Module 6.4: Contoso Provisioning Plan](/modules/6.4-contoso-provisioning-plan)
- [Next: 6.6 - Provision QuickBooks Access](/modules/6.6-provision-quickbooks-access)

---

## ✅ NEXT STEPS

1. Configure all provisioning workflows
2. Test each workflow in sandbox
3. Proceed to 6.6 to execute QB provisioning

