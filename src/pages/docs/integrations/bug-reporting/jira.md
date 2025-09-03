---
title: "JIRA Bug Reporting Integration"
page_title: "JIRA Bug Reporting Integration in Testsigma"
metadesc: "JIRA integration helps you in creating issues in JIRA from the Testsigma. Learn how to integrate Testsigma with JIRA for real-time bug reporting"
noindex: false
order: 16.31
page_id: "JIRA Bug Reporting Integration"
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

You can integrate Testsigma with Jira to push bugs directly to Jira's project. You can also capture screenshots, annotate bugs, and share them with your team. In this document, we will discuss how to integrate Jira with Testsigma and also how to create the first bug from Testsigma which can flow into Jira.

---

<p id="prerequisites">Prerequisites</p>
To integrate Jira with Testsigma, you need the following:
- **Account URL**: Your Jira Account URL
- **Username**: Your account username/email
- **API Key**: API Token from Jira

---

## **Integrating Jira with Testsigma**
1. Navigate to **Settings > Integrations**.
![Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/jrsettings.png)

2. Enable toggle on **Jira** widget. 
![Jira Toggle](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/jrnav.png)

3. On the **Jira Details** prompt, enter the following and click **Save & Enable**. 

   - **Account URL:** https://(organizationname).atlassian.net/ 
   - **User Name:** Please enter your email ID.
   - **API Key:** Paste the token you generated from your Jira account.
 
![Jira Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/jrdetails.png)

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
1. Navigate to **Run Results > Test Case Result**, where you want to add a bug.
![Test Case Report](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/jrtcresults.png)

2. Click on **Report Bug**.
![Report Bug](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/jrreportbug.png)

3. On **Report** overlay, click on the **Jira** icon. 
![Jira Icon](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/jrreportoverlay.png)

4. On the **Create New Issue** prompt, click on **Create Ticket**.
![Create New Issue](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/jrnewtickt.png)

[[info | **NOTE**:]]
| If you want to link to an existing issue on Jira, click on the **Link to Issue** button, search for an existing issue in the search field and click on **Link to Ticket** to add a link to an existing Issue.
|![Link](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/jrlinktoissu.png)



Here's a quick GIF demonstrating how to integrate Jira and add a bug to Jira from Testsigma.
![Jira Work Flow GIF](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/JiraIntGif.gif)


---