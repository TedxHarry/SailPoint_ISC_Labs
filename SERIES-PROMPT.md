# SERIES-PROMPT: SailPoint ISC Lab Module Template
## Complete Guide for Writing Each Lab Module

This is the **template and guidelines** for writing all lab modules in this series. Follow this structure exactly for consistency.

---

## 📋 FILE LOCATION & NAMING

```
UNIT [N] - [NAME]/
├── [module-slug]/
│   ├── module.md (main lab content - THIS FILE)
│   ├── lab-data/ (optional)
│   │   ├── sample-data.csv
│   │   └── templates.json
│   └── solutions/ (optional)
│       └── expected-output.md
```

**File naming:**
- Folder: `UNIT-[N]-[UNIT-NAME]` (e.g., `UNIT-1-FUNDAMENTALS`)
- Module folder: `[number].[number]-[slug]` (e.g., `1.1-intro-to-isc`)
- Main file: Always `module.md`

**Example path:**
```
/UNIT-1-FUNDAMENTALS/1.1-intro-to-isc/module.md
```

---

## 📝 MODULE TEMPLATE (EXACT STRUCTURE)

Copy and paste this template for every module. Fill in each section completely.

```markdown
# [Unit Number].[Module Number] - [Module Title]

**Unit:** [Unit Name] | **Tier:** [1/2/3/4] | **Duration:** ~[X] hours

---

## 🎯 Learning Objectives

By the end of this module, you will be able to:
- Objective 1 (specific, measurable)
- Objective 2 (specific, measurable)
- Objective 3 (specific, measurable)
- Objective 4 (specific, measurable)

---

## 📋 Prerequisites

**Knowledge Required:**
- [Prerequisites - concepts/modules]
- Example: "Understanding of basic identity concepts (Module 1.3)"
- Example: "Completed ISC sandbox setup"

**Access Required:**
- [ ] ISC sandbox access
- [ ] Entra ID tenant access
- [ ] CSV data files

**Time Required:** ~[X] hours
**Difficulty:** [Beginner/Intermediate/Advanced]

---

## 🔍 CONTEXT & BUSINESS SCENARIO

**Scenario:** [Which scenario? Contoso/RegionTech/GlobalBank]

**Business Background:**
[2-3 paragraph explanation of why this matters in real world]

Example:
> In Contoso Ltd's small deployment, understanding ISC fundamentals is critical before proceeding. Finance users need access to multiple systems based on their roles. This module establishes the foundation for all future access management...

**What You'll Be Doing:**
[Describe what user will do in practical terms]

Example:
> In this lab, you'll explore the ISC user interface, understand its core components, and navigate to the settings needed for upcoming modules. This is your first real hands-on experience with the system.

---

## 📚 CONCEPTUAL FOUNDATION

### Core Concept 1: [Concept Name]

**Definition:**
[Clear, one-paragraph definition]

**Why It Matters:**
[2-3 sentences on business/technical relevance]

**In ISC Context:**
[How this appears/works in ISC UI]

**Example:**
[Real-world Contoso example]

### Core Concept 2: [Concept Name]
[Repeat structure above]

### Core Concept 3: [Concept Name]
[Repeat structure above]

---

## 🧪 HANDS-ON LAB

### Pre-Lab Checklist

Before starting, verify:
- [ ] [Requirement 1]
- [ ] [Requirement 2]
- [ ] [Requirement 3]
- [ ] [You have [X hours] available]

### Lab Scenario

**Given:** [Starting state]

Example: "You have a new ISC sandbox with 10 test users from Entra ID already imported"

**Task:** [High-level goal]

Example: "Configure basic ISC settings and prepare for role creation"

**Expected Outcome:** [What success looks like]

Example: "ISC is configured, audit logs are enabled, and you understand the main navigation areas"

---

## 📍 STEP-BY-STEP INSTRUCTIONS

### STEP 1: [Description of what you're doing]

**Context:** [Why this step matters]

**Actions:**
1. [Numbered action 1]
   - Text box: Enter "[value]"
   - Click: [Button/Link name]
   - Expected: You see "[X]"

2. [Numbered action 2]
   - Navigate to: [Location in menu]
   - Look for: [Element name/icon]
   - Click: [Button/Link]

3. [Numbered action 3]
   - Verify: [What you should see]
   - Note: Any important details

**Detailed Example Format:**
```
1. Log into ISC sandbox
   - Go to: https://[your-sandbox-url]
   - Enter: Your username (same as ISC onboarding email)
   - Enter: Your temporary password
   - Click: [Sign In] button
   - Expected: You see ISC dashboard with "Welcome [Your Name]"

2. Navigate to Administration area
   - Look for: Left sidebar with navigation menu
   - Find: "Administration" section (third section down)
   - Click: "Administration"
   - Expected: Admin panel opens showing "Tenants", "Users", etc.

