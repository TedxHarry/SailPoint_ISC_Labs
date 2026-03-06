# 3.11 - Configure Entra ID Connector (Part 2)

**Unit:** Identity Profiles & Sources | **Tier:** 1 | 

---

## 🎯 Learning Objectives

- Configure account mapping
- Set up object types (users, groups)
- Prepare for aggregation

---

## 📋 Prerequisites

Module 3.10: Configure Entra ID Connector (Part 1).

---

## 📚 HANDS-ON LAB

### Account Mapping

In Contoso_Entra_ID connector > Account Mapping:

**Map objects to read:**
- [ ] Users (with attributes: givenName, surname, mail, department, jobTitle, manager)
- [ ] Groups (with attributes: displayName, members)

**Attribute Mapping:**
- Entra ID attributes should map to ISC attributes per Identity Profile (Module 3.3)

---

### Account Groups

Define which objects represent accounts:
- **User object** = identity + account (Entra ID user is both)
- **Group object** = entitlement/group

---

### Save Configuration

Save all mappings and settings.

---

## 🧪 TASK

1. In connector > go to Account Mapping
2. Select Users object to read
3. Select Groups object to read
4. Verify attributes listed
5. Save configuration

---

## ✅ SUCCESS CRITERIA

- ☑️ Users object configured
- ☑️ Groups object configured
- ☑️ Attributes mapped
- ☑️ Ready for aggregation
