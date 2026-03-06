# 2.1 - Entra ID Free Tier Overview

**Unit:** Entra ID Setup & ISC Sandbox | **Tier:** 1 | 

---

## 🎯 Learning Objectives

- Understand what Entra ID Free provides
- Know limitations of Free tier (vs Premium)
- Understand what you CAN and CANNOT do with Free
- Know what Contoso setup requires
- Understand licensing and upgrade path

---

## 📋 Prerequisites

Module 1.1: What is Identity Management? Basic understanding of cloud services.

---

## 📚 CORE CONCEPTS

### Entra ID Free vs Premium

**Entra ID Free** (included with Microsoft 365)

What you get:
- Up to 500,000 objects (users, groups, devices)
- Basic user and group management
- Self-service password reset (SSPR)
- Basic app gallery (thousands of pre-integrated apps)
- Basic conditional access (limited rules)
- User/admin MFA setup
- Basic sign-in logs

What you DON'T get:
- Advanced conditional access
- Privileged identity management (PIM)
- Identity protection (risk detection)
- Enterprise app proxy
- Advanced reporting
- Custom attribute rules

**For this curriculum:** Free tier is SUFFICIENT for labs. Contoso uses Free.

---

### Free Tier Limitations

**User/Group limits:** 500,000 objects total (labs use ~15)

**App integration:** Can use any app with OAuth, SAML, or basic auth

**Sign-in logs:** Basic logs available (not detailed analytics)

**Policies:** Can create basic conditional access (limited rules)

**Reports:** Basic usage reports

**Support:** Community forums (no premium support)

---

### What Contoso Needs

Entra ID Free sufficient for:
- ✅ Create 13 test users
- ✅ Create 7 test groups
- ✅ Register ISC_Test_App
- ✅ Grant Microsoft Graph API permissions
- ✅ Generate client secrets
- ✅ Test connector authentication

---

### Cost

**Price:** Free (included with Microsoft 365 or standalone Azure subscription)

**Upgrade to Premium P1/P2:** If you need advanced features (not needed for this curriculum)

---

## 🧠 KEY TAKEAWAYS

- **Entra ID Free is sufficient** for Contoso labs
- **500,000 object limit:** More than enough
- **Basic features available:** Users, groups, app registration, permissions
- **Advanced features missing:** Not needed for curriculum
- **Upgrade path exists:** Can upgrade to Premium later if needed

---

## 🎓 CERTIFICATION ALIGNMENT

**Question 1:** Contoso plans to create 13 test users and 7 groups in Entra ID Free. Is this possible?

A) NoFree tier allows maximum 5 users
B) NoFree tier is for individuals only
C) ✅ YesFree tier supports up to 500,000 objects
D) Only with Premium license

**Answer: C.** Free tier has plenty of capacity for test users.

---

**Question 2:** Contoso needs advanced conditional access policies beyond what Free provides. What's the solution?

A) Not possible
B) ✅ Upgrade Entra ID to Premium P1 or P2
C) Use a different identity provider
D) Request exception from Microsoft

**Answer: B.** Premium provides advanced conditional access. For this curriculum, Free is sufficient.

---

## 📚 ADDITIONAL RESOURCES

- [Next: 2.2 - Navigate Azure Portal](/modules/2.2-navigate-azure-portal)
- Microsoft Entra ID pricing page

---

## 🔄 NEXT STEPS

Module 2.2: Navigate Azure Portal to access Entra ID.

---

## ✅ SUCCESS CRITERIA

- ☑️ Understand Entra ID Free capabilities
- ☑️ Know Free tier limitations
- ☑️ Understand Contoso's needs fit Free tier
- ☑️ Know upgrade path to Premium
