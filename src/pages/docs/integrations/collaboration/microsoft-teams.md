---
title: "Integrating MS Teams with Testsigma"
metadesc: "Integrate Testsigma with Microsoft Teams to receive real-time test plan execution notifications in a Teams channel."
order: 17.22
page_id: "ms-teams-integration"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Create a Webhook in Microsoft Teams"
  url: "#create-a-webhook-in-microsoft-teams"
- type: link
  name: "Configure the Webhook in Testsigma"
  url: "#configure-the-webhook-in-testsigma"
- type: link
  name: "Verify the Power Automate Flow"
  url: "#verify-the-power-automate-flow"
- type: link
  name: "Enabling MS Teams Notifications in Test Plan"
  url: "#enabling-ms-teams-notifications-in-test-plan"
---

---

Integrate Microsoft Teams with Testsigma to receive test plan execution notifications in a Teams channel in real time. The webhook is created using the Workflows app in Teams, powered by Power Automate.

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that:
> 1. You have owner or admin access to the Microsoft Teams channel where notifications are posted.
> 2. You have access to **Power Automate**, which is included with **Team Workflows**.
> 3. Your Testsigma account has permissions to manage **Settings > Integrations**.
> 4. A test plan exists. For more information, refer to the [documentation on creating test plans](https://testsigma.com/docs/test-plans/overview/#steps-to-create-a-test-plan).

---

## **Create a Webhook in Microsoft Teams**

1. In Microsoft Teams, go to **Apps** and search for and select **Workflows**.
   ![Search and select Workflows app in Microsoft Teams](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/MS_Teams_Workflows.png)
   

2. From the list of templates, select **Notifications > Send webhook alerts to a channel**.
   ![Select Send webhook alerts to a channel template](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Webhook_Alerts_Template.png)

3. In the **Workflows** dialog:
   - Wait for the details to load and click **Next**.
     ![Next](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/MS_Teams_Webhook_Next.png)
   
   - Select the **Team** and **Channel** where you want Testsigma notifications to be posted.
     ![Team & Channel](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/MS_Teams_Channel_Team_Configuration.png)
   
   - Click **Add workflow**. Teams generates a unique **Webhook URL**.
     ![Workflows dialog - select Team and Channel, then Add workflow](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Add_Workflow_for_MS_Teams.png)

4. Copy the **Webhook URL**.
   ![Generated Webhook URL in Microsoft Teams](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Copy_MS_Teams_Webhook_URL.png)

[[info | NOTE:]]
| Save the webhook URL in a safe location. The URL is unique to the Team and Channel combination you selected and cannot be recovered from the Teams UI later without reopening the workflow.

---

## **Configure the Webhook in Testsigma**

1. From the left navigation bar, go to **Settings > Integrations > Collaborations > Microsoft Teams**.
   ![Integrations](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/mstinav.png)

2. Enable the **Toggle**.
   ![MS Teams Toggle](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Enable_MS_Teams_Toggle.png)

3. In the **MS Teams details** dialog, enter a **Name** and paste the webhook URL you copied from Microsoft Teams.
   ![Enter MS Teams Details](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Enter_MS_Teams_Details.png)

4. Click **Save & Enable**.
   ![Testsigma MS Teams details dialog with Name and Webhook URL fields](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Save_MS_Teams_Details.png)

---

## **Verify the Power Automate Flow**

If the **Team** and **Channel** fields in the auto-generated workflow hold a stale or default reference, notifications may fail to post even though the webhook URL is valid. Re-select both fields in Power Automate to bind the flow to the correct destination.

1. In Microsoft Teams, open the channel you selected while creating the webhook.

2. Click the **more options menu** in the channel header, then select **Workflows**.
   ![Channel header ellipsis menu - Workflows option](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Workflows_in_MS_Teams_Channel.png)

3. Locate the workflow you created and select **Edit in Power Automate**.
   ![Edit in Power Automate](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Edit_in_Power_Automate.png)

4. In the flow editor, expand the section containing **Attachments** and open the **Post card in a chat or channel** action.
   ![Power Automate flow editor - Post card in a chat or channel action](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Attachments_Flow_In_MS_Teams.png)

5. In the **Team** & **Channel** fields, remove the existing values and re-select the same Team & Channel you used when creating the webhook.
   ![Team and Channel](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Team_And_Channel_MS_Teams.png)

6. Click **Save** at the top of the Power Automate page.
   ![Save Flow](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Save_Flow_For_MS_Teams.png)

---

## **Enabling MS Teams Notifications in Test Plan**

Once the MS Teams integration is added, you can enable MS Teams notifications while creating or editing a test plan.

1. On the **Create Test Plan/Edit Test Plan** page, click **Test Plan Settings**.
   ![TP Settings](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_ms_teams_3.png)

2. Enable the **Send Notification** toggle.
   ![Send Notification](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_ms_teams_4.png)

3. Under the **Notify On** section, select the statuses for which you want to be notified.
   ![Status](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_ms_teams_5.png)

4. Under the **Also send messages to** dropdown, select **MS Teams**. If an older webhook was configured earlier, replace it with the webhook you created in this guide.
   ![MS Teams](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_ms_teams_6.png)

5. Save the test plan.

6. Run the test plan and confirm that the notification is posted to the selected Teams channel.


Here's what the notification looks like on MS Teams:
![MS Teams notification for Test Results](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Notification_in_MS_Teams.png)

---