---
title: "Accessibility Testing for Android & iOS Applications"
page_title: "Accessibility Testing"
metadesc: "Learn how to implement and manage mobile accessibility testing in Testsigma. Mobile accessibility testing ensures your websites & apps comply with accessibility guidelines"
noindex: false
order: 27.2
page_id: "Accessibility Testing for Android & iOS"
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

With Testsigma, you can perform accessibility testing to ensure your iOS and Android mobile applications meet accessibility standards. You can enable accessibility checks at specific test steps to scan the application’s screen state at the exact point you want to validate. This article discusses how to perform Accessibility Testing for mobile applications in Testsigma.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that you have referred to:
> 1. You have enabled **Web Accessibility Testing - Step Level** from **Settings > Preferences > Web Accessibility Testing**.
> 2. [Documentation on creating test plans](https://testsigma.com/docs/test-management/test-plans/overview/).
> 3. [Documentation on creating test suite](https://testsigma.com/docs/test-management/test-suites/overview/).
> 4. [Documentation on creating test machines](https://testsigma.com/docs/test-management/test-plans/manage-test-machines/).

---

## **Steps to Enable Accessibility Testing in Test Steps**

1. From the left navigation bar, go to **Create Tests > Test Cases**.
   ![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Test_Cases_Mobile_Accessibility.png)

2. Open the test case in which you want to configure test steps for **Accessibility Testing**.
   ![Accessibility Testing](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Test_Cases_Page_Accessibility_Testing.png)

3. Hover over the test step, click **Kebab Menu**, and select **Test Step Settings** from the dropdown menu.
   ![Test Step Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Test_Step_Settings_Mobile_Accessibility.png)

4. Select **Enable Accessibility Testing for the Step**, and click **Update**.
   ![Update](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Enable_MAT.png)

[[info | **NOTE**:]]
| 1. You can also select **Enable Accessibility Testing for the Step** from **Bulk Select > Update Settings > Bulk Update Settings**.
|    ![Bulk Actions](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Bulk_Actions_MAT.png)
|
| 2. To select this option in the **Recorder**, go to **Test Step > Step Settings** and select **Enable Accessibility Testing for the Step**.
|    ![Option on Recorder](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Option_On_Recorder_MAT.png)

5. Repeat steps 3–4 for all test steps you want to configure in the required test cases.

6. After configuring test steps in the test cases, add them to a test suite, and then add test suites to a test plan.

[[info | **NOTE**:]]
| You can configure **Step Groups** for Accessibility Testing using the same steps. However, this feature is available only on the **Test Authoring** page and not in the **Recorder**.

---

## **Steps to Enable Accessibility Testing in Test Plans**

1. When creating a test plan, enable the **Accessibility Testing** toggle in **Additional Settings**. 
   ![Accessibility Testing](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/accessibility_testing/AT_mobile_n_2.png)

2. Expand the **WCAG Versions & Conformance Level** dropdown, and select the required version in **Additional Settings**.
   ![WCAG](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/accessibility_testing/AT_mobile_n_1.png)

3. To execute the test plan, click **Run Now**.
   ![Run Now](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/accessibility_testing/AT_mobile_2.1.png)
   
4. After the test plan execution completes, click **View Reports** for that test plan.
   ![View Report](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/accessibility_testing/AT_mobile_3.png)
   
5. On the **Report** page, click **View Report** in the bottom right corner to open a detailed **Accessibility Testing Report**.
   ![Report](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/accessibility_testing/AT_mobile_4.png)

---

## **Interacting with Accessibility Report**

The **Accessibility Report** page displays the results of your accessibility scans for Android and iOS applications. You can use this page to review errors, check severity levels, and identify the specific UI elements that need attention.

The page is organized into two main tabs: **Overview** and **All Issues**.

### **Overview Tab**

The **Overview** tab provides a visual summary of the test execution, helping you quickly check the overall status of the application.
   - **Issue Overview:** Displays a donut chart that summarizes all issues found during the test. The chart groups issues by severity: **Critical, Serious, Moderate, Minor,** and **Success**. ![Issue Overview](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/accessibility_testing/AT_mobile_5.png)
   - **Issues by WCAG Principle:** Organizes findings by WCAG principles, such as **Perceivable, Operable, Understandable,** and **Robust**. This section lists the specific criteria violations and the number of failed checks for each principle. ![Principle](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/accessibility_testing/AT_mobile_6.png)
   - **Issues by Components:** Categorizes issues by native UI element types. This helps you see if specific mobile components cause repeated errors. ![Components](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/accessibility_testing/AT_mobile_7.png)

### **All Issues Tab**

The **All Issues** tab displays a detailed list of every violation found. You can use this tab to investigate specific bugs and view relevant code. This tab includes search tools, an issues list, and a details pane.

   - #### **Search and Filter Options**
     The top bar helps you locate specific issues:
       - **Dropdown Filters:** Select **All TestCases** to view all issues, or select a specific test case to filter the results. ![Dropdown](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/accessibility_testing/AT_mobile_8.png)
       - **Filter and Search:** Select **Filters** to apply specific criteria, or use the **Search** box to find issues by keyword. ![Search](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/accessibility_testing/AT_mobile_9.png)
       - **View Options:** Use the status dropdown to filter the list by issue status. ![View Options](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/accessibility_testing/AT_mobile_15.png)

   - #### **Issues List**
     The main table on the left lists the violations based on your search criteria.
      - **WCAG Criteria:** Shows the specific rule ID. You can sort the list by this column.
      - **Check Description:** Provides a summary of the rule violation.
      - **Status:** Indicates the result of the check. 
      - **No of Checks:** Shows the number of times this specific issue occurred.
      - **Severity:** Displays a color-coded label indicating the impact level. ![Issue List](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/accessibility_testing/AT_mobile_11.png)

   - #### **Issue Details**
     When you select a row in the **Issues List**, the pane on the right displays detailed information to help you fix the bug.
      - **Previous / Next:** Select these buttons to look through all the instances of the single selected issue. If the No of Checks shows that the issue occurred multiple times, you can use these buttons to cycle through and inspect all of those instances.
      - **Description & Tags:** Shows the full definition of the violation, along with tags for the WCAG Version and Conformance Level.
      - **Affected Test Step:** Identifies the specific Test Case and Test Step where the failure occurred.
      - **Element Details:** Displays the actual native code for the element causing the issue.
      - **Screenshot:** Shows an image of the mobile screen element at the time the error was detected. ![Issue Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/accessibility_testing/AT_mobile_12.png)
  
### **Global Header Actions**

  The top-right corner of the page provides global actions for the report:
   - **Compare Runs:** Select this to compare the current report against previous test runs to track improvements. 
   - **Export:** Select the export icon to save the report data.![Header](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/accessibility_testing/AT_mobile_14.png)

---