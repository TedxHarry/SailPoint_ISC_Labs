# 6.18 - Disaster Recovery Scenarios

**Unit:** Provisioning & Deprovisioning | **Tier:** 2 | **Duration:** ~10 hours

---

## 🎯 Learning Objectives

- Handle ISC failure scenarios
- Recover from corrupted provisioning data
- Restore services from backup
- Prevent provisioning disasters

---

## 📋 Prerequisites

Module 6.17: Reprovisioning Workflows. Reprovisioning understood.

---

## 📚 HANDS-ON LAB

### Objective

Prepare for and recover from disaster scenarios affecting provisioning.

---

### TASK 1: ISC System Failure

**Scenario: ISC appliance crashes**

```
What happens:
├─ ISC offline: Cannot provision/deprovision
├─ Existing access: Still works (accounts already created in systems)
├─ New hires: No access (ISC cannot provision)
├─ Role changes: Cannot be applied (ISC offline)
└─ Impact: High (access management stopped)

Recovery approach:
1. Restore ISC from backup (within 1 hour)
   ├─ IT: Brings ISC back online
   ├─ ISC: Restores from previous night's backup
   ├─ Data: All users, roles, workflows intact
   └─ Timeline: 30-60 minutes

2. Replay missed provisioning (after restore)
   ├─ ISC: Compares local db vs what's in systems
   ├─ Detects: What didn't get provisioned (new hires)
   ├─ Triggers: Automatic re-provisioning for missed
   └─ Timeline: < 10 minutes

3. Verify all access restored
   ├─ Check: New hires now have access
   ├─ Check: Role changes applied
   ├─ Status: Back to normal
   └─ Timeline: < 15 minutes from restore

Backup strategy:
├─ Daily backups: Every night at 11:00 PM
├─ Offsite backup: Copied to secure location
├─ Test restore: Monthly (verify backup works)
├─ Retention: 30 days of backups maintained
└─ RTO (Recovery Time Objective): 1 hour maximum
```

---

### TASK 2: Connector Failure

**Scenario: QB connector broken (API authentication failure)**

```
What happens:
├─ QB provisioning: Failed for all finance users
├─ Error: Cannot connect to QB
├─ Impact: New finance hires cannot access QB
├─ Existing: Still have access (not affected)
└─ Timeline: Discovered after 2 hours

Root cause:
├─ QB API key: Expired
├─ ISC: Using old key, QB rejects
├─ Result: All QB operations fail
└─ Detection: Admin notices in dashboard

Recovery:
1. Fix connector:
   ├─ QB: Generate new API key
   ├─ ISC: Update connector with new key
   ├─ Test: Click "Test Connection" → Success
   └─ Timeline: 10 minutes

2. Retry failed provisioning:
   ├─ ISC: Finds failed QB provisioning attempts
   ├─ Action: Retry all failed attempts
   ├─ Result: Finance users now provisioned
   └─ Timeline: < 5 minutes

3. Monitor:
   ├─ Check: All QB accounts created correctly
   ├─ Verify: Users can log in
   └─ Status: Back to normal

Prevention:
├─ Alerts: When API key expires soon
├─ Monitoring: Automatic re-test of connections
├─ Rotation: Auto-rotate keys every 90 days
└─ Redundancy: Backup API keys configured
```

---

### TASK 3: Data Corruption

**Scenario: Provisioning creates duplicate accounts in QB**

```
What happened:
├─ Bug in workflow: Role assignment doesn't check for existing
├─ Result: Created duplicate QB accounts (casey2, casey3, etc.)
├─ Impact: User confusion, cleanup nightmare
├─ Discovery: Admin runs reconciliation audit

Recovery:
1. Identify duplicates:
   ├─ QB: Find accounts with multiple copies
   ├─ Documentation: List all duplicates
   └─ Timeline: 30 minutes

2. Clean up:
   ├─ Keep: Most recent account (casey-final)
   ├─ Delete: Old duplicates (casey, casey2, etc.)
   ├─ Verify: Transfer any data (if any created)
   └─ Timeline: 1 hour

3. Fix workflow:
   ├─ Bug: Workflow doesn't check existing accounts
   ├─ Fix: Add "check if exists" logic
   ├─ Deploy: Updated workflow
   └─ Timeline: 30 minutes

4. Re-test:
   ├─ Test: Provision same user twice
   ├─ Result: Should use existing account (no duplicate)
   └─ Status: Bug fixed
```

