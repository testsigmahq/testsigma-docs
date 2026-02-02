---
title: "How Do I Retrieve the OTP When it’s Embedded within HTML Tags?"
metadesc: "Extract OTPs embedded in HTML emails by removing HTML tags using an addon, ensuring only the numeric OTP is captured for test execution."
order: 24.43
page_id: "how-do-i-retrieve-the-otp-when-its-embedded-within-html-tags"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Install the Addon"
  url: "#steps-to-install-the-addon"
- type: link
  name: "Steps to Remove the HTML tag symbols from the OTP"
  url: "#steps-to-remove-the-html-tag-symbols-from-the-otp"
---

---

When an OTP is embedded within HTML tags in an email, extracting it using a regex pattern also captures the surrounding HTML symbols. To use the OTP in test execution, an addon is used to remove these extra characters and extract only the numeric value.

This article discusses how to remove the HTML tag symbols from the OTP. 

---

> ## **Prerequisites**
> 
> Before you begin, ensure that you have referred to the [documentation on MailboxFunctions Function Type](https://testsigma.com/docs/test-data/data-generators/mailboxfunctions-function-type/).

---

## **Steps to Install the Addon**

1. From the left navigation bar, go to **Addons** and click **Add-ons**.
   ![Addons](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/otp_1.png)

2. Under the **New & Updated Addons** section, search for the **Remove Special character from testdata** addon and click **Install**. 
   ![Install Addon](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/otp_2.png)

---

## **Steps to Remove the HTML tag symbols from the OTP**

1. In your test case, first, use the **Store test data1 in test data2** NLP to store the extracted OTP in a runtime variable. 
   ![NLP 1](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/otp_3.png)

   - Click the **test data1** placeholder and replace it by selecting **Data Generator** from the **Test Data Types** dropdown. ![Data Generator](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/otp_4.png)
   - In the **Data Generator** overlay, configure the **Get Email OTP** function by selecting **Default** as the type, **MailBoxFunctions** as the function type, entering the regex pattern (for example, **>\d{6}<**), choosing the mailbox, setting the timeout, and clicking **Save**. ![Get email OTP](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/otp_5.png)
   - Enter a variable name in the **test data2** placeholder. ![test data2](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/otp_6.png)
   - Click **Create Step**. ![Create Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/otp_7.png)
  
2. Secondly, use the **Remove Special char testdata1 from testdata2 and store it in runtime variable** NLP to remove the special character from the OTP.
   ![NLP 2](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/otp_8.png) 

   - Click the **testdata1** placeholder and enter ><. ![testdata 1](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/otp_9.png)
   - Click the **testdata2** placeholder and replace it by selecting **Runtime** from the **Test Data Types** dropdown. ![test data2](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/otp_10.png)
   - In the **Runtime Variable** overlay, select the runtime variable you created in the previous step. ![Runtime Variable](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/otp_11.png) 
   - Enter a variable name in the **variable** placeholder. ![Variable](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/otp_12.png) 
   - Click **Create Step**. ![Create Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/otp_13.png)

---