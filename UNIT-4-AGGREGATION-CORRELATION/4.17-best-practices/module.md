# 4.17 - Best Practices for Aggregation & Correlation

**Unit:** Aggregation & Correlation | **Tier:** 1 | 

---

## 🎯 Learning Objectives

- Follow aggregation best practices
- Follow correlation best practices
- Optimize for data quality
- Plan for production deployment

---

## 📋 Prerequisites

Module 4.16: Aggregation Scheduling & Automation.

---

## 📚 CORE CONCEPTS

### Best Practices: Aggregation

---

**Practice 1: Aggregate Primary Data First**

**Rule:** Create Identity Profile and aggregate Entra ID BEFORE adding other sources.

**Why:** Identity Profile based on primary source schema. Can't design profile without knowing what data comes from main system.

**Example:**
```
✅ CORRECT:
  Week 1: Entra ID set up (13 users, 7 groups)
  Week 2: Attribute mapping, aggregation working
  Week 3: Add second source (Okta) with new users

❌ WRONG:
  Create profile trying to support multiple sources at once
  Aggregate multiple sources before profile complete
  Result: Schema mismatch, data quality poor
```

---

**Practice 2: Test Seed Aggregation Before Full**

**Rule:** Test with 3-5 users first, verify all attributes map correctly, then full aggregation.

**Why:** Catch mapping errors before importing 1000+ users.

**Example (Contoso):**
```
1. Seed aggregation: Alex Lee, Morgan Chen, Casey Kim (3 test users)
   → Verify: All 8 attributes populated
   → Verify: All 3 accounts correlated
   → Verify: Groups assigned correctly

2. Full aggregation: All 13 users
   → All verified, ready for production
```

---

**Practice 3: Document Attribute Mappings**

**Rule:** Create documentation showing source attribute → ISC attribute mappings.

**Why:** Maintenance, troubleshooting, handoff to new team.

**Format:**
```
Entra ID Attribute       | ISC Attribute | Transformation    | Required?
---|---|---|---
givenName                | firstName     | (direct)          | Yes
surname                  | lastName      | (direct)          | Yes
mail                     | email         | (direct)          | Yes
department               | department    | (direct)          | Yes
jobTitle                 | jobTitle      | (direct)          | Yes
manager                  | manager       | (lookup)          | No
extensionAttribute1      | hireDate      | (parse date)      | No
officeLocation           | location      | (direct)          | No
```

---

**Practice 4: Schedule Appropriately**

**Rule:** Balance frequency with load.
- If 10K users: Daily full is too slow → Partial daily + full weekly
- If <1K users: Daily full is fine
- If critical changes needed immediately: Multiple partial per day

**For Contoso:** Daily full adequate.

---

**Practice 5: Monitor for Data Drift**

**Rule:** Run reconciliation regularly to catch discrepancies.

**Schedule:**
- After initial aggregation: Verify correct (should be 0 discrepancies)
- Weekly: Routine check
- After source system maintenance: Verify still in sync
- After attribute mapping changes: Verify updates applied

---

**Practice 6: Secure Connector Credentials**

**Rule:** Store credentials securely, rotate regularly.

**How:**
- ISC stores encrypted (not in plaintext)
- Don't include in git/version control
- Rotate client secrets annually (or per policy)
- Use service accounts (not personal accounts)
- Document credential location

---

### Best Practices: Correlation

---

**Practice 1: Use Unique Identifiers**

**Rule:** Match on attributes that uniquely identify (email, employee ID), not names.

**Why:** Names change, people have same names, formatting varies.

**Example:**
```
✅ GOOD:
  Rule: IF account.email == identity.email
  Rule: IF account.employeeID == identity.employeeID

❌ POOR:
  Rule: IF account.firstName + account.lastName == identity.firstName + identity.lastName
  (Will fail: "Alex" vs "Alexander", case mismatches, etc.)
```

---

**Practice 2: Establish Rule Priority Hierarchy**

**Rule:** Order rules from most specific to most general.

**Example (multi-source):**
```
Priority 1: Email exact match (catches most)
Priority 2: Employee ID match (catches transfers with new email)
Priority 3: Name + Department match (catches legacy systems)
Priority 4: Manual correlation (final recourse)
```

---

**Practice 3: Test Rules Before Batch Application**

**Rule:** Always preview rule matches before running batch correlation.

**Process:**
```
1. Create rule
2. Click "Test" → Preview what it matches
3. If >95% match rate: Apply to accounts
4. If <95% match rate: Adjust rule logic, re-test
5. Apply to accounts
```

---

**Practice 4: Consolidate Identities Proactively**

**Rule:** Merge duplicate identities discovered during setup.

**Why:** Prevents governance issues later (one person = multiple identities = multiple policy evaluations).

**Example:**
```
Discover: "Alex Lee" exists twice (data entry error)
Fix immediately: Merge into one identity, link all accounts
Result: Clean data from start
```

---

**Practice 5: Document Correlation Rules**

**Rule:** Document each rule with purpose, scope, and ownership.

**Format:**
```
Rule Name: Email Match - Entra ID
Purpose: Link Entra ID accounts to ISC identities by email
Logic: IF account.nativeIdentity == identity.email
Priority: 1
Scope: Entra ID source only
Owner: Identity Admin (email, phone)
Created: 2024-03-02
Last Modified: 2024-03-02
Success Rate: 100% (13/13 accounts)
```

