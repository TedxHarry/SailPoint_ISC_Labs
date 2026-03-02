# 3.8 - Connector Architecture

**Unit:** Identity Profiles & Sources | **Tier:** 1 | **Duration:** ~10 hours

---

## 🎯 Learning Objectives

- Understand how connectors work
- Know read/write flow
- Understand polling and real-time

---

## 📋 Prerequisites

Module 3.7: Connector Types Overview.

---

## 📚 CORE CONCEPTS

### Connector Flow

```
1. ISC initiates connection
2. Connector authenticates to source system (credentials/OAuth)
3. Connector reads data (users, groups, accounts)
4. Data formatted per Identity Profile mappings
5. Data stored in ISC database
```

---

### Read Flow

**Polling (Scheduled):**
```
ISC Scheduler triggers → Connector reads → Data imported
Happens on schedule (hourly, daily, etc.)
```

**Real-Time (Webhook):**
```
Source system notifies connector of change → Data imported immediately
Only if source supports webhooks
```

---

### Write Flow

```
ISC evaluates rules → Decides account action needed
ISC calls connector → Connector writes to source system
Connector authenticates → Updates/creates/deletes account
```

---

### For Contoso

Entra ID Connector:
- Read: Scheduled polling (daily) or real-time (if Entra ID supports webhooks)
- Write: ISC provisions group memberships to Entra ID

---

## 🧠 KEY TAKEAWAYS

- **Read:** Connector polls source, imports to ISC
- **Write:** ISC calls connector, makes changes in source
- **Polling:** Scheduled (faster setup)
- **Real-time:** Immediate (if supported)

---

## ✅ SUCCESS CRITERIA

- ☑️ Understand read/write flow
- ☑️ Know polling vs real-time
