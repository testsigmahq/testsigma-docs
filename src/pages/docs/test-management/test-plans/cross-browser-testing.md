---
title: "Test Plan: Cross Browser Testing"
page_title: "Cross Browser Testing : Test Plan"
metadesc: "How to create a Test Plan with ‘Testing Type’ as ‘Cross-Browser Testing’."
order: 8.26
page_id: "Test Plan: Cross Browser Testing"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Creating a new Test Plan with Cross Browser Testing type"
  url: "#creating-a-new-test-plan-with-cross-browser-testing-type"
- type: link
  name: "Changing an existing Test Plan to Cross Browser Testing type"
  url: "#changing-an-existing-test-plan-to-cross-browser-testing-type"
---

---

When you create a Test plan in Testsigma, you have the option to either create them for cross-browser testing or for distributed testing. In this article, we will discuss how to create a Test Plan for ‘Cross-Browser Testing’.


You should already know how to [List/Create/Edit/Delete Test Plans](https://testsigma.com/docs/test-management/test-plans/overview/).

&emsp;

### When to use:
The main scenario when you should be using the testing type as ‘Cross browser testing’ for a test plan is when you want to execute one or more test suites on multiple test machines. For example, if you want to execute your sanity tests on all web browsers or when you want to test your mobile app’s UI on all the mobile devices and versions that your customers might have. 

Learn more about [cross-browser testing](https://testsigma.com/cross-browser-testing).

&emsp;
---

## **Creating a new Test Plan with Cross Browser Testing type**
1. On the Test Plan page, click on the ‘+Test Plan’ button:

![Test Plans page in Testsigma](https://docs.testsigma.com/images/cross-browser-testing/test-plans-page-testsigma.png)

2. Create Test Plan page would open as shown below:

![Create Test Plan page in Testsigma](https://docs.testsigma.com/images/cross-browser-testing/create-test-plan-page-testsigma.png)
   
On this page, select the device lab which you want to use for your cross-browser tests. For more information, see [Test Labs](https://testsigma.com/docs/test-management/plans/supported-test-lab-types/).

3. On the Create Test Plan tab, enter the required details and click on the Next Button.

4. The “Test Machines & Suites Selection” tab will open:

![Testing Type selection on Create Test Plan page in Testsigma](https://docs.testsigma.com/images/cross-browser-testing/testing-type-create-test-plan-page-testsigma.png)

Select the radio button ‘Cross-Browser Testing’ next to the label ‘Testing Type’ as mentioned in the screenshot above.

5. Now, you can add as many different test machines as you want to execute your tests on
   
6. Select as many test suites as you want to run on those test machines. All these test suites will run parallelly/ sequentially (based on your selection) on the corresponding test machines.
   
7. Fill up the rest of the required fields, then click on the “Create” button on the ‘Test Plan Settings’ tab.

![multiple Test Machines and multiple Test Suites in Test Plan in Testsigma](https://docs.testsigma.com/images/cross-browser-testing/multiple-test-machines-multiple-test-suites-test-plan-Testsigma.png)

Your Test Plan is now ready to run your cross-browser tests on the configured test machines. 

&emsp;
---

## **Changing an existing Test Plan to Cross Browser Testing type**

On the Test Plans page, click on a Test Plan name to open the details page for that Test Plan, which looks like this

![test plan details page in Testsigma](https://docs.testsigma.com/images/cross-browser-testing/test-plan-details-page-testsigma.png)

1. Click on the Edit button on the top right corner as shown below: 

![Edit Button in Test Plan Details Page in Testsigma](https://docs.testsigma.com/images/cross-browser-testing/edit-button-test-plan-details-page-testsigma.png)

2. The ‘Edit Test Plan’ Page opens, as shown below:

![Edit Test Plan page in Testsigma](https://docs.testsigma.com/images/cross-browser-testing/edit-test-plan-page-testsigma.png)

3. Go to the tab ‘Test Machines & Suites Selection’.

![Test Machines and Suites Selection section in Edit Test Plan page in Testsigma](https://docs.testsigma.com/images/cross-browser-testing/test-machines-and-suites-selection-edit-test-plan-page-testsigma.png)

4. Select the radio button ‘Cross-Browser Testing’ to make your Test plan as Cross-Browser Testing Type. 
   
5. Now, you can add as many different test machines as you want to execute your tests on
   
6. Select as many test suites as you want to be executed on those test machines. All these test suites will run parallelly/ sequentially(based on your selection) on the corresponding test machines.
   
7. Once done, click on the “Update” button on the ‘Test Plan Settings’ tab to finalize your changes.