---

**Practice 6: Plan Identity Consolidation Upfront**

**Rule:** Plan how multi-source identities will consolidate.

**Question:** When Okta added, how do we know Alex from Okta = Alex from Entra ID?

**Answer:** Email field matches across sources.

**Document:**
```
Multi-Source Consolidation Rules:
- Primary source: Entra ID (source of truth for names, departments)
- Consolidation attribute: email
- When new source added: Match by email, consolidate under primary identity
- Conflict resolution: If attributes differ, use Entra ID values (authoritative)
```

---

### Best Practices: Data Quality

---

**Practice 1: Validate Source Data**

**Rule:** Before aggregating, verify source has required attributes for all objects.

**Audit:**
```
Entra ID Readiness Checklist:
- ☑ All 13 users have firstName
- ☑ All 13 users have lastName
- ☑ All 13 users have email (unique per user)
- ☑ All 13 users have department
- ☑ All 13 users have jobTitle
- ☑ All 7 groups have names
- ☑ All 7 groups have members assigned

If any ❌: Fix in source first, THEN aggregate
```

---

**Practice 2: Use Transformations Sparingly**

**Rule:** Keep attribute mappings simple (direct copy). Use transformations only when necessary.

**Why:** Complex transformations slow down aggregation, harder to troubleshoot.

**Example:**
```
✅ SIMPLE:
  Entra ID.givenName → ISC.firstName (direct)

❌ COMPLEX (avoid unless necessary):
  CONCAT(Entra ID.givenName, Entra ID.surname, Entra ID.department) → displayName
```

---

**Practice 3: Regular Audits**

**Rule:** Quarterly or semi-annual audit of aggregation/correlation quality.

**Audit checklist:**
```
- Sample 10% of identities, verify attributes complete
- Check unlinked accounts (should be 0)
- Run reconciliation report
- Compare object counts to source
- Review aggregation logs for errors/warnings
- Check performance metrics (speed, resource usage)
- Verify correlation rule coverage (do all accounts have rule match?)
```

---

**Practice 4: Document Everything**

**Rule:** Create runbooks for common tasks.

**Runbook examples:**
```
Runbook: Add New Source System
Runbook: Troubleshoot Aggregation Failure
Runbook: Fix Uncorrelated Accounts
Runbook: Update Attribute Mappings
Runbook: Run Reconciliation and Fix Discrepancies
```

---

### Best Practices: Production Readiness

---

**Checklist before moving to production:**

```
Configuration:
✅ Identity Profile finalized (all attributes defined)
✅ Account mapping complete for all sources
✅ Correlation rules tested and documented
✅ Attribute transformations optimized
✅ Aggregation schedule set (appropriate time, frequency)
✅ Auto-correlation enabled
✅ Auto-reconciliation enabled (if available)

Operations:
✅ Aggregation log retention configured
✅ Alerts/notifications enabled for failures
✅ Escalation path documented (who to contact if issues)
✅ Runbooks created for common tasks
✅ Backup/restore process tested
✅ Credentials rotated and secured

Testing:
✅ Test aggregation succeeded (all objects imported)
✅ Test correlation succeeded (all accounts linked)
✅ Test reconciliation succeeded (0 discrepancies)
✅ Test failover scenario (if one source down)
✅ Test recovery from errors

Documentation:
✅ Attribute mapping documented
✅ Correlation rules documented
✅ Aggregation schedule documented
✅ Troubleshooting guide created
✅ Data owner and contacts identified
```

---

## 🧠 KEY TAKEAWAYS

- Test seed before full aggregation
- Document all mappings and rules
- Use unique identifiers (not names) for correlation
- Consolidate identities proactively in multi-source
- Regular audits catch data quality issues
- Production readiness checklist before go-live

---

## 🧪 TASK

1. Review each best practice
2. Apply to Contoso setup
3. Create documentation
4. Prepare production readiness checklist

---

## ✅ SUCCESS CRITERIA

- ☑️ Understand aggregation best practices
- ☑️ Understand correlation best practices
- ☑️ Know production readiness criteria
- ☑️ Ready for final checklist (Module 4.18)

---

## 🎓 CERTIFICATION

**Q:** Which is the best practice for correlation rules?

A) Match on user first and last names
B) Create many rules with overlapping conditions
C) ✅ Match on unique identifiers (email, employee ID) with clear priority
D) No rules needed, manual correlation only

**Answer: C.** Unique identifiers (email, ID) reliable. Names change, people have same names. Clear priority ensures consistent matching.

**Q:** Before aggregating 1000 users from a new source, what should you do first?

A) Aggregate all immediately
B) ✅ Test seed aggregation with 10-20 users first
C) Disable correlation rules temporarily
D) Skip documentation

**Answer: B.** Seed test catches mapping errors early. Fix on small set, then full aggregation.

---

## 📚 RESOURCES

- [Module 4.4: Run Aggregation in ISC](/modules/4.4-run-aggregation-in-isc)
- [Module 4.7: Correlation Rules Configuration](/modules/4.7-correlation-rules-configuration)
- [Module 4.16: Aggregation Scheduling & Automation](/modules/4.16-aggregation-scheduling-automation)

---

## ✅ NEXT STEPS

After reviewing best practices:
1. Apply to your Contoso setup
2. Document your configuration
3. Proceed to Module 4.18 (Pre-Provisioning Checklist)

