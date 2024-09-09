---
title: "Headless Browser Testing"
page_title: "Headless Browser Testing in Testsigma: Automate Web Testing Efficiently"
metadesc: "Learn how to perform headless browser testing in Testsigma. Automate tests without a visual browser interface, ensuring efficient and reliable web app testing."
noindex: false
order: 8.28
page_id: "headless-browser-testing-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Enabling Headless Browser Testing in Test Case"
  url: "#enabling-headless-browser-testing-in-test-case"
- type: link
  name: "Enabling Headless Browser Testing in Test Plan"
  url: "#enabling-headless-browser-testing-in-test-plan"
- type: link
  name: "Results of Headless Browser Testing"
  url: "#results-of-headless-browser-testing"
- type: link
  name: "Benefits of Headless Browser Testing"
  url: "#benefits-of-headless-browser-testing"     

---

---

Headless browser testing simulates browser behaviour without a graphical interface to enable efficient automation and validation of different aspects of web applications.

This guide will explain how to do headless browser testing in Testsigma. It will cover what you need to know beforehand, how to enable headless testing in a test case and plan, verify the results of headless testing, and discuss the benefits.

---

> ## **Prerequisites**
>
> Before using the Headless browser testing feature, you should understand the concepts of [Projects](https://testsigma.com/docs/projects/overview/), [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/), [Test Plans](https://testsigma.com/docs/test-management/test-plans/overview/), [Ad-hoc Runs](https://testsigma.com/docs/runs/adhoc-runs/), and [Test Machines](https://testsigma.com/docs/test-management/test-plans/manage-test-machines/) in Testsigma.

[[info | NOTE:]]
| Headless testing can test web applications

---

## **Enabling Headless Browser Testing in Test Case**

Click the toggle button for **Headless Test** on the **Ad-hoc Run** page of the test case to enable headless testing for a specific test case. Then, start the test by clicking **Run Now**. ![Headless Test in Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/headless_adhocrun.gif)

---

## **Enabling Headless Browser Testing in Test Plan**

1. Navigate to the **Add Test Suites & Link Machine Profiles** tab on the page for **Create** or **Edit Test Plan** to enable headless testing.
2. Click on **Test Machine Settings** for the test machine to enable Headless Testing for the Test Plan. An overlay screen for **Editing the test machine/device profile** will appear. Then, enable the toggle for  **Headless Test** and click **Update Profile**. ![Headless in Test Plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/headless_testplan.gif)

---

## **Results of Headless Browser Testing**

After running the test case, click the **Watch Video** button on the test execution results page to check if the browser was running in headless mode. Please note that Testsigma does not record videos during headless testing. ![Results of Headless Test](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/view_headlesstesting.gif)

---

## **Benefits of Headless Browser Testing**

|Benefits|Description|
|---|---|
|**Faster Execution**|Headless browsers can run tests faster than traditional GUI-based testing because they do not render graphical elements.|
|**Improved Scalability**|Headless browser testing enables faster test cycles and improved scalability by allowing parallel execution of tests on multiple virtual machines or containers.|
|**Lower Resource Consumption**|Headless testing allows you to maximise resource allocation for other critical tasks without needing a GUI by requiring fewer system resources.|
|**Compatibility Testing**|Headless browser testing allows you to test web applications on different browsers and versions without manual intervention.|

---