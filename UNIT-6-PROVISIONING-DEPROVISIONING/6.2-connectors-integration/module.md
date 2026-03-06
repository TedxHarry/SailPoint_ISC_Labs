# 6.2 - Connectors & Integration

**Unit:** Provisioning & Deprovisioning | **Tier:** 2 | 

---

## 🎯 Learning Objectives

- Understand ISC connectors and their purpose
- Know how connectors communicate with target systems
- Understand connector configuration
- Recognize connector challenges and troubleshooting

---

## 📋 Prerequisites

Module 6.1: Provisioning Fundamentals. Provisioning architecture understood.

---

## 📚 CORE CONCEPTS

### What is a Connector?

**Definition:** Software component that allows ISC to communicate with a target system (QuickBooks, GitHub, AWS, etc.).

**Analogy:**
```
ISC is like a central control center
Target systems are remote locations
Connectors are communication cables

ISC → Connector → QuickBooks (provisioning: create account)
ISC → Connector → GitHub (provisioning: add user to org)
ISC → Connector → AWS (provisioning: create IAM user)
```

**Real Function:**
```
Connector handles:
├─ Authentication (log into target system)
├─ Translation (convert ISC commands to system API calls)
├─ Execution (run provisioning commands)
├─ Error handling (what to do if something fails)
├─ Verification (confirm access was granted)
└─ Logging (record what happened)
```

---

### Connector Types

**Native Connectors (Built-in):**

```
ISC comes with pre-built connectors for common systems:

├─ Active Directory (create/disable user accounts)
├─ QuickBooks (create accounts, set permissions)
├─ GitHub (create organizations, add team members)
├─ AWS (create IAM users, assign groups)
├─ Azure/Entra ID (create users, assign licenses)
├─ Okta (manage user attributes)
├─ Salesforce (manage user access)
├─ SAP (complex ERP integration)
└─ Many others (100+ pre-built connectors)

Advantage: Ready to use, pre-tested
Disadvantage: Only for common systems
```

**Custom Connectors:**

```
If target system isn't in ISC connector list:

Option 1: Use REST/SOAP connector
├─ Define API endpoints
├─ Map ISC actions to API calls
├─ Works with any system with API
└─ Example: Custom proprietary systems

Option 2: Use Email connector
├─ Trigger email to system admin
├─ Admin manually creates account
├─ Not scalable but works for any system

Option 3: Use CSV/SFTP connector
├─ Generate CSV file with user data
├─ Drop on SFTP server
├─ System imports file
└─ Good for legacy systems
```

---

### Connector Configuration

**Step 1: Install Connector**

```
ISC > Administration > Connectors
├─ Select connector type (e.g., "GitHub")
├─ Download connector package
├─ Deploy to ISC appliance
└─ Status: Ready to configure
```

**Step 2: Configure Connection**

```
Connector Configuration:
├─ Target System Details:
│  ├─ API endpoint/URL
│  ├─ Authentication (API key, username/password, OAuth)
│  └─ Connection parameters (org name, region, etc.)
│
├─ Test Connection:
│  ├─ Click "Test" button
│  ├─ ISC attempts to connect
│  └─ Result: Connected ✓ or Error
│
├─ Map Attributes:
│  ├─ ISC attribute → Target system field
│  ├─ Example: ISC.username → GitHub.login
│  └─ Example: ISC.email → GitHub.email
│
└─ Define Actions:
   ├─ What to do when user assigned to role
   ├─ What to do when user removed from role
   └─ What to do for exception scenarios
```

**Step 3: Create Provisioning Workflows**

```
Workflows define provisioning logic:

Example - QB Connector:
┌─ Trigger: User assigned Finance_Manager role
├─ Action 1: Create QB account with username=email prefix
├─ Action 2: Set permission level to "admin"
├─ Action 3: Add to "Accounting" group
├─ Action 4: Send welcome email with temp password
└─ End result: User can access QB as admin
```

---

### Connector Communication Patterns

**Pattern 1: Provisioning (Create Access)**

```
ISC → Connector → Target System

ISC: "Create account for Casey with QB_Admin permissions"
↓
Connector receives request
↓
Connector connects to QB (using stored credentials)
↓
Connector calls: QB API "create user with admin permissions"
↓
QB: "Account created, username: ckim, password set"
↓
Connector returns: Success ✓
↓
ISC logs: "Provisioned Casey to QB"
↓
ISC notifies user: "Your QB access is ready"
```

**Pattern 2: Deprovisioning (Remove Access)**

```
ISC → Connector → Target System

ISC: "Remove Casey from QB"
↓
Connector receives request
↓
Connector connects to QB
↓
Connector calls: QB API "disable account ckim"
↓
QB: "Account ckim disabled, access removed"
↓
Connector returns: Success ✓
↓
ISC logs: "Deprovisioned Casey from QB"
↓
Next time Casey tries to log in: Access denied
```

**Pattern 3: Reconciliation (Verify Access)**

```
ISC → Connector → Target System

Periodic check: "What accounts exist in QB, who should have access?"
↓
Connector connects to QB
↓
Connector calls: QB API "list all accounts"
↓
QB returns: List of 50 accounts
↓
Connector returns: Full account list
↓
ISC compares: "QB accounts" vs. "Who SHOULD have access per roles"
↓
Result:
  ├─ Match: Casey has QB access, Casey should have access ✓
  ├─ Missing: Jordan doesn't have access, Jordan should ✗ (alert)
  └─ Extra: Pat has access, Pat shouldn't (alert)
↓
ISC alerts: "Access mismatch detected, investigate"
```

---

### Contoso Target Systems

**System 1: QuickBooks (Finance)**

