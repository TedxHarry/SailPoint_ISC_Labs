# 5.15 - Separation of Duties Concepts

**Unit:** Access Modeling | **Tier:** 2 | 

---

## 🎯 Learning Objectives

- Understand Separation of Duties (SoD)
- Know why SoD matters
- Recognize SoD conflicts
- Understand enforcement methods

---

## 📋 Prerequisites

Module 5.14: Test Dynamic Role Membership. All roles created and tested.

---

## 📚 CORE CONCEPTS

### What is Separation of Duties (SoD)?

**Definition:** Security principle preventing same person from having conflicting access that could allow fraud or errors.

**Example conflict:**
```
Person with both:
 ├─ Can create invoice (Accounts Payable)
 ├─ AND can approve invoice (Manager)
 └─ Result: Can pay themselves fraudulently
```

**Solution:** Prevent same person from having both permissions.

---

### Why SoD Matters

**Risk without SoD:**
```
Finance person with both create + approve access:
→ Create fake invoice to vendor they own
→ Approve it themselves
→ Company pays them personally
→ Fraud undetected (they do all steps)
```

**With SoD:**
```
AP Clerk can create invoices (not approve)
Manager can approve invoices (not create)
→ Two people must be involved
→ Fraud requires collusion
→ Easier to audit and detect
→ Company protected
```

---

### Common SoD Conflicts

**Finance/Accounting:**

| Conflict | Why Bad | Impact |
|---|---|---|
| Create + Approve invoice | Can pay themselves | Direct theft |
| Create + Post to GL | Can hide unauthorized entries | Account fraud |
| Approve + Reconcile | Can hide discrepancies | Fraud + errors |
| Create + Delete record | Can cover up transactions | Audit trail destroyed |

**IT/Systems:**

| Conflict | Why Bad | Impact |
|---|---|---|
| Create + Approve access request | Can grant self unauthorized access | Security breach |
| Deploy code + Approve deployment | Can bypass code review | Malware/bugs |
| Manage users + Audit logs | Can delete evidence of unauthorized access | Forensics impossible |

**Sales:**

| Conflict | Why Bad | Impact |
|---|---|---|
| Create deal + Apply discount | Can give unauthorized discounts | Revenue loss |
| Process order + Process refund | Can refund to themselves | Theft |

---

### SoD Rules

**SoD Rule:** Prevent specific combinations of roles/entitlements.

**Format:**
```
Role A CANNOT be combined with Role B
```

**Example:**
```
Finance_AP_Clerk CANNOT have Finance_Manager role
(because AP Clerk creates, Manager approves)
```

**Another example:**
```
Create_Invoice entitlement CANNOT combine with Approve_Invoice
```

---

### Contoso SoD Examples

**Finance SoD Rules:**

```
Rule 1: Cannot have both:
 ├─ Finance_AP_Clerk (can create invoices)
 └─ Finance_Manager (can approve invoices)

Rule 2: Cannot have both:
 ├─ Create_GL_Entry
 └─ Reconcile_GL

Rule 3: Cannot have both:
 ├─ Delete_Invoice
 └─ Create_Invoice
```

**IT SoD Rules:**

```
Rule 1: Cannot have both:
 ├─ Create_User (can create accounts)
 └─ Approve_Access_Request (can approve own requests)

Rule 2: Cannot have both:
 ├─ Deploy_Production
 └─ Approve_Deployment
```

---

### How ISC Enforces SoD

**Method 1: Prevent Assignment**

```
Admin tries: Assign Casey (Finance Manager) to Finance_AP_Clerk role
ISC blocks: "Conflict with existing Finance_Manager role"
Result: Assignment fails
```

**Method 2: Flag for Review**

```
Admin tries: Assign Casey to multiple roles
ISC warns: "SoD conflict detected. Requires risk acceptance?"
Admin: Reviews risk, accepts if necessary
Result: Assignment allowed with audit trail
```

**Method 3: Monitoring/Alert**

```
If SoD violation detected (shouldn't happen, but safeguard):
ISC alerts: "SoD violation detected for Casey"
Admin: Investigates and remediates
Result: Violations detected and resolved
```

---

### When SoD Rules Don't Apply

**Exceptions (when conflicts are OK):**

**Small companies:**
- Contoso has 13 people
- Maybe 1 person must do both create + approve (too few people)
- Solution: Accept risk, document exception, add monitoring

**Compensating controls:**
- Person has both roles BUT
- Manager reviews all transactions daily
- Audit reviews all transactions monthly
- Result: Conflict allowed due to monitoring

**Necessary functions:**
- Some systems require same person (technical limitation)
- Example: Database admin must create tables AND manage backups
- Solution: Documented exception + extra monitoring

---

## 🧠 KEY TAKEAWAYS

- SoD prevents fraud by requiring multiple people for sensitive transactions
- Common conflicts: Create/Approve, Create/Delete, Deploy/Approve
- ISC can prevent, warn about, or monitor SoD violations
- Exceptions allowed with documentation + monitoring
- Finance is most critical for SoD (involves money)

---

## 🧪 TASK

1. Understand SoD purpose
2. Know common financial conflicts
3. Understand SoD enforcement
4. Recognize when exceptions needed
5. Ready to implement SoD rules (Module 5.16)

---

## ✅ SUCCESS CRITERIA

- ☑️ Understand SoD concept and importance
- ☑️ Know create/approve conflict pattern
- ☑️ Understand Contoso SoD risks
- ☑️ Know ISC enforcement methods

---

## 🎓 CERTIFICATION

**Q:** What is the primary goal of Separation of Duties?

A) Reduce system complexity
B) ✅ Prevent fraud by requiring multiple people for sensitive operations
C) Improve performance
D) Reduce training needs

**Answer: B.** SoD = prevent one person from committing fraud alone.

**Q:** Which is a valid SoD conflict for finance?

A) Create invoice AND approve invoice
B) View reports
C) ✅ Both A and View reports
D) None - no conflicts

**Answer: A.** Create (AP clerk) + Approve (manager) = conflict. Same person shouldn't do both.

---

## 📚 RESOURCES

- [Module 5.14: Test Dynamic Role Membership](/modules/5.14-test-dynamic-role-membership)
- [Next: 5.16 - Define SoD Rules (Part 1)](/modules/5.16-define-sod-rules-part-1)

---

## ✅ NEXT STEPS

Proceed to 5.16 to define SoD rules for Contoso and prevent conflicts.

