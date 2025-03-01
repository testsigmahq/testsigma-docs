---
title: "Testsigma Automation Standards and Best Practices"
page_title: "Enhance Efficiency with Automated Testing Best Practices"
metadesc: "Explore best practices for enhancing efficiency and reliability in automated testing through modular design, dynamic waits, and data-driven testing."
noindex: false
order: 35.1
page_id: "Best Practices to follow Testsigma Automation Standards"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Test Case Structure and Execution"
  url: "#test-case-structure-and-execution"
- type: link
  name: "Assertions and Verifications"
  url: "#assertions-and-verifications"
- type: link
  name: "Test Case Organization and Management"
  url: "#test-case-organization-and-management"
- type: link
  name: "Customisation and Extensibility"
  url: "#customisation-and-extensibility"
- type: link
  name: "Reusability and Modularity"
  url: "#reusability-and-modularity"
- type: link
  name: "Element Management"
  url: "#element-management"
- type: link
  name: "Variables and Scopes"
  url: "#variables-and-scopes"
- type: link
  name: "Data-Driven Testing"
  url: "#data-driven-testing"        
- type: link
  name: "Test Data Types"
  url: "#test-data-types"
- type: link
  name: "Configuration for Test Execution"
  url: "#configuration-for-test-execution"
- type: link
  name: "Execution and Test Plan Run"
  url: "#execution-and-test-plan-run"
- type: link
  name: "Testsigma Recorder Extension"
  url: "#testsigma-recorder-extension"
- type: link
  name: "Third-Party Integration"
  url: "#third-party-integration"
---

---

Testsigma Automation Standards emphasise the reusability of automated test cases to enhance the testing process and maximise efficiency. Quality engineers can accelerate the overall testing process by leveraging this reusability. Successful implementation requires a solid understanding of test automation best practices, which enable the setup of repetitive, thorough, and data-intensive tests. These best practices ensure reliable and accurate results while optimising testing efforts.

--- 

## **Test Case Structure and Execution**

1. Write small, atomic, independent, and autonomous test cases to focus, modularise, and maintain them easily. 
2. Use **Soft Assertions** wherever possible. Soft assertions allow test execution to continue even if a verification step fails and provide more comprehensive test results.
3. Use **Dynamic Waits** to improve test efficiency and reduce the chances of false positives or negatives in test results.
4. You should structure your test cases in the AAA pattern with three distinct sections: **Arrange**, **Act**, and **Assert**. In the arranged section, you set the preconditions for the test. In the act section, you perform the tested actions; in the assert section, you verify the expected outcomes.

---

## **Assertions and Verifications**

