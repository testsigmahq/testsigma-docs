---
title: "Integrating Slack with Testsigma for test run notifications"
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
  name: "Integrating Slack with Testsigma"
  url: "#integrating-slack-with-testsigma"
- type: link
  name: "Enabling Slack notifications in Test Plan"
  url: "#enabling-slack-notifications-in-test-plan"
---

---

Testsigma Slack integration sends Test **Pass/Fail/Abort** notifications in real-time to your specified Slack channel directly. This ensures that you can collaborate with your teammates by sharing the test results in real-time.

---
## **Prerequisites**
We need a Slack Incoming Webhook URL to integrate with Testsigma and we will be using this to post the Test Results to your slack channels.

To know how to generate an Incoming Webhook in Slack, refer to [Sending messages using Incoming Webhooks | Slack](https://api.slack.com/messaging/webhooks)

---
## **Integrating Slack with Testsigma**
Once the Webhook URL is obtained, navigate to the **Plugins page** through **Dashboard > Settings > Plugins** and select **Slack** under the **Collaborations** Tab.
  1. Click on the **Disabled Icon**. Slack Details overlay opens up as shown below:
![Add Slack Integration form](https://docs.testsigma.com/images/slack/add-slack-integration-form.png)
  2. Enter the details as given below:

      a. **Webhook URL:** The incoming webhook URL obtained from Slack.

      b. **Post to channel(optional):** Name of the channel if you would like to post to a specific Slack Channel in your organization.  

      c. **The username that this integration is posted as (optional):** The intended author of the posted message.

After entering the details, click on the **Create button** to add the Integration.

---
## **Enabling Slack notifications in Test Plan**

Once the slack integration is added, you can enable the **Slack notifications** for your Test Plans while editing any of your existing Test Plans or while creating a new Test Plan.

From the **Send Notification When** section on the Test Plan Settings page,
 * Under the **On** dropdown, select the Test Plan status for which you want to be notified. You can select multiple statuses from the list.

 * Under the **send message to** dropdown, select **Slack**.
![Send notification settings under Test Plan Settings ](https://docs.testsigma.com/images/slack/create-edit-test-plan-send-notification-when.png)

Here’s what the Notification looks like on Slack:
![Slack notification for Test Results ](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/slack.png)

