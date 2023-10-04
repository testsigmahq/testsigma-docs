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
![Projects](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/prnavcl.png)

2. Enter the **Project Name** and **Description** (Optional).
![Project Name & Description](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/prnad.png)

[[info | **NOTE**:]]
| Custom fields you create for your projects under **Settings > Custom Fields > Projects** will appear here.

3. If your project involves multiple applications, check **Allow adding multiple applications in this project** checbox. To add an application, click **Add Application**, select the **Application Type** from the drop-down menu, and give it a **Name**. By default, the project is set up for a single application.
![New project](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/prnpamv.png)

4. Also, if you want multiple versions for each application, check **Allow multiple versions for applications** checbox.
![Multiple Versions](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/pramversions.png)

5. Click on **Create**. 
![Create](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/prcreate.png)

Here is a quick GIF demonstrating how to create a Project. 
![Create Project](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/createproject.gif)

---

## **Editing a Project**
1. Navigate to **Project > Project Settings**.
![Project Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/prnavprtprs.png)

2. This will open the **Edit Project** prompt. 
![Edit Project](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/preditprompt.png)

3. You can update **Project Details**, **Multiple Applications** and **Versions** from here. Also, you can add **Project Members**, **Test Case Types**, and **Requirement Types** on the same prompt. 
![Update Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/prdetailsall.png) 

4. Click on **Update** to save the changes. 
![Update](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/pruclick.png)

**Adding**, **Editing**, and **Deleting** Applications & Versions can be done under **Project Settings > Applications**.

Here is a quick GIF demonstrating how to edit a Project. 
![Edit Project](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/editproject.gif)

---

## **Switching Projects**
1. Click on the current **Project** from **Dashboard**. 
![Project](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/prswitch.png)

2. Select **Project**, **Application**, and **Version** from respective dropdowns and click on **Go to project**. 
![Switch Dropdowns](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/prspgtp.png)

3. You’ll be redirected to the dashboard of the selected project.

Here is a quick GIF demonstrating how to switch projects. 
![Switch Projects](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/switchpr.gif)

---

## **Deleting a Project**
1. Navigate to **Project > Project Settings**.
![Project Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/prnavprtprs.png)

2. Click on **Delete**.
![Delete](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/prdelete.png)

3. On the **Delete project** prompt, enter **DELETE** and click on **Delete**.
![DELETE](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/prdelefin.png) 


[[info | **NOTE**:]]
| Deleting a Project will delete:
| - All Applications & Application Versions within this Project.
| - All Test cases, Elements, Test data profiles, Custom functions, Uploads, Requirements, Test suites, Test plans, Run results and Environments associated with this project.

Here is a quick GIF demonstrating how to delete a project. 
![Delete](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/deletepr.gif)

---