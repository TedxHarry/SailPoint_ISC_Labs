# 6.8 - Provision AWS Access

**Unit:** Provisioning & Deprovisioning | **Tier:** 2 | 

---

## 🎯 Learning Objectives

- Provision infrastructure users to AWS
- Configure IAM users and groups
- Set up MFA enforcement
- Test AWS access with credentials

---

## 📋 Prerequisites

Module 6.7: Provision GitHub Access. GitHub provisioning complete.

---

## 📚 HANDS-ON LAB

### Objective

Provision 3 infrastructure users (DevOps, 2 Engineers) to AWS with correct IAM groups and policies.

---

### TASK 1: Pre-Provisioning Checklist

**Verify AWS Connector:**

```
☑ AWS IAM access key valid (not revoked)
☑ ISC IP whitelisted in AWS (if applicable)
☑ Connection test successful
☑ IAM groups exist: DevOps_Admins, Developers, StagingOnly, Infrastructure
☑ Managed policies available: PowerUser, ReadOnly, Developer
☑ Custom policies created (environment-specific)
☑ MFA devices available (or virtual MFA allowed)
☑ AWS backup completed
```

**Verify Workflows:**

```
☑ AWS_DevOps_Provisioning configured
☑ AWS_Engineer_Senior_Provisioning configured
☑ AWS_Engineer_Developer_Provisioning configured
☑ MFA enforcement configured
☑ Access key rotation policy configured
☑ Notifications configured
☑ Error handling and retry logic configured
```

**Verify Users:**

```
☑ User12 assigned to DevOps role
☑ Alex Lee assigned to Engineer_Senior role
☑ User4 assigned to Engineer_Developer role
☑ All have email addresses
☑ All in Engineering department
```

---

### TASK 2: Execute AWS Provisioning for DevOps

**Step 1: Initiate Provisioning for User12**

```
ISC > Identities > User12
├─ Role: DevOps
├─ Trigger: AWS_DevOps_Provisioning workflow
├─ Monitor: ISC > Provisioning > Status
└─ Expected completion: 
```

**Step 2: Verify IAM User Created**

```
AWS Management Console > IAM > Users
├─ New user: user12-devops ✓
├─ Email: user12@contoso.com ✓
├─ Access Key ID: AKIA... (auto-generated) ✓
├─ Secret Access Key: (encrypted, sent to user) ✓
├─ Status: Active ✓
├─ MFA: Not yet enabled (enforcement pending)
│
└─ User details:
 ├─ Username: user12-devops
 ├─ Created: [today]
 ├─ Console login: Disabled (use API keys, not console)
 ├─ Permissions boundary: Applied (no privilege escalation)
 └─ Last activity: None yet
```

**Step 3: Verify IAM Groups**

```
AWS > IAM > Groups

DevOps_Admins group:
├─ Members: user12-devops ✓
├─ Policies:
│ ├─ AdministratorAccess (full AWS permissions)
│ └─ Boundary: Prevents deleting critical resources
│
├─ Description: Infrastructure administration

Infrastructure group:
├─ Members: user12-devops ✓
├─ Policies:
│ ├─ AmazonEC2FullAccess
│ ├─ AmazonRDSFullAccess
│ ├─ CloudFormationFullAccess
│ └─ Custom policy: Prevent security group deletion
│
└─ Description: Infrastructure management
```

**Step 4: Verify MFA Enforcement**

```
AWS > IAM > User > user12-devops

MFA setting: Required
├─ User12 must enable MFA before full access
├─ Grace period: 
├─ Method: Virtual (Google Authenticator, Authy, etc.)
├─ Steps:
│ 1. User12 downloads authenticator app
│ 2. Go to AWS Console > MFA setup
│ 3. Scan QR code with app
│ 4. Enter 6-digit code twice
│ 5. MFA enabled, full access granted
│
└─ If not enabled after : Access revoked
```

