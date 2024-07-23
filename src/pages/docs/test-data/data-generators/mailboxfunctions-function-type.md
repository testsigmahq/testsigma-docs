---
title: "MailboxFunctions Function Type"
pagetitle: "Explore MailBoxFunctions for Efficient Email Handling"
metadesc: "Explore how MailBoxFunctions streamlines email data retrieval for improved workflow efficiency and clarity. Discover examples and detailed instructions."
noindex: false
order: 5.44
page_id: "mailboxfunctions-function-type"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Selecting MailboxFunctions as a Function Type for Data Generator"
  url: "#selecting-mailboxfunctions-as-a-function-type-for-data-generator"
- type: link
  name: "Get Email OTP"
  url: "#get-email-otp"
- type: link
  name: "Get Link from Content"
  url: "#get-link-from-content"
- type: link
  name: "Subject Verification"
  url: "#subject-verification"
- type: link
  name: "Content Verification"
  url: "#content-verification"
- type: link
  name: "Get Email Content"
  url: "#get-email-content"
- type: link
  name: "Get Email Subject"
  url: "#get-email-subject"
- type: link
  name: "Get URL with Text"
  url: "#get-url-with-text"    
- type: link
  name: "URL which contains"
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

MailBoxFunctions are specialized tools that facilitate efficient email management. They enable you to retrieve sender details and perform operations within email systems, seamlessly optimizing workflow and enhancing productivity.

---

## **Prerequisites**

Before utilising the different data generator functions, it's essential to understand basic concepts such as creating [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#create-test-case) and [Test Steps](https://testsigma.com/docs/test-cases/create-test-steps/overview/) and [adding data generators](https://testsigma.com/docs/test-data/types/data-generator/#add-data-generators-in-test-steps) in test steps. Additionally, familiarize yourself with [MailBoxFunctions](https://testsigma.com/docs/test-data/types/mailbox/) for accessing and manipulating email content and metadata 

---

## **Selecting MailboxFunctions as a Function Type for Data Generator**

1. Use **NLP** to create a **new step** in the test case and include a placeholder for **test data**.
2. Click on the **test data** placeholder. From the **Test Data Types** dropdown menu, select the **! Data Generator** option.
3. On the **! Data Generators** overlay screen, select the **Type** to **Default**. This will enable you to use a collection of built-in test data generators.
4. Select **MailboxFunctions** from the **Function Type** dropdown list. ![select number function type from data generators](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mailboxfuntions_functiontype_dg.gif)

[[info | NOTE:]]
| This action will display a list of built-in functions associated with the MailboxFunctions function type, enabling you to select the appropriate function based on your requirements.

---

## **Get Email OTP**

- Enables you to retrieve OTP emails that match a specified regular expression from the configured mailbox within a defined timeout.

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
        <td><b>Regex</b>: \d{4}<br><b>Select MailBox</b><br><b>Timeout</b>: 60 </td>
        <td>1234</td>
      </tr>
      <!-- Example 2 -->
      <tr>
        <td><b>Regex</b>: \d{6}<br><b>Select MailBox</b><br><b>Timeout</b>: 120</td>
        <td>987654</td>
      </tr>
      <!-- Example 3 -->
      <tr>
        <td><b>Regex</b>: \d{5}<br><b>Select MailBox</b><br><b>Timeout</b>: 90</td>
        <td>54321</td>
      </tr>
      <!-- Example 4 -->
      <tr>
        <td><b>Regex</b>: \d{4,6}<br><b>Select MailBox</b><br><b>Timeout</b>: 180</td>
        <td>1234, 56789, 456789</td>
      </tr>
    </tbody>
  </table>
</div>


---

## **Get Link from Content**

- Allows you to extract URLs from email content using a provided regular expression within the specified mailbox and timeout duration.

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
        <td><b>Regex</b>: \bhttps:\/\/example\.com\b<br><b>Select MailBox</b><br><b>Timeout</b>: 60</td>
        <td>https://example.com</td>
      </tr>
      <!-- Example 2 -->
      <tr>
        <td><b>Regex</b>: \bhttp:\/\/test\.com\/\w+<br><b>select MailBox</b><br><b>Timeout</b>: 120</td>
        <td>http://test.com/12345</td>
      </tr>
      <!-- Example 3 -->
      <tr>
        <td><b>Regex</b>: \bhttps:\/\/www\.website\.com\/\w+<br><b>Select MailBox</b><br><b>Timeout</b>: 90</td>
        <td>https://www.website.com/page123</td>
      </tr>
      <!-- Example 4 -->
      <tr>
        <td><b>Regex</b>: \bhttps:\/\/\w+\.com\/\w+<br><b>Select MailBox</b><br><b>Timeout</b>: 180</td>
        <td>https://example.com/page1, https://test.com/12345, https://anotherwebsite.com/home</td>
      </tr>
    </tbody>
  </table>
</div>


---

## **Subject Verification**

