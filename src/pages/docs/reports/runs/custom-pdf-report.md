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

> ## **Prerequisites**
>
> Before you begin, ensure you have the following:
>
> - An [API Key ](https://testsigma.com/docs/reports/runs/filter-custom-reports/) from your Testsigma account.
>
> - **Java 17** or a newer version installed on your system.
>
> - You can request the **JAR file** from the Customer Support team and download it before executing a Custom PDF Report Generation.
> 
> - An **HTML template** for the PDF report. [Click here](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Custom_Report_Template.txt) to download the HTML template. 

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
2. Run the following command,<br>
   - **For Mac**
    ```bash
    java -jar custom_pdf_generator-0.0.1-SNAPSHOT.jar \
      --config.apiKey=YOUR-API-KEY \
      --config.plan.runId=YOUR-PLAN-RUN-ID \
      --config.template.location=/path/to/your/template.html \
      --config.pdf.directory=/path/to/save/report.pdf
    ```

   - **For Windows**
    ```bash
    java -jar custom_pdf_generator-0.0.1-SNAPSHOT.jar --config.apiKey=<API-KEY> --config.plan.runId=97040 --config.template.location=/path/to/template.html --config.pdf.directory=/path/to/save/report.pdf
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
