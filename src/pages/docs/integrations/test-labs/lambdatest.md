---
title: "Integrate Testsigma with LambdaTest"
metadesc: "LambdaTest integration lets you execute your Testsigma tests on BrowserStack. Learn how to integrate the LambdaTest Test Execution Platform with Testsigma"
noindex: false
order: 16.44
page_id: "Integrate Testsigma with LambdaTest"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Integrating with LambdaTest"
  url: "#integrating-with-lambdatest"
- type: link
  name: "Using LambdaTest for Test Runs"
  url: "#using-lambdatest-for-test-runs"
- type: link
  name: "View Test Execution Details"
  url: "#view-test-execution-details"
---

---

LambdaTest integration with Testsigma lets you run your Testsigma tests on LambdaTest.
If your organization has an existing account with LambdaTest, you can author tests for Web, Mobile Web, and Mobile applications on Testsigma, and then run those tests on LamdaTest’s cloud devices.

---
## **Prerequisites**

You just need the username and API Key for LambdaTest which can be obtained from your LambdaTest account dashboard.

This can be obtained from the Account Settings page as shown below:

![Username and Access Token in LambdaTest Profile page ](https://docs.testsigma.com/images/lambdatest/lambdatest-profile-username-access-token.png)

You should already know about different [Test Lab Types in Testsigma](https://testsigma.com/docs/test-management/test-plans/supported-test-lab-types/).

---
## **Integrating with LambdaTest**

Once the username and API key is obtained, navigate to the Plugins page through Dashboard > Settings > Plugins and select LambdaTest under the Test Lab Tab.
 1. Click on the disabled Icon on LambdaTest. LambdaTest Details overlay opens up.
 2. Enter the username and API Key obtained from LambdaTest as shown below :

 ![LambdaTest Account details in Plugins Test lab page](https://docs.testsigma.com/images/lambdatest/plugins-enable-lambdatest-integration-email-key.png)

 After entering the details, click on the Create button to add the Integration.

---
## **Using LambdaTest for Test Runs**

Once the account details are added to the Plugins page, select LambdaTest as the Test Lab type instead of Testsigma Lab while creating an Ad-hoc run or Test Plan Run.

![LambdaTest selected in Create Ad-hoc Run page](https://docs.testsigma.com/images/lambdatest/create-adhoc-run-testlab-lt-selected.png)

---
## **View Test Execution Details**

LambdaTest restricts the availability of Test Results outside their platform. Therefore, you may need to check LambdaTest App if you want to get granular details about the Test Runs.

As soon as you execute the tests from Testsigma, the test execution will start on the LambdaTest platform as well. To view the test execution details, open the Automation dashboard in LambdaTest. You will see your test details on the top, as shown below:

![Test Results in LambdaTest Dashboard](https://docs.testsigma.com/images/lambdatest/lt-dashboard-test-results.png)
