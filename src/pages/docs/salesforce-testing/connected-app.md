---
title: "Creating a Connected App"
page_title: "Create a Connected App"
metadesc: "A connected app is important to link external applications & the Salesforce ecosystem. This article discusses how to create a connected app in Salesforce."
noindex: false
order: 28.2
page_id: "Create Connected Application"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Enable Connected Apps"
  url: "#steps-to-enable-connected-apps"
- type: link
  name: "Steps to Create a Connected App"
  url: "#steps-to-create-a-connected-app"
- type: link
  name: "Fetch Consumer Details"
  url: "#fetch-consumer-details"
---

---

Creating a connected app is important to link external applications and the Salesforce ecosystem. With a connected app, you can integrate APIs, enable single sign-on (SSO), and build applications. This article discusses how to create a connected app in Salesforce. 

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure you have a Salesforce organization setup. 

---

## **Steps to Enable Connected Apps**

1. Log into your Salesforce instance.

2. On the **Setup** page, enter **Apps** in the quick finder, and click **Settings** under **External Client Apps**.
![enable connected apps 2](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Enable_Connected_Apps_1.1.png)

3. On the **External Client App Settings** page, under the **Connected Apps** section, enable the **Allow creation of connected apps** toggle. 
![enable connected apps 3](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Enable_connected_apps_3.png)

4. On the **Enable Connected Apps Connection?** dialog, click **Enable**. 
![enable connected apps 4](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Enable_connected_apps_4.png)

---

## **Steps to Create a Connected App**

1. On the **External Client App Settings** page, click **New Connected App**. 
![create connected apps 1](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Create_connected_app_1.png)

2. In the **Basic Information** section, enter **Connected App Name**, **API Name**, and **Contact Email**.
![create connected apps 2](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Create_connected_apps_2.png)

[[info | **NOTE**:]]
| - Salesforce automatically fills in the **API Name** input field. 
| - Other input fields are optional. 

3. In the **API** section, select the **Enable OAuth Settings** checkbox to set **Callback URL** and **Selected OAuth Scopes**. The **Selected OAuth Scopes** are mandatory in the **Connected App** to connect & download the metadata.
    
    - Use this Callback URL: <a href="https://salesforce-callback.testsigma.com/authorize/" rel="nofollow">https://salesforce-callback.testsigma.com/authorize/</a> 

![API Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Create_connected_apps_3.png)

1. Click on **Save**. 
![Save](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Create_connected_app_4.png)

[[info | **NOTE**:]]
| - Please wait for 10 - 15 minutes after creating the app, before trying to establish a connection.
| - A connected app is limited to only a few approvals. The system can revoke the oldest approval when the limit exceeds automatically. As a best practice, you can create a different connected app for each new application connection/connection.
| - Some Salesforce editions do not have API access. Generally, these editions are not used in development or production environments, and it is not possible to create connections within them. <br> <br>
| For more information on these editions, refer to the <a href="https://help.salesforce.com/s/articleView?id=000385436&type=1" rel="nofollow">Salesforce editions with API access</a>. 

---

## **Fetch Consumer Details**

1. Edit the connected app and click on **Manage Consumer Details**. This will open a new window. 
![Edit](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Fetch_connected_apps_1.png)

[[info | **NOTE**:]]
| Ensure that none of the checkboxes in the API section are selected.

2. On the **Verify Your Identity** window, enter OTP sent to the admin email. 
![Verify](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Fetch_connected_apps_2.png)

3. Upon verification, the **Consumer Details** page will be displayed with **Consumer Key** and **Consumer Secret**. 
![Consumer Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Fetch_connected_apps_3.png)

4. For Security Token, go to **My Personal Information > Reset My Security Token** and click on **Reset Security Token**. A new token will be sent to admin mail. Please refer to <a href="https://help.salesforce.com/s/articleView?id=xcloud.user_security_token.htm&type=5" rel="nofollow">Salesforce</a> for more information. 

<br>

> Refer to the [documentation on Salesforce troubleshooting](https://testsigma.com/docs/troubleshooting/salesforce-testing/most-common-issues/) guide for the most common issues while creating a connected app.

---