---
title: "Supported Methods in REST API Testing in Testsigma"
metadesc: "REST API HTTP Request Types"
order: 4.62
page_id: "Supported Methods in REST API Testing in Testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Pre-requisites"
  url: "#pre-requisites"
- type: link
  name: "Resources"
  url: "#resources"
- type: link
  name: "How to create a RESTful Test Step"
  url: "#how-to-create-a-restful-test-step"
- type: link
  name: "Automatically Follow Redirects Toggle"
  url: "#automatically-follow-redirects-toggle"  
---

---
## **Pre-requisites**
You should be familiar with HTTP methods and the basics of RESTful Web Services and APIs. For more details on Header and Body comparison modes in web services testing, see [Comparison Modes in Web Services Testing](https://testsigma.com/docs/test-cases/create-steps-restapi/comparison-types/)
 
 
## **Resources**
We will use the following API Endpoints for our examples:

https://jsonplaceholder.typicode.com/posts

https://jsonplaceholder.typicode.com/posts/1

https://jsonplaceholder.typicode.com/posts?userId=1
 
These are provided by [JSONPlaceholder](https://jsonplaceholder.typicode.com/), a free API Service available online for REST API testing purposes.
 
Let us see how each request type is tested in Testsigma.

 ---

## **How to create a RESTful Test Step**
See [How to add Test Steps for Web Service/API Testing](https://testsigma.com/docs/test-cases/create-steps-restapi/overview/).
 
Once you are in the Create Test Step wizard,

1. Enter a relevant Title for the Test Step.
   
2. Enter the URL endpoint for the API.
   
3. Select the HTTP request method(GET,POST,PUT,DELETE, or HEAD).
   
4. Enter the Payload values and Request Header.
   
5. Verify Response: Select the Tests you want to perform - Comparing Status Code, Header, Body of Response, or all of them. According to the Tests you selected, new fields will be introduced to enter the Expected value in JSON Object format
   
6. Enter the Expected Response values in respective fields and select the Comparison types such as Strict, Lenient e.t.c.
 

Let us consider the scenario of sending a GET request.
 
**1. GET - Verify the status code for a GET request**
 

We will be using Testsigma to verify the Status Code of the response for a GET request sent to the following URL.

   * Enter the Endpoint URL - [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)
 
   * Select the HTTP Request Method Type - **GET**
 
   * Enter the Request Header if needed.
 
   * Enter the Expected Status Code - **200**


![request details for verifying status code for GET request when testing rest api http methods](https://docs.testsigma.com/images/methods/request-details-verify-statuscode-get-rest-api-http-methods.png)


![verify response tab for verifying status code for GET request when testing rest api http methods](https://docs.testsigma.com/images/methods/verify-response-tab-verify-statuscode-get-rest-api-http-methods.png)

&emsp;

Finally, click on the Create button to create the Test Step.
 
Follow the same steps for other Request Types with minor variations.

---

**2. POST - Verify the Body Content for a POST request**
 
We will be using Testsigma to verify the Status Code and Body Content for a POST request sent to the following URL with some Payload.

   * Enter the endpoint URL - [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)
 
   * Select the HTTP Request Method Type - **POST**
 
   * Enter the Payload data and Request Header as given below.
 
   * Select the Test Type - **Body Content**
 
   * Select the Comparison Type - **Lenient**
 
   * Enter the expected Body content from the Response.
 
Header:

&emsp;
Content-type: application/json; charset=UTF-8
 
Payload:

{

&emsp;
"title": "foo",

&emsp;
"body": "bar",

&emsp;
"userId": 1

}
 
Expected Response Body Content:

{

&emsp;
"id": 1,

&emsp;
"title": "foo",

&emsp;
"body": "bar",

&emsp;
"userId": 1

}

![request details tab for verifying body content for a post request when testing rest api http methods](https://docs.testsigma.com/images/methods/request-details-verify-body-content-post-rest-api-http-methods.png)
 

![verify response tab for verifying body content for a post request when testing rest api http methods](https://docs.testsigma.com/images/methods/verify-response-verify-body-content-post-rest-api-http-methods.png)

---

**3. PUT - Verify the Status Code and Body Content for a PUT request**
 
We will be using Testsigma to verify the Status Code and Body Content for a PUT request sent to the following URL with some Payload.

   * Enter the endpoint URL - [https://jsonplaceholder.typicode.com/posts/1](https://jsonplaceholder.typicode.com/posts/1)
 
   * Select the HTTP Request Method Type - **PUT**
 
   * Enter the Payload data and Request Header value as given below.
 
   * Enter the Expected Status Code for the Response - **200**
  
   * Select the Comparison Type for Body Content - Lenient
 
   * Enter the expected Body Content for the Response as given below.

Header:

&emsp;Content-type: application/json; charset=UTF-8

Payload:

{

&emsp;
"id": 1,

&emsp;
"title": "foo",

&emsp;
"body": "bar",

&emsp;
"userId": 1

}
 

Expected Response Body Content:

{

&emsp;
"id": 1,

&emsp;
"title": "foo",

&emsp;
"body": "bar",

&emsp;
"userId": 1

}

![request details tab for verifying a put request when testing rest api http methods](https://docs.testsigma.com/images/methods/request-details-verify-put-request-rest-api-http-methods.png) 

![verify response tab for verifying a put request when testing rest api http methods](https://docs.testsigma.com/images/methods/verify-response-verify-put-request-rest-api-http-methods.png)

---

**4. DELETE - Verify the status code for a DELETE request**
 
We will be using Testsigma to verify the Status Code of the response for a DELETE request sent to the following URL.

   * Enter the endpoint URL - [https://jsonplaceholder.typicode.com/posts/1](https://jsonplaceholder.typicode.com/posts/1)
 
   * Select the HTTP Request Method Type - **DELETE**
 
   * Enter the Expected Status Code - **200**

![request details tab for verifying a delete request when testing rest api http methods](https://docs.testsigma.com/images/methods/request-details-verify-delete-request-rest-api-http-methods.png)

![verify response tab for verifying a delete request when testing rest api http methods](https://docs.testsigma.com/images/methods/verify-response-verify-delete-request-rest-api-http-methods.png)

---

**5. PATCH - Verify the status code for a PATCH request**
 
We will be using Testsigma to verify the Status Code of the response for a PATCH request sent to the following URL.

   * Enter the endpoint URL - [https://jsonplaceholder.typicode.com/posts/1](https://jsonplaceholder.typicode.com/posts/1)
 
   * Select the HTTP Request Method Type - **PATCH**
 
   * Enter the Expected Status Code - **200**

![request details tab for verifying a patch request when testing rest api http methods](https://docs.testsigma.com/images/methods/request-details-verify-patch-request-rest-api-http-methods.png)

![verify response tab for verifying a patch request when testing rest api http methods](https://docs.testsigma.com/images/methods/verify-response-verify-patch-request-rest-api-http-methods.png)

## **Automatically Follow Redirects Toggle:**
Automatically Follow Redirects, also known as URL forwarding, is a technique to give more than one URL address to a page, a form, or a whole Web site/application. HTTP has a special kind of response, called an HTTP redirect, for this operation.
Redirects accomplish numerous goals:
 
   * Temporary redirects during site maintenance or downtime.


   * Permanent redirects to preserve existing links/bookmarks after changing the site's URLs, progress pages when uploading a file, etc.

In Testsigma the Toggle shown below enables the URL to automatically redirect to a different URL in case new redirects are set up for the particular URL. However, disabling the toggle might not give you the desired result in case the URL's implementation has been changed. It's advisable to enable the toggle before we start the test.
 
![automatically follow redirects option when testing rest api http methods](https://docs.testsigma.com/images/methods/automatically-follow-redirects-rest-api-http-methods.png)

Happy Automation !