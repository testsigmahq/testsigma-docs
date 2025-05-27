---
title: "Import and Export Test Cases"
metadesc: "You can use test case import and export to populate a new Testsigma project with previously built test cases | Learn how to import and export test cases in Testsigma"
noindex: false
order: 4.14
page_id: "Import and Export Test Cases"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Import file format"
  url: "#import-file-format"
- type: link
  name: "Steps to Export Test Cases"
  url: "#steps-to-export-test-cases"
- type: link
  name: "Steps to Import Test Cases"
  url: "#steps-to-import-test-cases"
---

---

You can easily use test case import and export to populate a new Testsigma project with previously built test cases or perform bulk-update on the Test Cases. This article discusses how to import and export test cases in Testsigma.

---

> ## **Prerequisites**
> 
> - You should know how to [Manage Projects](https://testsigma.com/docs/projects/overview/).

---

## **Steps to Export Test Cases**
1. Navigate to **Settings > Imports & Exports**, and click on **Export**.
![Imports & Exports](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/EXPORTTCS.png)

2. On **Export** prompt, 
    - Select the **Project**, **Application** and **Version** from which you want to export test cases.
    ![Select Project, Apps, Version](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/exportprompttcs.png)
    - Check the models you want to export.
    ![Export Models](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/exportmodelstcs.png)
    - Click on **Start export**.
    ![Start Exports](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/startexporttcs.png)

You’ll receive mail with an exported data file. Download the file to import data on targeted applications and versions. Alternatively, you can also download the file by clicking on the **Kabab Menu** & **Download import data**.
![Kebab Menu & Download](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/kebabtcs.png)

Here’s a quick GIF demonstrating how to export test cases. 
![Export](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ExportTCs.gif)

## **Import File Format**

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

---

## **Steps to Import Test Cases**
1. Navigate to **Settings > Imports & Exports**, and click on **Import**.
![Imports & Exports](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/importexporttcs.png)

2. On **Import** prompt, 
    - Click on **Select File to Import** and choose the file from which you want to import test cases.
    ![Select File](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/selectfileimextcs.png)
    - Select the **Project, Application** and **Version** in which you want to import test cases.
    ![Import Models](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/importmodels.png)
    - Check the models you want to import.
    ![Start Import](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/startimporttcs.png)
    - Click on **Start import**.
    ![Start Import Button](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/fileimpexptcs.png)

Navigate to **Project > Create Tests > Test Cases** to see all the imported test cases. 

Here’s a quick GIF demonstrating how to import test cases. 
![Import GIF](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Importtcs.gif)

[[info | **NOTE**:]]
|- If you are trying to update the Test Cases using Import/Export, make sure to keep the ID and UUID column intact so that the correct Test Case gets updated while importing back. You may change the other fields as required.
|- If you are trying to create new Test Cases in bulk, make sure to clear both the ID and UUID columns.

---
