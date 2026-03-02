# 4.14 - Monitoring Aggregation & Correlation

**Unit:** Aggregation & Correlation | **Tier:** 1 | **Duration:** ~10 hours

---

## 🎯 Learning Objectives

- Use ISC monitoring dashboards
- Track aggregation health over time
- Understand status indicators
- Set up alerts for failures

---

## 📋 Prerequisites

Module 4.4: Run Aggregation in ISC.

---

## 📚 HANDS-ON LAB

### Connector Status Dashboard

**Navigate:** ISC Console > Sources

**Page shows:** All source connectors with status indicators

```
Connector Name              | Status | Last Aggregation  | Objects | Next Schedule
---|---|---|---|---
Contoso_Entra_ID           | 🟢 Green | 2024-03-02 2:01am | 20    | 2024-03-03 2:00am
(If Okta added later)      | 🟡 Yellow| 2024-02-28 3:45am | 50   | (Paused)
(If Oracle added)          | 🔴 Red   | Failed            | 0     | (Failed)
```

**Status indicators:**
- 🟢 **Green:** Last aggregation successful, running on schedule
- 🟡 **Yellow:** Working but issues (partial success, late schedule, slow)
- 🔴 **Red:** Failed (not aggregating, connection error, etc.)

---

### View Source Details

**Click:** "Contoso_Entra_ID" to open source page

**Page shows:**
- Source name and type
- Last aggregation: Date/time/duration
- Next aggregation: Scheduled time
- Object counts:
  ```
  Total objects: 20
  Users: 13
  Groups: 7
  ```
- Recent activity log (last 10 aggregations shown)

**Activity log shows each aggregation:**
```
Date/Time           | Type     | Status      | Duration | Objects | Errors
---|---|---|---|---|---
2024-03-02 02:01am  | Full     | SUCCESSFUL  | 45 sec   | 20      | 0
2024-03-01 02:00am  | Full     | SUCCESSFUL  | 48 sec   | 20      | 0
2024-02-28 02:01am  | Full     | SUCCESSFUL  | 52 sec   | 20      | 0
```

---

### View Aggregation Logs

**Navigate:** ISC > Administration > Logs (or Audit)

**Filter options:**
- By date range (last 24 hours, last week, custom)
- By source (Contoso_Entra_ID)
- By event type (Aggregation, Correlation, Error)
- By level (All, Errors only, Warnings)

**Example log entries:**
```
2024-03-02 02:00:01 | INFO  | [Contoso_Entra_ID] Aggregation started (Full)
2024-03-02 02:00:05 | INFO  | [Contoso_Entra_ID] Connection test: PASSED
2024-03-02 02:00:10 | INFO  | [Contoso_Entra_ID] Discovered 13 users, 7 groups
2024-03-02 02:00:45 | INFO  | [Contoso_Entra_ID] Stored 13 identities, 13 accounts
2024-03-02 02:00:46 | INFO  | [Contoso_Entra_ID] Correlation: 13 accounts matched
2024-03-02 02:00:47 | INFO  | [Contoso_Entra_ID] Aggregation completed: SUCCESSFUL
```

---

### Account Correlation Status

**Navigate:** ISC > Accounts

**View correlation status per account:**
```
Account ID              | Identity         | Correlation Status | Last Update
---|---|---|---
alex.lee@contoso.com    | Alex Lee        | CORRELATED         | 2024-03-02
morgan.chen@contoso.com | Morgan Chen     | CORRELATED         | 2024-03-02
casey.kim@contoso.com   | Casey Kim       | CORRELATED         | 2024-03-02
(13 total, all correlated)
```

**Or view by identity:** ISC > Identities > Select identity > Accounts tab

---

### Alerts and Notifications (If Configured)

**ISC can send alerts for:**
- Aggregation failed
- Aggregation took longer than expected
- Objects less than previous aggregation (potential data loss)
- Correlation failures

**Check alert settings:** ISC > Administration > Alerts or Notifications

