---
title: "Exporting MS Excel Sheet Reports"
page_title: "Effortlessly Export Excel Reports for Test Run Analysis"
metadesc: "Start exporting XLSX reports for detailed test run analysis. Follow simple steps in Testsigma to generate Excel reports. Enhance your testing insights now."
noindex: false
order: 14.31
page_id: "exporting-test-reports-in-excel-xlsx-format-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Exporting Test Reports in Excel Format"
  url: "#exporting-test-reports-in-excel-format"
- type: link
  name: "Test Data Details in the Report"
  url: "#test-data-details-in-the-report"
- type: link
  name: "How Reports Handle Renamed and Deleted Items"
  url: "#how-reports-handle-renamed-and-deleted-items"
---

---

Effortlessly generate detailed Excel reports for your test runs in Testsigma. This documentation guides you step-by-step on exporting your test plan reports in the widely-used xlsx format.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that you have referred to:
> 1. [Documentation on creaing test plans](https://testsigma.com/docs/test-plans/overview/).
> 2. [Documentation on creaing test runs](https://testsigma.com/docs/reports/runs/overview/) and having access to export test reports.

[[info | **NOTE**:]]
| Please contact us at **support@testsigma.com** or use the **Instant Chat** option to enable this exclusive feature provided by **Testsigma Enterprise**.

---

## **Exporting Test Reports in Excel Format**

1. Navigate to **Run Results**.
   ![Run Results](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_ms_excel_1.png)

2. Open the specific **Test Run** from the **Run Result** list page to export the test report file.
   ![Test Run](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_ms_excel_2.png)

3. Click the **Export** icon, and select **MS Excel Sheet** from the dropdown list to initiate the export of the Test Plan results. 
   ![Export reports in XLS](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_ms_excel_3.png)

4. Once you select, Testsigma will generate and automatically download a report in Excel format. Testsigma will notify you via **email** (using the email address associated with your Testsigma account) upon completion. 

5. Click on the file named **(Test Plan Name).xlsx** to access the exported results.

   ![XLS report notification email with download link for the exported Test Plan results](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/notify_excel_exportrepot.png)

[[info | NOTE:]]
| If you choose to rerun the test cases from the reports, the rerun results will also be consolidated into the exported reports.

---

## **Test Data Details in the Report**

For data-driven test cases, the report includes the test data used for each iteration at the test case level.

|**Field**|**Description**|
|---|---|
|Test Data Profile|Name of the test data profile the test case ran against|
|Test Data Set|Name of the data set within that profile|

[[info | **NOTE**:]]
| These fields appear for data-driven test cases only. Test cases that don't use a test data profile omit them.

---

## **How Reports Handle Renamed and Deleted Items**

A report captures its inputs as they were when the run executed. Renaming or deleting a test plan, test suite, test case, environment, test machine, or test data profile after a run doesn't change the report for that run, and exporting the same run again reproduces the same document.

[[info | **NOTE**:]]
| User names are the exception. Reports always show a user's current name, so renaming a user updates their name in existing reports.

**Additional Information:** Runs that executed before this release fall back to the current name of each item. If an item from one of those older runs has since been deleted, the report shows a hyphen (-) in that field and the rest of the report renders normally.

---
