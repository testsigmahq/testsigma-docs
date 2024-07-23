---
title: "EmailFunctions Function Type"
pagetitle: "Generate and Manage Email Addresses with EmailFunctions"
metadesc: "EmailFunctions function type allows you to create various email addresses with ease. Learn to generate usernames, random emails, and domain-specific emails."
noindex: false
order: 5.38
page_id: "emailfunctions-function-type"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Selecting EmailFunctions as a Function Type for Data Generator"
  url: "#selecting-emailfunctions-as-a-function-type-for-data-generator"
- type: link
  name: "Username"
  url: "#username"
- type: link
  name: "Random Apha Numeric Email"
  url: "#random-apha-numeric-email"
- type: link
  name: "Random Apha Numeric Email with Domain"
  url: "#random-apha-numeric-email-with-domain"
- type: link
  name: "Random Email with Domain"
  url: "#random-email-with-domain"
- type: link
  name: "Random Email"
  url: "#random-email"
---

---

The EmailFunctions function type enables users to generate various types of email addresses with ease. It provides multiple functions to create email addresses with different configurations, allowing users to meet specific needs for different scenarios.

---

## **Prerequisites**

Before utilising the different data generator functions, it's essential to understand basic concepts such as creating [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#create-test-case) and [Test Steps](https://testsigma.com/docs/test-cases/create-test-steps/overview/) and [adding data generators](https://testsigma.com/docs/test-data/types/data-generator/#add-data-generators-in-test-steps) in test steps.

---

## **Selecting EmailFunctions as a Function Type for Data Generator**

1. Use **NLP** to create a **new step** in the test case and include a placeholder for **test data**.
2. Click on the **test data** placeholder. From the **Test Data Types** dropdown menu, select the **! Data Generator** option.
3. On the **! Data Generators** overlay screen, select the **Type** to **Default**. This will enable you to use a collection of built-in test data generators.
4. Select **EmailFunctions** from the **Function Type** dropdown list. ![select emailfunctions function type from data generators](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/emailfunctions_functiontype_dg.gif)

[[info | NOTE:]]
| This action will display a list of built-in functions associated with the EmailFunctions function type, enabling you to select the appropriate function based on your requirements.

---

## **Username**

- Allows you to generate a username with a specified length. This is useful for creating usernames for registration forms or login systems.

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
    <span>ℹ️</span>Example:
  </div>
  <table class="example-table">
    <thead>
      <tr>
        <th>Input</th>
        <th>Output</th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <td><b>username length</b>: 10</td>
      <td>johnsmith1</td>
    </tr>
    <tr>
      <td><b>username length</b>: 6</td>
      <td>sarah5</td>
    </tr>
    <tr>
      <td><b>username length</b>: 10</td>
      <td>sarahglenn</td>
    </tr>
    <tr>
      <td><b>username length</b>: 6</td>
      <td>robert</td>
    </tr>
    </tbody>
  </table>
</div>

---

## **Random Apha Numeric Email**

- Enables you to generate a random alphanumeric email address with a specified username length. This is ideal for generating unique email addresses for temporary registrations or testing environments.

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
    margin-top: 10px;
  }
  .example-table th, .example-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  .example-table th {
    background-color: #f2f2f2;
  }
</style>

<div class="example-container">
  <div class="example-title">
    <span>ℹ️</span> Example:
  </div>
  <table class="example-table">
    <thead>
      <tr>
        <th>Input</th>
        <th>Output</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>username length</b>: 8</td>
        <td>abc12345@example.com</td>
      </tr>
      <tr>
        <td><b>username length</b>: 12</td>
        <td>xyz67890abcd@example.com</td>
      </tr>
      <tr>
        <td><b>username length</b>: 10</td>
        <td>pqrs9876@example.com</td>
      </tr>
      <tr>
        <td><b>username length</b>: 6</td>
        <td>mno345@example.com</td>
      </tr>
    </tbody>
  </table>
</div>

---

## **Random Apha Numeric Email with Domain**

- Allows you to generate a random alphanumeric email address with a specified username length and domain. This is suitable for creating email addresses with specific domains for internal systems or controlled environments.

