# 7.5 - Role Certification Process

**Unit:** Governance & Certification | **Tier:** 2 | 

**Coverage:** Role owner certification, process, verification, remediation.

---

## 🎯 Learning Objectives

- Execute role certification quarterly
- Verify role membership correctness
- Handle certification exceptions
- Document certification results

---

## 📋 Prerequisites

Module 7.4: Design Review Workflow. Workflow design understood.

---

## 📚 HANDS-ON LAB

### Objective

Execute quarterly role certification for Contoso roles.

---

### TASK 1: Role Certification Process

**Finance_Manager Role Certification (Q1):**

```
Role Owner: Casey Kim

Step 1: Receive Certification Report
├─ ISC sends: "Finance_Manager Role Certification Report"
├─ Content: Current members: [Casey] (1 member)
├─ Questions: "Are all listed members supposed to be in this role?"
└─ Deadline: March 31

Step 2: Review Membership
├─ Casey: Finance_Manager role
├─ Justification: "Yes, I'm the Finance Manager, need this role"
├─ Decision: APPROVED ✓

Step 3: Certify in ISC
├─ ISC Portal: Click "Certify Role"
├─ Confirm: "All members approved"
├─ Sign: Digital signature (Casey Kim)
├─ Timestamp: March 31, 2026
└─ Result: Certification recorded

Step 4: Audit Trail
├─ Role: Finance_Manager
├─ Certifier: Casey Kim
├─ Date: 2026-03-31
├─ Status: APPROVED
├─ Members certified: 1/1 (100%)
└─ Next review: 2026-06-30 (Q2)
```

**Engineer_Senior Role Certification (Q2):**

```
Role Owner: Alex Lee

Members to certify:
├─ Alex Lee (Engineer_Senior)
│  └─ Justification: "Yes, need this for team leadership"
├─ Should anyone else be Engineer_Senior?
│  └─ Decision: No, only Alex
└─ Certification: APPROVED for Alex only

Result:
├─ Members certified: 1/1
├─ No changes needed
└─ Next review: September 30
```

---

### TASK 2: Handle Exceptions

**Scenario: Manager requests exception during certification**

```
Issue: User4 is Engineer_Developer but manager wants to add Engineer_Senior access

Process:
1. Manager submits: Exception request
   ├─ User: User4
   ├─ Role: Engineer_Senior (currently not assigned)
   ├─ Reason: "Promoted to senior engineer, handling advanced projects"
   └─ 

2. Route to: Alex Lee (Engineer_Senior role owner)
   ├─ Alex reviews: "Is User4 ready for senior role?"
   ├─ Alex decides: "Yes, worthy of promotion"
   └─ Alex approves: Exception granted

3. ISC executes:
   ├─ Add: Engineer_Senior role to User4
   ├─ Provision: Senior engineer access (GitHub maintainer, AWS prod)
   └─ Document: Promotion and date

4. Certification updated:
   ├─ Role: Engineer_Senior
   ├─ Members: Alex Lee, User4 (now 2 members)
   ├─ Next review: Certify both still need role
   └─ Documented: User4 added Q2 2026
```

---

### TASK 3: Quarterly Certification Schedule

**All Contoso Roles:**

```
Finance_Manager: Casey (1 member) - Q1/Q2/Q3/Q4
Senior_Accountant: Morgan (1 member) - Q1/Q2/Q3/Q4
Finance_AP_Clerk: User5 (1 member) - Q1/Q2/Q3/Q4

Engineer_Senior: Alex (1 member) - Q2/Q3/Q4/Q1
Engineer_Developer: User4 (1 member) - Q2/Q3/Q4/Q1
DevOps: User12 (1 member) - Q2/Q3/Q4/Q1

IT_Administrator: User10 (1 member) - Q3/Q4/Q1/Q2
Security_Officer: User11 (1 member) - Q3/Q4/Q1/Q2

Sales_Representative: User6, User7 (2 members) - Q3/Q4/Q1/Q2

HR_Specialist: User8 (1 member) - Q4/Q1/Q2/Q3
HR_Manager: User9 (1 member) - Q4/Q1/Q2/Q3

(Dynamic roles same schedule as parent department)
```

---

## 🧪 EXPECTED RESULTS

✅ All roles certified quarterly
✅ Members correctly identified
✅ Exceptions handled formally
✅ Audit trail complete
✅ Certification documented

---

## ✅ SUCCESS CRITERIA

- ☑️ Execute role certification
- ☑️ Verify membership
- ☑️ Handle exceptions
- ☑️ Document results

---

## 🎓 CERTIFICATION

**Q:** Role certification confirms what?

A) Budget approval
B) ✅ That all role members are supposed to be there
C) User's performance
D) System uptime

**Answer: B.** Certification = role owner verifies membership correctness.

---

## 📚 RESOURCES

- [Module 7.4: Design Review Workflow](/modules/7.4-design-review-workflow)
- [Next: 7.6 - Execute Role Certification](/modules/7.6-execute-role-certification)

---

## ✅ NEXT STEPS

1. Understand role certification process
2. Know exception handling
3. Proceed to 7.6 to execute certification

