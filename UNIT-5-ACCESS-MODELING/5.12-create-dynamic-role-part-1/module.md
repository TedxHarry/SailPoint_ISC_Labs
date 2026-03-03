# 5.12 - Create Dynamic Role (Part 1)

**Unit:** Access Modeling | **Tier:** 2 | **Duration:** ~10 hours

---

## 🎯 Learning Objectives

- Create dynamic role with rules
- Configure rule expressions
- Understand rule syntax
- Test rule matching

---

## 📋 Prerequisites

Module 5.11: Dynamic Roles Fundamentals. Standard roles created.

---

## 📚 HANDS-ON LAB

### Objective
Create dynamic roles for departments: "Engineering_Employee" and "Finance_Employee"

---

### TASK 1: Create Engineering_Employee Dynamic Role

**Navigate:** ISC > Administration > Roles > Create Role

**Role Configuration:**

**Basic Info:**
- Name: Engineering_Employee
- Owner: Engineering Manager
- Description: Automatic role for all engineering department employees
- Type: Dynamic (select this option, not Standard)

**Rule Definition:**

**Click:** "Add Rule" or "Define Membership Rule"

**Rule Expression (syntax varies by ISC):**
```
department == "Engineering"
```

**Or alternative syntax:**
```
identity.department == "Engineering"
```

**Explanation:**
- `department`: The user attribute to check
- `==`: Equals operator
- `"Engineering"`: The value to match

**Add Access Profiles:**
(Same as standard roles)
- Engineer_Developer (base engineer access)

**Save:** Click "Create Role"

---

### TASK 2: Verify Rule Works

**Rule Testing:**

**ISC shows:** "Rule matches X users"
```
Engineering_Employee rule
├─ Rule: department == "Engineering"
├─ Matches: 3 users (Alex Lee, User4, User12)
└─ Automatically included
```

**Verify matching users:**
- Alex Lee (Engineering dept) ✅
- User 4 (Engineering dept) ✅
- User 12 (Engineering dept) ✅
- (All other users should NOT match)

**If incorrect matches:**
- Check rule syntax
- Verify user attributes are correct (go back to Unit 2 or 4)
- Adjust rule

---

### TASK 3: Create Finance_Employee Dynamic Role

**Navigate:** ISC > Roles > Create Role

**Role Configuration:**

**Basic Info:**
- Name: Finance_Employee
- Owner: Finance Manager
- Type: Dynamic

**Rule:**
```
department == "Finance"
```

**Access Profiles:**
- QB_User (basic QuickBooks)

**Save**

**Verify matches:**
- Casey Kim (Finance) ✅
- Morgan Chen (Finance) ✅
- User 5 (Finance) ✅
- (Total: 3 users)

---

### TASK 4: (Optional) Create Other Department Roles

**Repeat for other departments:**

**Sales_Employee:**
```
Rule: department == "Sales"
Matches: 2 users (Users 6, 7)
Access: Salesforce_User
```

**HR_Employee:**
```
Rule: department == "HR"
Matches: 2 users (Users 8, 9)
Access: HRIS_View
```

**IT_Employee:**
```
Rule: department == "IT"
Matches: 2 users (Users 10, 11)
Access: Tools_Admin
```

---

## 🧪 EXPECTED RESULTS

After creating dynamic roles:

✅ Engineering_Employee role created (3 members auto-added)
✅ Finance_Employee role created (3 members auto-added)
✅ (Optional) Sales, HR, IT roles created
✅ All rules matching correct users
✅ Rules show as "Active"

**Example final state:**
```
Engineering_Employee
├─ Rule: department == "Engineering"
├─ Members: 3 (auto-managed)
└─ Access: Engineer_Developer

Finance_Employee
├─ Rule: department == "Finance"
├─ Members: 3 (auto-managed)
└─ Access: QB_User
```

---

## 🧪 VERIFY DYNAMIC ASSIGNMENT

**Check from user side:**

**Navigate:** ISC > Identities > Alex Lee

**Accounts/Roles section shows:**
```
Roles:
├─ Engineer_Senior (manually assigned, Module 5.9)
├─ Engineering_Employee (automatically assigned, this module)
```

**Alex now has:**
- Engineer_Senior access (manual)
- Engineering_Employee access (automatic)
- Total: Combined entitlements

---

## 🔧 TROUBLESHOOTING

**Issue: "Rule doesn't match any users"**
- Check rule syntax (typo in "Engineering"?)
- Verify users have department attribute (Unit 2, 4)
- Check attribute value exactly matches

**Issue: "Rule matches wrong users"**
- Rule too broad (use AND for narrower)
- Attribute data dirty (Finance vs finance?)
- Check case sensitivity

**Issue: "Can't create dynamic role - option not available"**
- ISC version may not support dynamic roles
- Proceed with standard roles only
- (Dynamic rules available in most ISC versions)

---

## ✅ SUCCESS CRITERIA

- ☑️ Engineering_Employee dynamic role created
- ☑️ Finance_Employee dynamic role created
- ☑️ Rules matching correct users (3 each)
- ☑️ Access profiles assigned
- ☑️ Users auto-added to matching roles

---

## 🎓 CERTIFICATION

**Q:** What does the rule `department == "Engineering"` do?

A) ✅ Auto-adds anyone with department = Engineering to role
B) Manually adds users
C) Removes users from role
D) Checks if department exists

**Answer: A.** Rule evaluates for all users, auto-adds those matching.

**Q:** Engineering_Employee role has rule matching 3 users. If a new engineer is hired, what happens?

A) Manual admin work needed
B) New engineer won't get access
C) ✅ Rule automatically adds new engineer when hired
D) Need to modify rule

**Answer: C.** Rule continuously evaluated. New engineer with dept=Engineering auto-added.

---

## 📚 RESOURCES

- [Module 5.11: Dynamic Roles Fundamentals](/modules/5.11-dynamic-roles-fundamentals)
- [Next: 5.13 - Create Dynamic Role (Part 2)](/modules/5.13-create-dynamic-role-part-2)

---

## ✅ NEXT STEPS

1. Verify dynamic roles created and matching correctly
2. Proceed to 5.13 for advanced dynamic rules (job title, location)
3. Then test dynamic role membership (5.14)

