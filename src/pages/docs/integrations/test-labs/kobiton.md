---
title: "Integrate Testsigma with Kobiton"
metadesc: "Kobiton integration lets you execute your Testsigma tests on BrowserStack. Learn how to integrate the Kobiton Test Execution Platform with Testsigma"
noindex: false
order: 16.45
page_id: "Integrate Testsigma with Kobiton"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Integrating with Kobiton"
  url: "#integrating-with-kobiton"
- type: link
  name: "Using Kobiton for Test Runs"
  url: "#using-kobiton-for-test-runs"
---

---

Kobiton integration with Testsigma lets you run your Testsigma tests on Kobiton.
If your organization has an existing account with Kobiton, you can author tests for Web, Mobile Web, and Mobile applications on Testsigma, and then run those tests on Kobiton’s cloud devices.

---
## **Prerequisites**

We just need the username and API Key for Kobiton which can be obtained from your Kobiton account dashboard.

This can be obtained from the Account Settings page in Kobiton:
  * **Email:** your login email.
  * **ApiKey:** In Settings/API Keys on the Kobiton portal.

You should already know about different [Test Lab Types in Testsigma](https://testsigma.com/docs/test-management/test-plans/supported-test-lab-types/) .

---
## **Integrating with Kobiton**


Once the username and API key is obtained, navigate to the Plugins page through **Dashboard > Settings > Plugins** and select Kobiton under the Test Lab Tab.

  1. Click on the disabled Icon on Kobiton. Kobiton Details overlay opens up.

  ![window to add kobiton integration to Testsigma](https://docs.testsigma.com/images/kobiton/add-kobiton-integration.png)

  2. Enter the username/email and API Key obtained from Kobiton here.

After entering the details, click on the Create button to add the Integration.

---
## **Using Kobiton for Test Runs**

Once the account details are added to the Plugins page, select Kobiton as the Test Lab type instead of Testsigma Lab while creating an Ad-hoc run or Test Plan Run.

![Select Kobiton as the Test lab Type for Test Plan Run or Ad-hoc Run](https://docs.testsigma.com/images/kobiton/select-test-lab-kobiton.png)

