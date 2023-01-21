---
title: "RESTful API Testing Version 2- Overview"
page_title: "RESTful API Testing in Testsigma"
metadesc: "Add RESTful API Testing in Test Step"
noindex: false
order: 21.7
page_id: "Add RESTful API Testing in Test Step"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Resources"
  url: "#resources"
- type: link
  name: "Add RESTful API in test steps"
  url: "#add-restful-api-in-test-steps"
---

---
Testsigma supports Restful APIs Testing. RESTful APIs allow you to access resources using uniform methods and protocols. This makes it easier for you to create and maintain applications. You can also create a REST API standalone testing project. While creating web or mobile application test cases, you can also include RESTful APIs in the test steps.

### **Prerequisites**

This document is written with the assumption that you know how to create a test case. For more information, refer to [manage test cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).

## **Resources**

We will use the following **API Endpoints** and **JSON object** for our examples:

https://jsonplaceholder.typicode.com/

https://jsonplaceholder.typicode.com/get/

https://jsonplaceholder.typicode.com/posts/

https://jsonplaceholder.typicode.com/?name=Joel&email=abcxyz@mail.com

{<br>
    "userId": 1,<br>
    "id": 1,<br>
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",<br>
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"<br>
  }<br>

These are provided by [JSONPlaceholder](https://jsonplaceholder.typicode.com/), a free API Service available online for REST API testing purposes.

---

## **Add RESTful API in test steps**

1. Navigate to **Test Development** > **Test Cases**. Create a new project or open an existing project. ![Choose Project from Test case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/testcase_restapi.png)

2. Hover over the **test step type** menu and click on **RESTful API** from the options. ![Select RESTful API](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/restfullapi_teststeps.gif)

3. The **RESTful API** screen will appear. Identify your request by its **title**. Here, we enter the title **Sample RESTful API test**. ![RESTful API screen will appear](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/restfullapiscreenhigh.png)

---

