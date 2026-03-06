# 3.14 - Other Connector Types

**Unit:** Identity Profiles & Sources | **Tier:** 1 | 

---

## 🎯 Learning Objectives

- Understand cloud connectors
- Understand VA connectors
- Know when to use each

---

## 📋 Prerequisites

Module 3.9: Entra ID Connector Basics. Module 3.7: Connector Types Overview.

---

## 📚 CORE CONCEPTS

### Cloud/SaaS Connectors

**Examples:** Salesforce, ServiceNow, Workday, GitHub, Slack

**Authentication:** OAuth, API keys, service accounts (varies by app)

**Setup:** Register app in target system, get credentials, configure in ISC

**Common Setup:**
1. Register ISC app in target system (similar to Unit 2.6 for Entra ID)
2. Grant permissions (similar to Unit 2.7)
3. Generate secrets/tokens (similar to Unit 2.8)
4. Configure in ISC

---

### Virtual Appliance (VA) Connectors

**Use Case:** On-premises systems without internet access

**Setup:**
1. Install VA in customer's on-premises network
2. VA makes outbound HTTPS connection to ISC cloud
3. ISC calls VA, VA executes in on-premises network
4. VA connects to on-premises systems (Active Directory, legacy apps, databases)

**Advantage:** Secure (outbound only, no inbound firewall rules needed)

---

### Pattern Recognition

**Cloud system + API = Cloud Connector**

**On-premises system + VA = Virtual Appliance**

---

## 🧠 KEY TAKEAWAYS

- **Cloud connectors** = API-based authentication (OAuth, API key)
- **VAs** = Outbound bridge to on-premises
- **Setup pattern same** = Register app, grant permissions, add connector

---

## ✅ SUCCESS CRITERIA

- ☑️ Understand cloud connector setup
- ☑️ Understand VA setup and purpose
- ☑️ Recognize when to use each
