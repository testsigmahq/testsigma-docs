---
title: "Test Plans"
page_title: "Test Plans - List, Create, Edit, Delete"
metadesc: "How to list, create, edit, and delete a Test Plan in Testsigma"
noindex: false
order: 8.21
page_id: "Test Plans - List, Create, Edit, Delete"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "List Test Plans"
  url: "#list-test-plans"
- type: link
  name: "Create Test Plan"
  url: "#create-test-plan"
- type: link
  name: "Edit Test Plan"
  url: "#edit-test-plan"
- type: link
  name: "Delete Test Plan"
  url: "#delete-test-plan"
---

---

This article explains how to create/edit /delete Test Plans and Test Plan configurations.

You should already know [how to add/edit/delete Test Suite](https://testsigma.com/docs/test-management/test-suites/overview/).

### Navigate to Test Development > Test Plans

&emsp;

---
##**List Test Plans**
If you have already created one or more test plans, then you can see them listed on the Test Plans page. You can see them in **Test Development > Test Plans**.


A sample Test Plans page list would look like this:

![Test Plans Page in Testsigma](https://docs.testsigma.com/images/test-plans/test-plans-page-testsigma.png)

&emsp;

---
##**Create Test Plan**
1. On the Test Plan page, click on the +Test Plan button:

![add test plan button in Testsigma](https://docs.testsigma.com/images/test-plans/add-test-plan-button-testsigma.png)

2. A page will open as shown below:

![create Test Plan page in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/overview/create-test-plan-page-overview-testsigma.png)

&emsp;
3. On the Create Test Plan page, enter these details:
   
&emsp;&emsp;**a. Enter Test Plan Name:** Enter the name of the Test Plan

&emsp;&emsp;**b. Description (optional):** Enter a clear and precise description to describe the test plan you are creating.

4. Click on “Next Button”. The “Test Machines & Suites Selection” tab will open like this:

![Test Machines and Suites Selection section on the Create Test Plan Page in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/overview/test-machines-and-suites-selection-overview-testsigma.png)


5. On the “Test Machines & Suites Selection” tab, you will see these options:
   
&emsp;&emsp;**a. Testing Type**: Select either ‘Cross Browser Testing” or “Distributed Testing”

&emsp;&emsp;&emsp;&emsp;1. For Cross-Browser Testing, select the machines and environments you would like to execute your test cases on. [Learn more](https://testsigma.com/docs/test-management/test-plans/cross-browser-testing/)
   
&emsp;&emsp;&emsp;&emsp;2. For ‘Distributed Testing’ too, select the various machines and environments for execution, but you can distribute your test cases to the different environments for execution separately. [Learn more](https://testsigma.com/docs/test-management/test-plans/distributed-testing//)

&emsp;&emsp;**b. Testing Lab Type:**   This is a drop-down where you can select the lab that will contain the browsers and devices where you want to execute your test cases.

&emsp;&emsp;&emsp;1. Testsigma Lab: This option allows you to run tests in Testsigma′s own cloud infrastructure. Read more about supported test labs [here](https://testsigma.com/docs/test-management/test-plans/supported-test-lab-types/).

&emsp;&emsp;&emsp;2. Local Devices: If you want to run your tests on your local device, select the checkbox “Run only if the configured browser version is available in the Agent machine”. If you enable this checkbox test plans won’t start if the conjured version is different from what you have in your local machine.

If you want to run on other supported cloud labs, you can select those too. 
   
&emsp;&emsp;**c. Select Test Machines:** Here you select the test machine on which your test cases would be executed. 

&emsp;&emsp;The Test Machines are selected via the below configurations:

&emsp;&emsp;&emsp;&emsp;1. Test Machine
   
&emsp;&emsp;&emsp;&emsp;2. OS Version
   
&emsp;&emsp;&emsp;&emsp;3. Browser
   
&emsp;&emsp;&emsp;&emsp;4. Browser Version
   
&emsp;&emsp;&emsp;&emsp;5. Enable/Disable Headless Test depending on if you want to run the test ‘headless’. [Learn more](https://testsigma.com/docs/test-management/test-plans/headless-testing/)

&emsp;&emsp;**d. Desired Capabilities(Optional):**  Desired Capabilities are a set of properties used for customizing the Test Environment. The customization includes adding Browser Extensions to Automation Session, setting Geographical location for the test machine, bypassing Browser Alerts e.t.c.

Desired Capabilities are added while selecting the Test Environment in Testsigma. [Learn more about desired capabilities](https://testsigma.com/docs/desired-capabilities/overview/).

&emsp;&emsp;**e. Selected Test Suites:**  Select the Test Suites containing the Test Cases you want to be executed on the configurations selected above.

6. Once you have filled in the required fields, click on the “Next” button. The “Test Plan Settings” tab would open, which would look like below:

![Test Plan Settings section on Create Test Plan page in Testsigma](https://docs.testsigma.com/images/test-plans/test-plan-settings-create-test-plan-page-testsigma.png)


7. On the “Test Plan Settings” tab, you will see these fields:
   
&emsp;&emsp;**a. Send Notification When:**

![Setting for conditions when to send notification for test plan execution results in Testsigma](https://docs.testsigma.com/images/test-plans/send-notification-when-test-plan-settings-create-test-plan-page-testsigma.png)


&emsp;&emsp;You can choose from the following options, also if needed, you can choose multiple options from this list:

&emsp;&emsp;* Passed
  
&emsp;&emsp;* Failed
  
&emsp;&emsp;* Aborted
  
&emsp;&emsp;* Not Executed
  
&emsp;&emsp;* Queued
  
&emsp;&emsp;* Stopped

Once you select an option, additional settings appear as shown in the screenshot below:

![add notification setting for test plan in Testsigma](https://docs.testsigma.com/images/test-plans/add-notification-settings-related-to-testplan-testsigma.png)

You can add notifications settings for the email that should receive the notifications. You can also configure it to send messages to MS Teams, Google Chat, or Slack.

[[info | Note:]]
|You will have to integrate Testsigma to your MS Teams, Google Chat, or Slack servers via settings for the configuration to work here. To know how to configure there, refer to the docs linked below:<br>
1. To configure MS Teams<br>
2. To configure Google Chat<br>   
3. To configure slack<br>


&emsp;&emsp;**b. Additional Settings:** 

![additional settings for a test plan in Testsigma](https://docs.testsigma.com/images/test-plans/additional-settings-testplan-testsigma.png)

In additional settings, there are some values by default. If needed, those values can be changed. These values are:

* Page Load Timeout
  
* Element Timeout
  
* Environments
  
* Capture Screenshots

[[info | Note:]]
|In the additional settings, you can also enable visual testing. To know more about visual testing, read [here](https://testsigma.com/docs/visual-testing/configure-test-steps/).


&emsp;&emsp;**c. Recovery Actions**

![Recovery Actions in Test Plan Settings Section on Create Test Plan page in Testsigma](https://docs.testsigma.com/images/test-plans/recovery-actions-test-plan-settings-section-create-test-plan-page-testsigma.png)

Here you can configure the actions for your test plan in case of failures mentioned below (the options to be selected are also provided on the right side):

* On Major Test Step Failure: When a major test step fails, you can configure the corresponding recovery action to be one of the two options below:
  
  * Abort and run next test case
  
  * Report and continue next test step
  
* On Test Step Prerequisite Failure: When a prerequisite for a test step fails, you can configure the corresponding recovery action to be one of the two options below:
  
  * Abort and run next test case
  
  * Report and continue to the next test step
  
* On Test Case Prerequisite Failure: When a prerequisite for a test case fails, you can configure the corresponding recovery action to be one of the two options below:
  
  * Abort the test plan
  
  * Report and continue to the next test case

* On Test Case Abort: When a test case is aborted, you can configure the corresponding recovery action to be one of the options below:

  * Cleanup and reuse the current session

  * Start with a new session

* On Test Suite Prerequisite Failure: When a prerequisite for a test suite fails, you can configure the corresponding recovery action to be one of the options below:

  * Abort test plan
  
  * Report and continue next test suite
   
*  Rerun on failure: Here you can configure the recovery action to be a rerun if one of the below fails:
  
  * None
  
  * All test cases
  
  * Only failed test cases

8. Finally, click on the Create button to Create the Test Plan. You will be taken to the Created Test Plan page.

&emsp;

---
##**Edit Test Plan**
On the Test Plans page, click on a Test Plan name to open the details page for that Test Plan, the Test Plan Details page will be something like this:

![Test Plan details page in Testsigma](https://docs.testsigma.com/images/test-plans/test-plan-details-page-testsigma.png)

1.  Click on the Edit button on the top right corner as shown below:

![edit button on cross-browser testing test plan page in Testsigma](https://docs.testsigma.com/images/test-plans/edit-button-cross-browser-testing-test-plan-testsigma.png)

2. The ‘Edit Test Plan’ Page opens, as shown below:

![edit test plan page in Testsigma](https://docs.testsigma.com/images/test-plans/edit-test-plan-page-testsigma.png)

You can also edit the Test Plan Configuration created by you on the page above.
 
 
3. Make the necessary changes and click on the “Update” button that would appear on the last tab “Test Plan Settings”, this would finalize your changes.
 
&emsp;

---
##**Delete Test Plan**
1. On the Test Plan details page for a particular Execution, click on the Delete button on the top right corner near the Edit button, as also shown in the screenshot below:

![delete button on Test Plan details page in Testsigma](https://docs.testsigma.com/images/test-plans/delete-button-test-plan-details-page-testsigma.png)

2. We will get a confirmation dialog to confirm the deletion. Select the checkbox and click on the Delete button to confirm the deletion.














 




   





