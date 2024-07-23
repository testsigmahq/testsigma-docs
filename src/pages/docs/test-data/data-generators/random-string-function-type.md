---
title: "Random String Function Type"
pagetitle: "Random String: Generate Unique Alphanumeric Usernames"
metadesc: "Phone Number Function generates random cell or phone numbers for testing contact forms, databases, and user profiles in various applications."
noindex: false
order: 5.51
page_id: "random-string-function-type"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Selecting Random String as a Function Type for Data Generator"
  url: "#selecting-namefunctions-as-a-function-type-for-data-generator"
- type: link
  name: "Random String from Given Characters with Length"
  url: "#random-string-from-given-characters-with-length"
---

---

NameFunctions Function Type in data generators helps you create usernames. It provides unique and random data, offering a wide variety of name-related information for your applications.

---

## **Prerequisites**

Before utilising the different data generator functions, it's essential to understand basic concepts such as creating [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#create-test-case) and [Test Steps](https://testsigma.com/docs/test-cases/create-test-steps/overview/) and [adding data generators](https://testsigma.com/docs/test-data/types/data-generator/#add-data-generators-in-test-steps) in test steps.

---

## **Selecting NameFunctions as a Function Type for Data Generator**

1. Use **NLP** to create a **new step** in the test case and include a placeholder for **test data**.
2. Click on the **test data** placeholder. From the **Test Data Types** dropdown menu, select the **! Data Generator** option.
3. On the **! Data Generators** overlay screen, select the **Type** to **Default**. This will enable you to use a collection of built-in test data generators.
4. Select **NameFunctions** from the **Function Type** dropdown list. ![select namefunctions function type from data generators](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/randomstring_functiontype_dg.gif)

[[info | NOTE:]]
| This action will display a list of built-in functions associated with the NameFunctions function type, enabling you to select the appropriate function based on your requirements.

---

## **Random String from Given Characters with Length**

- Allows you to generate a random string of a specified length using a given set of characters. 
- It helps create unique and secure identifiers, passwords, or verification codes, ensuring that all data remains random and unique.

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
        <td><b>String Length:</b> 5<br><b>List:</b> ['A', 'B', 'C', 'D', 'E', '1', '2', '3']</td>
        <td>B3C1A</td>
      </tr>
      <!-- Example 2 -->
      <tr>
        <td><b>String Length:</b> 8<br><b>List:</b> ['X', 'Y', 'Z', '1', '2', '3', '4', '5']</td>
        <td>X2Y5Z341</td>
      </tr>
      <!-- Example 3 -->
      <tr>
        <td><b>String Length:</b> 4<br><b>List:</b> ['a', 'b', 'c', '1', '2', '3', '!', '@']</td>
        <td>a2@c</td>
      </tr>
      <!-- Example 4 -->
      <tr>
        <td><b>Input String Length:</b> 6<br><b>List:</b> ['0', '1', '2', 'A', 'B', 'C', '!', '#']</td>
        <td>C1#A20</td>
      </tr>
    </tbody>
  </table>
</div>

---