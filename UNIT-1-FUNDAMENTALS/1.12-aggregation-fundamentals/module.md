# 1.12 - Aggregation Fundamentals

**Unit:** ISC Fundamentals & Concepts | **Tier:** 1 | 

---

## 🎯 Learning Objectives

- Understand what aggregation is and why it matters
- Know the aggregation process (read, transform, store)
- Understand account discovery and import
- Recognize aggregation problems and impacts
- Know aggregation frequency and timing

---

## 📋 Prerequisites

Module 1.11: Sources, Connectors & Integration.

---

## 📚 CORE CONCEPTS

### What is Aggregation?

**Definition:** Aggregation is ISC's process of reading data from source systems via connectors, transforming it into ISC format, and storing it in ISC's database.

**Why it matters:** Without aggregation, ISC has no data. Can't provision (don't know what access to grant), can't govern (don't know what access exists), can't audit (no baseline).

**Steps:**
1. **Read:** Connector polls source system (Entra ID, HRIS, etc.)
2. **Transform:** Map connector data format to ISC format (first_name → firstName)
3. **Store:** Save data in ISC database
4. **Correlate:** Match accounts across sources to identities

---

### Account Discovery

**What it does:** First time you add a source connector, ISC reads ALL accounts that exist.

**Example:** Add Entra ID connector
- ISC discovers all 100 Entra ID users
- ISC discovers all 20 Entra ID groups
- ISC imports all 100 user accounts into ISC

**Why it matters:** ISC needs baseline of what exists before it can provision/manage new access. Without discovery, ISC thinks accounts don't exist and tries to create them (duplicates).

**Account states after discovery:**
- Authoritative accounts: Accounts that came from source system (these are the "truth")
- Non-authoritative accounts: Accounts ISC created (managed by ISC rules)

---

### Aggregation Frequency and Timing

**Real-Time Aggregation**

Some connectors support webhooks/notifications. When user created in Entra ID, Entra ID tells ISC immediately. ISC ingests change in seconds.

Advantage: Up-to-date data, immediate provisioning of new hires.

Example: New hire in HRIS at 9 AM → ISC knows at 9:00:01 AM → Can provision access same day.

**Scheduled Aggregation (Full/Delta)**

ISC runs scheduled job to read source system (hourly, daily, weekly). Two types:

- **Full aggregation:** Read entire system again, refresh all data (thorough but slower)
- **Delta aggregation:** Read only changes since last run (faster)

Example: Entra ID aggregation runs daily at 2 AM
- ISC reads Entra ID, discovers new users, updates existing user attributes
- Changes applied at 2 AM each day

**Timing considerations:**
- If aggregation runs daily at 2 AM, new HRIS hires added before 2 AM are provisioned same day
- HRIS hires added after 2 AM are provisioned next day
- Plan aggregation schedule around business hiring patterns

---

### Aggregation Problems and Impacts

| Problem | Impact | Solution |
|---------|--------|----------|
| **Connector broken (error)** | Data not aggregated, ISC has stale data | Fix connector, re-run aggregation |
| **Incorrect account mapping** | Wrong accounts matched to identities | Fix mapping configuration |
| **Too infrequent aggregation** | New employees don't get provisioned for days | Increase aggregation frequency |
| **Data quality issues in source** | Bad data in ISC (wrong departments, missing managers) | Fix source system data quality |
| **Large aggregation backlog** | Thousands of accounts pending import | Run full re-aggregation |

---

### After Aggregation

Once data is in ISC:
1. **Identity Engine:** Creates unified identities (correlates across sources)
2. **Access rules evaluated:** "This person should have this access"
3. **Lifecycle events triggered:** "New hire? Provision access"
4. **Provisioning begins:** Target connectors create/update accounts

---

## 🧠 KEY TAKEAWAYS

- **Aggregation = reading and storing source data in ISC**
- **First aggregation (discovery):** Reads ALL existing accounts
- **Ongoing aggregation:** Keeps ISC in sync with sources
- **Real-time when possible, scheduled as fallback**
- **Aggregation frequency affects provisioning timeliness**

---

## 🎓 CERTIFICATION ALIGNMENT

**Question 1:** Contoso adds an Entra ID connector. On first run, aggregation discovers 150 Entra ID users. What happens next?

A) ISC immediately provisions access based on job titles
B) ISC creates duplicate accounts
C) ✅ ISC imports the 150 users as authoritative accounts, establishes baseline for future changes
D) ISC does nothing until manual approval

**Answer: C.** Account discovery establishes what already exists. ISC then manages future changes.

---

**Question 2:** HRIS aggregation runs at 2 AM daily. A new Finance AP Clerk is hired and added to HRIS at 3 PM. When is access provisioned?

A) Immediately (real-time)
B) Within 1 hour
C) ✅ Next day at 2 AM or shortly after (when aggregation runs)
D) Never (manual request required)

**Answer: C.** Scheduled aggregation means data reaches ISC at next scheduled run. If real-time aggregation were available, same-day provisioning possible.

---

## 📚 ADDITIONAL RESOURCES

- [Next: 1.13 - Correlation Concepts](/modules/1.13-correlation-concepts)
- Unit 3: Identity Profiles & Sources (future - aggregation configuration)

---

## 🔄 NEXT STEPS

Module 1.13 covers correlationhow ISC matches accounts across sources to the same identity.

---

## ✅ SUCCESS CRITERIA

- ☑️ Explain aggregation (read, transform, store)
- ☑️ Understand account discovery
- ☑️ Know aggregation frequency options
- ☑️ Recognize aggregation problems and impacts
- ☑️ Answer practice questions correctly
