# 3.10 - Configure Entra ID Connector (Part 1)

**Unit:** Identity Profiles & Sources | **Tier:** 1 | 

---

## 🎯 Learning Objectives

- Add Entra ID connector to ISC
- Configure authentication
- Set up connection settings

---

## 📋 Prerequisites

Module 3.9: Entra ID Connector Basics. Unit 2.9 credentials (Tenant ID, App ID, Client Secret).

---

## 📚 HANDS-ON LAB

### Add Connector

In ISC > Administration > Sources > Add Source:

**Source Type:** Microsoft Entra ID

**Connection Settings:**
- Name: Contoso_Entra_ID
- Tenant ID: [from Unit 2]
- Application ID (Client ID): [from Unit 2]
- Client Secret: [from Unit 2]

**Advanced:**
- Polling Frequency: Daily (or real-time if available)
- Description: Contoso Entra ID source connector

### Save Connection

Click Test Connection. Should succeed (means credentials valid).

Then Save.

---

## 🧪 TASK

1. Navigate to Administration > Sources
2. Add new source (Entra ID type)
3. Enter connection settings from Unit 2
4. Test connection (should pass)
5. Save

---

## ✅ SUCCESS CRITERIA

- ☑️ Connector created
- ☑️ Connection test passes
- ☑️ Credentials valid
