# 2.7 - Grant Microsoft Graph API Permissions

**Unit:** Entra ID Setup & ISC Sandbox | **Tier:** 1 | 

---

## 🎯 Learning Objectives

- Grant API permissions to ISC_Test_App
- Understand Microsoft Graph API
- Give ISC read access to users, groups, directory

---

## 📋 Prerequisites

Module 2.6: Register ISC Application.

---

## 📚 HANDS-ON LAB

### Grant Permissions

In ISC_Test_App > API permissions > Add a permission:

**Select Microsoft Graph:**

**Add these permissions:**

1. User.Read.All (Delegated)
2. Group.Read.All (Delegated)
3. Directory.Read.All (Delegated)

**Grant admin consent:**

After adding, click "Grant admin consent for [tenant]"

### Why These Permissions?

- **User.Read.All:** ISC can read all Entra ID users
- **Group.Read.All:** ISC can read all groups
- **Directory.Read.All:** ISC can read directory data

Without these, ISC connector to Entra ID won't work.

---

## 🧪 TASK

1. Go to ISC_Test_App > API permissions
2. Add Microsoft Graph permissions (3 above)
3. Grant admin consent
4. Verify all show "Granted for [tenant]"

---

## ✅ SUCCESS CRITERIA

- ☑️ 3 permissions granted
- ☑️ Admin consent given
- ☑️ All show green checkmark (granted)
