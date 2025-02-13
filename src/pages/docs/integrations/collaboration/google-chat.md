---
title: "Integrating Google Chat with Testsigma"
metadesc: "Learn how to configure a Google Chat channel to receive notifications about Test Results in real-time from Testsigma Application"
noindex: false
order: 16.23
page_id: "Integrating Google Chat with Testsigma for test run notifications"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Fetch Connector URL"
  url: "#steps-to-fetch-connector-url"
- type: link
  name: "Steps to Integrate Google Chat with Testsigma"
  url: "#steps-to-integrate-google-chat-with-testsigma"
- type: link
  name: "Enabling Google Chat Notifications in Test Plan"
  url: "#enabling-google-chat-notifications-in-test-plan"
---

---

In Testsigma, you can send test plan status notifications to a specific Google Chat room with Google Chat integration. This article discusses how to integrate Google Chat with Testsigma. 


---

> ## **Prerequisites**
>
> 
> Before you begin, ensure you have a valid **Google Chat Incoming Webhook URL** and know [how to Create a Test Plan](https://testsigma.com/docs/test-management/test-plans/overview/#steps-to-create-a-test-plan).

---

## **Steps to Fetch Connector URL**

1. Open [Google Chat](https://chat.google.com/), and select the **Chat Space** where you want to add the connector.

2. Click the **Space Name**, and select **Apps & Integrations**.
   ![Apps & Integrations](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/gchat_Integrations.png)

3. Under **Integrations**, go to **Webhooks** and click **Add Webhook**.
   ![Add Webhook](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Add_Webhook_gchat.png)

4. In the **Incoming webhooks** dialog, enter a **Webhook Name**, and optionally upload an image/avatar URL.
   ![Name & Image](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/WebhookName_URL_gchat.png)

5. Click **Save**.
   ![Save](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Save_Details_gchat.png)

6. Click **Copy link** to copy the generated Webhook URL.
   ![Copy URL](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Copy_gchat_webhookURL.png)


---

## **Steps to Integrate Google Chat with Testsigma**


1. Navigate to **Settings > Integrations**.
![Integrations](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mstinav.png)


2. Enable toggle on **Google Chat** widget.
![G Chat Toggle](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/gcietgle.png)


3. On the **Google Chat details** prompt, enter **Name**, **Connector URL** and click on **Save & Enable**.
![Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/gcisae.png)

---

## **Enabling Google Chat Notifications in Test Plan**


Once the Google Chat integration is added, you can enable the Google Chat notifications for your test plans while editing any existing ones or creating a new one.


1. On **Create Test Plan/Edit Test Plan** page, click on **Test Plan Settings**. 
![TP Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mstitpse.png)


2. Enable **Send Notification** toggle.
![Send Notification](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mstiet.png)


3. Under the **Notify On** section, select the status for which you want to be notified. You can select multiple statuses from the list.
![Status](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mstimss.png)


4. Under the **Also send messages to** dropdown, select **Google Chat**.
![MS Teams](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/gcisgc.png)


---