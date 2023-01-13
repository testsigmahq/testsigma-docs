---
title: "Azure DevOps"
page_title: "Azure DevOps"
metadesc: "How to integrate Azure DevOps with Testsigma to link Test Cases"
noindex: false
order: 16.39
page_id: "Azure DevOps"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to enable the Azure DevOps plugin"
  url: "#steps-to-enable-the-azure-devops-plugin"
- type: link
  name: "Steps to integrate Azure DevOps with Testsigma"
  url: "#steps-to-integrate-azure-devops-with-testsigma"
---

---
The following article discusses how to Integrate Azure DevOps with Testsigma.

Here is a quick GIF demonstrating how to integrate Azure DevOps and link Test Cases to Testsigma.
![Azure DevOps GIF](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/AzureDevOps.gif)

To integrate Azure DevOps, you need the following information:<br>

1. **Organization URL**: Your account URL from Azure DevOps.<br>
(Your Organization URL is https://dev.azure.com/&lt;username&gt;)
2. **Access Key**: Access Key from Azure DevOps.<br>
Here is a quick gif to help you find the access key from Azure DevOps.
![Token GIF](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/token.gif)

<br>

## **Steps to enable the Azure DevOps plugin**
1. Navigate to **Settings > Plugins**.
![Plugins](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/navigatetoplugins.png)

2. Click on the **Disabled** icon on the **Azure DevOps Boards** widget.
![Disabled](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/disabled.png)

3. On the **Azure Details** pop-up window, 
    - Enter the following details- 
        - Account URL 
        - API Key 
  ![Click on Create](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/clickoncreate.png)
        - Click on **Create**


4. You can see the plugin enabled.
![Plugin Enabled](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/pluginenabled.png)

<br>

## **Steps to integrate Azure DevOps with Testsigma**
1. Navigate to **Test Development > Test cases**.
![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/testcases.png)

2. Hover over the test case for which you want to link Azure DevOps Test Case.
![Hover Over](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/testcasescreate.png)

3. Enter the **Azure DevOps Test Case ID**.
![Enter ID](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/enterid.png)

[[info | **NOTE**:]]
|You'll get the Test Case ID from Work items in your Azure DevOps account.
|![Test Case ID](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/workitems.png)

4. Click on the **Link**.
![Link TC](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/clickonlink.png)

5. You can see the Azure DevOps Test Case linked to the Test Case. 
![Linked TC](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/testcaselinked.png)

[[info | **NOTE**:]]
|You can edit and delete the linked Azure Devops Test Cases by clicking on the respective icons.
