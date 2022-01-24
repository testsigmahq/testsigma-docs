---
title: "Adding If, Else, Else If Conditions in Test Cases"
metadesc: "How to use if, else, and else if conditions as test steps while creating a test case in Testsigma"
order: 4.26
page_id: "Adding If, Else, Else If Conditions in Test Cases"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Pre-requisites:"
  url: "#pre-requisites"
- type: link
  name: "How to use if, else and else if conditions as test steps while creating a test case:"
  url: "##how-to-use-if-else-and-else-if-conditions-as-test-steps-while-creating-a-test-case"
- type: link
  name: "How to create “Else If” or “Else” conditions"
  url: "#how-to-create-else-if-or-else-conditions"
- type: link
  name: "Adding If Condition in Testsigma’s Test Step Recorder [Web & Mobile Web]"
  url: "#adding-if-condition-in-testsigmas-test-step-recorder-web--mobile-web"
- type: link
  name: "Adding If Condition in Testsigma’s Test Step Recorder[Android &iOS]"
  url: "#adding-if-condition-in-testsigmas-test-step-recorderandroid-ios"
---

---


The conditional if lets you execute a set of steps based on a condition being true or false. Let us consider a simple example where we need to click on an element depending on the application URL. 

**If ( application URL is ‘xyz’) or (button is clickable )
Then Click on ‘a’ button
Enter data into ‘b’ element**


The If conditions may be more complicated and may involve more steps as well. Let’s see how to incorporate them in your test cases in Testsigma

&emsp;
---

## **Pre-requisites:**

