---
title: "Integrate Testsigma with Copado (Salesforce)"
metadesc: "Integrate Testsigma with Copado for effortless Salesforce test automation | Improve your testing efficiency accelerate Salesforce automation by integrating Testsigma with Copado"
noindex: false
order: 12.24
page_id: "Integrate Testsigma with Copado"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Configure Copado Release Manager App"
  url: "#configure-copado-release-manager-app"
---

---

Testsigma Copado integration allows you to trigger test plan execution every time a Copado deployment is triggered. You can configure steps to trigger an event upon the completion of the test plan execution, pass the results back to Copado, and pause the deployment pipeline until the test plan execution is complete. This article discusses how to integrate Testsigma with Copado in Salesforce deployments. 

---

> ## **Prerequisites**
> 
> Before you begin, ensure you are familiar with the concepts of [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/) for Salesforce, [Test Plans](https://testsigma.com/docs/test-management/test-plans/overview/) for Salesforce, and [Generating API Keys](https://testsigma.com/docs/configuration/api-keys/#steps-to-generate-api-key) in Testsigma.

---

## **Configure Copado Release Manager App**

1. Click **App Launcher** from the top navigation bar and search for **Copado Release Manager**. 
![Search Copado Release Manager](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/CopadoSearch.png)

2. In the **Copado Release Manager App**, navigate to **Deployment > Steps > Add Step**.
![Navigate to Add Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Copado_Add_Steps.png)

3. Enter a name for the step in the **Step Name** textbox and select **URL Callout** from the **Type** dropdown menu.
![Type dropdown menu](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Details_Type_Dropdown.png)

2. On the details section, follow these steps:

<br>

* In the **Type** dropdown menu, select one of the following options:
    1. **Perform callout and pause step**: This option helps you call an external system and wait for a response before deploying. It is useful when the deployment process depends on completing an external task, such as running automated tests and waiting for the results before continuing.
    
    2. **Perform callout and continue with deployment**: This option helps you call an external system but continues with the deployment without waiting for a response. It is helpful when you have non-blocking automated tests that you want to run without delaying the deployment process.
    ![Options](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Options_Type.png)
    Here, we are selecting the second option. 
* In the Method, select **POST**.
* In the URL, enter the REST API call given in the **cURL**. For example, https://app.testsigma.com/api/v1/execution_results.
  ![CURL](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Curl_Copado.png)
  You can also find the execution ID in the cURL response.
* Add the following headers:
    1. **Authorization** and enter the **API Key**
    2. **Accept** and enter **application/json**
    3. **Content-Type** and enter **application/json**
* In the **Body**, paste the **JSON** payload
* Click **Save**

   ![Save Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Save_Details_Copado_API.png)


[[info | **NOTE**:]]
| - For Perform callout and pause step type, the system will generate a **Resume URL** once you enter and save the details. 
| - Navigate to **Test Plans > Test Plan > Test Plan Settings**, select **Copado Test plan call back hook**, paste the Resume URL in the **Resume URL** textbox, and click **Update**. 
| ![Test Plan Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/TestPlan_Details_Copado.png)

Now, the Test Plan will run with the **Perform callout and pause step** option.

---