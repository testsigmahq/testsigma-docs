---
title: "Internet Function Type"
pagetitle: "Internet Function for Generating Domain Names and Emails"
metadesc: "Learn how the Internet Function Type generates domain names, email addresses, URLs, and images for various testing scenarios with practical examples."
noindex: false
order: 5.42
page_id: "internet-function-type"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Selecting Internet as a Function Type for Data Generator"
  url: "#selecting-internet-as-a-function-type-for-data-generator"
- type: link
  name: "Domain Name"
  url: "#domain-name"
- type: link
  name: "Domain Word"
  url: "#domain-word"
- type: link
  name: "Domain Suffix"
  url: "#domain-suffix"
- type: link
  name: "Email Address"
  url: "#email-address"
- type: link
  name: "Email Address with Input Username"
  url: "#email-address-with-input-username"
- type: link
  name: "Safe Email Address"
  url: "#safe-email-address"
- type: link
  name: "Safe Email Address with Input Username"
  url: "#safe-email-address-with-input-username"    
- type: link
  name: "URL"
  url: "#url" 
- type: link
  name: "Image"
  url: "#image"
- type: link
  name: "Password"
  url: "#password" 
- type: link
  name: "UUID"
  url: "#uuid"
---

---

The Internet Function Type and Function for Data Generators offer various functionalities to generate Internet-related data. These functions facilitate the creation of domain names, email addresses, URLs, and images, allowing users to simulate real-world scenarios.

---

## **Prerequisites**

Before utilising the different data generator functions, it's essential to understand basic concepts such as creating [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#create-test-case) and [Test Steps](https://testsigma.com/docs/test-cases/create-test-steps/overview/) and [adding data generators](https://testsigma.com/docs/test-data/types/data-generator/#add-data-generators-in-test-steps) in test steps.

---

## **Selecting Internet as a Function Type for Data Generator**

1. Use **NLP** to create a **new step** in the test case and include a placeholder for **test data**.
2. Click on the **test data** placeholder. From the **Test Data Types** dropdown menu, select the **! Data Generator** option.
3. On the **! Data Generators** overlay screen, select the **Type** to **Default**. This will enable you to use a collection of built-in test data generators.
4. Select **Internet** from the **Function Type** dropdown list. ![select internet function type from data generators](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/internet_functiontype_dg.gif)

[[info | NOTE:]]
| This action will display a list of built-in functions associated with the Internet function type, enabling you to select the appropriate function based on your requirements.

---

## **Domain Name**

- Enables you to generate random domain names using it. It is useful for testing web applications that require domain names, such as creating sample websites or testing domain-related functionalities.

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
      <li>example.com</li>
      <li>mywebsite.org</li>
      <li>business.net</li>
      <li>shoponline.co</li>
    </ul>
  </ul>
</div>

---

## **Domain Word**

- Allows you to create a random word that can be used as a domain name. It is useful for generating unique and meaningful names for websites or services.

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
      <li>example</li>
      <li>mywebsite</li>
      <li>business</li>
      <li>shoponline</li>
    </ul>
  </ul>
</div>

---

## **Domain Suffix**

- Enables you to generate random domain suffixes. This is useful for testing purposes when you need different domain suffixes, such as .com, .org, .net.

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
      <li>.com</li>
      <li>.org</li>
      <li>.net</li>
      <li>.co</li>
    </ul>
  </ul>
</div>

---

## **Email Address**

- Allows you to generate random email addresses. It is useful for testing email-related functionalities in applications, such as sending confirmation emails or user notifications.

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
      <li>john.doe@example.com</li>
      <li>jane.smith@mywebsite.org</li>
      <li>sarah.glenn@business.net</li>
      <li>robert.d@shoponline.co</li>
    </ul>
  </ul>
</div>

---

## **Email Address with Input Username**

- Enables you to create an email address using a specific username, which is useful for testing the username with various email domains.

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
    <tr>
      <th>Input</th>
      <th>Output</th>
    </tr>
    <tr>
      <td>username: john.doe</td>
      <td>john.doe@example.com</td>
    </tr>
    <tr>
      <td>username: jane.smith</td>
      <td>jane.smith@mywebsite.org</td>
    </tr>
    <tr>
      <td>username: sarah.glenn</td>
      <td>sarah.glenn@business.net</td>
    </tr>
    <tr>
      <td>username: robert.d</td>
      <td>robert.d@shoponline.co</td>
    </tr>
  </table>
</div>

---

## **Safe Email Address**

- Allows you to generate safe email addresses, ensuring no personal or sensitive information is used. This is useful for privacy-conscious testing where personal data should not be used.

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
      <li>user@example.org</li>
      <li>contact@safe-mail.com</li>
      <li>info@secure-mail.net</li>
      <li>support@safeonline.co</li>
    </ul>
  </ul>
</div>

---

## **Safe Email Address with Input Username**

- Enables you to create a safe email address by using a specific username, ensuring that no personal or sensitive information is used. It is beneficial for generating non-sensitive email addresses for specific users in privacy-sensitive applications.

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
        <td>username: support</td>
        <td>support@safeonline.co</td>
      </tr>
      <tr>
        <td>username: contact</td>
        <td>contact@safe-mail.com</td>
      </tr>
      <tr>
        <td>username: customer.service</td>
        <td>customer.service@business.net</td>
      </tr>
      <tr>
        <td>username: admin</td>
        <td>admin@shoponline.co</td>
      </tr>
    </tbody>
  </table>
</div>

---

## **Image**

- Enables you to generate random image URLs. It is useful for testing image-loading functionalities in web applications, such as galleries or image hosting services.

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
      <li>http://example.com/image.jpg</li>
      <li>https://mywebsite.org/photo.png</li>
      <li>http://business.net/picture.gif</li>
      <li>https://shoponline.co/image.jpg</li>
    </ul>
  </ul>
</div>

---

## **Password**

- Allows you to generate random passwords with specified parameters. It is useful for creating secure passwords for user accounts, testing login functionalities, and ensuring password strength.

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
      <li>aB3@k9$ZqE</li>
      <li>P@ssw0rd123!</li>
      <li>S@mplePassw0rd!@#</li>
      <li>SecurePwd2023$!</li>
    </ul>
  </ul>
</div>


---

## **UUID**

- Enables you to generate universally unique identifiers (UUIDs) based on specified versions. This is useful for creating unique identifiers for records in databases, tracking entities, and ensuring global uniqueness.

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
      <li>6b22c165-06f4-4c2e-b15f-d285aa2d92c7</li>
      <li>dd6e936a-5fb1-4c3c-a358-2a2fb7c97f2f</li>
      <li>97f6e5fb-0f34-4347-bd84-5a7cb7f920d4</li>
      <li>43a24e08-9a36-4eef-8f13-6e9b95d1c0d5</li>
    </ul>
  </ul>
</div>


---


