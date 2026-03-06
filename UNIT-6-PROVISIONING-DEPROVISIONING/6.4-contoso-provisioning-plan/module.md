# 6.4 - Contoso Provisioning Plan

**Unit:** Provisioning & Deprovisioning | **Tier:** 2 | 

---

## 🎯 Learning Objectives

- Plan Contoso provisioning strategy
- Map roles to provisioning actions
- Understand target system requirements
- Identify provisioning dependencies

---

## 📋 Prerequisites

Module 6.3: Provisioning Workflows. Workflows understood.

---

## 📚 HANDS-ON LAB

### Objective

Create detailed provisioning plan for Contoso's 13 users across 5 target systems based on Unit 5 access model.

---

### TASK 1: Contoso Provisioning Overview

**Starting State (Unit 5 Completed):**

```
13 users assigned to roles
├─ Finance: Casey Kim (Manager), Morgan Chen (Senior Accountant), User5 (AP Clerk)
├─ Engineering: Alex Lee (Senior), User4 (Developer), User12 (DevOps)
├─ IT: User10 (Administrator), User11 (Security Officer)
├─ Sales: User6 (Representative), User7 (Representative)
├─ HR: User8 (Specialist), User9 (Manager)
└─ Total: 13 users, 11 standard roles, 8 dynamic roles

Access Model Complete (Unit 5):
├─ 11 standard roles defined
├─ 8 dynamic roles defined
├─ 6+ SoD rules enforced
└─ All documented and validated

Provisioning Goal (Unit 6):
├─ Implement access in real systems
├─ Each user has actual system access
├─ Access matches assigned roles
└─ Audit trail complete
```

**Target Systems Overview:**

```
System 1: QuickBooks (Finance)
├─ Users: Finance_Manager, Senior_Accountant, AP_Clerk, Finance_Employee
├─ Action: Create accounts, set permission levels
└─ Owner: Finance Manager (Casey)

System 2: GitHub (Engineering & IT)
├─ Users: Engineer_Senior, Engineer_Developer, DevOps, Engineering_Employee
├─ Action: Create accounts, add to teams, grant repo access
└─ Owner: Engineering Manager (Alex)

System 3: AWS (Infrastructure)
├─ Users: DevOps, Engineer_Senior, Engineer_Developer
├─ Action: Create IAM users, assign groups, enable MFA
└─ Owner: DevOps Lead (User12)

System 4: Active Directory (All Users)
├─ Users: All 13 users
├─ Action: Create accounts, set group memberships, configure policies
└─ Owner: IT Administrator (User10)

System 5: ADP/HRIS (HR)
├─ Users: All users (some features), HR roles (full access)
├─ Action: Create self-service accounts, enable features
└─ Owner: HR Manager (User9)
```

---

### TASK 2: Role to System Mapping

**Finance Department:**

```
Finance_Manager (Casey Kim)
├─ QB: Create account "casey", permission level "admin"
├─ AD: Create account, add to groups [Accounting, Management, Finance]
├─ ADP: Create account, enable payroll/benefits access
└─ Others: Basic access (GitHub read-only, AWS none)

Senior_Accountant (Morgan Chen)
├─ QB: Create account "mchen", permission level "editor"
├─ AD: Create account, add to groups [Accounting, Finance]
├─ ADP: Create account, enable benefits access
└─ Others: Basic access

Finance_AP_Clerk (User5)
├─ QB: Create account "user5", permission level "data entry"
├─ AD: Create account, add to groups [Accounting, Finance]
├─ ADP: Create account, basic self-service
└─ Others: No access

Finance_Employee (Dynamic)
├─ Applied to: Casey, Morgan, User5
├─ QB: Create account, permission level "user"
├─ AD: Group membership automatic (Finance group)
└─ ADP: Basic self-service access
```

**Engineering Department:**

```
Engineer_Senior (Alex Lee)
├─ GitHub: Create account "alee", add to "Engineering" team, "maintainer" role
├─ AWS: Create IAM user, add to "Infrastructure" group, require MFA
├─ AD: Create account, add to [Engineering, Technical, Management]
└─ QB: Read-only access

Engineer_Developer (User4)
├─ GitHub: Create account "user4", add to "Engineering" team, "contributor" role
├─ AWS: Create IAM user, add to "Developers" group, limit to dev environment
├─ AD: Create account, add to [Engineering, Technical]
└─ QB: No access

DevOps (User12)
├─ GitHub: Create account "user12", add to "Infrastructure" team, "admin" role
├─ AWS: Create IAM user, add to "DevOps_Admins" group, full access
├─ AD: Create account, add to [Engineering, Technical, Infrastructure]
└─ QB: No access

Engineering_Employee (Dynamic)
├─ Applied to: Alex, User4, User12
├─ GitHub: Create account, add to "Engineering" team, "member" role
├─ AWS: Basic VPN/SSH access
└─ AD: Group membership automatic
```

