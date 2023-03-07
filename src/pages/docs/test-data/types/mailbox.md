---
title: "Mailbox type Test Data"
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
  name: "Generating a new mailbox with every test case execution"
  url: "#generating-a-new-mailbox-with-every-test-case-execution"
---

---

Mailbox test data in Testsigma can be used when:
* You must receive an email and validate the content to understand if the OTP delivered in the email is proper. 
* You need to validate content for emails in different languages.
* You want to check if a user can read an entire marketing email within a specified time.

All of these use cases have one thing in common - A mailbox. Your test needs to be able to access the mailbox, check if the mail has been received, open the email, read it and process it.

In Testsigma, this feature is built-in. Here's how you can use it


---

### **Prerequisites**

Provisioned mailbox - Contact [Testsigma Support](mailto:support@testsigma.com) or use the Instant Chat option; we will provision a mailbox for you.

You should also be familiar with Regular expressions. If not, refer to the [Regex guide - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

---
## **Add Mailbox in Test Step**

We will enter the Email Address provided by Testsigma using the Mailbox test data type in Test Step.

1. Create a **new step** in the **test case**, including a placeholder for **test data** in the NLP.
2. **Delete** the **test data** placeholder and select **&|Mailbox|** from the test data types.
3. Select the **Email** from the right-side panel.

Here is a quick GIF demonstrating the above workflow:
![add mailbox in test step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/add_Mailbox_ts.gif)

---

## **Fetch OTP from Mailbox** 

We will use the Test Data Generators available in Testsigma to store the OTP/ any data from the Mailbox selected. Refer to [Add Mailbox in Test Step](https://testsigma.com/docs/test-data/types/mailbox/#add-mailbox-in-test-step) and follow the subsequent steps.

1. Create a **new step** in the **test case**, including a placeholder for **test data** and an **element** in the **NLP** to enter the OTP code in the **OTP** field.
2. **Delete** the **test data** placeholder and select **!|Data Generator|** from the test data types.
3. Search and select the Test Data generator function **!|MailBoxFunctions :: getEmailOTP|**.
4. **Click** the **element** placeholder and **select** an **element** from the right side of the panel.
5. Enter the required arguments for the function and **create** the Test Step.
    - **Regex**: It is a sequence of characters that defines a search pattern. Here, for example, we are given **\d{4}**, which is a pattern that matches any sequence of four consecutive digits (0-9).
    -  **MailBox**: It is an email mailbox that holds incoming email messages. Select Email from the drop-down list.
    -  **Timeout**: Enter the time a programme or system is willing to wait for a particular operation to complete. Here, for example, we are given 30 seconds to wait.

Here is a quick GIF demonstrating the above workflow:
![Fetch OTP from Mailbox](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/fetchotp_mb_ts.gif)

[[info | NOTE:]]
| For Two Factor Authentication, you must perform [Add Mailbox in Test Step](https://testsigma.com/docs/test-data/types/mailbox/#add-mailbox-in-test-step) and [Fetch OTP from Mailbox](https://testsigma.com/docs/test-data/types/mailbox/#fetch-otp-from-mailbox).

---

## **Store Data as a Runtime Variable from Mailbox**

We will use the Test Data Generators available in Testsigma to store the OTP/ any data from the Mailbox selected. Refer to [Add Mailbox in Test Step](https://testsigma.com/docs/test-data/types/mailbox/#add-mailbox-in-test-step)  and follow the subsequent steps.

1. Create a **new step** in the **test case**, including two placeholders for **test data** in the **NLP** to store **data** in the runtime variable.
2. Delete the **test-data-1** placeholder and select **!|Data Generator|** from the test data types.
3. Search and select the Test Data generator function **!|MailBoxFunctions :: contentVerification|**.
4. **Delete** the **test-data-2** placeholder and select **$|Runtime|** from the test data types. Select the runtime variable from the right side of the panel to store data.
5. Enter the required arguments for the function and **create** the Test Step.
    - **Regex**: It is a sequence of characters that defines a search pattern. Here, for example, we are given **\d{4}**, which is a pattern that matches any sequence of four consecutive digits (0-9).
    -  **MailBox**: It is an email mailbox that holds incoming email messages. Select Email from the drop-down list.
    -  **Compare String**: CompareString is a function used in programming languages to compare two strings and determine if they are equal or not.
    -  **Timeout**: Enter the time a programme or system is willing to wait for a particular operation to complete. Here, for example, we are given 30 seconds to wait.

Here is a quick GIF demonstrating the above workflow:
![Store Data as a Runtime Variable from Mailbox](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/storeruntime_mb_ts.gif)

[[info | NOTE:]]
| You can store the subject by selecting the Test Data generator function **!|MailBoxFunctions :: subjectVerification|**.

---

## **Generating a new mailbox with every test case execution**

Sometimes, you may need to test some email-based functionalities for multiple new accounts with limited email addresses. In such scenarios, with Testsigma, you can generate new aliases every time during the test case execution.

The NLPs that can be used for the same are as below (It is recommended to use the Addons like 'String Data Generators' and 'String Actions' with the NLPs mentioned below - to store email in the runtime variable and verify the email messages.):

|**String Data Generators**|**String Actions**|
|---|---|
|**!\|MailBoxAliasFunctions :: generateMailBoxAlias\|**|This NLP will generate a unique mailbox every time it is executed during test execution.|
|**!\|MailBoxAliasFunctions :: getEmailContent\|**|This will get the entire email's content into a variable.|
|**!\|MailBoxAliasFunctions :: getEmailSubject\|**|This will get the entire email's subject into a variable.|
|**!\|MailBoxAliasFunctions :: getOTP\|**|This will fetch the OTP sent to the email box into a variable.|
|**!\|MailBoxAliasFunctions :: urlWithText\|**|This will fetch the URL that contains some required text.|
|**!\|MailBoxAliasFunctions :: urlWhichContains\|**|This will fetch the URL that contains some required parameters.|
|**!\|MailBoxAliasFunctions :: urlMatchingRegex\|**|This will fetch the URL that contains a URL matching the required regex.|

Below is a screenshot showing a test case generating a mailbox alias and getting content from the email.
![A test case displaying how to generate unique email address and how to use it](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-data/types/mailbox/generate-unique-email.png)


---


