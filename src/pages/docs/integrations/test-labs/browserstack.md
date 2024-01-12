---
title: "Integrate Testsigma with BrowserStack"
metadesc: "BrowserStack integration lets you execute your Testsigma tests on BrowserStack. Learn how to integrate the BrowserStack Cloud Test Execution Platform with Testsigma"
noindex: false
order: 16.42
page_id: "Integrate Testsigma with BrowserStack"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Integrating with BrowserStack"
  url: "#integrating-with-browserstack"
- type: link
  name: "Using BrowserStack for Test Runs"
  url: "#using-browserstack-for-test-runs"
---

---

[BrowserStack Integration](https://www.browserstack.com/automate?utm_source=testsigma&utm_medium=partnered) with Testsigma lets you run your Testsigma tests on BrowserStack.
If your organization has an existing account with BrowserStack, you can author tests for Web, Mobile Web, and Mobile applications on Testsigma, and then run those tests on BrowserStack’s cloud devices.

---

## **Prerequisites**

You need the username and API Key for BrowserStack which can be obtained from your BrowserStack account dashboard.

This can be obtained from the Account Settings page under Automate as shown below :

![BrowserStack Account Settings](https://docs.testsigma.com/images/browserstack/browserstack-account-settings-username-api-keys.png)

You should already know about different [Test Lab Types in Testsigma](https://testsigma.com/docs/test-management/test-plans/supported-test-lab-types/)

---

## **Integrating with BrowserStack**

Once the username and API key is obtained, navigate to the Plugins page through **Dashboard > Settings > Plugins** and select BrowserStack under the Test Lab tab.

  1. Click on the disabled icon on BrowserStack. BrowserStack Details overlay opens up.
  2. Enter the username and API Key obtained from BrowserStack here.

After entering the details, click on the Create button to add the Integration.

---

## **Using BrowserStack for Test Runs**

Once the account details are added to the Plugins page, select BrowserStack as the Test Lab type instead of Testsigma Lab while creating an Ad-hoc run or Test Plan Run.

![Select BrowserStack as the Test lab Type for Test Plan Run or Ad-hoc Run GIF](https://docs.testsigma.com/images/browserstack/select-test-lab-browserstack-gif.png)


---