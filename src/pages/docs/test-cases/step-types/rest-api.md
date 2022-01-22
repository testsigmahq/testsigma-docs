---
title: "RESTful API test steps"
metadesc: " How to create RESTful API test steps while creating a test case in Testsigma"
order: 4.23
page_id: "RESTful API test steps"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "How to Add REST API Step"
  url: "#how-to-add-rest-api-step"
---

---

While creating web or mobile application test cases, you can include REST API related test steps within them as well. You can also create a REST API standalone testing project.

&emsp;

## **Prerequisites**

This document is written with the assumption that you know how to create a test case, if not, please refer to the document [here](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).

&emsp;

## **How to Add REST API Step**

![gif shows authoring test with restful api test-step](https://docs.testsigma.com/images/rest-api/gif-shows-authoring-test-with-restful-api-test-step.gif)

 1. Navigate to Test Development > Test Case > Create, as show in the image below

![](https://docs.testsigma.com/images/step-group/navigate-to-test-case.png)

 2. Add the first step to your test case as shown in the image below. This is just an example. In a real life scenario, you may have any number of test steps before you need to add the test step for testing a RESTful API

![add first step to test case](https://docs.testsigma.com/images/rest-api/add-first-step-to-test-case.png)

 3. In the next step, hover on the test step type menu adjacent to the left side of the step as shown below. This will open up a set of test step type options to choose from.

![ hover on test step type menu](https://docs.testsigma.com/images/rest-api/hover-on-test-step-type-menu.png)

 4. From the drop-down menu, choose RESTful API. This will open up an interface where you can mention the endpoint, as shown below

![restful api chosen](https://docs.testsigma.com/images/rest-api/restful-api-chosen.png)

 5.  Add a title to your request. In this case, we use the title “Sample RESTful API test”
 6. Add the endpoint - We will be using a public REST endpoint from a service called “Reqres” -(https://reqres.in/api/users?page=2) 
 7. This is a “GET” endpoint that basically fetches all the users

![enter title endpoint for restful api](https://docs.testsigma.com/images/rest-api/enter-title-endpoint-for-restful-api.png)

 8. In the verify response tab, add the response code. We will add the response code as 200 which is a code for “completed”, meaning the test was a success.

![enter response code for restful api](https://docs.testsigma.com/images/rest-api/enter-response-code-for-restful-api.png)

 9. We will limit the inputs to title, endpoint, and response code for now. If you have more details about the endpoint, you should add them.

 10. Click on the ‘create’ button to create the test step. You now have a RESTful test step within your test case.

![test with restful api test step](https://docs.testsigma.com/images/rest-api/test-with-restful-api-test-step.png)