**Step 5: User12 Enables MFA**

```
Process:
1. User12 receives email: "Your AWS access is ready"
 ├─ Access Key: AKIA... (encrypted)
 ├─ Secret: (encrypted, 1-time link)
 └─ Setup instructions (enable MFA)

2. User12 sets up MFA:
 ├─ Download: Google Authenticator app
 ├─ Open AWS Console (using access key/secret from email)
 ├─ Navigate to: Security credentials > MFA
 ├─ Click "Activate MFA device"
 ├─ Scan QR code with app
 ├─ Enter 2 consecutive 6-digit codes
 ├─ AWS: "MFA device activated"
 └─ Full AWS access now enabled ✓

3. User12 can now access AWS
```

**Step 6: Verify AWS Access**

```
Test: User12 can access AWS infrastructure

Method 1: AWS CLI (command line)
1. User12 configures AWS CLI:
 ├─ Command: aws configure
 ├─ Enter Access Key: AKIA...
 ├─ Enter Secret: (from email)
 ├─ Default region: us-east-1
 └─ Default format: json

2. User12 tests access:
 ├─ Command: aws ec2 describe-instances
 ├─ Result: Lists all EC2 instances ✓
 ├─ Command: aws rds describe-db-instances
 ├─ Result: Lists all RDS databases ✓
 └─ Verification: Infrastructure access working ✓

Method 2: Terraform/Infrastructure as Code
1. User12 can deploy infrastructure:
 ├─ Write: main.tf (create EC2, RDS, etc.)
 ├─ Command: terraform init
 ├─ Command: terraform apply
 ├─ AWS creates resources
 └─ Verification: Can manage infrastructure ✓

Audit Trail:
├─ AWS CloudTrail shows: User12 accessed resources
├─ Timestamp: [today, time]
├─ Actions: DescribeInstances, DescribeDBInstances, etc.
└─ Result: Audit trail complete ✓
```

---

### TASK 3: Execute AWS Provisioning for Engineer Senior

**Provision Alex Lee:**

```
ISC > Identities > Alex Lee
├─ Role: Engineer_Senior
├─ Trigger: AWS_Engineer_Senior_Provisioning workflow
├─ Monitor: Status
└─ Expected: IAM user created

AWS verification:
├─ Username: alex-engineer ✓
├─ Groups:
│ ├─ Developers: Can access dev/staging environment
│ ├─ ProductionAccess: Can access prod (with restrictions)
│ └─ ReadOnlyAccess: Fallback (safety net)
├─ Policies:
│ ├─ PowerUser: Full access except IAM/billing
│ ├─ Environment boundary: Can't access other dept resources
│ └─ Prod access: Requires approval workflow (separate)
├─ MFA: Required ( setup grace period)
└─ Status: READY FOR MFA SETUP ✓

Permissions:
├─ Can: Deploy to dev/staging, run tests, manage infra (limited)
├─ Can: Request production access (approval required)
├─ Cannot: Delete production resources without approval
└─ Cannot: Modify IAM roles or security groups
```

---

### TASK 4: Execute AWS Provisioning for Engineer Developer

**Provision User4:**

```
ISC > Identities > User4
├─ Role: Engineer_Developer
├─ Trigger: AWS_Engineer_Developer_Provisioning workflow
├─ Monitor: Status
└─ Expected: IAM user created

AWS verification:
├─ Username: user4-dev ✓
├─ Groups:
│ ├─ Developers: Development environment access only
│ ├─ StagingOnly: Staging environment access only
│ └─ ReadOnlyAccess: (safety fallback)
├─ Policies:
│ ├─ Developer: EC2, RDS, CloudWatch (dev only)
│ ├─ Environment boundary: No production access
│ └─ Explicit deny: Cannot access prod resources
├─ MFA: Required
└─ Status: READY FOR MFA SETUP ✓

Permissions:
├─ Can: Deploy to dev/staging, run tests, view logs
├─ Can: Create test instances, databases
├─ Cannot: Access production environment
├─ Cannot: Delete anything (explicit deny policy)

Difference from Alex:
├─ Alex: Can access production (with restrictions)
├─ User4: Cannot access production at all
└─ Result: Junior dev cannot accidentally break prod ✓
```

