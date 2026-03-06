# 4.11 - Troubleshooting Aggregation Issues

**Unit:** Aggregation & Correlation | **Tier:** 2 | 

---

## 🎯 Learning Objectives

- Diagnose aggregation failures
- Fix common aggregation errors
- Read aggregation logs
- Verify data quality

---

## 📋 Prerequisites

Module 4.4: Run Aggregation in ISC.

---

## 📚 CORE CONCEPTS

### Aggregation Status States

**SUCCESSFUL (Green):** Data read and stored completely.
**FAILED (Red):** Aggregation did not complete, error occurred.
**IN_PROGRESS (Yellow):** Still running, don't interrupt.
**PARTIAL_SUCCESS (Orange):** Some data read, some failed.

---

### Common Issues and Fixes

### ISSUE 1: Aggregation Never Completes (Stuck IN_PROGRESS)

**Symptoms:**
- Status shows "IN_PROGRESS" for 30+ minutes
- No error message
- Page doesn't auto-update

**Causes:**
1. Network timeout (connector can't reach Entra ID)
2. Large dataset (reading thousands of users takes time)
3. ISC server issue (out of memory, disk full)
4. Connector process crashed

**Diagnosis:**

**Step 1:** Check ISC Logs
```
Navigate: ISC > Administration > Logs
Filter: Source = "Contoso_Entra_ID"
Look for: Errors, timeout messages, stack traces
```

**Step 2:** Check source connectivity
```
Navigate: ISC > Sources > Contoso_Entra_ID
Click: "Test Connection"
Result: "Connection successful" (green) or "Connection failed" (red)
```

**Step 3:** Check Entra ID status
```
- Log in to Azure Portal
- Check Entra ID > Health status
- Verify Microsoft Graph API is healthy
- Check if there are service incidents
```

**Fixes:**
- If network issue: Check firewall, ISC outbound connectivity
- If timeout: Increase connector timeout (Administration > Connector settings)
- If ISC server issue: Restart ISC server (requires admin)
- Retry aggregation after waiting 

---

### ISSUE 2: "Connection Failed" or "Authentication Error"

**Symptoms:**
```
Status: FAILED
Error: "Authentication failed: Invalid credentials"
```

**Causes:**
1. Credentials expired (client secret, token)
2. App registration deleted or misconfigured
3. Permissions revoked (admin didn't grant consent)
4. Tenant ID or App ID wrong

**Diagnosis:**

**Step 1:** Verify credentials in ISC
```
Navigate: ISC > Sources > Contoso_Entra_ID > Edit
Check:
 - Tenant ID: Filled, correct format (UUID)
 - App ID: Filled, correct format (UUID)
 - Client Secret: Shows "****" (not actually shown, just indicator saved)
```

**Step 2:** Verify credentials in Azure
```
1. Log in to Azure Portal
2. Entra ID > App registrations > "ISC_Test_App"
3. Check: "Authentication" page
 - Redirect URI filled
 - Client secret exists and not expired
4. Check: "API permissions" page
 - User.Read.All ✅
 - Group.Read.All ✅
 - Directory.Read.All ✅
 - "Grant admin consent" shown as GRANTED
```

**Step 3:** Regenerate client secret (if expired)
```
Azure Portal > App registrations > ISC_Test_App > Certificates & secrets
1. Click "New client secret"
2. Copy new value
3. Go back to ISC > Sources > Contoso_Entra_ID > Edit
4. Update Client Secret field
5. Save
6. Retry aggregation
```

**Fixes:**
- Regenerate client secret (Module 2.8)
- Verify app registration still exists
- Verify admin consent granted
- Check tenant ID and app ID match Azure

---

### ISSUE 3: "Invalid Attribute in Mapping"

**Symptoms:**
```
Status: FAILED
Error: "Attribute 'givenName' not found in Entra ID response"
```

**Cause:** Account mapping references attribute that doesn't exist in source.

**Diagnosis:**

**Step 1:** Check what attributes Entra ID actually returns
```
ISC > Sources > Contoso_Entra_ID
Click: "Test Attribute Mapping" (if available)
Or: Run aggregation in debug mode (if available)
```

**Step 2:** Check Entra ID user object
```
Azure Portal > Entra ID > Users > Select a user (e.g., Alex Lee)
View: Profile tab shows attributes
Common attributes:
 - givenName (first name)
 - surname (last name)
 - mail (email)
 - department
 - jobTitle
 - manager
```

**Step 3:** Check ISC mapping configuration
```
ISC > Sources > Contoso_Entra_ID
Check account mapping:
 givenName → firstName (correct)
 surname → lastName (correct)
 mail → email (correct)
 (Any others mapped?)
```

**Fixes:**
- If attribute name wrong: Correct mapping (Module 3.11)
- If attribute missing from users: Add to Entra ID user profiles (Module 2.3-2.4)
- Run aggregation again after fixing

---

### ISSUE 4: "Some Accounts Skipped" or Partial Aggregation

**Symptoms:**
```
Status: SUCCESSFUL
Accounts read: 10 / 13
Warning: "3 accounts could not be aggregated"
```

**Cause:** Some users in Entra ID don't have required attributes.

**Example:** Attribute mapping requires "email" (not null). 3 users have no email.

**Diagnosis:**

**Step 1:** Check Entra ID for missing attributes
```
Azure Portal > Entra ID > Users
For each user, verify:
 ✅ firstName (givenName) exists
 ✅ lastName (surname) exists
 ✅ Email exists
 ✅ Department exists
 ✅ JobTitle exists
```

**Step 2:** Check aggregation error log
```
ISC > Administration > Logs > Filter: Aggregation errors
Shows which users failed and why
Example: "User 'casey.kim' skipped: email attribute missing"
```

**Fixes:**
- Add missing attributes to users in Entra ID (Module 2.3)
- Or: Make attributes optional in mapping (if allowed)
- Run aggregation again

---

### ISSUE 5: 0 Accounts Aggregated (Nothing Imported)

**Symptoms:**
```
Status: SUCCESSFUL
Accounts read: 0 / 13
Groups read: 0 / 7
```

**Cause:** Account mapping not configured, or filter is too restrictive.

**Diagnosis:**

**Step 1:** Check account mapping exists
```
ISC > Sources > Contoso_Entra_ID
Click: "Account mapping" tab
Expected: Should show what object types to read (Users, Groups)
```

**Step 2:** Check for filter conditions
```
Account mapping configuration:
Look for "Filter" or "Scope" settings
If set to "Department = Finance", but connector is reading all dept
```

**Step 3:** Check ISC Search
```
ISC > Identities menu
Count how many identities shown
If 0: Nothing was aggregated
If 13: Aggregation worked, log message was wrong
```

**Fixes:**
- Verify account mapping configured (Module 3.11)
- Remove or adjust filters
- Make sure "Apply mapping" is enabled
- Run full aggregation (not partial)

---

### ISSUE 6: Attributes Are Null or Empty

**Symptoms:**
```
Identity "Alex Lee" shows:
 firstName: (blank)
 lastName: (blank)
 email: (blank)
 department: (blank)
```

**Cause:** Attribute mapping didn't populate, or source data missing.

**Diagnosis:**

**Step 1:** Check source data
```
Azure Portal > Entra ID > Users > Alex Lee > Profile
Verify attributes exist: givenName, surname, mail, department, jobTitle
```

**Step 2:** Check attribute mapping configuration
```
ISC > Sources > Contoso_Entra_ID > Attribute mapping
View mapping rules (Module 3.4-3.5)
Example: "givenName → firstName" should be defined
```

**Step 3:** Check identity profile schema
```
ISC > Administration > Identity Profiles > Contoso_Entra_Profile
Verify 8 attributes defined with correct names:
 - firstName
 - lastName
 - email
 - department
 - jobTitle
 - manager
 - hireDate
 - location
```

**Fixes:**
- Add attributes to Entra ID users (Module 2.3)
- Verify attribute mapping configured (Module 3.4)
- Verify identity profile schema correct (Module 3.3)
- Re-run aggregation

---

### ISSUE 7: Groups Not Aggregated

**Symptoms:**
```
Status: SUCCESSFUL
Accounts read: 13 (users)
Groups read: 0
```

**Cause:** Group mapping not configured.

**Diagnosis:**

**Step 1:** Check group aggregation in account mapping
```
ISC > Sources > Contoso_Entra_ID > Account mapping
Look for "Groups" section or "Objects to aggregate"
Expected: Should include both Users and Groups
```

**Step 2:** Check Entra ID has groups
```
Azure Portal > Entra ID > Groups
Should see 7 groups: Engineering_Department, Finance_Department, etc.
```

**Fixes:**
- Add group mapping to connector (Module 3.11)
- Run aggregation again

---

## 🧠 KEY TAKEAWAYS

- Check logs first (ISC > Logs, filter by source)
- Test connection (diagnose auth issues quickly)
- Verify source data exists (don't assume)
- Check mapping configuration (attribute mapping, account mapping)
- Partial success = data quality issue, not config issue

---

## 🧪 TASK

1. Review each issue scenario
2. Know diagnosis steps for each
3. Know how to read aggregation logs
4. Practice fixing one issue type

---

## ✅ SUCCESS CRITERIA

- ☑️ Understand common aggregation failures
- ☑️ Know how to diagnose using logs
- ☑️ Know how to verify source connectivity
- ☑️ Ready to fix issues if they occur

---

## 🎓 CERTIFICATION

**Q:** If aggregation status shows "FAILED" with "Authentication failed", what is the first thing to check?

A) Entra ID user count
B) ✅ ISC > Sources > Test Connection to verify credentials
C) Identity Profile schema
D) Aggregation logs for timestamp

**Answer: B.** Test Connection quickly checks if credentials valid. If that passes, issue is elsewhere. If it fails, credentials problem confirmed.

**Q:** If aggregation completes successfully but all attributes show as null/blank, what is the most likely cause?

A) Aggregation didn't actually run
B) ✅ Attribute mapping not configured correctly
C) All users deleted from Entra ID
D) ISC server out of memory

**Answer: B.** Successful aggregation means data was read and stored. Blank attributes mean mapping rules didn't populate them. Check Module 3.4 (attribute mapping).

---

## 📚 RESOURCES

- [Module 4.4: Run Aggregation in ISC](/modules/4.4-run-aggregation-in-isc)
- [Module 3.4: Attribute Mapping Basics](/modules/3.4-attribute-mapping-basics)
- [Module 3.11: Configure Entra ID Connector - Account Mapping](/modules/3.11-configure-entra-id-connector-part-2)
- [Module 2.8: Generate Client Secret](/modules/2.8-generate-client-secret)

---

## ✅ NEXT STEPS

If aggregation issues exist, use this module to diagnose. Once resolved:
1. Verify aggregation succeeds
2. Check all 13 users and 7 groups imported
3. Proceed to Module 4.12 (Troubleshooting Correlation Issues)

