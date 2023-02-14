---
title: "AfterTest Suite"
page_title: "AfterTest Suite in Testsigma"
metadesc: "This article discusses how to create AfterTest Suite for Test Plans."
noindex: false
order: 8.32
page_id: "AfterTest Suite in Testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Steps to create AfterTest Suite"
  url: "#steps-to-create-aftertest-suite"
- type: link
  name: "Available NLPs for AfterTest Suite"
  url: "#available-nlps-for-aftertest-suite"
---

<br>

AfterTest Suite in Testsigma lets you create a Test Case specifically to execute after the execution. This article discusses enabling After Suite while creating a Test Case and using it in a Test Suite. *For more information on Test Suites, refer to [Test Suites](https://testsigma.com/docs/test-management/test-suites/overview/).*

Here is a quick GIF demonstrating how to create AftetTest Suite steps in Testsigma.
![Steps in AfterTest Suite](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/StepsforAfterTestSuite.gif)

---
## **Steps to create AfterTest Suite**
1. Navigate to **Test Development > Test Cases** and click on **Create**.
![Navigate to Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/naviagtetotc.png)

2. On the **Create Test Case** page, enter the **Name** and **URL** of the application you want to test and click on **Show Advanced Options**.
![Advanced Options](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/clickonshowadvancedoptions.png)

3. Click on the checkbox to enable the **AfterTest Suite**.
![AfterTest Checkbox](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tscheckbox.png)

4. Click either **Write Test Manually** or **Record steps** to add steps to your Test Case.
![Create Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/stepsoftc.png)

[[info | **NOTE**:]]
|If the Test Case is Data Driven or has pre-requisites, you can’t mark that Test Case for AfterTest Suite. 

5. Navigate to **Test Development > Test Suites** and click on **Create Test Suite**.
![Create Test Suite](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/createtestsuit.png)

6. On the **Create Test Suite** page,
    - Enter the **Name**
    - Click on **Add Test Cases** under Test Cases to add Test Cases for the **Test Suite**.
    ![Add Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/addtestcases.png)
    - Click the toggle button to enable the **AfterTest Suite**.
    ![Toggle](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/aftersuitetoggle.png)
    - Click on **Add Test Cases** under AfterTest Suite to add AfterTest Suite Test Cases for the Test Suite. 
    ![AfterTest Suite TC](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/aftersuitetestcases.png)
    - After adding the test cases, click on **Create**.
    ![Click on Create](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/clickoncreate.png)
    - Your Test suite is created with **AfterTest Suite**. 

7. Navigate to **Test Development > Test Plans**, and create a Test Plan by adding the Test Suite we have created. *For more information on how to create a Test Plan, refer to [Test Plans](https://website.testsigma.com/tutorials/test-plans/using-local-devices/).*

8. Run the Test Plan and check the results by clicking on **View Reports**.
![View Reports](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/viewreports.png)

9. You can see the results of each Test Suite here. 
![Results](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/results.png)

[[info | **NOTE**:]]
| 1. While creating the test suite, from the **When to Execute AfterTest Suite** dropdown,
|     - You can select **Once After All Test Cases** to run AfterTest Suite after all Test cases are executed in a Test Suite. 'OR'
|     - You can select **For Every Test Case** to run AfterTest Suite for each Test Case in a Test Suite.
|      ![Dropdown](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/aftertestdropdown1.png)
| 2. Also, from the **If AfterTest Suite fails** dropdown, 
|     - You can select **Ignore** if your Test Case Result is not dependent on the result of AfterTest Suite. 
|     - If you want to mark the AfterTest Suite as failed if your test case fails, you can select **Fail**.
|      ![Dropdown 2](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/dd2.png)

## **Available NLPs for AfterTest Suite**
![Available NLPs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/nlps.png)

1. You can use *Test Case Result is Passed/Failed/Not Executed* NLP to create and execute Test steps depending on the result of your Test Case.
2.  You can also use *Test Suite Result is Passed/Failed/Not Executed* NLP to create and execute Test steps depending on the result of your Test Suite.

[[info | **NOTE**:]]
|    - NLPs are only available in the IF condition type. 
|    - *Test Suite Result is Passed/Failed/Not Executed* NLP is only works correctly if you select Once After All Test Cases on Create Test Suite page.