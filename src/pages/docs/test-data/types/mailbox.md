---
title: "Test Data Type: Mail Box"
page_title: "Mail Box Test Data Types | Testsigma Documentation"
metadesc: "Learn how to use Mail Box Test Data Types in Testsigma to verify OTP, validate email content and improve your testing efficiency with this guide."
noindex: false
order: 5.119
page_id: "mailbox-test-data-types-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Adding Mail Box in a Test Step"
  url: "#adding-mail-box-in-a-test-step"
- type: link
  name: "Fetching OTP from Mail Box"
  url: "#fetching-otp-from-mail-box"
- type: link
  name: "Store Data as a Runtime Variable from Mail Box"
  url: "#store-data-as-a-runtime-variable-from-mail-box"
- type: link
  name: "Create Mail Box Alias in Test Step"
  url: "#create-mail-box-alias-in-test-step"
- type: link
  name: "Generate Mail Box Alias for Test Cases Execution"
  url: "#generate-mail-box-alias-for-test-cases-execution"

---

---

Testsigma provides a digital inbox called Mail Box to verify OTP accuracy, check for received emails, open and read them, process them, validate email content in various languages, and test the speed at which a user can read a promotional email during testing. This guide will help you access and manage the Mail Box.

[[info | NOTE:]]
| Testsigma designed the Mail Box feature to retrieve relevant details from the first email, including content, OTP, and subject information.

---

## **Prerequisites**

