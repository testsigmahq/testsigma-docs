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

> ## **Prerequisites**
>
>
> Before you begin, ensure that you know how to [Manage a Test Case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/) and how to [Create Elements](https://testsigma.com/docs/elements/overview/).

---

## **Steps to Enable Auto Healing Feature**

1. Navigate to **Settings > Preferences**.

![Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ahsetngs.png)

2. On the **Preferences** page, enable the toggle on **Auto Healing** widget. 

![Preferences](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ahpref.png)

Your tests are ready to execute without manual intervention whenever there are changes in the build. The Auto Healing feature will take care of correcting the elements.

Here’s the GIF demonstrating how to enable the Auto Healing feature.

![Auto Healing Feature](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ahenable.gif)
---

## **Use Case for Auto Healing**

Let’s say we are testing a login page for https://simply-travel.testsigma.com/. 

Here are steps to produce:
1. Navigate to https://simply-travel.testsigma.com/.
2. Click on Login/SignUp.
3. Click on Login.
4. Enter bsk08@gmail.com in the email field. 
5. Click on Continue.
6. Enter 98764321 in the password field.
7. Click on Submit.

Consider that the XPATH for Login button on the step 3 changed from **//BUTTON[@id='login']** to **//BUTTON[@id='login-popUp']**. 

On executing the test case with **Auto Healing** feature enabled, the test lab will successfully locate the element with the new XPATH. 

![Locate Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ahdif.png)

---

## **Auto Healing Insights**

On successful completion of test execution, you can check the auto healing insights from the results page. Follow the steps below:

1. Click on the test step in which the element is auto healed.

![Healed Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ahelem.png)

2. Go to the step result and click on **Auto Heal**. This will open the **Auto Healing Details** overlay.

![Auto Heal](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ahstep.png)

3. You can check the **Auto Healing Insights** here.

![Insights](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ahdinsights.png)

Here’s the GIF demonstrating how to check the Auto Healing insights.

![Auto Healing Insights](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/AHInsights.gif)




---