You should already know how to:

 1. [Create Test case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/)
 2. [Create Test steps using Actions](https://testsigma.com/docs/test-cases/create-steps-nl/overview/)
 3. [Create Test steps using Testsigma’s test step recorder](https://testsigma.com/docs/test-cases/create-steps-recorder/web-apps/overview/)
   
This document contains information about adding Conditional If using testsigma’s test step recorder option in Web, Mobile web, Android and iOS applications.

&emsp;
---

## **How to use if, else and else if conditions as test steps while creating a test case:**

 1. Navigate to “Test Development” > “Test Cases” > Create.

![create new test case](https://docs.testsigma.com/images/if-condition/create-new-test-cases.png)

 2. Enter a name, a description, and choose the different options available in the Advanced options menu as required.
 3. Click create. This will take you to the test case details page.
 4. Create test steps to navigate to the URL. Example: https://www.spotify.com/us/signup

![add first step navigate to](https://docs.testsigma.com/images/if-condition/add-first-step-navigate-to.png)

 5. In the next test step, click on the option on the left side of the test step

![add if condition to first step navigate to](https://docs.testsigma.com/images/if-condition/add-first-step-navigate-to-add-if.png)

 6. This will open up a side panel.

 7. In this side panel, toggle on the Conditional If option at the bottom.

![add conditional if to test step](https://docs.testsigma.com/images/if-condition/add-conditional-if-to-test-step.png)

 8. This will add an IF condition to your test step.

![conditional if test step](https://docs.testsigma.com/images/if-condition/conditional-if-test-step.png)

 9. Now add the condition within the IF statement by choosing the specific Actions.

![add Actionsto conditional if test step](https://docs.testsigma.com/images/if-condition/add-Actions-to-conditional-if-test-step.png)

 10. The Actions that we have added is: **Current URL is** https://www.spotify.com/us/signup

 11. Click on Add Step to add more steps under the IF condition which will execute if the condition is true. The “Add Step” button will be visible once you hover over the IF condition.

![ hover over if condition to find Add step Button](https://docs.testsigma.com/images/if-condition/hover-over-if-condition-to-find-Add-step-Button.png)

 12. In the next step, add the Actions **Enter** <span style="color:blue">test data</span> **in the** <span style="color:green">element</span> **field**
   
     This will create a test step number 2.1 which will be under step 2. This is a sub-step.

![add step under if condition](https://docs.testsigma.com/images/if-condition/add-step-under-if-condition.png)

13. You can continue to add test steps numbered as either 2.2, 2.3, or as 3,4, etc
The test steps numbers 2.2, 2.3, etc will be executed only if the “Conditional If” is processed as true

&emsp;

The gif below shows how Conditional If test steps are created.

![gif add step under if condition](https://docs.testsigma.com/images/if-condition/gif-add-step-under-if-condition.gif)

&emsp;
---

## **How to create “Else If” or “Else” conditions**

 1. Create an If condition. Hover over the If statement, you will see Else If and Else.

![add else if else conditional step](https://docs.testsigma.com/images/if-condition/add-else-if-else-conditional-step.png)

 2. Click on either **+Else If** or **+Else** to create a test step. All other steps are the same as mentioned in the previous section of this tutorial.

The screenshot below depicts the Else-if condition that we will use to **click on the Continue button if a banner is visible.**

![if and else if conditional step added](https://docs.testsigma.com/images/if-condition/if-and-else-if-conditional-step-added.png)

&emsp;
---

## **Adding If Condition in Testsigma’s Test Step Recorder [Web & Mobile Web]**

We can also add the If Condition while creating test steps using Testsigma’s Test Recorder.

Follow the steps below steps to add an If Condition:

 Step 1: Create a test case.

 Step 2: Click on the Record option on the top right corner.

![record button on the test case details page when recording if condition via Testsigma recorder](https://docs.testsigma.com/images/if-condition/record-button-test-case-details-page-if-condition.png)

 Step 3: A new window will be opened along with the Record Test steps sub-window on the bottom right corner of the page, as shown in the image below.

![new window that opens on click on record button when recording if condition via Testsigma recorder](https://docs.testsigma.com/images/if-condition/new-window-on-click-on-record-button-if-condition.png)

 Step 4: Enter the URL https://www.spotify.com/us/signup and navigate to the page. This will automatically record a test step in the Record Test Steps sub-window.

![start recording test steps when recording if condition via Testsigma recorder](https://docs.testsigma.com/images/if-condition/start-recording-test-steps-if-condition.png)

 
 Step 5: Click on the + icon on the left side of the test step

 Step 6: A side panel will appear. Toggle on the Conditional If option at the bottom.

![test step types when recording if condition via Testsigma recorder](https://docs.testsigma.com/images/if-condition/test-step-type-when-recording-test-steps-if-condition.png)


  Step 7: This will add an If Condition to your test step.

Follow the rest of the steps mentioned in the first section from Step 9 to add steps under If   Condition and to add Else and Else-if conditions.

&emsp;
---

## **Adding If Condition in Testsigma’s Test Step Recorder[Android &iOS]**

We can also add the If Condition while creating test steps using Testsigma’s Test Recorder for native Android and iOS apps.



Follow the steps below to add an If Condition:

 Step 1: Create a test case.

 Step 2: Click on the Record option on the top right corner.

 Step 3: A Record Element window will open up. In it, under Testsigma Lab, select mobile OS version, device, apk/IPA file (or upload the apk/IPA file). Here we are using the Wikipedia application apk/IPA file.

 Step 4: Click on Record.

![record button when recording elements when adding if condition via Testsigma recorder](https://docs.testsigma.com/images/if-condition/record-button-when-recording-elements-if-condition.png)

  Step 5: Wait for a few seconds for  the virtual app to load.

![Recorder to record if condition via Testsigma recorder](https://docs.testsigma.com/images/if-condition/Recorder-to-record-if-condition.png)

 Step 6: Click on inspection mode.

 Step 7: Tap on Skip on the application UI.

 Step 8: Under Selected Element, click on Tap. This will do a tap action on that particular element in the application UI.

![tap button on Recorder to record if condition via Testsigma recorder](https://docs.testsigma.com/images/if-condition/tap-button-Recorder-to-record-if-condition.png)


Step 9:  In the Test Steps section, hover on the option seen left to test step and click on it to open a side panel. Enable Conditional If option to convert the step to a conditional if step.

![if condition test step when recording via Recorder on Testsigma recorder](https://docs.testsigma.com/images/if-condition/if-condition-test-step-Recorder.png)

Repeat the remaining steps as laid out in the previous section of this document, starting from Step 5. 


















