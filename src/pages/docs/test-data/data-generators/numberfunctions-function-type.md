---
title: "NumberFunctions Function Type"
pagetitle: "NumberFunctions Type: Generate Random Numbers Easily"
metadesc: "NumberFunctions Type lets you perform various mathematical operations and generate unique, random numbers, aiding diverse data generation needs."
noindex: false
order: 5.48
page_id: "numberfunctions-function-type"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Selecting NumberFunctions as a Function Type for Data Generator"
  url: "#selecting-numberfunctions-as-a-function-type-for-data-generator"
- type: link
  name: "Custom Calculation"
  url: "#custom-calculations"
---

---

NumberFunctions function type allows you to perform mathematical operations on numerical data. It enables you to generate unique and random numbers through various functions, such as custom calculations, sequences, and random values. This type helps you create diverse data sets with numerical results.

---

## **Prerequisites**

Before utilising the different data generator functions, it's essential to understand basic concepts such as creating [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#create-test-case) and [Test Steps](https://testsigma.com/docs/test-cases/create-test-steps/overview/) and [adding data generators](https://testsigma.com/docs/test-data/types/data-generator/#add-data-generators-in-test-steps) in test steps.

---

## **Selecting NumberFunctions as a Function Type for Data Generator**

1. Use **NLP** to create a **new step** in the test case and include a placeholder for **test data**.
2. Click on the **test data** placeholder. From the **Test Data Types** dropdown menu, select the **! Data Generator** option.
3. On the **! Data Generators** overlay screen, select the **Type** to **Default**. This will enable you to use a collection of built-in test data generators.
4. Select **NumberFunctions** from the **Function Type** dropdown list. ![select numberfunctions function type from data generators](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/numberfunctions_functiontype_dg.gif)

[[info | NOTE:]]
| This action will display a list of built-in functions associated with the NumberFunctions function type, enabling you to select the appropriate function based on your requirements.

---

## **Custom Calculation**

- Allows you to perform mathematical operations based on a given expression. 
- You can use various test data types to create dynamic calculations, such as plain text, parameters, runtime, and environment variables.

<style>
  .example-container {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1em;
    margin: 1em 0;
    background-color: #f9f9f9;
  }
  .example-title {
    color: #2d572c;
    font-weight: bold;
    display: flex;
    align-items: center;
    margin-bottom: 0.5em;
  }
  .example-title span {
    margin-right: 0.5em;
  }
  .example-table {
    width: 100%;
    border-collapse: collapse;
  }
  .example-table th, .example-table td {
    border: 1px solid #ddd;
    padding: 0.5em;
    text-align: left;
  }
  .example-table th {
    background-color: #f2f2f2;
  }
</style>

<div class="example-container">
  <div class="example-title">
    <span>ℹ️</span>Examples:
  </div>
  <table class="example-table">
    <thead>
      <tr>
        <th>Inputs</th>
        <th>Outputs</th>
      </tr>
    </thead>
    <tbody>
      <!-- Example 1 -->
      <tr>
        <td><b>Test data:</b> 12+8</td>
        <td>20</td>
      </tr>
      <!-- Example 2 -->
      <tr>
        <td><b>Test data:</b> @|param1| * @|param2| (<i>eg: @|param1| = 6</i> and @|param2| = 4</i>)</td>
        <td>24</td>
      </tr>
      <!-- Example 3 -->
      <tr>
        <td><b>Test data:</b> $|runtimeValue|-15 (<i>eg: runtimeValue = 40</i>)</td>
        <td>25</td>
      </tr>
      <!-- Example 4 -->
      <tr>
        <td><b>Test data:</b> 35+15</td>
        <td>50</td>
      </tr>
    </tbody>
  </table>
</div>


---

