---
title: "Import Test Project Test Cases"
pagetitle: "Start Importing Test Cases from YAML/GIT with Ease"
metadesc: "Seamlessly transfer projects from Test Project using YAML/GIT in Testsigma to learn how to improve your test automation workflow for efficient testing."
noindex: false
order: 4.15
page_id: "Import Test Cases from YAML/GIT"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"  
- type: link
  name: "Importing from Test Project to Testsigma"
  url: "#importing-from-test-project-to-testsigma"
---

---

You will understand how to import projects from Test Project using YAML/GIT and smoothly move them to Testsigma through this Documentation.

---

> ## **Prerequisites**
>
> Before using the import from Test Project in Testsigma, ensure that you are familiar with exporting the Test Project file as a YAML/Zip of the project or a GitHub repository for your project.

---

## **Importing from TestProject to Testsigma**

1. Navigate to **Settings** > **Plugins**. Click on the toggle to enable the **Test Project** plugin.
2. Navigate to **Settings > Imports and Exports**.
3. Click **Import** and select **Import from Test Project** tab.
4. You have two options for importing TestProject projects or test cases.
      - From **YAML/Zip** section:
        - Click on **Browse** to choose the file for import, or alternatively, you can drag and drop the file.
      - From **GitHub** section: 
        - Enter the **Repository URL** and **Access Token**.
[[info | **NOTE**:]]
| - We use the information to bring in the project from GitHub and we will not save the Repository URL or Token.
| - Please click here to generate a new access token and give the necessary permissions under the repositories section.

![Import YAML/ZIP/ GIT file](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/navi_import_testproject.gif)
5. Click on **Start Import** to transfer projects into Testsigma.
6. You can view your imported projects or test cases in **Imports and Exports**.
7. Testsigma will automatically recognize the project and application and create test cases, steps, and elements from the imported data. ![Start Importing YAML/ZIP](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/import_testproject_file.gif)

---

