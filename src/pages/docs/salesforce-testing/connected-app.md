---
title: "Creating an External Client App"
page_title: "Create an External Client App"
metadesc: "Create an External Client App in Salesforce to link your Salesforce organization to Testsigma and download metadata. Includes the legacy connected app steps."
noindex: false
order: 29.2
page_id: "Create Connected Application"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Create an External Client App"
  url: "#steps-to-create-an-external-client-app"
- type: link
  name: "Fetch Consumer Details for an External Client App"
  url: "#fetch-consumer-details-for-an-external-client-app"
- type: link
  name: "Steps to Create a Connected App (Legacy)"
  url: "#steps-to-create-a-connected-app-legacy"
- type: link
  name: "Fetch Consumer Details for a Connected App (Legacy)"
  url: "#fetch-consumer-details-for-a-connected-app-legacy"
- type: link
  name: "Reset the Security Token"
  url: "#reset-the-security-token"
---

---

Create an External Client App in Salesforce to link your Salesforce organization to Testsigma and download metadata. Salesforce has replaced connected app creation with External Client Apps in newer organizations. This article discusses how to create an External Client App in Salesforce and fetch the consumer details that Testsigma needs.

[[info | **NOTE**:]]
| If your Salesforce organization still offers a **New Connected App** option, follow [Steps to Create a Connected App (Legacy)](#steps-to-create-a-connected-app-legacy) instead.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that:
> 1. A Salesforce organization exists.
> 2. The admin email for the organization is accessible, since the identity verification code and the security token are sent there.

---

## **Steps to Create an External Client App**

1. Log into your Salesforce instance.

2. On the **Setup** page, enter **App Manager** in the quick finder, and click **App Manager**.

3. Click **New External Client App** at the top right of the **App Manager** list view.

4. In the **Basic Information** section, enter the **External Client App Name**, **API Name**, and **Contact Email**.

[[info | **NOTE**:]]
| Salesforce automatically fills in the **API Name** field.

5. Set **Distribution State** to **Local**.

6. Expand the **API (Enable OAuth Settings)** section and select the **Enable OAuth** checkbox.

7. In the **Callback URL** field, enter the Testsigma callback URL.

[[info | **NOTE**:]]
| Use this Callback URL: <a href="https://salesforce-callback.testsigma.com/authorize/" rel="nofollow">https://salesforce-callback.testsigma.com/authorize/</a>

8. Select the required OAuth scopes and move them to the **Selected OAuth Scopes** list using the arrow control.

[[info | **NOTE**:]]
| The selected scopes are mandatory to connect to your Salesforce organization and download the metadata.

9. Under **Security**, select **Require Secret for Web Server Flow** and **Require Secret for Refresh Token Flow**.

[[info | **NOTE**:]]
| Testsigma connects through the standard OAuth web server (authorization code) flow, so you can leave the **Flow Enablement**, **Canvas**, **Mobile App Configuration**, and **Custom Attributes** sections unchanged.

10. Click **Create**.

[[info | **NOTE**:]]
| - Wait 10&ndash;15 minutes after creating the app before you establish a connection from Testsigma.
| - Some Salesforce editions do not include API access, and connections cannot be created in them. For more information, refer to <a href="https://help.salesforce.com/s/articleView?id=000385436&type=1" rel="nofollow">Salesforce editions with API access</a>.

### **Fetch Consumer Details for an External Client App**

1. Open the External Client App you created and go to the **Settings** tab.

2. Expand the **OAuth Settings** section.

3. Click **Consumer Key and Secret**. The **Verify Your Identity** window opens in a new tab.

4. On the **Verify Your Identity** window, enter the OTP sent to the admin email. Upon verification, Salesforce displays the **Consumer Key** and **Consumer Secret**.

---

## **Steps to Create a Connected App (Legacy)**

[[info | **NOTE**:]]
| Salesforce has deprecated connected app creation. Follow these steps only if your organization still offers a **New Connected App** option. Otherwise, follow [Steps to Create an External Client App](#steps-to-create-an-external-client-app).

1. Log into your Salesforce instance.

2. On the **Setup** page, enter **Apps** in the quick finder, and click **Settings** under **External Client Apps**.
![enable connected apps 2](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Enable_Connected_Apps_1.1.png)

3. On the **External Client App Settings** page, under the **Connected Apps** section, ensure the **Allow creation of connected apps** toggle is enabled.
![enable connected apps 3](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Enable_connected_apps_3.png)

4. On the **Enable Connected Apps Connection?** dialog, click **Enable**.
![enable connected apps 4](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Enable_connected_apps_4.png)

[[info | **NOTE**:]]
| The dialog appears only the first time the toggle is enabled. If connected apps are already enabled in your organization, continue from the next step.

5. Click **New Connected App**.
![create connected apps 1](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Create_connected_app_1.png)

6. In the **Basic Information** section, enter the **Connected App Name**, **API Name**, and **Contact Email**.
![create connected apps 2](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Create_connected_apps_2.png)

[[info | **NOTE**:]]
| - Salesforce automatically fills in the **API Name** field.
| - The other fields are optional.

7. In the **API** section, select the **Enable OAuth Settings** checkbox to set the **Callback URL** and **Selected OAuth Scopes**.
![API Details](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Create_connected_apps_3.png)

[[info | **NOTE**:]]
| The selected scopes are mandatory to connect to your Salesforce organization and download the metadata. Use this Callback URL: <a href="https://salesforce-callback.testsigma.com/authorize/" rel="nofollow">https://salesforce-callback.testsigma.com/authorize/</a>

8. Click **Save**.
![Save](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Create_connected_app_4.png)

[[info | **NOTE**:]]
| - Wait 10&ndash;15 minutes after creating the app before you establish a connection from Testsigma.
| - A connected app is limited to a few approvals. When the limit is exceeded, the system can automatically revoke the oldest approval. As a best practice, create a separate connected app for each application connection.
| - Some Salesforce editions do not include API access, and connections cannot be created in them. For more information, refer to <a href="https://help.salesforce.com/s/articleView?id=000385436&type=1" rel="nofollow">Salesforce editions with API access</a>.

### **Fetch Consumer Details for a Connected App (Legacy)**

1. Edit the connected app and click **Manage Consumer Details**. The **Verify Your Identity** window opens in a new tab.
![Edit](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Fetch_connected_apps_1.png)

[[info | **NOTE**:]]
| Ensure that none of the checkboxes in the **API** section are selected.

2. On the **Verify Your Identity** window, enter the OTP sent to the admin email.
![Verify](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Fetch_connected_apps_2.png)

3. Upon verification, the **Consumer Details** page displays the **Consumer Key** and **Consumer Secret**.
![Consumer Details](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Fetch_connected_apps_3.png)

---

## **Reset the Security Token**

To get the security token, go to **My Personal Information > Reset My Security Token** and click **Reset Security Token**. Salesforce sends a new token to the admin email. For more information, refer to <a href="https://help.salesforce.com/s/articleView?id=xcloud.user_security_token.htm&type=5" rel="nofollow">Salesforce</a>.

[[info | **NOTE**:]]
| Use the **Consumer Key**, **Consumer Secret**, and the security token when you create a [metadata connection](https://testsigma.com/docs/salesforce-testing/metadata-connections/) or a [user connection](https://testsigma.com/docs/salesforce-testing/user-connections/) in Testsigma.

<br>

> Refer to the [documentation on Salesforce troubleshooting](https://testsigma.com/docs/troubleshooting/salesforce-testing/most-common-issues/) guide for the most common issues while setting up an app for the connection.

---
