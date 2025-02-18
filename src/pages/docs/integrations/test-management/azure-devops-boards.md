---
title: "Azure DevOps Integration"
metadesc: "Azure DevOps Integration allows you to create a work item directly in your Azure project from Testsigma. Learn how to intergrate Azure DevOps with Testsigma"
noindex: false
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
  name: "Steps to Integrate Azure DevOps with Testsigma"
  url: "#steps-to-integrate-azure-devops-with-testsigma"
- type: link
  name: "Creating Work Item on Azure from Testsigma"
  url: "#creating-work-item-on-azure-from-testsigma"
---

---

The Testsigma Azure DevOps Integration allows you to create work items within your Azure project directly from the Testsigma. You can also effortlessly transfer various work items, including bugs, epics, tasks, and stories, to your Azure projects while executing tests on the Testsigma. This article discusses how to integrate Azure DevOps with Testsigma.


---

## **Prerequisites**

- **Azure DevOps Organization URL**: Azure DevOps URL will be the domain name.
- **Personal Access Token**: In your Azure Application, you can find the Personal Access Token under **Security > Personal Access Tokens**.

[[info | NOTE:]]
| Please check with your Azure Admin if you need help with finding the above details.


---


## **Steps to Integrate Azure DevOps with Testsigma**

1. Navigate to **Settings > Integrations**.
![Integrations](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mstinav.png)


2. Enable the toggle on the **Azure DevOps Boards** widget. 
![Toggle](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/adoitgl.png)

3. On **Azure DevOps Boards details** prompt, enter **Organization URL**, **Access Key**, and click on **Save & Enable**.
![Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/adoidtls.png)


---


## **Creating Work Item on Azure from Testsigma**

1. Navigate to **Run Results > Test Case Result**, where you want to add a bug.
![Run Results](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tcresultyt.png)


2. Click on **Report Bug**.
![Report Bug](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/reportbugyt.png)


3. On **Report** overlay, click on the **Azure DevOps** icon. 
![Report Overlay](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/adoirovlay.png)


4. On the **Create New Issue** prompt, click on **Create Ticket**.
![Create Ticket](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/adoiccto.png)


[[info | **NOTE**:]]
| - If you want to link to an existing issue on Azure DevOps, click on the **Link to Issue** button, search for an existing issue in the search field and click on **Link Issue** to add a link to an existing Issue.
| ![Link to Issue](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/adoicolti.png)
| - You can also link the Azure DevOps test case with Testsigma test case. Get the test case ID from Azure DevOps, navigate to **Create Tests > Test Cases > Test Case**, and enter the ID in the top right corner of the test case details page with the text box **Enter Azure DevOps ID**. The test case will be linked with the Azure DevOps test case.




---
