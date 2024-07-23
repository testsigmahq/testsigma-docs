---
title: "MailboxAliasFunctions Function Type"
pagetitle: "Generate and Manage Email Addresses with EmailFunctions"
metadesc: "MailboxAliasFunctions function type allows you to create various email addresses with ease. Learn to generate usernames, random emails, and domain-specific emails."
noindex: false
order: 5.43
page_id: "mailboxaliasfunctions-function-type"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Selecting MailboxAliasFunctions as a Function Type for Data Generator"
  url: "#selecting-mailboxaliasfunctions-as-a-function-type-for-data-generator"
- type: link
  name: "Generate Mailbox Alias"
  url: "#generate-mailbox-alias"
- type: link
  name: "Get Email Content"
  url: "#get-email-content"
- type: link
  name: "Get Email Subject"
  url: "#get-email-subject"
- type: link
  name: "Get OTP"
  url: "#get-otp"
- type: link
  name: "URL with Text"
  url: "#url-with-text"    
- type: link
  name: "URL which Contains"
  url: "#url-which-contains" 
- type: link
  name: "URL matching Regex"
  url: "#url-matching-regex"   
- type: link
  name: "Get Sender Email"
  url: "#get-sender-email" 
- type: link
  name: "Get Sender Name"
  url: "#get-sender-name" 
---

---

MailBoxAlias Functions enable dynamic interaction with email data in testing and automation. Users can create, retrieve, and manipulate email aliases and their content during test execution. These functions enhance testing efficiency by facilitating seamless email testing and validation processes.

---

## **Prerequisites**

Before utilising the different data generator functions, it's essential to understand basic concepts such as creating [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#create-test-case) and [Test Steps](https://testsigma.com/docs/test-cases/create-test-steps/overview/) and [adding data generators](https://testsigma.com/docs/test-data/types/data-generator/#add-data-generators-in-test-steps) in test steps. Additionally, familiarize yourself with [MailBoxFunctions](https://testsigma.com/docs/test-data/types/mailbox/) for accessing and manipulating email content and metadata.

---

## **Selecting MailboxAliasFunctions as a Function Type for Data Generator**

1. Use **NLP** to create a **new step** in the test case and include a placeholder for **test data**.
2. Click on the **test data** placeholder. From the **Test Data Types** dropdown menu, select the **! Data Generator** option.
3. On the **! Data Generators** overlay screen, select the **Type** to **Default**. This will enable you to use a collection of built-in test data generators.
4. Select **MailboxAliasFunctions** from the **Function Type** dropdown list. ![select mailboxaliasfunctions function type from data generators](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mailboxaliasfuntions_functiontype_dg.gif)

[[info | NOTE:]]
| This action will display a list of built-in functions associated with the MailboxAliasFunctions function type, enabling you to select the appropriate function based on your requirements.

---

## **Generate Mailbox Alias**

- Allows you to create a unique mailbox alias associated with your primary email account. 
- Each alias creates a unique mailbox address, allowing multiple mailboxes to be directed to the same inbox for testing and automation.

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
      <td><b>Selected MailBox</b></td>
      <td>mailboxalias123@example.com</td>
    </tr>
    <tr>
      <td><b>Selected MailBox</b></td>
      <td>user1alias456@example.com</td>
    </tr>
    <tr>
      <td><b>Selected MailBox</b></td>
      <td>testuseralias789@example.com</td>
    </tr>
    <tr>
      <td><b>Selected MailBox</b></td>
      <td>demoalias101@example.com</td>
    </tr>
  </table>
</div>


---

## **Get Email Content**

- Enables you to retrieve the entire content of an email in a variable. It fetches the body content of an email dynamically during test execution.

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
      <td><b>Runtime Variable</b>: inbox<br><b>Timeout: 30</b></td>
      <td>Hello! This is the content of your email.</td>
    </tr>
    <tr>
      <td><b>Runtime Variable</b>: promotions<br><b>Timeout</b>: 30</td>
      <td>Get 50% off on your next purchase.</td>
    </tr>
    <tr>
      <td><b>Runtime Variable</b>: updates<br><b>Timeout</b>: 30</td>
      <td>Your order has been shipped.</td>
    </tr>
    <tr>
      <td><b>Runtime Variable</b>: spam<br><b>Timeout</b>: 30</td>
      <td>Congratulations! You've won a prize.</td>
    </tr>
  </table>
</div>

---

## **Get Email Subject**

- Allows you to retrieve the subject of an email in a variable. It is used to capture email subjects dynamically during test execution.

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
    <tr>
      <th>Input</th>
      <th>Output</th>
    </tr>
    <tr>
      <td><b>Runtime Variable</b>: inbox<br><b>Timeout</b>: 30</td>
      <td>Your Order Confirmation</td>
    </tr>
    <tr>
      <td><b>Runtime Variable</b>: promotions<br><b>Timeout</b>: 30</td>
      <td>Special Offer Just for You</td>
    </tr>
    <tr>
      <td><b>Runtime Variable</b>: updates<br><b>Timeout</b>: 30</td>
      <td>Account Verification Required</td>
    </tr>
    <tr>
      <td><b>Runtime Variable</b>: spam<br><b>Timeout</b>: 30</td>
      <td>You've Been Selected!</td>
    </tr>
  </table>
</div>

---

