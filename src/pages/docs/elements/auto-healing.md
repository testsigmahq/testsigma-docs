---
title: "AI Enabled Auto-Healing"
metadesc: "Auto Healing helps prevent object flakiness when there are minor changes to the elements. This article discusses how to enable Auto Healing Feature in Testsigma"
noindex: false
order: 6.91
page_id: "Auto Healing"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Enable Auto Healing Feature"
  url: "#steps-to-enable-auto-healing-feature"
- type: link
  name: "Use Case for Auto Healing"
  url: "#use-case-for-auto-healing"
- type: link
  name: "Auto Healing Insights"
  url: "#auto-healing-insights"
---

---


Auto Healing helps prevent object flakiness and ensures your tests are reliable even when there are minor changes to the elements, and the locators fail to identify the element based on their previous attributes. This article discusses Auto Healing feature in Testsigma. 

---

> <p id="prerequisites">Prerequisites</p>
>
>
> Before you begin, ensure that you have referred to:
> 1. [Documentation on managing test cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).
> 2. [Documentation on creating elements](https://testsigma.com/docs/elements/overview/).

---

## **Steps to Enable Auto Healing Feature**

1. Navigate to **Settings > Preferences**.
   ![Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/auto_heal_1.png)

2. On the **Preferences** page, enable the toggle on **Auto Healing** widget. 
   ![Preferences](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/auto_heal_2.png)

Your tests are ready to execute without manual intervention whenever there are changes in the build. The Auto Healing feature will take care of correcting the elements.

---

## **Use Case for Auto Healing**

Let’s say we are testing a login page for https://www.facebook.com/. 

Here are steps to produce:
1. Navigate to https://www.facebook.com/.
2. Enter demo@example.com in the Email address or phone number field. 
3. Enter demopassword in the Password Input field. 
4. Click on Log in Button. 

Consider that the XPATH for Login button on the step 2 changed from **input["email"]** to **input[id="email"]**. 

On executing the test case with **Auto Healing** feature enabled, the test lab will successfully locate the element with the new XPATH. 
![Locate Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/auto_heal_3.png)

---

## **Auto Healing Insights**

On successful completion of test execution, you can check the auto healing insights from the results page. Follow the steps below:

1. Click on the test step in which the element is auto healed.
   ![Healed Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/auto_heal_4.png)

2. Go to the step result and click on **Autoheal Details**. This will open the **Auto Healing Details** overlay.
   ![Auto Heal](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/auto_heal_5.png)

3. You can check the **Auto Healing Insights** here.
   ![Insights](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/auto_heal_6.png)

4. If you would like to update the element value, click **Update**.
   ![Update](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/auto_heal_7.png)

5. On the **Update Element** dialog, click **Update**. 
   ![Update Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/auto_heal_8.png)

---