- Enables you to verify if email subjects match a given regular expression within the configured mailbox and timeout period.

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
    margin-bottom: 0.5em;
  }
  .example-title span {
    margin-right: 0.5em;
  }
  .example-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1em;
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
        <td><b>Regex</b>: \bSubject: Order #[0-9]+\b<br><b>Select MailBox</b><br><b>Compare String</b>: Subject: Order #12345<br><b>Timeout</b>: 60</td>
        <td>true</td>
      </tr>
      <!-- Example 2 -->
      <tr>
        <td><b>Regex</b>: \bSubject: OTP - [0-9]{4}\b<br><b>Select MailBox</b><br><b>Compare String</b>: Subject: OTP - 5678<br><b>Timeout</b>: 120</td>
        <td>true</td>
      </tr>
      <!-- Example 3 -->
      <tr>
        <td><b>Regex</b>: \bSubject: Invitation to event\b<br><b>Select MailBox</b><br><b>Compare String</b>: Subject: Invitation to event<br><b>Timeout</b>: 90</td>
        <td>true</td>
      </tr>
      <!-- Example 4 -->
      <tr>
        <td><b>Regex</b>: \bSubject: Verification Code: [0-9]{6}\b,<br><b>Select MailBox</b>,<br><b>Compare String</b>: Subject: Verification Code: 123456,<br><b>Timeout</b>: 180</td>
        <td>true</td>
      </tr>
    </tbody>
  </table>
</div>

---

## **Content Verification**

- Allows you to validate if email content matches a specified regular expression within the selected mailbox and timeout duration.

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
    <span>ℹ️</span>Examples for contentVerification Function:
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
        <td><b>Regex</b>: \bOrder #[0-9]+\b<br><b>Select MailBox</b><br><b>Compare String</b>: Order #12345<br><b>Timeout</b>: 60</td>
        <td>true</td>
      </tr>
      <!-- Example 2 -->
      <tr>
        <td><b>Regex</b>: \bOTP - [0-9]{4}\b<br><b>Select MailBox</b><br><b>Compare String</b>: OTP - 5678<br><b>Timeout</b>: 120</td>
        <td>true</td>
      </tr>
      <!-- Example 3 -->
      <tr>
        <td><b>Regex</b>: \bInvitation to event\b<br><b>Select MailBox</b><br><b>Compare String</b>: Invitation to event<br><b>Timeout</b>: 90</td>
        <td>true</td>
      </tr>
      <!-- Example 4 -->
      <tr>
        <td><b>Regex</b>: \bVerification Code: [0-9]{6}\b<br><b>Select MailBox</b><br><b>Compare String</b>: Verification Code: 123456<br><b>Timeout</b>: 180</td>
        <td>true</td>
      </tr>
    </tbody>
  </table>
</div>


---

## **Get Email Content**

- Enables you to retrieve the content of the latest email in the configured mailbox within the specified timeout.

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
    <span>ℹ️</span>Examples for getEmailContent Function:
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
        <td><b>Select MailBox</b><br><b>Timeout</b>: 60</td>
        <td>Email content from MailBox</td>
      </tr>
      <!-- Example 2 -->
      <tr>
        <td><b>Select MailBox</b><br><b>Timeout</b>: 120</td>
        <td>Email content from MailBox</td>
      </tr>
      <!-- Example 3 -->
      <tr>
        <td><b>Select MailBox</b><br><b>Timeout</b>: 90</td>
        <td>Email content from MailBox</td>
      </tr>
      <!-- Example 4 -->
      <tr>
        <td><b>Select MailBox</b></b><br><b>Timeout</b>: 180</td>
        <td>Email content from MailBox</td>
      </tr>
    </tbody>
  </table>
</div>


---

## **Get Email Subject**

- Allows you to fetch the subject line of the latest email from the specified mailbox within the given timeout.

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
        <td><b>Select MailBox</b><br><b>Timeout</b>: 60</td>
        <td>Email subject from MailBox</td>
      </tr>
      <!-- Example 2 -->
      <tr>
        <td><b>Select MailBox</b><br><b>Timeout</b>: 120</td>
        <td>Email subject from MailBox</td>
      </tr>
      <!-- Example 3 -->
      <tr>
        <td><b>Select MailBox</b><br><b>Timeout</b>: 90</td>
        <td>Email subject from MailBox</td>
      </tr>
      <!-- Example 4 -->
      <tr>
        <td><b>Select MailBox</b><br><b>Timeout</b>: 180</td>
        <td>Email subject from MailBox</td>
      </tr>
    </tbody>
  </table>
</div>

---

## **Get Url with Text**

