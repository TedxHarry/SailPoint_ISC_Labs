# SailPoint Identity Security Cloud (ISC) Labs
## Zero to Professional: Complete Hands-On Learning Path

A comprehensive, practical labs curriculum for beginners to become **SailPoint Certified Identity Security Engineers**.

**Target:** Complete beginners | **Duration:** 12-18 months | **Certification:** Professional + Engineer

---

## 📚 What's Inside

```
SailPoint_ISC_Labs/
├── README.md (this file)
├── SETUP.md (Entra ID Free tier setup guide)
├── TABLE-OF-CONTENTS.md (80-90 modules curriculum)
├── SERIES-PROMPT.md (lab writing template)
├──
├── 📁 SETUP-GUIDES/
│   ├── 00-ENTRA-ID-FREE-TIER-GUIDE.md (Complete step-by-step)
│   ├── 01-ISC-SANDBOX-ACCESS.md
│   └── 02-REPOSITORY-USAGE.md
│
├── 📁 TEST-DATA/
│   ├── contoso-identities-100.csv (Small deployment: 100 users)
│   ├── contoso-finance-app.csv
│   ├── contoso-hris.csv
│   ├── regiontech-identities-300.csv (Mid-market: 300 users)
│   ├── regiontech-finance.csv
│   ├── regiontech-hris.csv
│   ├── regiontech-salesforce.csv
│   ├── globalbank-identities-500.csv (Enterprise: 500 users)
│   ├── globalbank-finance.csv
│   ├── globalbank-hris.csv
│   ├── globalbank-salesforce.csv
│   └── globalbank-crm.csv
│
├── 📁 SAMPLE-LABS/
│   ├── SAMPLE-LAB-1-fundamentals.md
│   ├── SAMPLE-LAB-2-small-deployment.md
│   └── SAMPLE-LAB-3-governance.md
│
├── 📁 UNIT 1 - FUNDAMENTALS/
│   ├── 1.1-intro-to-isc/
│   ├── 1.2-architecture/
│   └── ...
│
├── 📁 UNIT 2 - SETUP & CONFIG/
├── 📁 UNIT 3 - SEARCH & ANALYTICS/
├── 📁 UNIT 4 - ACCESS MODELING/
├── 📁 UNIT 5 - LIFECYCLE MANAGEMENT/
├── 📁 UNIT 6 - PROVISIONING/
├── 📁 UNIT 7 - CONNECTORS & INTEGRATION/
├── 📁 UNIT 8 - GOVERNANCE & WORKFLOWS/
├── 📁 UNIT 9 - ADVANCED TOPICS/
└── 📁 UNIT 10 - ENTERPRISE ARCHITECTURE/
```

---

## 🚀 Quick Start

### 1. **Prerequisites**
- [ ] SailPoint ISC sandbox access (available through Identity University)
- [ ] Microsoft Entra ID Free tier tenant
- [ ] Complete `SETUP.md` before starting labs

### 2. **Complete Setup in This Order**
1. Read `SETUP-GUIDES/00-ENTRA-ID-FREE-TIER-GUIDE.md`
2. Create test users/groups in Entra ID (as guided)
3. Set up ISC sandbox connectivity
4. Verify ISC can connect to Entra ID

### 3. **Choose Your Path**
- **Admin Track:** Units 1-5, 8 (Professional Credential)
- **Engineer Track:** Units 1-9 (Engineer Certification)
- **Full Track:** Units 1-10 (Comprehensive mastery)

### 4. **Start Unit 1**
Begin with `UNIT 1 - FUNDAMENTALS` → complete all 5 modules in order

---

## 📖 How to Use This Repository

### For Each Module:
```
UNIT X - MODULE-NAME/
├── module.md (main content + lab instructions)
├── data-files/
│   ├── sample-data.csv
│   └── templates.json
└── solutions/ (optional)
    └── expected-output.md
```

### Lab Format:
Each lab includes:
- **Prerequisites:** What to know/prepare
- **Objectives:** What you'll learn
- **Step-by-Step Instructions:** Detailed, numbered steps
- **Expected Results:** What success looks like
- **Troubleshooting:** Common issues and fixes
- **Certification Alignment:** Exam domains covered

---

## 🎯 Learning Outcomes by Tier

### Tier 1: Fundamentals (Units 1-3)
✅ Understand ISC architecture and core concepts
✅ Set up ISC + Entra ID integration
✅ Search and analyze identity data
✅ **Certification:** Professional Credential eligible

