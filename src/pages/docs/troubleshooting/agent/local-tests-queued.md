---
title: "Tests Permanently Queued in Local Executions"
page_title: "Testsigma Agent Startup Failures"
metadesc: "Know the possible reasons why tests in local executions are permanently marked queued and learn steps to fix the issue by following the troubleshooting steps"
noindex: false
order: 23.34
page_id: "Tests Permanently Queued in Local executions"
warning: false
---

---

If the execution status for your tests has been in the state Queued for a long time in local executions, there might be incorrect or incomplete configuration in the Testsigma Account or the local machine. This article discusses how to troubleshoot the test executions in a Queued state permanently. 

---

## **Troubleshooting Steps**

1. Check if **Testsigma Agent** is active by navigating to **Dashboard > Agents**.

![Agent](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tsagerrs.png)

If the agent is not running, you will see that the last request time was not recent. If the agent is running, the request time will be less than 1 minute ago. 


2. If registered properly, check the **Test Plans/Dry Runs** tab from the **Usage details** page and confirm there are no queued tests in **Test Plans & Dry Runs** tab. If there are queued tests, wait for them to finish or stop them for your new tests to run.


If there are no queued tests, please contact **support@testsigma.com** with latest Testsigma Agent logs. For more information, refer to [send agent logs](https://testsigma.com/docs/agent/troubleshooting/logs/). 



---