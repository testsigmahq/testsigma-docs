---
title: "Mailbox Test Data Types"
page_title: "Mailbox type Test Data in Testsigma"
metadesc: "How to use Mailbox Test Data type to automate test scenarios that involve Email OTPs for two factor authentication"
noindex: false
order: 5.119
page_id: "Mailbox type Test Data"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Add Mailbox in Test Step"
  url: "#add-mailbox-in-test-step"
- type: link
  name: "Fetch OTP from Mailbox"
  url: "#fetch-otp-from-mailbox"
- type: link
  name: "Store Data as a Runtime Variable from Mailbox"
  url: "#store-data-as-a-runtime-variable-from-mailbox"
- type: link
  name: "Create Mailbox Alias in Test Step"
  url: "#create-mailbox-alias-in-test-step"
- type: link
  name: "Generate Mailbox Alias for Test Cases Execution"
  url: "#generate-mailbox-alias-for-test-cases-execution"

---

---

Mailbox test data can be utilized in Testsigma for various purposes

* Verify the accuracy of the OTP delivered via email by receiving an email and authenticating its content. 
* Validation of email content in numerous languages.
* Assessment of a user's ability to read an entire promotional email within a stipulated time.

Here's how you can use the built-in feature in Testsigma to access the mailbox, check if the mail has been received, open the email, read it, and process it.

[[info | NOTE:]]
| Testsigma designed the Mailbox feature to retrieve only the first email's relevant details, such as content, OTP, and subject information.

---

### **Prerequisites**

Provisioned mailbox - Contact [Testsigma Support](mailto:support@testsigma.com) or use the **Instant Chat** option; we will provision a mailbox for you.