**IT Department:**

```
IT_Administrator (User10)
├─ AD: Create account, domain admin privileges
├─ GitHub: Create account "user10", add to "Infrastructure" team, "admin"
├─ AWS: Create IAM user, add to "Admins" group
├─ Okta: Admin access (if used)
└─ QB: No access

Security_Officer (User11)
├─ ISC: Read access to all audit logs
├─ AD: Create account, add to [Security, Audit]
├─ GitHub: Create account "user11", read-only to all repos
├─ AWS: Read-only to CloudTrail, security tools
└─ QB: No access

IT_Employee (Dynamic)
├─ Applied to: User10, User11
├─ AD: Group membership automatic (IT group)
└─ GitHub: Read-only access
```

**Sales Department:**

```
Sales_Representative (User6, User7)
├─ Salesforce: Create account, set permission set "Sales Rep"
├─ AD: Create account, add to [Sales]
├─ QB: Read-only (view invoices/payments)
└─ Others: No access

Sales_Employee (Dynamic)
├─ Applied to: User6, User7
├─ AD: Group membership automatic (Sales group)
└─ Salesforce: Basic user access
```

**HR Department:**

```
HR_Specialist (User8)
├─ ADP: Create account, benefits/payroll access
├─ AD: Create account, add to [HR]
└─ Others: No access

HR_Manager (User9)
├─ ADP: Create account, full admin access
├─ AD: Create account, add to [HR, Management]
├─ ISC: Read access to user lifecycle workflows
└─ Others: Limited access

HR_Employee (Dynamic)
├─ Applied to: User8, User9
├─ AD: Group membership automatic (HR group)
├─ ADP: Self-service access
└─ Others: No access
```

---

### TASK 3: System Provisioning Requirements

**QuickBooks (QB) Provisioning:**

```
Required Information:
├─ User list (from ISC)
├─ Role/permission mapping
└─ QB connector with admin API key

For each user assigned QB role:
├─ Create account
│ ├─ Username: email prefix (casey → casey)
│ ├─ Email: user@contoso.com
│ ├─ Password: auto-generate, send via secure channel
│ └─ Full Name: from ISC user profile
├─ Set permission level
│ ├─ Admin: Finance_Manager
│ ├─ Editor: Senior_Accountant
│ ├─ Data Entry: AP_Clerk
│ └─ User: Finance_Employee members
├─ Add to groups
│ ├─ Accounting: All finance
│ ├─ Reports: Finance_Manager
│ └─ Approvals: Finance_Manager
└─ Log action in ISC audit trail

Success Criteria:
├─ 4 users provisioned to QB
├─ Each with correct permission level
├─ Able to log in with provided credentials
└─ QB audit log shows accounts created
```

**GitHub Provisioning:**

```
Required Information:
├─ User list (from ISC)
├─ Engineering team structure
├─ Repository permission mapping
└─ GitHub connector with org admin token

For each user assigned GitHub role:
├─ Create GitHub account
│ ├─ Username: firstname.lastname (alex.lee)
│ ├─ Email: user@contoso.com
│ └─ Name: from ISC user profile
├─ Add to Contoso organization
│ ├─ Team: Engineering, Infrastructure, or both
│ └─ Role: Maintainer (senior), Contributor (developer), Member (employee)
├─ Grant repository access
│ ├─ Engineering_Senior: All repos, push rights
│ ├─ Engineer_Developer: Dev/staging repos, push rights, no prod
│ ├─ DevOps: Infrastructure repos, full access
│ └─ Engineering_Employee: Org access, follow-only
├─ Configure webhooks/integrations
│ └─ ISC integration webhook (for role changes)
└─ Log action in ISC audit trail

Success Criteria:
├─ 6 users provisioned to GitHub
├─ Each in correct team with correct permissions
├─ Able to see assigned repositories
└─ GitHub audit log shows team additions
```

**AWS Provisioning:**

