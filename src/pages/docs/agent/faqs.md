---
title: "Testsigma Agent - FAQs"
metadesc: "Frequently Asked Questions about the Testsigma Agent."
noindex: false
order: 11.93
page_id: "Testsigma Agent - FAQ"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "What is Testsigma Agent?"
  url: "#1-what-is-testsigma-agent"
- type: link
  name: "Why do we need a Testsigma Agent?"
  url: "#2-why-do-we-need-a-testsigma-agent"
- type: link
  name: "What are the resource requirements for the Testsigma Agent?"
  url: "#3-what-are-the-resource-requirements-for-the-testsigma-agent"
- type: link
  name: "How does the Testsigma cloud server communicate with the Testsigma Local Agent?"
  url: "#4-how-does-the-testsigma-cloud-server-communicate-with-the-testsigma-local-agent"

---

---
## **1. What is Testsigma Agent?**
Testsigma Agent is a small Java utility that is used to run tests on local devices using Testsigma.

### **Contents**
* **Java JRE** - bundled with Agent so that the user doesn't have to install the supported Java version separately.
* **Web Browser drivers** - for running tests on Web Browsers. Provided by the respective Browser Development Team.
* **Appium** - for running Mobile tests.
* **Mobile test recorder** - for inspecting Mobile Apps and finding elements on Screens to interact with Android + iOS specific libraries for Mobile test recorder.
* A few other utilities for enabling local test execution and reporting.


### **Requirements**

* It needs to be installed on the test machine where the tests will be executed.
* It communicates exclusively with Testsigma Server and works in a pull model i.e it doesn't accept incoming communication from our servers, for security reasons.

---

## **2. Why do we need a Testsigma Agent?**
**Two main uses of Testsigma Agent:**

### **a. To run tests on Local Devices**

The Corporate Firewall in Company's private Network where the Applications are deployed doesn't allow outside communication. Therefore, Testsigma cloud servers are not able to access those applications for executing tests on them.

Testsigma Agent resides in one of the test machines within the Company network and acts as a middleman relaying communication exclusively between Testsigma Cloud servers and the local test machine via secured HTTPS protocol without opening up the secured network.

With this, we can run tests on customers' own local test machines inside their private network.

### **b. To use Testsigma Mobile test recorder locally**

To automate mobile apps using Testsigma, it needs certain details from the mobile apps. For example, to tap on a button, Testsigma needs to know the attributes (id/name/position, etc.) used to create that button.

Testsigma uses its own Mobile App test recorder to get these details automatically. Through the Agent, once the customer's mobile device (in which the customer app is installed) is connected to the Agent machine, app details will be sent to the Customer's browser and from there the customers can save to Testsigma servers to create tests for the same app.

Testsigma Agent includes all the required files for enabling inspection of mobile Apps to get the element locators(Elements) to be used in tests.

You may also use the Cloud-based Mobile test recorder that doesn’t require any setup on the local machine. However, as you might already know, the cloud test recorder might have some delays compared to the Local Mobile test recorder.

---


## **3. What are the resource requirements for the Testsigma Agent?**

**Hardware requirements:**<br>
* **Memory:** Minimum 2 GB, Recommended 4GB (dedicated memory for the tests)<br>
* **Disk space:** Around 2 GB (Including reserved space for test resources - screenshots, downloaded files e.t.c)<br>
* **Processor:** Dual-Core Processor or better<br>

---


## **4. How does the Testsigma cloud server communicate with the Testsigma Local Agent?**

The Agent is a simple java utility that communicates exclusively with Testsigma Server in a pull model; the Testsigma Cloud server does not push any data without a request from the Agent side. The Agent queries the Testsigma Cloud Server for the test-related details and gets the required data as the response from the Cloud server.

Therefore, it does not need to whitelist any IPs. However, you might need to allow the outgoing connection through the secure 443 port to ***.testsigma.com*** for the agent to communicate with the Testsigma Cloud Server.


