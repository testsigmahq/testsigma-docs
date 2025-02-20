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
  name: "Configuring Test Steps for Accessibility Testing"
  url: "#configuring-test-steps-for-accessibility-testing"
- type: link
  name: "Configuring a Test Plan for Accessibility Testing"
  url: "#configuring-a-test-plan-for-accessibility-testing"
- type: link
  name: "Accessibility Rules"
  url: "#accessibility-rules"
---

---

With Testsigma, you can implement accessibility testing for Android and iOS applications to ensure compliance with accessibility guidelines. This allows you to test and monitor the accessibility of mobile applications, enhancing the user experience for individuals with disabilities. This article describes how to perform mobile accessibility testing in Testsigma.

---


> ## **Prerequisites**
>
> Before you proceed, ensure you understand the concepts of creating a [Test Plan](https://testsigma.com/docs/test-management/test-plans/overview/), [Test Suite](https://testsigma.com/docs/test-management/test-suites/overview/), and [Test Machine](https://testsigma.com/docs/test-management/test-plans/manage-test-machines/).

---

## **Configuring Test Steps for Accessibility Testing**

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

1. Repeat steps 3–4 for all test steps you want to configure in the required test cases.

2. After configuring test steps in the test cases, add them to a test suite, and then add test suites to a test plan.

[[info | **NOTE**:]]
| You can configure **Step Groups** for Accessibility Testing using the same steps. However, this feature is available only on the **Test Authoring** page and not in the **Recorder**.


---

## **Configuring a Test Plan for Accessibility Testing**

1. While creating a test plan, turn on the **Accessibility Testing** toggle in **Additional Settings**.
   
   ![Additional Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Accessibility_Testing_Toggle_Mobile.png)


2. To execute the test plan, click **Run Now**.
   
   ![Run Now](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Run_Now_MAT.png)


3. After the test plan execution completes, click **View Reports** for that test plan.
   
   ![View Reports](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Reports_MAT.png)


4. On the **Report** page, click **View Report** in the bottom right corner to open a detailed **Accessibility Testing Report**.
   
   ![Accessibility Testing Report](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/View_Reports_MAT.png)


---

## **Interacting with Accessibility Report**

### **Top Bar**

![Top Bar](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Report_Name_MAT.png)

- **Title**: Displays the title of the report (e.g., Demo MAT).

- **Run Information**: Indicates the specific test run ID (e.g., Run - 45).

---

### **Test Cases Dropdown**

![Test Cases Dropdown](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/TestCases_Dropdown_MAT.png)

- This dropdown helps you filter the report by specific test cases that are tested for accessibility compliance. 

   [[info | **NOTE**:]]
   | By default, all test cases are selected, but you can choose a specific test case from the dropdown to focus on issues with one URL at a time.

---

### **Issue Overview**

![Issue Overview](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Issue_Overview_MAT.png)

- **Total Issues**: The Donut Chart displays the total number of issues detected during the test. Depending on severity, issues are categorized as Critical, Serious, Moderate, and Minor. 

- **Issues by Category**: This categorization provides users insights into specific accessibility challenges that were identified with a horizontal progress bar showing the number of issues under that category.

---

### **Violations/Review Tabs**

![Violations/Review Tabs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Violations_Reviews_MAT.png)

- **Violations**: This lists all accessibility issues that need immediate action.

- **Review Required**: This lists all accessibility issues that need manual review. Although Testsigma has identified these issues, we recommend a closer review for accuracy.

[[info | **NOTE**:]]
| The issues are color-coded with labels to indicate their severity level. You can also filter the issues based on severity and category. 

---

### **Issue Navigation Panel**

![Issue Navigation](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Issues_Navigation_MAT.png)

- **Pagination Controls**: Provides navigation between the individual issues of specific issues selected under **Violations** and **Review Tabs**.

- **Next/Previous Buttons**: Allows users to scroll through the list of identified issues.

- **Issue Details**: This section briefly explains the detected issue with the affected **Affected Test Step**, **Element Details**, and **Screenshots**. 


---

## **Accessibility Rules**

| **Rule ID**                      | **Description**                                                             | **Platform**         | **WCAG Compliance**      |
|------------------------------|-------------------------------------------------------------------------|------------------|----------------------|
| TEXT\_COLOR\_CONTRAST          | Ensures text contrast meets minimum readability standards.              | Android & iOS   | 2.0 – 1.4.3 AA      |
| NESTED\_CONTROL               | Ensures interactive elements are not nested within each other.         | Android         | 2.0 – 2.1.1 A       |
| IMAGE\_VIEW\_DESCRIPTION       | Ensures images have meaningful descriptions for assistive technologies. | Android & iOS   | 2.0 – 1.1.1 A       |
| INTERACTIVE\_ELEMENT\_LABEL    | Ensures interactive elements have clear accessibility labels.           | Android         | 2.1 – 2.4.6 AA      |
| LABEL\_IN\_NAME                | Ensures text labels match their accessibility labels.                   | Android & iOS   | 2.1 – 2.5.3 A       |
| BUTTON\_IN\_NAME               | Ensures button labels start with capital letters.                       | Android         | 2.1 – 3.1.6 AAA     |
| EDITABLE\_TEXT\_LABEL          | Ensures editable elements have both name and value.                     | Android         | 2.0 – 4.1.2 A       |
| DUPLICATE\_TEXT\_LABEL         | Ensures no duplicate accessibility labels exist on the same screen.     | Android         | 2.1 – 4.1.2 A       |
| TOUCH\_TARGET\_SIZE            | Ensures interactive elements have a minimum tappable area.              | Android & iOS | 2.1 – 2.5.5 AAA |
| NESTED\_ELEMENT\_NAME          | Ensures visible text is included in accessible names.                   | iOS              | 2.0 – 1.3.2 A       |
| ACTIVE\_CONTROL               | Ensures interactive elements have accessible names.                      | iOS              | 2.0 – 4.1.2 A       |
| COLLIDING\_ELEMENT            | Ensures elements do not overlap.                                        | iOS platform guideline | – |



---