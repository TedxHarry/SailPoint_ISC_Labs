# SailPoint Identity Security Cloud (ISC) Labs: Complete Curriculum
## Zero to Professional: 80-90 Modules, 4 Learning Tiers

**Target Audience:** Complete beginners (no ISC or Entra ID experience)
**Total Modules:** 86 modules across 10 units
**Total Learning Hours:** ~130 hours (10-12 hours per module average)
**Duration:** 12-18 months full-time, 24+ months part-time
**Certification:** Professional Credential + Identity Security Engineer
**Practice Environment:** ISC Sandbox + Entra ID Free Tier + CSV Simulations

---

## 🎯 CERTIFICATION PATHS & ALIGNMENT

### Path 1: SailPoint Identity Security Professional (Knowledge Credential)
**Tier 1 Complete (Units 1-5)**
- Entry-level credential
- Unproctored exam
- Covers: Fundamentals, Setup, Search, Access Modeling, Lifecycle Basics
- **Time to Cert:** 8-12 weeks

### Path 2: SailPoint Certified Identity Security Engineer (Professional)
**Tier 1-3 Complete (Units 1-9)**
- Industry-recognized certification
- Proctored exam (requires 1+ year experience)
- Covers: Full implementation, integration, governance
- **Time to Cert:** 18-24 weeks

---

## 📚 CURRICULUM STRUCTURE (10 Units, 86 Modules)

```
TIER 1: FOUNDATIONS (Units 1-3)
├─ What: Core ISC knowledge
├─ When: First 8-12 weeks
├─ Who: All learners
└─ Outcome: Understand ISC fundamentals

TIER 2: SMALL DEPLOYMENT (Units 4-6)
├─ What: Deploy ISC for 50-100 person org
├─ When: Weeks 12-20
├─ Who: All learners
└─ Outcome: Working Contoso Ltd deployment

TIER 3: MID-MARKET DEPLOYMENT (Units 7-9)
├─ What: Expand to 300 person org, complex systems
├─ When: Weeks 20-32
├─ Who: Engineer path learners
└─ Outcome: Working RegionTech Inc deployment

TIER 4: ENTERPRISE DEPLOYMENT (Unit 10)
├─ What: Design for 5000+ users, multi-region
├─ When: Weeks 32+
├─ Who: Advanced learners
└─ Outcome: Complete enterprise strategy
```

---

## DETAILED MODULE BREAKDOWN

### **UNIT 1: ISC FUNDAMENTALS (5 modules, ~50 hours)**
*Tier: 1 | Certification: Both | Prerequisite: None*

**Unit Objective:** Understand what ISC is, how it works, and how it fits into identity governance

| # | Module | Topics | Lab | Cert Domain |
|---|--------|--------|-----|-------------|
| 1.1 | Intro to ISC | Product overview, ISC vs IdentityIQ, use cases, core modules | Tour ISC UI | Fundamentals |
| 1.2 | Architecture & Components | Cloud-native design, microservices, data lake, security | Explore tenant structure | Platforms |
| 1.3 | Core Concepts | Identities, accounts, entitlements, sources, relationships | Create test identity | Fundamentals |
| 1.4 | User Roles & Permissions | Admin roles, RBAC, delegated authority, best practices | Set up admin account | Fundamentals |
| 1.5 | Governance Overview | Access reviews, certifications, policies, compliance | Review governance features | Fundamentals |

---

### **UNIT 2: SETUP, CONFIGURATION & ADMINISTRATION (6 modules, ~60 hours)**
*Tier: 1 | Certification: Professional | Prerequisite: Unit 1*

**Unit Objective:** Configure ISC and connect to Entra ID (your first real system)

| # | Module | Topics | Lab | Cert Domain |
|---|--------|--------|-----|-------------|
| 2.1 | Tenant Setup & Config | Tenant provisioning, admin interface, branding, locale | Configure tenant settings | Setup & Admin |
| 2.2 | User Management in ISC | Add ISC users, assign roles, bulk operations | Create 5 ISC admin users | Setup & Admin |
| 2.3 | Sources Overview | What are sources, types, account schema | Plan Contoso sources | Setup & Admin |
| 2.4 | Entra ID Connector Setup | Connect ISC to Entra ID, configure Graph API | Configure Entra ID connector | Sources |
| 2.5 | Virtual Appliances | VA purpose, deployment, health monitoring | Deploy test VA (if available) | Setup & Admin |
| 2.6 | Governance Config Basics | Enable reviews, setup certifications, audit logging | Enable audit logs | Setup & Admin |

---

### **UNIT 3: SEARCH, QUERY & ANALYTICS (5 modules, ~50 hours)**
*Tier: 1 | Certification: Professional | Prerequisite: Unit 2*

**Unit Objective:** Learn to search identity data and understand ISC analytics

