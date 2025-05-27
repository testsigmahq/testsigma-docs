---
title: "Test Step Type: Rest API"
pagetitle: "Test Step Type: Rest API | Testsigma Documentaion"
metadesc: "Discover how to create powerful and secure REST APIs from scratch in this comprehensive guide that covers best practices, authentication, and error handling."
noindex: false
order: 4.23
page_id: "Test Step Type: Rest API"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Add Rest API in Test Step"
  url: "#add-rest-api-in-test-step"
- type: link
  name: "Configure Rest API Test Step"
  url: "#configure-rest-api-test-step" 
---

---

Software testing focuses on verifying the functionality and performance of RESTful APIs, which are widely used for communication between web applications and servers. It is crucial to ensure that Rest API Testing works correctly.

Using Rest API Testing in Testsigma, you can validate the behaviour of RESTful APIs within your application. We will guide you on how to use it.

---
### **Prerequisites**

Before using the Rest API in a test step, you must understand specific concepts such as creating [Projects](https://testsigma.com/docs/projects/overview/), [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/), using [Test Step Types](https://testsigma.com/docs/test-cases/step-types/overview/) and understanding [RESTful API Testing](https://testsigma.com/docs/test-cases/create-steps-restapi/restful-api-overview/).

---

## **Add REST API in Test Step**

1. Navigate to **Create Tests** > **Test Cases** in the left-side navbar. Create a new **Test Case** or open an existing one.
2. Click on the **Test Step Type** button located before the new **test step** and select **Rest API** from the dropdown list that appears.
3. Clicking on the **Rest API Test Step** will raise the **Rest API screen**. Follow the instructions below section to [configure your REST API Test Step](https://testsigma.com/docs/test-cases/step-types/rest-api/#configure-rest-api-test-step).

Here is a quick GIF demonstrating the above workflow: ![Add Rest API in Test Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/addrestapi_teststep.gif)

[[info | NOTE:]]
| Refer to how to [Create a Project](https://testsigma.com/docs/projects/overview/#creating-a-project) for Rest API to create a separate **Rest API Application** in the project for conducting RESTful API Testing.

---

## **Configure Rest API Test Step**

Follow the steps below on the Rest API screen, which will appear, to configure your Rest API Test Step.

1. **Title**: Provide a title for the API test step, *for example, Get User details*.
2. **API Endpoints**: Specify the URL of the RESTful API you want to interact with. This URL should point to the specific endpoint you intend to test, *for example, Endpoint: https://reqres.in/*.
3. **HTTP Methods**: Select the appropriate HTTP method for your API request, and methods include:
    - **GET**: Retrieve data from the API.
    - **POST**: Create new data or perform actions.
    - **PUT**: Update existing data.
    - **PATCH**: Update some existing data fields.
    - **DELETE**: Remove data from the API.
4. **API Request**: You should configure the API request details, including parameters, request body, headers, authorisation, and additional settings.
    - **Parameters**: Enter the query parameters here if your API endpoint needs them, *for example, https://reqres.in/api/users?page=2*.
    - **Request Body**: Specify the body content if you include data in the request body of your API request *(e.g., for POST or PUT requests)*.
    - **Headers**: Add any necessary headers to the request, such as authentication tokens, content type, or custom headers, *for example, API Key: Accept, Vaule: application/json*.
    - **Authorization**: Set up the necessary authorization method (e.g., Basic Auth, OAuth tokens) if the API requires authentication, *for example, Authorization: Bearer token12345*.
    - **Settings**: You should adjust any specific settings related to your API request.
5. **Verification**: Define the criteria for verifying the API response:
    - **Response Body**: Specify the structure and content of the response body, which may involve validation of JSON or XML.
    - **Header**: Verify specific response headers for correctness.
    - **Status**: Define the expected HTTP status code (e.g., 200 OK) that indicates whether the API call was successful or failed.
6. **Stored Variables**: Define which parts of the API response you want to store, such as the response body, headers, or status code, so that you can capture and use the information in your test case.
7. **Attachments**: You should attach relevant files or documents to the Rest API Test Step. This may include test data files, images, or documents necessary for testing.
8. **Global Objects**: You can link or utilise the predefined global objects in your Testsigma project (such as reusable test data or functions) within your Rest API Test Step to ensure consistency and reusability across your tests.
9. Click **Create** at the bottom of the screen after configuring the Rest API Test Step to create the Rest API in the Test Step. You can now execute it to test the RESTful API.

Here is a quick GIF demonstrating the above workflow: ![Configure Rest API test step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/config_restapitst2.gif)

[[info | NOTE:]]
| For more information on RESTful API testing in a test case, refer to [RESTful API Testing](https://testsigma.com/docs/test-cases/create-steps-restapi/restful-api-overview/).

---

