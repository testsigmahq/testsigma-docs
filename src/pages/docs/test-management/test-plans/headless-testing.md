---
title: "Headless Testing in Testsigma"
metadesc: "How to create a test plan for headless execution in Testsigma"
noindex: false
order: 8.28
page_id: "Headless Testing in Testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Pre-requisites"
  url: "#pre-requisites"
- type: link
  name: "Creating a test plan"
  url: "#creating-a-test-plan"
- type: link
  name: "How to edit a test plan"
  url: "#how-to-edit-a-test-plan"
---

---

A headless browser is a browser without a graphical user interface. Executing your web tests on a headless browser is called headless testing. 

In Testsigma, you can add headless test execution on a machine while creating a test plan and also while editing it. In this document, we will discuss both the approaches as:
Steps to follow while creating a test plan
Steps to follow while editing a test plan

&emsp;

### When to use:
When you need quick results for your testing and your test cases aren’t supposed to evaluate graphical elements on your website.

[[info | Warning:]]
|Headless testing are not accompanied by video recordings of executions on Testsigma cloud.
 

&emsp;

---
##**Pre-requisites:**
You should already know how to [create test cases](https://testsigma.com/tutorials/getting-started/automate-web-applications/).

Since a Test Suite is pre-requisite for the creation of Test Plans, see [How to add/edit/delete Test Suite](https://testsigma.com/docs/test-management/test-suites/overview/).

&emsp;

---
##**Creating a test plan:**

The Test Plan UI has been revamped, but you still have the option to switch to the classic UI. So, you can configure headless test execution while creating a test plan in 2 ways:

1. [Creating A Test Plan Via The New UI](#creating-a-test-plan-via-the-new-ui)
2. [Creating A Test Plan Via The Classic UI](#creating-a-test-plan-via-the-classic-ui)

---

## **Creating A Test Plan Via The New UI**

1. When you are creating a new test plan, this action can be taken on tab 2 - Test Machines and Suites Selection.
2. When you add a machine on the tab 2, you can enable the “Headlest Test” on the “Add Machine” layover. The “Headless Test” toggle button is also highlighted in the screenshot below: 

![New Test Plan UI - Headless Test Toggle Button ](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/headless-testing/new-test-plan-ui-headless-test-toggle-button.png)

---

## **Creating A Test Plan Via The Classic UI**


1. On the Test Plan page, click on the +Test Plan button:

![add test plan button for headless testing configuration in Testsigma](https://docs.testsigma.com/images/headless-testing/add-test-plan-button-headless-testing-testsigma.png)

2. Create Test Plan page would open as shown below:

![create Test Plan page in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/overview/create-test-plan-page-overview-testsigma.png)

3. On the Create Test Plan page, enter all the required details:

4. Click on “Next Button” once all options are filled. The “Test Machines & Suites Selection” tab will open, like this:

![Test Machines and Suites Selection section on the Create Test Plan Page in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/overview/test-machines-and-suites-selection-overview-testsigma.png)

5. In the “Test Machines & Suites Selection” tab, add the machines. Each machine will have a toggle button with the text ‘Headless Test’:

![headless test toggle button on create test plan page in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/headless-testing/test-machines-and-suites-selection-headless-testsigma.png)

To execute your test plan on the selected machine via a headless browser, you just have to enable the headless test button.


6. You can now finish creating the test plan as usual.

---
##**How to edit a test plan**
On the Test Plans page, click on a Test Plan name to open the details page for that Test Plan:

![Test Plan details page for headless testing in Testsigma](https://docs.testsigma.com/images/headless-testing/test-plan-details-page-headless-testing-testsigma.png)

1. Click on the Edit button on the top right corner as shown below: 

![edit button on cross-browser testing test plan page for headless testing in Testsigma](https://docs.testsigma.com/images/headless-testing/edit-button-cross-browser-testing-test-plan-headless-testing-testsigma.png)

2. The ‘Edit Test Plan’ Page opens, as shown below:
 
![Edit Test Plan page in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/cross-browser-testing/edit-test-plan-page-testsigma.png)

2. Go to the ‘Test Machines & Suites Selection’ tab to add/edit test machines for headless testing. You just will have to enable the ‘Headless Test’ toggle button for the test machines on which you need to perform headless testing.
 
3. To finalize the updates, click on the “Update” button that would appear on the last tab “Test Plan Settings”.



