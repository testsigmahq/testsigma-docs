---
title: "Custom PDF Report Generation"
pagetitle: "Custom PDF Report Generation: Step-by-Step Guide"
metadesc: "Learn how to generate custom PDF reports with detailed steps, prerequisites, and preferences for personalized reports in this comprehensive guide."
noindex: false
order: 13.28
page_id: "custom-pdf-report-generation"
search_keyword: ""
warning: false
contextual_links:
  - type: section
    name: "Contents"
  - type: link
    name: "Prerequisites"
    url: "#prerequisites"
  - type: link
    name: "Retrieving Result IDs"
    url: "#retrieving-result-ids"
  - type: link
    name: "Executing Custom PDF Report for Test Plans"
    url: "#executing-the-jar-file-for-test-plans"
  - type: link
    name: "Executing Custom PDF Report for Test Case, Test Suite, or Test Machine Level"
    url: "#executing-custom-pdf-report-for-test-case-test-suite-or-test-machine-level"
  - type: link
    name: "Using Preferences to Generate Custom PDF Report"
    url: "#using-preferences-to-generate-custom-pdf-report"
  - type: link
    name: "Preferences for Custom Report Generation"
    url: "#preferences-for-custom-report-generation"
---

---

Custom PDF Report Generator in Testsigma allows you to create detailed and customized reports according to your needs. This feature lets you generate reports for test cases, suites, or machines without restrictions. You can also adjust your reports using different preferences, making it a strong tool for in-depth analysis and presentation.

---

## **Prerequisites**

Before you begin, ensure you have the following:

