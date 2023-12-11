---
title: "Telemetry"
metadesc: "Telemetry in Testsigma"
noindex: false
order: 1.6
page_id: "Telemetry"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "What data is collected?"
  url: "#what-data-is-collected"
- type: link
  name: "Disable Telemetry"
  url: "#disable-telemetry"
---

---

As a standard practice, we collect anonymous telemetry data during and after Testsigma CE is installed on your local machine. The data is statistical and cannot be used to identify a user uniquely.

We collect this data to understand how Testsigma CE is being used and what steps we can take to improve and enhance the experience. This data is not shared with 3rd parties. Access to this data is strictly limited to the Testsigma team.  

As a user, you can opt out of Telemetry data anytime by navigating to Testsigma CE portal admin settings and then to the Telemetry section.

  

[[info | **NOTE**:]]
| - The data collected is anonymous and cannot interpret, indicate, or uniquely identify a user.
| - Testsigma is a proxy and does not capture any data returned by your APIs, databases, or third-party tools.
    
---


## **What data is collected?**

### **Testsigma server**

The Testsigma server sends a ping when it first starts and updates every 12 hours as an ‘is-alive’ status and the last server up-time. The TS server also captures anonymous usage data around plugins and integrations but no data is ever captured from the source.

  

We also collect the following events:

  

ServerRequest:

    {
    "serverUuid": "0195f3d8-7165-11ec-8d28-2641d35f62cd",
    "serverVersion": "1.0.0",
    "serverOs": "LINUX",
    "lastUpTime": "2022-01-10 12:16:28"
    }

AgentDeviceStatRequest:

    {
    "agentDeviceId": "10",
    "agentDeviceOs": "LINUX",
    "serverUuid": "0195f3d8-7165-11ec-8d28-2641d35f62cd",
    "eventType": "CREATE"
    }

AgentStatRequest:

    {
    "agentId": "10",
    "agentOs": "LINUX",
    "serverUuid": "0195f3d8-7165-11ec-8d28-2641d35f62cd",
    "eventType": "CREATE"
    }


ElementStatRequest:

    {
    "elementId": "10",
    "serverUuid": "0195f3d8-7165-11ec-8d28-2641d35f62cd",
    "eventType": "CREATE",
    }

EnvironmentStatRequest:

    {
    "environmentId": "10",
    "serverUuid": "0195f3d8-7165-11ec-8d28-2641d35f62cd",
    "eventType": "CREATE"
    }

TestCaseStatRequest:

    {
    "testCaseId": "10",
    "serverUuid": "0195f3d8-7165-11ec-8d28-2641d35f62cd",
    "eventType": "CREATE"
    }


TestDataStatRequest:

    {
    "testDataId": "10",
    "serverUuid": "0195f3d8-7165-11ec-8d28-2641d35f62cd",
    "eventType": "CREATE"
    }


TestPlanRunStatRequest:

    {
    "testPlanRunId": "10",
    "applicationType": "WebApplication",
    "testPlanType": "ADHOC_TEST_PLAN",
    "serverUuid": "0195f3d8-7165-11ec-8d28-2641d35f62cd",
    "eventType": "CREATE"
    }

  
TestPlanStatRequest:

    {
    "testPlanId": "10",
    "applicationType": "WebApplication",
    "serverUuid": "0195f3d8-7165-11ec-8d28-2641d35f62cd",
    "eventType": "CREATE"
    }


TestStepStatRequest:

    {
    "testStepId": "10",
    "testCaseId": "20",
    "serverUuid": "0195f3d8-7165-11ec-8d28-2641d35f62cd",
    "eventType": "CREATE"
    }

TestSuiteStatRequest:

    {
    "testSuiteId": "10",
    "serverUuid": "0195f3d8-7165-11ec-8d28-2641d35f62cd",
    "eventType": "CREATE"
    }


UploadStatRequest:

    {
    "uploadId": "10",
    "uploadExtension": "APK",
    "serverUuid": "0195f3d8-7165-11ec-8d28-2641d35f62cd",
    "eventType": "CREATE"
    }

---

## **Disable Telemetry**

To turn off telemetry data capture, you can do so using the following steps:

1. Navigate to Testsigma app in browser.
    
2. Click **Settings** icon, which is on left navigation bar.
    
3. Check the **Disable Telemetry** option.

---