Before using Mailbox Test Data, ensure that you understand specific concepts such as creating a [Test Case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#creating-a-test-case), managing [Test Steps](https://testsigma.com/docs/test-cases/step-types/natural-language/), and effectively using them with [Test Data Types](https://testsigma.com/docs/test-data/types/overview/) and [Data Generators](https://testsigma.com/docs/test-data/types/data-generator/). Additionally, familiarise yourself with [Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) if necessary.

[[info | NOTE:]]
| You can enable Mail Box for your account by contacting [Testsigma Support](support@testsigma.com) or using the **Instant Chat** option.

---

## **Adding Mail Box in a Test Step**

Follow these steps to include an email address provided by Testsigma using the Mailbox test data type in a Test Step:

1. Use **NLP** to create a **new step** in the **Test Case** and include a placeholder for **test data**.
2. Click the **test data** placeholder to replace it, and then select the **& Mail Box** from the **Test Data Types** dropdown menu.
3. Select the **Email** from the right-side panel. ![Add MailBox in Test Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/add_mailboxinstep.gif)

---

## **Fetching OTP from Mail Box** 

Follow these steps to retrieve OTP or any data from the selected Mailbox using Test Data Generators in Testsigma:

1. Use **NLP** to create a **new step** in the **Test Case** that adds a placeholder for **test data** and an **element** for entering the OTP code in the **OTP** field.
2. Click the **test data** placeholder to replace it, and then select the **! Data Generator** from the **Test Data Types** dropdown menu.
3. On the right sidebar, select **Data Generator** type as the **default**, Function type as **MailBoxFunctions**, and choose the function as **getEmailOTP** from the dropdown menu.
4. Configure the Test Step by providing the necessary details for the function:
    - **Regex**: A search pattern is created by a sequence of characters. For instance, **\d{4}** matches four consecutive digits **(0-9)**.
    -  **MailBox**: Select **Mail Box** from the drop-down list. It stores incoming email messages.
    -  **Timeout**: Set the time for how long a program or system should wait for a specific task to finish. In this example, we will wait for **30** seconds.
5. Click **Save** to store the provided arguments in the data generator for this test step.

Here is a quick GIF demonstrating the above workflow:
![Fetch OTP from Mail Box](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/fetchotp_mailbox.gif)

[[info | NOTE:]]
| You must perform both [Add Mail Box in Test Step](https://testsigma.com/docs/test-data/types/mailbox/#add-mailbox-in-test-step) and [Fetch OTP from Mail Box](https://testsigma.com/docs/test-data/types/mailbox/#fetch-otp-from-mailbox) for Two-Factor Authentication.

---

## **Store Data as a Runtime Variable from Mail Box**

Follow the below steps to save the data obtained from the Mailbox as a runtime variable to use later in the test case using Test Data Generators in Testsigma.

1. Create a **new step** in the **Test Case** using **NLP** that adds **two** placeholders for **test data** to store data as runtime variables.
2. Click the **test data-1** placeholder to replace it, and then select the **! Data Generator** from the **Test Data Types** dropdown menu.
3. On the right sidebar, select **Data Generator** type as the **default**, **Function type** as **MailBoxFunction**, and choose the **Function** as **contentVerification** from the dropdown menu.
4. Configure the Test Step by providing the necessary details for the function:
    - **Regex**: A search pattern is created by a sequence of characters. For instance, **\d{4}** matches four consecutive digits **(0-9)**.
    -  **MailBox**: Select **Mail Box** from the drop-down list. It stores incoming email messages.
    -  **Compare String**: Provide the CompareString function, which compares two strings and determines if they are identical.
    -  **Timeout**: Set the time for how long a program or system should wait for a specific task to finish. In this example, we will wait for **30** seconds.
5. Click **Save** to store the provided arguments in the data generator for this test step.
6. Substitute specific **text** for the **test-data-2** placeholder and create a step to generate a runtime variable that stores the value in that **text**.

Here is a quick GIF demonstrating the above workflow:
![Store Data as a Runtime Variable from Mail Box](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/storedata_viamailbox.gif)

[[info | NOTE:]]
| You can store the subject by selecting the Test Data Generator function: **! MailBoxFunctions :: subjectVerification**.

---

## **Create Mail Box Alias in Test Step**

During a test step, you can create a mailbox alias that connects an additional email address to your primary email account. This allows you to generate multiple email addresses that all direct to the same inbox. When you execute the test, it generates a unique mailbox for each alias.

1. Create a **new step** in the **Test Case** using **NLP** that adds **two** placeholders for **test data** to create a mailbox alias.
2. Click the **test data-1** placeholder to replace it, and then select the **! Data Generator** from the **Test Data Types** dropdown menu.
3. On the right sidebar, select Data Generator type as the default, Function type as MailBoxFunction, and choose the Function as generateMailBoxAlias from the dropdown menu.
4. Select Linked Mail Box to create a unique mailbox every time and click **Save**.
5. Substitute specific **text** for the **test-data-2** placeholder and click **Create Step** to save the test step. It stores the **mailbox** within the **text** as a runtime variable.

[[info | NOTE:]]
| For example, we store the email in a runtime variable named **email1**. You can use it in the Test Case by selecting **$ Runtime** from the test data types.

Here is a quick GIF demonstrating the above workflow:
![Mail Box Alias in Test Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/createmailboxalias.gif)

---

## **Generate Mail Box Alias for Test Cases Execution**

With Testsigma, you can generate new mailbox aliases every time during test case execution, improving efficiency and reusability by making it easy to use in many test steps or test cases. If you have only a few email addresses but need to test functions related to emails for various new accounts, Testsigma can help.


|**Data Generators**|**Actions**|**Inputs**|
|---|---|---|
|**! MailBoxAliasFunctions :: getEmailContent**|This will get the entire email's content into a variable.|<li>Runtime Variable</li><li>Timeout in seconds</li>*For Example: Runtime Variable - content, Timeout - 30*|
|**! MailBoxAliasFunctions :: getEmailSubject**|This will get the entire email's subject into a variable.|<li>Runtime Variable</li><li>Timeout in seconds</li>*For Example: Runtime Variable - subject, Timeout - 30*|
|**! MailBoxAliasFunctions :: getOTP**|This will fetch the OTP sent to the email box into a variable.|<li>Regex</li><li>Runtime Variable</li><li>Timeout in seconds</li>*For Example: Regex - \d{4,6}, Runtime Variable - otp, Timeout - 30*|
|**! MailBoxAliasFunctions :: urlWithText**|This will fetch the URL that contains some required text.|<li>Text</li><li>Runtime Variable</li><li>Timeout in seconds</li>*For Example: Text - randomtext, Runtime Variable - url, Timeout - 30*|
|**! MailBoxAliasFunctions :: urlWhichContains**|This will fetch the URL that contains some required parameters.|<li>Substring</li><li>Runtime Variable</li><li>Timeout in seconds</li>*For Example: Substring - example, Runtime Variable - random_text, Timeout - 30*|
|**! MailBoxAliasFunctions :: urlMatchingRegex**|This will fetch the URL that contains a URL matching the required regex.|<li>Regex</li><li>Runtime Variable</li><li>Timeout in seconds</li>*For Example: Regex - r'https://\w+\.com/\w+', Runtime Variable - path, Timeout - 30*|

Below is a screenshot showing a test case generating a mailbox alias and getting content from the email.
![A test case displaying how to generate unique email address and how to use it](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/generate_mailboxalias.gif)

---
