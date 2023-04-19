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
  name: "Creating a Project"
  url: "#creating-a-project"
- type: link
  name: "Editing a Project"
  url: "#editing-a-project"
- type: link
  name: "Switching Projects"
  url: "#switching-projects"  
- type: link
  name: "Deleting a Project"
  url: "#deleting-a-project"

---

---

Testsigma offers the ability to create multiple projects and applications, allowing for logical separation between them. Each Testsigma Project comprises different types of Applications, similar to a real-life Project. For example, a Testsigma Project would be an e-commerce product with various application channels such as a Web app, Mobile web app, Android, iOS, or a public REST API.

Testsigma provides four sample projects with various test cases for Web, Mobile web, Android, and iOS application types within the Testsigma account. These sample projects can be used and modified to initiate test automation quickly.

This document will walk you through **creating**, **editing**, **switching**, and **deleting projects** in Testsigma.

---

## **Creating a Project**

To create a new project in Testsigma, follow these steps:

1. To create a new Project:

    a. Click **Create New** in the top-right corner of the screen, and then select **Project** from the drop-down menu. ![Highlighted are the methods to create Projects](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/createnew_dashboard_ts.png)

    b. Alternatively, click **Project Switcher** in the top-left corner of the screen to open the Project Switcher overlay, and then click **Create New**. ![Project switcher on Dashboard](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/createnew_switcher_ts.png)

2. Enter the **Project Name** and **Description (Optional)**. ![Create Project Form](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/projectname_ts.png)

    [[info | NOTE:]]
    | Custom fields you create for your projects under **Settings** > **Custom Fields** > **Projects** will appear here.
 

3. If your project involves **multiple applications**, you should enable the **toggle** feature. To add an application, click **Add New Application**, select the **application type** from the drop-down menu, and give it a **name**. You can **delete** it later. By default, the project is set up for a **single application**; you can select the **project type** from the drop-down menu. ![Select Multiple Applications option on Creating Project](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/enabletoggle_multipleapp.png)

4. Also, if you want multiple versions for each application, you should enable the **toggle** feature and add the Application Version. ![Application Version](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/enabletoggle_appversion.png)

    [[info | NOTE:]]
    | You can also add these settings later by editing the Project as well.

5. Click **Create** in the top-right corner of the screen. ![Create a Project](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/create_project_ts.png)
   
6. Your Project is created, and you will be taken to the Test Cases page directly. You can start automating your Test Cases from here. ![Test Cases page after creating project](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/newproject_tc_ts.png)

    [[info | NOTE:]]
    | Refer to [Assign Projects](https://testsigma.com/docs/collaboration/assign-projects/) if you want to assign users and manage project roles before proceeding.
  
Here is a quick GIF demonstrating the above workflow: ![Creating a Project](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/creatingaproject.gif)

---

## **Editing a Project**

To edit an existing project in Testsigma, follow these steps:

1. Select the **Project** you want to edit from the Project Switcher, then navigate to the **Project Settings** page. ![Project Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/projectedit_ts.png)

2. Click **Edit** on the top-right corner of the screen to open the **Edit Project** page; you can enable/disable the **toggle** to **Multiple Applications** or **Versions** from here. Click **Update** to save changes. ![Edit Project page from Project Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/editproject_update_ts.png)

3. **Adding**, **editing**, and **deleting** **Applications** & **Versions** can be done under **Project Settings** > **Applications**. ![Editing Application and Versions](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/editapplication_ts.png)

Here is a quick GIF demonstrating the above workflow: ![Editing a Project](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/editingaproject.gif)

---

## **Switching Projects**

To switch between different projects in Testsigma, follow these steps:

1. Click the drop-down arrow next to the current project name in the top-left corner
2. Click on the drop-down menu to select the **Project** (**Application**, **Version**, if enabled) you wish to switch to from the list of projects you can access. Then, click **Go** to switch projects. 
3. Once you select a project, Testsigma will take you to the dashboard of the selected project.

Here is a quick GIF demonstrating the above workflow: ![Switching Projects](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/switchingproject.gif)

---

## **Deleting a Project**

To delete a project in Testsigma, follow these steps:

1. Select the **Project** you want to delete from the Project Switcher, then navigate to the **Project Settings** page.
2. Click **Delete** on the top-right corner of the screen to delete the project.

**Deleting a Project will lead to losing all data within the project.**

  - All **Applications** & **Application Versions** within this Project.

  - All **Test cases**, **Elements**, **Test data profiles**, **Custom functions**, **Uploads**, **Requirements**, **Test suites**, **Test plans**, **Run results** and **Environments** associated with this project.

**Please ensure you are okay with losing all the above data before proceeding with the Project deletion.**

3. If you still want to delete the Project, Confirm the deletion by entering **DELETE** and then clicking **I understand, delete this project**. ![Delete Project](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/deleteproject_ts.png)

---

