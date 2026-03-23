---
title: "AI-Enabled Auto-Healing for Salesforce Applications"
page_title: "AI-Enabled Auto-Healing for Salesforce Applications"
metadesc: "Testsigma’s AI-powered auto-healing detects and fixes broken element locators during Salesforce test execution, ensuring tests stay stable despite UI changes."
noindex: false
order: 4.914
page_id: "ai-enabled-auto-healing-for-salesforce-applications"
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

Testsigma’s AI-Enabled auto-healing automatically detects and fixes broken element locators caused by UI changes during Salesforce test execution. This article discusses how auto-healing identifies and updates element locators during Salesforce test execution.

---

> ## **Prerequisites**
> 
> Before you begin, ensure that you have referred to:
> 1. [Documentation on enabling the auto-healing feature](https://testsigma.com/docs/auto-healing/enable-the-auto-healing-feature/).
> 2. [Documentation on managing test cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).
> 3. [Documentation on creating elements](https://testsigma.com/docs/elements/overview/).
> 4. [Documentation on Testsigma for Salesforce Testing](https://testsigma.com/docs/salesforce-testing/introduction/). 

---

## **Use Case for Auto-Healing**

Let’s say we are testing lead creation in the Salesforce Sales application using a Salesforce connection in Testsigma. 

Here are the steps to reproduce:
   - Login to the **Sales** application using the Salesforce connection.
   - Click on the **Leads List** button.
   - Click on the **New Lead** dropdown.
   - Enter **John** in the Lead First Name field.
   - Enter **Maxwell** in the Lead Last Name field.
   - Enter **Testsigma** in the Lead Company field.
   - Enter **john.maxwell@test.com** in the Lead Email field.
   - Click on the **Save** button.

Consider that the XPath for the **Leads List** button on Step 2 changed from **//div[@role='list']//one-app-nav-bar-item-root[5]** to **//span[text()[normalize-space() = 'Leads List']]/..**. 

When executing the test case with the **Auto-Healing** feature enabled, the test lab will successfully locate the element using the new XPath.

![Auto-heal Salesforce](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/auto_heal/salesforce_auto_heal_1.png)

---

## **Auto-Healing Insights**

Once the test execution is complete, please refer to the [documentation on Auto-Healing Insights](https://testsigma.com/docs/auto-healing/auto-healing-insights/) to view the auto-healing results and learn how to update the element locator. 

---
