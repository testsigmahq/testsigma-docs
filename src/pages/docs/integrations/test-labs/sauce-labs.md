---
title: "Integrate Testsigma with SauceLabs"
metadesc: "SauceLabs integration lets you execute your Testsigma tests on BrowserStack. Learn how to integrate the SauceLabs Test Execution Platform with Testsigma"
noindex: false
order: 16.44
page_id: "integrate-testsigma-with-saucelabs"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Integrating with Sauce Labs"
  url: "#integrating-with-sauce-labs"
- type: link
  name: "Using SauceLabs for Test Runs"
  url: "#using-saucelabs-for-test-runs"
---

---

SauceLabs integration with Testsigma lets you run your Testsigma tests on SauceLabs.
If your organization has an existing account with SauceLabs, you can author tests for Web, Mobile Web, and Mobile applications on Testsigma, and then run those tests on SauceLabs’ cloud devices.

---
> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that:
> 1. You have the username and API Key for SauceLabs which can be obtained from your SauceLabs account dashboard. This can be obtained from the Account Settings page as shown below :
>    ![User credentials in Saucelabs Account Settings page](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/saucelabs-user-creds-username-key.png)
> 2. You have referred to the [documentation on test lab types in Testsigma](https://testsigma.com/docs/test-plans/supported-test-lab-types/)

---
## **Integrating with Sauce Labs**

Once the username and API key is obtained, navigate to the **Integrations** page through **Dashboard > Settings > Integrations**. 

1. Enable the toggle next to **Sauce Labs**. 
2. In the **Sauce Labs details** dialog, enter the username and API Key obtained from **Sauce Labs** here.
3. After entering the details, click on the **Save & Enable** button to add the integration.

![window to add sauce labs integration to Testsigma](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/add-sauce-labs-integration.png)

---
## **Using SauceLabs for Test Runs**

Once the account details are added to the **Integrations** page, select **Sauce Labs** as the **Test Lab** type instead of Testsigma Lab while creating an Ad-hoc run or Test Plan Run.

![Select SauceLabs as the Test lab Type for Test Plan Run or Ad-hoc Run](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/select-test-lab-saucelabs.png)
