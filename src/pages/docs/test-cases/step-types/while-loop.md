---
title: "While Loop in Test Cases"
metadesc: "A while loop iterates through a few steps depending on a condition being true. How to use while loop in a test case in Testsigma"
noindex: false
order: 4.25
page_id: "Adding While Loops in test Cases"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites:"
  url: "#prerequisites"
- type: link
  name: "Using While Loop in Test Cases"
  url: "#using-while-loop-in-test-cases"
- type: link
  name: "Adding While Loop in Test Cases Using Recorder [Web & Mobile web]"
  url: "#adding-while-loop-in-test-cases-using-recorder-web--mobile-web"
- type: link
  name: "Adding While Loop in Test Cases Using Recorder [Android & iOS]"
  url: "#adding-while-loop-in-test-cases-using-recorder-android--ios"
- type: link
  name: "Additional Actions Possible on Iteration Count"
  url: "#additional-actions-possible-on-iteration-count"
---

---

In Testsigma, you can create a while loop to execute a test step repeatedly if a specified condition remains true. While Loop iterates through the step until the condition becomes false and then stops executing the test step and moves to the next test step. This article discusses using While Loop in Testsigma. 

---

> ## **Prerequisites**
> 
> - You should also know how to [create a test case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).
> 
> - You should have Testsigma Recorder Extension. See [install chrome extension](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/).

---

## **Using While Loop in Test Cases**

1. Navigate to **Create Tests > Test Cases**, and click on **Create Test Case**.
   ![Create Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ForLoop_Navigation.png)

2. On **Test Case Details** page, click on the option on the left side of the test step.
   ![Option on Test Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/WhileLoop_OptionLeft.png)

3. This will open a side panel.
   ![Side Panel](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/WhileLoop_SidePanel.png)

4. Hover over to the options and click on **While Loop**. This will add a while condition in your test step.
   ![While Loop](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/WhileLoop_Select.png)

5. Hover over the test step and click on **Step Inside Loop** to add sub-steps under the **While Loop**.
   ![Step Inside While Loop](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/WhileLoop_StepInside.png)

6. This will create a test step number 2.1 which will be under step 2. 
   ![Step 2.1](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/WhileLoop_steps.png)



Here's a quick GIF demonstrating using While Loop in Test Cases.
![While Loop GIF](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/wlsteptype.gif)

---

## **Adding While Loop in Test Cases Using Recorder [Web & Mobile web]**

1. Navigate to **Create Tests > Test Cases**, and click on **Create Test Case**.
   ![Create Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ForLoop_Navigation.png)

2. Click on **Record**.
   ![Record](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/WhileLoop_Record.png)

3. A new window will be opened with recorder. 
   ![New Window](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/WhileLoop_NewWindow.png)

4. Go to https://demoqa.com/webtables. 
   ![Website](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/WhileLoop_demoQA.png)

5. Click on the option on the left side of the test step and choose **While Loop**. This will add a while condition in your test step.
   ![While Loop](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/WhileLoop_ChooseLeft.png)

6. Hover over the test step and click on **Step Inside Loop** to add sub-steps under the **While Loop**.
   ![Add Step Inside](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/WhileLoop_WebStepInside.png)

7. You can continue to add sub-steps and click on **Stop Recording** once all steps are added. 
   ![Done](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/WhileLoop_StopRecording.png)

*For more information on creating steps using recorder, refer to [recording test steps](https://testsigma.com/docs/test-cases/create-test-steps/overview/#creating-test-steps-using-test-recorder).*



---

## **Adding While Loop in Test Cases Using Recorder [Android & iOS]**

1. Navigate to **Create Tests > Test Cases**, and click on **Create Test Case**.
   ![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/WhileLoop_MobileNav.png)

2. Click on **Record**. This will open **Record test steps** overlay.
   ![Record](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/WhileLoop_RecordSteps.png)

3. Select the **Test Lab**, **Test Machine**, **App Source** and click on **Record**.
   ![Test Lab, Test Machine, App Source](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/WhileLoop_RecStepOvrlay.png)

4. Wait until the virtual app is loaded.

5. On **Test Recorder**, click on the option on the left side of the test step and choose **While Loop**. This will add a while condition in your test step.
   ![While Loop](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/WhileLoop_MobileRecorder_OptionLeft.png)

6. Hover over the test step and click on **Step Inside Loop** to add sub-steps under the **While Loop**.
   ![Add Step Inside](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/WhileLoop_StepInside_Mobile.png)

7. Record all the steps and click on **Stop Recording** to quit the session. 
![Stop Recording](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/WhileLoop_Stop_Mobile.png)


Here's a quick GIF demonstrating adding While Loop in test cases using the recorder.
![GIF Mobile Apps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/whileloopMapp.gif)

---
## **Additional actions possible on iteration count**

1. **Store**: Iteration count is the current count that is being iterated in a while loop in Testsigma. This Iteration Count can be stored into a variable for later use as well. Below is how the syntax for the Store NLP looks like:

![Store-iteration-count-test-data-set-name](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/for-loop/store-iteration-count-test-data-set-name.png)

2. **if**: The test data set values, from a test data profile being iterated, can be compared within an if condition too. Below screenshot shows the NLP (The NLP can be added as a part of add-on **String Compare**. You can find the add-ons to use here: <https://testsigma.com/addons>):

![The verify if NLP that is available with the addon String Compare](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/step-group/verify-with-if-with-string-compare.png)

---