```
Connector type: Native QB connector
Authentication: API key
Access level: Create invoices, reports, admin, etc.

Contoso usage:
├─ Finance_Manager → QB admin (Casey)
├─ Senior_Accountant → QB standard (Morgan)
├─ AP_Clerk → QB invoice entry (User5)
└─ Finance_Employee → QB user (all finance)
```

**System 2: GitHub (Engineering)**

```
Connector type: Native GitHub connector
Authentication: OAuth / Personal access token
Access level: Teams, repository permissions, admin

Contoso usage:
├─ Engineer_Senior → GitHub admin (Alex)
├─ Engineer_Developer → GitHub contributor (User4)
├─ DevOps → GitHub infrastructure admin (User12)
└─ Engineering_Employee → GitHub user (all engineers)
```

**System 3: AWS (Infrastructure)**

```
Connector type: Native AWS connector
Authentication: IAM access key
Access level: IAM groups, policies, admin

Contoso usage:
├─ DevOps → AWS admin (User12)
├─ Engineer_Developer → AWS dev environment (User4)
└─ Engineer_Senior → AWS prod access (Alex, approval required)
```

**System 4: Active Directory (User Accounts)**

```
Connector type: Native AD connector
Authentication: Domain admin credentials
Access level: Create/disable accounts, groups, permissions

Contoso usage:
├─ All 13 users → AD accounts (created at hire, modified on dept transfer)
├─ All users → Contoso domain group membership
└─ Department roles → Department distribution lists
```

**System 5: ADP/HRIS (HR)**

```
Connector type: Custom REST connector (ADP API)
Authentication: API credentials
Access level: User attributes, benefits, payroll

Contoso usage:
├─ HR staff → ADP access (User8, User9)
└─ All users → ADP self-service (benefits, payroll view)
```

---

### Connector Challenges & Solutions

**Challenge 1: Connector Can't Authenticate**

```
Error: "Cannot connect to QB, authentication failed"

Causes:
├─ Wrong API key (expired or revoked)
├─ System credentials changed (QB admin changed password)
├─ IP whitelist (ISC appliance IP not whitelisted)
└─ Network connectivity (firewall blocking)

Solution:
├─ Verify API key is valid and not expired
├─ Check target system admin hasn't changed credentials
├─ Check ISC IP is whitelisted
├─ Check firewall rules allow connection
├─ Test: Click "Test Connection" button in ISC
```

**Challenge 2: Provisioning Slow or Timing Out**

```
Error: "Provisioning timed out after 30 seconds"

Causes:
├─ Target system slow (high load)
├─ Large account creation (setting many permissions)
├─ Network latency
└─ Connector timeout too short

Solution:
├─ Increase connector timeout setting
├─ Schedule provisioning off-peak hours
├─ Break into smaller steps (create account, then add to groups separately)
├─ Contact target system admin to check load
```

**Challenge 3: Permission Levels Don't Exist**

```
ISC workflow: "Set permission level to admin"
QB available levels: viewer, editor, owner

Result: "Permission admin not found" - provisioning fails

Solution:
├─ Map ISC roles to actual system permissions (document!)
├─ Test with real permission names
├─ Example mapping:
│  ├─ ISC "Finance_Manager" → QB "owner"
│  ├─ ISC "Senior_Accountant" → QB "editor"
│  └─ ISC "AP_Clerk" → QB "data entry"
└─ Update workflows to use correct permission names
```

**Challenge 4: Connector Permission Error**

```
Error: "Connector account doesn't have permission to create admin users in QB"

Cause: Connector uses service account without admin rights

Solution:
├─ Upgrade service account to admin
├─ Or create new service account with admin rights
├─ Document: Connector service account must be admin
└─ Regularly review: Service account rights don't get accidentally removed
```

---

## 🧨 KEY TAKEAWAYS

- Connectors = communication bridge between ISC and target systems
- Pre-built connectors available for common systems (AD, QB, GitHub, AWS, etc.)
- Custom connectors possible for systems without native support
- Connector configuration: install, configure connection, test, map attributes
- Provisioning workflows define what to do when users get/lose roles
- Deprovisioning automatically removes access, prevents access sprawl
- Reconciliation periodically checks ISC vs. actual system access

---

## 🧪 TASK

1. Understand connector purpose and types
2. Know how connectors authenticate and communicate
3. Understand target systems for Contoso
4. Recognize connector challenges
5. Ready to learn provisioning workflows (Module 6.3)

---

## ✅ SUCCESS CRITERIA

- ☑️ Understand connector purpose
- ☑️ Know native vs. custom connector types
- ☑️ Understand connector configuration process
- ☑️ Know Contoso target systems (QB, GitHub, AWS, AD, ADP)
- ☑️ Recognize common connector challenges

---

## 🎓 CERTIFICATION

**Q:** What is the primary purpose of a connector?

A) Encrypting user credentials
B) ✅ Communicating between ISC and target systems
C) Storing user access audit logs
D) Creating backup copies of data

**Answer: B.** Connector = communication bridge between ISC and target systems.

**Q:** Provisioning to GitHub fails with "authentication failed". What's most likely?

A) ISC database corrupted
B) GitHub server down (unrelated)
C) ✅ GitHub API key expired or ISC IP not whitelisted
D) User's password wrong

**Answer: C.** Connector authentication fails when API credentials invalid or firewall blocks connection.

---

## 📚 RESOURCES

- [Module 6.1: Provisioning Fundamentals](/modules/6.1-provisioning-fundamentals)
- [Next: 6.3 - Provisioning Workflows](/modules/6.3-provisioning-workflows)

---

## ✅ NEXT STEPS

1. Understand connector types and configuration
2. Proceed to 6.3 for provisioning workflow design

