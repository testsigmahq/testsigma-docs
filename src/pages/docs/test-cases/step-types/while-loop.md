---
title: "Adding while loops in test cases"
metadesc: "How to use while loop in a test case in Testsigma"
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
  name: "How to use while loop as a test step while creating a test case:"
  url: "#how-to-use-while-loop-as-a-test-step-while-creating-a-test-case"
- type: link
  name: "Adding while loop in Testsigma’s test step recorder [Web & Mobile web]"
  url: "#adding-while-loop-in-testsigmas-test-step-recorder-web--mobile-web"
- type: link
  name: "Adding while loop in Testsigma’s Test Step Recorder [Android &iOS]"
  url: "#adding-while-loop-in-testsigmas-test-step-recorder-android-ios"
- type: link
  name: "Additional Actions Possible on Iteration Count"
  url: "#additional-actions-possible-on-iteration-count"
---

---

In Testsigma, you can add a while loop that iterates through a few steps depending on a condition being true.

**Example**: Assume that we need to click on an element until the condition is true.

&emsp;

---
## **Prerequisites:**

You should already know how to:

 1. [Create test case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/)
 2. [Create test steps using actions](https://testsigma.com/docs/test-cases/create-steps-nl/overview/)
 3. [Create test steps using Testsigma’s test step recorder](https://testsigma.com/docs/test-cases/create-steps-recorder/web-apps/overview/)

This document contains information about adding while loop using testsigma’s test step recorder option in Web, Mobile web, Android and iOS applications.

&emsp;

---
## **How to use while loop as a test step while creating a test case:**

 1. Navigate to **Test Development > Test Cases > Create**

![create button to create a test case to create a while loop in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/while-loop/create-button-test-cases-while-loop.png)

 2. Enter a name, a description, and choose the different options available in the Advanced options menu as required

 3. Click create. This will take you to the test case details page

 4. Create test steps to navigate to the URL. Example: <https://www.spotify.com/us/signup>

![test steps when creating a while loop in Testsigma](https://docs.testsigma.com/images/while-loop/test-steps-while-loop.png)

 5. In the next test step, click on the option on the left side of the test step.

![option to choose a step type when creating a while loop in Testsigma](https://docs.testsigma.com/images/while-loop/option-to-choose-step-type-while-loop.png)

 6. This will open up a side panel

 7. In this side panel, click on While loop

![step type while loop when creating a while loop in Testsigma](https://docs.testsigma.com/images/while-loop/step-type-while-loop.png)

 8. This will add a while condition in your test step

![types of while loop that can be added when creating a while loop in Testsigma](https://docs.testsigma.com/images/while-loop/types-of-while-loop.png)

 9. Now add the condition within the while statement by choosing the specific Actions.

![added while loop for a test case in Testsigma](https://docs.testsigma.com/images/while-loop/added-while-loop.png)

 10. The Actions that we have added is: While element <span Style="color:green">Sign up with Facebook</span> is <span style="color:blue">visible</span> on the page.

 11. Click on Add Step to add more steps under the While condition which will execute if the condition is true. The “Add Step” button will be visible once you hover over the while condition.

![add conditions when creating a while loop in Testsigma](https://docs.testsigma.com/images/while-loop/add-conditions-for-while-loop.png)

 12. Click on the Add step and add the Action   **Click on Element**.

This will create a test step number 2.1 which will be under step 2. This is a sub-step.

![added a step inside a while loop in Testsigma](https://docs.testsigma.com/images/while-loop/added-click-step-inside-a-while-loop.png)

13. To add the number of iterations to the while loop, on the while condition click on **Edit > More details** to open the test step details overlay. <br>
In the test steps details overlay provide the following details:<br>

<ul><li><strong>Maximum wait time</strong>: Longest time the test step should wait. This time period should not be greater than 120 seconds.</li>
          <li><strong>Prerequisite</strong>: Any prerequisite condition for the while condition to execute.</li>
          <li><strong>Maximum iterations</strong> : Maximum number of iterations for the while loop. Note that the number of iterations should not be greater than 100.</li>
</ul>

![Add number of iterations](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/overview/while_loop_test_step_2.png)
 13. You can continue to add test steps numbered as either 2.2, 2.3, or as 3,4, etc
The test steps numbers 2.2, 2.3, etc will be executed only if the “while condition” is processed as true

The GIF below shows how While loop test steps are created.

![gif demonstrating how to create a while loop in Testsigma](https://docs.testsigma.com/images/while-loop/gif-creating-while-loop.gif)

&emsp;

---
## **Adding while loop in Testsigma’s test step recorder [Web and Mobile web]**

We can also add the While loop while creating test steps
using Testsigma’s Test Recorder.

Follow the steps below to add a while loop:

1. Create a test case.
2. Click on the **Record** button on the top right corner.

 ![record button for a test case when creating a while loop in Testsigma](https://docs.testsigma.com/images/while-loop/record-button-for-a-test-case-while-loop.png)

3. A new window will be opened along with the **Record test steps** sub-window on the bottom right corner of the page, as shown in the image below.

![new window opening when creating a while loop in Testsigma via recorder](https://docs.testsigma.com/images/while-loop/new-window-recorder-while-loop.png)

4. Enter the URL <https://www.spotify.com/us/signup> and navigate to the page. This will automatically record a test step in the Record Test Steps sub-window. It will look like this:

![start recording steps when creating a while loop in Testsigma](https://docs.testsigma.com/images/while-loop/to-record-steps-while-loop.png)

5. Click on the **+** icon on the left side of the test step.

6. A side panel will appear. Click on the **While loop**. This will add a while condition step to your test step

![select-step-type-recorder-while-loop](https://docs.testsigma.com/images/while-loop/select-step-type-recorder-while-loop.png)

Follow the rest of the steps mentioned in the first section from Step 9 to add steps under while condition step.

&emsp;

---
## **Adding while loop in Testsigma’s test step recorder [Android and iOS]**

We can also add the while loop while creating test steps using Testsigma’s Test Recorder for native Android and iOS apps.

Follow the steps below to add a While loop:

1. Create a test case.

2. Click on the **Record** button on the top right corner.

3. A **Record element** window will open up. In it, under Testsigma Lab, select mobile OS version, device model, apk/IPA file (or upload the apk/IPA file). For this tutorial, we are using the Wikipedia application apk/IPA file.

4. Click on **Record**.

 ![record button when recording an element when creating a while loop in Testsigma](https://docs.testsigma.com/images/while-loop/record-button-record-element-while-loop.png)

5. Wait for a few minutes for  the virtual app to load.

 ![recorder ui when creating a while loop in Testsigma](https://docs.testsigma.com/images/while-loop/recorder-ui-while-loop.png)

6. Click on **Inspection mode**.

7. Tap on Skip on the application UI.

8. Under **Selected element**, click on Tap. This will do a tap action on that particular element in the application UI.

![tap button on a recorder when creating a while loop in Testsigma](https://docs.testsigma.com/images/while-loop/tap-button-recorder-while-loop.png)

9.  In the **Test steps** section,  hover over the option seen left to test step and click on it to open a side panel. Click on the While loop option to convert the step to a while condition step

![while loop steps when creating a while loop in Testsigma via recorder](https://docs.testsigma.com/images/while-loop/while-loop-steps-recorder.png)

Repeat the steps in the first section of this document from Step 5.

---
## **Additional actions possible on iteration count**

1. **Store**: Iteration count is the current count that is being iterated in a while loop in Testsigma. This Iteration Count can be stored into a variable for later use as well. Below is how the syntax for the Store NLP looks like:

![store-iteration-count-test-data-set-name](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/for-loop/store-iteration-count-test-data-set-name.png)

2. **if**: The test data set values, from a test data profile being iterated, can be compared within an if condition too. Below screenshot shows the NLP (The NLP can be added as a part of add-on “String Compare”. You can find the add-ons to use here: <https://testsigma.com/addons>):

![the verify if NLP that is available with the addon String Compare](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/step-group/verify-with-if-with-string-compare.png)
