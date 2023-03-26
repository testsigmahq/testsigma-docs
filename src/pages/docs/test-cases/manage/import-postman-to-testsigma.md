---
title: "Import Postman's Collections and Environments"
metadesc: "This article explains how to import test cases from yaml or git"
noindex: false
order: 4.16
page_id: "Import Test Cases from YAML/GIT"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Export Postman Collections"
  url: "#export-postman-collections"
- type: link
  name: "Export Postman Environments"
  url: "#export-postman-environments"
- type: link
  name: "Import Postman Collections"
  url: "#import-postman-collections"
- type: link
  name: "Import Postman Environments"
  url: "#import-postman-environments"
- type: link
  name: "Mapping Format"
  url: "#mapping-format"        
---

---

Testsigma allows you to conveniently export Collections and Environments from Postman, making it easy to migrate your API test cases. You can export Collections and Environments from Postman in JSON format and import them into Testsigma. Testsigma supports JSON and Zip formats for imports, making it easier to migrate your API test cases from Postman to Testsigma.

---

## **Export Postman Collections**

Exporting a Postman Collection in JSON format is a simple process that involves a few steps. Follow the steps below to export your Postman Collection in JSON format:

1. Locate the **Collection** you want to export in the sidebar of **Postman**.
2. Click the **three dots** on the right-hand side of the Collection. ![Select Collection Meatballs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/meatballs_postman.png)
3. Select **Export** from the drop-down menu. ![Select Export Collection dropdown list](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/export_postman.png)
4. In the Export Collection window, select **Collection** (as recommended by Postman) and click **Export**. ![Export Collection](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/exportcollection_postman.png)
5. Enter **.json** after the file name as the export format. Complete the export process by clicking **Save**.![Save Collection in JSON format](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/save_postman.png)

---

## **Export Postman Environments**

Export your Postman Environments in JSON format. Follow below the simple steps:

1. Locate the **Environments** you want to export in the sidebar of **Postman**.
2. Click the **three dots** on the right-hand side of the **Environment**. ![Select Environments Meatballs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/meatballsexport_pm.png)
3. Select **Export** from the drop-down menu. ![Select Export Environments dropdown list](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/exportenvi_postman.png)
4. Enter **.json** after the file name as the export format. Complete the export process by clicking **Save**. ![Save Environment in JSON format](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/saveenvi_postman.png)

---

## **Import Postman Collections**

Once you have exported your Postman Collection as a JSON file, you can import it into Testsigma using the following steps:

1. In Testsigma, Navigate to **Settings** > **Imports and Exports**. ![Navigate to Import & Export](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/ie_ts.png)
2. Click the **Import Postman Collections** button on the top right screen. ![Select Import Postman Collections](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/import_pm_ts.png)
3. In **Postman Collections Import**, click **Select File to Import** and select the JSON file you exported from Postman. ![Click Select File to Import](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/selectfile_import_ts.png)
4. Select **Import Location** to choose the respective project, application, and version you're trying to import under **Select Project**, **Select Application**, and **Select Version** from the drop-down menu. ![Choose Import Locations](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/importlocation_ts.png)
5. Click **Start Importing** to transfer a collection into Testsigma. ![Start Importing](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/startimporting_im_ts.png)
6. Testsigma will notify you via email (to the email address you used to log into Testsigma) once it completes importing Collections. Click **Here** to view the imported collections in Testsigma. ![Email Notification](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/notify_import_ts.png)
7. After completing the import process, Testsigma maps Collections into Test Suites, Test Cases, Test Data Profiles, and API steps that allow you to view and edit the imported tests. ![Collection Mapping in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/collectionsmapped_ts.gif)

---

## **Import Postman Environments**

Import your Postman Environments to Testsigma. Follow below the simple steps:

1. In Testsigma, Navigate to **Settings** > **Imports and Exports**. ![Navigate to Import & Export](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/ie_ts.png)
2. Click the **Import Postman Collections** button on the top right screen. ![Select Import Postman Collections](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/import_pm_ts.png)
3. In **Postman Collections Import**, click **Select File to Import** and select the JSON file you exported from Postman. ![Click Select File to Import](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/selectfile_import_ts.png)
4. Select **Import Location** to choose the respective project, application, and version you're trying to import under **Select Project**, **Select Application**, and **Select Version** from the drop-down menu. ![Import Environment File](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/importlocation_envi_ts.png)
5. Click **Start Importing** to transfer Environments into Testsigma. ![Start Importing Environment File](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/startimporting_envi_im_ts.png)
6. Testsigma will notify you via email (to the email address you used to log into Testsigma) once it completes importing Environments. Click **Here** to view the imported collections in Testsigma. ![Email Notification Environments](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/notify_envi_import_ts.png)
7. After completing the import process, Testsigma maps Environments, Variables into the Environment, allowing you to view and edit the imported tests. ![Environment Mapping in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/collectionsmapped_envi_ts.png)

[[info | NOTE:]]
| The Collections and Environments file that was imported subsequently can be verified by downloading it.

---

## **Mapping Format**

Follow the mapping format in Testsigma to automatically map the collection and environment when importing them, enabling you to create automated API tests quickly.
 
|Postman|Testsigma|
|---|---|
|Collection|Test Suite|
|Subfolder|Test Case|
|API inside Subfolders|Test Steps in Test Case|
|Folder inside Subfolder|Create a Block inside the Test Case|
|Collection Variables|Test Data Profiles|
|Global, Environments, Variables|Environments|
|Parent Folder|Label of Test Case|

[[info | NOTE:]]
| - We will create a new entry for the import and append the timestamp to the title of the imported collection if a collection with the same name already exists.
| - Import mapping does not support test scripts, prerequisite scripts, settings, unsupported authorization and HTTP methods, and GraphQL requests.

---
