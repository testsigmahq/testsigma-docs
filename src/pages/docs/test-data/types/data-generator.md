---
title: "Test Data Type: Data Generator"
page_title: "Data Generator | Testsigma Documentation"
metadesc: "Discover how you can enable dynamic test data creation with Testsigma's Data Generators to optimise your test scenarios for enhanced efficiency and coverage."
noindex: false
order: 5.117
page_id: "Data Generator in Testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Add Data Generators in Test Steps"
  url: "#add-data-generators-in-test-steps"
---

---

Testsigma allows you to automatically generate test data during test execution through its Data Generators. Data Generators eliminate the need for manual data input and help you create dynamic and robust tests. They can generate various data types such as names, emails, dates, numbers, etc.

---

### **Prerequisites**

Before using the Data Generators, you must understand specific concepts such as [Projects](https://testsigma.com/docs/projects/overview/), [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/), [Create Test Steps](https://testsigma.com/docs/test-cases/create-steps-nl/overview/) and [Test Data Types](https://testsigma.com/docs/test-data/types/overview/). Testsigma offers a collection of built-in test data generators in [Default Test Data Generators](https://testsigma.com/docs/test-data/data-generators/default-list/). Furthermore, you can [create custom test data generators](https://testsigma.com/tutorials/addons/how-create-addons-test-data-generators/) using Java.

---

## **Add Data Generators in Test Steps**

1. Use **NLP** to create a **new step** in the **Test Case** and include a placeholder for **test data**.
2. Click the **test data** placeholder to replace it, and then select the **! Data Generator** from the **Test Data Types** dropdown menu.
3. Select **Type** as **Default** in the **Data Generators** overlay screen to use a collection of built-in test data generators.
[[info | NOTE:]]
| You can create a **data generator add-on** and select the **Type** to use your **custom** data generator.   
4. Select **Function Type** from the dropdown list.
5. Select **Function** from the dropdown list, and the system will display a built-in function list corresponding to the selected **function type**.
6. Click the right arrow before **Show Examples**. Each function has examples; you can find **descriptions** of the **functions** and **examples** of **inputs** and **outputs**.
7. Use the example as a reference, enter **inputs** in the function fields and click **Save** to add a data generator in the test step.

Here is a quick GIF demonstrating the above workflow: ![Add Data Generators](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/add_datagenerator.gif)

---