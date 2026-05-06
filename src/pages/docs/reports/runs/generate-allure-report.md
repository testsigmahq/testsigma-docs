---
title: "Generate Custom Allure Reports"
pagetitle: "Generate Custom Allure Reports in Testsigma"
metadesc: "Learn how to generate interactive, browser-based Allure reports from Testsigma test plan results using the custom report JAR file."
noindex: false
order: 14.29
page_id: "generate-custom-allure-reports"
search_keyword: ""
warning: false
contextual_links:
  - type: section
    name: "Contents"
  - type: link
    name: "Prerequisites"
    url: "#prerequisites"
  - type: link
    name: "Available Output Formats"
    url: "#available-output-formats"
  - type: link
    name: "Retrieve the Run ID"
    url: "#retrieve-the-run-id"
  - type: link
    name: "Generate the Report"
    url: "#generate-the-report"
  - type: link
    name: "What the Report Includes"
    url: "#what-the-report-includes"
---

---

The Custom Allure Report Generator in Testsigma produces interactive, browser-based reports from test plan results. Reports include comprehensive execution details, screenshots, and visual analytics, making them suitable for in-depth analysis and stakeholder sharing.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that:
> 1. You have a valid Testsigma API key. Refer to the [documentation on generating API keys](https://testsigma.com/docs/configuration/api-keys/).
> 2. **Java 21** or a newer version is installed on your system.
> 3. You have the **custom report JAR file**. Contact the Customer Support team to obtain it.

---

## **Available Output Formats**

The generator supports two output formats:

| Format | Description |
|--------|-------------|
| **ALLURE_HTML** | Self-contained, browser-viewable report. Use this for sharing with stakeholders. |
| **ALLURE_JSON** | Raw data files for CI/CD integration or further processing. |

---

## **Retrieve the Run ID**

1. Navigate to the **Run Result** page of your test plan.
2. Copy the Run ID from the **Execution ID** field or from the page URL.

---

## **Generate the Report**

1. Open **Terminal** (Mac/Linux) or **Command Prompt** (Windows).
2. Navigate to the folder containing the JAR file.
3. Run the command for your operating system.

**Mac/Linux:**
```bash
java -jar custom-report-0.0.6.jar \
  --config.plan.runId=YOUR-RUN-ID \
  --config.apiKey=YOUR-API-KEY \
  --config.report.type=ALLURE_HTML \
  --config.report.output.directory=/path/to/output/
```

**Windows:**
```bash
java -jar custom-report-0.0.6.jar --config.plan.runId=YOUR-RUN-ID --config.apiKey=YOUR-API-KEY --config.report.type=ALLURE_HTML --config.report.output.directory=C:\path\to\output\
```

Replace the placeholders with your actual values:

- **YOUR-RUN-ID**: The Run ID of your test plan execution.
- **YOUR-API-KEY**: Your Testsigma API key.
- **/path/to/output/**: Directory where the report files will be saved.

To generate a JSON report instead, replace `ALLURE_HTML` with `ALLURE_JSON` in the command.

---

## **What the Report Includes**

Generated Allure reports contain:

- Test execution summaries with pass/fail metrics
- Suite-level grouping and timing data
- Individual test step execution details
- Failure screenshots and categorization
- Visual charts and execution timelines

---