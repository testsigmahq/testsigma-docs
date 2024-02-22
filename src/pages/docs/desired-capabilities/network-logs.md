---
title: "Network Logs"
page_title: "Network Logs: Analyse Application Network Activity"
metadesc: "Explore comprehensive network log features for insightful test execution analysis. Capture, analyse, and debug network interactions seamlessly."
noindex: false
order: 15.92
page_id: "network-log-management"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"  
- type: link
  name: "Enable Network Logs in Test Case"
  url: "#enable-network-logs-in-test-case"
- type: link
  name: "Enable Network Logs in Test Plan"
  url: "#enable-network-logs-in-test-plan"  
- type: link
  name: "Network Log Management"
  url: "#network-log-management"
---

---

Testsigma allows you to capture and analyse network traffic during test execution with its network log feature. Enabling the network log provides valuable insights into the interactions between your application and the server, helping you debug issues related to network requests and responses. <br>

This documentation will guide you on how to enable the network log in Test Case and Test Plan, access, view the status, and download network logs in the ad-hoc run page and the run test case page.

---

## **Prerequisites**

Before starting, understand the concepts of [Projects](https://testsigma.com/docs/projects/overview/), [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/), [Test Plans](https://testsigma.com/docs/test-management/test-plans/overview/), [Ad-hoc Runs](https://testsigma.com/docs/runs/adhoc-runs/), and [Test Machines](https://testsigma.com/docs/test-management/test-plans/manage-test-machines/) in Testsigma. Familiarising yourself with these concepts will make working with the Network Log feature easier.

[[info | Note:]]
| By default, Network Log is enabled for Web and Mobile Web applications, but for Android and iOS applications, you need to enable it manually.


---

## **Enable Network Logs in Test Case**

1. Click **Run** in the top right corner of the screen on the Test Case details page.
2. Select **BrowserStack** as a Test Lab on the **Ad-hoc Ru**n page on the right side of the screen, enable the **Network Log** toggle, and click **Run Now** to start Test Execution. ![Enable Network Log in Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/networklogs_adhoc.gif)

---

## **Enable Network Logs in Test Plan**

1. Navigate to the **Add Test Suites & Link Machine Profiles** tab on the **Create** or **Edit Test Plan** page.
2. Click the **Test Machine Settings** icon, and the **Adding** or **Editing Test Machine/Device Profiles** overlay will appear.
3. On the **Add** or **Edit Machine/Device Profile** overlay, select Test Lab Type as **BrowserStack**, enable the **Network Log** toggle, and click **Create/Update**. ![Enable Network Logs in Test Plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/networklogs_testplan.gif)

---

## **Network Log Management**

After completing the test execution on the Run Test Case Page, you should follow these steps to access and analyse the captured network logs:

1. Click the **Show Logs** button on the Run Results page and locate the section dedicated to **Network Logs** under the **Logs** tab.
2. In the **Network Logs** Previews, you can see a summary of captured network activity, including request URLs, HTTP methods, status codes, and response sizes. Quickly scan through the logs to identify anomalies or errors in the network interactions.
3. Click **Download Log** File at the top-right of the screen to retrieve the network log file in **HAR** format. You can then analyse the network logs offline. ![View Network Logs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/view_networklogs.gif)

---
