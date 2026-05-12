---
title: "Integrate Testsigma with TestMU"
metadesc: "TestMU integration lets you execute your Testsigma tests on TestMU. Learn how to integrate the TestMU Test Execution Platform with Testsigma"
noindex: false
order: 17.44
page_id: "integrate-testsigma-with-testmu"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Integrating with TestMU"
  url: "#integrating-with-testmu"
- type: link
  name: "Using TestMU for Test Runs"
  url: "#using-testmu-for-test-runs"
- type: link
  name: "View Test Execution Details"
  url: "#view-test-execution-details"
---

---

TestMU integration with Testsigma lets you run your Testsigma tests on TestMU. If your organization has an existing account with TestMU, you can author tests for Web, Mobile Web, and Mobile applications on Testsigma, and then run those tests on TestMu's cloud devices.

---
> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that: 
> 1. You have the username and API Key for TestMU which can be obtained from your TestMU account dashboard. 
> 2. You have referred to the [documentation on supported test lab types in Testsigma](https://testsigma.com/docs/test-plans/supported-test-lab-types/).

---
## **Integrating with TestMU**

Once the username and API key is obtained, navigate to the **Integrations** page through **Dashboard > Settings > Integrations**. 

1. Enable the toggle next to **TestMU**. 
2. in the **TestMU details** dialog, enter the username and API Key obtained from **TestMU** here.
3. After entering the details, click on the **Save & Enable** button to add the integration.
![LTestMU](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_lambdatest_1.png)

---
## **Using TestMU for Test Runs**

Once the account details are added to the **Integrations** page, select **TestMU** as the **Test Lab** type instead of Testsigma Lab while creating an Ad-hoc run or Test Plan Run.
![TestMU selected in Create Ad-hoc Run page](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_lambdatest_2.png)

---
## **View Test Execution Details**

TestMU restricts the availability of Test Results outside their platform. Therefore, you may need to check TestMU App if you want to get granular details about the Test Runs.

As soon as you execute the tests from Testsigma, the test execution will start on the TestMU platform as well. To view the test execution details, open the Automation dashboard in TestMU. You will see your test details on the top, as shown below:

---