| # | Module | Topics | Lab | Cert Domain |
|---|--------|--------|-----|-------------|
| 3.1 | Identity Search Basics | Search interface, filters, operators, saved searches | Search for test users | Platforms |
| 3.2 | Advanced Search & Queries | Complex search syntax, combining criteria, export | Find users by department | Platforms |
| 3.3 | Analytics & Dashboards | Built-in reports, access insights, custom dashboards | Create access risk dashboard | Analytics |
| 3.4 | Access Risk Analytics | Risk scoring, anomaly detection, user profiles | Review risk scores | Analytics |
| 3.5 | Reporting & Data Export | Export search results, generate reports, integrations | Export user list to CSV | Analytics |

---

### **UNIT 4: ACCESS MODELING (6 modules, ~60 hours)**
*Tier: 2 | Certification: Both | Prerequisite: Unit 3*

**Unit Objective:** Design and build access models for Contoso Ltd (Small deployment)

| # | Module | Topics | Lab | Cert Domain |
|---|--------|--------|-----|-------------|
| 4.1 | Access Modeling Fundamentals | Roles, access profiles, role vs profiles, benefits | Review Contoso structure | Access Management |
| 4.2 | AI-Driven Role Recommendations | ML role discovery, approval, provisioning at scale | Review & apply recommendations | Access Management |
| 4.3 | Standard Role Design | Define roles, add entitlements, documentation | Create Finance_AP_Clerk role | Access Management |
| 4.4 | Dynamic Roles & Membership | Membership rules, attribute-based access, birthright | Create Dept_Manager dynamic role | Access Management |
| 4.5 | Separation of Duties (SoD) | Define SoD rules, conflict detection, exceptions | Implement Finance SoD rule | Access Management |
| 4.6 | Role Validation & Governance | Testing, approval workflows, retirement, metrics | Validate role design, get approval | Access Management |

---

### **UNIT 5: LIFECYCLE MANAGEMENT & PROVISIONING BASICS (6 modules, ~60 hours)**
*Tier: 2 | Certification: Professional | Prerequisite: Unit 4*

**Unit Objective:** Automate user join/move/leave processes for Contoso

| # | Module | Topics | Lab | Cert Domain |
|---|--------|--------|-----|-------------|
| 5.1 | User Lifecycle Overview | Join/Move/Leave model, events, state transitions | Map Contoso lifecycle | Lifecycle |
| 5.2 | Joiner Automation | New hire onboarding, birthright access, first-day | Create joiner workflow | Lifecycle |
| 5.3 | Mover Automation | Role change triggers, access recert, new provisioning | Implement mover workflow | Lifecycle |
| 5.4 | Leaver Automation | Termination triggers, access revocation, cleanup | Create leaver workflow | Lifecycle |
| 5.5 | HRIS Integration | Connect HR system (CSV), event-driven automation | Integrate simulated HRIS | Lifecycle |
| 5.6 | Lifecycle Reporting | Onboarding metrics, timeliness, compliance reports | Generate lifecycle KPI report | Analytics |

---

### **UNIT 6: PROVISIONING & ACCOUNT MANAGEMENT (6 modules, ~60 hours)**
*Tier: 2 | Certification: Engineer | Prerequisite: Unit 5*

**Unit Objective:** Provision users to multiple systems (real Entra ID + simulated systems)

| # | Module | Topics | Lab | Cert Domain |
|---|--------|--------|-----|-------------|
| 6.1 | Provisioning Fundamentals | Account creation, provisioning flow, rules, constraints | Manual provision user to Entra ID | Provisioning |
| 6.2 | Automated Provisioning | Enable auto-provisioning, templates, naming policies | Create auto-provisioning rule | Provisioning |
| 6.3 | Provisioning Workflows | Request workflows, approval routing, multi-level | Design provisioning workflow | Provisioning |
| 6.4 | Deprovisioning | Account disablement, deletion, audit, retention | Set up deprovisioning automation | Provisioning |
| 6.5 | Multi-System Provisioning | Provision to Entra ID + Finance (CSV) + HRIS (CSV) | Provision to 3 systems | Provisioning |
| 6.6 | Provisioning Audit & Troubleshooting | Logs, history, error handling, verification | Troubleshoot failed provision | Provisioning |

---

### **UNIT 7: CONNECTORS & SYSTEM INTEGRATION (7 modules, ~70 hours)**
*Tier: 3 | Certification: Engineer | Prerequisite: Unit 6*

**Unit Objective:** Master connector framework and integrate multiple systems for RegionTech

