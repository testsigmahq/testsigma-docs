---
title: "Environment Test Data"
page_title: "Environment Test Data in Testsigma"
metadesc: "What is Environment test data and how to use it in Testsigma"
noindex: false
order: 5.24
page_id: "Environment Test Data"
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

Environment-based test data refers to data that is specific to the environment in which the application is being tested. This can include things like server names, port numbers, database credentials, and other configuration details that are unique to the environment. Including environment-based test data in test cases can help ensure that the application behaves correctly in different environments, such as **development**, **testing**, **staging**, and **production**.

---

### **Prerequisite**:

You'll need to know how to [create an environment parameter](https://testsigma.com/docs/test-d  ata/create-environment-data/), [create a test case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#creating-a-test-case), [write NLP test steps in Testsigma](https://testsigma.com/docs/test-cases/step-types/natural-language/), [perform an ad-hoc run page](https://testsigma.com/docs/runs/adhoc-runs/#steps-to-perform-ad-hoc-runs-for-a-test-case),  and [create a test plan](https://testsigma.com/docs/runs/test-plan-executions/#steps-to-create-and-execute-test-plan).

---

## **Use Environment in Test Steps**

1. Create a **test step** with a **test data** placeholder in the **NLP**.

2. Delete the **test data** placeholder and choose **Environment** from the drop-down.

3. Choose the specific **test data** you need from the right-side panel.

Here is a quick GIF demonstrating the above workflow:

 ![ a gif demonstrating the use of environment based test data in test case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-data/create-environment-data/gif-use-environment-based-test-data-in-test-case.gif)

 ---

## **Use Environment in Ad-hoc Run page**

1. On the **Ad-hoc Run** page, click the right arrow before **Additional Settings** to reveal the feature.
2. Select **Environmet** from the drop-down list.

Here is a quick GIF demonstrating the above workflow:
![Environment in ad-hoc run page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/environment_adhocrun.gif)

---

## **Use Environment in Test Plan**

1. On the **Create** or **Edit test plan** page, navigate to the **Test Plan Settings** tab and click the right arrow before **Additional Settings** to reveal the feature.

2. Select **Environmet** from the drop-down list.

Here is a quick GIF demonstrating the above workflow:
![Environment in Test Plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/environment_tp.gif)