---

### TASK 5: Verify All AWS Users Provisioned

**Comprehensive Verification Table:**

```
User: User12
├─ Role: DevOps
├─ IAM User: user12-devops ✓
├─ Groups: DevOps_Admins, Infrastructure ✓
├─ Policies: AdministratorAccess (with boundary)
├─ MFA: Required ✓
├─ Can deploy infrastructure: YES ✓
├─ Can manage CI/CD: YES ✓
├─ Can modify security: YES (with restrictions)
├─ Audit log: Provisioned ✓
└─ Status: PRODUCTION READY ✓

User: Alex Lee
├─ Role: Engineer_Senior
├─ IAM User: alex-engineer ✓
├─ Groups: Developers, ProductionAccess ✓
├─ Policies: PowerUser (limited to dev/staging + prod with approval)
├─ MFA: Required ✓
├─ Can access prod: YES (approval for modifications)
├─ Can test in staging: YES ✓
├─ Can mentor junior devs: YES ✓
├─ Audit log: Provisioned ✓
└─ Status: PRODUCTION READY ✓

User: User4
├─ Role: Engineer_Developer
├─ IAM User: user4-dev ✓
├─ Groups: Developers, StagingOnly ✓
├─ Policies: Developer (dev/staging only, no prod)
├─ MFA: Required ✓
├─ Can access production: NO ✗ (correct)
├─ Can test in staging: YES ✓
├─ Can learn in dev: YES ✓
├─ Audit log: Provisioned ✓
└─ Status: PRODUCTION READY ✓

Summary:
├─ All 3 users provisioned to AWS ✓
├─ Environment restrictions enforced (prod protection) ✓
├─ MFA enforcement active ✓
├─ Role-based access control correct ✓
├─ Audit trails complete ✓
└─ Ready for infrastructure deployment ✓
```

---

### TASK 6: Test AWS Access Control

**Test 1: Junior Dev Cannot Access Production**

```
Scenario: User4 tries to kill production database

User4's AWS CLI:
1. Command: aws rds delete-db-instance --db-instance-identifier prod-db
2. AWS checks: Does user4-dev have permission?
3. Result: Access Denied (explicit deny policy blocks)
4. Error: "User: arn:aws:iam::123456789:user/user4-dev is not authorized"

Verification:
├─ User4 cannot access prod resources ✓
├─ Explicit deny policy prevents accident ✓
├─ Audit log shows: Denied attempt at [timestamp]
└─ Result: Production protected ✓
```

**Test 2: Senior Engineer Can Request Prod Access**

```
Scenario: Alex deploys code to production

Alex's workflow:
1. Alex creates change request: "Deploy v2.0 to production"
2. Alex attaches: Terraform plan, testing results
3. Approval workflow triggered:
 ├─ Notification: Sent to DevOps (User12)
 ├─ DevOps: Reviews change
 ├─ DevOps: Approves (or denies)
 └─ If approved: Temporary prod access granted to Alex

4. Alex applies Terraform: terraform apply
 ├─ AWS: Deploys to production
 ├─ CloudTrail: Logs "Alex deployed v2.0"
 ├─ Timestamp: [exact time]
 └─ Success ✓

5. Approval expired: Temporary access revoked
 ├─ Alex can no longer modify prod
 ├─ Next deployment: Must request approval again

Verification:
├─ Single person cannot modify prod without approval ✓
├─ Audit trail complete (who deployed what when)
├─ SoD enforced (deploy + approve = two people) ✓
└─ Result: Controlled production changes ✓
```

