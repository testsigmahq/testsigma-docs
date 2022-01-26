---
title: "Manage Applications"
page_title: "Managing Applications in Testsigma"
meta_desc: "How to manage Applications within Testsigma projects"
order: 2.1
page_id: "Manage Applications"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Create Application"
  url: "#create-application"
- type: link
  name: "Edit Application"
  url: "#edit-application"
- type: link
  name: "Delete Application"
  url: "#delete-application"
---

---
The Applications tab within the **Dashboard > Project Settings** menu provides details about all the Applications that are available in the current project

If there’s only a single Application in your Project, the Applications tab will be hidden. To enable the Applications tab, you should have chosen the “Multiple Applications” option while [creating the project or editing the project.](https://testsigma.com/docs/projects/overview/)

Once the “Applications” tab is enabled, you will be able to see all the applications created under the specific project.

![Application tab selected in Project Settings](https://docs.testsigma.com/images/applications/project-settings-applications-tab.png)

&emsp;

---
##**Create Application**
You can also create a new Application with a certain type from the Project Settings > Applications page.

1. Click on **+ New Application** to create a new Application under the current Project.

2. Enter a name and description.

[[info | Note:]]
|If you have created Custom Fields for your Application under Settings > Custom Fields, those fields would also show up here.

3. Choose the application type - Web, Mobile Web, Android Native, iOS Native, or Rest API and click on Create

&emsp;

---
##**Edit Application**
Navigate to the Application screen by going through **Project Settings > Applications** Tab and selecting the specific Application from the Applications list.

![Application details in focus within Project Settings page](https://docs.testsigma.com/images/applications/project-settings-applications-tab-action-buttons-selected.png)

Click on the Edit button (pencil icon) for the Application (marked area) to open the Edit Application page as shown below:
Make the required changes and click on the Update button to save the changes.

&emsp;

---
##**Delete Application**
![Edit Application](https://docs.testsigma.com/images/applications/edit-application.png)

Navigate to the Application by going through Project Settings > Applications Tab and selecting the specific Application from the Applications list.

Clicking on the Delete button (trash icon) for the Application (marked area) shows a warning prompt.

[[info | Note:]]
|Deleting an Application would lead to loss of all data within the Application   including<br> 
|**-** All Application Versions within the Application<br>
|**-** All the Test Cases, Test Data, Uploads within all those Application Versions.


**Please make sure that you are okay with losing all the above data before proceeding with the Application deletion.**

If you still want to delete the Application, confirm the Application deletion in the popup dialog.

![Manage Applications](https://docs.testsigma.com/images/applications/manage-applications-gif.gif)













