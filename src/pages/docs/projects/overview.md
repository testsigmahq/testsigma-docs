---
title: "Manage Projects"
page_title: "Managing Testsigma Projects"
metadesc: "A guide to managing Projects within Testsigma, including editing, deleting projects, and enabling/disabling multiple Application/Versions"
noindex: false
order: 2.0
page_id: "Manage Projects"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Create Project"
  url: "#create-project"
- type: link
  name: "Edit Project"
  url: "#edit-project"
- type: link
  name: "Delete Project"
  url: "#delete-project"
---

---
A **Project in Testsigma** is similar to a real-life project that consists of different types of applications. An example of a Testsigma project would be an e-commerce product that has a variety of application channels, such as a web app, a mobile web app, an Android or iOS, or a public REST API.

This organisation provides a logical separation between different applications and projects. A user is allowed to create any number of projects and applications. 

Your Testsigma account comes with four sample projects, each populated with different sample test cases for web, mobile web, Android, and iOS application types. You can use and modify them to quickly get started with your own test automation. 

---
##**Create Project**

Navigate to **Testsigma Dashboard**:
![Testsigma Dashboard](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/ts_dashboard.png)

1. To create a new project: 
    - Click the **Create new** button and select **Project** from the drop-down menu.
    ![Create new Project Button in right align](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/ts_createprojectrs.png)
    Alternatively,
     - Click on the project switcher, and click on the **Create new project** .
    ![Create new Project in left align](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/ts_createprojectls.png)
    
2. Enter **Project name**, **Description** and click on **Create**.
![Create New Project Name](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/ts_projectname.png)

3. If your product has multiple applications, 
    - Click the **toggle** button to enable them.
    ![Select Multiple Applications option on Creating Project](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/ts_multipleapps.png)
    - Click on **Add new application**.
    ![Add new applications](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/ts_addnewapps.png)

4. To enable versions in each application, click toggle button.
![Enabling Toggle button](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/ts_enableversioninapps.png)

[[info | NOTE:]]
| You can also add these settings later by editing the Project as well.
5. Your project has been created, and you will be taken to the **Test Cases** page. 

---
##**Edit Project**

1. To edit an existing project, navigate to **Dashboard > Project settings**

2. Click on the **Edit**.
![Edit Project Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/ts_editprojectedit.png)
3. Edit project details and click on **Update**.
![Edit Project page from Project Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/ts_editprojectupdate.png)
[[info | NOTE:]]
| You can also enable or disable multiple applications or multiple application versions from here.

---
##**Delete Project**

1. To delete an existing project, navigate to **Dashboard > Project settings**.

2. Click on **Delete**.
![Delete project settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/ts_editprojectdelete.png)
3. Clicking on the Delete button for the application shows a warning prompt as shown below. In the box highlighted, enter DELETE, and click I understand, delete this project to confirm the deletion.
![Delete prompt](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/ts_deleteprojectconfirm.png)
[[info | NOTE:]]
| Deleting a project leads to the loss of all data within the application including:
|    - All applications within the project.
|    - All application versions within the application.
|    - All the test cases, test data, and uploads within all those application versions.  