### Tier 2: Small Deployment (Units 4-6)
✅ Design access models for 50-100 person organization
✅ Create roles and manage provisioning
✅ Implement governance policies
✅ **Portfolio:** Contoso Ltd working deployment

### Tier 3: Mid-Market (Units 7-9)
✅ Integrate 15+ systems with ISC
✅ Implement complex workflows and automation
✅ Advanced provisioning and SoD enforcement
✅ **Certification:** Engineer Certification eligible

### Tier 4: Enterprise (Units 10+)
✅ Design enterprise-scale architecture
✅ Migrate existing systems to ISC
✅ Optimize for 5000+ user deployments
✅ **Portfolio:** Complete implementation strategy

---

## 📋 Certification Alignment

| Certification | Units | Duration | Status |
|---|---|---|---|
| **Professional Credential** | 1-5 | 8-12 weeks | Entry-level |
| **Engineer Certification** | 1-9 | 18-24 weeks | Industry-recognized |
| **Specialist Track** | 9-10 | 6+ weeks | Optional deep dives |

---

## 🔧 What You Need

### Free Resources
- ✅ Microsoft Entra ID Free tier
- ✅ SailPoint ISC sandbox (via Identity University)
- ✅ This repository (all labs included)

### Optional (Recommended)
- 📱 ISC official documentation: https://documentation.sailpoint.com/saas/
- 📚 Identity University: https://www.sailpoint.com/university
- 💬 Developer Community: https://developer.sailpoint.com/discuss

---

## 📊 Test Data Provided

All test data is **synthetic** and ready to use:

| Scenario | Users | Systems | Purpose |
|---|---|---|---|
| **Contoso Ltd** | 100 | 3 (Entra ID + 2 CSV) | Small deployment |
| **RegionTech Inc** | 300 | 4 (Entra ID + 3 CSV) | Mid-market |
| **GlobalBank Corp** | 500 | 5 (Entra ID + 4 CSV) | Enterprise |

All CSV files are in `/TEST-DATA/` ready to import.

---

## 🎓 For Instructors/Trainers

### Using This Repository
1. Each module is self-contained
2. Labs are designed for 1-person practice
3. All solutions are provided
4. Estimated time per module: 10-12 hours

### Customization
- Modify CSV data for your use case
- Adjust organization names/scenarios
- Add your own case studies

---

## 🤝 Contributing

This is an open-source learning resource. You can:
- Report issues/typos
- Suggest improvements
- Add additional labs
- Translate content

---

## 📝 License

This repository is provided as an educational resource for learning SailPoint ISC. Use freely for personal or organizational training.

---

## 🆘 Help & Support

### Getting Help
1. Check the **Troubleshooting** section in each lab
2. Review sample labs for format examples
3. Check SailPoint Developer Community
4. Review official SailPoint documentation

### Common Issues
- Entra ID: See `SETUP-GUIDES/00-ENTRA-ID-FREE-TIER-GUIDE.md`
- ISC: See `SETUP-GUIDES/01-ISC-SANDBOX-ACCESS.md`
- Lab issues: Check module's troubleshooting section

---

## 📞 Quick Links

| Resource | Link |
|---|---|
| **Setup Guide** | `/SETUP-GUIDES/00-ENTRA-ID-FREE-TIER-GUIDE.md` |
| **Curriculum** | `/TABLE-OF-CONTENTS.md` |
| **Lab Template** | `/SERIES-PROMPT.md` |
| **Sample Labs** | `/SAMPLE-LABS/` |
| **Test Data** | `/TEST-DATA/` |

---

## 📅 Roadmap

- ✅ Phase 1: Core modules (Units 1-5) - WRITING
- ⏳ Phase 2: Advanced modules (Units 6-8) - PLANNED
- ⏳ Phase 3: Enterprise modules (Units 9-10) - PLANNED
- ⏳ Phase 4: Specialist labs - PLANNED

---

## 🎯 Your Next Steps

1. ✅ Clone this repository
2. ✅ Read `SETUP.md`
3. ✅ Follow `SETUP-GUIDES/00-ENTRA-ID-FREE-TIER-GUIDE.md`
4. ✅ Review `SAMPLE-LABS/` to understand format
5. ✅ Start `UNIT 1 - FUNDAMENTALS`

---

**Last Updated:** March 2, 2026
**Version:** 1.0 (Initial Release)
**Maintainer:** TedxHarry

Good luck on your SailPoint ISC journey! 🚀
