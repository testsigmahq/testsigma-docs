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

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that you have referred to:
> 1. [Documentation on creating test cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).
> 2. [Documentation on creating test plans](https://testsigma.com/docs/test-plans/overview/).
> 3. [Documentation on performing Ad-Hoc runs](https://testsigma.com/docs/runs/adhoc-runs/).
> 4. [Documentation on creating test machines](https://testsigma.com/docs/test-plans/manage-test-machines/).

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
1. Create a **Test Case** with the required **test steps**, then click **Run** in the top-right corner of the screen.
2. Select the **Test Lab** and **Test Machines**, then click **Desired Capabilities (Optional)**.
3. Enter the **Desired Capabilities Key**, **Data Type**, and **Value** for the selected **Test Lab Type**, then click **Run Now**. ![Console for Ad-hoc run](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_console_1.png)
   
---

## **Enable Console Log in Test Plan**

Follow these steps to enable Browser Console - Extended Debugging for a specific Test Plan in Testsigma:
1. Navigate to the **Add Test Suites & Link Machine Profiles** tab on the **Create/Edit Test Plan** screen.
2. Click **Test Machine Settings** for the desired test machine. The **Edit Test Machine/Device Profile** overlay screen will appear.
3. Select the **Test Lab** and **Test Machines**, then click **Desired Capabilities (Optional)**.
4. Enter the **Desired Capabilities Key**, **Data Type**, and **Value** for the selected **Test Lab Type**, then click **Update Profile**. ![Console for Test Plan](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_console_2.png)

---

## **View Console Logs on Result Page**

After enabling Browser Console - Extended Debugging and running a test case or test plan, follow these steps to check the captured Browser Console Debug Logs:
1. On the test execution results page, click **Show Logs** and navigate to the **Console Logs** section under the **Logs** tab.
2. To analyze the Browser Console logs offline, click **Download Log File** in the top-right corner of the screen.![View Console Logs](hhttps://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_console_3.png)

---