---
title: "Run Browser in Incognito/Private mode"
page_title: "Incognito Mode"
metadesc: "Learn how to run tests in Incognito/Private mode by adding desired capabilities in Ad-hoc Run Screen/Test Plan in Testsigma Application."
noindex: false
order: 15.99
page_id: "IC/PM"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Add Desired capabilities in Ad-hoc Run Screen"
  url: "#add-desired-capabilities-in-ad-hoc-run-screen"
- type: link
  name: "Add Desired capabilities in Test Plan"
  url: "#add-desired-capabilities-in-test-plan"
---

---
Desired Capabilities are a set of properties used for customizing the Test Environment. The customization includes adding browser extensions to the automation sessions, setting the Geographical locations for the test machine, bypassing browser alerts, etc.

Desired capabilities have now been added to the browser's Incognito/Private tab to launch the new browser or not save details and run every time a new test case in browsers.

---

### **Prerequisites**

Before using the Incognito/Private Mode Browser Testing feature, you should understand the concepts of [Create Ad-hoc Runs](https://testsigma.com/docs/runs/adhoc-runs/), [Create Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#creating-a-test-case), and [Create Test Plans](https://testsigma.com/docs/test-management/test-plans/overview/). in Testsigma.

---

## **Desired Capabilities for Incognito or Private Browser**

|Capability - Key|Data Type|Value|Function|
|---|---|---|---|
|testsigma.privateBrowsing|Boolean|True|The selected browser will be launched in **incognito** or **private mode**|
|testsigma.privateBrowsing|Boolean|False|The selected browser will be launched in **Normal mode**|
|No Capability|Boolean|False|The selected browser will be launched in **Normal mode**| 

[[info | NOTE:]]
| Desired Capabilities for Incognito/Private Tab Browsers Support **Google Chrome**, **Mozilla Firefox**, and **Microsoft Edge**.

---

## **Add Desired capabilities in Ad-hoc Run Screen**

1. Navigate to **Test Development** > **Test Cases**. Create a new project or open an existing project.
![Choose Project](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/testcase_dc.png)

2. Click **Run** after adding the test steps.
![Run test case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/run_testcase_dc.png)

3. The **Ad-hoc Run** screen will appear; select **Test Lab** and **Test Machines**. Click on **Desired Capabilities (Optional)**.
![Enable Desired Capabilities](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/ad_hoc_run_e_dc.png)

4. Enter **testsigma.privateBrowsing** in the key, select data type **Boolean** from the drop-down list, and enter **true** for the value in the Desired Capabilities field. Click **Run Now**.
![Enter capabilities](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/capabilities_adhocrun_dc.png)

5. Test steps will be executed in the Incognito/Private tab.

Here is a quick GIF demonstrating the above workflow: ![gif for test case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/dc_ad_hoc_run.gif)

---

## **Add Desired capabilities in Test Plan**

1. Navigate to **Select project** > **Test Development** > **Test plan**.
![Choose Test plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/testplan_dc.png)

2. Click an existing test plan and click **Edit** in the top right corner.
![Edit in test plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/testplanedit_dc.png)

3. On the **Edit test plan** page, navigate to the **Test devices & suites** tab. Add test suites to the test plan and Click **Add Machine Device**.
![Edit test plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/edittestplan_dc.png)

4.  On the screen, an **Add Machine/Device** overlay will appear. Enter the machine's **name**, select **Lab** from the drop-down list, and then select **Machines**. Click on **Desired Capabilities (Optional)**.
![Enable DC in test plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/desired_capabilities_testplan_dc.png)

5. Enter **testsigma.privateBrowsing** in the key, select data type **Boolean** from the drop-down list, and enter **true** for the value in the Desired Capabilities field. Click **Create**.
![Enter Capabilities in field](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/desired_capabilities_field_testplan_dc.png)

6. To update the test plan, click **Next** > **Update**
