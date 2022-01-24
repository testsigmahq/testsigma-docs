---
title: "Manage Projects"
page_title: "Managing Testsigma Projects"
metadesc: "A guide to managing Projects within Testsigma, including editing, deleting projects, and enabling/disabling multiple Application/Versions"
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
A **Project in Testsigma** is similar to a real-life Project that consists of different types of Applications. An example of a Testsigma Project would be an e-commerce product that has a variety of application channels such as web app, mobile web app, Android, iOS, or a public REST API.

This organization provides a logical separation between different Applications and Projects. A user is allowed to create any number of projects and applications. 

Your Testsigma account comes with 4 sample Projects, populated with different sample test cases for web, mobile web, Android, and iOS application types. You can use and edit them to start off your own test automation quickly. 

## **Create Project**

Here’s a snapshot of the Testsigma Dashboard page:
![Highlighted are the methods to create Projects](https://docs.testsigma.com/images/projects/dashboard-project-selection-area.png)

1. To create a new Project:

    **a.** Click the **Create New** button (highlighted on the top right corner) and select **Project** option from the dropdown menu. OR

    **b.** Click on the Project switcher (highlighted on the top left corner) to open the Project Switcher overlay, and then click on the **Create New Project** link near the **Go** button.
    ![Project switcher on Dashboard](https://docs.testsigma.com/images/projects/dashboard-project-selection-overlay.png)

2. Creating a Project using one of the above methods takes you to the Create Project page shown below:
![Create Project Form](https://docs.testsigma.com/images/projects/create-project-page1.png)
3. Enter a Name and Description for the Project and click    Next.

    [[info | NOTE:]]
    | *If you have created Custom Fields for your projects under Settings > Custom Fields, those fields will also show up here.
4. In the next page, choose if your project is a single Application project or a multi Application project:
    ![Select Multiple Applications option on Creating Project](https://docs.testsigma.com/images/projects/create-project-page2-multiapp-multiversion.png)
    
    **a.** Single application: if you have only one Application in the project. For example, if your online shopping Project only has a Web App.
    
    **b.** Multiple applications: if you have multiple applications, select this option and add the multiple applications in the next page. For example, if your online shopping Project has a Web App and Mobile App.
5. Also, if you want to have multiple versions for each of the Applications, you can enable the **Enable versioning option in this project** radio button and add the Application Version in the next page. Click Next to proceed.

    [[info | NOTE:]]
    | *You can also add these settings later by editing the Project as well.*
6. In the next page, select the Application type from the given options - web application, mobile web application, Android Native App, iOS Native App, RESTful API and click Create.
    ![Choose Application Type on Creating project](https://docs.testsigma.com/images/projects/create-project-page3-select-apptype.png)
    Your Project is created and you will be taken to the Test Cases page directly. You can start automating your Test Cases from here.
    ![Test Cases page after creating project](https://docs.testsigma.com/images/projects/create-project-redirect-test-cases.png)

    Before you proceed, if you want to assign users and manage roles for projects, refer to  [Assign projects](https://testsigma.com/docs/collaboration/assign-projects/).

## **Edit Project**

To edit an existing project, select the project from the Project Switcher and then navigate to the Project Settings page via **Dashboard > Project Settings**

![Project Settings](https://docs.testsigma.com/images/projects/project-settings.png)

Click on the edit button (pencil icon) on the top left corner to open the Edit Project page as shown below:
![Edit Project page from Project Settings](https://docs.testsigma.com/images/projects/edit-project.png)

You can also enable/disable multiple Application or multiple Application Versions from here.

If Multiple Applications are enabled, you can manage them from the **Dashboard > Project Settings > Applications** page.

If Multiple Application Versions are enabled, you can manage them from the **Dashboard > Project Settings > Applications > Versions** page.

## **Delete Project**

To delete an existing project, select the project from the Project Switcher and then navigate to the Project Settings page via **Dashboard > Project Settings**

Click on the delete button(trash icon) on the top left corner to delete the project.

**Deleting a Project will lead to loss of all data within the project including**

  &emsp;**-** All Applications within the Project

  &emsp;**-** All Application Versions within all those Applications

  &emsp;**-** All the Test Cases, Test Data, Uploads within all those Application Versions

**Please make sure that you are okay with losing all the above data before proceeding with the Project deletion.**

If you still want to delete the Project, confirm the Project deletion in the popup dialog.






