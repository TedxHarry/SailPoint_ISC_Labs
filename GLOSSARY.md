# SailPoint ISC Glossary
## Complete Reference of ISC Terms & Concepts

This glossary defines ISC-specific terminology that beginners need to understand. Refer back here whenever you encounter unfamiliar terms.

---

## A

### Access
A general term for the right or ability to use a resource. In ISC context, "access" usually means both entitlements and accounts combined.

**Example:** "A user has access to the Finance application" = they have both an account AND entitlements in that system.

### Access Certification
Also called "access review" - a process where managers periodically review who has access to which systems and certify whether they should keep it. Used for compliance.

**Example:** "Finance Manager reviews all Finance team access and certifies that user1 should keep AP access but user2's access should be revoked."

### Access Profile
A group of entitlements that can be assigned as a unit. Access profiles are components of roles.

**Compare to Role:** A role contains access profiles + other properties. An access profile is just entitlements grouped together.

### Account
A user account in a target system (not the ISC identity itself). Accounts are the "person representation" in various systems.

**Example:**
- Identity: "finance_user1@contoso.com"
- Account in Entra ID: "finance_user1"
- Account in Finance App: "FIN00001"
- Account in Salesforce: "finance_user1@salesforce"

### Aggregation
The process of ISC reading data FROM a source system and bringing it into ISC. "One-way read" operation.

**Process:** Source System → Connector → ISC (data flows one direction)

### Authoritative Source
A source system that is the official "system of record" for certain identity data. ISC trusts this system as the truth.

**Example:** "HRIS is the authoritative source for employee employment status" = if HRIS says someone is terminated, ISC believes it.

---

## C

### Certification
See "Access Certification"

### Correlation
The process of matching accounts in source systems to ISC identities. Linking an account "to" an identity.

**Process:**
- Entra ID account "finance_user1" + ISC identity "finance_user1@contoso.com" = matched!

### Connector
The mechanism that allows ISC to communicate with a source system. Connectors read data (aggregation) and/or write data (provisioning).

**Types:**
- Cloud connectors (Salesforce, Microsoft 365, etc.)
- Virtual Appliance connectors (on-premises systems)
- REST API connectors (any web service)
- JDBC connectors (databases)

---

## D

### Deprovisioning
Removing or disabling an account in a source system when a user no longer needs access. The opposite of provisioning.

**Example:** When employee is terminated, ISC automatically disables their Finance app account, Salesforce account, etc.

### Dynamic Role
A role that automatically assigns to users based on rules. The membership is calculated automatically.

**Example:** "All users in Finance department with job title containing 'Clerk' automatically get Finance_AP_Clerk role"

---

## E

### Entitlement
A specific permission or access right. Can be a group membership, application role, system permission, etc.

**NOT the same as:**
- Role (which contains multiple entitlements)
- Permission (too generic, entitlement is more specific)
- Account (which is a user representation in a system)

**Examples:**
- Entra ID group: "Finance_Team"
- Application role: "AP_Clerk" in Finance App
- Permission: "Approval" in workflow

---

## G

### Governance
The set of policies, processes, and controls for managing access. Includes certifications, policies, approvals, auditing.

**Not the same as:**
- Access management (AM handles provisioning/deprovisioning)
- Identity management (broader term)

---

## I

### Identity
A unique person representation in ISC. Contains identity attributes like name, email, department, manager, etc.

**NOT the same as:**
- Account (accounts are in source systems; identity is in ISC)
- User (too generic)

### Identity Profile
The configuration that defines how ISC maps data from a source system to ISC identity attributes. Specifies correlation rules, attribute mapping, etc.

**Critical concept:** Identity Profiles are how ISC understands what data to read from each system and how to interpret it.

---

## J

### JML (Join/Move/Leave)
The three phases of employee lifecycle:
- **Join:** New hire onboarding
- **Move:** Employee transfers, role changes, promotions
- **Leave:** Termination, offboarding

ISC automates all three phases.

---

## L

### Lifecycle Management
Automation of the JML process. When employee joins, ISC automatically provisions access. When they move, ISC updates access. When they leave, ISC revokes access.

### Lifecycle Event
A trigger that starts automation. Examples: new hire in HRIS, department change, termination date.

