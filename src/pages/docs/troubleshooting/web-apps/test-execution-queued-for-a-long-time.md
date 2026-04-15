---
title: "Test Execution State is Queued For a Long Time"
metadesc: "Understand why your test execution state is stuck in Queued for a long time while executing parallel runs and learn how to troubleshoot the issue effectively."
noindex: false
order: 23.52
page_id: "troubleshooting-test-execution-state-is-queued-for-long"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to Troubleshoot the Issue"
  url: "#steps-to-troubleshoot-the-issue"
---

---

If the execution status for your tests has been in the state Queued for a long time then, one of the possible reasons is that the number of total parallel runs allowed on your license are already in use. 

---

## **Steps to Troubleshoot the Issue**
1. On **Dashboard**, click on **Usage details**.
![Dashboard](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/collaboration/update_queue_n_1.png)

2. Check the number of **Parallel Tests**.
![Parallel Tests](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/collaboration/update_queue_n_2.png)

Here, we have a license for 2 parallel executions & 3 allowed queues. We can set up a maximum of 2 test runs to run in parallel, which means executing up to 2 tests simultaneously. In addition to the 2 tests running in parallel, you can have up to 3 tests in the queue. The queued tests will execute once the ongoing parallel executions are complete.<br>

In the above example, we have **Parallel Tests 2/2**, which means 2 test is running in parallel, and 2 is the number of parallel runs allowed at a moment.<br>

If the number of parallel runs reaches the limit of your parallel licenses, the queued tests will remain in their current status until the ongoing parallel test runs are completed.

**You can take the following actions to fix the issue:**  
- You can wait for other tests to complete execution. 
- You can talk to Testsigma support to increase the number of parallel runs allowed on your license. 

---