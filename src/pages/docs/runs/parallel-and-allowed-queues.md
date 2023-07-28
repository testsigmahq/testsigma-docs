---
title: "Parallel and Allowed queues"
metadesc: "Execute your Test Suites and Test Cases based on your subscription plan. This article explains parallel execution and the allowed queues for Test Suites and Test Cases."
noindex: false
order: 9.62
page_id: "Parallel and Allowed queues"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Parallel Execution of Test Suites"
  url: "#parallel-execution-of-test-suites"
- type: link
  name: "Parallel Execution of Test Cases within Test Suites"
  url: "#parallel-execution-of-test-cases-within-test-suites"
---


<br>


In Testsigma, you can execute your Test Suites and Test Cases based on your subscription plan. This article explains parallel execution and the allowed queues for Test Suites and Test Cases.

<br>

## **Parallel Execution of Test Suites**

![Parallel & Allowed](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/PATests.png)

Let’s say you have licence for 5 parallel executions & 8 allowed queue. You can set up a maximum of 5 Test Suites to run in parallel, which means you can execute up to 5 Test Suites simultaneously, irrespective of the number of Test Cases within each Test Suite.

In addition to the 5 Test Suites running in parallel, you can also have up to 8 Test Suites in the queue. The Queued Test Suites will execute once the ongoing parallel executions are complete.

<br>

## **Parallel Execution of Test Cases within Test Suites**
In this condition, Test Cases within Test Suites are also considered. For example, if you have 4 Test Suites with two Test Cases each, the total number of Test Cases would be 8. So, all 8 Test Cases can be executed in parallel.

If you trigger 10 Test Cases with 8 parallel execution and 8 allowed queue subscription, 8 test cases will run in parallel, while 2 test cases will be in queue.

[[info | **NOTE**:]]
|For Android and iOS applications, if you enable the recorder feature, an additional parallel execution is consumed. This is because the real device is launched from the Test Lab to allow recording and execution.


