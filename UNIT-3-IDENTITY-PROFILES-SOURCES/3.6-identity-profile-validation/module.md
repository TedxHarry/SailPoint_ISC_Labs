# 3.6 - Identity Profile Validation

**Unit:** Identity Profiles & Sources | **Tier:** 1 | 

---

## 🎯 Learning Objectives

- Validate Identity Profile
- Test mappings work
- Verify data quality

---

## 📋 Prerequisites

Module 3.5: Advanced Attribute Mapping.

---

## 📚 HANDS-ON LAB

### Validate Profile

In Contoso_Entra_Profile > Validate:

ISC will:
1. Check schema completeness
2. Verify all mappings defined
3. Test transformations syntax
4. Report errors/warnings

### Common Issues

- **Missing required attributes:** Profile will flag if required attributes not mapped
- **Invalid transformations:** Syntax errors in rules (concatenation, conditionals)
- **Type mismatches:** Trying to map string to date, etc.

### Fix Issues

Fix any errors ISC reports:
1. Add missing mappings
2. Fix transformation syntax
3. Correct type mismatches
4. Re-validate

### Success Criteria

Green checkmark: Profile valid and ready for connector.

---

## 🧪 TASK

1. In Contoso_Entra_Profile > click Validate
2. Review any errors/warnings
3. Fix issues if any
4. Re-validate until green checkmark

---

## ✅ SUCCESS CRITERIA

- ☑️ Profile validates successfully
- ☑️ No errors
- ☑️ Ready for Module 3.7
