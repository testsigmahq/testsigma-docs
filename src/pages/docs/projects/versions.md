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
  name: "Interactive Demo"
  url: "#interactive-demo"
---

---


Due to constantly changing requirements and application features, version control is essential in software development. Let's say you've created 10 automated UI tests for app **version 1.0.0** in Testsigma, and a new beta version with additional features is in development. In this case, you can copy the existing **version 1.0.0** and rename it to **version 1.0.0-beta**. By doing this, you preserve the original 10 tests while allowing the addition of new tests specific to the beta version. Actions performed on **version 1.0.0-beta** won't impact the original tests in **version 1.0.0**. This article discusses how to manage application versions in Testsigma. 


---

> ## **Prerequisites**
> 
> You should know how to [Manage Applications](https://testsigma.com/docs/projects/applications/).



---

## **Create Application Version**

1. Navigate to **Project Settings > Versions**.

2. On **Edit Project** dialog, 

     - Click **New Version**.
     
     - On the **New Version** dialog, enter **Name**, **Description**, and click **Create**. 

3. A new version will be created. 


[[info | **NOTE**:]]
| 1. You have to select **Allow Multiple Versions** while creating a project to be able to create multiple versions.  
|
| 2. If you want to copy data from previous versions, enable **Copy Data from Previous Versions** toggle and select the models you want to transfer. 

---

## **Edit Application Version**

1. Navigate to **Project Settings > Versions**.

2. On **Versions**, hover over the version you want to edit and click the kebab menu. 

3. Click **Edit Version**. 

4. Make the changes and click **Update**.

---


## **Delete Application Version**

1. Navigate to **Project Settings > Versions**.

2. On **Versions**, hover over the version you want to delete and click the kebab menu.

3. Click **Delete Version**. 

4. On the **Delete Version?** dialog, enter **DELETE** and click **I understand, delete this**.



---

## **Interactive Demo**

### **Try this interactive demo to learn how to add, edit and delete a Version!**

<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div class="sl-embed" style="position:relative;padding-bottom:calc(57.41% + 25px);width:100%;height:0;transform:scale(1)">
    <iframe loading="lazy" class="sl-demo" src="https://app.storylane.io/demo/izafangglzqd?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
  </div>
</div>



---