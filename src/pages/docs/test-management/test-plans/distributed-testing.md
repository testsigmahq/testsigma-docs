---
title: "Distributed Testing"
page_title: "Distributed Testing in Testsigma"
metadesc: " How to create a Test Plan with ‘Testing Type’ as ‘Distributed Testing’. "
order: 8.27
page_id: "Distributed Testing "
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "When creating a new Test Plan"
  url: "#when-creating-a-new-test-plan"
- type: link
  name: "When editing an existing Test Plan"
  url: "#when-editing-an-existing-test-plan"
---

---

When you create a Test plan in Testsigma, you have the option to either create them for cross-browser testing or for distributed testing. In this article, we will discuss how to create a Test Plan for ‘Distributed Testing’.

With Distributed Testing, you can configure different test cases to run on different test machines at the same time. Thus, your testing can be distributed.

For example, let’s say your customers mostly use Chrome Browser. So, you decide to execute all your automated tests on Chrome Browser but only the high-priority ones on other browsers like Firefox, Safari, and Internet Explorer. With Distributed testing, you can distribute all your test cases to be executed on Chrome Browser and the high priority ones on Firefox, Safari, and Internet Explorer.


You should already know how to [List/Create/Edit/Delete Test Plans](https://testsigma.com/docs).

### Navigation: Select Project > Test Development > Test Plan > Test Machines & Suites Selection 

How to create a Test Plan with ‘Testing Type’ as ‘Distributed Testing’:
When creating a new Test Plan. 
When editing an existing Test Plan.

&emsp;
---

## **When creating a new Test Plan**
1. On the Test Plan page, click on the +Test Plan button:

![test plan page in Testsigma](https://docs.testsigma.com/images/cross-browser-testing/test-plan-page-testsigma.png)

2.Create Test Plan page would open as shown below:

![create test plan page in Testsigma](https://docs.testsigma.com/images/cross-browser-testing/create-test-plan-page-testsigma.png)

On this page, select the device lab which you want to use for your cross-browser tests. 

3. On the Create Test Plan tab, enter the required details and click on the Next Button.

4. The “Test Machines & Suites Selection” tab would open, which would look like below:

Select the radio button ‘Distributed Testing’. 

![Distributed Testing selected in Testsigma](https://docs.testsigma.com/images/distributed-testing/distributed-testing-selected-in-testsigma.png)

5.  Now, you will have to add test machines and the test suites that you want to execute on each of those machines. For example, in the screenshot below, we have configured a windows test machine with 2 test suites.

![added Test Suites with Distributed Testing in Testsigma](https://docs.testsigma.com/images/distributed-testing/added-test-suites-with-distributed-testing-testsigma.png)

6. You can select different test suites for the different test machines. For example, in the screenshot below, 2 different test suites are added to all the 3 test machines:

![Added new Test Machine with new Test Suites in Testsigma](https://docs.testsigma.com/images/distributed-testing/added-new-test-machine-with-new-test-suites-testsigma.png)

7.  Now, click on the ‘Update’ button to finalize the changes.
   
8. Fill up the rest of the required fields, then click on the “Create” button on the ‘Test Plan Settings’ tab.

Your Test Plan is now all set to run your distributed tests on the configured test machines. 

[[info | Note:]]
|Once you have configured different test suites for different test machines under ‘Distributed Testing’, you won’t be able to change the Testing Type back to ‘Cross-Browser Testing’

&emsp;
---

## **When editing an existing Test Plan**
Here, we will edit a Test Plan that was created with Test type ‘Cross-Browser Testing’ to ‘Distributed Testing’.
 
1. On the Test Plans page, click on a Test Plan name to open the details page for that Test Plan, the Test Plan Details page will look something like below

2. Click on the Edit button on the top right corner as shown below
 
![edit button for an existing Test Plan in Testsigma](https://docs.testsigma.com/images/distributed-testing/edit-button-test-plan-testsigma.png)

3. The ‘Edit Test Plan’ page opens, as shown below
   
4. Go to the tab ‘Test Machines & Suites Selection’ and it will look like below.

![edit test machines & suites selection tab in Edit Test Plan page in Testsigma](https://docs.testsigma.com/images/distributed-testing/edit-test-machines-and-suites-selection-tab-in-edit-test-plan-page-in-testsigma.png)

5. Now to convert to distributed testing, we will switch the ‘Testing Type’ to ‘Distributed Testing’. 

![distributed testing edit in edit test plan on test machines and suites selection tab in Testsigma](https://docs.testsigma.com/images/distributed-testing/distributed-testing-edit-test-machines-and-suites-selection-testsigma.png)

6. To add Test Suites to a test machine, we will click on the corresponding Test Machine. When the first test machine is clicked, the option to select test suites appears:

![add Test Suites for Test Machines for Distributed Testing in Testsigma](https://docs.testsigma.com/images/distributed-testing/add-test-suites-for-machines-distributed-testing-testsigma.png)

7. You can select different test suites for the different test machines. For example, in the screenshot below, 2 different test suites are added to all the 3 test machines:

![different test suites for different test machines in Testsigma](https://docs.testsigma.com/images/distributed-testing/different-test-suites-different-test-machines-testsigma.png)


8. Now, click on the ‘Update’ button to finalize the changes.
   
9.  Then click on the “Next” button and then the “Update” button on the ‘Test Plan Settings’ tab.

Your Test Plan is now all set to run your distributed tests on the configured test machines. 

[[info | Note:]]
|Once you have configured different test suites for different test machines under ‘Distributed Testing’, you won’t be able to change the Testing Type back to ‘Cross-Browser Testing’