```
Required Information:
├─ User list (from ISC)
├─ IAM group structure (Developers, DevOps, Infrastructure)
├─ MFA enforcement policy
└─ AWS connector with IAM admin credentials

For each user assigned AWS role:
├─ Create IAM user
│ ├─ Username: firstname.lastname (user4.dev)
│ ├─ Access Key: auto-generate
│ └─ Secret: encrypt and send securely
├─ Assign to IAM groups
│ ├─ DevOps: DevOps_Admins, Infrastructure (User12)
│ ├─ Engineer_Senior: Developers, Production (Alex)
│ ├─ Engineer_Developer: Developers, Staging only (User4)
│ └─ Engineering_Employee: ReadOnlyAccess
├─ Enforce MFA
│ ├─ Requirement: User must set up MFA before use
│ ├─ Method: Virtual (Google Authenticator, etc.)
│ └─ Grace period: to enable
├─ Attach policies
│ ├─ Managed policies (PowerUser, ReadOnly)
│ ├─ Custom policies (production-restricted)
│ └─ Permission boundaries (prevent privilege escalation)
└─ Log action in ISC audit trail

Success Criteria:
├─ 3 users provisioned to AWS (DevOps, 2 Engineers)
├─ Each in correct IAM group
├─ MFA enforcement active
├─ Can create access keys for programmatic access
└─ AWS CloudTrail shows IAM user creation
```

**Active Directory (AD) Provisioning:**

```
Required Information:
├─ User list (from ISC) with department/manager
├─ OU structure (by department)
├─ Group membership mapping
└─ AD connector with domain admin credentials

For each user:
├─ Create AD account
│ ├─ Username: email prefix (casey → casey)
│ ├─ Email: user@contoso.com
│ ├─ Password: auto-generate, force change on first login
│ └─ Display Name: from ISC user profile
├─ Configure account settings
│ ├─ OU: /Contoso/[Department] (Finance, Engineering, IT, Sales, HR)
│ ├─ Office: From ISC (if available)
│ ├─ Phone: From ISC (if available)
│ └─ Manager: From ISC user hierarchy
├─ Add to security groups
│ ├─ Department group: Finance, Engineering, IT, Sales, HR
│ ├─ Role groups: [Department]_[Role] (Finance_Manager, etc.)
│ ├─ Technical groups: Technical_Staff, Management (if applicable)
│ └─ Distribution lists: Email groups for departments
├─ Set policies
│ ├─ Group Policy Objects (GPOs) for dept role
│ ├─ Password policy: expiration
│ ├─ Account lockout: 5 failed attempts
│ └─ Login hours: Normal business hours (optional)
└─ Log action in ISC audit trail

Success Criteria:
├─ 13 accounts created in AD
├─ Each in correct OU and security groups
├─ Users can log into domain
├─ All email distribution lists working
└─ AD audit log shows accounts created
```

**ADP/HRIS Provisioning:**

```
Required Information:
├─ User list (from ISC) with HR attributes
├─ Role to ADP permission mapping
└─ ADP connector with admin API credentials

For each user:
├─ Create ADP account
│ ├─ Employee ID: from Contoso HR system
│ ├─ Name, email: from ISC
│ └─ Department: from ISC
├─ Enable features by role
│ ├─ HR Roles: Full benefits, payroll, admin access
│ ├─ Management Roles: Reports, team management
│ ├─ All Users: Self-service (view pay stub, update address, benefits)
│ └─ Finance: Payroll view (read-only)
├─ Configure permissions
│ ├─ HR_Manager: System admin access
│ ├─ HR_Specialist: HR operations access
│ └─ All users: Self-service portal access
└─ Log action in ISC audit trail

Success Criteria:
├─ 13 accounts created in ADP
├─ HR roles have full access
├─ All users can access self-service
└─ ADP audit log shows accounts created
```

---

### TASK 4: Provisioning Sequence & Dependencies

**Phase 1: Foundation (Days 1-2)**

```
1. Configure connectors
 ├─ Test QB connector (API key valid, connection works)
 ├─ Test GitHub connector (OAuth token valid)
 ├─ Test AWS connector (IAM credentials valid)
 ├─ Test AD connector (domain admin account)
 ├─ Test ADP connector (API credentials valid)
 └─ Action: Click "Test Connection" for each

2. Create provisioning workflows (templates)
 ├─ QB provisioning workflow
 ├─ GitHub provisioning workflow
 ├─ AWS provisioning workflow
 ├─ AD provisioning workflow
 ├─ ADP provisioning workflow
 └─ Action: Configure templates, customize for Contoso

3. Create deprovisioning workflows
 ├─ QB deprovisioning
 ├─ GitHub deprovisioning
 ├─ AWS deprovisioning
 ├─ AD deprovisioning
 ├─ ADP deprovisioning
 └─ Action: Mirror of provisioning workflows
```

**Phase 2: Testing (Days 3-5)**

