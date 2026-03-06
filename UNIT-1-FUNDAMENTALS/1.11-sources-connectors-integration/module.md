# 1.11 - Sources, Connectors & Integration

**Unit:** ISC Fundamentals & Concepts | **Tier:** 1 | 

---

## 🎯 Learning Objectives

- Understand source systems and target systems
- Know connector types and when to use each
- Understand how ISC integrates with systems
- Recognize connector selection criteria
- Understand connector status and health monitoring

---

## 📋 Prerequisites

Module 1.5: ISC Architecture Overview. Module 1.7: ISC Data Model Fundamentals.

---

## 📚 CORE CONCEPTS

### Source vs Target Systems

**Source Systems:** Provide identity data to ISC. Entra ID, HRIS, HR systems, payroll databases.

ISC reads: Names, emails, departments, job titles, managers, hire dates, termination dates.

**Target Systems:** Receive accounts and entitlements from ISC. Finance app, QuickBooks, Salesforce, ServiceNow, email systems, GitHub.

ISC writes: Create accounts, update group memberships, grant/revoke permissions.

**Example (Contoso):**

| Source | Data Provided |
|--------|---|
| **Entra ID** | User names, emails, group memberships |
| **HRIS** | Job titles, departments, managers, hire/termination dates |

| Target | What ISC Provisions |
|--------|---|
| **Finance App** | User accounts, role assignments |
| **QuickBooks** | User accounts, permission grants |
| **Salesforce** | User accounts, role assignments |
| **Email** | Mailbox creation, distribution list membership |

---

### Connector Types

**Cloud/SaaS Connectors**

Connect to cloud applications via APIs. Secure, no infrastructure needed.

Examples: Salesforce, ServiceNow, Workday, Google Workspace, Microsoft Teams, GitHub.

How: API authentication (OAuth, API keys, service accounts).

**Entra ID Connector**

Specialized connector for Azure/Entra ID. Reads/writes users and groups. Native integration.

How: OAuth with Azure/Entra ID.

**Database Connectors**

Connect directly to SQL/database systems. For on-premises databases with user/group/role tables.

Examples: Oracle, SQL Server, MySQL, custom databases.

How: JDBC connection with credentials.

**Virtual Appliance (VA)**

Lightweight server placed in customer's network (on-premises datacenter or AWS/Azure). Bridges cloud ISC to on-premises systems. Secure outbound HTTPS connection.

Examples: On-premises Active Directory, legacy apps, internal databases, systems without internet access.

How: VA installed on-premises, makes outbound HTTPS calls to ISC cloud (firewalls allow outbound, not inbound).

**REST/Custom Connectors**

For custom applications. ISC makes REST calls to app's API to manage users.

How: REST API with authentication (API key, basic auth, custom).

---

### Connector Configuration Basics

**For each connector, configure:**
1. **Connection:** How to authenticate (credentials, API keys, OAuth)
2. **Read Configuration:** What data to read (users, groups, accounts, entitlements)
3. **Write Configuration:** What operations to support (create, update, disable, delete)
4. **Attribute Mapping:** How to map connector data to ISC (first_name → firstName, etc.)
5. **Sync Schedule:** Read frequency (real-time or batch hourly/daily)

**Health Monitoring:**
- Connector status (connected, error, disconnected)
- Last sync time
- Error logs (authentication failed, timeout, invalid data)
- Account counts (how many accounts discovered)

---

### Data Flow Through Connectors

```
1. SOURCE CONNECTORS read:
 Entra ID → reads users, groups
 HRIS → reads employees, departments, job titles
 ↓
2. ISC PROCESSES:
 Identity Engine ingests data
 Correlates: Entra ID user "morgan.chen@contoso.com" + HRIS employee "Morgan Chen" = same identity
 ↓
3. RULES EVALUATED:
 Access Modeling rules: "IF department=Finance AND title=Manager THEN provision Finance app Manager role"
 ↓
4. TARGET CONNECTORS write:
 Finance App ← ISC creates account, assigns Manager role
 QuickBooks ← ISC creates account, assigns permissions
 Salesforce ← ISC creates account, assigns role
 Email ← ISC creates mailbox, adds to Finance group
```

---

## 🧠 KEY TAKEAWAYS

- **Source connectors** read identity data; **target connectors** receive access provisioning
- **Cloud connectors** use APIs (secure, no infrastructure)
- **Virtual Appliances** bridge to on-premises systems (outbound HTTPS only)
- **Connector health matters:** Poor connector = missing data = bad access decisions
- **Configuration must match system:** Different systems need different mappings

---

## 🎓 CERTIFICATION ALIGNMENT

**Question 1:** Contoso needs to read user and group data from Entra ID, and write accounts to a custom on-premises Finance app. Which connectors are needed?

A) Cloud connector for Entra ID, Cloud connector for Finance app
B) ✅ Entra ID connector for source, Virtual Appliance (or REST connector) for on-premises Finance app
C) Only one connector needed
D) API Gateway

**Answer: B.** Entra ID is a source (cloud); Finance app is on-premises target. VA bridges to on-premises.

---

**Question 2:** A connector to QuickBooks shows status "Error: Authentication failed." What's the impact?

A) No impactISC has cached the data
B) ✅ ISC can't read/write QuickBooks accounts. Provisioning fails, access gaps occur
C) ISC automatically tries again later
D) Only affects new users

**Answer: B.** Connector errors block data flow. Provisioning can't happen if connector is broken.

---

## 📚 ADDITIONAL RESOURCES

- [Next: 1.12 - Aggregation Fundamentals](/modules/1.12-aggregation-fundamentals)
- Unit 3: Identity Profiles & Sources (future - detailed connector configuration)

---

## 🔄 NEXT STEPS

Module 1.12 covers aggregationhow ISC reads and ingests all this data from source connectors.

---

## ✅ SUCCESS CRITERIA

- ☑️ Explain source vs target systems
- ☑️ Know connector types (Cloud, Entra ID, Database, VA, REST)
- ☑️ Understand connector configuration basics
- ☑️ Recognize connector health and errors
- ☑️ Answer practice questions correctly