---

### TASK 4: Mass Deprovisioning Accident

**Scenario: All users accidentally deprovisioned**

```
What happened:
├─ Script error: Workflow runs on ALL users instead of target
├─ Result: All 13 users deprovisioned (roles removed)
├─ Impact: Everyone has NO access
├─ Discovery: Immediate (users report cannot log in)

Response (< 5 minutes):
1. STOP: Kill running workflow
   ├─ Identify: Runaway workflow
   ├─ Action: Terminate immediately
   └─ Timeline: < 1 minute

2. Restore from ISC backup:
   ├─ Backup: From 1 hour ago (before accident)
   ├─ Restore: Role assignments
   ├─ All users: Back in their proper roles
   └─ Timeline: 10 minutes

3. Trigger re-provisioning:
   ├─ All users: Roles restored
   ├─ ISC: Re-provisions to all systems
   ├─ Users: Regain access
   └─ Timeline: < 10 minutes

Total downtime: 20 minutes (acceptable for critical incident)

Prevention:
├─ Approval: Workflow changes require code review
├─ Testing: Always test in sandbox first
├─ Limits: Workflows can only affect assigned users (not all)
├─ Confirmation: Require confirmation before running
└─ Monitoring: Alert on mass changes
```

---

### TASK 5: Disaster Recovery Plan

**Document complete DR approach:**

```
ISC Provisioning Disaster Recovery Plan:

RPO (Recovery Point Objective): 1 hour
└─ Acceptable data loss: Up to 1 hour of changes

RTO (Recovery Time Objective): 1 hour
└─ Must be back online within 1 hour

Backup strategy:
├─ Daily: Nightly full backup (11:00 PM)
├─ Offsite: Copied to secure location
├─ Test: Monthly restore test (verify works)
└─ Retention: 30 days of backups

Disaster scenarios:

1. ISC Hardware Failure:
   ├─ Response: Restore from backup to new hardware
   ├─ Time: < 1 hour
   └─ Skill: 2-3 IT staff trained

2. Connector API Credential Failure:
   ├─ Response: Regenerate credentials, update connector
   ├─ Time: < 15 minutes
   └─ Skill: Admin with target system access

3. Data Corruption:
   ├─ Response: Identify, isolate, clean up, re-provision
   ├─ Time: 1-2 hours (depends on scope)
   └─ Skill: Database admin, provisioning specialist

4. Workflow Bug (mass deprovisioning):
   ├─ Response: Kill workflow, restore backup, re-provision
   ├─ Time: 30 minutes
   └─ Skill: ISC admin, on-call engineer

Testing:
├─ Quarterly: Full DR exercise (restore backup, verify)
├─ Monthly: Backup restore test (verify backup works)
├─ Annually: Full outage simulation (all systems down)
└─ Documentation: Update plan based on findings

Training:
├─ All ISC admins: Know disaster recovery procedure
├─ On-call engineer: Can execute recovery
├─ Backup: Second person trained as backup
└─ Schedule: Annual refresher training

Communication:
├─ Internal: Alert all staff of outage
├─ External: Customer notification (if needed)
├─ Escalation: Contact senior management
└─ Status: Regular updates during recovery
```

---

## 🧪 EXPECTED RESULTS

✅ ISC failure recovery procedures documented
✅ Connector failure handling understood
✅ Data corruption cleanup process defined
✅ Mass accident prevention measures in place
✅ Complete disaster recovery plan

---

## ✅ SUCCESS CRITERIA

- ☑️ Know ISC failure recovery approach
- ☑️ Know connector failure recovery
- ☑️ Know data corruption cleanup
- ☑️ Know mass accident prevention
- ☑️ Have documented DR plan

---

## 🎓 CERTIFICATION

**Q:** ISC appliance crashes. How quickly should it be back online?

A) By next morning
B) ✅ Within 1 hour (RTO)
C) By end of week
D) Not critical

**Answer: B.** RTO = 1 hour maximum (critical system).

---

## 📚 RESOURCES

- [Module 6.17: Reprovisioning Workflows](/modules/6.17-reprovisioning-workflows)
- [Next: 6.19 - Provisioning Validation Audit](/modules/6.19-provisioning-validation-audit)

---

## ✅ NEXT STEPS

1. Document disaster recovery plan
2. Test backup restore procedure
3. Train team on recovery steps
4. Proceed to 6.19 for validation audit

