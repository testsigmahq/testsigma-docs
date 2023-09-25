---
title: "Enable Browser Console Debug Logs"
pagetitle: "Browser Console Debug Logs: Improve Web Testing | Testsigma"
metadesc: "Learn how to enable and view logs in Testsigma to efficiently debug your web tests using Browser Console. It enhances web testing efficiency and helps in effective troubleshooting."
noindex: false
order: 15.3
page_id: "browser-console-debug-logs-testsigma"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Desired Capabilities for Console Logs"
  url: "#desired-capabilities-for-console-logs"
- type: link
  name: "Enable Console Log in Ad-hoc Run"
  url: "#enable-console-log-in-ad-hoc-run"
- type: link
  name: "Enable Console Log in Test Plan"
  url: "#enable-console-log-in-test-plan"
- type: link
  name: "View Console Logs on Result Page"
  url: "#view-console-logs-on-result-page"
---

---

Browser Console Debug logs can help you more effectively identify and troubleshoot issues in your web application tests. In Testsigma, enabling Browser Console - Extended Debugging can help you capture and view these logs during test execution. This documentation will guide you on how to use Browser Console Debug Logs in Testsigma.

---

## **Prerequisites**

Before you begin, grasp the basics of creating [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/) and [Test Plans](https://testsigma.com/docs/test-management/test-plans/overview/) and performing [Ad-hoc Runs](https://testsigma.com/docs/runs/adhoc-runs/) and [Test Machines](https://testsigma.com/docs/test-management/test-plans/manage-test-machines/).

---

## **Desired Capabilities for Console Logs**

Pass the desired capabilities below for their respective test lab types.

|**Test Lab Type**|**Capability - Key**|**Data Type**|**Value**|
|---|---|---|---|
|<li>**Testsigma Lab**</li><li>**Sauce Lab**</li>|extendedDebugging|Boolean|True|
|**BrowserStack Lab**|browserstack.console|String|warnings|

---
## **Enable Console Log in Ad-hoc Runs**

To enable Browser Console - Extended Debugging for a specific test case in Testsigma, follow these steps:
1. Create a **Test Case** with a **list of the test steps** and then click **Run** in the top right of the screen to initiate an **Ad-hoc Run** overlay.
2. Select **Test Lab** and **Test Machines**. Click on **Desired Capabilities (Optional)**.
3. Enter the **Desired Capabilities Key**, **Data Type**, and **Value** above the selected **Test Lab Type**, and provide the Desired Capabilities for the Lab. Then, click on **Run Now**. ![Console for Ad-hoc run](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/console_adhocrun.gif)
   
---

## **Enable Console Log in Test Plan**

Follow these steps to enable Browser Console - Extended Debugging for a specific Test Plan in Testsigma:
1. Navigate to the **Add Test Suites & Link Machine Profiles** tab on the page for **Create** or **Edit Test Plan**.
2. Click on **Test Machine Settings** for the test machine. An overlay screen for **Editing the test machine/device profile** will appear.
3. Select **Test Lab** and **Test Machines**. Click on **Desired Capabilities (Optional)**.
4. Enter the **Desired Capabilities Key**, **Data Type**, and **Value** above the selected **Test Lab Type**, and provide the Desired Capabilities for the Lab. Then, click on **Update Profile**. ![Console for Test Plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/consolelog_testplanedit.gif)

---

## **View Console Logs on Result Page**

After enabling Browser Console - Extended Debugging and running a test case or test plan, follow these steps to check the captured Browser Console Debug Logs:
1. Click the **Show Logs** button on the test execution results page and look for a section dedicated to the **Console Logs** under the Logs tab.
2. Click the **Download log file** in the top right corner of the screen to analyse the Browser Console logs offline if needed. ![View Console Logs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/view_consolelogs.gif)

---