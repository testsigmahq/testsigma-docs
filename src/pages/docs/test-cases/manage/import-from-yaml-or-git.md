---
title: "Import Test Cases from YAML/GIT"
metadesc: "This article explains how to import test cases from yaml or git"
noindex: false
order: 4.15
page_id: "Import Test Cases from YAML/GIT"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to import project from TestProject"
  url: "#steps-to-import-project-from-testProject"
---

<br>

This article explains how to import projects from **TestProject** and upload to **Testsigma** with simple steps. 

[[info | **NOTE**:]]
|You need to have a YAML/Zip file of the project or a GitHub repository of your project to import projects. Refer to the GIF below to know to download your projects from TestProject.

![Import TP to TS](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/importtpts.gif)

## **Steps to import project from TestProject**
1. Enable **TestProject** Plugin. 
    - Navigate to **Settings**.
    ![Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/navsettings.png)
    - Click on **Plugins**
    ![Plugins](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/plugins.png)
    - Click on the toggle to enable the **TestProject** plugin.
    ![TP Plugin](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/TPtoggle.png)

2. Navigate to **Settings > Imports and Exports**.
![Imports and Exports](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/importsandexports.png)

3. Click on **Import**.
![Import](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/nnn.png)

4. On the import prompt, click on **Import from TestProject**.
![Prompt](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/image2.png)


[[info | **NOTE**:]]
|You can import TestProject’s projects or test cases in two ways. 
|    - From **YAML/Zip**
|    - From **GitHub**

5. For **YAML/Zip** type, click on **Browse** and select the file you want to import. 
![YAML](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/zip.png)
Alternatively, you can drag or drop the file.

6. For **GitHub** import, 
    - Enter the Repository URL and Access Token.
    ![GitHub](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/yaml.png)
    - Click on **Import**.

7. You can see your imported projects or test cases in **Imports and Exports**.
![File in Imports and Exports](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/impexp.png)

Testsigma will auto-identify the project and application and create test cases, steps, and elements from the import.