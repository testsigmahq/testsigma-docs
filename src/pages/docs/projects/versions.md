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

## **Prerequisites**
- You should know how to [manage applications](https://testsigma.com/docs/projects/applications/).


---

## **Create Application Version**

1. Navigate to **Project Settings > Versions**.
![Versions](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/navvers.png)

2. On **Edit Project** prompt, 
     - Click on **New version**.
     ![New Version](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/vconv.png) 

     - On the **New version** prompt, enter **Name**, **Description**, and click on **Create**. 
     ![Version Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/vdetailsa.png)


3. A new version will be created. 


[[info | **NOTE**:]]
| 1. You have to select **Allow multiple versions** while creating a project to be able to create multiple versions.  
| ![Allow Multiple versions](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/veramversions.png)
|
| 2. If you want to copy data from previous versions, enable **Copy Data from previous Versions** toggle and select the models you want to transfer. 
| ![Copy Data](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/vsmodules.png)

---

## **Edit Application Version**

1. Navigate to **Project Settings > Versions**.
![Versions](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/vallversions.png)


2. On **Versions**, hover over the version you want to edit and click on the kebab menu. 
![Hover over version](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/vhovacokm.png)


3. Click on **Edit Version**. 
![Edit Version](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/veditvers.png)

4. Make the changes and click on **Update**.
![Update](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/verupdate.png)


---


## **Delete Application Version**

1. Navigate to **Project Settings > Versions**.
![Versions](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/vallversions.png)

2. On **Versions**, hover over the version you want to delete and click on the kebab menu.
![Kebab Menu](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/verdelete.png)

3. Click on **Delete Version**. 
![Delete Version](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/verdeclick.png)


4. On **Delete Delete Version?** prompt, enter **DELETE** and click on **I understand, delete this**.
![Delete Version Warning](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/verdelwarning.png)


Here's a quick GIF demonstrating how to add, edit and delete versions in Testsigma. 

![Versions Workflow](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/VersionsWF.gif)


---