**Configure alerts (if available):**
- Email: Send alert to admin@contoso.com when aggregation fails
- Threshold: Alert if aggregation takes > 5 minutes
- Frequency: Daily digest of all aggregation activity

---

### Create Custom Dashboard (Optional)

**ISC Analytics/Dashboard module (if available):**

**Create custom dashboard showing:**
- Last aggregation timestamp per source
- Success/failure rate (% of aggregations successful)
- Average aggregation duration
- Total objects aggregated
- Correlation success rate

**Example metrics:**
```
Aggregation Success Rate: 100% (20/20 successful)
Average Duration: 48 seconds
Total Identities: 13
Total Accounts: 13
Correlation Rate: 100% (13/13 correlated)
```

---

### Health Checks

**Periodic verification (daily or weekly):**

**Check 1: Source status green?**
```
ISC > Sources > Contoso_Entra_ID
Status should be 🟢 Green
```

**Check 2: Aggregation running on schedule?**
```
ISC > Sources > Contoso_Entra_ID > Last aggregation
Should show recent timestamp (within last 24 hours)
```

**Check 3: No error accumulation?**
```
ISC > Logs > Filter: Errors, Source: Contoso_Entra_ID, Last 24 hours
Should show 0 errors (or just expected operational warnings)
```

**Check 4: Correlation still working?**
```
ISC > Accounts
Count unlinked accounts: Should be 0
All 13 accounts should show linked identity
```

**Check 5: Data quality maintained?**
```
ISC > Identities > Sample 3 identities
Verify all attributes populated (not null)
Verify accounts linked
```

---

### Monitoring for Issues

**Warning signs to watch for:**

**Warning 1: Aggregation time increasing**
- Week 1: 45 seconds
- Week 2: 60 seconds
- Week 3: 90 seconds
- Action: Check for performance issues (Module 4.13)

**Warning 2: Intermittent failures**
- Monday: ✅ Success
- Tuesday: ❌ Failed (connection timeout)
- Wednesday: ✅ Success
- Action: Check network stability, source system health

**Warning 3: Object count decreasing**
- Week 1: 20 objects (13 users, 7 groups)
- Week 2: 18 objects (2 users deleted)
- Action: Verify if deletions intentional, or corruption

**Warning 4: Correlation failures after successful aggregation**
- Aggregation: ✅ Successful (13 accounts stored)
- Correlation: ❌ 0 accounts correlated
- Action: Check correlation rule (Module 4.12)

---

## 🧪 EXPECTED RESULTS

**Healthy monitoring state:**

✅ Source status: Green
✅ Last aggregation: Recent (within 24 hours)
✅ Aggregation success rate: 100%
✅ Correlation rate: 100% (all accounts linked)
✅ Error logs: Empty (no errors)
✅ Alerts: None (all systems healthy)

---

## 🎓 CERTIFICATION

**Q:** Where would you check the aggregation duration and count of objects processed?

A) ISC > Identities menu
B) ISC > Administration > Settings
C) ✅ ISC > Sources > Select source > View last aggregation details
D) ISC > Governance menu

**Answer: C.** Sources dashboard shows status, last aggregation time, duration, object counts.

**Q:** If aggregation status shows 🟡 Yellow instead of 🟢 Green, what might this indicate?

A) Everything is fine
B) ✅ Last aggregation successful but with warnings or delayed
C) Aggregation failed completely
D) Correlation incomplete

**Answer: B.** Yellow = working but not optimal. Could be slow, partial success, or warnings. Green = fully healthy.

---

## 📚 RESOURCES

- [Module 4.4: Run Aggregation in ISC](/modules/4.4-run-aggregation-in-isc)
- [Module 4.13: Aggregation Performance & Optimization](/modules/4.13-aggregation-performance-optimization)
- [Module 4.11: Troubleshooting Aggregation Issues](/modules/4.11-troubleshooting-aggregation-issues)

---

## ✅ NEXT STEPS

1. Check source dashboard regularly
2. Set up alerts if available
3. Monitor logs for issues
4. Proceed to Module 4.15 (Data Reconciliation)

