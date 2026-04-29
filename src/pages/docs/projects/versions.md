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
- type: link
  name: "Getting Version ID"
  url: "#getting-version-id"
---

---


Due to constantly changing requirements and application features, version control is essential in software development. Let's say you've created 10 automated UI tests for app **version 1.0.0** in Testsigma, and a new beta version with additional features is in development. In this case, you can copy the existing **version 1.0.0** and rename it to **version 1.0.0-beta**. By doing this, you preserve the original 10 tests while allowing the addition of new tests specific to the beta version. Actions performed on **version 1.0.0-beta** won't impact the original tests in **version 1.0.0**. This article discusses how to manage application versions in Testsigma. 


---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that you have referred to:
> 1. [Documentation on managing applications](https://testsigma.com/docs/projects/applications/).


---

## **Create Application Version**

1. From the left navigation bar, Navigate to **Project Settings**.
![Project Settings](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_versions_1.png)

2. In the **Edit Project** dialog, click **Versions** in the left panel.
![Versions](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_versions_2.1.png)

3. In the **Versions** screen, click **New version**.
![New Versions](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_versions_2.png)
     
4. In the **New Version** dialog, enter **Name**, **Description**, and **Start Date - End Date**, and click **Create**. 
![Create](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_versions_3.png)

5. A new version will be created. 


[[info | **NOTE**:]]
| 1. You have to select **Allow Multiple Versions** while creating a project to be able to create multiple versions.  
|
| 2. If you want to copy data from previous versions, enable **Copy Data from Previous Versions** toggle and select the models you want to transfer.
| ![Copy Data from Previous Versions](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_versions_4.png) 

---

## **Edit Application Version**

1. From the left navigation bar, Navigate to **Project Settings**.
![Project Settings](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_versions_1.png)

2. In the **Edit Project** dialog, click **Versions** in the left panel.
![Versions](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_versions_2.1.png)

3. In the **Versions** screen, click the kebab menu next to a version and click **Edit Version**.
![](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_versions_5.png) 

4. Make the changes and click **Update**.
![Update](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_versions_6.png)

---


## **Delete Application Version**

1. From the left navigation bar, Navigate to **Project Settings**.
![Project Settings](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_versions_1.png)

2. In the **Edit Project** dialog, click **Versions** in the left panel.
![Versions](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_versions_2.1.png)

3. In the **Versions** screen, click the kebab menu next to a version and click **Delete Version**.
![Delete a version](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_versions_7.png)  

4. On the **Delete Version?** dialog, enter **DELETE** and click **I understand, delete this**.
![DELETE](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_versions_8.png)

---

## **Getting Version ID**

1. From the left navigation bar, Navigate to **Project Settings**.
![Project Settings](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_versions_1.png)

2. In the **Edit Project** dialog, click **Versions** in the left panel.
![Versions](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_versions_2.1.png)

3. In the **EDIT PROJECT** dialog, hover over the version name to view its ID.
![version ID](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_versions_9.png)

4. Click **Copy** to copy the version ID.
![Copy](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_versions_10.png)

---