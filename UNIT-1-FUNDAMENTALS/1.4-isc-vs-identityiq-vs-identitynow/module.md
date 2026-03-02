# 1.4 - ISC vs IdentityIQ vs IdentityNow: SailPoint Product Comparison

**Unit:** ISC Fundamentals & Concepts | **Tier:** 1 | **Duration:** ~10 hours

---

## 🎯 Learning Objectives

By the end of this module, you will be able to:
- Understand SailPoint's three main product offerings and their positioning
- Compare ISC, IdentityIQ, and IdentityNow across key dimensions
- Explain why an organization might choose each product
- Recognize that ISC is the modern, cloud-native standard
- Understand SailPoint's strategic direction and product roadmap

---

## 📋 Prerequisites

**Knowledge Required:**
- Module 1.1: What is Identity Management?
- Module 1.2: Identity vs Access vs Governance
- Module 1.3: Introduction to SailPoint ISC (essential context)
- Basic familiarity with cloud vs on-premises deployment models

**Access Required:**
- None for this module (conceptual reading only)

**Time Required:** ~10 hours (3 hours reading, 5-7 hours research and comparison)

**Difficulty:** Beginner

---

## 🔍 CONTEXT & BUSINESS SCENARIO

**Scenario:** SailPoint product strategy across different customer types

**Business Background:**

SailPoint makes three identity products, each designed for different organizational needs and technical contexts. Understanding these products is important because:
1. You might encounter organizations running older IdentityIQ deployments
2. You might need to explain to leadership why ISC is the modern choice
3. You might work on migrations from legacy systems to ISC
4. You need to understand how SailPoint positions ISC as the future direction

Contoso Ltd (our reference company) chose ISC, but a larger enterprise with existing IdentityIQ infrastructure might have made a different choice. Understanding why helps you understand product strategy and organizational decision-making.

**What You'll Be Doing:**

You're learning the broader SailPoint ecosystem so you can position ISC in context and understand enterprise technology decisions. This knowledge helps you in consulting situations and organizational planning.

---

## 📚 CONCEPTUAL FOUNDATION

### Core Concept 1: IdentityIQ - The On-Premises Legacy Standard

**Definition:**

**SailPoint IdentityIQ (IIQ)** is an on-premises, enterprise identity governance platform that has been the industry standard for large enterprises for 15+ years. It's powerful, highly customizable, and requires significant infrastructure and expertise to deploy and maintain.

**Why It Matters:**

Many large enterprises run IdentityIQ and will continue to for years. Understanding IIQ helps you recognize legacy deployments, understand migration paths to ISC, and appreciate why organizations are transitioning to cloud-native platforms.

**In ISC Context:**

ISC is positioned as the modern replacement for IdentityIQ. Many organizations will migrate from IdentityIQ to ISC over the coming years. These migrations are complex and profitable consulting engagements.

