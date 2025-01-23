---
title: "Manage Application Versions"
page_title: "Managing Application Versions in Testsigma"
metadesc: "Managing Versions is necessary as there will be constant change in application features. This article discusses managing application versions within Testsigma projects"
noindex: false
order: 2.2
page_id: "Manage Application Versions"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Create Application Version"
  url: "#create-application-version"
- type: link
  name: "Edit Application Version"
  url: "#edit-application-version"
- type: link
  name: "Delete Application Version"
  url: "#delete-application-version"
---

---


Due to constantly changing requirements and application features, version control is essential in software development. Let's say you've created 10 automated UI tests for app **version 1.0.0** in Testsigma, and a new beta version with additional features is in development. In this case, you can copy the existing **version 1.0.0** and rename it to **version 1.0.0-beta**. By doing this, you preserve the original 10 tests while allowing the addition of new tests specific to the beta version. Actions performed on **version 1.0.0-beta** won't impact the original tests in **version 1.0.0**. This article discusses how to manage application versions in Testsigma. 


---

> ## **Prerequisites**
> 
> Before you begin, ensure you know how to [Manage Applications](https://testsigma.com/docs/projects/applications/).


---

## **Create Application Version**

1. Navigate to **Project Settings > Versions**.
![Create a Version 1](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Create_a_Version_step_1.png)

2. On **Edit Project** dialog, 
     - Click **New Version**.
     ![Create a Version 2](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Create_a_Version_step_2.png) 
     
     - On the **New Version** dialog, enter **Name**, **Description**, and click on **Create**. 
     ![Create a Version 3](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Create_aaplication_version_3.png)


3. A new version will be created. 


[[info | **NOTE**:]]
| 1. You have to select **Allow Multiple Versions** while creating a project to be able to create multiple versions.  
| ![Create a Version 4](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Create_a_Version_step_4.png)
|
| 2. If you want to copy data from previous versions, enable **Copy Data from Previous Versions** toggle and select the models you want to transfer. 
| ![Create a Version 5](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Create_application_version_step_5.png)

---

## **Edit Application Version**

1. Navigate to **Project Settings > Versions**.
![Edit Application Version 1](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Edit_a_Version_step_1.png)


2. On **Versions**, hover over the version you want to edit and click on the kebab menu. 
![Edit Application Version 2](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Edit_a_Version_step_2.png)


3. Click **Edit Version**. 
![Edit Application Version 3](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Edit_a_Version_step_3.png)

4. Make the changes and click **Update**.
![Edit Application Version 4](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Edit_application_version_step_4.png)


---


## **Delete Application Version**

1. Navigate to **Project Settings > Versions**.
![Delete Application Version 1](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Delete_a_Version_step_1.png)

2. On **Versions**, hover over the version you want to delete and click on the kebab menu.
![Delete Application Version 2](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Delete_a_Version_step_2.png)

3. Click **Delete Version**. 
![Delete Application Version 3](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Delete_a_Version_step_3.png)

4. On the **Delete Delete Version?** dialog, enter **DELETE** and click on **I understand, delete this**.
![Delete Application Version 4](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Delete_Application_Version_Step_4.png)



Here's a quick GIF demonstrating how to add, edit and delete versions in Testsigma. 

![Versions Workflow](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Create_a_Version.gif)


---