- An [API Key ](https://testsigma.com/docs/reports/runs/filter-custom-reports/) from your Testsigma account.
- **Java 17** or a newer version installed on your system.
- You can request the **JAR file** from the Customer Support team and download it before executing a Custom PDF Report Generation.
- An **HTML template** for the PDF report.

<details style="border: 1px solid gray; border-radius: 4px; padding: 0.5em; margin: 0.5em 0; background-color: #f2f2f2;">
  <summary style="color: darkgreen; font-weight: bold; cursor: pointer;">
    <span style="margin-right: 5px;">ℹ️</span>Example HTML Template
  </summary>
  <div style="padding: 0.5em;">
    <!DOCTYPE HTML>
    <html xmlns:th="http://www.thymeleaf.org">

    <head>
        <style>
            @page {
                size: A3 landscape;
                background-color: #efefef;
            }

            body {
                text-align: center;
                font-family: 'Helvetica', sans-serif;
                background-color: #efefef;
            }

            .landing-page {
                position: relative;
                text-align: center;
            }

            .main-heading {
                color: #0c865d;
                position: absolute;
                top: 40%;
                left: 10%;
                font-size: 36px;
                font-weight: bold;
            }

            .report {
                width: 50%;
                margin: 0 auto;
            }

            .support {
                width: 60%;
                padding-top: 30%;
                margin: 0 auto;
            }

            a {
                text-decoration: none;
                color: blue;
            }

            table {
                table-layout: fixed;
                margin: 0 auto;
                width: 80%;
                border-collapse: collapse;
            }

            h1, h2 {
                color: #0c865d;
                text-align: left;
                margin-left: 5%;
            }

            .left {
                text-align: left;
                color: #304c64;
            }

            .right {
                text-align: right;
            }

            .fail {
                background-color: #fee2e2;
            }

            .highlight {
                background-color: #ecf8f3;
            }

            .row {
                background-color: #ffffff;
            }

            .report-table, .support-table {
                width: 50%;
                margin: 0 auto;
            }

            .report-table td, .support-table td {
                width: 50%;
                padding: 7px;
                border-top: 2px solid #efefef;
                word-wrap: break-word;
                text-align: left;
            }

            .report-table tr td:nth-child(odd) {
                text-align: left;
                color: #304c64;
            }

            .report-table tr td:nth-child(even) {
                text-align: right;
            }

            .support-table tr td:nth-child(odd) {
                text-align: left;
                color: #304c64;
                width: 30%;
            }

            .support-table tr td:nth-child(even) {
                text-align: right;
                width: 70%;
            }

            .message {
                color: dimgray;
                font-weight: bold;
                font-size: large;
                margin: 0 auto;
                padding: 10%;
            }

            th {
                font-weight: bold;
                word-wrap: break-word;
                padding: 7px;
                text-align: left;
            }

            tr {
                page-break-inside: avoid;
            }

            td {
                border-top: 2px solid #efefef;
                word-wrap: break-word;
                padding: 7px;
                text-align: left;
            }

            .support {
                table-layout: fixed;
                width: 30%;
                padding-top: 30%;
                margin: 0 auto;
            }
        </style>
    </head>

    <body>

        <img th:src="${relativePath + 'ts_logo.png'}" alt="Company Logo" style="height: 30px; margin-top: 10px;" />
        <div class="landing-page">
            <img th:src="${relativePath + 'ts_bg_landing_page.png'}" width="100%" alt="Full Size Image" />
            <div class="main-heading">
                <h1>EXECUTIVE</h1>
                <h1>REPORT</h1>
            </div>
        </div>

        <div class="report">

            <h1 th:text="${level + ' REPORT'}"></h1>
            <table class="report-table">
                <tr th:if="${#lists.contains(summaryField, 'name')}">
                    <td>Name</td>
                    <td th:text="${reportData.name != null ? reportData.name : 'N/A'}"></td>
                </tr>
                <tr th:if="${#lists.contains(summaryField, 'executor')}">
                    <td>Executed By</td>
                    <td th:text="${reportData.executor != null ? reportData.executor : 'N/A'}"></td>
                </tr>
                <tr th:if="${#lists.contains(summaryField, 'environment')}">
                    <td>Environment</td>
                    <td th:text="${reportData.environment != null ? reportData.environment : 'N/A'}"></td>
                </tr>
                <tr th:if="${#lists.contains(summaryField, 'testPlanName') && level != 'PLAN'}">
                    <td>Test Plan</td>
                    <td th:text="${reportData.testPlanName != null ? reportData.testPlanName : 'N/A'}"></td>
                </tr>
                <tr th:if="${#lists.contains(summaryField, 'testDeviceName') && level != 'MACHINE' && level != 'PLAN'}">
                    <td>Test Device</td>
                    <td th:text="${reportData.testDeviceName != null ? reportData.testDeviceName : 'N/A'}"></td>
                </tr>
                <tr th:if="${#lists.contains(summaryField, 'testSuiteName') && level == 'CASE'}">
                    <td>Test Suite</td>
                    <td th:text="${reportData.testSuiteName != null ? reportData.testSuiteName : 'N/A'}"></td>
                </tr>
                <tr th:if="${#lists.contains(summaryField, 'result')}">
                    <td>Result</td>
                    <td th:text="${reportData.result != null ? reportData.result : 'N/A'}"
                        th:style="'color: ' + ${reportData.resultColor} + ';'"></td>
                </tr>
                <tr th:if="${#lists.contains(summaryField, 'buildNo')}">
                    <td>Build No</td>
                    <td th:text="${reportData.buildNo != null ? reportData.buildNo : 'N/A'}"></td>
                </tr>
                <tr th:if="${#lists.contains(summaryField, 'runId')}">
                    <td>Run ID</td>
                    <td th:if="${reportData.url != null}">
                        <a th:href="${reportData.url}" target="_blank"
                            th:text="${reportData.runId != null ? reportData.runId : 'N/A'}"></a>
                    </td>
                    <td th:if="${reportData.url == null}" th:text="${reportData.runId != null ? reportData.runId : 'N/A'}">
                    </td>
                </tr>
                <tr th:if="${#lists.contains(summaryField, 'screenshotCapturedFor')}">
                    <td>Screenshot captured for</td>
                    <td th:text="${reportData.screenshot != null ? reportData.screenshot : 'N/A'}"></td>
                </tr>
                <tr th:if="${#lists.contains(summaryField, 'screenshotMode')}">
                    <td>Screenshot mode</td>
                    <td th:text="${reportData.screenshotMode != null ? reportData.screenshotMode : 'N/A'}"></td>
                </tr>
            </table>
            <br />
            <br />

            <div>
                <h2>OVERALL SUMMARY</h2>
                <img th:src="'data:image/png;base64,' + ${imageSrc}" alt="Chart Image" style="margin: 0 auto;" />
            </div>

        </div>

        <div style="page-break-before: always;"></div>

        <h2 th:if="${isNotTestCase}">TEST CASES LIST</h2>
        <table th:if="${isNotTestCase}">
            <tr class="highlight">
                <th style="width: 5%;"><img th:src="${relativePath + 'ts_icon_list_item.png'}" width="30" alt="Result" /></th>
                <th>Test Case</th>
                <th th:if="${#lists.contains(caseListColumns, 'testSuite')}">Test Suite</th>
                <th th:if="${#lists.contains(caseListColumns, 'testMachine')}">Test Machine</th>
                <th th:if="${#lists.contains(caseListColumns, 'assignee')}">Assignee</th>
                <th th:if="${#lists.contains(caseListColumns, 'reviewer')}">Reviewer</th>
            </tr>
            <tr th:each="testCaseResult : ${testCaseResultList}"
                th:class="${testCaseResult.result == 'FAILURE' ? 'fail' : 'row'}">
                <td style="width: 5%;">
                    <img th:src="${relativePath + testCaseResult.icon}" style="border-radius: 50%;" width="30"
                        alt="Result" />
                </td>
                <td th:text="${testCaseResult.testCase}"></td>
                <td th:if="${#lists.contains(caseListColumns, 'testSuite')}" th:text="${testCaseResult.testSuite}"></td>
                <td th:if="${#lists.contains(caseListColumns, 'testMachine')}" th:text="${testCaseResult.testMachine}">
                </td>
                <td th:if="${#lists.contains(caseListColumns, 'assignee')}" th:text="${testCaseResult.assignee}">
                </td>
                <td th:if="${#lists.contains(caseListColumns, 'reviewer')}" th:text="${testCaseResult.reviewer}">
                </td>
            </tr>
        </table>

        <div style="page-break-before: always;"></div>

        <div class="support">
            <h2>SUPPORT</h2>
            <table class="support-table">
                <tr>
                    <td>For any assistance, contact:</td>
                    <td>
                        <a href="mailto:support@example.com">support@example.com</a><br />
                        Phone: 123-456-7890
                    </td>
                </tr>
            </table>
        </div>

    </body>
    </html>

  </div>
</details>

---

## **Retrieving Result IDs**

To generate reports, you need specific IDs depending on the level of detail you want:

1. Navigate to the **Run Result** from which you want to retrieve the Run ID.
2. For **test plan** level reports, Use the Run ID directly from the Run Result page. You can find this in the Execution ID or the URL endpoint. Copy the Run ID from the Run Result page. ![retrieving runid for test plan level](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/testplan_run_id.cpr.gif)
3. For Test Machine, Test Suite, or Test Case level reports:
   - Right-click on the page and select **Inspect** to open Developer Tools.
   - Go to the **Network** tab.
   - In the Testsigma application, select the test case, suite, or test machine in the Run Result details page to get the response.
   - In the Developer Tools, under the **Network** tab, find the response results in the name section and click **Preview**.
   - Unhide the **Content** and copy the required **ID**. ![retrieving result ids](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/case-machine-suitelevel-id-cpr.gif)

---

## **Executing the JAR File for Test Plans**

Run the Custom Report Generator with the required inputs to create a PDF report. This step converts your HTML template into a PDF based on your preferences. To execute the JAR file, follow these steps:

1. Open Terminal or Command Prompt and navigate to the folder containing the JAR file.
2. Run the following command, replacing the placeholders with your actual values:

```bash
java -jar custom_pdf_generator-0.0.1-SNAPSHOT.jar \
  --config.apiKey=YOUR-API-KEY \
  --config.plan.runId=YOUR-PLAN-RUN-ID \
  --config.template.location=/path/to/your/template.html \
  --config.pdf.directory=/path/to/save/report.pdf
```

<br>
Replace the placeholders with your actual values:

- **YOUR-API-KEY**: Your API key for authentication with Testsigma.
- **YOUR-PLAN-RUN-ID**: The run ID of your test plan.
- **/path/to/your/template.html**: Path to your HTML template file.
- **/path/to/save/report.pdf**: Location where the generated PDF report will be saved.

---

## **Executing Custom PDF Report for Test Case, Test Suite, or Test Machine Level**

Generate reports at the Test Case, Test Suite, or Test Machine level by following these steps::

1. Get the Run ID as explained in the [Retrieving Result IDs](https://testsigma.com/docs/reports/runs/custom-pdf-report/#retrieving-result-ids) section.
2. Use the following command, including your specific preferences:

```bash
java -jar custom_pdf_generator-0.0.1-SNAPSHOT.jar \
  --config.apiKey=YOUR-API-KEY \
  --config.plan.runId=YOUR-PLAN-RUN-ID \
  --config.id=YOUR-ID \
  --config.preference.resultLevel=YOUR-PREFERENCE-RESULT-LEVEL \
  --config.template.location=/path/to/your/template.html \
  --config.pdf.directory=/path/to/save/report.pdf
```

<br>
Replace the placeholders with your actual values:

- **YOUR-API-KEY**: Your API key for authentication with Testsigma.
- **YOUR-PLAN-RUN-ID**: The run ID of your test plan.
- **YOUR-ID**: The specific ID for Test Case, Test Suite, or Test Machine level reports.
- **YOUR-PREFERENCE-RESULT-LEVEL**: Specifies the detail level of the report (CASE, MACHINE, SUITE).
- **/path/to/your/template.html**: Path to your HTML template file.
- **/path/to/save/report.pdf**: Location where the generated PDF report will be saved.

---

## **Using Preferences to Generate Custom PDF Report**

Customize your report content and structure using various preferences:

```bash
java -jar custom_pdf_generator-0.0.1-SNAPSHOT.jar \
  --config.apiKey=YOUR-API-KEY \
  --config.plan.runId=YOUR-PLAN-RUN-ID \
  --config.id=YOUR-ID \
  --config.preference.resultLevel=YOUR-PREFERENCE-RESULT-LEVEL \
  --config.preference.step=(YOUR-PREFERENCE-STEP) \
  --config.preference.screenshot=(YOUR-PREFERENCE-SCREENSHOT) \
  --config.preference.visualDifference=(YOUR-PREFERENCE-VISUAL-DIFFERENCE) \
  --config.preference.summaryFields=(YOUR-PREFERENCE-CASE-DETAILS-HEADERS) \
  --config.template.location=/path/to/your/template.html \
  --config.pdf.directory=/path/to/save/report.pdf
```

<br>
Replace the placeholders with your actual values:

- **YOUR-API-KEY**: Your API key for authentication with Testsigma.
- **YOUR-PLAN-RUN-ID**: The run ID of your test plan.
- **YOUR-ID**: The specific ID for Test Case, Test Suite, or Test Machine level reports.
- **YOUR-PREFERENCE-RESULT-LEVEL**: Specifies the detail level of the report (CASE, MACHINE, SUITE).
- **YOUR-PREFERENCE-STEP**:Defines the steps to include in the report. Possible values:
  - **PASSED**: Only include passed steps.
  - **FAILED**: Only include failed steps.
  - **EXECUTED**: Only include executed steps.
  - **NOT_EXECUTED**: Only include steps that were not executed.
  - **ALL**: Include all steps.
  - **NONE**: Exclude all steps.
- **YOUR-PREFERENCE-SCREENSHOT**: Defines which screenshots to include. Possible values:
  - **PASSED**: Only include screenshots for passed tests.
  - **FAILED**: Only include screenshots for failed tests.
  - **ALL**: Include all screenshots.
  - **NONE**: Exclude all screenshots.
- **YOUR-PREFERENCE-VISUAL-DIFFERENCE**: Defines which visual screenshots to include. Possible values:
  - **PASSED**: Only include visual screenshots for passed tests.
  - **FAILED**: Only include visual screenshots for failed tests.
  - **ALL**: Include all visual screenshots.
  - **NONE**: Exclude all visual screenshots.
- **YOUR-PREFERENCE-CASE-DETAILS-HEADERS**: Specifies which headers to include in case details. Example values:
  - **testCaseName**
  - **testSuiteName**
- **/path/to/your/template.html**: Path to your HTML template file.
- **/path/to/save/report.pdf**: Location where the generated PDF report will be saved.

---

## **Preferences for Custom Report Generation**

List of configurable preferences to tailor your PDF reports according to your needs.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }
        th {
            background-color: #f2f2f2;
        }
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        caption {
            font-weight: bold;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <table>
        <thead>
            <tr>
                <th>Preference</th>
                <th>Description</th>
                <th>Allowed Values</th>
                <th>Input Type</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>config.preference.resultLevel</td>
                <td>Defines the level of detail for the report</td>
                <td>PLAN, MACHINE, SUITE, CASE</td>
                <td>Single value</td>
            </tr>
            <tr>
                <td>config.preference.step</td>
                <td>Specifies which steps to include in the report</td>
                <td>PASSED, FAILED, EXECUTED, NOT_EXECUTED, ALL, NONE</td>
                <td>Single value</td>
            </tr>
            <tr>
                <td>config.preference.screenshot</td>
                <td>Indicates which screenshots to include</td>
                <td>PASSED, FAILED, ALL, NONE</td>
                <td>Single value</td>
            </tr>
            <tr>
                <td>config.preference.visualDifference</td>
                <td>Specifies which visual screenshots to include</td>
                <td>PASSED, FAILED, ALL, NONE</td>
                <td>Single value</td>
            </tr>
            <tr>
                <td>config.preference.summaryFields</td>
                <td>Fields to display in the report summary</td>
                <td>name, executedBy, environment, testPlanName, testDeviceName, testSuiteName, result, buildNo, runId, screenshotCapturedFor, screenshotMode</td>
                <td>Multi-value (comma-separated)</td>
            </tr>
            <tr>
                <td>config.preference.caseListColumns</td>
                <td>Columns to show in the test case list</td>
                <td>ETF, testSuite, testMachine, assignee, reviewer</td>
                <td>Multi-value (comma-separated)</td>
            </tr>
            <tr>
                <td>config.preference.caseDetailsHeaders</td>
                <td>Columns to show in case details headers</td>
                <td>testCaseName, testSuiteName</td>
                <td>Multi-value (comma-separated)</td>
            </tr>
            <tr>
                <td>config.preference.stepListColumns</td>
                <td>Columns to show in the step list</td>
                <td>reasonForFailure, testDataDetails, duration, apiResponseUrl</td>
                <td>Multi-value (comma-separated)</td>
            </tr>
        </tbody>
    </table>
</body>
</html>

---
