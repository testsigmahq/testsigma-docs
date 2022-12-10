---
title: "Import and export test cases"
metadesc: "Importing and exporting test cases to and from the test cases list"
noindex: false
order: 4.14
page_id: "Import and Export Test Cases"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Import file format"
  url: "#import-file-format"
- type: link
  name: "Import test cases"
  url: "#import-test-cases"
- type: link
  name: "Export test cases"
  url: "#export-test-cases"
---

---

Import functionality lets you migrate Test Cases between Application Versions within Testsigma. Export functionality lets you export the Test Cases from the source Version and import them into the target Version.

Navigate to the Test Cases page by going through **Test Development > Test Cases**

You can use test case import and export to populate a new Testing Project with previously-built Test Cases or to perform bulk-update on the Test Cases easily. You can export the Test Cases, make the changes in the exported file as required and import it back to make changes for a set of Test Cases.

&emsp;
[[info | Note:]]
|1. If you are trying to update the Test Cases using Import-Export, make sure to keep the ID and UUID column intact so that the correct Test Case gets updated while importing back. You may change the other fields as required.<br>
|2. If you are trying to create new Test Cases in bulk, make sure to clear both the ID and UUID columns.

&emsp;

---
##**Import file format**

The Import file has the following Columns:

| Column Name | Description |
| :----------- |:----------- |
| ID | The id of the Test Case when it is exported (Only applicable in case of exported Test Cases) |
| UUID | The unique identifier of the Test Case when it is exported (Only applicable in case of exported Test Cases) |
| Testcase Name | Name of the Test Case |
| Testcase Type | Type of the Test Case |
| Priority | Priority of the Test Case |
| Manual | Whether it is a Manual Test Case or Automated Test Case |
| Created By | Email of the User who created |
|Updated At | Date and Time of update    |
|Updated By | Email of the User who updated |
|PreRequisite | Name of Prerequisite Test Case |
|Assignee | Email of the User to whom the Test Case is assigned |
|TestData | Name of Test Data Profile |
|Status | Status of the Test Case |
|Is DataDriven | Test Case is data-driven or not |
|DataSet | DataSet name if the data-driven toggle is turned off |
|Index | Index of Test Case |
|Requirement Name | Name of Requirement mapped to the Test Case |
|Tags | Labels for the Test Case |
|Is Step Group | Whether it is a Step Group or a Test Case |

[[info | Note:]]
|A Sample Test Case Import Template file has been provided in the Test Case Import dialog

&emsp;

<br>

Navigate to **Testsigma dashbord**.
![testsigma dashboard](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/TS_DB.png)

## **Export test cases**

1. Click the **Project** from project switcher, from where you want to export the test cases.
![Select Project](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Click_project.png)

2. Navigate to **Settings > Imports and exports**.
![settings import and export](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/navigate_imports.png)

3. Click on the **Export** button on the top right screen.
![Click on Export](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/clickon_exports.png)

4. On the **Export** pop-up screen, 
    - Choose the respective project, application, and version you're trying to export under **Select project, Select applications, and Select Version** on the left side of **export** pop-up screen. 
    ![Left Pop-up](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/left_popup.png)
    - Choose all the fields you want to include while exporting the project on the right side of **export** pop-up screen.
    ![Right Pop-up](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/right_popup.png)
    - Click on **Export**.
    ![Click on Export](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/clickonexport.png)

7. Navigate to **Imports and exports**. 
8. Hover on **Exported file**,
    - You will be able to see two options.
    ![Two options](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/two_options.png)
    - Click on **Download**.
    ![Click On Download](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Clickondownload.png)

8. A zip file will be downloaded to your local device.

<br>

## **Import test cases**

1. Click the **Project** from where you want to import the test cases.
![dashboard project choosing](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Click_project.png)

2. Navigate to **Settings > Imports and exports**.
![Imports and exports](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/navigate_imports.png)

3. Click on **Import**.
![Click On Import](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Clickon_import.png) 

4. On the **Import Xml** pop-up box,
    - Choose the file you want to import, select respective **project, application,** and **version** in which you're trying to import on the left side of export pop-up screen.
    ![Left pop-up](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/import_leftpopup.png)
    - Choose all the fields you want to include while importing the project on the right side of export pop-up screen.
    ![Right pop-up](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/import_rightpopup.png)
5. Navigate to **Settings > Imports and exports**.
6. You will be able to see imported file here.
![Imports and Exports](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Fin_imports.png)