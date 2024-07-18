---
title: "Importing Postman Collections and Environments"
pagetitle: "Effortless Postman Collection Import | Simplify API Testing"
metadesc: "Import Postman collections and environments seamlessly to enhance your API testing. Streamline the process effortlessly with our user-friendly guide."
noindex: false
order: 4.16
page_id: "import-postman-collection"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Import Postman Collections"
  url: "#import-postman-collections"
- type: link
  name: "Import Postman Environments"
  url: "#import-postman-environments"
- type: link
  name: "Mapping Format for Postman Collection and Environment"
  url: "#mapping-format-for-postman-collection-and-environment"        
---

---

Testsigma simplifies API test case migration by seamlessly importing Collections and Environments from Postman and conveniently exporting them in JSON or Zipped formats. This facilitates easy migration of your API test cases from Postman to Testsigma. You can integrate your Postman assets into Testsigma and ensure efficient test management by following the steps below.

---

> ## **Prerequisites**
> 
> Before using the import of Postman Collections and Environments in Testsigma, ensure that you are familiar with exporting Postman [Collections](https://learning.postman.com/docs/getting-started/importing-and-exporting/exporting-data/#export-collections), [Environments](https://learning.postman.com/docs/getting-started/importing-and-exporting/exporting-data/#export-environments), and [Data Dumps](https://learning.postman.com/docs/getting-started/importing-and-exporting/exporting-data/#export-data-dumps) and understand the [Mapping Format](https://testsigma.com/docs/test-cases/manage/import-postman-to-testsigma/#mapping-format-for-postman-collection-and-environment) for Importing Postman Collections.

---

## **Import Postman Collections**

After exporting your Postman Collection as JSON or Zipped format, follow these steps to import it into Testsigma:

1. Navigate to **Settings** > **Imports and Exports**.
2. Click **Import** and select **Import Postman Collection** tab. ![Select Import Postman Collections](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/import_postmancolection_envi.gif)
3. Click **Select File to Import** and choose the file to import; select the **project**, **application**, and **version**.
4. After you upload the file, Testsigma organizes **Collections**, **Environments**, and **Variables** into **Test Suites**, **Test Cases**, **Test Steps**, **Test Data Profiles**, and **Environments**. This feature enables you to easily understand how the imported file is organized. 
5. Click **Start Importing** to transfer a collection into Testsigma. ![Start Importing Collections file](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/import_postman_collection.gif)
6. Testsigma will notify you via **email** once the import is complete. ![Email Notification](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/notify_import_ts.png)

---

## **Import Postman Environments**

Import your Postman Environments to Testsigma in JSON or Zipped format. Follow below the simple steps:

1. Navigate to **Settings** > **Imports and Exports**.
2. Click **Import** and select **Import Postman Collection** tab. ![Select Import Postman Collections](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/import_postmancolection_envi.gif)
3. Click **Select File to Import** and choose the file to import; select the **project**, **application**, and **version**.
4. Click **Start Importing** to transfer the environments into Testsigma. ![Start Importing Environment File](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/import_postman_environment.gif)
5. Testsigma will notify you via **email** once the import is complete. ![Email Notification Environments](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/notify_envi_import_ts.png)
6. After importing, Testsigma organizes **Environments** and **Global Variables** into **Environments**. This helps you quickly see how the imported file is mapped.

[[info | NOTE:]]
| You can verify the imported Collection and Environment files by downloading them.

---

## **Mapping Format for Postman Collection and Environment**

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
| - The import will create a new entry, appending the timestamp to the title if a collection with the same name already exists.
| - The import mapping excludes test scripts, prerequisite scripts, settings, unsupported authorizations, HTTP methods, and GraphQL requests.

---
