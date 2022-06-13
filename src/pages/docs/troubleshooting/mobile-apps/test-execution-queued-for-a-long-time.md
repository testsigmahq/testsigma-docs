---
title: "Test execution state is Queued for a long time"
metadesc: "This page explains how to debug and fix the “test execution state is queued for a long time” error for web-apps"
noindex: false
order: 23.6
page_id: "Troubleshooting “Test execution state is Queued for a long time” error"
warning: false
---



If the execution status for your tests has been in the state "Queued" for a long time then, one of the possible reasons is that the number of total parallel runs allowed on your license are already in use. To check if this is the issue, follow below steps:
1. Click on the "Usage Details" button on the Left Navigation Menu, as also highlighted in the screenshot below:

![Usage details button](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/troubleshooting/web-apps/test-execution-queued-for-a-long-time/usage-details-button.png)

2. Check the number of Parallel Tests. 

![parallel tests usage](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/troubleshooting/web-apps/test-execution-queued-for-a-long-time/parallel-tests-usage.png)

In this screenshot, 3/5 means - 3 tests are running in parallel and 5 is the number of parallel runs allowed at a moment.

3. If the number of parallel runs is equal to the number of parallel licenses for your Testsigma account then you can take following actions to fix the issue:
	i. You can wait for other tests to complete execution.
	ii. You can talk to Testsigma support to increase the number of parallel runs allowed on your license.
	iii. You can click on the name of the test displayed in the Usage Details window and check its details. This can only be done if you have access to the test case.
	 ![parallel run name](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/troubleshooting/web-apps/test-execution-queued-for-a-long-time/parallel-run-name.png)

	iv. If you have appropriate rights, you can also stop the execution of one of the test cases by clicking on the corresponding stop button. 