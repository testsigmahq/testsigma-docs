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
> - You need a Google Chat Incoming webhook to integrate with Testsigma. For more information, refer to [incoming webhooks Google Chat](https://developers.google.com/chat/how-tos/webhooks)
> 
> - You should know [how to create a test plan](https://testsigma.com/docs/test-management/test-plans/overview/#steps-to-create-a-test-plan).


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