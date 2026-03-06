# 4.16 - Aggregation Scheduling & Automation

**Unit:** Aggregation & Correlation | **Tier:** 1 | 

---

## 🎯 Learning Objectives

- Set up aggregation schedules
- Understand scheduling strategies
- Configure automation for correlation
- Monitor scheduled executions

---

## 📋 Prerequisites

Module 4.4: Run Aggregation in ISC (aggregation working).

---

## 📚 HANDS-ON LAB

### Access Aggregation Scheduler

**Navigate:** ISC Console > Administration > Scheduler (or Sources > Contoso_Entra_ID > Schedule)

**Or:** ISC > Sources > Select "Contoso_Entra_ID" > Click "Edit" → Find "Schedule" section

---

### Set Up Aggregation Schedule

**Step 1: Enable Scheduling**

**Checkbox:** "Enable aggregation schedule" or "Enable scheduled aggregation"
**Check this box**

---

**Step 2: Configure Schedule**

**Options appear for:**

**Frequency:**
- One-time (run once)
- Recurring (daily, weekly, monthly)

**For Contoso, select:** Recurring - Daily

---

**Step 3: Set Time**

**Time field:**
- Hour: 02 (2 AM)
- Minute: 00
- Timezone: UTC or your preferred timezone

**Why 2 AM?** Off-peak, users not working, source system has capacity

---

**Step 4: Choose Aggregation Type**

**Radio buttons:**
- Full aggregation (all data)
- Partial aggregation (changes only)

**For Contoso daily:** Select "Full aggregation"

---

**Step 5: Set Additional Options**

**Options (if available):**
- Correlation after aggregation: CHECK this (auto-correlate after importing)
- Reconciliation after aggregation: CHECK this (verify data quality)
- Send notifications: CHECK this (email on success/failure)

---

**Step 6: Save Schedule**

**Click:** "Save Schedule" or "Apply"

**Result:** Schedule created

```
Aggregation Schedule: Contoso_Entra_ID
Frequency: Daily
Time: 02:00 UTC
Type: Full aggregation
Auto-correlate: Enabled
Status: ACTIVE
Next run: 2024-03-03 02:00 UTC
```

---

### View Scheduled Executions

**Navigate:** ISC > Sources > Contoso_Entra_ID > Execution History

**Shows:**
```
Scheduled Run Date/Time       | Status      | Objects | Next Run
---|---|---|---|---
2024-03-02 02:00 UTC          | SUCCESSFUL  | 47 sec   | 20      | 2024-03-03
2024-03-01 02:00 UTC          | SUCCESSFUL  | 45 sec   | 20      | 2024-03-02
2024-02-28 02:01 UTC          | SUCCESSFUL  | 52 sec   | 20      | 2024-03-01
```

---

### Modify Existing Schedule

**Navigate:** ISC > Sources > Contoso_Entra_ID > Schedule section

**Click:** "Edit Schedule" button

**Make changes:**
- Change time from 02:00 to 03:00
- Change frequency from Daily to Every 6 hours
- Enable/disable auto-correlation
- Enable/disable notifications

**Click:** "Save"

---

### Disable Schedule (Pause Aggregation)

**Navigate:** Schedule section

**Option 1:** Uncheck "Enable aggregation schedule" → Pauses indefinitely
**Option 2:** Set schedule to "One-time" with future date → Runs once then stops
**Option 3:** Click "Disable" button if available

**When to disable:**
- Troubleshooting issues (don't want auto-aggregation interfering)
- Source system maintenance (source temporarily unavailable)
- ISC maintenance (ISC down temporarily)

---

### Recommended Schedules

**Strategy 1: Daily Full Aggregation**

```
Frequency: Daily
Time: 02:00 AM (off-peak)
Type: Full aggregation
Auto-correlate: Yes
Next auto-provision run: 04:00 AM (after aggregation/correlation complete)

Result: Fresh data daily, correlation immediate, consistency high
Pros: Simple, reliable
Cons: Slow (reads all data), low frequency (changes discovered only daily)
```

---

**Strategy 2: Hybrid (Daily Partial + Weekly Full)**

```
Schedule 1 - Daily Partial:
  Frequency: Daily, 02:00 AM
  Type: Partial aggregation
  Speed: Fast, catches daily changes

Schedule 2 - Weekly Full:
  Frequency: Weekly (Monday)
  Type: Full aggregation
  Time: 00:00 AM
  Speed: Slow but consistent, catches any deletions

Result: Weekly reset + daily updates, best of both
Pros: Good balance of speed and accuracy
Cons: More complex, more storage operations
```

---

**Strategy 3: High-Frequency (Every 6 Hours)**

```
Frequency: Every 6 hours (every 4, 6, 8, 12 hours)
Times: 00:00, 06:00, 12:00, 18:00
Type: Partial aggregation (not full, too intensive)

Result: Changes discovered 4x per day
Pros: Current data, fast
Cons: Heavy load on source, ISC server
Best for: Critical systems that change frequently, large organization
```

---

### Automation Beyond Aggregation

**ISC automation rules (if available):**

**Rule 1:** "After aggregation succeeds, run correlation"
```
Trigger: Aggregation complete successfully
Action: Run correlation rules
Result: Accounts auto-linked right after import
```

**Rule 2:** "After aggregation succeeds, send email"
```
Trigger: Aggregation complete
Condition: Success
Action: Email admin@contoso.com: "Aggregation successful: 20 objects, 0 errors"
Result: Automated monitoring
```

**Rule 3:** "After aggregation fails, create alert"
```
Trigger: Aggregation fails
Action: Create alert in ISC, email admin, notify in Slack
Result: Rapid failure response
```

---

### For Contoso Test Environment

**Recommended setup:**
```
Frequency: Daily
Time: 02:00 UTC
Type: Full aggregation
Auto-correlate: Yes
Keep active for testing and learning
```

**Later, for production:**
- Could change to multiple schedules (daily partial + weekly full)
- Adjust time based on organizational needs
- Add notifications/alerts

---

## 🧪 EXPECTED RESULTS

**After schedule configured:**

✅ Schedule active and showing next run time
✅ Previous scheduled runs shown in execution history
✅ Next run will execute automatically at configured time
✅ Auto-correlation runs after aggregation
✅ Email notifications sent (if enabled)

---

## 🎓 CERTIFICATION

**Q:** When should aggregation be scheduled to run?

A) During business hours (9 AM - 5 PM)
B) ✅ Off-peak hours (nights, weekends)
C) Random times
D) Only on demand (never scheduled)

**Answer: B.** Off-peak minimizes user impact and source system load. Nights/weekends recommended.

**Q:** What is the difference between a daily full schedule and daily partial schedule?

A) No difference, they're identical
B) Full is faster
C) ✅ Full reads all data (slower), partial reads changes only (faster)
D) Partial is full after filtering

**Answer: C.** Full = all objects, slower. Partial = changes since last run, faster. Use partial for frequent updates, full for consistency.

---

## 📚 RESOURCES

- [Module 4.4: Run Aggregation in ISC](/modules/4.4-run-aggregation-in-isc)
- [Module 4.3: Types of Aggregation](/modules/4.3-types-of-aggregation)
- [Module 4.13: Aggregation Performance & Optimization](/modules/4.13-aggregation-performance-optimization)

---

## ✅ NEXT STEPS

After schedule configured:
1. Verify schedule is active
2. Check execution history to confirm it ran
3. Proceed to Module 4.17 (Best Practices)

