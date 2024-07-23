---
title: "TestDataFromProfile Function Type"
pagetitle: "Generate and Manage Email Addresses with EmailFunctions"
metadesc: "TestDataFromProfile function type allows you to create various email addresses with ease. Learn to generate usernames, random emails, and domain-specific emails."
noindex: false
order: 5.54
page_id: "testdatafromprofile-function-type"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Selecting TestDataFromProfile as a Function Type for Data Generator"
  url: "#selecting-testdatafromprofile-as-a-function-type-for-data-generator"
- type: link
  name: "Get Test Data by SetName"
  url: "#get-test-data-by-setname"
- type: link
  name: "Get Test Data by RowNumber"
  url: "#get-test-data-by-rownumber"
---

---

TestDataFromProfile functions enable users to retrieve specific test data from designated profiles, allowing for easy access and utilization of predefined datasets for testing purposes.

---

## **Prerequisites**

Before utilising the different data generator functions, it's essential to understand basic concepts such as creating [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#create-test-case) and [Test Steps](https://testsigma.com/docs/test-cases/create-test-steps/overview/) and [adding data generators](https://testsigma.com/docs/test-data/types/data-generator/#add-data-generators-in-test-steps) in test steps. Additionally, familiarize yourself with [Test Data Profile](https://testsigma.com/docs/test-data/create-data-profiles/).

---

## **Selecting TestDataFromProfile as a Function Type for Data Generator**

1. Use **NLP** to create a **new step** in the test case and include a placeholder for **test data**.
2. Click on the **test data** placeholder. From the **Test Data Types** dropdown menu, select the **! Data Generator** option.
3. On the **! Data Generators** overlay screen, select the **Type** to **Default**. This will enable you to use a collection of built-in test data generators.
4. Select **TestDataFromProfile** from the **Function Type** dropdown list. ![select testdatafromprofile function type from data generators](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/testdatafromprofile_functiontype_dg.gif)

[[info | NOTE:]]
| This action will display a list of built-in functions associated with the TestDataFromProfile function type, enabling you to select the appropriate function based on your requirements.

---

## **Get Test Data by SetName**

- Enables you to fetch test data by specifying the test data profile, dataset, parameter, and dataset index and returning corresponding data from the selected profile and dataset.

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
    padding: 0.75em;
    text-align: left;
    word-break: break-all; /* Ensures long words are wrapped */
  }
  .example-table th {
    background-color: #f2f2f2;
  }
</style>

<div class="example-container">
  <div class="example-title">
    <span>ℹ️</span>Example:
  </div>
  <table class="example-table">
    <tr>
      <th>Input</th>
      <th>Output</th>
    </tr>
    <tr>
      <td><strong>Profile:</strong> Customer Data Profile<br><strong>Dataset:</strong> Active Customers<br><strong>Parameter:</strong> Customer ID<br><strong>Data Set:</strong> 1</td>
      <td>12345</td>
    </tr>
    <tr>
      <td><strong>Profile:</strong> Order Data Profile<br><strong>Dataset:</strong> Pending Orders<br><strong>Parameter:</strong> Order ID<br><strong>Data Set:</strong> 2</td>
      <td>67890</td>
    </tr>
    <tr>
      <td><strong>Profile:</strong> Employee Data Profile<br><strong>Dataset:</strong> Current Employees<br><strong>Parameter:</strong> Employee ID<br><strong>Data Set:</strong> 3</td>
      <td>54321</td>
    </tr>
    <tr>
      <td><strong>Profile:</strong> Product Data Profile<br><strong>Dataset:</strong> Available Products <br><strong>Parameter:</strong> Product Code<br><strong>Data Set:</strong> 4</td>
      <td>P001</td>
    </tr>
  </table>
</div>

---

## **Get Test Data by RowNumber**

- Allows you to retrieve test data by specifying the row number within the profile and returning data from that row.

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
  .example-list {
    list-style: none;
    padding: 0;
  }
  .example-list li {
    margin-bottom: 0.5em;
  }
</style>

<div class="example-container">
  <div class="example-title">
    <span>ℹ️</span>Example:
  </div>
  <ul class="example-list">
    <li><b>Input:</b> None (This function does not require any specific input)</li>
    <li><b>Output:</b></li>
    <ul>
      <li>Neha Grant</li>
      <li>Vern Sanford</li>
      <li>Michael Johnson</li>
      <li>Sarah Davis</li>
    </ul>
  </ul>
</div>

---

