# 3.16 - Troubleshooting Connector Issues

**Unit:** Identity Profiles & Sources | **Tier:** 1 | 

---

## 🎯 Learning Objectives

- Troubleshoot common connector problems
- Diagnose connection issues
- Fix data flow problems

---

## 📋 Prerequisites

Module 3.15: Connector Best Practices.

---

## 📚 CORE CONCEPTS

### Common Issues & Solutions

| Issue | Cause | Solution |
|---|---|---|
| **Connection Failed (Red Status)** | Invalid credentials, expired token, network issue | Verify Tenant ID, App ID, Client Secret. Regenerate secret if needed. Check network connectivity. |
| **No Data Imported** | Wrong object types selected, mapping errors | Verify Users/Groups objects are configured. Check mappings (Module 3.4). |
| **Partial Data** | Connector permissions insufficient | Check Entra ID has all users/groups. Verify Microsoft Graph permissions (User.Read.All, Group.Read.All, Directory.Read.All). |
| **Slow Aggregation** | Large data volume, network issues, frequent polling | Reduce polling frequency, increase timeout, upgrade network. |
| **Data Mismatches** | Attribute mapping errors, transformation failures | Review mappings, test transformations, check source system data quality. |

---

### Diagnostic Steps

1. **Check status:** Is it green, yellow, or red?
2. **View logs:** What errors are shown?
3. **Test connection:** Does "Test Connection" pass?
4. **Verify credentials:** Are Tenant ID, App ID, Secret correct?
5. **Check permissions:** Does app have required Microsoft Graph permissions?
6. **Test aggregation:** Does "Aggregate Now" complete?
7. **View results:** Do identities appear in ISC?

---

## 🧪 TASK

If connector has issues:
1. Check status and logs
2. Follow diagnostic steps
3. Fix root cause
4. Re-test connection
5. Run aggregation again
6. Verify data appears

---

## ✅ SUCCESS CRITERIA

- ☑️ Understand common issues
- ☑️ Know diagnostic process
- ☑️ Can fix connection problems
