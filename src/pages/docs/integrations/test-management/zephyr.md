---
title: "Zephyr Cloud Integration with Testsigma"
page_title: "Zephyr Cloud Integration with Testsigma"
metadesc: "Zephyr is a Test Management tool that gives the structure to organize, plan, and report the progress of testing. Learn how to integrate Zephyr with Testsigma Platform"
noindex: false
order: 16.59
page_id: "zephyr-integration-with-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Integrate Testsigma with Zephyr Cloud"
  url: "#steps-to-integrate-testsigma-with-zephyr-cloud"
- type: link
  name: "Link a Zephyr Test Case to a Testsigma Test Case"
  url: "#link-a-zephyr-test-case-to-a-testsigma-test-case"
- type: link
  name: "Link a Zephyr Test Plan to a Testsigma Test Plan"
  url: "#link-a-zephyr-test-plan-to-a-testsigma-test-plan"
- type: link
  name: "Check Results in Zephyr"
  url: "#check-results-in-zephyr"
---

---

With the Zephyr Cloud integration in Testsigma, you can link Zephyr test cases and test plans with their corresponding Testsigma test cases and test plans. You can also export Testsigma run results to Zephyr. This article discusses how to integrate Zephyr Cloud with Testsigma.

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that: 
> 1. You have a valid **Personal Access Token** from Zephyr Cloud.
> 2. You have your Jira **Account URL**, **Username**, and **API key**.
> 3. You have referred to the [documentation on creating test cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).
> 4. You have referred to the [documentation on creating test plans](https://testsigma.com/docs/test-plans/overview/).

---

## **Steps to Integrate Testsigma with Zephyr Cloud**

1. From the left navigation bar, go to **Settings > Integrations**.

2. Turn on the toggle for **Zephyr Cloud**.
   ![Zephyr Widget](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Zephyr_Widget.png)

3. In the **Zephyr Cloud Details** dialog box, select **Region of your Zephyr instance**, enter your **Personal Access Token** and **Jira Details**.
   ![Zephyr Cloud Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Zephyr_Cloud_Details.png)

4. Click **Save & Enable**.
   ![Save Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Save_Zephyr_Details.png)

---

## **Link a Zephyr Test Case to a Testsigma Test Case**

1. Get the **ID** of an existing test case from **Zephyr Cloud**.

2. In Testsigma, go to **Create Tests > Test Cases**.

3. Open the test case you want to link, and click **Manage Test Case**.

4. Enter the Zephyr test case ID, and click the **Link** button.
   ![Link Zephyr Case with ID](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Zephyr_Case_ID.png)

---

## **Link a Zephyr Test Plan to a Testsigma Test Plan**

1. Get the **ID** of an existing test plan from **Zephyr Cloud**.

2. In Testsigma, go to **Test Plans**, and open the test plan you want to link.

3. Enter the Zephyr test plan ID, and click the **Link** button.
   ![Link Zephyr Plan with ID](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Zephyr_Plan_ID.png)

---

## **Check Results in Zephyr**

1. Execute the linked test plan in Testsigma, and wait for the execution to complete.

2. Once the execution is complete, click **Zephyr Execution**.
   ![Zephyr Execution](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Zephyr_Execution.png)

3. You’ll be redirected to **Zephyr Cloud**, where you can view the execution details.

---