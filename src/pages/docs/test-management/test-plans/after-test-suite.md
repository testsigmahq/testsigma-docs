---
title: "AfterTest Suite"
page_title: "AfterTest Suite in Testsigma"
metadesc: "AfterTest Suite in Testsigma lets you add test cases for a test suite to execute after executing existing test cases in the test suite"
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



---

AfterTest Suite in Testsigma lets you create a Test Suite specifically to execute after the execution. This article discusses how to create AfterTest Suite and add test cases for AfterTest Suite in Testsigma. *For more information on test suites, refer to [test suites](https://testsigma.com/docs/test-management/test-suites/overview/).*

---

## **Steps to create AfterTest Suite**

1. Navigate to **Test Suite**, and create a test suite.
![Navigate to TS](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/attsnav.png)

2. Click on **Test Suite settings** and enable **AfterTest Suite** toggle.
![Test Suite Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/attstsset.png)


[[info | **NOTE**:]]
| 1. From the **When to Execute AfterTest Suite** dropdown,
|     - You can select **Once After All Test Cases** to run AfterTest Suite after all Test cases are executed in a Test Suite. 'OR'
|     - You can select **For Every Test Case** to run AfterTest Suite for each Test Case in a Test Suite.
|      ![Dropdown](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/attswtets.png)
| 2. Also, from the **If AfterTest Suite fails** dropdown, 
|     - Select **Show the test suite result**, if you want to see the test suite results.
|     - If you want to mark the AfterTest Suite as failed if your test suite fails, you can select **Fail the test suite**.
|      ![Dropdown 2](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/attsitsfls.png)


3. Click on **Add After Suite Test Cases**. This will open **Add After Suite Test Cases** prompt. 
![Test Cases for ATS](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/attstcsfats.png)

4. On **Add After Suite Test Cases** prompt, select test cases for AfterTest Suite and click on **Add to Suite**.
![Test Cases Selection](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/attstcssel.png)

5. The selected test cases for AfterTest Suite will be executed after the test suite execution. 
![Execution](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/attsstcweats.png)

[[info | **NOTE**:]]
| - If the test case is data driven or has pre-requisites, you can’t mark that test case for AfterTest Suite. 
| - Test cases for AfterTest Suite must be checked **Mark testcase for After Test Suite** option from the **Test Case Settings** page.
| ![Check Test Case for ATS](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/attsmtcch.png) 

---

## **Available NLPs for AfterTest Suite**
![Available NLPs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/attsnlp.png)

1. You can use *Test Case Result is Passed/Failed/Not Executed* NLP to create and execute Test steps depending on the result of your Test Case.
2.  You can also use *Test Suite Result is Passed/Failed/Not Executed* NLP to create and execute Test steps depending on the result of your Test Suite.

[[info | **NOTE**:]]
|    - NLPs are only available in the **IF** condition type. 
|    - *Test Suite Result is Passed/Failed/Not Executed* NLP is only works correctly if you select **Once After All Test Cases** on  Test Suite creation page.


---