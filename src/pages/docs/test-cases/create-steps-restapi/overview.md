---
title: "How to add Test Steps for Web Service/REST API Testing?"
meta_desc: "How to add Test Steps for Web Service/REST API Testing in Testsigma?"
order: 4.61
page_id: "How to add Test Steps for Web Service/REST API Testing?"
warning: false
---

---

Creation of a Test Case for Web Service/API Testing is no different than the creation of a Test Case for a web or mobile application in Testsigma.
See [add, edit, and delete test cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).
 
Navigate to the Test Cases page by going to **Applications > Create/Select Application > Create/Select Version > Create/Select Test Case**

Selecting the Test Case takes us to the Test Case details page. We will create the RESTful Test Steps here. The API Test Step page will open, as shown below:

![api test step spage when creating webservice](https://docs.testsigma.com/images/create-steps-restapi/api-test-step-page-create-webservice.png)


### Web Service/REST API Test Step creation
 
 
Note: If the Application type is REST API Testing, All test steps are by default REST API steps.
 
To create a REST API step, you need to select the RESTful API type in step-type selection drop-down as shown below.


![create rest api test step when creating webservice](https://docs.testsigma.com/images/create-steps-restapi/create-rest-api-test-step-create-webservice.png)

Once you choose the test step type as RESTful API, enter the input data as follows:

* Request Details

  * Title: Enter a title for the Test Step.

  * URL: The web address endpoint of the RESTful Web Service to perform testing on.

  * HTTP Methods: Select from one of the HTTP request types to perform: GET, POST, PUT, PATCH, DELETE.

  * Header: Add headers that are expected for this REST API.

  * Authorization: Choose the appropriate Authorization type and provide the required data.

  * Payload: Enter the Request Body to be sent for POST, PUT, and DELETE request types.

  * Response Preview: You can preview the response by sending the above REST API details to make sure provided details are proper.

Here is a reference image with Request details.

![request details example when adding rest api api test step when creating webservice](https://docs.testsigma.com/images/create-steps-restapi/request-details-add-rest-api-test-step-create-webservice.png)

* Verify Response
  
    
  * Expected Status Code: Expected status code from the given REST API.


  * Expected Header Content: If you want to verify the response headers, add them here.


  * Body Compare Type: If you want to verify the response body, choose an appropriate data comparison type and enter the expected body.


  * Strict: Not extensible and strict array ordering.


  * Lenient: Extensible and non-strict array ordering.


  * Non-extensible: Not extensible and non-strict array ordering.


  * Strict order: Extensible and strict array ordering.


  * JSON Schema: Validates JSON schema of the response body.


  * JSON PATH: Validates data using JSON Path.


* Expected Body Content: Expected response body. This validation will be done based on the selected comparison type.
 
 ![verify response tab when adding rest api test step whencreating webservice](https://docs.testsigma.com/images/create-steps-restapi/verify-response-rest-api-test-step-create-webservice.png)

See Comparison Modes in Web Services Testing

* **Store Response -** 
  
You can store the API response data in runtime variables for further use in any test cases that are part of this run.

* **Store Response as Metadata:** Check this option to store the Response as metadata for debugging purposes. The response will be displayed as part of the test step result.

* **Header Runtime Data:** You can store the response headers in runtime variables for further use.
  
* **Body Runtime Data:** You can store the response body in runtime variables for further use. You can use JSON Path to identify the node that has to be stored.
 
After entering these details, click on Create button to create the Test Step.
 
### Examples
 
In an example, let us see how the following steps are created using Testsigma:
1. Verify the response status code(200) for an HTTP request sent to http://restapi.demoqa.com/utilities/weather/city/Hyderabad
2. Verify the Response Body for a GET HTTP request sent to http://restapi.demoqa.com/utilities/weather/city/Hyderabad using lenient comparison
3. Verify the Response Header for a GET HTTP request sent to http://restapi.demoqa.com/utilities/weather/city/Hyderabad using lenient comparison
 
    The REST call Endpoint is http://restapi.demoqa.com/utilities/weather/city/Hyderabad

    The expected status code for a successful request is 200

    A portion of Expected Body is {“City”: “Hyderabad”}

    A portion of Expected Header is {"Connection" : "keep-alive"}

    Comparison type is lenient

# Video

See [Usage of various HTTP requests for REST API Testing in Testsigma](https://testsigma.com/docs/test-cases/create-steps-restapi/methods/).



