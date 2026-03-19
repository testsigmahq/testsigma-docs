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

Testsigma offers the ability to create multiple projects and applications, allowing for logical separation between them. Each Testsigma Project comprises different types of applications, similar to a real-life Project. 

Testsigma provides four sample projects with various test cases for Web, Mobile web, Android, and iOS application types within the Testsigma account. These sample projects can be used and modified to initiate test automation quickly.

This document will walk you through **creating**, **editing**, **switching**, and **deleting** projects in Testsigma.

---

## **Creating a Project**

1. Navigate to **Create New** and click on **Project** from the dropdown menu. 
![Projects and Settings 1](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/project/update_project_1.png)

2. Enter the **Project Name** and **Description** (Optional).
![Project and Settings 2](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/project/update_project_2.png)

[[info | **NOTE**:]]
| Custom fields you create for your projects under **Settings > Custom Fields > Projects** will appear here.

3. If your project involves multiple applications, check **Allow adding multiple applications in this project** checkbox. To add an application, click **Add Application**, select the **Application Type** from the drop-down menu, and give it a **Name**. By default, the project is set up for a single application.
![Project and Settings 3](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/project/update_project_3.png)

4. Also, if you want multiple versions for each application, check **Allow multiple versions for applications** checbox.
![Project and Settings 4](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/project/update_project_4.png)

5. Click on **Create**. 
![Project and Settings 5](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/project/update_project_5.png)

---

## **Editing a Project**

1. Navigate to **Project > Project Settings**.
![Edit a Project 1](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/project/update_project_6.png)

2. This will open the **Edit Project** dialog. 
![Edit Project](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/project/update_project_7.png)

3. You can update **Project Details**, **Multiple Applications** and **Versions** from here. Also, you can add **Project Members**, **Test Case Types**, and **Requirement Types** on the same dialog. 
![Update Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/project/update_project_8.png) 

4. Click on **Update** to save the changes. 
![Edit a Project 4](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/project/update_project_9.png)

> 
> **Adding**, **Editing**, and **Deleting** Applications & Versions can be done under **Project Settings > Applications**.

---

## **Switching Projects**

1. Click on the current **Project** from **Dashboard**. 
![Switching Project 1](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/project/update_project_10.png)

2. Select **Project**, **Application**, and **Version** from respective dropdowns and click on **Go to project**. 
![Switch Project 2](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/project/update_project_11.png)

3. You’ll be redirected to the dashboard of the selected project.

---

## **Deleting a Project**

1. Navigate to **Project > Project Settings**.
![Delete a Project 1](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/project/update_project_6.png)

2. Click on **Delete**.
![Delete a Project 2](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/project/update_project_12.png)

3. On the **Delete project** prompt, enter **DELETE** and click on **Delete**.
![Delete a Project 3](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/project/update_project_13.png)

[[info | **NOTE**:]]
| Deleting a Project will delete:
| - All Applications & Application Versions within this Project.
| - All Test cases, Elements, Test data profiles, Custom functions, Uploads, Requirements, Test suites, Test plans, Run results and Environments associated with this project.

---
