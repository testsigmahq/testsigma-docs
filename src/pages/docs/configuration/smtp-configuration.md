---
title: "SMTP Configuration in Testsigma"
order: 19.7
page_id: "SMTP Configuration Setup"
metadesc: "This article discusses a step-by-step guide to setup Simple Mail Transfer Protocol (SMTP) to trigger emails from a configured email address."
noindex: false
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Configure SMTP in Testsigma"
  url: "#steps-to-configure-smtp-in-testsigma"
- type: link
  name: "Steps to generate Password from email"
  url: "#steps-to-generate-password-from-email"
---

---

Simple Mail Transfer Protocol (SMTP) is a standard protocol for sending mail from a configured email address. This article discusses how to configure SMTP in Testsigma Application. 

---

## **Prerequisites:**

You'll need the following for SMTP Configuration:

- SMTP Server Address
- Port Number
- Valid Credentials
- Additional Parameters

---

## **Steps to Configure SMTP in Testsigma**

1. Navigate to **Settings > SMTP Configuration**.

2. Turn on the **SMTP Configuration** toggle.

[[info | **NOTE**:]]
| You will stop getting emails if you turn off the SMTP Configuration toggle. 

3. Select **@own**, and enter all the details.

4. Click on **Save**.

[[info | **NOTE**:]]
|If you select Testsigma, the mails will go with default email. For **@own** configuration, you need to enter the following details:<br>
|<br>
|**host:** smtp.gmail.com<br>
|**port:** 587<br>
|**username:** &lt;email&gt; <br>
|**password:** &lt;Generated from your email client&gt; <br>
|**keys:** <br>
|{<br>
|    mail.smtp.auth: true,<br>
|    mail.smtp.starttls.enable: true<br>
|}<br>


--- 


## **Steps to generate Password from email**


1. Navigate to **Manage Accounts > Security > App passwords**.
![Navigate to Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/appasswords.png)


2. Select **app**, **device**, and click on **Generate**.
![Generate Password](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Generate.png)


3. The password will be generated and displayed as below:
![Passwor](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/password.png)



Here’s a quick GIF demonstrating how to generate the password.
![SMTP GIF](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/SMTPGIF.gif)


[[info | **NOTE**:]]
| These steps are specific for generating an app password in a Google account. The process may be different for other email clients/services.



---