You should also be familiar with Regular expressions. If not, refer to the [Regex guide - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

---

## **Add Mailbox in Test Step**

We will enter the Email Address provided by Testsigma using the Mailbox test data type in Test Step. Follow the steps below:

1. Create a **new step** in the **test case**, including a placeholder for **test data** in the NLP.
2. **Replace** the **test data** placeholder by selecting **&|Mailbox|** from the test data types dropdown menu.
3. Select the **Email** from the right-side panel.

Here is a quick GIF demonstrating the above workflow:
![add mailbox in test step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/add_Mailbox_ts.gif)

---

## **Fetch OTP from Mailbox** 

We will use the Test Data Generators available in Testsigma to store the OTP/ any data from the Mailbox selected. Follow the steps below:

1. Create a **new step** in the **test case**, including a placeholder for **test data** and an **element** in the **NLP** to enter the OTP code in the **OTP** field.
2. **Replace** the **test data** placeholder by selecting **!|Data Generator|** from the test data types dropdown menu.
3. Search and select the Test Data generator function **!|MailBoxFunctions :: getEmailOTP|**.
4. **Click** the **element** placeholder and **select** an **element** from the right side of the panel.
5. Enter the required arguments for the function and **create** the Test Step.
    - **Regex**: A sequence of characters defines a search pattern. Here, for example, we are given **\d{4}**, which is a pattern that matches any sequence of four consecutive digits (0-9).
    -  **MailBox**: It is an email mailbox that holds incoming email messages. Select Email from the drop-down list.
    -  **Timeout**: Enter the time a programme or system is willing to wait for a particular operation to complete. Here, for example, we are given 30 seconds to wait.

Here is a quick GIF demonstrating the above workflow:
![Fetch OTP from Mailbox](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/fetchotp_mb_ts.gif)

[[info | NOTE:]]
| For Two Factor Authentication, you must perform [Add Mailbox in Test Step](https://testsigma.com/docs/test-data/types/mailbox/#add-mailbox-in-test-step) and [Fetch OTP from Mailbox](https://testsigma.com/docs/test-data/types/mailbox/#fetch-otp-from-mailbox).

---

## **Store Data as a Runtime Variable from Mailbox**

We will use the Test Data Generators available in Testsigma to store the OTP/ any data from the Mailbox selected. Follow the steps below:

1. Create a **new step** in the **test case**, including two placeholders for **test data** in the **NLP** to store **data** in the runtime variable.
2. **Replace** the **test-data-1** placeholder by selecting **!|Data Generator|** from the test data types dropdown menu.
3. Search and select the Test Data generator function **!|MailBoxFunctions :: contentVerification|**.
4. **Replace** the **test-data-2** placeholder by selecting **$|Runtime|** from the test data types dropdown menu. Select the runtime variable from the right side of the panel to store data.
5. Enter the required arguments for the function and **create** the Test Step.
    - **Regex**: A sequence of characters defines a search pattern. Here, for example, we are given **\d{4}**, which is a pattern that matches any sequence of four consecutive digits (0-9).
    -  **MailBox**: It is an email mailbox that holds incoming email messages. Select Email from the drop-down list.
    -  **Compare String**: CompareString is a function used in programming languages to compare two strings and determine if they are equal or not.
    -  **Timeout**: Enter the time a programme or system is willing to wait for a particular operation to complete. Here, for example, we are given 30 seconds to wait.

Here is a quick GIF demonstrating the above workflow:
![Store Data as a Runtime Variable from Mailbox](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/storeruntime_mb_ts.gif)

[[info | NOTE:]]
| You can store the subject by selecting the Test Data Generator function: **!|MailBoxFunctions :: subjectVerification|**.

---

## **Create Mailbox Alias in Test Step**

In the test step; you can create a mailbox alias that associates an additional email address with your primary email account. You can use it to create multiple email addresses that all lead to the same inbox. It generates a unique mailbox every time you execute it during test execution.

1. Create a **new step** in the **test case**, including two placeholders for **test data** in the **NLP** to create a mailbox alias.
2. **Replace** the **test-data-1** placeholder by selecting **!|Data Generator|** from the test data types dropdown menu.
3. Search and select the Test Data generator function **!|MailBoxAliasFunctions :: generateMailBoxAlias|**.
4. Select Linked Mailbox to create a unique mailbox every time and click **Save**.
5. **Delete** the **test-data-2** placeholder and enter text by creating a runtime variable and storing the email. Here, for example, we are given **Email1** as a runtime variable. Alternatively, select **$|Runtime|** from the **test data types** and store the email by selecting the runtime variable from the right side of the panel.

Here is a quick GIF demonstrating the above workflow:
![Mailbox Alias in Test Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/mailboxalias_ts.gif)

---

## **Generate Mailbox Alias for Test Cases Execution**

Sometimes, you may need to test email-based functionalities for multiple new accounts with limited email addresses. In such scenarios, Testsigma allows you to generate new aliases every time during the test case execution.

Below are the NLP tools that you can use for the same. It would be best to use add-ons such as **Data Generators** and **Actions** with the NLP tools mentioned below to store email in the runtime variable and verify the email messages.


|**Data Generators**|**Actions**|**Inputs**|
|---|---|---|
|**!\|MailBoxAliasFunctions :: getEmailContent\|**|This will get the entire email's content into a variable.|<li>Runtime Variable</li><li>Timeout in seconds</li>*For Example: Runtime Variable - content, Timeout - 30*|
|**!\|MailBoxAliasFunctions :: getEmailSubject\|**|This will get the entire email's subject into a variable.|<li>Runtime Variable</li><li>Timeout in seconds</li>*For Example: Runtime Variable - subject, Timeout - 30*|
|**!\|MailBoxAliasFunctions :: getOTP\|**|This will fetch the OTP sent to the email box into a variable.|<li>Regex</li><li>Runtime Variable</li><li>Timeout in seconds</li>*For Example: Regex - \d{4,6}, Runtime Variable - otp, Timeout - 30*|
|**!\|MailBoxAliasFunctions :: urlWithText\|**|This will fetch the URL that contains some required text.|<li>Text</li><li>Runtime Variable</li><li>Timeout in seconds</li>*For Example: Text - randomtext, Runtime Variable - url, Timeout - 30*|
|**!\|MailBoxAliasFunctions :: urlWhichContains\|**|This will fetch the URL that contains some required parameters.|<li>Substring</li><li>Runtime Variable</li><li>Timeout in seconds</li>*For Example: Substring - example, Runtime Variable - random_text, Timeout - 30*|
|**!\|MailBoxAliasFunctions :: urlMatchingRegex\|**|This will fetch the URL that contains a URL matching the required regex.|<li>Regex</li><li>Runtime Variable</li><li>Timeout in seconds</li>*For Example: Regex - r'https://\w+\.com/\w+', Runtime Variable - path, Timeout - 30*|

Below is a screenshot showing a test case generating a mailbox alias and getting content from the email.
![A test case displaying how to generate unique email address and how to use it](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-data/types/mailbox/generate-unique-email.png)

---
