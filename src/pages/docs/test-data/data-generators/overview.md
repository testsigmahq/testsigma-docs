---
title: "Test Data Generators - Overview"
page_title: "Test Data Generators in Testsigma"
metadesc: "Overview of the Test Data Generators available in Testsigma used to generate Test Data dynamically during the test execution"
noindex: false
order: 5.31
page_id: "Test Data Generators - Overview"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Add Test Data Generators in Test Steps"
  url: "#add-test-data-generators-in-test-steps"
---

---

Test Data Generators for dynamic Testsigma can be called in test steps using the **Data Generator** format. Data Generators are built-in functions in Testsigma that helps generate test data for test cases. Example: name, address, city, etc.<br>
We need to add test steps to a test case using test data generators. For more information, refer [Create test steps](https://testsigma.com/docs/test-cases/create-steps-nl/overview/)

![Test Data Generators list overlay while adding Test Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-data/data-generators/overview/test-data-generators-list-add-test-steps.gif)

## **Add Test Data Generators in Test Steps**

1. Create a new project or open an existing project.
2. Navigate to **Test Development** > **Test Cases**.
3. Click on the **Test case**.
4. Steps should be entered using **NLPs**.
5. Write an **NLP** step which has **testdata** and click on **testdata**.
6. On the dropdown menu, click on **Data Generator**.
[[info | NOTE:]]
| Create an add-on and select the **Type** field to use your data generator.
7. An overlay screen appears. A list of built-in test data generators is available in the **Default type**. Open the drop-down list to select the **function type**.
8. Select **Functions** by opening the dropdown list. A list of in-built functions for function type will appear; you can search or scroll to choose the process. 
9. Click the right arrow before **Show Examples**. Each function has examples; you can find descriptions of the functions and examples of inputs and outputs.
10. Use the example as a reference, and enter inputs in the function fields.
11. Click **Save** to update the test data.

[[info | NOTE:]]
| - Here's a list of built-in test data generators available in TestSigma: [Default Test Data Generators](https://testsigma.com/docs/test-data/data-generators/default-list/).
| - Users can also [create custom test data generators](https://testsigma.com/tutorials/addons/how-create-addons-test-data-generators/) using java.

---
