---
title: "Test Cases for Mobile Web Applications"
pagetitle: "Test Cases for Mobile Web Applications"
metadesc: "Create mobile web test cases in Testsigma using Atto and AI-powered Copilot. Learn four simple approaches to get started quickly and efficiently."
noindex: false
order: 4.14
page_id: "test-cases-for-mobile-web-applications"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Generate Test Cases Using Atto"
  url: "#steps-to-generate-test-cases-using-atto"
- type: link
  name: "Steps to Create Test Cases Using Recorder"
  url: "#steps-to-create-test-cases-using-recorder"
- type: link
  name: "Steps to Create Test Cases Using NLPs"
  url: "#steps-to-create-test-cases-using-nlps"
---

---

Using Testsigma, you can easily create test cases for mobile web applications using Atto and the AI-powered Copilot. This article walks you through all four approaches to help you get started quickly.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that you have referred to:
> 
> 1. [Documentation on creating projects](https://testsigma.com/docs/projects/overview/).
> 2. [Documentation on creating applications](https://testsigma.com/docs/projects/applications/).
> 3. [Documentation on Testsigma chrome extension installation](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/).
> 4. Also, you have a mobile web app to test.

---

## **Steps to Generate Test Cases Using Atto**

Please refer to the [documentation on generating test cases using Atto for Mobile Web applications](https://testsigma.com/docs/atto/generative-ai/generate-tests/mobile-web/).

---

## **Steps to Create Test Cases Using Recorder**

1. From the left navigation bar, go to **Create Tests > Test Cases**, and click **Create Test Case**.
![Test Cases](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/mwatcnav.png)

2. On the **Test Case Details** page, click on **Record** at the top right corner.
![Test Case Details](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/mwatcrc.png)

3. This will open a new window. Enter the URL from which you want to capture the test cases. The **Testsigma Recorder** will appear and be ready to start recording. In this case, we are recording a test case for the 1mg website.
![New Window](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/mwanwowrc.png)

4. Press **F12** to open **Chrome Developer Tools** and dock the tools to the right side of the window for a better experience.
![F12](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/mwacdtools.png)

[[info | **NOTE**:]]
| Make sure you have selected **Companion Mode** located in the action bar at the top.
| ![Companion Mode](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/compmode.png)

5. Click on **>>** and select **Testsigma Recorder** from the dropdown menu. 
![Testsigma Recorder](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/mwaae.png)

6. This will open **Testsigma Recorder** on the **Developer Tools** screen.
![Recorder on Dev Tools](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/mwatrocdt.png)

[[info | **NOTE**:]]
| Select the dimension from pre-defined devices on which you want to record the elements. If the device required for your testing is not listed, you can add a custom device by selecting **Edit** from the **Dimensions** dropdown menu and clicking **Add custom device**.
| ![Add Custom Device](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/mwatccd.png)
| 
| Some devices might have unique characteristics that will affect element display and interaction, and adding a custom device required for your testing is necessary to identify and resolve these issues.

7. Once you have selected the dimension, record test steps by performing actions on the website.
![Test Cases for MWA](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/mwatcctsbpa.png)

---

## **Steps to Create Test Cases Using NLPs**

1. From the left navigation bar, go to **Create Tests > Test Cases** and create a test case. 

2. In the Test Case Details page, enter the URL in which you want to perform the actions and capture the test steps, and click **Create Step**.
![Create step](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/mobile_web_test_case_nlp_1.1.png)

3. For example, here are the test steps to log in to the **Simply Travel** website:

   - Navigate to https://simply-travel.testsigma.com/
   - Tap on Login / Sign Up Button
   - Tap on Login Button
   - Enter robert@gmail.com in the Email Address Input field
   - Tap on Continue Button
   - Enter •••••••• in the Password Input field
   - Tap on Submit Button
   ![Example](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/mobile_web_test_case_nlp_2.png)

---