<style>
  .example-container {
    border: 1px solid gray;
    border-radius: 4px;
    padding: 1em;
    margin: 1em 0;
    background-color: #f2f2f2;
    overflow: auto; /* Ensures container expands to fit content */
  }
  .example-title {
    color: darkgreen;
    font-weight: bold;
    display: flex;
    align-items: center;
    margin-bottom: 0.5em; /* Added margin bottom for spacing */
  }
  .example-title span {
    margin-right: 5px;
  }
  .example-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }
  .example-table th, .example-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  .example-table th {
    background-color: #f2f2f2;
  }
</style>

<div class="example-container">
  <div class="example-title">
    <span>ℹ️</span> Example:
  </div>
  <table class="example-table">
    <thead>
      <tr>
        <th>Input</th>
        <th>Output</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>username length</b>: 10<br><b>Domain</b>: mydomain.com</td>
        <td>user1234ab@mydomain.com</td>
      </tr>
      <tr>
        <td><b>username length</b>: 8<br><b>Domain</b>: example.org</td>
        <td>test5678@example.org</td>
      </tr>
      <tr>
        <td><b>username length</b>: 12<br><b>Domain</b>: mail.com</td>
        <td>alpha890beta@mail.com</td>
      </tr>
      <tr>
        <td><b>username length</b>: 6<br><b>Domain</b>: customdomain.com</td>
        <td>abc456@customdomain.com</td>
      </tr>
    </tbody>
  </table>
</div>

---

## **Random Email with Domain**

- Enables you to generate a random email address with a specified username length and domain. This is useful for generating realistic email addresses for customer databases or user profiles with specified domains.

<style>
  .example-container {
    border: 1px solid gray;
    border-radius: 4px;
    padding: 1em;
    margin: 1em 0;
    background-color: #f2f2f2;
    overflow: auto; /* Ensures container expands to fit content */
  }
  .example-title {
    color: darkgreen;
    font-weight: bold;
    display: flex;
    align-items: center;
    margin-bottom: 0.5em; /* Added margin bottom for spacing */
  }
  .example-title span {
    margin-right: 5px;
  }
  .example-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }
  .example-table th, .example-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  .example-table th {
    background-color: #f2f2f2;
  }
</style>

<div class="example-container">
  <div class="example-title">
    <span>ℹ️</span> Example:
  </div>
  <table class="example-table">
    <thead>
      <tr>
        <th>Input</th>
        <th>Output</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>username length</b>: 6<br><b>Domain</b>: sample.com</td>
        <td>user12@sample.com</td>
      </tr>
      <tr>
        <td><b>username length</b>: 8<br><b>Domain</b>: example.com</td>
        <td>test4567@example.com</td>
      </tr>
      <tr>
        <td><b>username length</b>: 10<br><b>Domain</b>: domain.org</td>
        <td>randomuser@domain.org</td>
      </tr>
      <tr>
        <td><b>username length</b>: 7<br><b>Domain</b>: mail.net</td>
        <td>abc1234@mail.net</td>
      </tr>
    </tbody>
  </table>
</div>

---

## **Random Email**

- Allows you to generate a random email address with a specified username length. This is useful for general purposes, ensuring uniqueness and randomness in email addresses.

<style>
  .example-container {
    border: 1px solid gray;
    border-radius: 4px;
    padding: 1em;
    margin: 1em 0;
    background-color: #f2f2f2;
    overflow: auto; /* Ensures container expands to fit content */
  }
  .example-title {
    color: darkgreen;
    font-weight: bold;
    display: flex;
    align-items: center;
    margin-bottom: 0.5em; /* Added margin bottom for spacing */
  }
  .example-title span {
    margin-right: 5px;
  }
  .example-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }
  .example-table th, .example-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  .example-table th {
    background-color: #f2f2f2;
  }
</style>

<div class="example-container">
  <div class="example-title">
    <span>ℹ️</span> Example:
  </div>
  <table class="example-table">
    <thead>
      <tr>
        <th>Input</th>
        <th>Output</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>username length</b>: 12</td>
        <td>randomuser@domain.com</td>
      </tr>
      <tr>
        <td><b>username length</b>: 10</td>
        <td>sampleuser@domain.com</td>
      </tr>
      <tr>
        <td><b>username length</b>: 8</td>
        <td>testuser@domain.com</td>
      </tr>
      <tr>
        <td><b>username length</b>: 6</td>
        <td>user01@domain.com</td>
      </tr>
    </tbody>
  </table>
</div>

---


