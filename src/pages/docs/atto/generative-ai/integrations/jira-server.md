---
title: "Integrating Jira Server/Data Center with Testsigma"
page_title: "Integrating Jira Server/Data Center with Testsigma"
metadesc: "Integrate Testsigma with Jira Server or Data Center to log, manage, and track bugs seamlessly. Learn how to set up the integration step by step."
noindex: false
order: 4.7442
page_id: "integrate-jira-server-/-data-center-with-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Integrate Jira Server or Data Center"
  url: "#steps-to-integrate-jira-server-or-data-center"
- type: link
  name: "Configure Jira Server or Data Center Integration"
  url: "#configure-jira-server-or-data-center-integration"
---

---

You can integrate Testsigma with Jira Server or Data Center to simplify issue tracking and enhance your testing workflow. This integration allows you to log, manage, and track bugs directly from Testsigma. This article discusses how to integrate Jira Server with Testsigma. 

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure you have admin access to your Jira Server or Data Center instance.

---

## **Steps to Integrate Jira Server or Data Center**

1. From the left navigation bar, navigate to **Settings**.
   ![settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/Jira_Server_1.png)

2. In the **Admin Settings** panel, select **Integrations**. 
   ![Integrations](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/Jira_Server_2.png)

3. In the **Integrations** page, enable the toggle on the **Jira Server / Data Center** widget. 
   ![Jira Server](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/Jira.png)

4. The **Jira Server / Data Center** dialog box appears. 

---

## **Configure Jira Server or Data Center Integration**

1. In the **Server URL** field, enter the base URL of your Jira Server or Data Center instance. Make sure to include the protocol **(https:// or http://)** and the domain or IP address. 

**Examples:**

  - https://jira.yourcompany.com
  - https://your-domain.atlassian.net (for Jira Cloud, though this setup is mainly for Server/Data Center)
  - http://192.168.1.100:8080 (for internal/local instances)

![Server URL](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/Jira_Server_3.png)

2. In the **Username / Email** field, enter your Jira account credentials.

**Example:**

  - **Username:** john.smith
  - **Email Address:**  john.smith@company.com

![User Name](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/Jira_Server_4.png)

[[info | **NOTE**:]]
| Please contact your Jira administrator if you’re unsure which format to use.

3. In the **Personal Access Token** field, paste the token you generated from your Jira account.
   ![personal Access token](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/Jira_Server_5.png)

[[info | **INFO 💡**:]]
| ### **Steps to Generate a Personal Access Token**
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
| ![Create](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/Jira_Server_10.png)
| 7. In the **Copy your API token** dialog, click **Copy** and then click **Done**.
| ![Done](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/Jira_Server_11.png)

4. Paste the same Personal Access Token in the **Confirm Personal Access Token** field. 
   ![Confirm PAT](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/Jira_Server_12.png)

5. Click **Save & Enable**.
   ![Save](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/Jira_Server_13.png)

[[info | **NOTE**:]]
| Personal Access Tokens are more secure than passwords as they can be individually revoked and often have limited scopes or permissions. Never share your token or store it in plain text.

---