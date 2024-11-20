---
title: "Test Data Type: Mail Box"
page_title: "Mailbox Test Data Types for Effective Testing"
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
- type: link
  name: "Sample Test Case for 2FA using Mailbox"
  url: "#sample-test-case-for-2fa-using-mailbox"
- type: link
  name: "Creating Test Case for 2FA Using MailBox"
  url: "#creating-test-case-for-2fa-using-mailbox"
- type: link
  name: "Setup the Email Forwarding for Automation Mailbox"
  url: "#setup-the-email-forwarding-for-automation-mailbox"
---

---

Testsigma provides a digital inbox called Mail Box to verify OTP accuracy, check for received emails, open and read them, process them, validate email content in various languages, and test the speed at which a user can read a promotional email during testing. This guide will help you access and manage the Mail Box.

[[info | NOTE:]]
| Testsigma designed the Mail Box feature to retrieve relevant details from the first email, including content, OTP, and subject information.

---

> ## **Prerequisites**
> 
> Before using Mailbox Test Data, ensure that you understand specific concepts such as creating a [Test Case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#creating-a-test-case), managing [Test Steps](https://testsigma.com/docs/test-cases/step-types/natural-language/), and effectively using them with [Test Data Types](https://testsigma.com/docs/test-data/types/overview/) and [Data Generators](https://testsigma.com/docs/test-data/types/data-generator/). Additionally, familiarise yourself with [Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) if necessary.

[[info | NOTE:]]
| - You can enable Mail Box for your account by contacting **support@testsigma.com** or using the **instant chat** option.
| - You can now access the Mail Box & Phone Numbers outside of test executions. This allows you to retrieve messages, OTPs, and authentication codes when you enable the toggle. 
| - For test executions, the toggle does not affect the execution. The test will continue to run regardless of whether the toggle is enabled or not.

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
| - You must perform both [Add Mail Box in Test Step](https://testsigma.com/docs/test-data/types/mailbox/#add-mailbox-in-test-step) and [Fetch OTP from Mail Box](https://testsigma.com/docs/test-data/types/mailbox/#fetch-otp-from-mailbox) for Two-Factor Authentication.


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


## **Sample Test Case for 2FA using Mailbox**

Two-factor authentication provides additional protection for your application. With Testsigma, you can easily set up Mailbox, retrieve OTP using mailbox functions, and perform tests securely. This article discusses testing 2FA for MailBox. 

### **Prerequisites:**

- You should know how to [create a test case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).
  
- You should know how to use [mailbox](https://testsigma.com/docs/test-data/types/mailbox/) & [data generator](https://testsigma.com/docs/test-data/types/data-generator/) test data types.

- You need to have a dedicated Mailbox for your account. Contact **support@testsigma.com** for more information.

---

## **Creating Test Case for 2FA Using MailBox**

1. Navigate to **Create Tests > Test Cases**, and click on **Create Test Case**.

![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mb2fatcnav.png)

2. On the **Test Case details** page, create test steps manually or using the recorder.  

![Test Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mb2fatcs.png)

  - For Step 4, we use **& Mailbox** and enter the email linked to the account in the email input field. 
  ![& Mailbox](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mb2famxdd.png)
    
  
  - In Step 5, we click on the **! Data Generator**. This will open **! Data Generator** overlay. 
  ![! Data Generator](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mb2fadgdd.png)

  
  - On the **! Data Generator** overlay, select **Type**, **Function Type**, **Function**, **Enter Regex**, **Runtime Variable**, **Timeout** and click on **Save**. Here, we add regex [0 - 9]+, which extracts the first encountered series of numbers. The extracted data, which is OTP, will be stored in the runtime variable. For more information on examples of regex, refer to https://regex101.com/.
  ![Data Generator Overlay](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mb2fadgvl.png)

  - This will help fetch OTP and enter it in the input element.
  ![Fetch OTP](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mb2fafotp.png)

3. Click on **Run** to execute the test case. 
![Run TC](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mb2farun.png)

---

## **Setup the Email Forwarding for Automation Mailbox**

In some cases, app restrictions will prevent the delivery of OTPs to the Testsigma Mailbox. In this case, you can use the Testsigma SMS Forwarder App, which forwards messages to a designated mailbox and allows you to retrieve OTPs conveniently. 

---

### **Prerequisites**

- You should have [Testsigma SMS Forwarder](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/smsforward.apk) application.

- You should know how to use [mailbox](https://testsigma.com/docs/test-data/types/mailbox/) & [data generator](https://testsigma.com/docs/test-data/types/data-generator/) test data types.

- You need to have a dedicated Mailbox for your account. Contact **support@testsigma.com** for more information.

---

### **Setting Up Forwarding Rules (Gmail)**

**Access Gmail Settings**

- Open your **Gmail account**.

- Click on the gear icon in the upper-right corner.

- Select **See all settings**.

![All Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/gmsgear.png)


**Navigate to Filters and Blocked Addresses**

- From the settings, click on the **Filters and Blocked Addresses** tab.

- Create a filter to forward emails with specific content or subject. In this case, we can have text that is constant and is present in all emails that we want to forward. 

![Filters & Blocked Addresses](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/fabgmstgs.png)

**Create a New Filter**

- Click on **Create a new filter**.
- Specify the criteria for the filter:
      - **Subject:** Define the subject of the email that you wish to forward.
      - **Has the words/Doesn’t have words:** Include text that is present in all emails you want to forward.

![New Filter](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/hwsetgsa.png)


**Configure Forwarding Address**

- After creating the filter, click on **Add forwarding address** on **When a message is an exact match for your search criteria** overlay. 

- Click on **Add Forwarding address** and add the designated automation email ID.

- Complete the setup by entering the OTP.

![Add Forwarding Address](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/afeagmstgs.png)


[[info | **NOTE**:]]
| - You can contact the support team for OTP retrieval, which involves fetching data from the backend.
| - For a sample test case associated with the Testsigma SMS Forwarder app, refer to [setup & use message forwarding](https://testsigma.com/docs/test-data/types/phone-number/#set-up-and-use-message-forwarding).

---