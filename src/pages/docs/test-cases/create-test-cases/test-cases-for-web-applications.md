---
title: "Test Cases for Web Applications"
pagetitle: "Test Cases for Web Applications"
metadesc: "Create web test cases in Testsigma using Atto and AI-powered Copilot. Learn four simple approaches to get started quickly and efficiently."
noindex: false
order: 4.12
page_id: "test-cases-for-web-applications"
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
  name: "Steps to Generate Test Cases Using Copilot"
  url: "#steps-to-generate-test-cases-using-copilot"
- type: link
  name: "Steps to Create Test Cases Using Recorder"
  url: "#steps-to-create-test-cases-using-recorder"
- type: link
  name: "Steps to Create Test Cases Using NLPs"
  url: "#steps-to-create-test-cases-using-nlps"
---

---

Using Testsigma, you can easily create test cases for web applications using Atto and the AI-powered Copilot. This article walks you through all four approaches to help you get started quickly.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that:
> 
> 1. You have referred to the [Documentation on creating projects](https://testsigma.com/docs/projects/overview/).
> 2. You have referred to the [Documentation on creating folders](https://testsigma.com/docs/test-cases/manage/features-and-scenarios/).
> 3. Testsigma Terminal is installed and the Copilot is ready.
> 4. You have referred to the [Documentation on creating Elements](https://testsigma.com/docs/elements/web-apps/create-manually/).

---

## **Steps to Generate Test Cases Using Atto**

Please refer to the documentation on [generating test cases using Atto for web applications](https://testsigma.com/docs/atto/generative-ai/generate-tests/web/). 

---

## **Steps to Generate Test Cases Using Copilot**

1. From the left navigation bar, go to **Create Tests > Test Cases**.
![Test cases](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/web_test_case_copilot_1.png)

2. In the Test Case Explorer section, expand a **Feature** and click the **+** icon next to the required Scenario. This opens a dialog box.
![New test case](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/web_test_case_copilot_2.png)

3. In the dialog box, validate the target feature and scenario, enter the name in the Test Case Name input box, and click **Create**.
![Create](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/web_test_case_copilot_3.png)

4. In the Test Case Details page, enter the URL in which you want to perform the actions and capture the test steps, and click **Create Step**.
![Create step](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/web_test_case_copilot_4.png)

5. Click **Copilot**.
![Copilot](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/web_test_case_copilot_5.png)

6. In the **Copilot** overlay, click **Launch**.
![Launch](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/web_test_case_copilot_6.png)

7. The Copilot opens a new browser window and executes the URL.

8. In the Copilot dialog, click **Rec** and perform the actions on the page that you want to capture as test steps.
![Rec](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/web_test_case_copilot_7.png)

9. Once you have recorded all the necessary steps, click **Stop recording**.
![Stop recording](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/web_test_case_copilot_8.png)

10. Click **Exit Copilot**. A dialog box opens.
![Exit Copilot](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/web_test_case_copilot_9.png)

11. In the **Stop & Exit Copilot** dialog, click **Stop Copilot**.
![Stop copilot](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/web_test_case_copilot_10.png)

All the recorded test steps will now be available in the Test Case Details page, ready for review and execution.

[[info | **NOTE**:]]
| - In the Copilot dialog, you can click **Generate Steps** to automatically generate test scenarios based on the current page. Select a scenario from the list and Copilot will instantly create the test steps for it. ![generate steps](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/web_test_case_copilot_11.png)
| - To learn more about the features available in the **Copilot** dialog, please refer to the [documentation on Copilot Test Authoring for Web Application](https://testsigma.com/docs/debugging/debugging-localdevices-web/).

---

## **Steps to Create Test Cases Using Recorder**

1. From the left navigation bar, go to **Create Tests > Test Cases**. 
![Test cases](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/web_test_case_copilot_1.png)

2. In the Test Case Explorer section, expand a **Feature** and click the **+** icon next to the required Scenario. This opens a dialog box. 
![New test case](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/web_test_case_copilot_2.png)

3. In the dialog box, validate the target feature and scenario, enter the name in the Test Case Name input box, and click **Create**. 
![Create](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/web_test_case_copilot_3.png)

4. In the Test Case Details page, click **Record** at the top right corner.
![Record](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/web_test_case_record_1.png)

5. This will open a new window. Enter the URL from which you want to capture the test cases. The **Testsigma Recorder** will appear and be ready to start recording. 
![Testsigma Recorder](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/web_test_case_record_2.png)

6. Perform the actions on the page that you want to capture as test steps. 

7. Once you have recorded all the necessary steps, click **Stop**. 
![Stop](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/web_test_case_record_3.png)

All the recorded test steps will now be available in the Test Case Details page, ready for review and execution. 

---

## **Steps to Create Test Cases Using NLPs**

1. From the left navigation bar, go to **Create Tests > Test Cases**. 
![Test cases](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/web_test_case_copilot_1.png)

2. In the Test Case Explorer section, expand a **Feature** and click the **+** icon next to the required Scenario. This opens a dialog box.
![New test case](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/web_test_case_copilot_2.png)

3. In the dialog box, validate the target feature and scenario, enter the name in the Test Case Name input box, and click **Create**. 
![Create](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/web_test_case_copilot_3.png)

4. In the Test Case Details page, enter the URL in which you want to perform the actions and capture the test steps, and click **Create Step**.
![create step](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/web_test_case_nlp_1.png)

5. For example, here are the test steps to log in to the **Simply Travel** website:

   - Navigate to https://simply-travel.testsigma.com/
   - Click on Login / Sign Up Button
   - Click on Login Button
   - Enter robert@gmail.com in the Email Address Input field
   - Click on Continue Button
   - Enter •••••••• in the Password Input field
   - Click on Submit Button
   ![Simply travel](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/web_test_case_nlp_2.png)

---