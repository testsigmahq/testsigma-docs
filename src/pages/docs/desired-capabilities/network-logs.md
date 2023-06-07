---
title: "Network Logs"
page_title: "Network Logs in Testsigma: Track and Analyze Application Network Activity"
metadesc: "Use Testsigma's Network Logs feature to track and analyze network activity. You can gain insights into requests, responses, and performance optimization. Start optimizing your application's network behavior today."
noindex: false
order: 15.92
page_id: "Network Logs"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Enable Network Logs"
  url: "#enable-network-logs"
- type: link
  name: "Network Log Management"
  url: "#network-log-management"
---

---

Testsigma allows you to capture and analyse network traffic during test execution with its network log feature. Enabling the network log provides valuable insights into the interactions between your application and the server, helping you debug issues related to network requests and responses. This documentation will guide you on how to enable the network log in Testsigma, access, view the status, and download network logs in the ad-hoc run page and the run test case page.

---

### **Prerequisites**

Before starting, you should be familiar with [Ad-hoc Run](https://testsigma.com/docs/runs/adhoc-runs/), [Manage Projects](https://testsigma.com/docs/projects/overview/), and [Manage Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).

---

## **Enable Network Logs**

To capture network activity during test runs in Testsigma, enable the Network Log feature. Web and Mobile Web applications have the Network Log enabled by default, but for Android and iOS applications, you must enable it manually by following the steps below:

1. Click **Run** in the top right corner of the screen on the **Test Case** page. ![Run in Test Case Page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/run_testcase_nl.png)
2. Select **BrowserStack** as a **Test Lab** on the **Ad-hoc Run** page on the right side of the screen, enable the **Network Log toggle**, and click **Run Now** to start Test Execution. ![BrowserStack as a Test Lab](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/bs_togglenl_ts.png)

Here is a quick GIF demonstrating the above workflow: ![Enable Network Logs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/enable_networklog.gif)

---

## **Network Log Management**

To access and analyse the captured network logs in Testsigma, follow the steps outlined below after completing the test execution on the Run Test Case Page.

1. Navigate to the **Logs** tab on the **Run Test Case** page. ![Run Test Case Page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/runttestcase_logs_ts.png)
2. You will find a section dedicated to the **Network Logs** under the **Logs** tab.
3. You can see a summary of the captured network activity in the **Network Logs Preview**. The preview displays key information, such as request URLs, HTTP methods, status codes, and response sizes. You can quickly scan through the logs to identify any anomalies or errors in the network interactions. ![Network Log Preview](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/nlp_runtestcase_ts.png)
4. Click **Download** in the top-right corner of the screen to download the network log file in **har** format if you want to analyse the network logs offline.

Here is a quick GIF demonstrating the above workflow: ![Network Log Management](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/networkmanagement_ts.gif)

---
