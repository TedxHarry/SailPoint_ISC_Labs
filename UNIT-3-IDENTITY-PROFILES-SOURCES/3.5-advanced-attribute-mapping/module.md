# 3.5 - Advanced Attribute Mapping

**Unit:** Identity Profiles & Sources | **Tier:** 1 | 

---

## 🎯 Learning Objectives

- Use transformation rules
- Concatenate attributes
- Use conditional logic

---

## 📋 Prerequisites

Module 3.4: Attribute Mapping Basics.

---

## 📚 HANDS-ON LAB

### Transformation Examples

**Concatenation:** Combine attributes
```
displayName = firstName + " " + lastName
Example: Alex + Lee = "Alex Lee"
```

**Lowercase:** Convert to lowercase
```
email = toLower(mail)
Example: "Alex.Lee@Contoso.com" → "alex.lee@contoso.com"
```

**Substring:** Extract part of attribute
```
username = substring(mail, 0, indexOf(mail, "@"))
Example: "alex.lee@contoso.com" → "alex.lee"
```

**Conditional:** If-then logic
```
department = if(department == null, "Unassigned", department)
If no department, use "Unassigned"
```

### For Contoso

Add transformation for displayName:
```
displayName = firstName + " " + lastName
```

This creates friendly display names from first/last.

---

## 🧪 TASK

1. In Contoso_Entra_Profile > go to advanced mappings
2. Add displayName transformation (firstName + " " + lastName)
3. Save transformation
4. Verify it shows in mappings list

---

## ✅ SUCCESS CRITERIA

- ☑️ displayName transformation added
- ☑️ Syntax correct
- ☑️ Saved successfully
