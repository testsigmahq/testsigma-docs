---
title: "Best Practices to Ensure Tests Follow Testsigma Automation Standards"
page_title: "Best Practices to follow Testsigma Automation Standards"
metadesc: "Test Automation empowers quality engineers to test more in less time and with minimal effort. This article discusses the best practices to ensure tests follow Testsigma automation standards "
noindex: false
order: 22.3
page_id: "Best Practices to follow Testsigma Automation Standards"
warning: false
---

<br>

Testing applications is a continuous process. Whenever any code is changed for the application under test, we should test different workflows in various machine configurations and operating systems. Manually testing all the possible combinations and user journeys requires enormous testing effort, which is associated with higher costs and time. Test Automation empowers quality engineers to test more in less time and with minimal effort. However, the reusability of automated cases contributes to this and makes the whole testing process faster. To set up all kinds of repetitive, thorough, and data-intensive tests for success, there are several test automation best practices that you need to be aware of.

## **Below are the Best Practices to Ensure Tests Follow Testsigma's Automation Standards**
- Write small, atomic, independent, and autonomous test cases.
- Avoid using static waits. Instead, wait for certain actions to be completed.
- Use soft assertions wherever possible. An assertion is a way you say what you expect out of the automated test case. Like how a sequence of NLPs decides the test steps to be performed on the application under test, verify NLPs tell about the validations to be performed on the application at that specific point in time. The status of the test case depends on the verifications made as part of the test case.
    - NLPs for the assertions in Testsigma are listed under **Test Development > Actions List > Verify**
    - By default, when verification in the test case fails, the status of the test case is marked as Failed, test case execution will be aborted, and the remaining test steps are skipped.
    - If you want to perform soft assertion where you need to execute the remaining steps after a test step fails, you can change it for a specific step
        - **Edit the test step > More details > Uncheck**  ```Stop Test Case execution on Test Step failure```
- Filter, segment, and organize the test cases which helps you to easily identify the test quickly. 
    - Add a label or map test case to the relevant requirement which would help the user to filter the tests. 
    - One of the main advantages of adding a label or mapping the test case to a requirement is that they make it easier to locate and access test cases. You can filter and save the resulting test cases in a separate well-organized view which helps users to find test cases faster.
    - In Testsigma, you can add a label either by creating the test case or whilst editing it. Labels is the default field in the test case.
        - In the below example, we have saved a view for login-related tests.
        ![Login Steps Page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/loginrelated.png)
