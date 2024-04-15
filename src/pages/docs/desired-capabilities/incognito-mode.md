---
title: "Run Browser in Incognito/Private mode"
page_title: "Incognito/Private Mode Browser Testing - Testsigma"
metadesc: "Execute browser tests in incognito/private mode with Testsigma for secure and confidential testing environments, safeguarding your web application's privacy."
noindex: false
order: 15.97
page_id: "run-browser-incognito-tests"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Desired Capabilities for Incognito or Private Browser"
  url: "#desired-capabilities-for-incognito-or-private-browser"  
- type: link
  name: "Adding Desired Capabilities in Test Case"
  url: "#adding-desired-capabilities-in-test-case"
- type: link
  name: "Adding Desired Capabilities in Test Plan"
  url: "#adding-desired-capabilities-in-test-plan"
---

---
Desired Capabilities allow you to customise the test environment by adding browser extensions, setting geographical locations, and bypassing alerts. Testsigma enables you to run tests in Incognito/Private mode to ensure a clean testing space. This guide helps you easily configure your testing environment for this mode.

---

## **Prerequisites**

Before starting testing in Incognito/Private Mode, you must understand specific concepts, such as creating [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/) and [Test Plans](https://testsigma.com/docs/test-management/test-plans/overview/), managing [Ad-hoc runs](https://testsigma.com/docs/runs/adhoc-runs/) and [Test Machines](https://testsigma.com/docs/test-management/test-plans/manage-test-machines/) in Testsigma.

---

## **Desired Capabilities for Incognito or Private Browser**

Use the following Desired Capabilities to enable Incognito or Private mode:

|Capability - Key|Data Type|Value|Function|
|---|---|---|---|
|testsigma.privateBrowsing|Boolean|True|The selected browser will be launched in **incognito** or **private mode**|
|testsigma.privateBrowsing|Boolean|False|The selected browser will be launched in **Normal mode**|
|No Capability|Boolean|False|The selected browser will be launched in **Normal mode**| 

[[info | NOTE:]]
| **Google Chrome**, **Mozilla Firefox**, and **Microsoft Edge** support the desired capabilities for Incognito/Private Tab Browsers.

---

## **Adding Desired Capabilities in Test Case**

1. Click **Run** in the top right corner of the screen on the Test Case details page.
2. In the **Ad-hoc Run** screen, you should select **Test Lab** and **Test Machine**. Then, you can click on **Desired Capabilities (Optional)**.
3. Enter **testsigma.privateBrowsing** in the key. Select **Boolean** as the data type and enter **true** for the value in the Desired Capabilities field.
4. Click **Run Now** to execute the Incognito/Private tab test steps. ![Add capabilities in Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/adding_ic_testcase.gif)

---

## **Adding Desired Capabilities in Test Plan**

1. Navigate to the **Test Machines & Suites Selection** tab on the **Create** or **Edit Test Plan** page.
2. Clicking **Add Machine**/**Device** allows you to add a test machine. You can edit existing machines by clicking **Test Machine Settings**.
3. On the **Add** or **Edit test machine/device** profile screen, enter the **machine's name**, select a **lab**, and select a **machine** from the drop-down list. Click on **Desired Capabilities (Optional)**.
4. Enter **testsigma.privateBrowsing** in the key. Select **Boolean** as the data type and enter **true** for the value in the Desired Capabilities field. Then click **Create**/ **Update** profile to save the configuration.
5. Click **Create/Update** to save and update the test plan. ![Add capabilities in Test Plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/adding_ic_testplan.gif)

---
