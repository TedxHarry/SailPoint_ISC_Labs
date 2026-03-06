# 1.8 - Identity Governance Frameworks

**Unit:** ISC Fundamentals & Concepts | **Tier:** 1 | 

---

## 🎯 Learning Objectives

- Understand RBAC (Role-Based Access Control) and how it works
- Understand ABAC (Attribute-Based Access Control) and when to use it
- Know SoD (Separation of Duties) and why it matters for compliance
- Recognize the differences and trade-offs between frameworks
- Apply these concepts to real business scenarios

---

## 📋 Prerequisites

Module 1.7: ISC Data Model Fundamentals. Understanding of roles and permissions.

---

## 📚 CORE CONCEPTS

### RBAC - Role-Based Access Control

**Definition:** Access is granted based on assigned roles. Person has role → role has permissions → person gets permissions.

**Why it matters:** Simplest model. Scales to hundreds of users. Easy to audit and govern. Most organizations use RBAC.

**How it works:**
- Define roles: "Finance Manager", "AP Clerk", "Engineer"
- Each role has fixed permissions in target systems
- Assign people to roles
- People automatically get all permissions for their role

**Example (Contoso):**
- Role "Finance Manager" = [QuickBooks full access] + [Finance app approval authority] + [expense approval] + [payroll reports]
- Morgan Chen assigned to "Finance Manager"
- Morgan gets all four permission sets automatically

**Limits:** Can't express complex rules like "Access approval authority ONLY if department=Finance AND title=Manager AND manager approved". That requires attributes.

---

### ABAC - Attribute-Based Access Control

**Definition:** Access decisions based on attributes of the person, the resource, and the context. "If department=Finance AND hire_date < 2020 AND approval_level >= 3, grant access."

**Why it matters:** More flexible than RBAC. Can express complex business rules. Adapts automatically when attributes change.

**How it works:**
- Define attributes: department, job title, hire date, cost center, manager, approval level, security clearance
- Write policies: "IF department = Finance AND title contains Manager THEN grant QuickBooks_Manager_Role"
- When attributes change, policies re-evaluate automatically

**Example (Contoso):**
- Policy: "IF department = Finance AND (title = 'Manager' OR title = 'Director') AND report_to = 'Finance Director' THEN grant Approval_Authority"
- Morgan Chen: department=Finance, title=Manager, manager=Finance Director → automatically qualifies for approval authority
- Morgan promoted? title changes → policy re-evaluates → new permissions provisioned
- Policy is future-proof: new Finance Managers are auto-provisioned without manual intervention

**Trade-off:** More powerful but harder to audit ("Why does this person have this access?" requires tracing through complex policies).

---

### SoD - Separation of Duties

**Definition:** Prevent conflicts of interest by ensuring no single person has permissions that could be used to commit fraud. Example: Can't be both the person who approves payments AND the person who processes payments.

**Why it matters:** Compliance requirement (SOX, HIPAA, GDPR require SoD). Fraud prevention. Risk reduction.

**Common SoD Rules:**
- Can't approve AND process the same transaction
- Can't create vendor AND approve vendor payments
- Can't create user AND assign permissions to that user
- Can't modify financial records AND approve financial reports

**Example (Contoso):**
- "Finance App Approval Authority" + "Finance App Payment Processor" = SoD violation
- Morgan can approve payments, but can't process them
- Casey can process payments, but can't approve them
- This ensures one person alone can't commit fraud

**ISC's role:** Governance module detects SoD violations during access reviews. Can also prevent provisioning violations (don't grant conflicting access).

---

## 🧠 KEY TAKEAWAYS

- **RBAC** = Simple, predictable, limited expressiveness. Best for standard organizations.
- **ABAC** = Flexible, powerful, complex to audit. Best for large enterprises with complex rules.
- **Most organizations use both:** RBAC for standard roles, ABAC for exceptions and complex rules.
- **SoD** = Business requirement, not a technical choice. Must be enforced in governance and provisioning.
- **ISC supports all three:** You'll configure RBAC roles, ABAC policies, and SoD rules in different modules.

---

## 🎓 CERTIFICATION ALIGNMENT

**Question 1:** Contoso's Finance department has 15 people in various roles. Using RBAC, the organization would:

A) Define 15 different access roles (one per person)
B) ✅ Define 3-4 roles (AP Clerk, Accountant, Manager, Director) and assign people to them
C) Write complex policies for each person
D) Manually grant permissions to each person

**Answer: B.** RBAC groups people with similar job functions into roles. Contoso would have ~4 Finance roles, not 15.

---

**Question 2:** A new policy requires that Finance employees in Boston can only access reports if they have >2 years tenure at Contoso. Which approach best implements this?

A) RBAC - create separate roles for experienced vs new employees
B) ✅ ABAC - write policy "IF location=Boston AND hire_date < 2022, grant report access"
C) SoD rules
D) Manual access provisioning

**Answer: B.** This is complex rule requiring attributes (location, hire_date). ABAC handles it; when someone hits 2 years, they're automatically granted access.

---

## 📚 ADDITIONAL RESOURCES

- [Next: 1.9 - The Identity Lifecycle (JML)](/modules/1.9-the-identity-lifecycle-jml)
- [Next: 1.10 - Compliance & Audit Concepts](/modules/1.10-compliance-audit-concepts)
- Unit 5: Access Modeling (future - RBAC/ABAC configuration)
- Unit 9: Governance & Certification (future - SoD enforcement)

---

## 🔄 NEXT STEPS

Module 1.9 covers the identity lifecycle (Join/Move/Leave). These governance frameworks determine how lifecycle events trigger access changes.

---

## ✅ SUCCESS CRITERIA

- ☑️ Explain RBAC, ABAC, and SoD
- ☑️ Identify when to use each framework
- ☑️ Recognize SoD violations in scenarios
- ☑️ Answer practice questions correctly
