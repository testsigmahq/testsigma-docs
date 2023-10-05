---
title: "Create Environment Test Data"
page_title: "Create Environment Test Data | Testsigma Documentation"
metadesc: "Learn how to create environment test data for efficient testing. Follow our guide to streamline your test process and ensure accurate results in Testsigma."
noindex: false
order: 5.23
page_id: "Create Test Data - Environment"
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

### **Prerequisites**

Before creating environment test data, you must understand specific concepts, such as creating [Projects](https://testsigma.com/docs/projects/overview/) and effectively using them with [Test Data Types](https://testsigma.com/docs/test-data/types/overview/) and [Environments](https://testsigma.com/docs/test-data/types/environment/).

---

## **Steps to Create Environment Test Data**

1. Navigate to **Test Data** > **Environments** in the left-side navbar. Click the **Create Environment** button in the top right corner of the Environments List page.
2. **Environment Info**: Enter a **title** for the environment on the right-side navbar of the **Environment Info** overlay screen. Then, provide a brief **Description** explaining the purpose and scope of the environment. This will help your team members understand the objectives of the environment. You can also view information about the **creation** and **last update** of the environment.
3. Enter the **Names** and **Values** for the **Parameters** in this environment. Mention each parameter name along with its corresponding value. After adding a value for a pair, click **Add New Row** for the next pair, enabling you to add more key-value pairs as required.
[[info | NOTE:]]
| Click the **lock** icon in the Value field to encrypt the parameter value to hide its value during testing.
4. Alternatively, select the tab labelled **JSON Format** and add these values in JSON format.
5. Click the **Create** button located in the top right corner of the Environment Details page to create the environment. ![Create Environment](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/create_environment_ts.gif)

---

## **Manage Environment Test Data**

1. **Linked Test Plans**: Click Linked Test Plans in the right-side navbar and view the environment linked to the test plans.
2. **Activity**: Click Activity in the right-side navbar and view the **history** and **comments** of the environment.
3. Click the **Delete** button in the top right corner of the **Environment Details** page to remove the environment from the project. A Delete Confirmation pop-up will appear. Click **Delete**. ![Manage Environment Delete](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/manage_environment_ts.gif)

[[info | NOTE:]]
| If you try to delete an Environment linked to a Test Plan, the application will warn and block the deletion. You must remove the Environment from the related Test Plans before trying the deletion again. Deleting the Environment will result in the loss of its associated configuration.

---
