# 6.10 - Provision Remaining Systems

**Unit:** Provisioning & Deprovisioning | **Tier:** 2 | **Duration:** ~10 hours

---

## 🎯 Learning Objectives

- Provision users to Salesforce (Sales)
- Provision users to ADP/HRIS (HR & Finance)
- Understand system-specific provisioning requirements
- Verify all systems provisioned successfully

---

## 📋 Prerequisites

Module 6.9: Provision Directory Services. AD provisioning complete (all 13 users).

---

## 📚 HANDS-ON LAB

### Objective

Provision remaining Contoso users to Salesforce and ADP systems, completing full provisioning across all 5 target systems.

---

### TASK 1: Salesforce Provisioning (Sales Department)

**Pre-Check:**

```
☑ Salesforce connector configured
☑ Salesforce API credentials valid
☑ Connection test successful
☑ Permission sets defined: Sales_Rep, Sales_Manager
☑ Custom fields mapped: employee_id, department
☑ Salesforce backup completed
```

**Provision Sales Users:**

```
ISC > Identities > User6, User7
├─ Trigger: Salesforce_Sales_Rep_Provisioning workflow
├─ Monitor: Status
└─ Expected: 2 accounts created

Step 1: Create Salesforce Accounts
├─ Username: user6.contoso (Salesforce unique format)
├─ Email: user6@contoso.com
├─ User: Standard user (not admin)
├─ Initial password: Auto-generated, change on first login
│
Step 2: Assign Permission Sets
├─ Sales_Rep permission set: Read/write sales objects
├─ Can: Create opportunities, update deals, run reports
├─ Cannot: Modify security settings or delete large records
│
Step 3: Add to Groups
├─ Sales team group: Collaboration
├─ All users: General company group
│
Step 4: Configure Home Page
├─ Custom home page for sales (pipeline view, metrics)
├─ Shortcuts to CRM, reports, Slack
│
Result: Sales users provisioned ✓

Verify in Salesforce:
├─ Salesforce Setup > Users
├─ Look for: user6.contoso, user7.contoso
├─ Status: Active
├─ Permission sets: Sales_Rep assigned
├─ Can login: Yes ✓
```

---

### TASK 2: ADP/HRIS Provisioning (HR & All Users)

**Pre-Check:**

```
☑ ADP connector (REST API) configured
☑ ADP API credentials valid
☑ Connection test successful
☑ Employee records created in HR master data
☑ Department mapping complete
☑ ADP backup completed
```

**Provision HR Staff with Full Access:**

```
ISC > Identities > User8, User9 (HR staff)
├─ Trigger: ADP_HR_Admin_Provisioning workflow
├─ Monitor: Status
└─ Expected: 2 accounts created

Step 1: Create ADP Accounts
├─ Username: user8.contoso, user9.contoso
├─ Email: user8@contoso.com, user9@contoso.com
├─ Employee ID: Auto-link from ISC
│
Step 2: Assign HR Permissions
├─ User8 (HR_Specialist): Standard HR access
│  ├─ Payroll: View only
│  ├─ Benefits: Full access
│  ├─ Recruiting: Full access
│  └─ Compliance: Reports only
│
├─ User9 (HR_Manager): Full ADP admin
│  ├─ Payroll: Full access (can modify)
│  ├─ Benefits: Full access
│  ├─ Recruiting: Full access
│  ├─ Compensation: Full access
│  ├─ Compliance: Full access
│  └─ Security: Can manage users
│
Step 3: Configure Home Dashboard
├─ Customized view for HR staff
├─ Shortcuts to key workflows
└─ Reports relevant to role

Result: HR staff provisioned with appropriate access ✓
```

**Provision All Users with Self-Service Access:**

```
ISC > All 13 users
├─ Trigger: ADP_Employee_Self_Service_Provisioning workflow
├─ Monitor: Status
└─ Expected: 13 accounts created (or updated if exists)

Step 1: Create/Update ADP Employee Records
├─ For each user:
│  ├─ Link to existing employee record (HR master data)
│  ├─ Employee ID: Match to payroll system
│  ├─ Name, email, department, manager
│  └─ Effective date: Today
│
Step 2: Enable Self-Service Portal
├─ All users: View pay stub
├─ All users: Update personal information
├─ All users: Enroll/update benefits
├─ All users: Access tax documents
├─ All users: Time-off requests (if configured)
│
Step 3: Disable Admin Functions (for non-HR)
├─ Only HR roles: Payroll, benefits admin
├─ Only HR roles: Report access
├─ Regular employees: Self-service only
│
Result: All 13 users have self-service access ✓

Verify in ADP:
├─ ADP portal > Employees
├─ All 13 employees listed
├─ Status: Active
├─ Self-service access: Enabled for all
├─ HR access: User8, User9 only
```

---

### TASK 3: Complete Provisioning Summary

**Comprehensive System Provisioning Table:**

