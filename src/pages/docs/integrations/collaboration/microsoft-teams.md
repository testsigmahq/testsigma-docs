---
title: "Integrating MS Team with Testsigma"
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
  name: "Steps to Integrate Microsoft Teams with Testsigma"
  url: "#steps-to-integrate-microsoft-teams-with-testsigma"
- type: link
  name: "Enabling MS Teams Notifications in Test Plan"
  url: "#enabling-ms-teams-notifications-in-test-plan"
---

---

Integrating Testsigma with Microsoft Teams is similar to integrating with other collaboration tools like Google Chat and Slack.

---

> ## **Prerequisites**
>
> 
> Before you begin, ensure you have a valid [Microsoft Teams Connector](https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook) and know [how to Create a Test Plan](https://testsigma.com/docs/test-management/test-plans/overview/#steps-to-create-a-test-plan).



---

## **Steps to Integrate Microsoft Teams with Testsigma**


1. Navigate to **Settings > Integrations**.
![Integrations](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mstinav.png)


2. Enable toggle on **MS Teams** widget.
![MS Teams Toggle](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mstitgle.png)


3. On the **MS Teams details** prompt, enter **Name**, **Connector URL** and click on **Save & Enable**.
![Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mstisaen.png)


---

## **Enabling MS Teams Notifications in Test Plan**


Once the MS Teams integration is added, you can enable the MS Teams notifications for your test plans while editing any existing ones or creating a new one.


1. On **Create Test Plan/Edit Test Plan** page, click on **Test Plan Settings**. 
![TP Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mstitpse.png)


2. Enable **Send Notification** toggle.
![Send Notification](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mstiet.png)


3. Under the **Notify On** section, select the status for which you want to be notified. You can select multiple statuses from the list.
![Status](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mstimss.png)


4. Under the **Also send messages to** dropdown, select **MS Teams**.
![MS Teams](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mstismst.png)



Here’s what the notification looks like on MS Teams:
![MS Teams notification for Test Results](https://docs.testsigma.com/images/microsoft-teams/ms-teams-testsigma-notifications.png)




---