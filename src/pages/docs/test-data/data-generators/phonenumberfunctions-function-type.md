---
title: "PhoneNumberFunctions Function Type"
pagetitle: "Generate and Validate OTP with PhoneNumberFunctions"
metadesc: "PhoneNumberFunctions enables you to generate OTPs for phone numbers and validate them during registration or login, ensuring secure and accurate verification."
noindex: false
order: 5.50
page_id: "phonenumberfunctions-function-type"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Selecting PhoneNumberFunctions as a Function Type for Data Generator"
  url: "#selecting-phonenumberfunctions-as-a-function-type-for-data-generator"
- type: link
  name: "Get OTP"
  url: "#get-otp"
---

---

Phone Number Function Type in data generators allows you to generate valid phone numbers for testing applications, forms, or databases that require phone number fields. It helps ensure that they validate user interactions that require phone numbers.

---

## **Prerequisites**

Before utilising the different data generator functions, it's essential to understand basic concepts such as creating [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#create-test-case) and [Test Steps](https://testsigma.com/docs/test-cases/create-test-steps/overview/) and [adding data generators](https://testsigma.com/docs/test-data/types/data-generator/#add-data-generators-in-test-steps) in test steps.

---

## **Selecting PhoneNumberFunctions as a Function Type for Data Generator**

1. Use **NLP** to create a **new step** in the test case and include a placeholder for **test data**.
2. Click on the **test data** placeholder. From the **Test Data Types** dropdown menu, select the **! Data Generator** option.
3. On the **! Data Generators** overlay screen, select the **Type** to **Default**. This will enable you to use a collection of built-in test data generators.
4. Select **PhoneNumberFunctions** from the **Function Type** dropdown list. ![select phonenumberfunctions function type from data generators](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/phonenumberfunctions_functiontype_dg.gif)

[[info | NOTE:]]
| This action will display a list of built-in functions associated with the PhoneNumberFunctions function type, enabling you to select the appropriate function based on your requirements.

---

## **Get OTP**

- Enables you to get an OTP for phone numbers matching a specified regular expression within a set timeout. 
- It is useful when you verify phone numbers during registration or login.

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
        <th>Input</th>
        <th>Output</th>
      </tr>
    </thead>
    <tbody>
      <!-- Example 1 -->
      <tr>
        <td>
          <b>Regex</b>: \d{4}<br>
          <b>Select Phone Number</b><br>
          <b>Timeout</b>: 30
        </td>
        <td>1234</td>
      </tr>
      <!-- Example 2 -->
      <tr>
        <td>
          <b>Regex</b>: \d{6}<br>
          <b>Select Phone Number</b><br>
          <b>Timeout</b>: 600
        </td>
        <td>654321</td>
      </tr>
      <!-- Example 3 -->
      <tr>
        <td>
          <b>Regex</b>: \d{4,6}<br>
          <b>Select Phone Number</b><br>
          <b>Timeout</b>: 120
        </td>
        <td>4982, 789012</td>
      </tr>
      <!-- Example 4 -->
      <tr>
        <td>
          <b>Regex</b>: \d{5}<br>
          <b>Select Phone Number</b><br>
          <b>Timeout</b>: 45
        </td>
        <td>45178</td>
      </tr>
    </tbody>
  </table>
</div>

----
