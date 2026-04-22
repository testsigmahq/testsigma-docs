---
title: "Integrate Testsigma with BrowserStack"
metadesc: "BrowserStack integration lets you execute your Testsigma tests on BrowserStack. Learn how to integrate the BrowserStack Cloud Test Execution Platform with Testsigma"
noindex: false
order: 16.42
page_id: "integrate-testsigma-with-browserstack"
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

<a href="https://www.browserstack.com/automate?utm_source=testsigma&utm_medium=partnered" rel="nofollow">BrowserStack Integration</a> with Testsigma lets you run your Testsigma tests on BrowserStack. If your organization has an existing account with BrowserStack, you can author tests for Web, Mobile Web, and Mobile applications on Testsigma, and then run those tests on BrowserStack’s cloud devices.

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that: 
> 1. You have the username and API Key for BrowserStack which can be obtained from your BrowserStack account dashboard. This can be obtained from the Account Settings page under Automate as shown below :
> ![BrowserStack Account Settings](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/browserstack-account-settings-username-api-keys.png).
> 2. You have referred to the [documentation on supported test lab types](https://testsigma.com/docs/test-plans/supported-test-lab-types/).

---

## **Integrating with BrowserStack**

Once the username and API key is obtained, navigate to the **Integrations** page through **Dashboard > Settings > Integrations**. 

1. Enable the toggle next to **BrowserStack**. 
2. in the **BrowserStack details** dialog, enter the username and API Key obtained from **BrowserStack** here.
3. After entering the details, click on the **Save & Enable** button to add the integration.

---

## **Using BrowserStack for Test Runs**

Once the account details are added to the **Integrations** page, select **BrowserStack** as the **Test Lab** type instead of Testsigma Lab while creating an Ad-hoc run or Test Plan Run.

![Select BrowserStack as the Test lab Type for Test Plan Run or Ad-hoc Run GIF](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_browserstack_1.png)


---