| # | Module | Topics | Lab | Cert Domain |
|---|--------|--------|-----|-------------|
| 7.1 | Connector Framework | Architecture, types, cloud vs VA, marketplace | Explore connector types | Sources |
| 7.2 | Entra ID Deep Dive | AD/LDAP connector, schema mapping, correlation, groups | Advanced AD configuration | Sources |
| 7.3 | Cloud SaaS Connectors | Salesforce, Microsoft 365, OAuth, provisioning | Connect Salesforce (simulated) | Sources |
| 7.4 | HRIS & HR Systems | Workday patterns, employee data sync, authoritative | Configure HRIS connector (CSV) | Sources |
| 7.5 | Database & REST API Connectors | JDBC, custom APIs, webhooks, transformation | Create Finance App connector (CSV) | Sources |
| 7.6 | Virtual Appliance Management | Deploy, scale, monitor, logs, troubleshooting | Monitor VA performance | Platforms |
| 7.7 | Connector Optimization | Performance tuning, error handling, best practices | Optimize connector throughput | Sources |

---

### **UNIT 8: GOVERNANCE & ADVANCED WORKFLOWS (7 modules, ~70 hours)**
*Tier: 3 | Certification: Engineer | Prerequisite: Unit 7*

**Unit Objective:** Implement compliance, policies, and automation for RegionTech governance

| # | Module | Topics | Lab | Cert Domain |
|---|--------|--------|-----|-------------|
| 8.1 | Access Certification Campaigns | Types, scope, reviewers, decisions, remediation | Launch access certification | Governance |
| 8.2 | Governance Policies | Policy definition, violation detection, enforcement | Create access policy | Governance |
| 8.3 | Compliance & Auditing | Audit trails, compliance reports, SOX/HIPAA/GDPR | Generate compliance report | Governance |
| 8.4 | Rules & Transforms | BeanShell basics, pre/post-provisioning rules | Write custom provisioning rule | Rules & Transforms |
| 8.5 | Workflow Design | Workflow builder, steps, variables, decision logic | Design complex approval workflow | Governance |
| 8.6 | Delegation & Entitlement Management | Owner roles, approval routing, responsibility | Set up entitlement owner model | Governance |
| 8.7 | Advanced SoD Enforcement | Complex conflicts, exception management, reporting | Enforce enterprise SoD policy | Governance |

---

### **UNIT 9: ADVANCED TOPICS & SPECIALIZATIONS (5 modules, ~50 hours)**
*Tier: 4 | Certification: Engineer | Prerequisite: Unit 8*

**Unit Objective:** Master advanced features and specializations

| # | Module | Topics | Lab | Cert Domain |
|---|--------|--------|-----|-------------|
| 9.1 | Cloud Infrastructure Entitlement Mgmt (CIEM) | AWS/Azure/GCP access, over-provisioning, least privilege | Analyze cloud entitlements | Advanced |
| 9.2 | Machine Identity & Bot Management | Service accounts, RPA, privileged access | Manage service account lifecycle | Advanced |
| 9.3 | Non-Employee Risk Management | Contractors, vendors, guest access, lifecycle | Govern contractor access | Advanced |
| 9.4 | Advanced Analytics & AI | Behavioral analysis, anomaly detection, predictions | Review AI recommendations | Analytics |
| 9.5 | ISC APIs & Custom Integrations | REST API v3, OAuth, custom integrations, webhooks | Call ISC API, create automation | Rules & Transforms |

---

### **UNIT 10: ENTERPRISE ARCHITECTURE & STRATEGY (6 modules, ~60 hours)**
*Tier: 4 | Certification: Engineer | Prerequisite: Unit 9*

**Unit Objective:** Design enterprise-scale deployments and migration strategies

| # | Module | Topics | Lab | Cert Domain |
|---|--------|--------|-----|-------------|
| 10.1 | Enterprise ISC Patterns | Multi-tenant design, HA/DR, scaling, org structure | Design GlobalBank architecture | Platforms |
| 10.2 | Migration Planning | Current state assessment, ISC readiness, phased approach | Create migration plan | Platforms |
| 10.3 | Case Study: RegionTech Inc | 300-person org, 15+ systems, complex roles, SoD | Design RegionTech solution | All domains |
| 10.4 | Case Study: GlobalBank Corp | 5000+ people, multi-region, compliance, CIEM | Design bank-scale deployment | All domains |
| 10.5 | Case Study: Cloud-First Organization | SaaS-heavy, non-traditional workforce, continuous compliance | Design cloud-native model | All domains |
| 10.6 | Go-Live, Adoption & Success Metrics | Rollout strategy, change management, KPIs, optimization | Create implementation roadmap | All domains |

---

## 📊 LEARNING TIER SUMMARY

| Tier | Units | Weeks | Certification | Outcomes |
|---|---|---|---|---|
| **Tier 1: Foundations** | 1-3 | 8-12 | Professional Credential | Know ISC fundamentals, connect to Entra ID |
| **Tier 2: Small Org** | 4-6 | 8-12 | Early Engineer prep | Deploy ISC for 50-100 person org (Contoso) |
| **Tier 3: Mid-Market** | 7-9 | 12-16 | Engineer Certification | Scale to 300 people, complex systems (RegionTech) |
| **Tier 4: Enterprise** | 10 | 6+ | Advanced specialization | Enterprise architecture, 5000+ users (GlobalBank) |

