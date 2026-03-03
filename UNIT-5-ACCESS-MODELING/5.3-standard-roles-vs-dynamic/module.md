# 5.3 - Standard Roles vs Dynamic Roles

**Unit:** Access Modeling | **Tier:** 2 | **Duration:** ~10 hours

---

## 🎯 Learning Objectives

- Understand standard role implementation
- Understand dynamic role implementation
- Know when to use each
- Understand rule syntax for dynamic roles

---

## 📋 Prerequisites

Module 5.2: Role Design Principles.

---

## 📚 CORE CONCEPTS

### Standard Roles (Manual Assignment)

**Definition:** Roles explicitly assigned to individual users by admin.

**How it works:**
```
1. Create role: "Finance_AP_Clerk"
2. Admin manually adds users: Alex Lee, other clerk
3. Each user explicitly linked to role
4. When user leaves: admin manually removes
```

**Data structure in ISC:**
```
Finance_AP_Clerk role
├─ User: Alex Lee
├─ User: (other AP clerk)
└─ (manually maintained list)
```

**Advantages:**
- Simple to understand
- Clear who has what (explicit list)
- Good for small numbers (<50 people)
- No dependency on data quality

**Disadvantages:**
- Manual work (doesn't scale)
- Easy to forget to remove users
- Hard to audit "why does this person have this role?"
- Slow to onboard

**Best for:** Small organizations, unique/rare roles

---

### Dynamic Roles (Rules-Based Assignment)

**Definition:** Roles automatically assigned based on rules/attributes.

**How it works:**
```
1. Create role: "Engineering"
2. Create rule: "IF department = Engineering, THEN add to Engineering role"
3. Every user with department = Engineering automatically in role
4. New person joins as engineer → automatically added
5. Person leaves engineering → automatically removed
```

**Data structure in ISC:**
```
Engineering role
├─ Rule: IF department = "Engineering"
├─ Automatically includes: (all Engineering dept users)
└─ No manual list needed
```

**Advantages:**
- Scales automatically (new hires join role automatically)
- Consistent application of rules
- Audit trail: "Why? Because department = Engineering"
- Reduces manual work
- Faster onboarding

**Disadvantages:**
- Requires good data quality (department must be accurate)
- Rules can conflict
- Harder to add exceptions (person doesn't fit rule)

**Best for:** Large organizations, pattern-based roles

---

### Hybrid Approach (Most Common)

**Pattern:** Standard roles + Dynamic roles working together

**Example - Contoso (13 people):**

```
Standard Roles (manually assigned):
- Finance_Manager (1 person)
- HR_Manager (1 person)
- IT_Administrator (1 person)
→ Small numbers, specific people, manually assigned

Dynamic Roles (automatically assigned):
- Engineering_Employee (all engineering dept users)
- Finance_Employee (all finance dept users)
- Sales_Employee (all sales users)
→ Large numbers, pattern-based, automatically assigned

Result:
- 80% of access automated
- 20% of edge cases handled manually
- Scalable and maintainable
```

---

### Dynamic Role Rule Examples

**Rule Type 1: Single Attribute**
```
IF department = "Engineering"
THEN add to Engineering role
→ All engineers automatically get engineer access
```

**Rule Type 2: Multiple Conditions (AND)**
```
IF department = "Finance" AND jobTitle CONTAINS "Manager"
THEN add to Finance_Manager role
→ Only finance managers (not all finance)
```

**Rule Type 3: Multiple Conditions (OR)**
```
IF location = "New York" OR location = "Boston"
THEN add to Northeast_Employees role
→ Anyone in Northeast offices
```

**Rule Type 4: Complex**
```
IF (department = "Engineering" OR department = "IT")
AND (jobTitle = "Senior" OR jobTitle = "Lead")
THEN add to Leadership role
→ Seniors and leads in technical departments
```

---

### When Rule Conflicts Happen

**Scenario:** User matches multiple rules

```
Employee: Alex Lee
- department = Engineering
- jobTitle = Senior
- location = San Francisco

Rules:
1. IF department = Engineering → Engineer role
2. IF jobTitle = Senior → Senior role
3. IF location = San Francisco → SF_Team role

Result: Alex automatically in all 3 roles ✓ (intended)
```

**Problem scenario:**
```
Rules:
1. IF department = Finance → Finance role (has QuickBooks access)
2. IF jobTitle = Manager → Manager role (has approval authority)

Employee: Finance Manager
Matches both rules → gets both entitlements ✓ (correct)
```

**Conflict scenario (rare):**
```
Rules:
1. IF department = Finance → Can NOT approve expenses (rule says deny)
2. IF jobTitle = Manager → CAN approve expenses (rule says allow)

Employee: Finance Manager
CONFLICT! Which rule wins?

Solution: Priority/order of rules, or explicit conflict resolution
```

---

## 🧠 KEY TAKEAWAYS

- Standard roles: manual assignment, simple, doesn't scale
- Dynamic roles: rule-based, automatic, scales well
- Use hybrid: standard for edge cases, dynamic for patterns
- Rules can be simple (single attribute) or complex (multiple conditions)
- Good data quality required for dynamic roles

---

## 🧪 TASK

1. Understand standard role mechanics
2. Understand dynamic role mechanics
3. Know Contoso will use hybrid approach
4. Understand rule syntax for dynamic roles
5. Ready for business role definition (Module 5.4)

---

## ✅ SUCCESS CRITERIA

- ☑️ Understand standard role implementation
- ☑️ Understand dynamic role implementation
- ☑️ Know when to use each
- ☑️ Ready for Contoso role planning

---

## 🎓 CERTIFICATION

**Q:** What is the main advantage of dynamic roles over standard roles?

A) They're always better
B) ✅ They scale automatically without manual maintenance
C) They're simpler to understand
D) They don't require rules

**Answer: B.** Dynamic = automatic assignment based on rules. Standard = manual per-user. Dynamic scales.

**Q:** Which rule would add all Senior staff to Leadership role?

A) IF location = Headquarters
B) ✅ IF jobTitle CONTAINS "Senior"
C) IF department = ALL
D) IF role = Leadership

**Answer: B.** Rule that checks jobTitle for "Senior" catches all seniors regardless of department.

---

## 📚 RESOURCES

- [Module 5.2: Role Design Principles](/modules/5.2-role-design-principles)
- [Next: 5.4 - Business Role Definition](/modules/5.4-business-role-definition)

---

## ✅ NEXT STEPS

Proceed to 5.4 to define Contoso's specific business roles.

