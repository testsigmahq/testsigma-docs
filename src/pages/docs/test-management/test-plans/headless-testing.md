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

### **Prerequisites**

Before using the Headless browser testing feature, you should understand the concepts of [Projects](https://testsigma.com/docs/projects/overview/), [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/), [Test Plans](https://testsigma.com/docs/test-management/test-plans/overview/), [Ad-hoc Runs](https://testsigma.com/docs/runs/adhoc-runs/), and [Test Machines](https://testsigma.com/docs/test-management/test-plans/manage-test-machines/) in Testsigma.

[[info | NOTE:]]
| Headless testing can test web applications

---

## **Enabling Headless Browser Testing in Test Case**

Click the toggle button for **Headless Tes**t on the **Ad-hoc Run** page of the test case to enable headless testing for a specific test case. Then, start the test by clicking **Run Now**. ![Headless Test in Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/headlesstest_testcase.gif)

---

## **Enabling Headless Browser Testing in Test Plan**

1. To enable headless testing for a test plan, navigate to the **Test Machines & Suites Selection** tab on the **Create** or **Edit Test Plan** page. ![Add Machine in Test Plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/addmachines_testplan_ht.png)
2. Enable the toggle for **Headless Test** on the **Add** or **Edit Machine/Device page** and click **Update**. ![Enable Headless in Test Plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/enable_ht_testplan.png)

Here is a quick GIF demonstrating the above workflow: ![Headless in Test Plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/headlesstest_testplan.gif)

---

## **Results of Headless Browser Testing**

After running the test case, click on the **Watch Video** tab in the test execution results to check if the browser was running in headless mode. Please note that Testsigma does not record videos during headless testing. ![Results of Headless Test](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/watchvideo_ht.png)

---

## **Benefits of Headless Browser Testing**

|Benefits|Description|
|---|---|
|**Faster Execution**|Headless browsers can run tests faster than traditional GUI-based testing because they do not render graphical elements.|
|**Improved Scalability**|Headless browser testing enables faster test cycles and improved scalability by allowing parallel execution of tests on multiple virtual machines or containers.|
|**Lower Resource Consumption**|Headless testing allows you to maximise resource allocation for other critical tasks without needing a GUI by requiring fewer system resources.|
|**Compatibility Testing**|Headless browser testing allows you to test web applications on different browsers and versions without manual intervention.|

---