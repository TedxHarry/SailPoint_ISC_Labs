# 5.11 - Dynamic Roles Fundamentals

**Unit:** Access Modeling | **Tier:** 2 | **Duration:** ~10 hours

---

## 🎯 Learning Objectives

- Understand dynamic role automation
- Know rule-based membership
- Understand advantage over standard roles
- Recognize when to use dynamic roles

---

## 📋 Prerequisites

Module 5.10: Role Hierarchy & Management. Standard roles created and assigned.

---

## 📚 CORE CONCEPTS

### What Are Dynamic Roles?

**Definition:** Roles where membership is automatically determined by rules based on user attributes.

**Key difference from Module 5.3:**
- Standard: "I choose who gets this role" (manual)
- Dynamic: "Anyone meeting this rule automatically gets this role" (automatic)

**Example:**
```
Standard Role (Manual):
  Finance_Manager role
  └─ Members: Casey Kim (manually added)

Dynamic Role (Automatic):
  Engineering_Employee role
  └─ Rule: IF department = "Engineering" THEN auto-add
  └─ Members: (all engineering dept users, automatically)
```

---

### Why Dynamic Roles Matter

**Problem dynamic roles solve:**

**Without dynamics:**
```
New engineer joins Contoso
→ Admin must manually add to Engineer role
→ Delays access (1-3 days)
→ Easy to forget
→ Manual error-prone

New engineer leaves
→ Admin must remember to remove
→ Sometimes forgotten → security risk
```

**With dynamic roles:**
```
New engineer joins with department="Engineering"
→ ISC automatically adds to Engineering_Employee role
→ Instant access (same day)
→ No manual work
→ No human error

Engineer leaves/department changes
→ ISC automatically removes
→ Audit trail: "Removed because department changed"
→ No manual cleanup needed
```

---

### Rule-Based Membership

**How it works:**

**Step 1: Create role with rule**
```
Role: Engineering_Employee
Rule: IF department = "Engineering"
      THEN auto-add to Engineering_Employee role
```

**Step 2: ISC evaluates rule for all users**
```
Check Alex Lee: department = "Engineering"? YES → add
Check Casey Kim: department = "Finance"? NO → don't add
Check Morgan Chen: department = "Finance"? NO → don't add
(repeat for all 13 users)
```

**Step 3: Role membership automatic**
```
Engineering_Employee role
└─ Members (auto-managed):
   ├─ Alex Lee (matches rule)
   ├─ User4 (matches rule)
   └─ (anyone with dept=Engineering)
```

**Step 4: Ongoing re-evaluation**
```
When Alex's department changes to "Sales"
→ ISC detects: now doesn't match Engineering rule
→ ISC removes Alex from Engineering_Employee
→ ISC adds Alex to Sales_Employee (if rule matches)
```

---

### Rule Examples for Contoso

**Rule 1: By Department**
```
IF department = "Engineering"
THEN Engineering_Employee role
→ Applies to: All engineers (3 people in Contoso)
```

**Rule 2: By Job Title**
```
IF jobTitle = "Manager"
THEN Managers role
→ Applies to: All managers (3-4 people in Contoso)
```

**Rule 3: By Location**
```
IF location = "San Francisco"
THEN San_Francisco_Employees role
→ Applies to: All SF-based (in Contoso, if different locations)
```

**Rule 4: Multiple Conditions (AND)**
```
IF department = "Finance" AND jobTitle CONTAINS "Manager"
THEN Finance_Managers role
→ Applies to: Finance managers only (not all finance) (1 person)
```

**Rule 5: Multiple Conditions (OR)**
```
IF department = "Engineering" OR department = "IT"
THEN Technical_Staff role
→ Applies to: All technical staff (5 people)
```

---

### Advantages of Dynamic Roles

| Aspect | Standard Role | Dynamic Role |
|--------|---|---|
| **Manual work** | High (add/remove each person) | Low (rule-based) |
| **Onboarding speed** | Slow (1-3 days) | Fast (instant) |
| **Accuracy** | Error-prone | Consistent |
| **Scaling** | Doesn't scale (10 people OK, 1000 people = problem) | Scales perfectly |
| **Maintenance** | High (update as org changes) | Low (rule handles it) |
| **Audit trail** | "Admin added user" | "Added because dept=Eng" |

---

### When to Use Dynamic

**Use Dynamic if:**
- Many people in role (>20)
- Role based on stable attribute (department, job title, location)
- Role changes frequently (people join/leave)
- Organization is growing

**Use Standard if:**
- Few people in role (<10)
- People rarely change
- Role is exception/unique
- Requires special approval

**Hybrid (recommended):**
- Standard for unique/exception roles (Manager, Director)
- Dynamic for common roles (Engineer, Finance_Staff, Sales_Rep)

---

## 🧠 KEY TAKEAWAYS

- Dynamic roles = automatic membership based on rules
- Rule evaluated continuously (real-time or scheduled)
- Scales better than standard roles
- Requires good data quality (attributes must be accurate)
- Hybrid approach: standard + dynamic

---

## 🧪 TASK

1. Understand dynamic role concept
2. Know rules are evaluated continuously
3. Understand advantages over standard roles
4. Understand rule examples
5. Ready to create dynamic roles (Module 5.12)

---

## ✅ SUCCESS CRITERIA

- ☑️ Understand dynamic role automation
- ☑️ Understand rule-based membership
- ☑️ Know advantages over standard
- ☑️ Ready for hands-on dynamic role creation

---

## 🎓 CERTIFICATION

**Q:** What is the main advantage of dynamic roles?

A) They are simpler to understand
B) ✅ Automatically add/remove users based on rules
C) They grant more access
D) They don't require rules

**Answer: B.** Dynamic = automatic based on rule. No manual add/remove.

**Q:** Which scenario is best for dynamic roles?

A) CEO (only 1 person)
B) ✅ All engineers (many people, stable attribute)
C) Special contractors (exceptions)
D) Part-time staff (constantly changing)

**Answer: B.** Dynamic good for many people with stable attribute (department). Bad for exceptions.

---

## 📚 RESOURCES

- [Module 5.10: Role Hierarchy & Management](/modules/5.10-role-hierarchy-management)
- [Module 5.3: Standard vs Dynamic Roles](/modules/5.3-standard-roles-vs-dynamic)
- [Next: 5.12 - Create Dynamic Role (Part 1)](/modules/5.12-create-dynamic-role-part-1)

---

## ✅ NEXT STEPS

Proceed to 5.12 to create your first dynamic role with ISC rules.