**Deployment Model:** Self-hosted, on-premises servers
**Hosting:** Customer-managed (on customer's servers)
**Database:** Customer-managed SQL database
**Customization:** Highly customizable (Java code, XML, etc.)
**Scaling:** Limited by server infrastructure
**Updates:** Customer-scheduled, customer-applied
**Maintenance:** Requires dedicated IT staff (2-5 engineers minimum)

**Example (Large Enterprise):**

A Fortune 500 financial services company has been running IdentityIQ for 12 years, managing 150,000 employees across 200 systems. They:
- Built a dedicated 5-person IdentityIQ team
- Invested in custom connectors and workflows
- Maintain a $2M annual budget for infrastructure, licenses, and staff
- Struggle with slow update cycles and high maintenance burden
- Are now planning a 3-year migration to ISC to reduce operational overhead

---

### Core Concept 2: IdentityNow - The Access Governance Platform

**Definition:**

**SailPoint IdentityNow** is a cloud-native identity governance platform positioned as the "simpler alternative" to IdentityIQ for mid-market organizations that need governance but don't want the complexity of enterprise platforms.

**Why It Matters:**

IdentityNow filled a gap: organizations wanted cloud-native governance but IdentityIQ was too complex/expensive. IdentityNow is simpler, cloud-hosted, and easier to deploy. However, it has limitations compared to ISC.

**In ISC Context:**

IdentityNow is being merged into ISC. SailPoint's strategic direction is to retire IdentityNow and consolidate all cloud-native offerings into ISC. This is important: if you're learning ISC, you're learning the future direction.

**Deployment Model:** Cloud-hosted SaaS
**Hosting:** SailPoint-managed cloud infrastructure
**Database:** Managed cloud database
**Customization:** Limited (configuration-focused, not code)
**Scaling:** Automatic cloud scaling
**Updates:** Automatic SailPoint-managed
**Maintenance:** Minimal (SailPoint handles everything)

**Example (Mid-Market Organization):**

A 200-person manufacturing company wanted access governance but couldn't afford IdentityIQ complexity. They chose IdentityNow because:
- Cloud-hosted (no infrastructure needed)
- Lower cost than IdentityIQ
- Easier to deploy (weeks, not months)
- But: Less customizable than IdentityIQ, which limited their advanced workflows

---

### Core Concept 3: Identity Security Cloud (ISC) - The Modern Standard

**Definition:**

**SailPoint ISC** is the next-generation cloud-native identity governance platform that combines the power of IdentityIQ with the simplicity of cloud delivery. It's positioned as the strategic future—new customers should choose ISC, and existing IdentityIQ/IdentityNow customers should plan to migrate to ISC.

**Why It Matters:**

ISC represents SailPoint's strategic direction. The company is consolidating its cloud offerings into ISC and sunsetting IdentityNow. For your career, this means ISC is the platform you should master. Organizations are standardizing on ISC. Jobs requiring ISC expertise are increasing. IdentityIQ knowledge is valuable but declining as legacy.

**In ISC Context:**

You're learning the modern platform. ISC is the future. This is the right choice for your learning investment.

**Deployment Model:** Cloud-native SaaS
**Hosting:** SailPoint-managed cloud infrastructure
**Database:** Managed cloud database
**Customization:** Highly customizable via APIs and extensibility (without code modifications)
**Scaling:** Automatic cloud scaling
**Updates:** Automatic, transparent to users
**Maintenance:** Minimal (SailPoint handles everything)
**Market Position:** The strategic standard for new deployments

**Example (Contoso Ltd):**

Contoso evaluated IdentityIQ, IdentityNow, and ISC. They chose ISC because:
- Cloud-native (like IdentityNow, no infrastructure)
- But more powerful than IdentityNow
- Combines simplicity of cloud with power of IdentityIQ
- SailPoint's strategic direction (future-proof)

---

### Core Concept 4: Comparison Matrix - ISC vs IdentityIQ vs IdentityNow

**Definition:**

A detailed comparison across dimensions helps you understand when each product is appropriate and why ISC is the modern choice.

**Why It Matters:**

Knowing these trade-offs helps you understand organizational technology decisions and position products appropriately.

**In ISC Context:**

You can use this matrix to explain ISC positioning to stakeholders, understand migration paths, and recognize legacy environments.

| Dimension | IdentityIQ (IIQ) | IdentityNow | ISC |
|-----------|---|---|---|
| **Deployment** | On-premises | Cloud SaaS | Cloud SaaS |
| **Infrastructure Cost** | $500K-$2M+ | $50K-$200K | $50K-$200K |
| **Customization** | Extensive (code) | Limited (config) | Extensive (APIs, config) |
| **Time to Deploy** | 6-12 months | 2-4 months | 2-4 months |
| **Maintenance Burden** | High (customer) | Low (SailPoint) | Low (SailPoint) |
| **Scalability** | Limited by hardware | Automatic | Automatic |
| **Update Frequency** | Quarterly (customer applies) | Monthly (automatic) | Frequent (automatic) |
| **Total Cost of Ownership** | $2M-$5M+ annually | $100K-$500K | $100K-$500K |
| **Best For** | Enterprise, highly custom | Mid-market, standard needs | Enterprise, modern deployment |
| **Strategic Direction** | Legacy (declining) | Being consolidated into ISC | Future standard (growing) |
| **Market Perception** | Proven but aging | Intermediate step | Modern, strategic |

---

## 🧠 KEY CONCEPTS TO REMEMBER

- **IdentityIQ is the legacy on-premises standard** that has proven itself for 15+ years but carries operational overhead
- **IdentityNow was the bridge** to cloud-native but is being consolidated into ISC
- **ISC is the modern strategic direction** and the platform you should master
- **ISC combines IdentityIQ's power with cloud simplicity** — powerful customization without operational overhead
- **For new deployments, ISC is the clear choice** — for legacy environments, migration paths vary

---

## 🎓 CERTIFICATION ALIGNMENT

**Certification Domain:** SailPoint Product Portfolio and Strategy

**Exam Focus:** Candidates must understand the three products and why ISC is the modern standard

**Practice Exam Questions:**

**Question 1:** A large enterprise has run IdentityIQ for 8 years and maintains a dedicated 4-person team to manage infrastructure, apply patches, and customize workflows. The enterprise is considering a migration to cloud-native identity governance. Which of the following best explains the advantage of ISC over IdentityIQ for this organization?

A) ISC has more features than IdentityIQ
B) ✅ ISC is cloud-native (no infrastructure overhead) while maintaining IdentityIQ-level customization, reducing operational burden on IT staff
C) ISC can only manage cloud applications, while IdentityIQ can manage all systems
D) ISC is less powerful than IdentityIQ but simpler to use

