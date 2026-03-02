# 4.3 - Types of Aggregation

**Unit:** Aggregation & Correlation | **Tier:** 1 | **Duration:** ~10 hours

---

## 🎯 Learning Objectives

- Understand full aggregation
- Know partial aggregation use cases
- Understand seed aggregation
- Know when to use each type

---

## 📋 Prerequisites

Module 4.2: Understanding Aggregation Architecture.

---

## 📚 CORE CONCEPTS

### Full Aggregation

**Definition:** Read ALL objects from source system and replace all stored data.

**Process:**
1. ISC sends "get all users" to connector
2. Connector reads entire user list
3. ISC deletes previous data
4. ISC stores new data

**When to use:**
- Initial setup (first time aggregating)
- Weekly/monthly scheduled full syncs
- Ensuring consistency (detect deleted accounts)
- After source system migration

**Contoso example:** First time aggregating Entra ID. ISC sends request, Entra ID returns 13 users, ISC stores all 13, replaces any previous data.

**Pros:** Complete consistency, detects deletions, simple to understand
**Cons:** Slower (reads everything), may impact source system performance during read

---

### Partial Aggregation

**Definition:** Read only changed objects since last aggregation.

**Process:**
1. ISC tracks "last aggregation timestamp"
2. ISC sends "get all users modified since [timestamp]" to connector
3. Connector returns only changed/new users
4. ISC updates only changed objects, leaves others untouched

**When to use:**
- Scheduled aggregations between full syncs
- Hourly/daily updates to catch new users
- High-volume sources (large user bases)
- Faster sync cycles needed

**Contoso example:** Last full aggregation was Monday. Tuesday 9am partial aggregation: new user Casey Kim added overnight, read her record, update ISC. Existing 13 users unchanged.

**Pros:** Faster, less load on source, catches changes quickly
**Cons:** Requires source to track "last modified" timestamp, can miss changes if timestamp mechanism broken

**How source tracks changes:**
- Most sources (Entra ID, Okta, SAP) track `lastModifiedDate` or `modifiedTimeStamp`
- Connector reads objects WHERE lastModified > [last aggregation time]
- Returns only that subset

---

### Seed Aggregation

**Definition:** Read accounts for selected identities only (not all sources).

**When to use:**
- Testing aggregation before full deployment
- Aggregating subset of users (pilots, departments)
- Validating connector configuration
- Troubleshooting specific user issues

**Process:**
1. Admin specifies filter: "department=Engineering" or "users=Alex, Morgan, Casey"
2. ISC sends filtered request to connector
3. Connector returns subset matching filter
4. ISC stores or updates only those accounts

**Contoso example (testing):** Before aggregating all 13 Entra ID users, test with 3 users: Alex Lee, Morgan Chen, Casey Kim. Verify attributes map correctly. Then run full aggregation.

**Pros:** Controlled testing, quick validation, low risk
**Cons:** Incomplete data for governance decisions, requires manual trigger

---

### Recommended Aggregation Strategy

**Initial Setup:**
```
Week 1, Day 1: Seed aggregation (5 test users) → validate
Week 1, Day 2: Full aggregation (all 13 users) → production
```

**Ongoing:**
```
Monday 2am: Full aggregation (reset all data)
Tue-Sun 2am: Partial aggregation (catch daily changes)
Friday 11am: Full aggregation (catch any missed changes)
```

This hybrid approach: catches most changes with partial, maintains consistency with periodic full, detects edge cases.

---

### Account Matching During Partial Aggregation

**Key challenge:** When reading partial data, how does ISC know which existing account to update?

**Solution:** Match by `nativeIdentity` (account ID in source system).
- Entra ID account: alex.lee@contoso.com (nativeID)
- If ISC sees same nativeID during partial aggregation: UPDATE existing account
- If new nativeID: CREATE new account

**Example:**
- Last aggregation: 13 users stored
- Partial aggregation: Casey Kim added (new nativeID), Morgan Chen's email changed
- Result: 1 new account created, 1 account updated, 11 unchanged

---

## 🧠 KEY TAKEAWAYS

- Full: Read all, replace all (slower, consistent)
- Partial: Read changes only (faster, requires timestamp tracking)
- Seed: Read subset (testing only)
- Use full regularly to maintain consistency
- Use partial for high-frequency updates

---

## 🧪 TASK

1. Understand three aggregation types
2. Know when to use each
3. Understand pros/cons
4. Plan aggregation strategy for test environment

---

## ✅ SUCCESS CRITERIA

- ☑️ Understand full aggregation
- ☑️ Understand partial aggregation and when to use
- ☑️ Understand seed aggregation for testing
- ☑️ Know recommended hybrid approach

---

## 🎓 CERTIFICATION

**Q:** What is the main advantage of partial aggregation over full aggregation?

A) More secure
B) ✅ Faster, lower load on source system
C) Detects deleted accounts
D) Simpler to configure

**Answer: B.** Partial reads changes only, full reads everything. Trade-off: partial faster but doesn't detect deletions.

**Q:** Seed aggregation is typically used for:**

A) ✅ Testing connector configuration before full deployment
B) Gathering all accounts from source
C) Matching accounts to identities
D) Generating governance reports

**Answer: A.** Seed aggregates subset (usually test users) to validate before full.

---

## 📚 RESOURCES

- [Module 4.2: Understanding Aggregation Architecture](/modules/4.2-understanding-aggregation-architecture)
- [Module 4.4: Run Aggregation in ISC](/modules/4.4-run-aggregation-in-isc)

---

## ✅ NEXT STEPS

Proceed to 4.4 for hands-on aggregation in ISC sandbox.

