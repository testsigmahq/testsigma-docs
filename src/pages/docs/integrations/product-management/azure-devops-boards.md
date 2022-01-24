---
title: "Azure DevOps Integration"
metadesc: "How to integrate Testsigma with Azure DevOps"
order: 16.51
page_id: "Azure DevOps Integration"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Integrate Azure DevOps With Testsigma"
  url: "#integrate-azure-devops-with-testsigma"
- type: link
  name: "Creating Work Item on Azure from Testsigma"
  url: "#creating-work-item-on-azure-from-testsigma"
---
The Testsigma Azure DevOps Integration allows you to create a work item directly in your Azure project from Testsigma. You can push a bug, epic, task, story to a project while testing on Testsigma. The fields populated by you when marking a bug through Testsigma are displayed as information on the work item in the Azure DevOps project.
---

## **Prerequisites**

**Azure DevOps Organization URL:** Azure DevOps URL will be the domain name. Log into your Azure DevOps account and you will find it under your organization.<br>
**Personal Access Token(PAT):** In your Azure Application, you can find the Personal Access Token under **Security > Personal Access Tokens**

[[info | NOTE:]]
| Please check with your Azure Admin if you need help with finding the above details
---

## **Integrate Azure DevOps With Testsigma**

Once the Azure DevOps URL and PAT are obtained, navigate to the Plugins page through Dashboard > Settings > Plugins and select Azure DevOps under the Product Management tab.

Click on the Disabled Icon on Azure DevOps Boards. Azure Details overlay opens up as shown below:

![Azure Details form in Plugins Page ](https://docs.testsigma.com/images/azure-devops-boards/plugins-azure-integration-form.png)
---

## **Creating Work Item on Azure from Testsigma**

Let us see how we can create a Bug on Azure DevOps Board from Testsigma.

![Report Bug icon on the Failed Test Results page](https://docs.testsigma.com/images/azure-devops-boards/test-result-failed-report-bug-icon.png)

From the Test Run Results page, click on the Report Bug icon to open the Report Bug Overlay.

![Report Bug Overlay on the Failed Test Results page](https://docs.testsigma.com/images/azure-devops-boards/test-result-failed-report-bug-overlay-azure-form-filled.png)

Enter the details as shown below:
  * Project: Name of the Azure Project.
  * Issue Type: Type of the Issue - Bug, Task, etc.
  * Title: Title of the Item to be created in Azure DevOps Board.
  * Description: Add a meaningful description for the item with as much detail as you can provide.

After entering the details, submit the form. An item will be created in the Azure DevOps Board.