## **Get OTP**

- Enables you to extract the OTP sent to the mailbox into a variable based on a regex pattern. 

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
      <td><b>Regex</b>: \d{6}<br><b>Runtime Variable</b>: inbox,<br><b>Timeout</b>: 30</td>
      <td>123456</td>
    </tr>
    <tr>
      <td><b>Regex</b>: \d{4}<br><b>Runtime Variable</b>: inbox<br><b>Timeout</b>: 30</td>
      <td>7890</td>
    </tr>
    <tr>
      <td><b>Regex</b>: \d{5}<br><b>Runtime Variable</b>: promotions<br><b>Timeout</b>: 30</td>
      <td>54321</td>
    </tr>
    <tr>
      <td><b>Regex</b>: \d{6}<br><b>Runtime Variable</b>: updates<br><b>Timeout</b>: 30</td>
      <td>654321</td>
    </tr>
  </table>
</div>

---

## **URL with Text**

- Allows you to extract a URL containing specific text from the email.

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
      <td><b>Text</b>: Verify<br><b>Runtime Variable</b>: inbox<br><b>Timeout</b>: 30</td>
      <td>https://example.com/verify</td>
    </tr>
    <tr>
      <td><b>Text</b>: Confirm<br><b>Runtime Variable</b>: promotions<br><b>Timeout</b>: 30</td>
      <td>https://example.com/confirm</td>
    </tr>
    <tr>
      <td><b>Text</b>: Reset<br><b>Runtime Variable</b>: updates<br><b>Timeout</b>: 30</td>
      <td>https://example.com/reset</td>
    </tr>
    <tr>
      <td><b>Text</b>: Activate<br><b>Runtime Variable</b>: spam<br><b>Timeout</b>: 30</td>
      <td>https://example.com/activate</td>
    </tr>
  </table>
</div>

---

## **URL which Contains**

- Enables you to extract a URL containing specific parameters from the email.

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
      <td><b>Substring</b>: verify<br><b>Runtime Variable</b>: inbox<br><b>Timeout</b>: 30</td>
      <td>https://example.com/verify</td>
    </tr>
    <tr>
      <td><b>Substring</b>: confirm<br><b>Runtime Variable</b>: promotions<br><b>Timeout</b>: 30</td>
      <td>https://example.com/confirm</td>
    </tr>
    <tr>
      <td><b>Substring</b>: reset<br><b>Runtime Variable</b>: updates<br><b>Timeout</b>: 30</td>
      <td>https://example.com/reset</td>
    </tr>
    <tr>
      <td><b>Substring</b>: activate<br><b>Runtime Variable</b>: spam<br><b>Timeout</b>: 30</td>
      <td>https://example.com/activate</td>
    </tr>
  </table>
</div>

---

## **URL Matching Regex**

- Allows you to extract a URL from the email that matches a specific regex pattern. 

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
      <td><b>Regex</b>: r'https://\w+\.com/\w+'<br><b>Runtime Variable</b>: inbox<br><b>Timeout</b>: 30</td>
      <td>https://example.com/verify</td>
    </tr>
    <tr>
      <td><b>Regex</b>: r'https://\w+\.com/\w+'<br><b>Runtime Variable</b>: promotions<br><b>Timeoutv: 30</td>
      <td>https://promo.com/deal</td>
    </tr>
    <tr>
      <td><b>Regex</b>: r'https://\w+\.com/\w+'<br><b>Runtime Variable</b>: updates<br><b>Timeout</b>: 30</td>
      <td>https://updates.com/info</td>
    </tr>
    <tr>
      <td><b>Regex</b>: r'https://\w+\.com/\w+'<br><b>Runtime Variable</b>: spam<br><b>Timeout</b>: 30</td>
      <td>https://spam.com/win</td>
    </tr>
  </table>
</div>

---

## **Get Sender Email**

- Enables you to extract the sender's email address from an email for testing purposes.

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
      <td><b>Runtime Variable</b>: inbox<br><b>Timeout</b>: 30</td>
      <td>sender@example.com</td>
    </tr>
    <tr>
      <td><b>Runtime Variable</b>: promotions<br><b>Timeout</b>: 30</td>
      <td>promo@example.com</td>
    </tr>
    <tr>
      <td><b>Runtime Variable</b>: updates<br><b>Timeout</b>: 30</td>
      <td>updates@example.com</td>
    </tr>
    <tr>
      <td><b>Runtime Variable</b>: spam<br><b>Timeout</b>: 30</td>
      <td>spam@example.com</td>
    </tr>
  </table>
</div>

---

## **Get Sender Name**

- Allows you to extract the sender's name from an email for testing purposes. 

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
      <td><b>Runtime Variable</b>: inbox<br><b>Timeout</b>: 30</td>
      <td>John Doe</td>
    </tr>
    <tr>
      <td><b>Runtime Variable</b>: promotions<br><b>Timeout</b>: 30</td>
      <td>Promo Sender</td>
    </tr>
    <tr>
      <td><b>Runtime Variable</b>: updates<br><b>Timeout</b>: 30</td>
      <td>Update Sender</td>
    </tr>
    <tr>
      <td><b>Runtime Variable</b>: spam<br><b>Timeout</b>: 30</td>
      <td>Spam Sender</td>
    </tr>
  </table>
</div>

---

