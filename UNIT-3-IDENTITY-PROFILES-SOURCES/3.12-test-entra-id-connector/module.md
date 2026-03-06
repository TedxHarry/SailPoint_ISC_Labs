# 3.12 - Test Entra ID Connector

**Unit:** Identity Profiles & Sources | **Tier:** 1 | 

---

## 🎯 Learning Objectives

- Test connector reads data
- Verify account discovery
- Check data quality

---

## 📋 Prerequisites

Module 3.11: Configure Entra ID Connector (Part 2).

---

## 📚 HANDS-ON LAB

### Run Aggregation

In Contoso_Entra_ID connector > Actions > Aggregate Now:

ISC will:
1. Connect to Entra ID
2. Read all users and groups
3. Import data per Identity Profile mappings
4. Store in ISC database

Process may take depending on data size.

---

### Check Results

After aggregation completes:

In ISC > Identities > search:

Should see:
- 13 users from Contoso Entra ID
- All attributes populated (firstName, lastName, email, department, jobTitle)
- 7 groups (as accounts/entitlements)

---

### Verify Data Quality

Check a few identities:
- Names correct (Alex Lee, Morgan Chen, Casey Kim)
- Departments assigned (Finance, Engineering, Sales)
- Emails populated

If issues, go back to Module 3.4/3.5 (attribute mappings).

---

## 🧪 TASK

1. Run aggregation now
2. Wait for completion
3. Go to Identities
4. Search for "Alex" or "Morgan"
5. Verify data appears
6. Check attributes are populated

---

## ✅ SUCCESS CRITERIA

- ☑️ Aggregation completed
- ☑️ 13 users visible in ISC
- ☑️ Attributes populated
- ☑️ Data quality verified
