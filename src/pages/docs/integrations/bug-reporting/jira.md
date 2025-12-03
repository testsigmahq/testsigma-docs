---
title: "Jira Integration for Bug Reporting"
page_title: "Jira Bug Reporting Integration in Testsigma"
metadesc: "JIRA integration helps you in creating issues in JIRA from the Testsigma. Learn how to integrate Testsigma with JIRA for real-time bug reporting"
noindex: false
order: 16.31
page_id: "jira-bug-reporting-integration"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Integrating Jira with Testsigma"
  url: "#integrating-jira-with-testsigma"
- type: link
  name: "Creating a bug"
  url: "#creating-a-bug"
---

---

You can integrate Testsigma with Jira to push bugs directly to your Jira project. You can also capture screenshots, annotate bugs, and share them with your team. This document describes how to integrate Jira with Testsigma and create your first bug in Testsigma that flows into Jira.

---

> <p id="prerequisites">Prerequisites</p>
> 
> To integrate Jira with Testsigma, you need the following:
> - **Account URL**: Your Jira Account URL
> - **Username**: Your account username/email
> - **API Key**: API Token from Jira

---

## **Integrating Jira with Testsigma**

1. From the left navigation bar, go to **Settings > Integrations**.
   ![Integrations](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Bug_Integration_Jira.png)

2. Enable the **Jira** toggle.
   ![Jira Toggle](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Jira_Toggle_Bug_Reporting.png)

3. In the **Jira Details** dialog, enter the following:
   - **Account URL**
   - **Username**
   - **API Key**
   - **Confirm API Key**
   ![Jira Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/All_Jira_Details.png)

4. Click **Save & Enable**.
   ![Save Jira Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Save_All_Jira_Details.png)

### **Field Definitions:**
- **Account URL example**: https://{organizationname}.atlassian.net/
- **Username**: Enter your email address.
- **API Key**: Paste the token generated from your Jira account.

[[info | **INFO 💡**:]]
| ### **Steps to Generate API Key**
| 1. Sign in to your Jira account.
| 2. Click your Profile icon and select **Account Settings**.
| ![Account Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/Jira_Server_6.png)
| 3. In the **Account** page, go to the **Security** tab.
| ![Security](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/Jira_Server_7.1.png)
| 4. In the **Security** page, under **API Tokens**, click **Create and manage API tokens** or **API Tokens**.
| ![API Tokens](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/Jira_Server_8.png)
| 5. In the **API Tokens** page, click **Create API token**.
| ![Create API Token](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/Jira_Server_9.png)
| 6. In the **Create an API token** dialog, enter a name and click **Create**.
| ![Create](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/API_Token.png)
| 7. In the **Copy your API token** dialog, click **Copy** and then click **Done**.
| ![Done](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/Jira_Server_11.png)

---

## **Creating a bug**

1. From the left navigation bar, go to **Run Results > Test Plan Result**, and open the Test Case Result where you want to report a bug.
   ![Test Case Result](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Test_Result_In_Plan.png)
   
2. Click **Report Bug**.
   ![Report Bug](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Report_Bug_From_Test_Result.png)

3. In the report overlay, click the **Jira** icon.
   ![Jira Icon from Overlay](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Jira_Icon_from_Overlay.png)

4. In the **Create New Bug** overlay, review the details and click **Report Bug**.
   ![Create New Bug](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Create_New_Bug_From_Result.png)


[[info | **NOTE**:]]
| To link to an existing Jira issue, click **Link to Issue**, search for the issue, and then click **Link to Ticket**.
|
| ![Link](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Link_Bug_to_Existing_Issue.png)

---