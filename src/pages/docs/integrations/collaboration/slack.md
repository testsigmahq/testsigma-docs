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
> - Slack Incoming Webhook URL. *For more information, refer to [Incoming Webhooks](https://api.slack.com/messaging/webhooks).*

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