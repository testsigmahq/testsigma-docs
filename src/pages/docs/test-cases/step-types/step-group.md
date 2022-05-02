---
title: "Test Step Type: Step Groups"
metadesc: "Step Groups in Testsigma and how to use them to author tests at a faster pace"
noindex: false
order: 4.22
page_id: "Test Step Type: Step Groups"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Create a Step Group"
  url: "#create-a-step-group"
- type: link
  name: "Use Step Group in a Test Case"
  url: "#use-step-group-in-a-test-case"
- type: link
  name: "Create a Data-Driven Step Group"
  url: "#create-a-data-driven-step-group"
- type: link
  name: "Using a Data-Driven Step Group in Test Case"
  url: "#using-a-data-driven-step-group-in-test-case"
- type: link
  name: "Control over Step Group Iterations in Test Case"
  url: "#control-over-step-group-iterations-in-test-case"
- type: link
  name: "Additional Actions Possible on Iteration Count"
  url: "#additional-actions-possible-on-iteration-count"
---

---

Sometimes, a group of steps is common to multiple test cases. 

**For example**:
 1. You cannot perform a fund transfer without **adding an account** first. 
 2. You cannot delete a beneficiary account without **adding an account** first. 
 3. Loan disbursement requires **adding an account** first

 Here **adding an account** is a common step.

Traditionally, instead of writing the same redundant code over and over again, test engineers solve this problem by using modular coding, or adding all these repeating steps to a function and calling that function every time it’s needed. In Testsigma, you can do the same using step groups. 

A Step Group is a group of test steps which can be repeatedly used in multiple test cases. So, instead of using the same steps over and over again, we simply create a test step group and invoke the step group when required.

&emsp;

---
##**Create a Step Group**

 * Navigate to Test Development > Test Cases > Step Groups.

![navigate to step group menu](https://docs.testsigma.com/images/step-group/navigate-to-step-group-menu.png)

 * Click “+ Create Step Group” button
  
![ click create step group button](
https://docs.testsigma.com/images/step-group/click-create-step-group-button.png)

 * Enter a name, description and choose options in the Advanced Options menu and finally click the Create button.

![Enter details to create step group](https://docs.testsigma.com/images/step-group/enter-details-and-create-step-group.png)

 * This will create a Step Group with no steps
 * Add Test Steps required to this Step Group. A sample screenshot is attached below for your reference: 

![add steps to step group](https://docs.testsigma.com/images/step-group/add-steps-to-step-group.png)

 * And now you will have a Step Group ready to use

&emsp;

---
##**Use Step Group in a Test Case**

 * Click on Test Case and open the Test Case that you need to author as shown in the screenshot below

![navigate to test case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/step-group/navigate-to-test-case.png)

 * Clicking on the specific test case will open the Test Case details page
  
![test case details page highlight the option to open step type menu](https://docs.testsigma.com/images/step-group/test-case-details-page-to-open-step-type-menu.png)

 * From the left side dropdown, choose Step Group

![click on test step type menu](
https://docs.testsigma.com/images/step-group/click-on-test-step-type-menu.png)

![click on test step type step group](https://docs.testsigma.com/images/step-group/click-on-test-step-type-step-group.png)

 * From the list of step groups, choose whichever group you need. In this case, we have only created one step group and hence only one is visible in the drop-down
 * Now you are ready to use the step group in your test case

&emsp;

Observe the image below to understand how to create a step group.

![ gif showing how to create step group](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/step-group/gif-create-step-group.gif)



---
##**Create a Data-Driven Step Group**
Just like data-driven test cases, we now also support creating Data-Driven Step groups which can be utilized like standard components across test cases 

  1. When creating a Step Group, simply let Testsigma know that the step group is data-driven, which Test Data Profile you want to use, and the iterations you intend to use in this step group.
     ![Data Driven Step Group](https://docs.testsigma.com/images/step-group/step-group-data-driven.png)
  2. Now that add the NLP steps where you want to iterate through the Test Data Profiles in the test case just like you would for a Data-Driven Test Case
     <br/>In our example here - We are iteration over multiple Mobile Phone numbers and emails
     ![Data Driven Step Group Details](https://docs.testsigma.com/images/step-group/step-group-details.png)
     Voila! Your Data-Driven Step- Group is ready for use across multiple test cases.


---
##**Using a Data-Driven Step Group in Test Case**
  1. You can create a vanilla test case or a data-driven test case on test sigma and add the data-driven step group to the test case like in the example below.
     <br/>
     Adding data-driven step groups to a data-driven test case allows iterating through multiple data sets via the step group for every single iteration of your data-driven test case 
     <br/>
     Adding step groups to the test case can be done using step type dropdown
     ![Data Driven Step Group Details](https://docs.testsigma.com/images/step-group/step-group-as-step-on-test-case.png)
     ![Data Driven Step Group Details on test case](https://docs.testsigma.com/images/step-group/step-group-on-test-case.png)


---
##**Control over Step Group Iterations in Test Case**
 
  There may be situations where out of the 100 sets in the Test Data profile attached to your step group, you want to iterate from Set 5 to set 10 in your data-driven step group only and not all of them.
  
  You can use these 2 restricted Runtime Variables to let Testsigma know which sets in from the Step Group Data profiles you want to iterate through

  **RunTime_TestData_Set_Start**<br/>
  **Runtime_TestData_Set_End**

  1. When creating a Data-Driven Step Group ensure you select the option “Overwrite Test Data Set with Runtime Variable” like in the image below
     ![Control Step Group Data Driven with runtime data](https://docs.testsigma.com/images/step-group/step-group-runtime-data.png)
  2. Use the *store NLP* instructions to assign set names to the _RunTime_TestData_Set_Start = Set Name to START iteration from [Case Sensitive]_
     <br/>Use the *store NLP* instructions to assign set names to the _RunTime_TestData_Set_End = Set Name to END iteration from [Case Sensitive]_
     ![Store NLP to control Step Group Data Driven](https://docs.testsigma.com/images/step-group/step-group-store-run-time-data.png)
  3. We will automatically use the value set in these variables when we reach the Step Group to identify start and end iteration set names
     ![Step Group Data Driven on test case](https://docs.testsigma.com/images/step-group/step-group-on-test-case-part2.png)

---

##**Additional Actions Possible on Iteration Count**

When, in a step group, a test data profile is being iterated - an additional action is possible. The Iteration Count can be stored into a variable for later use. (Iteration count is the current count that is being iterated over the associate test data profile in the step group in Testsigma.)






