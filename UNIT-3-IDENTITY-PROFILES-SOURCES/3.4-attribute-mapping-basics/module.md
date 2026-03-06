# 3.4 - Attribute Mapping Basics

**Unit:** Identity Profiles & Sources | **Tier:** 1 | 

---

## 🎯 Learning Objectives

- Map Entra ID attributes to ISC
- Understand mapping syntax
- Test mappings

---

## 📋 Prerequisites

Module 3.3: Create First Identity Profile.

---

## 📚 HANDS-ON LAB

### Map Attributes

In Contoso_Entra_Profile > Attribute Mappings:

Map each ISC attribute to Entra ID attribute:

| ISC Attribute | Source (Entra ID) | Mapping |
|---|---|---|
| firstName | givenName | Direct |
| lastName | surname | Direct |
| email | mail | Direct |
| department | department | Direct |
| jobTitle | jobTitle | Direct |
| manager | manager | Direct (reference) |
| hireDate | (not available) | Static or calculated |
| location | officeLocation | Direct |

**Direct mapping** = ISC attribute directly pulls from source attribute (no transformation).

### Save Mappings

Click Save after configuring all mappings.

---

## 🧪 TASK

1. Go to Contoso_Entra_Profile > Attribute Mappings
2. Map each attribute as above
3. Save mappings
4. Verify all show in list

---

## ✅ SUCCESS CRITERIA

- ☑️ All 8 attributes mapped
- ☑️ Mappings saved
- ☑️ All show in mapping list
