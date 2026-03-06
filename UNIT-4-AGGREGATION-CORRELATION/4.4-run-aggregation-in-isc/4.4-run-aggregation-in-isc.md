# 4.4 - Run Aggregation in ISC

**Unit:** Aggregation & Correlation | **Tier:** 1 | 

---

## 🎯 Learning Objectives

- Execute full aggregation in ISC
- Monitor aggregation progress
- Understand aggregation status and errors
- Verify aggregated data was imported

---

## 📋 Prerequisites

Module 3.12: Test Entra ID Connector (connection must be working).

---

## 📚 HANDS-ON LAB

### Pre-Aggregation Checklist

Before running aggregation, verify:
- [ ] Connector connection test passes (Module 3.10)
- [ ] Account mapping configured (Module 3.11)
- [ ] ISC admin user created and logged in (Module 2.14)
- [ ] Entra ID has 13 test users (Module 2.3-2.4)
- [ ] Identity Profile created with 8 attributes (Module 3.3)
- [ ] ISC Sources menu accessible (Administration > Sources)

---

### TASK 1: Access Sources in ISC

**Where:** ISC Console > Administration menu (left sidebar) > Sources

**Expected:** You see "Contoso_Entra_ID" source listed.

**Status:** Connector should show green indicator (healthy connection).

**If not visible:**
- Go back to Module 3.10, verify connection saved
- Refresh page (F5)
- Check connection status

---

### TASK 2: Run Full Aggregation

**Click:** "Contoso_Entra_ID" source name to open

**New page shows:**
- Source name: Contoso_Entra_ID
- Connector type: Entra ID
- Last aggregation: (shows timestamp if previous, or "Never")
- Status indicators
- Action buttons

**Find and Click:** "Aggregate" or "Perform Aggregation" button

**Dialog appears asking:** "Full or Partial Aggregation?"

**Select:** Full Aggregation (first time running)

**Click:** "Start" or "Aggregate Now"

---

### TASK 3: Monitor Aggregation Progress

**ISC shows aggregation status:**
```
Status: IN PROGRESS
Objects read: 5 / 13 users
Accounts created: 5
Entitlements read: 0 / 7
Errors: 0
```

**Aggregation runs in background.** Usually occurs to for 13 users.

**Page auto-refreshes** or you can refresh manually (F5).

**Expected 
- 0-10 sec: Discovery (connector lists all users, groups)
- 10-60 sec: Storage (reads detailed attributes)
- 60-120 sec: Complete (logs generated)

---

### TASK 4: Verify Aggregation Complete

**Status changes to:** "SUCCESSFUL" (green)

**Shows final counts:**
```
Aggregation completed successfully
Total identities aggregated: 13
Total accounts created: 13
Groups aggregated: 7
Errors: 0
Last aggregation: [Today] [Current Time]
```

**If errors exist:** See Module 4.11 (Troubleshooting Aggregation Issues)

---

### TASK 5: View Aggregated Data

**Navigate:** ISC Console > Identities menu (left sidebar)

**Page shows:** List of all 13 identities imported from Entra ID
```
1. Alex Lee (alex.lee@contoso.com)
2. Morgan Chen (morgan.chen@contoso.com)
3. Casey Kim (casey.kim@contoso.com)
... (10 more users)
```

**Click on one identity (example: Alex Lee):**

**Identity details show:**
- firstName: Alex
- lastName: Lee
- email: alex.lee@contoso.com
- department: Engineering
- jobTitle: Senior Engineer
- manager: (name or ID of manager)
- hireDate: (date from Entra ID)
- location: (location from Entra ID)

**Accounts section shows:**
```
Accounts:
- alex.lee@contoso.com (Entra ID) - Source: Contoso_Entra_ID - Status: Active
```

**Groups shows:**
```
Groups:
- Engineering_Department
- All_Employees
```

---

## 🧪 EXPECTED RESULTS

**After successful aggregation:**

✅ 13 Identities visible in ISC > Identities
✅ All 8 attributes populated (firstName, lastName, email, department, jobTitle, manager, hireDate, location)
✅ Each identity has 1 account (from Entra ID)
✅ 7 groups visible as resource accounts
✅ Source status shows "Green" (healthy)
✅ No errors in aggregation log

**If any missing:** Check account mapping (Module 3.11) or attribute mapping (Module 3.4-3.5)

---

## 🧠 VALIDATION CHECKLIST

After aggregation completes, verify:

| Item | Expected | Status |
|------|----------|--------|
| Aggregation status | SUCCESSFUL (green) | ☐ |
| Total identities | 13 | ☐ |
| Total accounts | 13 | ☐ |
| Total groups | 7 | ☐ |
| Errors | 0 | ☐ |
| Alex Lee visible | ✅ | ☐ |
| Morgan Chen visible | ✅ | ☐ |
| Casey Kim visible | ✅ | ☐ |
| All attributes populated | ✅ | ☐ |
| Groups assigned to users | ✅ | ☐ |
| Timestamp recorded | [Date/Time] | ☐ |

---

## 🔧 TROUBLESHOOTING

**Issue: Aggregation starts but never completes (stuck IN PROGRESS)**
- Check ISC server logs (Administration > Logs)
- Verify Entra ID credentials still valid (token may have expired)
- Check network connectivity
- Restart aggregation

**Issue: Status shows "FAILED" with errors**
- Read error message carefully (see Module 4.11)
- Common: "Invalid credentials" → re-verify Module 3.10
- Common: "Attribute missing in mapping" → check Module 3.11
- Common: "Connection timeout" → source system unresponsive

**Issue: Only 5 users show instead of 13**
- Check if partial aggregation ran (should be full)
- Check Entra ID for actual user count (Module 2.3)
- Check account mapping for filter conditions (Module 3.11)
- Run full aggregation again

**Issue: Attributes blank (firstName = null, email = null)**
- Account mapping incomplete (Module 3.11)
- Entra ID user doesn't have attribute (e.g., no department set)
- Attribute name mismatch in mapping
- See Module 3.4-3.5 for mapping verification

---

## 🎓 CERTIFICATION

**Q:** After successful aggregation of Entra ID connector, where do you view the imported identities?

A) Connectors menu
B) ✅ Identities menu
C) Sources menu
D) Accounts menu

**Answer: B.** Aggregation imports data. Identities menu shows all identities (persons). Accounts menu shows accounts (logins).

**Q:** If aggregation shows "SUCCESSFUL" but only 5 users display instead of 13, what is the most likely issue?

A) Partial aggregation (not full)
B) Entra ID deleted 8 users
C) ✅ Account mapping filter is limiting results
D) ISC is storing data in cache

**Answer: A or C.** If showing fewer than expected: check if partial (only reads recent changes), or if mapping has filter conditions limiting scope.

---

## 📚 RESOURCES

- [Module 3.10: Configure Entra ID Connector - Connection](/modules/3.10-configure-entra-id-connector-part-1)
- [Module 3.11: Configure Entra ID Connector - Account Mapping](/modules/3.11-configure-entra-id-connector-part-2)
- [Module 3.12: Test Entra ID Connector](/modules/3.12-test-entra-id-connector)
- [Module 4.11: Troubleshooting Aggregation Issues](/modules/4.11-troubleshooting-aggregation-issues)

---

## ✅ NEXT STEPS

After aggregation completes successfully:
1. Verify 13 users and 7 groups visible (Task 5)
2. Check all attributes populated
3. Proceed to Module 4.5 (Viewing Aggregated Data in detail)

