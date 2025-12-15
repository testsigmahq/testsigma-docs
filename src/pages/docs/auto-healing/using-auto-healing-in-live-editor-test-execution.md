---
title: "Using Auto-Healing in Live Editor Test Execution"
page_title: "Using Auto-Healing in Live Editor Test Execution"
metadesc: "Enable Auto-Healing in the Live Editor to validate and fix element locators in real time, ensuring tests stay stable despite UI changes during execution."
noindex: false
order: 4.916
page_id: "using-auto-healing-in-live-editor-test-execution"
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

With Auto-Healing enabled, you can execute test cases directly in the Live Editor to validate element locators in real time. This helps ensure that any changes in the application’s UI are automatically detected and corrected during execution. This article discusses how auto-healing identifies and updates element locators while executing test cases in the Live Editor.

---

> ## **Prerequisites**
> 
> Before you begin, ensure that: 
>  1. You have referred to the [documentation on enabling the auto-healing feature](https://testsigma.com/docs/auto-healing/enable-the-auto-healing-feature/).
>  2. You have referred to the [documentation on installing the Testsigma Terminal](https://testsigma.com/docs/live-editor/intro-testsigma-terminal/).
>  3. You have referred to the [documentation on managing test cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).

---

## **Use Case for Auto-Healing**

Let’s say we are testing a login page for https://www.facebook.com/.

Here are the steps to produce:
   - Navigate to https://www.facebook.com/.
   - Enter demo@example.com in the Email address or phone number field.
   - Enter demopassword in the Password Input field.
   - Click on Log in Button.

1. Once you have created the test steps, click **Live Editor**. 
   ![Copilot](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/auto_healing/Live_editor_1.png)

2. On the **Live Editor** overlay, configure the required options and click **Launch**. 
   ![Launch](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/auto_healing/Live_editor_2.png)

 - Consider that the XPATH for the element Email address or phone number on step 2 changed. 
   ![Copilot](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/auto_healing/live_editor_7.png)

 - When the test case is executed in the Live Editor with the Gen AI auto-healing feature enabled, Testsigma automatically identifies the updated XPath and successfully locates the element.
   ![Auto-Heal](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/auto_healing/Live_editor_3.png)
---

## **Auto-Healing Insights**

Once the test execution is complete, please refer to the [documentation on Auto-Healing Insights](https://testsigma.com/docs/auto-healing/auto-healing-insights/) to view the auto-healing results and learn how to update the element locator. 

---
