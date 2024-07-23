---
title: "ChangeDataType Function Type"
pagetitle: "Change Data Type Function: Convert Input Values Easily"
metadesc: "Change Data Type Function allows you to convert input values to specified data types, ensuring compatibility for various operations and storage needs."
noindex: false
order: 5.34
page_id: "changedatatype-function-type"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Selecting ChangeDataType as a Function Type for Data Generator"
  url: "#selecting-changedatatype-as-a-function-type-for-data-generator"
- type: link
  name: "Convert Input Data Type"
  url: "#convert-input-data-type"
---

---

Change Data Type function allows you to transform an input value into a specified data type. It can transform data for calculations, logical operations, or display purposes, ensuring seamless integration with different processes.

---

## **Prerequisites**

Before utilising the different data generator functions, it's essential to understand basic concepts such as creating [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#create-test-case) and [Test Steps](https://testsigma.com/docs/test-cases/create-test-steps/overview/) and [adding data generators](https://testsigma.com/docs/test-data/types/data-generator/#add-data-generators-in-test-steps) in test steps.

---

## **Selecting ChangeDataType as a Function Type for Data Generator**

1. Use **NLP** to create a **new step** in the test case and include a placeholder for **test data**.
2. Click on the **test data** placeholder. From the **Test Data Types** dropdown menu, select the **! Data Generator** option.
3. On the **! Data Generators** overlay screen, select the **Type** to **Default**. This will enable you to use a collection of built-in test data generators.
4. Select **ChangeDataType** from the **Function Type** dropdown list. ![select changedatatype function type from data generators](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/changedatatype_functiontype_dg.gif)

[[info | NOTE:]]
| This action will display a list of built-in functions associated with the Address function type, enabling you to select the appropriate function based on your requirements.

---

## **Convert Input Data Type**

- Allows you to transform an input value into a specified data type.

<style>
  .example-container {
    border: 1px solid gray;
    border-radius: 4px;
    padding: 0.5em;
    margin: 0.5em 0;
    background-color: #f2f2f2;
  }
  .example-title {
    color: darkgreen;
    font-weight: bold;
    display: flex;
    align-items: center;
  }
  .example-title span {
    margin-right: 5px;
  }
  .example-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 0.5em;
  }
  .example-table th, .example-table td {
    border: 1px solid gray;
    padding: 0.5em;
    text-align: left;
  }
  .example-table th {
    background-color: #e2e2e2;
  }
</style>

<div class="example-container">
  <div class="example-title">
    <span>ℹ️</span>Examples:
  </div>

  <table class="example-table">
    <tr>
      <th>Inputs</th>
      <th>Outputs</th>
    </tr>
    <tr>
      <td><b>Input</b>: 123<br><b>Data Type</b>: int</td>
      <td>123</td>
    </tr>
    <tr>
      <td><b>Input</b>: 0<br><b>Data Type</b>: boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td><b>Input</b>: 65<br><b>Data Type</b>: char</td>
      <td>A</td>
    </tr>
    <tr>
      <td><b>Input</b>: 3.14<br><b>Data Type</b>: double</td>
      <td>3.14</td>
    </tr>
  </table>
</div>

---

