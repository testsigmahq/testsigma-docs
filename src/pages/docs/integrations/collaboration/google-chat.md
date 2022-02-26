---
title: "Integrating Google Chat with Testsigma for test run notifications"
metadesc: "How to configure a Google Chat channel to receive notifications about Test Results in real-time from Testsigma"
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
  name: "Integrating Google Chat with Testsigma"
  url: "#integrating-google-chat-with-testsigma"
- type: link
  name: "Enabling Google Chat notifications in Test Plan"
  url: "#enabling-google-chat-notifications-in-test-plan"
---

---

Testsigma can send test status notifications to a specific Google Chat room.

---
##**Prerequisites**

You need a Google Chat Incoming webhook to integrate with Testsigma. To know how to generate an Incoming Webhook in Google Chat, see [Using incoming webhooks - Google Chat](https://developers.google.com/chat/how-tos/webhooks)

Google Chat Incoming Webhook is mapped to a specific Channel in your organization and Testsigma will post the alerts on that channel.

---
##**Integrating Google Chat with Testsigma**

Once the Webhook URL is obtained, navigate to the Plugins page through Dashboard > Settings > Plugins and select Google Chat under the Collaborations Tab.

   1. Click on the disabled Icon on Google Chat. Google Chat Details overlay opens up as shown below:
   ![Add Google Chat Integration form](https://docs.testsigma.com/images/google-chat/plugins-collaboration-google-chat-integration-form.png)

   2. Enter the incoming webhook URL obtained from Google Chat in the **Google Chat Details** field.<br>

 After entering the details, click on the Create button to add the Integration.
---
##**Enabling Google Chat notifications in Test Plan**

Once the Google Chat integration is added, you can enable the Google Chat notifications for your Test Plans while editing any of your existing Test Plans or while creating a new Test Plan.

From the ‘Send Notification When’ section on the Test Plan Settings page,<br>
  * Under the ‘On’ dropdown, select the Test Plan status for which you want to be notified. You can select multiple statuses from the list.
  * Under the ‘send message to’ dropdown, select Google Chat.
  ![Send notification settings under Test Plan Settings](https://docs.testsigma.com/images/google-chat/create-edit-test-plan-send-notification-when.png)
 Here’s what the Notification looks like on Google Chat:

 ![Integrating Testsigma with Google Chat](https://docs.testsigma.com/images/google-chat/google-chat-testsigma-notifications.png)
 Click on the **View in Testsigma** link to check the details inside the Testsigma App.  

![Integrating Testsigma with Google Chat Message](https://docs.testsigma.com/images/google-chat/google-chat-testsigma-integration-message.gif)

![Integrating Testsigma with Google Chat](https://docs.testsigma.com/images/google-chat/google-chat-testsigma-integration.gif)
