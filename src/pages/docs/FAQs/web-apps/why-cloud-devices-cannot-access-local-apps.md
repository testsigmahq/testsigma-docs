---
title: "Cloud Based Test Machines Unable to Access Locally Hosted Applications"
metadesc: "During dev the apps are usually hosted on the local Development servers. This article explains why test machines on cloud are unable to access locally hosted apps."
noindex: false
order: 24.12
page_id: "Cloud based test machines unable to access locally hosted applications"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Cloud based Test Labs"
  url: "#cloud-based-test-labs"
---

---

 
During development, the applications are usually hosted on the local Development servers. These servers are not accessible from external networks (like the Internet) either due to network configurations (filtering by proxy or VPN) or due to firewall policies. 
 
Perform the following check to confirm that your application under test is not accessible from the internet.
1. Open your application URL in a workstation outside your company network.
2. If you can access the application from outside your company network (without VPN), you can run tests in our cloud devices. 


---

## **Cloud based Test Labs**

Platforms like Testsigma,  Sauce Labs, BrowserStack, etc. provide you with a fully-maintained lab of test machines for cross-browser and device testing. These test machines are hosted on their cloud networks. If your application under test is not publicly available you will not be able to run tests on these machines.

Follow the below steps to test locally hosted applications on our cloud:
1. If your application is deployed only on your local machine and is not publicly accessible, for example, ```http://localhost:8080```
   - This is a locally hosted application. No one else can access it via the internet. 
   - For more information, see [how to run your tests for locally hosted applications](https://testsigma.com/docs/runs/test-locally-hosted-applications/).
2. If your application is behind a firewall, you still have an option to use tunneling mechanisms to connect your application to Testsigma. 
   - To do this, first, contact your IT team and then contact Testsigma Support. 
   - For any more details on how to access local URLs via Testsigma, please contact Testsigma Support at [support@testsigma.com](mailto:support@testsigma.com)   

---