3. Verify audit logging is enabled
   - Click: "Audit Configuration" or similar
   - Look for: Toggle/checkbox for "Enable Audit Logging"
   - Verify: It shows "On" or "Enabled"
   - If not: Click toggle to enable, wait for confirmation
```

**Troubleshooting (for this step):**
- **If:** [Problem description] → **Then:** [Solution]
  - Example: If you can't find the Administration menu → Then scroll down in left sidebar or search for "Admin" in top search
- **If:** [Problem 2] → **Then:** [Solution 2]

### STEP 2: [Next action]
[Repeat step structure above]

### STEP 3: [Next action]
[Repeat step structure above]

### STEP 4: [Next action]
[Repeat step structure above]

### STEP 5: [Final step]
[Repeat step structure above]

---

## ✅ VALIDATION & EXPECTED RESULTS

After completing all steps, you should see:

| Check | Expected Result | How to Verify |
|-------|-----------------|---------------|
| [Check 1] | [Expected output 1] | [Verification method] |
| [Check 2] | [Expected output 2] | [Verification method] |
| [Check 3] | [Expected output 3] | [Verification method] |

**Example:**
| Check | Expected Result | How to Verify |
|-------|-----------------|---------------|
| ISC Dashboard | 10 users shown in identity list | Go to Search → Identity → Count results |
| Audit Logging | Logging is enabled | Go to Admin → Audit Config → See "Enabled" status |
| Navigation | All main menu items visible | Look at left sidebar, see 6+ menu sections |

### Success Criteria

You have successfully completed this lab if:
- ☑️ [Success criterion 1]
- ☑️ [Success criterion 2]
- ☑️ [Success criterion 3]

---

## 🔧 TROUBLESHOOTING GUIDE

### Common Issue 1: [Issue Title]

**Problem:** [Description of what happens]

**Root Cause:** [Why it happens]

**Solution:**
1. [Step 1 to fix]
2. [Step 2 to fix]
3. [Verify fix worked]

**Prevention:** [How to avoid next time]

### Common Issue 2: [Another issue]
[Repeat structure above]

### Common Issue 3: [Another issue]
[Repeat structure above]

### If You Get Stuck

1. Re-read the step carefully
2. Check troubleshooting guide above
3. Verify prerequisites are complete
4. Ask in SailPoint Developer Community: [link]

---

## 📝 DOCUMENTATION & DELIVERABLES

**For This Module, Create:**

1. **Lab Completion Checklist:**
   - [ ] Completed all 5 steps
   - [ ] Verified all expected results
   - [ ] No errors or warnings remaining
   - [ ] Took screenshot of final state (optional)

2. **Notes for Your Own Reference:**
   - What was the hardest part?
   - What would you do differently next time?
   - Any shortcuts you discovered?

3. **Save ISC Configuration:**
   - [If applicable] Export any configurations created
   - [If applicable] Note down any IDs or names for future reference

---

## 🧠 KEY CONCEPTS TO REMEMBER

- **Concept 1:** [Key point - single sentence]
- **Concept 2:** [Key point - single sentence]
- **Concept 3:** [Key point - single sentence]
- **Best Practice 1:** [Best practice - single sentence]
- **Best Practice 2:** [Best practice - single sentence]

---

## 🎓 CERTIFICATION ALIGNMENT

**Certification Domain(s) Covered:**
- Domain: [Certification domain]
  - Exam focus: [What exam will test]
  - Coverage level: [Basic/Intermediate/Advanced]

**Practice Exam Questions:**

**Q1:** [Question]
- A) [Option A]
- B) [Option B]
- C) [Option C] ← **Correct Answer**
- D) [Option D]

**Explanation:** [Why C is correct, why others are wrong]

---

## 📚 ADDITIONAL RESOURCES

### Official Documentation
- [Link to relevant SailPoint docs]
- [Link to relevant Microsoft/Entra docs]

### Related Modules
- **Before this:** [Previous module link]
- **After this:** [Next module link]
- **Related:** [Parallel module link]

### External Resources
- [Developer Community discussion]
- [Blog post or article]
- [Video tutorial] (if available)

---

## 🔄 OPTIONAL: EXTENDING THIS LAB

### Challenge 1: [Intermediate Extension]
If you finish early and want more practice:
- [Extended task 1]
- [Extended task 2]

**Expected Time:** +30 minutes

### Challenge 2: [Advanced Extension]
For those wanting deeper understanding:
- [Advanced task 1]
- [Advanced task 2]

**Expected Time:** +1 hour

---

## 📊 PROGRESS TRACKING

**Time Spent:** [User fills this in: _____ hours]

**Difficulty Rating (1-10):** [User fills this in: _____]

**Confidence Level (1-10):** [User fills this in: _____]

**Notes/Feedback:**
[User fills this in]

---

## ✏️ SOLUTIONS & ANSWERS

[OPTIONAL SECTION - Only if created]

### Expected Output Files

- `solutions/expected-output.md` - Detailed solution walkthrough

### Common Alternative Approaches

Some labs have multiple valid solutions. If you chose a different approach:
- [Alternative 1 - description]
- [Alternative 2 - description]

Both are acceptable if they achieve the same objectives.

---

## 🎯 NEXT STEPS AFTER THIS MODULE

1. ✅ Complete this module fully
2. ✅ Review Key Concepts section
3. ✅ Practice troubleshooting any issues
4. ✅ Review Certification Questions
5. → Proceed to [Next Module Name] (Module X.X)

---

## 📞 SUPPORT

**Need Help?**
1. Check Troubleshooting section above
2. Review Related Modules for context
3. Check official documentation links
4. Ask in [Community Forum Link]

**Have Suggestions?**
- Spotted an error?
- Lab didn't work as written?
- Have a better way to explain something?
- [Submit feedback via GitHub Issues]

---

**Module Created:** [Date]
**Last Updated:** [Date]
**Difficulty:** [Beginner/Intermediate/Advanced]
**Estimated Time:** ~[X] hours
**Status:** [Draft/Complete/Updated]

---

## FOOTER NOTES

**For Module Writers:**
- Keep language clear and direct
- Every step should be specific and measurable
- Include troubleshooting proactively
- Relate everything back to business context
- Always include certification alignment
- Make sure labs are repeatable with same results
```

