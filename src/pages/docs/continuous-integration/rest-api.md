---
title: "Integrate Testsigma with your CI/CD using REST API (Generic)"
metadesc:  "How to integrate Testsigma with your CI/CD tool via a generic REST API"
order: 12.12
page_id: "Integrate Testsigma with your CI/CD using REST API (Generic)"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "pre-requisites"
  url: "#pre-requisites"
- type: link
  name: "How to get the Testsigma Test Plan Trigger API"
  url: "#how-to-get-the-testsigma-test-plan-trigger-api"
- type: link
  name: "The CURL request format will look like this:"
  url: "#the-curl-request-format-will-look-like-this"
- type: link
  name: "How to get the Testsigma Test Plan Status Check API"
  url: "#how-to-get-the-testsigma-test-plan-status-check-api"
- type: link
  name: "SCRIPT METHOD:"
  url: "#script-method"
---
You can integrate Testsigma with your CI/CD tool to run automated tests on builds by:

1. Making a POST request to the Testsigma Test Plan Trigger API, or

2. Using the Test Plan Status Check API to regularly check for the execution status of your tests, until its complete.

---
##**Pre-requisites:**
 You should already have the test plan that you want to execute. See [Test plan management](https://testsigma.com/docs/test-management/test-plans/overview/)

You should also know how to [generate an API key from Settings](http://testsigma.com/docs/configuration/api-keys/) and get Test Plan ID from an existing Test Plan. If not, [please refer here](https://testsigma.com/docs/continuous-integration/get-test-plan-details/)
---
##**How to get the Testsigma Test Plan Trigger API**
1. Go to the specific Test Plan details page in the Testsigma tool (for the Test Plan that you want to include in your CI/CD Pipeline.) 

2. Go to the CI/CD Integrations section on the Test Plan Details page.

3. You will see the CURL request under the ‘REST API to integrate with other tools > REST API call to start Test Plan’. 
---
##**The CURL request format will look like this:**
```
curl -X POST -H "Content-type: application/json" \
-H "Accept:application/json" \
-H "Authorization: Bearer <API_KEY>"\
 https://app.testsigma.com/api/v1/execution_results \
-d "{\"executionId\": \"2090\"}"
```

### The same can be done using any other REST API Client with the following details:


**Request Type:**  POST

**Request URL:** 

**HTML**
https://app.testsigma.com/api/v1/execution_results

**Authorization:**  Bearer <API_KEY>

**Request Header:**JavaScript

**Content-type:** application/jsonAccept:application/json

**Request Body:** 

```{    "executionId":"<TEST_PLAN_ID>",    "buildNo":"<BUILD_NO>"}```


 - The **<TEST_PLAN_ID>** is used to identify the Test Plan which is to be triggered. This can be obtained from the corresponding [ Test Plan details page](https://testsigma.com/docs/continuous-integration/get-test-plan-details/)

 - The **<API_KEY>** is used to authenticate your user in Testsigma API. This can be obtained from the Settings> API_Keys by [creating a new API Key](http://testsigma.com/docs/configuration/api-keys/)

- The **<BUILD_NO>** is the Build number/Version for your corresponding Application Build against which you are running the Tests. This can be obtained from the Dev team or Build Stage in the CI/CD Pipeline.

---
##**How to get the Testsigma Test Plan Status Check API**
 
This API can be used to check the status of the Test Plan once the Test Plan execution is triggered successfully.
 
There are 2 differences here compared to the previous API.
1. This is a GET request compared to the previous POST request.
2. We need one more detail i.e the RUN_ID for the triggered Test Plan. This is obtained as the value of the key 'id' in the JSON response for the previous API.

Perl
```
curl -X GET -H "Content-type: application/json" \
-H "Accept:application/json"\
 -H "Authorization: Bearer <API_KEY>"\
 https://app.testsigma.com/api/v1/execution_results/41795
```

### The same can be done using any other REST API Client with the following details:

**Request Type:** GET
**Request URL:** 

HTML

https://app.testsigma.com/api/v1/execution_results/<RUN_ID>
**Authorization:** Bearer <API_KEY>
**Request Header:** JavaScript

**Content-type:** application/jsonAccept:application/json
 
 - The **<RUN_ID>** can be obtained as the value of the key 'id' in the JSON response for the previous API.
- The **<API_KEY>** can be obtained from the Settings> API_Keys by creating a new API Key.
 
---
##**SCRIPT METHOD:**

If you want to start the Execution and then check the execution status in regular intervals you can make use of a [Generic Shell Script for Integrating with any CI/CD Tool.](https://testsigma.com/docs/continuous-integration/shell-script/)
 
That's all we need to automate Test Execution when a successful build is triggered using the CI server.