```
FINANCE USERS:

Casey Kim (Finance_Manager):
├─ QB: Admin account ✓
├─ AD: Domain account + Finance_Manager group ✓
├─ ADP: Self-service + payroll view (manager) ✓
├─ GitHub: Basic read-only ✓
├─ AWS: None
└─ Complete access: QB (create/approve), ADP (view payroll) ✓

Morgan Chen (Senior_Accountant):
├─ QB: Editor account ✓
├─ AD: Domain account + Senior_Accountant group ✓
├─ ADP: Self-service access ✓
├─ GitHub: None
├─ AWS: None
└─ Complete access: QB (create/modify GL) ✓

User5 (Finance_AP_Clerk):
├─ QB: Data entry account ✓
├─ AD: Domain account + Finance_AP_Clerk group ✓
├─ ADP: Self-service access ✓
├─ GitHub: None
├─ AWS: None
└─ Complete access: QB (create invoices) ✓

ENGINEERING USERS:

Alex Lee (Engineer_Senior):
├─ QB: Read-only access ✓
├─ AD: Domain account + Engineer_Senior group ✓
├─ GitHub: Maintainer (can merge) ✓
├─ AWS: Prod access (with approval workflow) ✓
├─ ADP: Self-service access ✓
└─ Complete access: Code management + infrastructure ✓

User4 (Engineer_Developer):
├─ QB: None
├─ AD: Domain account + Engineer_Developer group ✓
├─ GitHub: Contributor (can push) ✓
├─ AWS: Dev/staging only ✓
├─ ADP: Self-service access ✓
└─ Complete access: Write code to staging ✓

User12 (DevOps):
├─ QB: None
├─ AD: Domain account + DevOps group ✓
├─ GitHub: Admin (infrastructure repos) ✓
├─ AWS: Full admin ✓
├─ ADP: Self-service access ✓
└─ Complete access: Infrastructure management ✓

IT USERS:

User10 (IT_Administrator):
├─ QB: None
├─ AD: Domain admin account ✓
├─ GitHub: Admin (infrastructure) ✓
├─ AWS: Full admin ✓
├─ ADP: Self-service access ✓
└─ Complete access: System administration ✓

User11 (Security_Officer):
├─ QB: None
├─ AD: Domain account + Security_Officer group ✓
├─ GitHub: Read-only (all repos) ✓
├─ AWS: CloudTrail read-only (audit) ✓
├─ ADP: Self-service access ✓
└─ Complete access: Security monitoring ✓

SALES USERS:

User6 (Sales_Representative):
├─ QB: Read-only (invoices/payments) ✓
├─ AD: Domain account + Sales_Rep group ✓
├─ Salesforce: Permission set Sales_Rep ✓
├─ GitHub: None
├─ AWS: None
└─ Complete access: Salesforce CRM ✓

User7 (Sales_Representative):
├─ QB: Read-only ✓
├─ AD: Domain account + Sales_Rep group ✓
├─ Salesforce: Permission set Sales_Rep ✓
├─ GitHub: None
├─ AWS: None
└─ Complete access: Salesforce CRM ✓

HR USERS:

User8 (HR_Specialist):
├─ QB: None
├─ AD: Domain account + HR_Specialist group ✓
├─ GitHub: None
├─ AWS: None
├─ ADP: HR Standard access ✓
└─ Complete access: Benefits, recruiting ✓

User9 (HR_Manager):
├─ QB: None
├─ AD: Domain account + HR_Manager group ✓
├─ GitHub: None
├─ AWS: None
├─ ADP: HR Admin access ✓
└─ Complete access: Full HR administration ✓

SUMMARY:

✅ All 13 users provisioned to all required systems
✅ Each system access matches assigned roles
✅ No accidental cross-department access
✅ SoD rules enforced (create ≠ approve, etc.)
✅ All audit trails complete
✅ All users can immediately start working
```

---

### TASK 4: Test System Integration

**Test 1: Cross-System Workflow**

```
Scenario: User4 (Engineer) writes code and deploys to staging

User4 workflow:
1. User4 logs into GitHub (via AD credentials)
   ├─ GitHub SSO configured to use AD
   ├─ User4 authenticated automatically
   └─ Connected to engineering repo
2. User4 develops in GitHub
   ├─ Creates feature branch
   ├─ Commits code
   ├─ Pushes to staging branch
   └─ GitHub triggers CI/CD webhook
3. AWS CI/CD pipeline runs (via User12's webhook)
   ├─ Pipeline builds code
   ├─ Tests run automatically
   ├─ If success: Deploys to AWS staging
   └─ Logs added to CloudTrail
4. User4 can view results
   ├─ GitHub shows build status
   ├─ AWS CloudWatch shows deployment
   └─ Pipeline complete ✓

Result: Cross-system workflow working ✓
```

**Test 2: HR to Payroll Workflow**

