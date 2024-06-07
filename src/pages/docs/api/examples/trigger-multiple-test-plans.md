---
title: "Trigger Multiple Test Plans Consecutively"
metadesc: "How to trigger multiple Test Plans remotely using REST API. With this you can run a Mobile Test Plan after executing a Web Test Plan"
noindex: false
order: 21.81
page_id: "Trigger Multiple Test Plans Consecutively"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Sample Test Scenario"
  url: "#sample-test-scenario"
- type: link
  name: "When to make API Call to trigger next Test Plan"
  url: "#when-to-make-api-call-to-trigger-next-test-plan"
- type: link
  name: "How to Trigger next Test Plan"
  url: "#how-to-trigger-next-test-plan"
---

---

This article explains how to trigger multiple test plans consecutively. You might need this to run a mobile test plan after executing a web test plan.

---

## **Sample Test Scenario**

Let’s create a User using the Admin HR portal that is accessible only via a Desktop Browser and then manage that user on the Mobile HR App.

Let’s assume there are two Test Plans, namely ‘Admin-TP’ and ‘Mobile-TP’, and that both Test Plans contain one Test Suite each - Admin-TS and Mobile-TS, respectively.

|**Test Plan Name**|Admin-TP|Mobile-TP|
|---|---|---|
|**Test Suite Name**|Admin-TS|Mobile-TS|
|**Test Cases Names**|TC1, TC2|TC3 and TC4|

---
## **When to make API Call to trigger next Test Plan**

The API call to trigger the next Test Plan should preferably be in the very last step of the last Test Case in the previous Test Plan. It is advisable to create a new Test Case and add it as the last Test Case in the Test Suite for separation of concern.

In this case, we can create a new Test Case **TC-TriggerNext** as the last Test Case in Admin-TS Test Suite and add a REST API Step to trigger the next Test Plan.

So, the Test Cases in Admin-TS become TC1, TC2, and TC-TriggerNext.

---
## **How to Trigger next Test Plan**

See [how to trigger a Test Plan using REST API Calls](https://testsigma.com/docs/api/examples/trigger-test-plan-wait-completion/)
If you would like to pass some data from Admin-TP to the Mobile-TP, you can achieve this using the [Runtime test data/parameters.](https://testsigma.com/docs/test-data/types/runtime/)

For example, if there’s a username that you would pass from Admin-TP to Mobile-TP, you can store the username in a runtime variable such as **admin_username** and include it in the Request Body for the Trigger Test Plan REST API Call.

Here’s a sample Request Body for passing runtime parameters:

```
{
  "executionid": "274",
  "runtimeData": {
    "data": "$|admin_username|"
  }
}
```



Once the Test Plan Mobile-TP is triggered by the REST API Step in TCTrigger, the runtime parameter ‘admin\_username’ is also passed to that Test Plan. You can use those parameters in any Test Case within Mobile-TP now.

Learn more about REST APIs, refer to [Rest APIs](https://testsigma.com/docs/api/overview/)



