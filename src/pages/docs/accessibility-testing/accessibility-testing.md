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
  name: "Steps to Enable Accessibility Testing in Test Plans"
  url: "#steps-to-enable-accessibility-testing-in-test-plans"
- type: link
  name: "Interacting with Accessibility Report"
  url: "#interacting-with-accessibility-report"
---


---

With Testsigma, you can easily implement accessibility testing to comply with accessibility guidelines. This helps you test and monitor the accessibility of your websites to enhance the user experience for people with disabilities. This article discusses how to perform Accessibility Testing for web applications in Testsigma.

---


> ## **Prerequisites**
>
> Before you proceed, ensure you understand the concepts of creating a [Test Plan](https://testsigma.com/docs/test-management/test-plans/overview/), [Test Suite](https://testsigma.com/docs/test-management/test-suites/overview/), and [Test Machine](https://testsigma.com/docs/test-management/test-plans/manage-test-machines/).

---

## **Steps to Enable Accessibility Testing in Test Plans**

1. While creating a test plan, turn on the **Accessibility Testing** toggle in **Additional Settings**.
   ![Additional Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/AccessibilityToggle.png)

2. To execute the test plan, click the **Run Now** button.
   ![Run Test Plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/AccessibilityEnables_TestPlan.png)

3. Once the test plan execution is complete, click **View Reports** for that test plan.
   ![View Report](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/View_Accessibility_Report.png)

4. On the report page, click **View Report** in the bottom corner to open a detailed accessibility testing report.
   ![View Accessibility Report](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/View_Detailed_Accessibility_Report.png)

---


## **Interacting with Accessibility Report**

### **Top Bar**

![Top Bar](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Title_Accessibility_Report.png)

- **Title**: Displays the title of the report (e.g., Accessibility Demo).

- **Run Information**: Indicates the specific test run ID (e.g., Run - 45).

- **Compliance Standard**: Shows the accessibility standards considered for the test (Here, we have used WCAG 2.1 AA).

---

### **Test URL Dropdown**

![URL Dropdown](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/URLs_Accessibility_Testing.png)

- This dropdown helps you filter the report by specific URLs that have tested for accessibility compliance. 

   [[info | **NOTE**:]]
   | By default, all URLs are selected, but you can choose a specific URL from the dropdown to focus on issues with one URL at a time.

---

### **Issue Overview**

![Issue Overview](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Issues_Overview_Accessibility.png)

- **Total Issues**: The Donut Chart displays the total number of issues detected during the test. Depending on severity, issues are categorized as Critical, Serious, Moderate, and Minor. 

- **Issues by Category**: This categorization provides users insights into specific accessibility challenges that were identified with a horizontal progress bar showing the number of issues under that category.

---

### **Violations/Review Tabs**

![Violations/Review Tabs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Violations_Review_Tabs_Accessibility.png)

- **Violations**: This lists all accessibility issues that need immediate action.

- **Review Required**: This lists all accessibility issues that need manual review. Although Testsigma has identified these issues, we recommend a closer review for accuracy.

[[info | **NOTE**:]]
| The issues are color-coded with labels to indicate their severity level. You can also filter the issues based on severity and category. 

---

### **Issue Navigation Panel**

![Issue Navigation](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Issue_Navigation_Accessibility.png)

- **Pagination Controls**: Provides navigation between the individual issues of specific issues selected under Violations and Review Tabs.

- **Next/Previous Buttons**: Allows users to scroll through the list of identified issues.

- **Issue Details**: This section briefly explains the detected issue with the affected **URL**, **page**, **element details**, and **screenshots**. 

<br>

Here's a quick GIF demonstrating how to enable the Accessibility Testing in Testsigma. 

![Accessibility Testing](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/AccessibilityTesting.gif)


---