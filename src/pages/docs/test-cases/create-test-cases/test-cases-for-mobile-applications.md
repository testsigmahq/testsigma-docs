---
title: "Test Cases for Mobile Applications"
pagetitle: "Test Cases for Mobile Applications"
metadesc: "Create mobile test cases in Testsigma using Atto and AI-powered Copilot. Learn four simple approaches to get started quickly and efficiently."
noindex: false
order: 4.13
page_id: "test-cases-for-mobile-applications"
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

Using Testsigma, you can easily create test cases for android & iOS applications using Atto and the AI-powered Copilot. This article walks you through all four approaches to help you get started quickly.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that:
> 
> You have referred to the [Documentation on creating projects](https://testsigma.com/docs/projects/overview/).
> You have referred to the [Documentation on creating folders](https://testsigma.com/docs/test-cases/manage/features-and-scenarios/).
> Testsigma Terminal is installed, and a local device is connected and available as a Test Machine.
> The application file (APK for Android or IPA for iOS) is available and uploaded as an App Source.
> You have referred to the [Documentation on creating Elements](https://testsigma.com/docs/elements/android-apps/create-manually/).

---

## **Steps to Generate Test Cases Using Atto**

Please refer to the [documentation on generating test cases using Atto for Mobile applications](https://testsigma.com/docs/atto/generative-ai/generate-tests/mobile/). 

---

## **Steps to Generate Test Cases Using Copilot**

1. From the left navigation bar, go to **Create Tests > Test Cases**.
![test cases](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/mobile_test_case_copilot_1.png)

2. In the Test Case Explorer section, expand a **Feature** and click the **+** icon next to the required Scenario. This opens a dialog box. 
![feature](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/mobile_test_case_copilot_2.png)

3. In the dialog box, validate the target feature and scenario, enter the name in the **Test Case Name** input box, and click **Create**.
![create](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/mobile_test_case_copilot_3.png)

4. In the Test Case Details page, click **Create Step**.
![create step](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/mobile_test_case_copilot_4.png)

5. Click **Copilot** at the top right corner.
![copilot](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/mobile_test_case_copilot_5.png)

6. In the **Copilot** overlay, configure **Test Machine** and **App Source**, and click **Launch**.
![launch](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/mobile_test_case_copilot_6.png)

7. Copilot opens a mirrored session of your application within Testsigma.

8. In the **Copilot** dialog, click **Rec** and perform the actions on the page that you want to capture as test steps.
![Rec](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/mobile_test_case_copilot_7.png)

9. Once you have recorded all the necessary steps, click **Stop Recording**.
![stop recording](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/mobile_test_case_copilot_8.png)

10. Click **Exit Copilot**. A dialog box opens.
![Exit copilot](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/mobile_test_case_copilot_9.png)

11. In the **Stop & Exit Copilot** dialog, click **Stop Copilot**. All the recorded steps are saved in the Test Case Details page.
![stop copilot](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/mobile_test_case_copilot_10.png)

---

## **Steps to Create Test Cases Using Recorder**

1. From the left navigation bar, go to **Create Tests > Test Cases**. 
![test cases](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/mobile_test_case_copilot_1.png)

2. In the Test Case Explorer section, expand a **Feature** and click the **+** icon next to the required Scenario. This opens a dialog box. 
![feature](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/mobile_test_case_copilot_2.png)

3. In the dialog box, validate the target feature and scenario, enter the name in the Test Case Name input box, and click **Create**. 
![create](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/mobile_test_case_copilot_3.png)

4. In the Test Case Details page, click **Record** at the top right corner.
![Record](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Record_Test_Steps_For_Mobile_Apps.png)

5. In the **Record test steps** overlay:
![Record test steps overlay](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Entities_for_Selection_in_Overlay.png)
   - Select a **Test Lab**.
   - Select a **Test Machine**.
   - Under **App Source**, choose one of the following options:
      - Paste an external public link to the application.
      - Click **Upload** and browse to upload the application file.

### **Additional Information**

When uploading an IPA application, the following options are available under Supported Device.
![Options Available While Uploading IPA File](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Options_Available_While_Uploading_IPA_File.png)

1. **Enable iOS Keychain Support:** Select this option to automatically clear iOS Keychain data after each test session. Clearing the keychain prevents test failures caused by credentials or tokens stored from previous sessions. Use this option if the application cannot access keychain groups after the Bundle Seed ID or Team ID changes during app signing.

2. **Skip App Re-signing:** Select this option if the application is already signed using the Apple Developer Enterprise Program. When this option is enabled, Testsigma installs the application without re-signing it. This allows you to test features that require the original application signature, such as push notifications on Testsigma devices.

3. Click **Record** and wait for the application to load completely.
![Record to Proceed](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Click_Record_Test_Steps_for_Mobile_Apps.png)

4. Perform the actions in the application. The Recorder captures the interactions and converts them into test steps.

For details about Recorder controls and actions, see [Controls and Actions](https://testsigma.com/docs/test-cases/create-test-steps/actions-and-options-recorder/controls-and-actions/).

---

## **Steps to Create Test Cases Using NLPs**

1. From the left navigation bar, go to **Create Tests > Test Cases**. 

2. In the Test Case Explorer section, expand a **Feature** and click the **+** icon next to the required Scenario. This opens a dialog box. 

3. In the dialog box, validate the target feature and scenario, enter the name in the Test Case Name input box, and click **Create**. 

4. In the Test Case Details page, the first step is created by default as **Launch App**.
![Launch App](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Default_Step_for_Mobile_Apps.png)

5. Click **Add New Step**.
![Add New Step](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Adding_Steps_for_Mobile_Apps.png)

6. Select the appropriate NLP step, then provide the required test data and elements.
![Add NLP](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Select_NLP_Manually_For_Mobile_Apps.png)

7. Repeat Step 5 and Step 6 to add additional steps and complete the test case workflow.

---