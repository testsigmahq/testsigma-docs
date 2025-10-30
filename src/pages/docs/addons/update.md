---
title: "Updating an Addon in Testsigma"
pagetitle: "Update Your Addon: Simple Guide for Easy Modifications"
metadesc: "Updating a Testsigma addon is simple and quick. Follow our step-by-step guide to modify, enhance, and manage your addon versions effectively."
noindex: false
order: 17.6
page_id: "updating-testsigma-addon"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Updating Addon"
  url: "#updating-addon"
---

---

Updating an addon in Testsigma keeps your tools up-to-date and functional. First, you need to have an existing addon. Once it's created, updating becomes simple. You can quickly refine features, fix bugs, and adjust to new requirements, ensuring your addons stay effective and meet your testing needs without starting from scratch.

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before updating an addon, ensure that: 
> 1. You have referred to the [documentation on creating add-ons](https://testsigma.com/docs/addons/create/#creating-an-addon-template).
> 2. You have an Understanding of the programming language (usually Java) and frameworks.
> 3. You have referred to the [documentation on how addons work](https://testsigma.com/docs/addons/create/#understanding-the-purpose-of-addons) in Testsigma, including actions and configurations.

---

## **Updating Addon**

1. Modify the addon’s code to fix issues, add features, or adjust settings. Compress the file into **Zipped** Format.
2. In Testsigma Application, click on the **Addons** icon from the left navigation bar. 
   ![Addons](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/addon/Addon_1.png)
3. Go to the **My Addons** page in Testsigma and select the addon you want to update.
   ![My Addons](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/addon/Addon_2.png)
4. Select **Upload Code** from the dropdown.
   ![Upload Code](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/addon/Addon_3.png)
5. In **Upload Zip File** Overlay, Browse and select the zipped file, then click **Update**. ![update addon](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/addon/Addon_4.1.png)
6. After uploading the code, click on **Publish** from the dropdown menu. Then, choose your publish options:
    - **Public**: Make the addon available to the entire Testsigma community.
    - **Private**: Restrict availability to users within your organization.
     ![Publish](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/addon/Addon_5.png)
7. An automatic security check will be done. If it passes, the addon will be published. If it fails, you will get an email notification. 

---


