---
title: "AI-Enabled Auto-Healing for Web Applications"
page_title: "AI-Enabled Auto-Healing for Web Applications"
metadesc: "Testsigma’s AI-powered auto-healing detects and fixes broken element locators during web test execution, ensuring tests stay stable despite UI changes."
noindex: false
order: 4.913
page_id: "ai-enabled-auto-healing-for-web-applications"
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
- type: link
  name: "Auto-Healing Insights"
  url: "#auto-healing-insights"
---

---

Testsigma’s AI-Enabled auto-healing automatically detects and fixes broken element locators caused by UI changes during web test execution. This article discusses how auto-healing identifies and updates element locators while executing web test cases.

---

> ## **Prerequisites**
> 
> Before you begin, ensure that you have referred to:
>  1. [Documentation on enabling the auto-healing feature](https://testsigma.com/docs/auto-healing/enable-the-auto-healing-feature/).
>  2. [Documentation on managing test cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).
>  3. [Documentation on creating elements](https://testsigma.com/docs/elements/overview/).


---

## **Use Case for Auto-Healing**

Let’s say we are testing a login page for https://www.facebook.com/.

Here are the steps to produce:
   - Navigate to https://www.facebook.com/.
   - Enter demo@example.com in the Email address or phone number field.
   - Enter demopassword in the Password Input field.
   - Click on Log in Button.

Consider that the XPATH for the Email address or phone number button on step 2 changed from **input["email"]** to **input[id="email"]**.

On executing the test case with the Auto-Healing feature enabled, the test lab will successfully locate the element with the new XPATH.

![Auto-Heal Web](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/auto_healing/Auto_heal_web.png)

---

## **Auto-Healing Insights**

Once the test execution is complete, please refer to the [documentation on Auto-Healing Insights](https://testsigma.com/docs/auto-healing/auto-healing-insights/) to view the auto-healing results and learn how to update the element locator. 

---