---

## O

### Orphaned Account
An account in a source system that is not linked to any ISC identity (correlation failed).

**Example:** Finance app has user "OLDUSER" but ISC cannot find an identity to match it.

### Orphaned Identity
An ISC identity that has no linked account in a source system (correlation failed).

**Example:** ISC has "finance_user1" but Entra ID doesn't have a matching "finance_user1" account.

---

## P

### Policy
A governance rule that defines allowed or prohibited access combinations. Used to enforce compliance.

**Example:** "Finance users cannot have both 'Approve Payment' AND 'Sign Check' access" (Separation of Duties policy)

### Provisioning
ISC writing/creating an account in a source system and granting entitlements. The opposite of deprovisioning.

**Process:** ISC → Connector → Source System (data flows one direction)

**Example:** User joins Contoso, ISC automatically creates Entra ID account, Finance app account, Salesforce account, etc.

### Provisioning Rule
A rule that determines what gets provisioned to whom and how. Defines the logic for automation.

**Example:** "When user gets Finance_AP_Clerk role, automatically create account in Finance App with AP_Clerk permission"

---

## R

### Role
A grouping of entitlements based on a business function. Users are assigned roles, roles contain entitlements.

**Example:**
- Role: "Finance_AP_Clerk"
- Contains: Finance_Team group, FinanceApp_APClerk role, HRIS read access
- Assigned to: 5 AP Clerk employees

### Rule
A custom piece of logic that determines behavior. Rules can be for provisioning, correlation, transformations, etc.

---

## S

### SoD (Separation of Duties)
A compliance principle that prevents one person from having conflicting access that could enable fraud.

**Example:** "One person cannot both approve AND sign payments" - that's fraud risk

### Source
A system that ISC connects to. Can be identity source (HRIS, Entra ID) or target system (applications, databases).

**Examples:**
- Source: Entra ID (read user/group data)
- Source: Salesforce (read/write accounts)
- Source: Finance app (read/write accounts)

### Standard Role
A role that is manually maintained. You explicitly add/remove members.

**Opposite of Dynamic Role:** Which auto-assigns based on rules.

---

## T

### Tenant
The isolated instance of ISC for one organization. Your unique ISC environment.

**Example:** "Contoso's ISC tenant" = Contoso's isolated ISC environment with their data

### Transform
A data transformation rule that modifies attributes. Often used to generate values or reformat data.

**Example:**
- Input: firstName = "John", lastName = "Doe"
- Transform: Concatenate to create username = "jdoe"
- Output: username = "jdoe"

---

## V

### Virtual Appliance (VA)
An on-premises server that ISC deploys to connect to on-premises systems. Bridges cloud ISC to on-prem systems.

**Why needed:** Security. Sensitive on-prem systems don't expose data to cloud; VA acts as gateway.

---

## W

### Workflow
A series of automated steps to accomplish a business process. Workflows can include approvals, provisioning, notifications, etc.

**Example:** Access Request Workflow:
1. User requests access
2. Manager approves
3. ISC provisions account
4. Send notification email

---

## X-Z

### XML
eXtensible Markup Language. Used for some ISC configuration files and API payloads.

---

## Quick Reference by Category

### Identity Concepts
- Identity
- Account
- Entitlement
- Role
- Access Profile

### Process Concepts
- Aggregation
- Correlation
- Provisioning
- Deprovisioning
- Lifecycle Management
- Certification

### System Concepts
- Source
- Connector
- Virtual Appliance
- Authoritative Source
- Target System

### Governance Concepts
- Policy
- SoD
- Governance
- Certification
- Audit

### Automation Concepts
- Workflow
- Rule
- Transform
- Provisioning Rule
- Dynamic Role

### Error States
- Orphaned Account
- Orphaned Identity

---

## Tips for Using This Glossary

1. **If you see an unfamiliar term in a lab, look it up here first**
2. **Print this page and keep it nearby while studying**
3. **When explaining ISC to others, use these definitions** to be consistent
4. **Note that some terms have different meanings in different contexts** - the definition here is ISC-specific

---

**Last Updated:** March 2, 2026
**Glossary Version:** 1.0
