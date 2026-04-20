---
title: "Test Cases for Android & iOS Apps"
pagetitle: "Create Test Cases for Android & iOS Apps"
metadesc: "Create test cases for Android and iOS apps in Testsigma using NLP steps or the Recorder. Learn how to add steps, record actions, and automate mobile app tests."
noindex: false
order: 4.12
page_id: "test-cases-for-android-ios-apps"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Create a Test Case"
  url: "#create-a-test-case"
- type: link
  name: "Create Test Steps Using NLP"
  url: "#create-test-steps-using-nlp"
- type: link
  name: "Create Test Steps using Recorder"
  url: "#create-test-steps-using-recorder"
---

---

Testsigma allows you to create and manage test cases for Android and iOS mobile applications. You can create test cases by writing steps manually using NLPs or by recording user actions using the Testsigma Recorder. The Recorder captures interactions performed on a real device or simulator and automatically converts them into test steps. This article discusses creating test cases for Android and iOS applications in Testsigma.

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that you have:
> 1. An **Android** or **iOS application** to test.

---

## **Create a Test Case**

1. From the left navigation bar, go to **Create Tests > Test Cases**.
   ![Test Cases](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Test_Cases_Nav_for_iOS_Apps.png)

2. Expand a **Feature**, then expand a **Scenario**, and click ‘**+**’ next to the scenario where you want to add the test case.
   ![Add Test Case](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Expand_Feature_Scenario_For_iOS_Apps.png)


3. In the **Create Test Case** dialog, enter a name for the test case and click **Create**.
   ![Enter Name for Test Case](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Create_Test_Case_for_Mobile_App.png)


4. Create test steps using one of the following methods:
   - **Create test steps manually using NLP.**
   - **Use the Testsigma Recorder to record steps.**

---

## **Create Test Steps Using NLP**

1. On the **Test Case Details** page, the first step is created by default as **Launch App**.
   ![Launch App](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Default_Step_for_Mobile_Apps.png)


2. Click **Add New Step**.
   ![Add New Step](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Adding_Steps_for_Mobile_Apps.png)


3. Select the appropriate NLP step, then provide the required **test data** and **elements**.
   ![Add NLP](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Select_NLP_Manually_For_Mobile_Apps.png)

4. Repeat **Step 2** and **Step 3** to add additional steps and complete the test case workflow.

---

## **Create Test Steps using Recorder**

1. On the **Test Case Details** page, click **Record**.
   ![Record](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Record_Test_Steps_For_Mobile_Apps.png)


2. In the **Record test steps** overlay:
   ![Record test steps overlay](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Entities_for_Selection_in_Overlay.png)
   - Select **Test Lab**.
   - Select a **Test Machine**.
   - Under **App Source**, choose one of the following options:
      - Paste an external public link to the application.
      - Click **Upload** and browse to upload the application file.

> <p id="prerequisites">Additional Information:</p>
> 
> When uploading an **IPA application**, the following options are available under Supported Device.
>
> ![Options Available While Uploading IPA File](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Options_Available_While_Uploading_IPA_File.png)
> **1. Enable iOS Keychain Support**
> 
> Select this option to automatically clear iOS Keychain data after each test session. Clearing the keychain prevents test failures caused by credentials or tokens stored from previous sessions. Use this option if the application cannot access keychain groups after the Bundle Seed ID or Team ID changes during app signing.
>
> 
> **2. Skip App Re-signing**
> 
> Select this option if the application is already signed using the Apple Developer Enterprise Program. When this option is enabled, Testsigma installs the application without re-signing it. This allows you to test features that require the original application signature, such as push notifications on Testsigma devices.


3. Click **Record** and wait for the application to load completely.
   ![Record to Proceed](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Click_Record_Test_Steps_for_Mobile_Apps.png)

4. Perform the actions in the application. The Recorder captures the interactions and converts them into test steps.

   For details about Recorder controls and actions, see [Controls and Actions](https://testsigma.com/docs/test-cases/create-test-steps/actions-and-options-recorder/controls-and-actions/).


---