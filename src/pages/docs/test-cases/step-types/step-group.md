---
title: "Test Step Type: Step Groups"
metadesc: "Step Groups in Testsigma and how to use them to author tests at a faster pace"
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

![](https://docs.testsigma.com/images/step-group/enter-details-and-create-step-group.png)

 * This will create a Step Group with no steps
 * Add Test Steps required to this Step Group. A sample screenshot is attached below for your reference: 

![add steps to step group](https://docs.testsigma.com/images/step-group/add-steps-to-step-group.png)

 * And now you will have a Step Group ready to use

&emsp;
---
##**Use Step Group in a Test Case**

 * Click on Test Case and open the Test Case that you need to author as shown in the screenshot below

![navigate to test case](https://docs.testsigma.com/images/step-group/navigate-to-test-case.png)

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

![ gif showing how to create step group](https://docs.testsigma.com/images/step-group/gif-create-step-group.gif)


  