---

## 🧪 PRACTICE SCENARIOS

### Scenario 1: Contoso Ltd (Small Deployment)
**Organization:**
- Size: 50-100 employees
- Structure: Finance, HR, Engineering, Operations
- Systems: Entra ID + Finance App (CSV) + HRIS (CSV)
- Governance: Simple, centralized

**Used in:** Units 4-6 (Tier 2)
**Deliverables:**
- Access model design document
- 10+ roles defined and tested
- Provisioning automation working
- Governance reviews functional

### Scenario 2: RegionTech Inc (Mid-Market)
**Organization:**
- Size: 300 employees
- Structure: Multiple departments, regional offices
- Systems: Entra ID + Finance + HRIS + Salesforce (CSV) + HR systems (CSV)
- Governance: Advanced, SoD enforcement, policies

**Used in:** Units 7-9 (Tier 3)
**Deliverables:**
- Complex connector integrations working
- Advanced workflows automating
- SoD conflicts detected and managed
- Certification campaigns running

### Scenario 3: GlobalBank Corp (Enterprise)
**Organization:**
- Size: 5000+ employees
- Structure: Multi-region, multiple divisions
- Systems: 50+ systems (simulated via CSV)
- Governance: Complex compliance (PCI-DSS, SOX)

**Used in:** Unit 10 (Tier 4)
**Deliverables:**
- Enterprise architecture design
- Migration strategy document
- Multi-region deployment plan
- Compliance framework defined

---

## 🎓 CERTIFICATION DOMAINS MAPPING

| Certification | Domain | Units | Modules |
|---|---|---|---|
| **Professional Credential** | Setup & Admin | 2 | 2.1-2.6 |
| | Search & Query | 3 | 3.1-3.5 |
| | Access Modeling | 4 | 4.1-4.2 |
| | Lifecycle (Basic) | 5 | 5.1-5.4 |
| | Analytics | 3,5,6 | 3.3-3.5, 5.6, 6.6 |
| **Engineer Certification** | All above + | | |
| | Provisioning | 6 | 6.1-6.6 |
| | Sources & Connectors | 7 | 7.1-7.7 |
| | Governance & Rules | 8 | 8.1-8.7 |
| | Platforms & Architecture | 2,8,10 | 2.1, 2.5, 8.5, 10.1-10.2 |
| | Advanced Topics | 9 | 9.1-9.5 |

---

## 📋 PREREQUISITES KNOWLEDGE

**Before Starting:**
- Basic computer skills (file management, web browsers)
- Understanding of user accounts and groups
- Basic networking concepts
- Willingness to learn cloud identity concepts

**You'll Learn:**
- ISC platform and architecture
- Identity governance concepts
- Connector and integration patterns
- Provisioning and deprovisioning
- Compliance and auditing
- Rules, workflows, and automation
- Enterprise architecture patterns

---

## 📚 RESOURCES PROVIDED

| Resource | Location | Purpose |
|---|---|---|
| **Entra ID Setup** | `SETUP-GUIDES/00-ENTRA-ID-FREE-TIER-GUIDE.md` | Create test users/groups |
| **ISC Setup** | `SETUP-GUIDES/01-ISC-SANDBOX-ACCESS.md` | Connect to sandbox |
| **Test Data** | `/TEST-DATA/` | CSV files for all scenarios |
| **Lab Template** | `SERIES-PROMPT.md` | How to write each lab |
| **Sample Labs** | `/SAMPLE-LABS/` | Example format and style |
| **Module Content** | `/UNIT [N]/` | Each module's full content |

---

## ✅ NEXT STEPS

1. **Complete Setup:** Follow SETUP-GUIDES in order
2. **Review Samples:** Look at SAMPLE-LABS to understand format
3. **Start Unit 1:** Begin fundamentals
4. **Progress Sequentially:** Don't skip ahead
5. **Practice Labs:** Do every lab, don't just read
6. **Prepare for Cert:** Study exam domains in final weeks

---

## 📞 SUPPORT RESOURCES

| Resource | Link |
|---|---|
| **SailPoint Docs** | https://documentation.sailpoint.com/saas/ |
| **Identity University** | https://www.sailpoint.com/university |
| **Developer Community** | https://developer.sailpoint.com/discuss |
| **This Repository** | Check README.md for structure |

---

**Document Version:** 2.0 (Revised for Entra ID Free + CSV Sims)
**Last Updated:** March 2, 2026
**Total Modules:** 86
**Total Hours:** ~130 hours
**Certification Paths:** 2 (Professional + Engineer)
