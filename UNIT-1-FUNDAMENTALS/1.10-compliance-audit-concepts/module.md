# 1.10 - Compliance & Audit Concepts

**Unit:** ISC Fundamentals & Concepts | **Tier:** 1 | 

---

## 🎯 Learning Objectives

- Understand major compliance frameworks (SOX, HIPAA, GDPR) and their identity requirements
- Know what auditors look for and what ISC helps prove
- Understand identity controls and their role in compliance
- Recognize common compliance violations and how ISC prevents them
- Know the relationship between identity governance and compliance

---

## 📋 Prerequisites

Module 1.1: What is Identity Management? Module 1.8: Identity Governance Frameworks.

---

## 📚 CORE CONCEPTS

### SOX - Sarbanes-Oxley (Financial Services)

**Requirement:** Companies must prove financial system access is approved, monitored, and appropriately restricted. No single person can commit fraud unchecked.

**Identity Requirements:**
- Access to financial systems must be approved by management
- SoD enforced: Can't approve AND process payments
- Quarterly access reviews documented (certification)
- Audit trail of who has access to what and when

**How ISC helps:**
- Access Modeling: Define financial system roles with SoD rules
- Lifecycle: Automatic provisioning ensures only authorized people get access
- Governance: Quarterly certifications, audit trail
- Audit: Reports prove controls exist

**Example:** Contoso's Finance system
- ISC rule: "Can't have both Approve_Payments AND Process_Payments roles"
- If someone gets assigned both, ISC flags violation
- Auditor: "Show me proof that no one can approve and process" → ISC report shows no violations

---

### HIPAA - Health Insurance Portability and Accountability Act (Healthcare)

**Requirement:** Healthcare organizations must control access to protected health information (PHI). Access must be "minimum necessary" (only what you need for your job). Audit trails required.

**Identity Requirements:**
- Access to patient records restricted to authorized roles
- Minimum necessary principle: Doctors get patient data, billing doesn't
- Access monitoring: Quarterly reviews
- Audit trail: Who accessed what PHI and when
- Off-boarding: All access revoked on termination date

**How ISC helps:**
- Access Modeling: Implement minimum necessary (role determines what you see)
- Lifecycle: Automatic revocation prevents former employees accessing PHI
- Governance: Prove quarterly reviews and monitoring
- Audit: PHI access reports

**Example:** Hospital with EMR system
- ISC rule: "Doctors can access patient medical records, billing staff can't"
- ISC controls access by role
- Auditor: "Show me quarterly reviews of EMR access" → ISC certification reports prove it

---

### GDPR - General Data Protection Regulation (EU/Data Privacy)

**Requirement:** Organizations must protect personal data of EU residents and prove controls. Stronger than SOX/HIPAA. Requires data protection by design, consent management, breach notification.

**Identity Requirements:**
- Data access controlled (only authorized roles)
- Data isolation (customers' data separate)
- Audit trail of access
- Right to access: Audit trail of who accessed my data
- Right to be forgotten: Ability to delete all my data
- Breach notification: 72 hours

**How ISC helps:**
- Access Control: Restrict access to personal data
- Lifecycle: Automatic deletion of terminated employee access
- Audit trail: Prove who accessed data and when
- Compliance: Data access reports required for GDPR

**Example:** SaaS company with EU customers
- ISC enforces: Only EU customer support team accesses that customer's data
- Breach: ISC audit trail shows who accessed what
- Customer request: "Show me who accessed my data" → ISC reports show exact accesses and dates

---

### Common Compliance Violations and ISC Prevention

| Violation | Risk | ISC Prevention |
|-----------|------|---|
| **Terminated employee still has access** | Data breach, fraud, compliance failure | Lifecycle: Auto-revoke on termination |
| **Excessive access (access creep)** | Risk of fraud, breach | Governance: Quarterly reviews catch excess |
| **SoD violations** | Fraud (one person approves AND processes) | Access Modeling: Rules prevent SoD violations |
| **Access not approved** | Unauthorized access | Governance: Certification proves approval |
| **No audit trail** | Can't prove controls | ISC: Logs every access grant/revoke |
| **Stale access** | Orphaned accounts, former contractors | Governance: Reviews identify and revoke stale |
| **No documentation** | Auditor can't verify controls | ISC: Reports document everything |

---

### Audit Trail and Reporting

**Audit Trail:** ISC logs every action:
- When access granted/revoked
- Who approved it
- What business reason
- When reviewed/certified
- What policy enforced it

**Auditor uses:** "Show me that Casey's access was revoked when Casey left"
ISC shows: "Casey's access revoked 2024-12-15 (termination date) by Lifecycle process, all accounts in Finance app, QuickBooks, email disabled"

**Reports:**
- Access Certification Report: Managers' quarterly reviews
- SoD Violation Report: Who has conflicting access
- Access Provisioning Report: Who got access when
- Audit Trail Report: Full history of all access changes
- Risk Report: Users with excessive or risky access

---

## 🧠 KEY TAKEAWAYS

- **SOX** = Financial system controls (approval, SoD, quarterly reviews)
- **HIPAA** = Healthcare data protection (minimum necessary, revocation, audits)
- **GDPR** = Data privacy (access control, audit trail, right to be forgotten)
- **ISC enables compliance** through automation, controls, and audit trails
- **Auditors want:** Proof that controls exist. ISC provides that proof.

---

## 🎓 CERTIFICATION ALIGNMENT

**Question 1:** A healthcare organization must ensure that billing staff cannot access patient medical records. This is an example of:

A) HIPAA minimum necessary principle
B) SOX approval requirement
C) GDPR data isolation
D) ✅ AHIPAA minimum necessary means access limited to what's needed for the job

**Answer: A.** Minimum necessary is HIPAA's core principle.

---

**Question 2:** Contoso must prove to auditors that no one can both approve AND process payments (SOX requirement). Which ISC module provides this proof?

A) Lifecycle (provisioning)
B) Analytics (dashboards)
C) ✅ Governance (certification reports) + Access Modeling (SoD rules)
D) Search (queries)

**Answer: C.** Access Modeling prevents SoD violations; Governance reviews/certifies to prove no violations exist.

---

## 📚 ADDITIONAL RESOURCES

- [Next: 1.11 - Sources, Connectors & Integration](/modules/1.11-sources-connectors-integration)
- Unit 9: Governance & Certification (future - compliance configuration)
- Official documentation: NIST Cybersecurity Framework

---

## 🔄 NEXT STEPS

Module 1.11 starts the data flow concepts (sources, connectors, how data moves). These are the technical implementation of compliance requirements.

---

## ✅ SUCCESS CRITERIA

- ☑️ Understand SOX, HIPAA, GDPR requirements
- ☑️ Know what ISC does to support compliance
- ☑️ Recognize common violations and prevention
- ☑️ Understand role of audit trails and reporting
- ☑️ Answer practice questions correctly
