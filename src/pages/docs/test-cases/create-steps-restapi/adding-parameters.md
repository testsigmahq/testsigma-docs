---
title: "Parameters"
page_title: "Adding Parameters in API Request"
metadesc: "Adding parameters in RESTful API Testing is sending data to a server in order to get a response. Learn how to add Parameters in API Request in Testsigma"
noindex: false
order: 4.93
page_id: "Adding Parameters in API Request"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Send a Query Parameter"
  url: "#send-a-query-parameter"
---

---

Adding parameters in RESTful API Testing is the process of sending data to a server in order to receive a response. This data is usually sent in the form of a query string or as part of the URL. Parameters can be used to specify the type of data that is being requested, the format of the response, and other information that the server needs to process the request.

- Query parameters are appended to the end of the request URL, following **?** and listed in **key**-**value** pairs, separated by the **&** symbol. Sample **Syntax: ?id=1&type=new**.

- Path parameters form part of the request URL and are referenced using placeholders preceded by, as in the following example: **/customer/:id**

---

## **Send a Query Parameter**

1. Add **parameterized** URL path directly in the **URL** field, as shown below. It will automatically update **key**-**value** fields. For example, in the request, <br>https://jsonplaceholder.typicode.com/?name=Joel&type=abcxyz@mail.com. ![Adding URL in Parameter](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/parametersurl_restapi.gif)

2. Open the **Parameters** and enter the **key** and **value**. Value fields can be replaced with **test data types**, as shown below. Enter page key field and 2 in the value field, for example.
![Adding Test data type in Value](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/parameters_testdata_restapi.gif)

3. When you enter your query parameters in the **Parameters** fields, these values will automatically update in the **parameterized URL** path. Enter Name in the key field and Joel in the value field; type in the key field and abcxyz@mail.com in the value field, for example. ![Enter Key and Value in Parameters](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/parameters_restapi.gif)

4. Click **Send** to fetch the Response in real time. Set up body data, headers, and authorization as required.

---