- If you want to perform any action and you don't see an NLP for the same under the actions list, then you can create your own NLP that is specific to your application by using add-ons. An add-on is a way to extend Testsigma’s built-in repository of actions.
    - You can use the existing add-ons or share your own with the rest of the test automation community through the [Add-ons Community Marketplace](https://testsigma.com/docs/addons/community-marketplace/).
    - An example of an add-on is an NLP to verify text from two DOM elements.
- We can create and use a common reusable function (```Step Groups```) across test cases to avoid duplicate actions and redundant effort in maintaining tests. It is a good practice to separate the reusable components from the test flow to ease the test maintenance to a greater extent.
   - For example, if there is a change in any of the modules, it should be reflected in all the test cases invoking that module with little to no effort. This is a far better approach than making changes at each place in a non-modular scenario.
   - An example is to have login into the application as a step group.

- Automate redundant UI actions via REST API steps. This will help in increasing the stability of the test and reduce the duration of the test since API actions are less time-consuming than performing the same action in UI.
- When you create an element manually, follow the proper naming convention that will help in reusing the same element in multiple test cases.
- When you create an element that is inside an iFrame or Shadow DOM context, map the add the appropriate context details.
![Mapping Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mapdetails.png)
- To easily access elements, you can save filters and create a view based on the screen name. This filter might help the user to check for the presence of elements in Testsigma’s repository before recreating it again.
![Add filters](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/addfilters.png)
- Use Test Data Profiles to maintain project configuration data, database connection details or project settings, etc. A test data set inside a test data profile is like a JSON key-value pair where each key is the header of the row in the data set.
    - In the below example, ```Login Credentials``` is the Test Data Profile that can be linked to any test case in the current application inside the project.
    - When you link the test data profile and test data set to the test case, you can use the type ```@paramater``` test-data type in NLP to select the column.
    ![Test Data Profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tdp.png)
    ![Test Data Profile Example](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tdpex.png)
- Use Test Data Profile for data-driven testing.
    - When you want to perform the same action for a different set of test data, you can create the test case, link it to the test data profile, and enable a data-driven toggle.
    - There is an NLP to even update any column in the test data profile that is linked to the test case.
    ![Update TDP](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/updatetdp.png)
- Use variables at the relevant scope. The scope of a variable is its lifetime in test execution.

|**Type**|**Scope**|**Initialization**|**Usage**|
|---|---|---|---|
|[Environment](https://testsigma.com/docs/elements/dynamic-elements/with-environment-data/)| <li> It can be accessed from any test case in any test suite. <br>  <li> It holds the same value throughout the execution.<br> <li> Values assigned to an environment variable cannot be overwritten.| **Test development → Environments → Create** <br> <br> **Example:** ![Environment](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/env.png)| <li> Use ```*|Environment|``` data type for test-data during test step creation. <br> <li> Use ```*|Environment|``` inside locator value while creating the element. <br> <br> **Example:** ```//button[text()=’*|username|’]```|
|[Runtime](https://testsigma.com/docs/elements/dynamic-elements/with-runtime-test-data/)|<li> It holds the same value throughout the test run when you run the tests sequentially.<br> <li>When you run the tests in parallel, every session holds different value (value that is assigned as part of test run)<br> <li>Value of a runtime variable can be updated from any other tests.|**Test development → Actions List → Store** <br> <br> **Example:** ![Run Time Variables](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/variables.png)|<li> Use ```$|Runtime|``` data type for test-data during test step creation. An overlay appears from where we can select the runtime variable. <br> <li> Use ```*|Runtime|``` inside locator value while creating the element. <br> <br> **Example:** ```//button[text()='$|divText|']``` |
|[Test Data Profile](https://testsigma.com/docs/elements/dynamic-elements/with-parameter-test-data/)| <li> Test Data Profile and sets in it can be linked to any testcase.<br> <li> Values in test data profile can be updated from any other tests.|**Test development → Test Data Profiles → Create** <br> <br> **Example:** ![Create TDP](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tdplogin.png)|<li> Use ```@|Parameter|``` data type for test-data during test step creation. An overlay appears from where we can select the test data set. <br> <li> Use ```@|Parameter|``` inside locator value while creating the element. <br> <br> **Example:**  ```//input[@id='@|elementName|']```|

- Use relevant [test data types](https://testsigma.com/docs/test-data/types/overview/) that are supported in Testsigma at the right place.

|**Data Type**|**Usage**|
|---|---|
|Plain Text|Use when the input is constant|
|Parameter|Use when the input is data driven|
|Run Time|Use when the input cannot be initialized but retrieved during runtime|
|Environment|Use when the input is constant and it is setting that might get changed|
|Random|Use to select one from the range of input|
|Data Generator|Use to generate fake data|
|Phone Number|Configure a phone number and use for OTP, 2FA which requires phone number that actually receives SMS|
|Mailbox|Configure a mailbox and use for activation link, OTP which requires actual mailbox that receives email|

- When you need to use attachments, upload them in **Test Development > Uploads**, copy the path and use it in the test step.
    - Max file size allowed is 300 MB
    - The latest version of the uploaded file is always considered
- When you want to perform cross-browser testing with certain [capabilities](https://www.selenium.dev/documentation/legacy/desired_capabilities/) set to browsers, use ```Desired Capabilities```.
    - You can set ```Desired Capabilities``` to both ad-hoc runs and test plans.
- Make sure that test cases are in ```Ready``` state so that they can be added to Test Suite. Relevant tests can be grouped into a test suite.
- Run the test plan in a headless mode which helps in reducing the time taken for execution and gets rid of the element loading time.
- Exclude consistently failing test suites from run by selecting ```Partial Run```from Test Plan.
- You can exclude tests from the test plan or disable tests for execution from **Test Plan > Test Machines & Suites Selection**.
![Test Machines & Suites Selection](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tstm.png)
- Use the ```Schedule``` feature to run the test plan without manual intervention.
- When you need to record the tests and debug step-by-step execution, launch the test in debugging mode.
- Avoid interacting directly with third-party plugins via UI actions. Depending on the third party’s UI makes the test feeble. We can either use their APIs or a mock server to set the actual scenario in AUT.