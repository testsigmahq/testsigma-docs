---
title: "Debug Test Case Failures "
metadesc: " How to debug a failed test case to identify the issue in Testsigma."
noindex: false
order: 9.61
page_id: "Debug Test Case Failures "
warning: false
---

---

Sometimes, your tests may fail for any one or more of the following reasons:

* Elements / UI Identifiers fail due to change in application.
  
* The application does not load.
  
* Local internet connection fails.
  
* Element hasn’t changed but navigation to the Element has changed.
  
* Your add-on code is not performing as expected.
  
* Actual bugs in Application under test.
  
* False positives / false negatives.
  
* API down.
  
* Bad Element locator.

&emsp;
This is not an exhaustive list, but it contains the most common causes. Debugging these issues is a simple process of moving from discovery to finding the root cause. Let's see how.
 
&emsp;
### Step 1: Discovery 

View the test results to understand where the test case has failed. Testsigma highlights the step that failed and caused the execution to stop.

&emsp;
### Step 2: Identify proof at Point of Failure

At the step that has failed, find visual proof. Here’s how:
1. Verify Screenshot.
   
2. Verify Video at the specific time (if available).
   
3. Verify the Logs (Selenium Logs, Network logs, console logs) at the specified time. The Network logs are available for web apps. The Network logs are also available for native apps when they are executed via Browserstack Test Lab.
   
4. Verify error message.

This should give you a good idea of proof at the point of failure.

&emsp;
### Step 3: Analyze proof 

The proof that has been collected in step 2 now has to be analyzed to find the root cause of the issue. The 4 points mentioned in Step 2 should be enough to identify the exact root cause. 

&emsp;
### Step 4: Deploy a solution

* If the issue is with Elements, change the element or add it to the Auto Healing list.

* If the issue is with navigation, update the navigation

* If the issue is with the network, rectify the points of network failure
  
&emsp;
### Step 5: Proactive Damage Control

If an Element has failed, navigate to the Elements page

* Click on the “View Affected Test Cases” button for the specific Element.

* This should show you a list of test cases that are at risk of failure.

* Make necessary amends.


&emsp;

---
##**Support**

If you’re unable to resolve the test failure, you can connect with our [Support team on Discord](https://discord.com/invite/5caWS7R6QX) or send us a mail at **[support@testsigma.com](mailto:support@testsigma.com)** describing the issue.