```
Scenario: New employee joins, HR provisions immediately

HR workflow:
1. User9 (HR Manager) creates new employee in ADP
   ├─ Employee data entered
   ├─ Department: Finance
   ├─ Job title: AP Clerk
   └─ Effective date: Monday
2. ADP integrates with ISC (if configured)
   ├─ New user created in ISC
   ├─ Department = Finance (auto-assigned)
   └─ Role suggestion: Finance_AP_Clerk
3. ISC provisions new user to all systems
   ├─ QB account created
   ├─ AD account created
   ├─ GitHub account created (basic)
   ├─ AWS account created (read-only)
   └─ All by Monday morning
4. New employee starts Monday
   ├─ Workstation ready (AD account)
   ├─ QB access ready
   ├─ Email working
   ├─ Network drives accessible
   └─ Can immediately work ✓

Result: Complete provisioning automation working ✓
```

**Test 3: Role Change Provisioning**

```
Scenario: User4 promoted from Developer to Senior Engineer

Process:
1. Manager in ISC changes User4's role:
   ├─ Old role: Engineer_Developer
   ├─ New role: Engineer_Senior
   └─ Save

2. ISC detects role change
   ├─ Deprovisioning triggered for Engineer_Developer access
   ├─ Provisioning triggered for Engineer_Senior access

3. Deprovisioning (remove old access):
   ├─ GitHub: Downgrade from Contributor to Maintainer (wait, that's up)
   ├─ GitHub: Actually, remove from specific repos, add to new teams
   ├─ AWS: Downgrade from StagingOnly to Prod access
   ├─ Salesforce: Remove Sales_Rep (shouldn't have)
   └─ All happens automatically

4. Provisioning (add new access):
   ├─ GitHub: Add to Maintainer team
   ├─ GitHub: Add to additional repos
   ├─ AWS: Add to Production group
   ├─ Add to Managers group (if applicable)
   └─ New permissions active

5. User4 immediately has new access
   ├─ Can approve PRs (GitHub maintainer)
   ├─ Can access production (AWS)
   ├─ New responsibilities active
   └─ Deprovisioning prevents access sprawl ✓

Result: Role change provisioning working ✓
```

---

### TASK 5: Verify All Provisioning Complete

**Final Verification Checklist:**

```
PROVISIONING COMPLETENESS:

All 13 users:
├─ AD account: 13/13 ✓
├─ Email/Distribution lists: 13/13 ✓
├─ ISC audit trail: 13/13 ✓
└─ Can log into domain: 13/13 ✓

Finance users (3):
├─ QB account: 3/3 ✓
├─ Correct permission level: 3/3 ✓
└─ Can access QB: 3/3 ✓

Engineering users (3):
├─ GitHub account: 3/3 ✓
├─ AWS account: 3/3 ✓
├─ Correct permissions: 3/3 ✓
└─ Can access both systems: 3/3 ✓

Sales users (2):
├─ Salesforce account: 2/2 ✓
├─ Correct permission set: 2/2 ✓
└─ Can access CRM: 2/2 ✓

All users:
├─ ADP self-service account: 13/13 ✓
├─ Can view pay stub/benefits: 13/13 ✓
└─ Can access self-service: 13/13 ✓

PROVISIONING SUMMARY:
✅ 100% provisioning success rate
✅ All systems operational
✅ All users have appropriate access
✅ No SoD violations
✅ Audit trails complete
✅ Ready for production use
```

---

## 🧪 EXPECTED RESULTS

After remaining systems provisioning:

✅ 2 sales users provisioned to Salesforce
✅ All 13 users provisioned to ADP with self-service access
✅ HR staff have full ADP admin access
✅ All systems verified and tested
✅ Cross-system workflows verified
✅ Complete provisioning across all 5 systems

---

## ✅ SUCCESS CRITERIA

- ☑️ Salesforce accounts created for sales users
- ☑️ ADP accounts created for all users
- ☑️ HR staff have admin access to ADP
- ☑️ All employees have self-service access
- ☑️ Cross-system workflows tested
- ☑️ Audit trails complete

---

## 🎓 CERTIFICATION

**Q:** User8 (HR_Specialist) is assigned which ADP permission level?

A) Full admin access (same as HR_Manager)
B) ✅ Standard HR access (benefits, recruiting; payroll view-only)
C) Employee self-service only
D) No ADP access (Finance only)

**Answer: B.** HR_Specialist = standard access. HR_Manager = admin access.

**Q:** When User4 is promoted from Developer to Senior Engineer, what happens automatically?

A) Admin must manually update all systems
B) ✅ ISC automatically deprovisions old access and provisions new access
C) User4 must request new access in each system
D) No change until next quarter review

**Answer: B.** ISC detects role change and automatically updates all connected systems.

---

## 📚 RESOURCES

- [Module 6.9: Provision Directory Services](/modules/6.9-provision-directory-services)
- [Next: 6.11 - Test Provisioning Results](/modules/6.11-test-provisioning-results)

---

## ✅ NEXT STEPS

1. Provision all remaining users to Salesforce and ADP
2. Verify all systems accessible
3. Test cross-system workflows
4. Proceed to 6.11 to comprehensive testing