**Test 3: MFA Required**

```
Scenario: Someone tries to use User12's credentials without MFA

Attacker steals: Access Key + Secret
1. Attacker tries to access AWS
2. AWS prompts: Enter MFA code
3. Attacker doesn't have User12's phone
4. AWS denies access
5. ISC alerts: "Failed login attempt (MFA failed)"

Verification:
├─ Credentials alone insufficient ✓
├─ MFA required (something you have - phone)
├─ Stolen credentials unusable ✓
└─ Alert generated ✓
```

---

### TASK 7: Troubleshooting

**Issue 1: MFA Setup Failed**

```
Error: User12 can't set up MFA

Cause:
├─ Authenticator app not installed
├─ QR code not scanned properly
├─ Time sync issue between phone and AWS
└─ Virtual MFA device already assigned

Solution:
1. Download authenticator app:
 ├─ Google Authenticator (iOS/Android)
 ├─ Authy (iOS/Android)
 ├─ Microsoft Authenticator (iOS/Android)
 └─ Any TOTP app

2. Time sync:
 ├─ Check phone time is correct
 ├─ Enable automatic time sync on phone
 └─ Try again

3. Reset MFA:
 ├─ AWS admin: Go to User12 > Security
 ├─ Delete old MFA device
 ├─ User12: Retry setup
 └─ Should succeed

4. If still failing:
 ├─ Contact AWS support
 ├─ Or: Admin manually set MFA
```

**Issue 2: IAM User Can't Assume Role**

```
Error: User12 tries to switch to another role but denied

Cause:
├─ Role trust policy doesn't allow user12-devops
├─ User not in correct group to assume role
└─ Session duration too short

Solution:
1. Check role trust policy:
 ├─ AWS > IAM > Roles > [RoleName]
 ├─ Trust policy should include: user12-devops principal
 ├─ If missing: Add user to trust policy
 └─ Save

2. Retry: User12 can now assume role ✓
```

**Issue 3: Provisioning Timeout**

```
Error: "AWS API call timed out"

Cause:
├─ AWS API slow
├─ Rate limit hit
└─ Network connectivity issue

Solution:
1. Wait , retry
2. Increase provisioning timeout
3. Contact AWS support if API errors continue
```

---

## 🧪 EXPECTED RESULTS

After AWS provisioning:

✅ 3 infrastructure users provisioned to AWS
✅ MFA enforced for all users
✅ Environment restrictions applied (no accidental prod access)
✅ Access control verified (junior dev cannot access prod)
✅ Audit trail complete

---

## ✅ SUCCESS CRITERIA

- ☑️ All 3 users provisioned to AWS
- ☑️ MFA enabled and verified
- ☑️ Groups assigned correctly
- ☑️ Environment restrictions enforced
- ☑️ Access control tested
- ☑️ Audit trails complete

---

## 🎓 CERTIFICATION

**Q:** Why is MFA required for AWS DevOps access?

A) It's mandatory for all systems
B) ✅ Credentials alone aren't enough - need something you have (phone) too
C) AWS requires it by law
D) To prevent password reuse

**Answer: B.** MFA = multi-factor authentication = credentials + something you have.

**Q:** User4 tries to delete production database but gets "Access Denied". Why?

A) AWS is broken
B) ✅ Explicit deny policy blocks prod access for junior devs
C) User4 needs to wait longer
D) User4 needs to ask for approval first

**Answer: B.** Explicit deny policy prevents accident. User4 simply cannot access prod.

---

## 📚 RESOURCES

- [Module 6.7: Provision GitHub Access](/modules/6.7-provision-github-access)
- [Next: 6.9 - Provision Directory Services](/modules/6.9-provision-directory-services)

---

## ✅ NEXT STEPS

1. Provision all 3 users to AWS
2. Set up MFA for all users
3. Test access control and environment restrictions
4. Proceed to 6.9 to provision Active Directory

