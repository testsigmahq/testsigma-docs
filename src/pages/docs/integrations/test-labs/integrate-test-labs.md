---
title: "Integrations with Test Labs"
pagetitle: "Unlock Seamless Test Lab Integration for Cloud Testing"
metadesc: "Start integrating with test labs to run tests on cloud devices effortlessly. Explore easy steps and prerequisites for successful integration."
noindex: false
order: 16.41
page_id: "integrate-test-lab-with-Testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Integrating Testsigma with Test Lab"
  url: "#integrating-testsigma-with-test-lab"
- type: link
  name: "Manage Integrated Test Lab"
  url: "#manage-integrated-test-lab"
- type: link
  name: "Perform Test Run for Integrated Test Lab"
  url: "#perform-test-run-for-integrated-test-lab"
---

---

Testsigma integrates with various test labs, allowing you to run your tests on cloud devices. This guide will walk you through the steps to integrate Testsigma with popular test labs like BrowserStack, SauceLabs, LambdaTest, and Kobiton.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that: 
> 1. You have referred to the [documentation on supported test labs in Testsigma](https://testsigma.com/docs/test-plans/supported-test-lab-types/). 
> 2. You have the necessary information for integration:
>    - **BrowserStack**: Username and API Key from BrowserStack.
>    - **SauceLabs**: Username and API Key from SauceLabs.
>    - **LambdaTest**: Username and API Key from LambdaTest.
>    - **Kobiton**: Username/Email and API Key from Kobiton.

---

## **Integrating Testsigma with Test Lab**

To enable Test Lab, follow these steps by providing credentials and integrating other Test Labs in Testsigma.

1. Navigate to **Settings** > **Integrations** > **Test Lab** tab.
2. Click the **toggle** to enable the test lab integration with your Testsigma account. A popup screen will display the details for the selected Test Lab.
3. Enter the **Username/Email** and **API Key** of your **Test Lab** in the provided fields. Confirm your **API Key** by entering the respective fields on the pop-up screen.
4. Click the **Save & Enable** button to complete the integration setup. 
   ![Integrate Test Labs](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/integrate_testlab.png)

---

## **Manage Integrated Test Lab**

Effectively manage your integrated test labs in Testsigma by updating credentials or deleting integrated labs:

1. Navigate to **Settings** > **Integrations** > **Test Lab** tab.

2. Click **Manage** to open the popup screen with details for the enabled test lab.
   ![Manage Integrated Test Lab](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Manage_Test_Lab_Integration.png)

3. Change the **Username** and **API Key** to update the credentials for the test lab. Save the changes by clicking **Update Details**.
   ![Update Details](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Update_Test_Lab_Details.png)

4. Click on **Delete Credentials** to remove the integration. A confirmation pop-up will appear. Enter **DELETE** to confirm the deletion, then click **I understand, delete & disable plugin**. 
   ![Manage Integrated Test Labs](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/manage_testlabs.png)

[[info | NOTE:]]
| If you try to delete a Test Lab connected to execution, the application will show a warning to stop the deletion and disable the test lab. You need to remove the Test Lab from the linked execution before attempting to delete it again.

---

## **Perform Test Run for Integrated Test Lab**

Select the **Test Lab Type** as an integrated test lab when running a test in **Ad-hoc Runs** for a Test Case or **Test Machine** for a Test Plan to execute a test run. 
![Perform Integrated Test Lab](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/perform_integratedtestlab.png)

---