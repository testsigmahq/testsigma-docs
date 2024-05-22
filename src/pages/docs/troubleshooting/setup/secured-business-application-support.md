---
title: "Secured Business Application Support"
metadesc: "In Testsigma, some prerequisites are necessary to avoid issues and enhance the flexibility. This article discusses prerequisites for cloud executions"
noindex: false
order: 23.22
page_id: "Secured Business Application Support"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites for Cloud Executions of Secured Applications"
  url: "#prerequisites-for-cloud-executions-of-secured-applications"
---

---

For cloud executions of secured business apps, some prerequisites are necessary to avoid issues and enhance the flexibility, security, and efficiency of the testing. This article discusses recommendations and requirements for smooth cloud executions of secured business apps/intranet apps in Testsigma.

---

## **Prerequisites for Cloud Executions of Secured Applications**

**1. IP Whitelisting**: When the application is hosted on servers with restricted access from unknown sources, you can use Testsigma Labs to execute tests by whitelisting Testsigma IP Addresses on your server. 
For more information, refer to access locally hosted applications. 

- For more information, refer to [access locally hosted applications](https://testsigma.com/docs/runs/test-locally-hosted-applications/).

**2. Agent for Local Executions**: To run the tests locally, you need Testsigma Agent running on the machine for test orchestration, i.e., queueing tests, running the tests, fetching the test results, etc. 

For more information, refer to:
- [Testsigma Agent](https://testsigma.com/docs/agent/overview/)
- [Setting up Testsigma Agent (Mac, Windows & Linux)](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/).
- [Setting up Android Local Devices](https://testsigma.com/docs/agent/connect-android-local-devices/)
- [Setting up iOS Local Devices](https://testsigma.com/docs/agent/connect-ios-local-devices/)


**3. iOS App Resigning**: You have to set the ResignEnabled desired capability to true to trigger a process where Testsigma resigns the iOS application with a provisioning profile. This is important to ensure the iOS app can be installed and run on the testing device. 
- For more information, refer to [enabling app resigning in iOS](https://testsigma.com/docs/desired-capabilities/app-resigning/).
- For more information on desired capabilities, refer to [most common desire capabilities](https://testsigma.com/docs/desired-capabilities/most-common/).

**4. Testsigma Chrome Extension**: You can quickly record test steps by interacting with the UI, such as clicking buttons, entering text, navigating through pages, etc. To access this feature, you should have the Testsigma Chrome extension. 
For more information, refer to:
- [Testsigma Chrome Extension](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/)
- [Create Tests Using Recorder](https://testsigma.com/docs/test-cases/create-test-steps/overview/#creating-test-steps-using-test-recorder)


**5. Addons (To access NLPs)**: Installing Testsigma addons will extend built-in actions with custom actions. These actions can be anything from clicking first, then scrolling, clicking again, scrolling indefinitely till the bottom of the page, and so on. 
- For more information, refer to [addons](https://testsigma.com/docs/addons/what-is-an-addon/).
  

**6. VPN Tunneling**: For security reasons, sometimes the recorder cannot access the application while testing Android and iOS apps. In this case, VPN tunneling can be used to establish a secure and encrypted connection over the internet. You can connect with Testsigma support (*support@testsigma.com*) to know more. 




---