---
title: "Environment Test Data"
page_title: "Environment Test Data: Streamlining Test Execution in Testsigma"
metadesc: "Learn how to use Environment Test Data in Testsigma to enhance testing efficiency. Streamline your testing process by using it in test steps, ad-hoc runs, and test plans now!"
noindex: false
order: 5.24
page_id: "environment-test-data-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Use Environment in Test Steps"
  url: "#use-environment-in-test-steps"
- type: link
  name: "Use Environment in Ad-hoc Run page"
  url: "#use-environment-in-ad-hoc-run-page"
- type: link
  name: "Use Environment in Test Plan"
  url: "#use-environment-in-test-plan"
  
---

---

In Testsigma, you can handle and use specific sets of test data linked to different test environments with Environment Test Data. You can include this data in the specific environment where the app is tested, like server names, port numbers, and database credentials. Integrating this environment-specific data into test cases allows you to verify the app's behaviour across different environments such as development, testing, staging, and production. This guide provides an overview of using Environment Test Data in Testsigma across test steps, ad-hoc runs, and test plans.

---

### **Prerequisite**:

Before using Environment Test Data, you must understand specific concepts such as creating a [Test Case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#creating-a-test-case), [Test Steps](https://testsigma.com/docs/test-cases/step-types/natural-language/), [Environment](https://testsigma.com/docs/test-data/create-environment-data/), and [Test Plan](https://testsigma.com/docs/runs/test-plan-executions/#steps-to-create-and-execute-test-plan) and how to use them with [Test Data Types](https://testsigma.com/docs/test-data/types/overview/), [Ad-hoc Runs](https://testsigma.com/docs/runs/adhoc-runs/#steps-to-perform-ad-hoc-runs-for-a-test-case).

---

## **Use Environment in Test Steps**

1. Use **NLP** to create a **new step** in the **Test Case** and include a placeholder for **test data**.
2. Click the **test data** placeholder to replace it, and then select the *** Environment** from the **Test Data Types** dropdown menu.
3. Select **Environment** in the **Environments** overlay screen from the right-side panel. ![Environment in Test Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/teststeps_environment.gif)

---

## **Use Environment in Ad-hoc Run page**

1. On the **Ad-hoc Run** page, click the right arrow before **Additional Settings** to reveal the feature.
2. Select **Environmet** from the drop-down list. ![Environment in Ad-hoc Run](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/adhoc_run_environment.png)

---

## **Use Environment in Test Plan**

1. Navigate to the **Test Plan Settings** tab on the **Create** or **Edit Test Plan** page.
2. In the **Additional Settings** section, select **Environment** from the drop-down list. ![Environment in Test Plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/testplan_environment.png)

---
