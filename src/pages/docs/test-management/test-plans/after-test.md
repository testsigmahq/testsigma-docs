---
title: "AfterTest in Test Cases & Step Groups"
page_title: "After Test in Test cases and Step Groups"
metadesc: "AfterTest in Testsigma lets you create a block of steps after the test case as well as add a step group. Learn about AfterTest block in Testsigma"
noindex: false
order: 8.31
page_id: "After Test in Test Cases and Step Groups"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "After test in Test Cases"
  url: "#after-test-in-test-cases"
- type: link
  name: "After test in Step groups"
  url: "#after-test-in-step-groups"
- type: link
  name: "Available NLPs for After Test"
  url: "#available-nlps-for-after-test"
---


---

AfterTest in Testsigma lets you create a block of steps after the test case as well as add a step group to execute irrespective of the result of the test case. Both test case and after test blocks execute independently. This article will discuss how to enable and use after test in test cases and step groups. 

*For more information on Test Cases, refer to [test cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).*


---


## **AfterTest in Test Cases**

1. Navigate to **Create Tests > Test Cases**, and create a test case. 
![Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/atstnav.png)

2. Click on **Test Case settings** and enable **AfterTest Case** toggle.
![Test Case Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/atstctgl.png)

3.  From **If AfterTest fails** dropdown menu, 
![Dropdown Menu](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/attciatf.png)
    - Select **Show Testcase Result** if you want to see the test case results.
    - Select **Fail the test** if you want to fail the test case.

4. For data-driven test cases, you can see the **When to execute AfterTest steps** dropdown menu. 
![Data Driven Scenario](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/attcddtc.png)
    - You can select **Run after all iterations** to run AfterTest after all iterations are executed.
    - Or you can select **Run after each iteration** to execute the AfterTest for every iteration.


[[info | **NOTE**:]]
| - You can also enable AfterTest for existing test cases by editing the existing test cases. *For information on how to edit a test case, refer to [edit test cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#edit-test-case).*
| - Creating AfterTest for a step group is the same as creating AfterTest for a test case. For more information on creating a step group, refer to [step groups](https://testsigma.com/docs/test-cases/step-types/step-group/).



---

## **Available NLPs for After Test**

![NLPs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/attcnlps.png)


1. You can use ***Test Case Result is Passed/Failed/Not Executed*** NLP to execute After Test block depending on the result of your Test Case.
2. You can also use ***Test Case Iteration Result is Passed/Failed/Not Executed*** NLP to execute the After Test block depending on the result of iteration.


---