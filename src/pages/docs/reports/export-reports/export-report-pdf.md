---
title: "Exporting PDF Reports"
page_title: "Unlock PDF Report Export with Screenshots for Test Analysis."
metadesc: "Enhance your testing insights by efficiently exporting comprehensive PDF reports with screenshots for in-depth test analysis. Follow simple steps."
noindex: false
order: 14.32
page_id: "exporting-test-reports-in-pdf-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Exporting Test Reports in PDF Format"
  url: "#exporting-test-reports-in-pdf-format"
- type: link
  name: "Test Data Details in the Report"
  url: "#test-data-details-in-the-report"
- type: link
  name: "How Reports Handle Renamed and Deleted Items"
  url: "#how-reports-handle-renamed-and-deleted-items"
---

---

In Testsigma, you can effortlessly export PDF reports with screenshots for your test runs. This documentation will guide you through exporting your test plan reports in the widely-used PDF format.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that you have referred to:
> 1. [Documentation on creaing test plans](https://testsigma.com/docs/test-plans/overview/).
> 2. [Documentation on creaing test runs](https://testsigma.com/docs/reports/runs/overview/) and having access to export test reports.

[[info | **NOTE**:]]
| Please contact us at **support@testsigma.com** or use the **Instant Chat** option to enable this exclusive feature provided by **Testsigma Enterprise**.

---

## **Exporting Test Reports in PDF Format**

1. From the left navigation bar, navigate to **Run Results**.
![Run Result](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_test_result_1.png)
2. Open the specific **Test Run** from the **Run Result** list page to export the test report file.
![Run Result](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_test_result_2.png)
3. Click the **Export** icon, and a dropdown list will appear.
![Export](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_test_result_3.png)
4. Select **PDF** from the dropdown list to initiate the export of the Test Plan results. 
![PDF](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_test_result_4.png)
5. In the **Export PDF** dialog box, select one of the following options under **Test step screenshots** and **Test step screenshots**, and click **Export**:
     - **Failed Step Screenshots [Recommended]**
     - **All Screenshots**
     - **No Screenshots** 
     ![Export](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_test_result_5.png)
[[info | **NOTE**:]]
| We recommend exporting screenshots in lower resolution to expedite report preparation and delivery.

6. Once you select, Testsigma will generate and automatically download a report in Excel format. Testsigma will notify you via **email** (using the email address associated with your Testsigma account) upon completion.
7. Click on the file named **(Test Plan Name with build run YYYYMMDD).pdf** to access the exported results. 

[[info | **NOTE**:]]
| To add a logo to the PDF report, navigate to **Settings** > **Customize Reports** and enable the **Customer Report** toggle.

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

