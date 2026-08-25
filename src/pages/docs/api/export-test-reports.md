---
title: "Export Test Reports Using the API"
page_title: "Export Test Reports via API in Testsigma"
metadesc: "Learn how to export Testsigma test reports in XML, PDF, or Excel format at any result level using REST APIs."
noindex: false
order: 23.8
page_id: "export-test-reports-using-api"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Report Parameters"
  url: "#report-parameters"
- type: link
  name: "Report Generation Flow"
  url: "#report-generation-flow"
- type: link
  name: "Retrieve the Result IDs"
  url: "#retrieve-the-result-ids"
- type: link
  name: "API Specification"
  url: "#api-specification"
- type: link
  name: "Report Structure in XML Format"
  url: "#report-structure-in-xml-format"
- type: link
  name: "Response Codes"
  url: "#response-codes"
- type: link
  name: "Migrate from the JUnit Endpoint"
  url: "#migrate-from-the-junit-endpoint"
---

---

[[info | NOTE:]]
| To enable PDF report export, contact **support@testsigma.com**. This feature is available with **Testsigma Enterprise**.

Testsigma allows you to export test reports in XML, PDF, or Excel format at any result level using REST APIs. This article discusses generating and downloading reports using APIs in Testsigma.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that:
> 1. An API key exists for your Testsigma account. Refer to the [documentation on generating API keys](https://testsigma.com/docs/configuration/api-keys/).
> 2. The test plan run is complete.
> 3. The result ID for the level you want to export is available. Refer to [Retrieve the Result IDs](#retrieve-the-result-ids) for test machine and test suite exports, or to the [documentation on fetching test results at all levels](https://testsigma.com/docs/api/test-results-at-all-levels/).
> 4. PDF report export is enabled for your account, if you export in PDF format.

---

## **Report Parameters**

Before we check the actual requests, let's go through the parameters that you will find in the request and response.

- **format:** Format of the exported report. Either one of 'xml', 'pdf', or 'xlsx'. Defaults to 'pdf'.
- **screenshot:** Test step screenshots to include in a PDF report. Either one of 'ALL\_TYPES', 'FAILED\_STEPS', or 'NONE'.
- **visualScreenshot:** Visual testing screenshots to include in a PDF report. Either one of 'ALL\_TYPES', 'FAILED\_STEPS', or 'NONE'.
- **resolution:** Resolution of the screenshots in a PDF report. Either 'LOW' or 'HIGH'.
- **status:** Generation state of the report in the response. Either one of 'IN\_PROGRESS', 'SUCCESS', or 'FAILED'.
- **reportId:** ID of the generated report, returned once generation succeeds.
- **url:** Download endpoint for the generated report.

[[info | NOTE:]]
| The **screenshot**, **visualScreenshot**, and **resolution** parameters apply to 'pdf' only. The 'xml' and 'xlsx' formats accept them and ignore them, so the request does not fail.

---

## **Report Generation Flow**

Report generation is asynchronous. The same endpoint both triggers the report and returns its progress.

1. Send the export request for the level you want. Testsigma returns **202** and starts generating the report.
2. Send the same request again until **status** changes from 'IN\_PROGRESS' to 'SUCCESS'.
3. Send a request to the **url** from the response to download the artifact.

[[info | NOTE:]]
| A generation failure returns **200** with **"status": "FAILED"** rather than a server error. Check the **status** field in every response instead of relying on the HTTP status code alone.

---

## **Retrieve the Result IDs**

The test machine and test suite result IDs are not exposed in the UI. Retrieve them from the network requests that the **Run Results** page sends, then use them in the export endpoint for that level.

[[info | NOTE:]]
| The test plan run ID is available in the URL of the **Run Results** page. Refer to the [documentation on obtaining the run ID](https://testsigma.com/docs/api/test-plans/#obtaining-the-run-id).

### **Retrieve the Test Machine Result ID**

1. Open the completed test plan run on the **Run Results** page.
2. From the view dropdown, select **Test Machines**.
3. Select the test machine you want to export.
4. Open the browser developer tools and go to the **Network** tab.
5. Clear the network log.
6. Reload the page.
7. Select the **Environments** request in the network log.
8. In the **Preview** panel, copy the machine result ID from the response.

<!-- Screenshot needed: DevTools Network tab with the Environments request selected and the Preview panel open, with the machine result ID field highlighted. -->

9. Use the copied value as **{MACHINE\_RESULT\_ID}** in the export request.

### **Retrieve the Test Suite Result ID**

1. Open the completed test plan run on the **Run Results** page.
2. From the view dropdown, select **Test Suites**.
3. Select the test suite you want to export.
4. Open the browser developer tools and go to the **Network** tab.
5. Clear the network log.
6. Reload the page.
7. Select the **Test Suite** request in the network log.
8. In the **Preview** panel, copy the test suite result ID from the response.

<!-- Screenshot needed: DevTools Network tab with the Test Suite request selected and the Preview panel open, with the suite result ID field highlighted. -->

9. Use the copied value as **{SUITE\_RESULT\_ID}** in the export request.

[[info | NOTE:]]
| The test case result ID follows the same pattern at the test case level. Refer to the [documentation on fetching test results at all levels](https://testsigma.com/docs/api/test-results-at-all-levels/) for the response fields at each level.

---

## **API Specification**

### **Export a Test Plan Run Report**

This endpoint generates a report for an entire test plan run.

|**Request Type**|**GET**|
|---|---|
|**Endpoint**|https://app.testsigma.com/api/v1/reports/execution_result/{RUN_ID}?format=xlsx|
|**Authorization**|Bearer {API_Token}|
|**Response Body**|{<br>&emsp;"status": "IN\_PROGRESS"<br>}|

**{RUN_ID}** is the ID of the test plan run you want to export.

### **Export a Test Machine Report**

This endpoint generates a report for a single test machine within a run.

|**Request Type**|**GET**|
|---|---|
|**Endpoint**|https://app.testsigma.com/api/v1/reports/environment_result/{MACHINE_RESULT_ID}?format=xlsx|
|**Authorization**|Bearer {API_Token}|

**{MACHINE\_RESULT\_ID}** is the ID of the test machine result you want to export.

### **Export a Test Suite Report**

This endpoint generates a report for a single test suite within a run.

|**Request Type**|**GET**|
|---|---|
|**Endpoint**|https://app.testsigma.com/api/v1/reports/suite_result/{SUITE_RESULT_ID}?format=xlsx|
|**Authorization**|Bearer {API_Token}|

**{SUITE\_RESULT\_ID}** is the ID of the test suite result you want to export.

### **Export a Test Case Report**

This endpoint generates a report for a single test case within a run.

|**Request Type**|**GET**|
|---|---|
|**Endpoint**|https://app.testsigma.com/api/v1/reports/case_result/{CASE_RESULT_ID}?format=xlsx|
|**Authorization**|Bearer {API_Token}|

**{CASE\_RESULT\_ID}** is the ID of the test case result you want to export.

### **Check Report Status**

Send the original export request again to check progress. Once generation succeeds, the response carries the report ID and the download endpoint.

|**Request Type**|**GET**|
|---|---|
|**Endpoint**|https://app.testsigma.com/api/v1/reports/execution_result/{RUN_ID}?format=xlsx|
|**Authorization**|Bearer {API_Token}|
|**Response Body**|{<br>&emsp;"status": "SUCCESS",<br>&emsp;"reportId": 4821,<br>&emsp;"url": "https://app.testsigma.com/api/v1/reports/download/4821"<br>}|

[[info | NOTE:]]
| Send the status request with the same **format** and screenshot options as the original request. Changing them requests a different report.

### **Export a PDF Report with Screenshot Options**

This endpoint generates a PDF report with the screenshots and resolution you specify.

|**Request Type**|**GET**|
|---|---|
|**Endpoint**|https://app.testsigma.com/api/v1/reports/execution_result/{RUN_ID}?format=pdf&screenshot=FAILED\_STEPS&visualScreenshot=NONE&resolution=LOW|
|**Authorization**|Bearer {API_Token}|

[[info | NOTE:]]
| Use 'LOW' resolution to shorten report generation time. Reports at 'HIGH' resolution take longer to generate and download.

### **Download the Report**

This endpoint returns the generated report artifact. It redirects to a short-lived download link.

|**Request Type**|**GET**|
|---|---|
|**Endpoint**|https://app.testsigma.com/api/v1/reports/download/{REPORT_ID}|
|**Authorization**|Bearer {API_Token}|

**{REPORT_ID}** is the **reportId** returned in the status response.

[[info | NOTE:]]
| The download link expires. Follow the redirect within the same request rather than storing the link for later use. Each call to this endpoint generates a fresh link, so the same **{REPORT_ID}** stays valid for repeat downloads.

### **Get JUnit Report (Deprecated)**

This endpoint returns the JUnit XML report for a test plan run. It is deprecated and its responses carry **Deprecation**, **Sunset**, and **Link** headers.

|**Request Type**|**GET**|
|---|---|
|**Endpoint**|https://app.testsigma.com/api/v1/reports/junit/{RUN_ID}|
|**Authorization**|Bearer {API_Token}|

---

## **Report Structure in XML Format**

The XML report nests results in execution order, from the test plan down to individual steps.

```
<testPlan>
  <testMachines>
    <testMachine>
      <testSuites>
        <testSuite>
          <testCase>
            <steps>
```

When you export below the plan level, the report starts at the level you requested. A test suite export returns a **testSuite** root with its test cases and steps.

For data-driven test cases, the **testCase** element carries the test data used for that iteration.

|**Attribute**|**Description**|
|---|---|
|testDataProfile|Name of the test data profile the test case ran against|
|testDataSet|Name of the data set within that profile|

[[info | NOTE:]]
| Both attributes are omitted for test cases that don't use a test data profile, and for runs that executed before this release where the profile has since been deleted.

[[info | NOTE:]]
| This is the Testsigma XML schema, not JUnit XML. Pipeline steps that parse JUnit output do not accept this file.

---

## **Response Codes**

|**Code**|**Description**|
|---|---|
|**202**|Report generation started. Send the same request again to check progress.|
|**200**|Read the **status** field for 'IN\_PROGRESS', 'SUCCESS', or 'FAILED'.|
|**400**|The format or an option value isn't recognized.|
|**401**|The API key is missing or invalid.|
|**403**|PDF report export isn't enabled for your account.|
|**404**|The result ID doesn't exist, or it belongs to another account.|
|**409**|The run isn't complete yet.|

---

## **Migrate from the JUnit Endpoint**

Move pipelines from **/api/v1/reports/junit/{RUN_ID}** to **/api/v1/reports/execution\_result/{RUN\_ID}** before the sunset date in the response header. The JUnit output itself is unchanged until then.

[[info | NOTE:]]
| The Testsigma XML report replaces the JUnit endpoint but uses a different schema. If your pipeline publishes results with a JUnit parser, such as the **Publish Test Results** task in Azure DevOps, keep using the JUnit endpoint until you update that step.

---