```
1. Test QB provisioning
 ├─ Create test user (TestUser1)
 ├─ Assign test role (Finance_Manager)
 ├─ Run provisioning workflow
 ├─ Verify: Account created in QB with correct permissions
 └─ Action: Check QB audit log

2. Test GitHub provisioning
 ├─ Create test user (TestUser2)
 ├─ Assign test role (Engineer_Developer)
 ├─ Run provisioning workflow
 ├─ Verify: Account created in GitHub, added to Engineering team
 └─ Action: Try to access GitHub with credentials

3. Test AWS provisioning
 ├─ Create test user (TestUser3)
 ├─ Assign test role (Engineer_Developer)
 ├─ Run provisioning workflow
 ├─ Verify: IAM user created with dev environment access
 └─ Action: Log in to AWS console, verify permissions

4. Test deprovisioning
 ├─ Remove test users from all roles
 ├─ Run deprovisioning workflow
 ├─ Verify: Accounts disabled in all systems
 ├─ Verify: No longer can log in
 └─ Action: Check audit logs for deprovisioning records
```

**Phase 3: Production Rollout (Days 6-8)**

```
1. Provision Finance users (Day 6)
 ├─ Provision to QB: Casey, Morgan, User5
 ├─ Provision to AD: Casey, Morgan, User5
 ├─ Provision to ADP: Casey, Morgan, User5
 └─ Action: Run provisioning workflows

2. Provision Engineering users (Day 7)
 ├─ Provision to GitHub: Alex, User4, User12
 ├─ Provision to AWS: Alex, User4, User12
 ├─ Provision to AD: (already done if combined with Finance)
 └─ Action: Run provisioning workflows

3. Provision remaining users (Day 8)
 ├─ Provision IT users to GitHub/AD
 ├─ Provision Sales users to Salesforce/AD
 ├─ Provision HR users to ADP/AD
 └─ Action: Run provisioning workflows

4. Verification & Notification (End of day 8)
 ├─ Verify all 13 users have expected access
 ├─ Send access instructions to users
 ├─ Monitor for issues/alerts
 └─ Action: Complete validation audit
```

---

### TASK 5: Success Metrics

**Provisioning Success Criteria:**

```
✅ All 13 users provisioned to AD (13/13)
✅ Finance users provisioned to QB (3/3: Casey, Morgan, User5)
✅ Engineering users provisioned to GitHub (3/3: Alex, User4, User12)
✅ Infrastructure users provisioned to AWS (3/3: Alex, User4, User12)
✅ All users can log in with provided credentials
✅ Access permissions match assigned roles
✅ SoD rules prevent conflicting access in all systems
✅ Audit trail documents all provisioning actions
✅ Zero failed provisioning attempts (or resolved with alerts)
```

**Performance Metrics:**

```
├─ Provisioning time: < per user per system
├─ Deprovisioning time: < per user per system
├─ Connector reliability: > 99% success rate
└─ Manual intervention: < 5% of provisioning actions
```

---

## 🧪 EXPECTED RESULTS

After planning:

✅ Detailed provisioning plan for all 5 systems
✅ Role-to-system mapping documented
✅ Provisioning dependencies identified
✅ 3-phase rollout schedule
✅ Success metrics defined

---

## ✅ SUCCESS CRITERIA

- ☑️ Complete role-to-system mapping for all users
- ☑️ Understand provisioning requirements for each system
- ☑️ Know provisioning sequence and dependencies
- ☑️ Understand success metrics and validation

---

## 🎓 CERTIFICATION

**Q:** For the Finance_Manager role, which systems should Casey be provisioned to?

A) Only QB
B) ✅ QB, AD, ADP, and GitHub (read-only)
C) All systems with full admin
D) QB and GitHub only

**Answer: B.** Finance_Manager needs QB access (primary), AD account (authentication), ADP access (HR), and GitHub read-only (limited).

**Q:** What should happen if QB provisioning fails for Casey?

A) Skip and continue with other users
B) ✅ Alert admin, log error, retry, or manual intervention
C) Continue and check later
D) Deactivate Casey's role

**Answer: B.** Failed provisioning must be escalated - user shouldn't lose access, issue must be resolved.

---

## 📚 RESOURCES

- [Module 6.3: Provisioning Workflows](/modules/6.3-provisioning-workflows)
- [Next: 6.5 - Configure Provisioning Workflows](/modules/6.5-configure-provisioning-workflows)

---

## ✅ NEXT STEPS

1. Understand role-to-system mapping for all users
2. Know provisioning requirements per system
3. Proceed to 6.5 to configure workflows