- Enables you to retrieve URLs containing a specified text from emails in the configured mailbox within the timeout period.

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
    <span>ℹ️</span>Examples for getUrlWithText Function:
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
        <td><b>Text</b>: Click here for more info<br><b>Select MailBox</b><br><b>Timeout</b>: 60</td>
        <td>URL linked to "Click here for more info" from MailBox</td>
      </tr>
      <!-- Example 2 -->
      <tr>
        <td><b>Text</b>: Visit our website<br><b>Select MailBox</b><br><b>Timeoutv: 120</td>
        <td>URL linked to "Visit our website" from MailBox</td>
      </tr>
      <!-- Example 3 -->
      <tr>
        <td><b>Text</b>: Check out the new products<br><b>Select MailBox</b><br><b>Timeout</b>: 90</td>
        <td>URL linked to "Check out the new products" from MailBox</td>
      </tr>
      <!-- Example 4 -->
      <tr>
        <td><b>Text</b>: Click here or here for updates<br><b>Select MailBox</b><br><b>Timeout</b>: 180</td>
        <td>URLs linked to "Click here or here for updates" from MailBox</td>
      </tr>
    </tbody>
  </table>
</div>


---

## **URL which contains**

- Allows you to fetch URLs that include a provided substring from emails in the selected mailbox within the timeout.

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
    <span>ℹ️</span>Examples for getUrlContains Function:
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
        <td><b>Substring</b>: more info<br> <b>Select MailBox</b><br><b>Timeout</b>: 60</td>
        <td>URLs containing "more info" MailBox</td>
      </tr>
      <!-- Example 2 -->
      <tr>
        <td><b>Substring</b>: website<br> <b>Select MailBox</b><br><b>Timeout</b>: 120</td>
        <td>URLs containing "website" from MailBox</td>
      </tr>
      <!-- Example 3 -->
      <tr>
        <td><b>Substring</b>: products<br><b>Select MailBox</b><br><b>Timeout</b>: 90</td>
        <td>URLs containing "products" from MailBox</td>
      </tr>
      <!-- Example 4 -->
      <tr>
        <td><b>Substring</b>: updates<br><b>Select MailBox</b><br><b>Timeout</b>: 180</td>
        <td>URLs containing "updates" from MailBox</td>
      </tr>
    </tbody>
  </table>
</div>


---

## **URL matching regex**

- Enables you to retrieve URLs matching a specified regular expression pattern from emails in the configured mailbox within the timeout period.

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
    <span>ℹ️</span>Examples for getUrlContains Function:
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
        <td><b>Regex</b>: \d{4}<br> <b>Select MailBox</b><br><b>Timeout</b>: 60</td>
        <td>URLs containing numbers (e.g., 1234) from MailBox within 60</td>
      </tr>
      <!-- Example 2 -->
      <tr>
        <td><b>Regex</b>: \w{6}<br><b>Select MailBox</b><br><b>Timeout</b>: 120</td>
        <td>URLs containing alphanumeric strings (e.g., abc123) from MailBox within 120</td>
      </tr>
      <!-- Example 3 -->
      <tr>
        <td><b>Regex</b>: https?<br><b>Select MailBox</b><br><b>Timeout</b>: 90</td>
        <td>URLs starting with "http" or "https" from MailBox within 90</td>
      </tr>
      <!-- Example 4 -->
      <tr>
        <td><b>Regex</b>: \.com$<br><b>Select MailBox</b><br><b>Timeout</b>: 180</td>
        <td>URLs ending with ".com" from MailBox within 180</td>
      </tr>
    </tbody>
  </table>
</div>

---

## **Get Sender Email**

- Allows you to retrieve the email address of the sender from an email message by using it to extract the sender email address from the latest email in the inbox.

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
        <td><b>Select MailBoxFunctions</b><br><b>Timeout</b>: 60 seconds</td>
        <td>sender1@example.com</td>
      </tr>
      <!-- Example 2 -->
      <tr>
        <td><b>Select MailBoxFunctions</b><br><b>Timeout</b>: 120 seconds</td>
        <td>sender2@example.com</td>
      </tr>
      <!-- Example 3 -->
      <tr>
        <td><b>Select MailBoxFunctions</b><br><b>Timeout</b>: 90 seconds</td>
        <td>sender3@example.com</td>
      </tr>
      <!-- Example 4 -->
      <tr>
        <td><b>Select MailBoxFunctions</b><br><b>Timeout</b>: 180 seconds</td>
        <td>sender4@example.com</td>
      </tr>
    </tbody>
  </table>
</div>

---

## **Get Sender Name**

- Enables you to fetch the name of the sender from an email message. Identify the name of the sender from the most recent email.

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
        <td><b>Select MailBoxFunctions</b><br><b>Timeout</b>: 60 seconds</td>
        <td>John Doe</td>
      </tr>
      <!-- Example 2 -->
      <tr>
        <td><b>Select MailBoxFunctions</b><br><b>Timeout</b>: 120 seconds</td>
        <td>Jane Smith</td>
      </tr>
      <!-- Example 3 -->
      <tr>
        <td><b>Select MailBoxFunctions</b><br><b>Timeout</b>: 90 seconds</td>
        <td>Alice Johnson</td>
      </tr>
      <!-- Example 4 -->
      <tr>
        <td><b>Select MailBoxFunctions</b><br><b>Timeout</b>: 180 seconds</td>
        <td>Bob Brown</td>
      </tr>
    </tbody>
  </table>
</div>


---



