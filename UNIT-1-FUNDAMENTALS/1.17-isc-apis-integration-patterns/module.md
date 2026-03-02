# 1.17 - ISC APIs & Integration Patterns

**Unit:** ISC Fundamentals & Concepts | **Tier:** 1 | **Duration:** ~12 hours

---

## 🎯 Learning Objectives

- Understand ISC's REST API and capabilities
- Know common integration patterns
- Understand when to use APIs vs connectors
- Recognize authentication and security patterns
- Know API rate limits and performance considerations

---

## 📋 Prerequisites

Module 1.5: ISC Architecture Overview. Module 1.11: Sources, Connectors & Integration.

---

## 📚 CORE CONCEPTS

### ISC REST API

**Definition:** REST API for programmatic access to ISC. Create/read/update identities, accounts, roles, access reviews, etc.

**Common uses:**
- Trigger provisioning externally (HR system calls ISC: "Provision access for new user")
- Query identities/accounts (Finance system: "Who has access to account 12345?")
- Submit access requests (Slack bot: "/request finance-app-access")
- Close access reviews (workflow automation)
- Custom integrations (connect ISC to systems without native connectors)

**Authentication:** API token (Bearer token in Authorization header).

---

### Integration Patterns

**Pattern 1: Event-Driven (Webhook)**

External system triggers event → Calls ISC API → ISC provisioning happens.

**Example:** New employee created in HRIS → HRIS calls ISC API → ISC provisions all access.

**Advantage:** Real-time, no polling needed.

---

**Pattern 2: Scheduled Integration (Batch)**

ISC polls external system periodically (or vice versa) for changes.

**Example:** Daily job: HR system generates employee list, ISC imports via API.

**Advantage:** Works with systems that don't support webhooks.

---

**Pattern 3: Custom Connector via API**

System without native ISC connector? Build custom connector using ISC APIs.

**Example:** Legacy financial system doesn't have ISC connector. Build REST wrapper that ISC API calls.

---

### When to Use Connectors vs APIs

**Use Native Connector:**
- System has ISC connector (Salesforce, ServiceNow, Workday, Entra ID)
- Faster, pre-configured, less custom development

**Use REST API:**
- No native connector exists
- Need event-driven integration (webhook)
- Need to call ISC from external system
- Custom business logic required

**Use Virtual Appliance:**
- On-premises system without APIs
- Need secure connection (outbound only)

---

### API Authentication

**Bearer Token:**
```
Authorization: Bearer {token}
```

**Token generation:**
- Admin creates API token in ISC
- Token never expires (long-term)
- Tokens can be revoked anytime

**Security:**
- Store tokens securely (environment variables, vaults, not in code)
- Use minimal permissions (restrict token scope)
- Rotate periodically
- Revoke if compromised

---

### Rate Limits and Performance

**Rate limits:** ISC throttles API calls to protect infrastructure.
- Typical: 100-500 requests per minute per token
- Burst allowance: Can exceed temporarily (tokens refill)
- Exceeded: Request rejected with 429 (Too Many Requests)

**Best practices:**
- Batch requests when possible
- Use scheduled jobs instead of real-time queries for large operations
- Cache results when safe
- Implement retry logic with backoff

---

## 🧠 KEY TAKEAWAYS

- **ISC has REST API** for custom integrations
- **Use connectors** when available (faster, less work)
- **Use API** for custom logic, webhooks, or systems without connectors
- **Authentication:** Bearer tokens, secure storage, minimal permissions
- **Rate limits:** Design for scale, batch requests, implement retries

---

## 🎓 CERTIFICATION ALIGNMENT

**Question 1:** A custom financial application needs to call ISC to check if user "mchen" should have access. Which approach is best?

A) Use Salesforce connector
B) ✅ Use ISC REST API—financial app calls ISC API to query access
C) Use Virtual Appliance
D) Manual integration

**Answer: B.** REST API allows external systems to call ISC programmatically.

---

**Question 2:** Integration token is being shared among multiple services. What's the risk?

A) No risk—tokens are secure
B) ✅ If token is compromised, all services lose access. Can't control permissions per service.
C) Tokens automatically rotate
D) Risk only if token is in code

**Answer: B.** One token = one permission set. Better to have service-specific tokens with limited scopes.

---

## 📚 ADDITIONAL RESOURCES

- [Next: 1.18 - ISC Security & Multi-Tenancy](/modules/1.18-isc-security-multi-tenancy)
- ISC API Documentation (official)

---

## 🔄 NEXT STEPS

Module 1.18 covers security and multi-tenancy—how ISC protects data and isolates customers.

---

## ✅ SUCCESS CRITERIA

- ☑️ Understand ISC REST API
- ☑️ Know integration patterns (event-driven, batch, custom)
- ☑️ When to use connectors vs APIs
- ☑️ API authentication and security
- ☑️ Answer practice questions correctly
