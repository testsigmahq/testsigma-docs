---
title: "Slack Integration with Testsigma"
metadesc: "Learn how to configure your Slack channel to receive Pass/Fail/Abort notifications about Test Results as in real-time from Testsigma application"
noindex: false
order: 16.21
page_id: "Integrating Slack with Testsigma for test run notifications"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Fetch Slack Incoming Webhook URL"
  url: "#steps-to-fetch-slack-incoming-webhook-url"
- type: link
  name: "Steps to Integrate Slack with Testsigma"
  url: "#steps-to-integrate-slack-with-testsigma"
- type: link
  name: "Enabling Slack notifications in Test Plan"
  url: "#enabling-slack-notifications-in-test-plan"
---

---

Testsigma Slack integration sends ***Test Pass/Fail/Abort*** notifications in real-time to your specified Slack channel directly. This ensures that you can collaborate with your teammates by sharing the test results in real-time.

---

> ## **Prerequisites**
>
> 
> Before you begin, ensure you have a valid [Slack Incoming Webhook URL](https://api.slack.com/messaging/webhooks) and know [how to Create a Test Plan](https://testsigma.com/docs/test-management/test-plans/overview/#steps-to-create-a-test-plan).

---

## **Steps to Fetch Slack Incoming Webhook URL**

1. Go to **Workspace > Tools & Settings > Manage Apps**.
   ![Slack Space](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Slack_Space.png)

2. In the **Installed Apps** section, click **Build** to open the **Slack API**.
   ![Installed Apps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Build_App_Slack.png)

3. In **Slack API**, click **Create an App**.
   ![Create an App](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Slack_Create_App.png)

4. In the **Create an App** dialog, select **From Scratch**.
   ![From Scratch](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/From_Scratch_Slack.png)

5. Enter an **App Name**, select your **Workspace**, and click **Create App**.
   ![Create App](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Create_App_Slack_Space.png)

6. Go to **Incoming Webhooks**, enable **Activate Incoming Webhooks**. 
   ![Add New Webhook to Workspace](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Toggle_Activate_Webhook.png)

7. Click **Add New Webhook to Workspace**.
   ![New Webhook](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Add_New_Webook_Slack.png)
   
8. Select a **Channel** and click **Allow**.
   ![Allow](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Allow_Space_Button.png)

9.  In **Incoming Webhooks**, click **Copy** on the URL textbox to copy the generated **Webhook URL**.
    ![Copy](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Copy_Incoming_Webhook.png)

---

## **Steps to Integrate Slack with Testsigma**

1. Navigate to **Settings > Integrations** and enable the toggle on **Slack** widget. 
![Integrations](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/navsetslack.png)

2. On the **Slack details** prompt, enter all the details and click on **Save & Enable**. 
![Slack Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sldetailspr.png)

---
## **Enabling Slack Notifications in Test Plan**
1. Navigate to **Test Plans > Select/Create a Test Plan > Test Plan Settings**. 
![Test Plan Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tpdslack.png)

2. On the **Edit Test Plan** page, enable **Send Notification** toggle. 
![Toggle](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/togglesltps.png)

3. Select the status for which you want to receive the notification. 
![Status](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/notonsl.png)

4. Select **Slack** from ‘Also send messages to’ dropdown menu.  
![Select Slack](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/asmtsl.png)

Here’s what the Notification looks like on Slack:
![Slack](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/slack.png)

Here's a quick GIF demonstrating Slack integration with Testsigma. 
![Slack Integration](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/SlackInt.gif)