# 2.3 - Create Entra ID Test Users (Part 1)

**Unit:** Entra ID Setup & ISC Sandbox | **Tier:** 1 | **Duration:** ~10 hours

---

## 🎯 Learning Objectives

- Create users in Entra ID
- Set user attributes (name, email, department, job title)
- Assign temporary passwords
- Understand user lifecycle

---

## 📋 Prerequisites

Module 2.2: Navigate Azure Portal.

---

## 📚 HANDS-ON LAB

### Create 3 Core Test Users

In Entra ID admin center > Users:

**User 1: Alex Lee (Finance Manager)**
- First name: Alex
- Last name: Lee
- User principal name: alex.lee@[your-tenant].onmicrosoft.com
- Display name: Alex Lee
- Password: Generate (note temporary password)
- Properties > Job Title: Finance Manager
- Properties > Department: Finance
- Properties > Manager: (leave blank for now)

**User 2: Morgan Chen (Senior Accountant)**
- First name: Morgan
- Last name: Chen
- User principal name: morgan.chen@[your-tenant].onmicrosoft.com
- Display name: Morgan Chen
- Password: Generate
- Properties > Job Title: Senior Accountant
- Properties > Department: Finance
- Properties > Manager: Alex Lee

**User 3: Casey Kim (AP Clerk)**
- First name: Casey
- Last name: Kim
- User principal name: casey.kim@[your-tenant].onmicrosoft.com
- Display name: Casey Kim
- Password: Generate
- Properties > Job Title: AP Clerk
- Properties > Department: Finance
- Properties > Manager: Alex Lee

### Document Credentials

Save the three users' temporary passwords in secure location. Note: Tenants vary; record your actual tenant domain.

---

## 🧪 TASK

1. Create all 3 users
2. Verify they appear in Users list
3. Check attributes are saved correctly
4. Document passwords securely

---

## ✅ SUCCESS CRITERIA

- ☑️ 3 users created
- ☑️ All attributes set
- ☑️ Users appear in list
- ☑️ Passwords documented
