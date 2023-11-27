---
title: "Integrating MS Team with Testsigma for test run notifications"
metsdesc: "Configure Microsoft Teams channel to receive notifications about Test Results in real-time from Testsigma Application | Testsigms Integration with MS Team"
order: 16.22
page_id: "Integrating MS Team with Testsigma for test run notifications"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Integrating Microsoft Teams with Testsigma"
  url: "#integrating-microsoft-teams-with-testsigma"
- type: link
  name: "Enabling MS Teams notifications in Test Plan"
  url: "#enabling-ms-teams-notifications-in-test-plan"
---

---

Integrating Testsigma with Microsoft Teams is similar to integrating with other collaboration tools like Google Chat and Slack.

---

## **Prerequisites**

We need a Microsoft Teams Connector to integrate with Testsigma. To know how to generate an Incoming Webhook in MS Teams, refer [Create an incoming Webhooks | MS Teams](https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook)<br>
Microsoft Teams Connector is an Incoming Webhook mapped to a specific Channel in your organization and we will be using the connector to post the Test Results on that Teams channel.

---

## **Integrating Microsoft Teams with Testsigma**

Once the Connector URL is obtained, navigate to the Plugins page through **Dashboard > Settings > Plugins** and select **MS Teams** under the **Collaborations** Tab.
   1. Click on the disabled Icon on MS Teams. MS Teams Details overlay opens up as shown below:
   ![Add MS Teams Integration form](https://docs.testsigma.com/images/microsoft-teams/plugins-ms-teams-add-integration-form.png)
   2. Enter the incoming webhook URL obtained from MS Teams in the **Connector URL** field.<br>
   After entering the details, click on the Create button to add the Integration.

---

## **Enabling MS Teams notifications in Test Plan**

Once the MS Teams integration is added, you can enable the MS Teams notifications for your Test Plans while editing any of your existing Test Plans or while creating a new Test Plan.

From the **Send Notification When** section on the Test Plan Settings page,
 * Under the ‘On’ dropdown, select the Test Plan status for which you want to be notified. You can select multiple statuses from the list.
 * Under the ‘send message to’ dropdown, select MS Teams.
 ![Send notification settings under Test Plan Settings](https://docs.testsigma.com/images/microsoft-teams/create-edit-test-plan-send-notification-when.png)
 Here’s what the Notification looks like on MS Teams:
 ![MS Teams notification for Test Results](https://docs.testsigma.com/images/microsoft-teams/ms-teams-testsigma-notifications.png)

The first and second line shows the integration added to the channel.<br>
The third line shows the **Test Plan Completed** notification when the Test Plan completes.


Click on the **View in Testsigma** link to check the details inside the Testsigma App.


![MS Teams Integration for Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/msint.gif)

---