**Explanation:** The correct answer is **B) ISC is cloud-native (no infrastructure overhead) while maintaining IdentityIQ-level customization, reducing operational burden on IT staff**. This is the core value proposition of ISC—power of IdentityIQ with simplicity of cloud. The enterprise's problem is operational overhead (4 staff members just for maintenance). ISC solves that by moving infrastructure to SailPoint while maintaining customization capability.

A) is incorrect—ISC doesn't necessarily have more features, just different ones.
C) is incorrect—ISC manages on-premises systems too via connectors and Virtual Appliances.
D) is incorrect—ISC is as powerful as IdentityIQ, just delivered as SaaS.

---

**Question 2:** SailPoint's strategic direction is to position ISC as the primary cloud offering. What is the current status of IdentityNow?

A) IdentityNow is the preferred product for all cloud-native organizations
B) ✅ IdentityNow is being consolidated/merged into ISC as SailPoint's cloud offering evolves
C) IdentityNow and ISC are completely separate products with no relationship
D) IdentityNow is replacing ISC in the product portfolio

**Explanation:** The correct answer is **B) IdentityNow is being consolidated/merged into ISC as SailPoint's cloud offering evolves**. SailPoint is consolidating its cloud offerings. IdentityNow served as a simpler entry point, but ISC is the strategic direction. New customers should choose ISC; existing IdentityNow customers will eventually migrate to ISC.

A) is incorrect—ISC is now the preferred platform.
C) is incorrect—they are related (IdentityNow is transitioning to ISC).
D) is incorrect—ISC is not replacing IdentityNow; ISC is the evolution that IdentityNow is merging into.

---

## 📚 ADDITIONAL RESOURCES

**Related Modules:**
- [Previous: 1.3 - Introduction to SailPoint ISC](/modules/1.3-introduction-to-sailpoint-isc) — ISC fundamentals
- [Next: 1.5 - ISC Architecture Overview](/modules/1.5-isc-architecture-overview) — How ISC works internally

**Official Documentation:**
- [SailPoint Product Portfolio Overview](https://example.com)
- [ISC vs IdentityIQ Migration Guide](https://example.com)

**Further Research:**
- Search "SailPoint ISC news" for recent strategic announcements
- Review analyst reports (Gartner, Forrester) comparing SailPoint products
- Read SailPoint blog for product roadmap updates

---

## 🔄 NEXT STEPS

You now understand SailPoint's product strategy and why ISC is the modern standard. In **Module 1.5 - ISC Architecture Overview**, you'll learn how ISC actually works internally—the components, data flow, and architectural decisions that make it powerful.

**Before moving forward:**
- Research your current or previous organization's identity platform—do they use IdentityIQ, IdentityNow, ISC, or something else?
- Think about why an organization might choose one over another
- Consider the trade-offs between on-premises power and cloud simplicity

---

## ✅ SUCCESS CRITERIA

By the end of this module, you should be able to:
- ☑️ Describe the three SailPoint products and their positioning
- ☑️ Compare ISC, IdentityIQ, and IdentityNow across key dimensions
- ☑️ Explain why ISC is SailPoint's strategic direction
- ☑️ Understand the trade-offs in cloud-native vs on-premises deployment
- ☑️ Recognize legacy deployments and understand migration paths
- ☑️ Answer practice exam questions correctly

**If you cannot do these things, review this module and Modules 1.3 before proceeding to 1.5.**
