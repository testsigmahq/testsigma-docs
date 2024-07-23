---
title: "StringFunctions Function Type"
pagetitle: "Transform Text Easily with StringFunctions"
metadesc: "StringFunctions in Testsigma enable dynamic string manipulation, including concatenation and variable substitution, which is ideal for flexible data generation."
noindex: false
order: 5.53
page_id: "stringfunctions-function-type"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Selecting StringFunctions as a Function Type for Data Generator"
  url: "#selecting-stringfunctions-as-a-function-type-for-data-generator"
- type: link
  name: "Concat"
  url: "#concat"
- type: link
  name: "Param Substituter"
  url: "#param-substituter"
---

---

StringFunctions allow you to manipulate and transform text strings effortlessly. These functions enable you to combine strings and perform dynamic substitutions of placeholders with actual values, supporting various testing and data generation needs.

---

## **Prerequisites**

Before utilising the different data generator functions, it's essential to understand basic concepts such as creating [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#create-test-case) and [Test Steps](https://testsigma.com/docs/test-cases/create-test-steps/overview/) and [adding data generators](https://testsigma.com/docs/test-data/types/data-generator/#add-data-generators-in-test-steps) in test steps. Additionally, familiarize yourself with [Parameters](https://testsigma.com/docs/test-data/types/parameter/), [Runtime](https://testsigma.com/docs/test-data/types/runtime/) and [Environments](https://testsigma.com/docs/test-data/types/environment/).

---

## **Selecting StringFunctions as a Function Type for Data Generator**

1. Use **NLP** to create a **new step** in the test case and include a placeholder for **test data**.
2. Click on the **test data** placeholder. From the **Test Data Types** dropdown menu, select the **! Data Generator** option.
3. On the **! Data Generators** overlay screen, select the **Type** to **Default**. This will enable you to use a collection of built-in test data generators.
4. Select **StringFunctions** from the **Function Type** dropdown list. ![select stringfunctions function type from data generators](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/stringfunctions_functiontype_dg.gif)

[[info | NOTE:]]
| This action will display a list of built-in functions associated with the StringFunctions function type, enabling you to select the appropriate function based on your requirements.

---

## **Concat**

- Enables you to concatenate multiple strings or data fields into a single string output, allowing you to combine strings to form composite data inputs.

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
      <th>Inputs</th>
      <th>Outputs</th>
    </tr>
    <tr>
      <td><b>Test Data 1</b>: Hello<br><b>Test Data 2</b>: World</td>
      <td>HelloWorld</td>
    </tr>
    <tr>
      <td><b>Test Data 1</b>: @ User1</td>
      <td>User123</td>
    </tr>
    <tr>
      <td><b>Test Data 1</b>: $ Data</td>
      <td>DataGeneration</td>
    </tr>
    <tr>
      <td><b>Test Data 1</b>: * Travel</td>
      <td>https://simply-travel.testsigma.com/</td>
    </tr>
  </table>
</div>

---

## **Param Substituter**

- Allows you to replace placeholders in the input string with their respective values. 
- It supports Parameters, Runtime Variables, and Environment Variables, enabling dynamic substitution of variables into predefined strings for flexible data generation.

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
      <th>Inputs</th>
      <th>Outputs</th>
    </tr>
    <tr>
      <td><b>String</b>: I am @|name|. Born on *|dob| at $|place|</td>
      <td>I am John. Born on 01/01/1990 at New York</td>
    </tr>
    <tr>
      <td><b>String</b>: Welcome, @|username|! Today is *|date|.</td>
      <td>"Welcome, User123! Today is 2024-07-18."</td>
    </tr>
    <tr>
      <td><b>String</b>: Order ID: #|orderId|, Status: *|status|"</td>
      <td>Order ID: #5678, Status: Shipped</td>
    </tr>
    <tr>
      <td><b>String</b>: Hello @|firstName|, your appointment is on *|appointmentDate|</td>
      <td>Hello Alice, your appointment is on 2024-07-25</td>
    </tr>
  </table>
</div>


---


