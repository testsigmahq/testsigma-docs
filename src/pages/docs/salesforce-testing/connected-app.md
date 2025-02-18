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
  name: "Steps to Create a Connected App"
  url: "#steps-to-create-a-connected-app"
- type: link
  name: "Fetch Consumer Details"
  url: "#fetch-consumer-details"
---

---

Creating a connected app is important to link external applications and the Salesforce ecosystem. With a connected app, you can integrate APIs, enable single sign-on (SSO), and build applications. This article discusses how to create a connected app in Salesforce. 

---

> ## **Prerequisites**
>
> Before you begin, ensure you have a Salesforce organization setup. 

---

## **Steps to Create a Connected App**

1. Log into your Salesforce instance.
![Login](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfcalg.png)

2. On the **Setup** page, enter **Apps** in the quick find box, then choose **App Manager**.
![Setup](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfcasa.png)

3. On **Lightning Experience App Manager**, click on **New Connected App**. This will open **App Manager** for **New Connected App**. 
![LE App Manager](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfcalena.png)

4. In the **Basic Information** section, enter **Connected App Name**, **API Name**, and **Contact Email**. 
![Basic Information](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sacabi.png)

[[info | **NOTE**:]]
| - Salesforce automatically fills in the **API Name** input field. 
| - Other input fields are optional. 

5. In the **API** section, select the **Enable OAuth Settings** checkbox to set **Callback URL** and **Selected OAuth Scopes**. The **Selected OAuth Scopes** are mandatory in the **Connected App** to connect & download the metadata.
    
    - Use this Callback URL: <span style="font-family: monospace; font-size: 0.875em; background-color: #f8f8f8; padding: 0.2em 0.4em; border-radius: 4px;">https://salesforce-callback.testsigma.com/authorize/</span>


![API Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfcaapiinfo.png)

6. Click on **Save**. 
![Save](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfcasave.png)

[[info | **NOTE**:]]
| - A connected app is limited to only a few approvals. The system can revoke the oldest approval when the limit exceeds automatically. As a best practice, you can create a different connected app for each new application connection/connection.
| - Some Salesforce editions do not have API access. Generally, these editions are not used in development or production environments, and it is not possible to create connections within them. <br> <br>
| For more information on these editions, refer to [Salesforce editions with API access](https://help.salesforce.com/s/articleView?id=000385436&type=1). 

---

## **Fetch Consumer Details**

1. Edit the connected app and click on **Manage Consumer Details**. This will open a new window. 
![Edit](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/SF_Manage_Consumer_Details_API.png)

[[info | **NOTE**:]]
| Ensure that none of the checkboxes in the API section are selected.

2. On the **Verify Your Identity** window, enter OTP sent to the admin email. 
![Verify](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfcavyi.png)

3. Upon verification, the **Consumer Details** page will be displayed with **Consumer Key** and **Consumer Secret**. 
![Consumer Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfcacdtls.png)

4. For Security Token, go to **My Personal Information > Reset My Security Token** and click on **Reset Security Token**. A new token will be sent to admin mail. 
![Reset Security Token](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfcarst.png)

<br>



> Refer to this [Salesforce troubleshooting](https://testsigma.com/docs/troubleshooting/salesforce-testing/most-common-issues/) guide for the most common issues while creating a connected app.


---