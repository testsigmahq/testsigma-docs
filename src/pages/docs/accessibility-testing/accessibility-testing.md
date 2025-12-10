---
title: "Accessibility Testing for Web Applications"
page_title: "Accessibility Testing"
metadesc: "Learn how to implement and manage accessibility testing in Testsigma. Accessibility testing ensures your websites & apps comply with accessibility guidelines"
noindex: false
order: 27.1
page_id: "Accessibility Testing"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Enable Accessibility Testing in Test Steps"
  url: "#steps-to-enable-accessibility-testing-in-test-steps"
- type: link
  name: "Steps to Enable Accessibility Testing in Test Plans"
  url: "#steps-to-enable-accessibility-testing-in-test-plans"
- type: link
  name: "Interacting with Accessibility Report"
  url: "#interacting-with-accessibility-report"
---

---

With Testsigma, you can perform accessibility testing to ensure your web applications meet accessibility standards. You can enable accessibility checks at specific test steps to scan the application’s state at the exact point you want to validate. This article discusses how to perform Accessibility Testing for web applications in Testsigma.

[[info | **NOTE**:]]
| The entire workflow for enabling accessibility testing, running test plans, and reviewing the detailed report is the same for the **Salesforce** application.

---


> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that you have referred to: 
> 1. You have enabled **Web Accessibility Testing - Step Level** from **Settings > Preferences > Web Accessibility Testing**.
> 2. [Documentation on creating test plans](https://testsigma.com/docs/test-management/test-plans/overview/).
> 3. [Documentation on creating test suites](https://testsigma.com/docs/test-management/test-suites/overview/).
> 4. [Documentation on creating test machine](https://testsigma.com/docs/test-management/test-plans/manage-test-machines/).

---

## **Steps to Enable Accessibility Testing in Test Steps**

1. From the left navigation bar, go to **Create Tests > Test Cases**.
   ![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/accessibility_testing/AT_web_1.png)

2. In the Test Case Explorer section, expand a **Feature** and a **Scenario** and select the required test case. 
   ![Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/accessibility_testing/AT_web_2.png)

3. On the Test Case Details page, select the test steps for which you want to enable accessibility testing, and then click **Update Settings**.
   ![Update Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/accessibility_testing/AT_web_3.png)

4. In the **Bulk Update Settings** overlay, select the **Enable Accessibility Testing for the step** checkbox and click **Update**. 
   ![Update](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/accessibility_testing/AT_web_4.png)

[[info | **NOTE**:]]
| You can also enable accessibility testing for an individual step directly from the step’s settings.

---

## **Steps to Enable Accessibility Testing in Test Plans**

1. When creating a test plan, enable the **Accessibility Testing** toggle, expand the **WCAG Versions & Conformance Level** dropdown, and select the required version in **Additional Settings**.
  ![Accessibility Testing](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/accessibility_testing/AT_web_5.png)  

2. To execute the test plan, click the **Run Now** button.
   ![Run Now](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/accessibility_testing/AT_web_6.png)

3. Once the test plan execution is complete, click **View Reports** for that test plan.
   ![View Report](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/accessibility_testing/AT_web_7.png)

4. On the report page, click **View Report** in the bottom corner to open a detailed accessibility testing report.
   ![View Report](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/accessibility_testing/AT_web_8.png)
---

## **Interacting with Accessibility Report**

The **Accessibility Report** page displays the results of your accessibility report. It allows you to review errors, check severity levels, and identify the specific user interface elements that need attention.

The page is organized into two main tabs: **Overview** and **All Issues**.

### **Overview Tab**

The **Overview** tab provides a visual summary of the test execution. Use this tab to quickly check the overall status of the application.

   - **Issue Overview:** Displays a donut chart that summarizes all issues found during the test. The chart groups issues by severity: **Critical, Serious, Moderate, Minor,** and **Success**. ![Issue overview](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/accessibility_testing/AT_web_9.png)
   - **Issues by WCAG Principle:** Organizes findings by WCAG principles, such as **Perceivable, Operable, Understandable,** and **Robust**. This section lists the specific criteria violations and the number of failed checks for each principle. ![WCGA](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/accessibility_testing/AT_web_10.png)
   - **Issues by Pages:** Lists every URL scanned during the test and the number of accessibility checks that failed on that page. You can use this list to find pages with the most errors. ![Pages](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/accessibility_testing/AT_web_11.png)
   - **Issues by Components:** Categorizes issues by HTML element types. This helps you see if specific code components cause repeated errors.![Components](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/accessibility_testing/AT_web_12.png)

### **All Issues Tab**

The **All Issues** tab displays a detailed list of every violation found. You can use this tab to investigate specific bugs and view relevant code. This tab includes search tools, an issues list, and a details pane.

   - #### **Search and Filter Options**
     The top bar helps you locate specific issues:
      - **Dropdown Filters:** Select **All TestCases** or **All Pages** to view all issues. You can also select a specific test case or page to filter the results for that item only.![Dropdown filters](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/accessibility_testing/AT_web_13.png)
      - **Filter and Search:** Select **Filters** to apply specific criteria, or use the **Search** box to find issues by keyword.![Search](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/accessibility_testing/AT_web_14.png)
      - **View Options:** The **Step Level** label confirms the issues are currently being shown at the test step level. You can use the status dropdown to filter the list by issue status.![View options](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/accessibility_testing/AT_web_15.png)

   - #### **Issues List**
     The main table on the left lists the violations based on your search criteria.
      - **WCAG Criteria:** Shows the specific rule ID. You can sort the list by this column.
      - **Check Description:** Provides a summary of the rule violation.
      - **Status:** Indicates the result of the check. 
      - **No of Checks:** Shows the number of times this specific issue occurred.
      - **Severity:** Displays a color-coded label indicating the impact level. ![Issue List](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/accessibility_testing/AT_web_16.png)


   - #### **Issue Details**
     When you select a row in the **Issues List**, the pane on the right displays detailed information to help you fix the issue.

      - **Previous / Next:** Select these buttons to look through all the instances of the single selected issue. If the **No of Checks** shows that the issue occurred multiple times (e.g., 15 times), you can use these buttons to cycle through and inspect all of those instances.
      - **Description:** Displays the full definition of the violation.
      - **Tags:** Shows the **WCAG Version**, the **Conformance Level**, and the specific Rule ID.
      - **Affected Test Step:** Identifies the specific Test Case and Test Step where the failure occurred. 
      - **Element Details:** Displays the HTML code details for the element causing the issue.
      - **Screenshot:** Shows an image of the page element at the time the error was detected.![Issue Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/accessibility_testing/AT_web_17.png)

### **Global Header Actions**

The top-right corner of the page provides global actions for the report:
   - **Compare Runs:** Select this to compare the current report against previous test runs to track improvements. 
   - **Export:** Select the export icon to save the report data.![Header](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/accessibility_testing/AT_web_18.1.png)

---