---

## 🎯 GUIDELINES FOR WRITERS

### 1. LANGUAGE & TONE
- ✅ DO: Use clear, direct language (action verbs: "Click", "Navigate", "Enter")
- ✅ DO: Address reader as "you"
- ✅ DO: Be specific (give exact field names, button labels, expected results)
- ❌ DON'T: Use vague phrases like "do the thing" or "similar area"
- ❌ DON'T: Assume knowledge not covered in prerequisites
- ❌ DON'T: Skip the "why" - always explain context

### 2. STEP STRUCTURE
- ✅ Each step should be completable in 2-5 minutes
- ✅ Include "Expected" results after each action
- ✅ Use nested bullets for related actions
- ✅ Include screenshots/descriptions of what appears
- ❌ DON'T: Combine multiple tasks into one step
- ❌ DON'T: Assume user knows where things are

### 3. TROUBLESHOOTING
- ✅ DO: List common issues proactively
- ✅ DO: Explain root causes (not just "try again")
- ✅ DO: Provide clear solutions
- ❌ DON'T: Wait until problems happen
- ❌ DON'T: Say "This usually works, if not, ask for help"

### 4. EXAMPLES
- ✅ DO: Use Contoso/RegionTech/GlobalBank real scenarios
- ✅ DO: Show actual field values, not just placeholders
- ✅ DO: Explain why we're doing it this way
- ❌ DON'T: Use generic "example text"
- ❌ DON'T: Skip the business context

### 5. ESTIMATED TIME
- Each module should be ~10-12 hours of effort:
  - Conceptual foundation: 2-3 hours
  - Lab execution: 4-6 hours
  - Troubleshooting/experimentation: 2-3 hours
  - Documentation/reflection: 1 hour

### 6. TESTING
- Write lab as if you're doing it for first time
- Have someone else test it without help
- Fix any unclear steps
- Verify all expected results are achievable
- Time actual completion

---

## TEMPLATE CHECKLIST

Before submitting a module, verify:

- [ ] File location is correct: `UNIT-X-NAME/X.Y-slug/module.md`
- [ ] All 10 sections are included and complete
- [ ] Learning Objectives are specific and measurable
- [ ] Prerequisites are listed clearly
- [ ] 4-5 Core Concepts explained
- [ ] 5+ Steps with detailed instructions
- [ ] Expected Results validation table included
- [ ] 3+ Troubleshooting items listed
- [ ] Certification alignment documented
- [ ] 2 Practice Exam Questions with explanations
- [ ] Previous/Next module links included
- [ ] Success Criteria are clear
- [ ] Time estimates included
- [ ] Language is clear and direct
- [ ] All field names and button labels are specific

---

## 📄 EXAMPLE COMPLETION

Here's what a complete module looks like. See `SAMPLE-LABS/` folder for full working examples.

**Quick Reference:**
- Full example: 3,000-4,000 words
- Estimated time: ~10-12 hours for user
- Steps: 4-6 major steps (with sub-steps)
- Issues handled: 3-5 common problems

---

**This Template Version:** 1.0
**Last Updated:** March 2, 2026
**For Use In:** SailPoint ISC Labs - All Modules
