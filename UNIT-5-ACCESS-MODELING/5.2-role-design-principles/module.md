# 5.2 - Role Design Principles

**Unit:** Access Modeling | **Tier:** 2 | 

---

## 🎯 Learning Objectives

- Know principle of least privilege
- Understand role granularity
- Know role naming conventions
- Understand role ownership

---

## 📋 Prerequisites

Module 5.1: Access Modeling Fundamentals.

---

## 📚 CORE CONCEPTS

### Principle of Least Privilege (PoLP)

**Definition:** Users should have only minimum access needed to do their job.

**Why critical:** Every access granted is potential risk. Less access = smaller blast radius if account compromised.

**Example - Finance:**
```
Too much access (WRONG):
 Finance_Clerk role includes:
 - Create invoices ✅ (needed)
 - Approve invoices ✅ (needed)
 - Delete financial records ❌ (NOT needed)
 - Change exchange rates ❌ (NOT needed)
 Result: If account compromised, attacker can delete records

Right access (CORRECT):
 Finance_Clerk role includes:
 - Create invoices ✅
 - Approve invoices (only up to $1000) ✅
 - View reports ✅
 Result: Clerk can do job, limited damage if compromised
```

---

### Role Granularity

**Question:** Should role include many entitlements or few?

**Too Coarse (bad):**
```
"AllAccess" role = Everything
Everyone gets same access, can't track who did what, defeats governance
```

**Too Fine (also bad):**
```
"Can_Read_File_X" role, "Can_Write_File_Y" role, etc.
Hundreds of roles, unmaintainable, hard to assign
```

**Just Right (Goldilocks):**
```
Roles map to job functions:
 - Finance_AP_Clerk: invoice entry + approval of small amounts
 - Finance_Manager: all invoice access + reconciliation + reporting
 - Senior_Accountant: advanced accounting + period close
Result: 5-10 roles per department, clear purpose, manageable
```

**Rule of thumb:** If role has no clear job function → too fine-grained. If role includes unrelated access → too coarse.

---

### Role Naming Conventions

**Good naming:**
```
Department_JobTitle
- Finance_AP_Clerk (finance department, accounts payable clerk job)
- Engineering_SeniorDeveloper (engineering dept, senior developer job)
- HR_Manager (HR dept, manager role)
```

**Advantages:**
- Clear who role is for
- Consistent across organization
- Easy to audit and search
- Self-documenting

**Bad naming:**
```
- "role123" (unclear)
- "SuperUser" (too vague)
- "CanDoSomething" (not about job function)
- "developer-github-jira-deployment" (too long, too specific)
```

---

### Role Ownership & Approval

**Role Owner:** Person/team responsible for role, who approves access
- Usually department manager or team lead
- Example: Finance_AP_Clerk role owner = Finance Manager
- Owns the entitlements: "Who needs this role? Is this person appropriate?"
- Annual review: "Do we still need this role? Who should be in it?"

**Approval Chain:**
```
Employee: "I need Finance_AP_Clerk access"
↓
ISC: Send request to Finance_Manager (role owner)
↓
Manager: Review, approve or reject
↓
ISC: Grant or deny access
```

**Why needed:** Role owner knows business context. They can validate "yes, this person should have access."

---

### Role Design Checklist

**Before creating a role, ask:**

1. **Clear job function?** Does role map to actual job?
 - Good: "Senior_Engineer" (actual job title)
 - Bad: "AccessGroup1" (no job function)

2. **Least privilege?** Does role include only needed access?
 - Good: Finance_Manager = approve + view reports + reconcile
 - Bad: Finance_Manager = everything + delete records + change rates

3. **Owner identified?** Who will own/maintain this role?
 - Good: Finance Manager owns Finance_AP_Clerk role
 - Bad: No owner assigned

4. **Consistent with other roles?** Does it fit overall structure?
 - Good: All engineering roles in "Engineering_*" pattern
 - Bad: Roles named randomly

5. **Sustainable?** Can this role scale as org grows?
 - Good: Dynamic rule "IF department = Finance, add to Finance role"
 - Bad: Need to manually maintain list of users

---

### Standard Role vs Dynamic Checklist

**Create Standard Role (manual) if:**
- Small number of people (< 10) need this role
- Role is stable (doesn't change frequently)
- Job function is unique (not pattern-based)
- Example: Finance_Manager role (1-2 people in small company)

**Create Dynamic Role (rules-based) if:**
- Many people need this role (> 10)
- People come and go frequently
- Role based on stable attribute (department, job title, location)
- Example: Engineering role (all engineers, automatically assigned)

---

## 🧠 KEY TAKEAWAYS

- Least privilege: only access needed for job
- Right granularity: job function level, not too coarse/fine
- Consistent naming: Department_JobTitle pattern
- Identified owner: someone responsible for role
- Standard vs Dynamic: choose based on scale and stability

---

## 🧪 TASK

1. Understand least privilege principle
2. Know what makes good role design
3. Understand role ownership importance
4. Decide standard vs dynamic for Contoso roles
5. Ready to define Contoso business roles (Module 5.4)

---

## ✅ SUCCESS CRITERIA

- ☑️ Understand least privilege
- ☑️ Know granularity rules
- ☑️ Understand naming conventions
- ☑️ Know role ownership model

---

## 🎓 CERTIFICATION

**Q:** What does "Principle of Least Privilege" mean in role design?

A) Give users as much access as possible
B) ✅ Give users only minimum access needed for their job
C) All users get same access
D) Remove all access to be secure

**Answer: B.** PoLP = minimum necessary. More access = more risk.

**Q:** When should you create a dynamic role instead of standard role?

A) Always use dynamic
B) Always use standard
C) ✅ Dynamic when role applies to many people based on consistent rule
D) Never use dynamic

**Answer: C.** Dynamic for scale (many people, rule-based). Standard for individuals.

---

## 📚 RESOURCES

- [Module 5.1: Access Modeling Fundamentals](/modules/5.1-access-modeling-fundamentals)
- [Next: 5.3 - Standard Roles vs Dynamic](/modules/5.3-standard-roles-vs-dynamic)

---

## ✅ NEXT STEPS

Proceed to 5.3 to compare standard and dynamic roles in detail.

