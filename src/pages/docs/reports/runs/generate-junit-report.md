---
title: "Generate Custom JUnit Report"
pagetitle: "Generate Custom JUnit Report in Testsigma"
metadesc: "Learn how to generate JUnit-compatible XML reports from Testsigma test plan results to integrate with CI/CD pipelines like Jenkins, GitHub Actions, and GitLab CI."
noindex: false
order: 14.30
page_id: "generate-custom-junit-report"
search_keyword: ""
warning: false
contextual_links:
  - type: section
    name: "Contents"
  - type: link
    name: "Prerequisites"
    url: "#prerequisites"
  - type: link
    name: "Retrieve the Run ID"
    url: "#retrieve-the-run-id"
  - type: link
    name: "Generate the Report"
    url: "#generate-the-report"
  - type: link
    name: "Parameters"
    url: "#parameters"
  - type: link
    name: "What the Report Includes"
    url: "#what-the-report-includes"
  - type: link
    name: "Use in CI/CD"
    url: "#use-in-cicd"
---

---

The Custom JUnit Report Generator in Testsigma creates JUnit-compatible XML reports from test plan results. These reports integrate with CI/CD tools, enabling pipelines to consume and display test results. Use this format when you need standardized automation workflows and reporting in external systems.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that:
> 1. You have a valid Testsigma API key. Refer to the [documentation on generating API keys](https://testsigma.com/docs/configuration/api-keys/).
> 2. **Java 21** or a newer version is installed on your system.
> 3. You have the **custom report JAR file**. Contact the Customer Support team to obtain it.
> 4. A **JUnit XML template file** is available on your system.

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
  --config.report.type=JUNIT \
  --config.template.location=/path/to/junit-template.html \
  --config.report.output.file=/path/to/output/report.xml
```

**Windows:**
```bash
java -jar custom-report-0.0.6.jar --config.plan.runId=YOUR-RUN-ID --config.apiKey=YOUR-API-KEY --config.report.type=JUNIT --config.template.location=C:\path\to\junit-template.html --config.report.output.file=C:\path\to\output\report.xml
```

---

## **Parameters**

| Parameter | Required | Description |
|-----------|----------|-------------|
| config.plan.runId | Yes | Run ID of the test plan execution |
| config.apiKey | Yes | Testsigma API key |
| config.report.type | Yes | Must be set to `JUNIT` |
| config.template.location | Yes | Path to the JUnit XML template file |
| config.report.output.file | Yes | Output path for the XML report |
| config.baseURL | No | Testsigma instance URL (default: `https://app.testsigma.com/`) |

---

## **What the Report Includes**

- **Suites**: Test results grouped by test suites with execution summary
- **Test Cases**: Individual test results with status and execution time
- **Failures**: Error details for failed test cases
- **Properties**: Additional metadata such as linked external IDs

---

## **Use in CI/CD**

The generated JUnit XML report works with Jenkins, GitHub Actions, and GitLab CI for publishing test results.

**GitHub Actions Example:**
```yaml
- name: Generate JUnit Report
  run: |
    java -jar custom-report-0.0.6.jar \
      --config.plan.runId=${{ env.RUN_ID }} \
      --config.apiKey=${{ secrets.TESTSIGMA_API_KEY }} \
      --config.report.type=JUNIT \
      --config.template.location=${{ github.workspace }}/junit-template.html \
      --config.report.output.file=${{ github.workspace }}/test-results/report.xml
```

---