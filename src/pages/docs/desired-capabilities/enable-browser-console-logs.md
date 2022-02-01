---
title: "Enable Browser Console Debug Logs"
meta_desc: "How to add Desired Capabilities to tests to output more debugging information such as Browser Console logs."
order: 15.3
page_id: "Enable Browser Console Debug Logs"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Enable Browser Console - Extended Debugging"
  url: "#enable-browser-console---extended-debugging"
- type: link
  name: "View Browser Logs"
  url: "#view-browser-logs"
---

---

When a Test Case fails, you will see an error message on the failed Test Step within the Testsigma app. This is to help you understand the reason for failure.

However, there are times when the reason for failure is not enough to fix the failure and the developers need extra details such as Browser Console logs to find the root cause. These extended Debugging capabilities can be enabled in Testsigma by adding a simple 'Desired Capability' in the Test Environment settings. 

To learn how to add Desired Capabilities, see [Desired Capabilities - Overview](https://testsigma.com/docs/desired-capabilities/overview/)

---
##**Enable Browser Console - Extended Debugging**

Pass the below given desired capabilities in case of respective Test Lab Type

|**Test Lab Type**|**Desired Capability Name (Key)**|**Data Type**|**Desired Capabillity Value**|
|---|---|---|---|
|Testsigma Labs and Sauce Labs|extendedDebugging|Boolean|True|
|Browserstack|browserstack.console|String|warnings|

[[info | NOTE:]]
| The above desired capabilities are valid for Adhoc Runs and Test Plan Runs.

---
##**View Browser Logs**

Once the desired Capabilities are added, you can execute it. The Test Result will show up as shown below:

![Test Results Page Logs tab](https://docs.testsigma.com/images/enable-browser-console-logs/test-results-logs-tab.png)

You can either view the Browser console logs here or Download them by clicking on the 'Download' button on the top-right if the log file is bigger than 512Kb.