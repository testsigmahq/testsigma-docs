---
title: "Integrate Testsigma with SauceLabs"
metadesc: "SauceLabs integration lets you execute your Testsigma tests on BrowserStack. Learn how to integrate the SauceLabs Test Execution Platform with Testsigma"
noindex: false
order: 16.44
page_id: "Integrate Testsigma with SauceLabs"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Integrating with SauceLabs"
  url: "#integrating-with-saucelabs"
- type: link
  name: "Using SauceLabs for Test Runs"
  url: "#using-saucelabs-for-test-runs"
---

---

SauceLabs integration with Testsigma lets you run your Testsigma tests on SauceLabs.
If your organization has an existing account with SauceLabs, you can author tests for Web, Mobile Web, and Mobile applications on Testsigma, and then run those tests on SauceLabs’ cloud devices.

---
## **Prerequisites**

You just need the username and API Key for SauceLabs which can be obtained from your SauceLabs account dashboard.

This can be obtained from the Account Settings page as shown below :

![User credentials in Saucelabs Account Settings page](https://docs.testsigma.com/images/sauce-labs/saucelabs-user-creds-username-key.png)

You should already know about different [Test Lab Types in Testsigma](https://testsigma.com/docs/test-management/test-plans/supported-test-lab-types/)

---
## **Integrating with SauceLabs**

Once the username and API key is obtained, navigate to the Plugins page through **Dashboard > Settings > Plugins** and select **SauceLabs** under the Test Lab Tab.

 1. Click on the disabled Icon on SauceLabs. SauceLabs Details overlay opens up.
 2. Enter the username and API Key obtained from SauceLabs here.

After entering the details, click on the Create button to add the Integration.

![window to add sauce labs integration to Testsigma](https://docs.testsigma.com/images/sauce-labs/add-sauce-labs-integration.png)

---
## **Using SauceLabs for Test Runs**

Once the account details are added to the Plugins page, select SauceLabs as the Test Lab type instead of Testsigma Lab while creating an Ad-hoc run or Test Plan Run.

![Select SauceLabs as the Test lab Type for Test Plan Run or Ad-hoc Run](https://docs.testsigma.com/images/sauce-labs/select-test-lab-saucelabs.png)
