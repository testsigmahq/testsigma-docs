---
title: "Adding If, Else, Else If Conditions in Test Cases"
metadesc: "The conditional if lets you execute a set of steps based on a condition being true or false. Learn how to use these conditions in Testsigma"
noindex: false
order: 4.27
page_id: "Adding If, Else, Else If Conditions in Test Cases"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites:"
  url: "#prerequisites"
- type: link
  name: "Using If, Else and Else If conditions in Test Cases"
  url: "#using-if-else-and-else-if-conditions-in-test-cases"
- type: link
  name: "Creating “Else If” or “Else” Conditions"
  url: "#creating-else-if-or-else-conditions"
- type: link
  name: "Using Testsigma’s Test Step Recorder for If Conditions [Web and Mobile Web]"
  url: "#using-testsigmas-test-step-recorder-for-if-conditions-web-and-mobile-web"
- type: link
  name: "Using Testsigma’s Test Step Recorder for If Conditions [Mobile Apps]"
  url: "#using-testsigmas-test-step-recorder-for-if-conditions-mobile-apps"
---


---


In Testsigma, you can add **If**, **Else**, and **Else If** in your test cases based on a true or false condition. For example, **If** verifies the login status in a login test case, and **Else** will check credentials and redirections. This article discusses using **If**, **Else**, and **Else If** Conditions in Testsigma. 


---


> ## **Prerequisites**
> 
> - You should also know how to [create a test case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).
> 
> - You should have Testsigma recorder extension. See [install chrome extension](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/).


---

## **Using If, Else and Else If conditions in Test Cases**

1. Navigate to **Create Tests > Test Cases**, and click on **Create Test Case**.
   ![Navigate to Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/IfCondition_Navigation.png)

2. On **Test Case Details** page, click on the option on the left side of the test step.
   ![Option on Test Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/IfCondition_LeftOption.png)

3. This will open a side panel. 
   ![Side Panel](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/IfCondition_SidePanel.png)

4. Hover over to the **Conditional Step Types** and click on **If Natural Language**. 
   ![If Natural Language](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/IfCondition_Naturallanguage.png)

5. This will add an **IF** condition to your test step.
   ![If Condition](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/IfCondition_IfStep.png)

6. Now add the test step within the **IF** statement by choosing the specific NLP.
   ![NLP with IF](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/IfCondition_TestStep.png)

7. Hover over the test step and click on **Step Inside IF** to add sub-steps under the **IF** condition. 
   ![Step Inside IF](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/IfCondition_StepInsideIF.png)

8. This will create a test step number **2.1** which will be under step 2. You can continue to add sub steps numbered as **2.2, 2.3,** etc. The test steps numbers **2.2, 2.3,** etc will be executed only if the **Conditional IF** is true.
   ![Conditional IF Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/IfCondition_StepsInsideIF.png)

Here’s a quick GIF demonstrating how to create **Conditional IF** test steps. 
![Conditional IF Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ForLoopManual.gif)


---

## **Creating “Else If” or “Else” Conditions**


1. Create **IF condition** in the test step and hover over the **IF statement**, you will see **Else If** and **Else**.

   ![Else if, Else](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/IfCondition_ElseIfElse.png)

2. Click on either **Else If** or **Else** to create a test step. All other steps are the same as mentioned in the previous section of this article.

   ![Else](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/IfCondition_ElseIFStep.png)

The screenshot above shows the usage of **Else If** condition.

---

## **Using Testsigma’s Test Step Recorder for If Conditions [Web and Mobile Web]**

We can also add the **If Condition** while creating test steps using Testsigma’s test recorder. Follow the steps below to add the If condition using recorder. 

1. Navigate to **Create Tests > Test Cases**, and click on **Create Test Case**.

   ![Navigate to Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/IfCondition_RecorderNav.png)

2. On **Test Case details** page, click on **Record**.

   ![Record](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/IfCondition_ClickRecord.png)

3. A new window will be opened along with the test step recorder. 

   ![Window](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/IfCondition_NewBrowser.png)

4. Enter the URL https://simply-travel.testsigma.com/ and this will automatically open the URL record a test step in the test recorder.

   ![Recorder Window](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/IfCondition_URLnav.png)

5. Click on the option on the left side of the test step and choose **Conditional If**. This will add If Condition in your test step.

   ![Conditional If](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/IfCondition_OptionLeft_Recorder.png)

6. Record all the steps and click on **Stop Recording** once all steps are added.
  
   ![Done](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/IfCondition_StopRecording.png)

*For more information on creating steps using recorder, refer to [recording test steps](https://testsigma.com/docs/test-cases/create-test-steps/overview/#creating-test-steps-using-test-recorder).*


Here’s a quick GIF demonstrating how to add **If Conditions** for web apps using recorder. 

![Conditional IF for Web & Mobile Web](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ConditionalIFweb.gif)

---

## **Using Testsigma’s Test Step Recorder for If Conditions [Mobile Apps]**

1. Navigate to **Create Tests > Test Cases**, and click on **Create Test Case**.
   ![Navigate to Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/IfCondition_Mobile_Nav.png)

2. Click on **Record**. This will open **Record test steps** overlay.
   ![Record](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/IfCondition_Record_Mobile.png)

3. Select the **Test Lab**, **Test Machine**, **App Source** and click on **Record**.
   ![Test Lab, Test Machine, App Source](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/WhileLoop_RecStepOvrlay.png)

4. Wait until the virtual app is loaded.

5. Record the steps and stop the recorder.
   ![Record Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/IfCondition_AllSteps.png)

---