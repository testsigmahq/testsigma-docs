---
title: "Integrate Testsigma with your CI/CD using REST API (Generic)"
metadesc:  "Integrate Testsigma with your CI/CD tool via a generic REST API. You can trigger test plans using API and check status of the execution using the API details"
noindex: false
order: 12.12
page_id: "Integrate Testsigma with your CI/CD using REST API (Generic)"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Trigger Test Plans Using API"
  url: "#trigger-test-plans-using-api"
- type: link
  name: "Check the Status of Test Plan Execution Using API"
  url: "#check-the-status-of-test-plan-execution-using-api"
- type: link
  name: "Script Method"
  url: "#script-method"
- type: link
  name: "Executing Tests Plans in Different Environments"
  url: "#executing-tests-plans-in-different-environments"
---

---


You can integrate Testsigma with your CI/CD tool and trigger test plans and check execution status using REST APIs. This article discusses how to make requests to Testsigma to trigger test plans and check status using CURL & API requests.  



---

## **Prerequisites**

- You should already have the test plan that you want to execute. See [test plan management](https://testsigma.com/docs/test-management/test-plans/overview/)

- You should also know how to [generate an API key from settings](https://testsigma.com/docs/configuration/api-keys/) and get **Test Plan ID** from an existing Test Plan. See [getting test plan details](https://testsigma.com/docs/continuous-integration/get-test-plan-details/). 


---


## **Trigger Test Plans Using API**

1. Go to the specific **Test Plan Details** page in the Testsigma application (for the Test Plan that you want to include in your CI/CD Pipeline) 

2. Go to the **CI/CD Integrations** section on the **Test Plan Details** page.

3. You will see the CURL request under the **REST API to integrate with other tools > REST API call to start Test Plan**. 

### **Trigger Tests through CURL request:**

```

curl -X POST -H "Content-type: application/json" 
-H "Accept:application/json" 
-H "Authorization: Bearer <API_KEY>" https://app.testsigma.com/api/v1/execution_results 
-d "{\"executionId\": \"301\", \"environmentId\": \"<ENVIRONMENT_ID>\"}"

```

You can execute this CURL command in your computer's command-line interface (CLI). 

### The same can be done using any other REST API client with the following details:


| **Request Type**  | POST                                                       |
|-------------------|------------------------------------------------------------|
| **Request URL**   | https://app.testsigma.com/api/v1/execution_results       |
| **Authorization** | Bearer <API\_KEY>                                         |
| **Content-type**  | application/json                                         |
| **Accept**        | application/json                                         |
| **Request Body**  | { <br> "executionId": "<TEST\_PLAN\_ID>", <br> "buildNo": "<BUILD\_NO>" <br> "environmentId": <ENVIRONMENT\_ID> } |


 - The **<TEST\_PLAN\_ID>** is used to identify the Test Plan which is to be triggered. This can be obtained from the corresponding [test plan details page](https://testsigma.com/docs/continuous-integration/get-test-plan-details/).

 - The **<API\_KEY>** is used to authenticate your user in Testsigma API. This can be obtained from the **Settings > API Keys** by [creating a new API key](https://testsigma.com/docs/configuration/api-keys/).

- The **<BUILD\_NO>** is the Build number/Version for your corresponding Application Build against which you are running the Tests. This can be obtained from the Dev team or Build Stage in the CI/CD Pipeline.

---

## **Check the Status of Test Plan Execution Using API**
 
This API can be used to check the status of the Test Plan using GET method once the Test Plan execution is triggered successfully. Make sure to get RUN_ID for the triggered Test Plan.

`PERL`

```
curl -X GET -H \"Content-type: application/json\" \\
-H \"Accept:application/json\" \\
-H \"Authorization: Bearer <API_KEY>\" \\
https://app.testsigma.com/api/v1/execution_results/<RUN_ID>";
```

You can execute this CURL command in your computer's command-line interface (CLI). 


### The same can be done using any other REST API client with the following details:


| **Request Type**  | GET                                                                   |
|-------------------|-----------------------------------------------------------------------|
| **Request URL**   | https://app.testsigma.com/api/v1/execution_results/<RUN\_ID>         |
| **Authorization** | Bearer <API\_KEY>                                                    |
| **Content-type**  | application/json                                                    |
| **Accept**        | application/json                                                    |

 
- The **<RUN_ID>** can be obtained as the value of the key 'id' in the JSON response for the previous API.
- The **<API_KEY>** can be obtained from the **Settings > API_Keys** by creating a new API Key.

---

## **Executing Tests Plans in Different Environments**

To execute a test plan with different Environments, you need to have an Environment ID. You can find the Environment ID by following the steps below. 

### **Get Environment ID**

1. Navigating to **Test Data > Environments**, and click on an **Environment**.


2. On the Environment page, the <ENVIRONMENT\_ID> in the URL `https://app.testsigma.com/ui/td/88/environments/<ENVIRONMENT_ID>/details` is the ID of the environment. 

![Environments](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ttpuapienv.png)

- For Example, if the URL is `https://app.testsigma.com/ui/td/88/environments/10/details`, the **ID** is **10**. 

### **Executing Tests Plans with Different Environments**

1. Navigate to **Test Plans > Test Plan > CI/CD Integrations**, and copy **CURL request** under **REST API to integrate with other tools > REST API call to start Test Plan**.
![CURL](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ttpuapicurl.png)

2. Provide the Environment ID in the request body. 

```
curl -X POST \
-H "Content-type: application/json" \
-H "Accept:application/json" \
-H "Authorization: Bearer <API_KEY>" \
https://app.testsigma.com/api/v1/execution_results \
-d "{\"executionId\": \"301\", \"environmentId\": \"<ENVIRONMENT_ID>\"}"
```

You can execute this CURL command in your computer's command-line interface (CLI) to trigger test plan with the environment specific to the given ID. 

---

## **Script Method**

If you want to start the Execution and then check the execution status in regular intervals you can make use of a [generic Shell Script for integrating with any CI/CD tool](https://testsigma.com/docs/continuous-integration/shell-script/).
 
That's all we need to automate Test Execution when a successful build is triggered using the CI server.

---