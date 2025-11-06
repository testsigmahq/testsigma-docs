---
title: "AI-Enabled Auto-Healing for Mobile Applications"
page_title: "AI-Enabled Auto-Healing for Mobile Applications"
metadesc: "Testsigma’s AI-powered auto-healing detects and fixes broken element locators during mobile test execution, ensuring tests stay stable despite UI changes."
noindex: false
order: 4.824
page_id: "ai-enabled-auto-healing-for-mobile-applications"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Use Case for Auto-Healing"
  url: "#use-case-for-auto-healing"
---

---

Testsigma’s AI-Enabled auto-healing automatically detects and fixes broken element locators caused by UI changes during mobile test execution. This article discusses how auto-healing identifies and updates element locators while executing mobile test cases.

---

> ## **Prerequisites**
> 
> Before you begin, ensure that you have referred to:
>  1. [Documentation on enabling the auto-healing feature]((https://testsigma.com/docs/ai-agents/auto-healing/enable-the-auto-healing-feature/)).
>  2. [Documentation on managing test cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).
>  3. [Documentation on creating elements](https://testsigma.com/docs/elements/overview/).

---

## **Use Case for Auto-Healing**

Let’s say we are testing a login page for https://simply-travel.testsigma.com/. 

Here are the steps to produce:
   - Launch App.
   - Tap on Login.
   - Enter demo@gmail.com  in the Enter email address field.
   - Enter Demo@123 in the Enter password field. 
   - Tap on Continue.
 
Consider that the XPath for the Enter email address button on step 3 changed from **emai** to **//android.widget'.EditText[@resource-id="email"]**.

When executing the test case with the Gen AI Auto Healing feature enabled, the test lab will successfully locate the element using the new XPath.

![Auto-Heal Mobile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/auto_healing/auto_heal_mobile.png)

Once the test execution is complete, please refer to the [documentation on Auto-Healing Insights](https://testsigma.com/docs/ai-agents/auto-healing/auto-healing-insights/) to view the auto-healing results and learn how to update the element locator. 

---