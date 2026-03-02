# 3.9 - Entra ID Connector Basics

**Unit:** Identity Profiles & Sources | **Tier:** 1 | **Duration:** ~10 hours

---

## 🎯 Learning Objectives

- Understand Entra ID Connector
- Know capabilities and limitations
- Understand authentication requirements

---

## 📋 Prerequisites

Module 3.8: Connector Architecture. Unit 2.7-2.8 (Entra ID app + client secret).

---

## 📚 CORE CONCEPTS

### What It Does

**Reads from Entra ID:**
- Users (with attributes)
- Groups (with members)
- Group memberships

**Writes to Entra ID:**
- Create/update/delete users (limited)
- Create/update/delete groups
- Add/remove group members

---

### Authentication

Uses OAuth with Azure:
- Tenant ID (from Unit 2.6)
- Application ID (from Unit 2.6)
- Client Secret (from Unit 2.8)

Connector authenticates to Entra ID and reads/writes data.

---

### For Contoso

Configure Entra ID Connector with credentials from Unit 2:
- Tenant ID
- App ID
- Client Secret

Connector will read 13 users and 7 groups from Contoso Entra ID.

---

## 🧠 KEY TAKEAWAYS

- **Entra ID Connector** = specialized for Azure
- **Reads users, groups, memberships**
- **Writes groups and memberships**
- **Uses OAuth for authentication**
- **Needs credentials from Unit 2**

---

## ✅ SUCCESS CRITERIA

- ☑️ Understand Entra ID Connector capabilities
- ☑️ Know authentication method
- ☑️ Have Unit 2 credentials ready