1. You define the expected outcomes of automated test cases and specify the validations to be performed at specific points in time as verifications to understand the concept of assertions.
2. Navigate to **Help** > **Actions List** on the Test Case details page to find **NLPs** with assertions in Testsigma. ![Action Lists](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/action_list.png)
3. A failed verification in a test case marks the overall test case as failed by default. If validation fails, the remaining test steps will be skipped, and the test case execution will be aborted.
4. To implement soft assertions for scenarios that require execution of remaining steps after a test step failure, follow the steps below and for more information, refer to [test step settings](https://testsigma.com/docs/test-cases/create-test-steps/actions-and-options-recorder/step-settings/):
     - Hover over the test step, click **Option**, and choose **Step Settings** from the dropdown.
     - Uncheck **Stop Test Case execution on Test Step failure** and click **Update**.
     - You can configure specific steps to continue executing even if verification fails.

---

## **Test Case Organization and Management**

1. Filter, segment, and organise test cases for easy identification to streamline test management processes and quickly locate specific tests.
2. **Label or map relevant requirements** to test cases to facilitate filtering and improve accessibility. Users can filter and save test cases in separate views based on labelled or mapped requirements.
3. During test case creation or editing, you can add labels. The label field is available by default in the test case. ![Requirements and Labels](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/req_labels.png)
4. You can **Save Filters** to quickly access and manage test cases associated with a particular functionality or scenario, such as those related to login. For more information, refer to [save test case filter](https://testsigma.com/docs/test-cases/manage/list-actions/#save-test-case-filter).

---

## **Customisation and Extensibility**

1. You can use **add-ons to extend Testsigma's repository** of actions and create custom NLPs for specific actions that are not available in the built-in Actions List.
2. Share your add-ons or leverage existing ones with the test automation community through the Add-ons Community Marketplace. You can use add-ons to provide additional functionality and expand the capabilities of Testsigma. For more information, refer to [create an add-on](https://testsigma.com/docs/addons/create/).

[[info | Example:]]
| You create an add-on for verifying text from two DOM elements.

---

## **Reusability and Modularity**

1. To avoid duplication and simplify test maintenance, use **Step Groups** as common reusable functions across test cases. Step Groups promote modular test design and easy maintenance by separating reusable components from the test flow. Any changes made to a Step Group will be reflected in all test cases that invoke it. For more information, refer to [step sroups](https://testsigma.com/docs/test-cases/step-types/step-group/).

[[info | Example:]]
| Create a Step Group to reuse login functionality in multiple test cases.

2. Use **REST API Steps** to automate redundant UI actions. Performing these actions through REST API steps will improve test stability and reduce test execution time compared to using the UI. For more information, refer to [Rest API](https://testsigma.com/docs/test-cases/step-types/rest-api/).

---

## **Element Management**

1. Create elements with proper naming conventions to enable reuse in multiple test cases. For more information, refer to [create an element](https://testsigma.com/docs/elements/web-apps/create-manually/).

[[info | Example:]]
| Use descriptive names such as "UsernameInput" or "LoginButton" to make them easy to identify.

2. You should map appropriate context details when you create elements inside **iFrames** or **Shadow DOM** contexts. Mapping context details will ensure you correctly identify and interact with elements within specific contexts. For more information refer to Shadow DOM Element. For more information, refer to [create a shadow DOM element](https://testsigma.com/docs/elements/web-apps/shadow-dom/#create-element-for-shadow-dom).
3. You can easily access elements by saving filters and creating views based on screen names. They can check for the presence of elements in Testsigma's repository before recreating them. Element management is facilitated by adding filters. For more information, refer to [save element filters](https://testsigma.com/docs/elements/overview/#save-element-filter).

[[info | Example:]]
| Create a view that displays elements related to the ''Login'' screen for quick reference.

---

## **Variables and Scopes**

|Scope|Description|Usage|
|---|---|---|
|**Environment**|<li>The value stays constant during the test execution. The environment variable's values cannot be overwritten.</li><li>Any test case in any test suite can be accessed.</li><li>To create an Environment, navigate to **Test Data** > **Environments** > **Create**. For more information, refer to [environments](https://testsigma.com/docs/test-data/create-environment-data/)</li>|<li>Define base URLs or configuration settings specific to the environment.</li><li>Create test steps using the data type <strong>* url</strong>.</li><li>Example: //button[text()=’*\|url\|’]</li>|
|**Runtime**|The values are the same throughout a sequential test run; other tests can update them. For more information, refer to [runtime variable](https://testsigma.com/docs/test-data/types/runtime/).|<li>During test execution, store session-specific data or dynamic values.</li><li>Create test steps using the data type <strong>$ divText</strong>.</li><li>Example: //button[text()=’$\|divText\|’] </li>|
|**Test Data Profile**|<li>You can link specific test cases. You can update the values in test data profiles from other test cases.</li><li>To create a Test Data Profile, navigate to **Test Data** > **Test Data Profile** > **Create**. For more information, refer to [test data profile](https://testsigma.com/docs/test-data/create-data-profiles/)</li>|<li>Use data-driven testing and maintain test data sets.</li><li>Create test steps using the data type **@ username**.</li><li>Example: //button[text()=’@\|username\|’]</li>|

---

## **Data-Driven Testing**

1. Enable the data-driven toggle in test cases and use Test Data Profiles to perform the same action with different test data sets for data-driven testing. For more information, refer to [data driven testing](https://testsigma.com/tutorials/test-cases/data-driven-testing/).
2. Test Data Profiles use key-value pair format to store project configuration data, database connection details, and project settings for easy access and reuse of test data.

[[info | Example:]]
| Create a Test Data Profile named "ConfigData" to store configuration-related test data.

3. Linking test cases to test data profiles and data sets using the **@ parameter** test-data type in NLP allows you to use specific columns from the test data set in your test steps.

[[info | Example:]]
| Link login credentials to a test data profile and use it to test different user logins in a test case.

---

## **Test Data Types**

|Data Type|Usage|Examples|
|---|---|---|
|**Plain Text**|Used for storing general textual data.|“Hello World", “Test123”|
|**@ Parameter**|Dynamically changeable values in a test case.|@ username, @ password|
|**$ Runtime**|Values assigned/updated during test execution.|$ name, $ currenttime|
|<strong>* Environment</strong>|Stores information about the current environment.|* url, * website|
|**~ Random**|Generates random values within specified constraints.|Random item from a list|
|**! Data Generator**|Generates test data based on predefined rules.|! TestDataFromProfile :: getTestDataBySetName|
|**% Phone Number**|Stores phone numbers|% +123456789|
|**& Mail Box**|Stores email addresses.|& automation@name.testsigma.com|

---

## **Configuration for Test Execution**

1. Upload attachments for test steps in **Test Data** > **Uploads** and follow the maximum file size limit of **1024 MB**. The system always considers the latest version of the uploaded file. For more information, refer to [uploads](https://testsigma.com/docs/uploads/upload-files/).
2. Configure **Desired Capabilities** for cross-browser testing with specific browser configurations. You can configure Desired Capabilities for ad-hoc runs and test plans. For more information, refer to [desired capabilities](https://testsigma.com/docs/desired-capabilities/overview/).

[[info | Example:]]
| Specify the desired capabilities of the targeted testing, such as browser version or device type.

3. Ensure you put test cases in the Ready state before adding them to a Test Suite. Organise relevant tests into test suites for better organisation and execution. For more information, refer to [test suites](https://testsigma.com/docs/test-management/test-suites/overview/).

[[info | Example:]]
| Create a "Login Suite" and add all relevant login-related test cases for efficient execution.

---

## **Execution and Test Plan Run**

1. Run test case and test plan in **Headless** mode to reduce execution time and eliminate element loading time. For more information, refer to [headless browser testing](https://testsigma.com/docs/test-management/test-plans/headless-testing/).

[[info | Example:]]
| To achieve faster test execution, execute the test plan without a visible browser.

2. Use the **Partial Run** option in the Test Plan to exclude consistently failing test suites from runs; you can exclude or disable tests for execution from the Test Machines & Suites Selection in the Test Plan. For more information, refer to [partial run](https://testsigma.com/docs/runs/test-plan-executions/#partial-test-runs).
3. Use the **Schedule** feature to run the test plan automatically without manual intervention. For more information, refer to [schedule a test plan](https://testsigma.com/docs/test-management/test-plans/schedule-plans/).

[[info | Example:]]
| Schedule unattended testing during non-business hours by executing the test plan.

---

## **Testsigma Recorder Extension**

1. Use the Testsigma Recorder Extension to record user interactions on web applications. Customise and modify the recorded test steps to align with the desired test case behaviour. For more information, refer to [recording test steps](https://testsigma.com/docs/test-cases/create-test-steps/overview/#creating-test-steps-using-test-recorder).
2. Use the **Automatic Element Identification** feature of the recorder extension to easily capture elements and apply validations and verifications during recording to ensure that test steps include necessary assertions.

---

## **Third-Party Integration**

Avoid relying on third-party UI elements for UI actions and instead use APIs or a mock server to simulate actual scenarios in the Application Under Test (AUT). This reduces the fragility of tests.

---
