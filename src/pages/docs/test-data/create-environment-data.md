---
title: "Create Environment Test Data"
page_title: "Create Environment Test Data | Testsigma Documentation"
metadesc: "Learn how to create environment test data for efficient testing. Follow our guide to streamline your test process and ensure accurate results in Testsigma."
noindex: false
order: 5.23
page_id: "create-test-data-environment"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to Create Environment Test Data"
  url: "#steps-to-create-environment-test-data"
- type: link
  name: "Manage Environment Test Data"
  url: "#manage-environment-test-data"

---

---

Create environment test data in Testsigma to ensure effective and accurate testing of your applications. Test data will allow you to simulate real-world scenarios by providing necessary input for your tests. Use different test data for each environment if you have multiple testing environments. For example, if your test runs in both staging and QA environments use two separate test data sets for each environment.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that you have referred to:
> 1. [Documentation on creating projects](https://testsigma.com/docs/projects/overview/).
> 2. [Documentation on creating test data types](https://testsigma.com/docs/test-data/types/overview/).
> 3. [Documentation on creating environments](https://testsigma.com/docs/test-data/types/environment/).

---

## **Steps to Create Environment Test Data**

1. From the left navigation bar, go to **Test Data > Environment**.
   ![Environment](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_envi_1.png)

2. In the **Environment** list page, click **Create Environment**. 
   ![Create Environment](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_envi_2.png)

3. In the **Create Environment** dialog, enter a name and click **Create**. 
   ![Name](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_envi_3.png)

4. Once you have created the environment, select it, and click **Add Variable**.
   ![Add Variable](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_envi_4.png)

5. In the **Add Environment Variable** dialog, enter the variable name and its value, and click **Create**. 
   ![Varibale name and value](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_envi_5.png)

6. Click the **JSON** tab to download a JSON file that contains information about the variables within this environment.
   ![JSON](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_envi_6.png) 

[[info | NOTE:]]
| Click the **lock** icon in the Value field to encrypt the parameter value to hide its value during testing.

---

## **Manage Environment Test Data**

1. **Linked Test Plans**: Click Linked Test Plans in the right-side navbar and view the environment linked to the test plans.
   ![Linked Test Plans](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_envi_7.png)
 
2. **Activity**: Click Activity in the right-side navbar and view the **history** and **comments** of the environment.
   ![Activity](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_envi_8.png)

3. Click the **Delete** button in the top right corner of the **Environment Details** page to remove the environment from the project. A Delete Confirmation pop-up will appear. Click **Delete**. 
   ![Manage Environment Delete](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_envi_9.png)

[[info | NOTE:]]
| If you try to delete an Environment linked to a Test Plan, the application will warn and block the deletion. You must remove the Environment from the related Test Plans before trying the deletion again. Deleting the Environment will result in the loss of its associated configuration.

---
