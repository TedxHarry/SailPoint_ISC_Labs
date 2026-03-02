# 1.19 - ISC Glossary & Terminology

**Unit:** ISC Fundamentals & Concepts | **Tier:** 1 | **Duration:** ~5 hours

**Type:** Reference Document

---

## 🎯 Purpose

Quick reference for ISC terminology used throughout Unit 1. For complete glossary, see GLOSSARY.md in curriculum.

---

## 📋 CORE IDENTITY TERMS

**Account:** User login/account in a system (morgan.chen@contoso.com in Entra ID, "mchen" in Finance app).

**Authentication:** Proving who you are (login credentials, MFA).

**Authorization:** Proving what you're allowed to do (roles, permissions).

**Entitlement:** Permission or access in a system (Finance_Manager_Role, Approve_Payments).

**Identity:** Person in organization with attributes (Morgan Chen, Finance department, Senior Accountant).

**Identity Profile:** Template defining what attributes identities should have (name, email, department, manager, hire date).

---

## 📋 CORE ACCESS MANAGEMENT TERMS

**Access:** Permission to use system or data (Morgan has access to Finance app).

**Access Certification:** Quarterly review where managers verify team's access is appropriate.

**Access Control:** Process of limiting who can access what.

**Access Profile:** Bundle of entitlements/permissions in a system. Simplifies provisioning.

**Access Review:** Governance process examining access appropriateness.

**Approval:** Manager confirms access request or access is appropriate.

**Deprovisioning:** Removing access (opposite of provisioning).

**Provisioning:** Creating accounts and granting access in target systems.

**Role:** Set of permissions grouped by job function (Finance Manager, Engineer, Sales Rep).

---

## 📋 CORE GOVERNANCE TERMS

**Certification:** Approval of access (manager certifies "this access is appropriate").

**Compliance:** Meeting regulatory requirements (SOX, HIPAA, GDPR).

**Governance:** Ongoing review and management of access appropriateness.

**Non-repudiation:** Proof that someone did something (audit trail proves who approved access).

**Orphaned Account:** Account in system that ISC can't match to an identity.

**Policy:** Rule defining what's allowed or required (SoD policy prevents conflicting access).

**Review:** Examination of access to ensure appropriateness.

**Separation of Duties (SoD):** Preventing conflicts of interest (can't approve AND process payments).

---

## 📋 LIFECYCLE TERMS

**Deprovisioning:** Removing access when someone leaves or no longer needs it.

**Join:** Onboarding—new employee starts, needs initial access.

**JML:** Join, Move, Leave—the three lifecycle phases (Move covers promotion, transfer, leave covers offboarding).

**Leave:** Offboarding—employee leaves organization, access revoked.

**Lifecycle Event:** Event triggering access changes (hire, termination, promotion, transfer).

**Move:** Change in role/department—employee transfers or promoted, access changes.

**Provisioning:** Creating accounts and granting initial access.

---

## 📋 SYSTEM TERMS

**Aggregation:** ISC reading data from source systems and storing it.

**Connector:** Bridge between ISC and external system (Cloud Connector, Entra ID Connector, Database Connector, VA).

**Correlation:** Matching accounts across systems to same person.

**Target System:** System where ISC provisions access (Finance app, QuickBooks, Salesforce).

**Source System:** System where ISC reads identity data (Entra ID, HRIS).

**Virtual Appliance (VA):** Lightweight server in customer network bridging to on-premises systems.

---

## 📋 GOVERNANCE FRAMEWORKS

**ABAC:** Attribute-Based Access Control—access decisions based on attributes (department, title, hire date).

**RBAC:** Role-Based Access Control—access based on roles (Finance Manager role gets Finance access).

**SoD:** Separation of Duties—policy preventing conflicts of interest.

---

## 📋 COMPLIANCE TERMS

**Audit Trail:** Log of all actions (who accessed what, when, who approved).

**GDPR:** General Data Protection Regulation—EU data privacy law.

**HIPAA:** Health Insurance Portability Act—US healthcare privacy law.

**Compliance:** Meeting legal/regulatory requirements.

**Risk:** Potential harm (access violations, unauthorized access, data breach).

**SOX:** Sarbanes-Oxley—US financial system controls law.

---

## 📋 SECURITY TERMS

**Authentication:** Proving identity (login with username/password).

**Authorization:** Access control based on identity (what you're allowed to do).

**Encryption:** Converting data to unreadable form (AES-256).

**MFA:** Multi-Factor Authentication—login requires multiple factors (password + phone).

**Multi-Tenancy:** Multiple customers on shared infrastructure with data isolation.

**Tenant:** Individual customer instance (Contoso has one tenant, Bank has another).

**Token:** Authentication credential (API token for REST calls).

---

## 📋 DATA TERMS

**Attribute:** Property describing something (name, email, department).

**Data At Rest:** Data stored in database (encrypted).

**Data in Transit:** Data moving over network (encrypted via HTTPS).

**Correlation:** Matching data across systems to same person.

**Identity:** Person plus attributes.

---

## 📋 MODULE TERMS

**Certification:** Part of Governance—managers review access quarterly.

**Governance:** Module for access reviews, SoD enforcement, risk detection.

**Lifecycle Management:** Module automating Join/Move/Leave processes.

**Access Modeling:** Module for designing roles and access rules.

**Analytics:** Module for reporting and insights.

---

## 📋 CONCEPTS

**Authoritative Source:** System that's the "truth" for an attribute (HRIS is authoritative for job title, Entra ID for email).

**Business Role:** Job function (Finance Manager, Engineer).

**Entitlement:** Permission in a system.

**Orphaned Account:** Account with no matching identity.

**Provisioning Request:** Request to create/modify account in system.

**Risk Score:** Automated scoring of how risky a user's access is (excessive access = high score).

**System Role:** Permissions/role in a specific system.

---

## ✅ USAGE

Use this glossary for quick definition lookup while studying Unit 1. For more context, see GLOSSARY.md in curriculum or the relevant module.
