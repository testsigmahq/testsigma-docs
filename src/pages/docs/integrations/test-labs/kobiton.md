---
title: "Integrate Testsigma with Kobiton"
metadesc: "Kobiton integration lets you execute your Testsigma tests on BrowserStack. Learn how to integrate the Kobiton Test Execution Platform with Testsigma"
noindex: false
order: 16.45
page_id: "integrate-testsigma-with-kobiton"
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
> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that: 
> 1. You have the username and API Key for Kobiton which can be obtained from your Kobiton account dashboard. This can be obtained from the Account Settings page in Kobiton:
>    - * **Email:** your login email.
>    - * **ApiKey:** In Settings/API Keys on the Kobiton portal.
> 2. You have referred to the [documentation on supported test lab Types in Testsigma](https://testsigma.com/docs/test-plans/supported-test-lab-types/) .

---
## **Integrating with Kobiton**

Once the username and API key is obtained, navigate to the **Integrations** page through **Dashboard > Settings > Integrations**. 

1. Enable the toggle next to **Kobiton**. 
2. in the **Kobiton details** dialog, enter the username and API Key obtained from **Kobiton** here.
3. After entering the details, click on the **Save & Enable** button to add the integration.
![Kobiton](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integrations/update_kobiton_1.png)

---
## **Using Kobiton for Test Runs**

Once the account details are added to the **Integrations** page, select **Kobiton** as the **Test Lab** type instead of Testsigma Lab while creating an Ad-hoc run or Test Plan Run.

---