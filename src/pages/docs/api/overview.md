---
title: "Testsigma API - Overview"
metadesc: "An overview of available REST API Endpoints in Testsigma | Learn about set of REST API Endpoints to manage the entities available in Testsigma."
noindex: false
order: 21.1
page_id: "Testsigma API - Overview"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Authorization"
  url: "#authorization"
- type: link
  name: "Get IDs of Projects, Applications and Uploads"
  url: "#get-ids-of-projects-applications-and-uploads"
- type: link
  name: "Available REST API Endpoints"
  url: "#available-rest-api-endpoints"
- type: link
  name: "Advanced Use Cases"
  url: "#advanced-use-cases"
---

---

Testsigma has a  set of REST API Endpoints to manage the entities available in Testsigma. The most common usage of these endpoints is within your CI/CD Pipeline.

A fair understanding of REST APIs is expected. If not, please refer to some relevant resources regarding REST API or consult with your dev team before proceeding further.

---

## **Authorization**

All Testsigma API Endpoints require authentication. The user authenticates the request using Bearer Token which is the user’s API Key.

**“Authentication” : “Bearer <API_Key>”**

To know more about generating and obtaining API Keys, see [how to generate API keys](https://testsigma.com/docs/configuration/api-keys/)


---

## **Get IDs of Projects, Applications and Uploads**


Testsigma has a set of endpoints to retrieve IDs of projects, applications, and uploads using APIs. This article discusses getting these IDs by using APIs. 


### **Get IDs using Postman API**

1. From **My Workspace**, go to **APIs** and click on ‘**+**’ to open a new request. 
![APIs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/pmapis.png)


2. From the new request page, select **GET** from the method dropdown. 
![GET Method](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/pmgetmethod.png)


3. On the **URL Textbox**, 
![URL Textbox](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/pmurltb.png)
    - Enter https://app.testsigma.com/api/v1/projects to get project IDs. 
    - Enter https://app.testsigma.com/api/v1/applications to get application IDs. 
    - Enter https://app.testsigma.com/api/v1/uploads to get upload IDs.


Let’s use the first URL & retrieve the IDs of projects.  


4. Click on **Authorization**, select **Authorization type** and enter the **Token**. 
![Authorization](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/pmauthapi.png)

5. Click on **Send** to retrieve details of all projects. 
![Send](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/pmrbsend.png)

6. You’ll find IDs of all projects in the response body. 
![IDs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/pmidfrb.png)

Follow the same steps from 4-6 with the other URLs mentioned in step 3 to get details of applications and uploads. 

Here’s a quick GIF demonstrating how to retrieve IDs of projects, applications, and uploads using APIs in Postman.
![Workflow to retrive URL](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/getidspostman.gif)


### **Get IDs using Testsigma API**

1. Create a **Test Case** by navigating to **Create Tests > Test Cases**. 
![Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tsapitc.png)


2. Add a **REST API Step**.
![REST API Test Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tsrestspiteststep.png)


3. On the **REST API** page, select **GET** from the method dropdown.
![GET Method](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tsgetmthod.png)

4. On the **URL Textbox**, 
![URL Textbox](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tsurltb.png)
    - Enter https://app.testsigma.com/api/v1/projects to get project IDs. 
    - Enter https://app.testsigma.com/api/v1/applications to get application IDs. 
    - Enter https://app.testsigma.com/api/v1/uploads to get upload IDs.

Let’s use the second URL & retrieve the IDs of applications. 


5. Click on **Authorization**, select **Authorization type** and enter the **Token**. 
![Authorization](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tsapiauth.png)


6. Click on **Send** to retrieve details of all applications. 
![Send](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tssendapi.png)

7. You’ll find IDs of all applications in the response body. 


Here’s a quick GIF demonstrating how to retrieve IDs of projects, applications, and uploads using APIs in Testsigma.
![Workflow](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/getidtestsigma.gif)

---

## **Available REST API Endpoints**

1. [Environments](https://testsigma.com/docs/api/environments/)
2. [Elements](https://testsigma.com/docs/api/elements/)
3. [Test Plans](https://testsigma.com/docs/api/test-plans/)
4. [Uploads](https://testsigma.com/docs/api/upload-files/)

---

## **Advanced Use Cases**

Here are some advanced use cases for Testsigma APIs:

- [Trigger Multiple Application Type Test Plans](https://testsigma.com/docs/api/examples/trigger-multiple-test-plans/)

- [Trigger Test Plan remotely and wait until Completion](https://testsigma.com/docs/api/examples/trigger-test-plan-wait-completion/)

---