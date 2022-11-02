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
  name: "Export test case"
  url: "#export-test-case"
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

---
##**Import test cases**

From the Test Cases list, click on the Import button on the top right corner to open the Import Dialog as shown below:

![Test-Cases-Import-Dialog](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/overview/import_test_case.png)

&emsp;


 1. Click on the **Choose File** button to upload the test case import file.


[[info | Note:]]
|We need to use a specific test case import template for importing the data. Click on the Sample File link to download the test case Import file template, update your test cases data and re-upload the file to Import your test cases.

 2. Click on the **Import** button to import the Test Cases. You would see a success notification saying that the Import has been successfully completed. The Import would happen in the background after which you will be notified by email.
    
  If the import has failed due to some reason, you will receive an email with the reason for the failure.

&emsp;

---
##**Export test case**

From the Test cases list, click on the **Export** button on the top right corner to open the Export Dialog as shown below:

![Test-Case-Export-Dialog](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/overview/export_test_case.png)
&emsp;

We have two options here:

 * **Test Case XLS Export** - Export the Test Cases to a Spreadsheet file. Use this option for exporting the Test Cases and importing them back later with or without changes to the Test Case Details.
 * **Test Case XML Export** - Back up the Test Case data in XML Format.
  
&emsp;

We will go ahead with the first option in this case. Clicking on the first option shows a message saying that the Test Case Export has been started successfully. The Export would happen in the background after which you will be notified by email.

If the export has failed due to some reason, you will receive an email with the reason for the failure












