---
title: "Parameters"
page_title: "Adding Parameters in API Request"
metadesc: "Adding parameters in RESTful API Testing is sending data to a server in order to get a response. Learn how to add Parameters in API Request in Testsigma"
noindex: false
order: 4.73
page_id: "Adding Parameters in API Request"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Send a Query Parameter"
  url: "#send-a-query-parameter"
- type: link
  name: "Method 1: Enter Parameters Directly in the URL"
  url: "#method-1-enter-parameters-directly-in-the-url"
- type: link
  name: "Method 2: Enter Parameters in the Parameters Tab"
  url: "#method-2-enter-parameters-in-the-parameters-tab"
- type: link
  name: "Send the Request"
  url: "#send-the-request"
---

---

Adding parameters in RESTful API Testing is the process of sending data to a server in order to receive a response. This data is usually sent in the form of a query string or as part of the URL. Parameters can be used to specify the type of data that is being requested, the format of the response, and other information that the server needs to process the request.

- Query parameters are appended to the end of the request URL, following **?** and listed in **key**-**value** pairs, separated by the **&** symbol. Sample **Syntax: ?id=1&type=new**.

- Path parameters form part of the request URL and are referenced using placeholders preceded by, as in the following example: **/customer/:id**

---

## **Send a Query Parameter**

Testsigma keeps the request URL and the Parameters tab in sync, so you can add query parameters in whichever way is more convenient. Any change made in one place is automatically reflected in the other.

### **Method 1: Enter Parameters Directly in the URL**

Type the full parameterized URL into the **URL** field. For example:

<a href="https://jsonplaceholder.typicode.com/?name=Joel&type=abcxyz@mail.com" rel="nofollow">https://jsonplaceholder.typicode.com/?name=Joel&type=abcxyz@mail.com</a>

The **Parameters** tab will automatically populate with the corresponding key-value pairs (**name** = Joel, **type** = abcxyz@mail.com).
![Method 1](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_add_parameter_1.png)

### **Method 2: Enter Parameters in the Parameters Tab**

Open the **Parameters** tab and enter your keys and values manually. The URL field at the top will automatically update to reflect them. For example:

- Entering **page** = 2 produces `https://jsonplaceholder.typicode.com/?page=2`
![page](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_add_parameter_2.1.png)
- Entering **name** = Joel along with **type** = abcxyz@mail.com produces `https://jsonplaceholder.typicode.com/?name=Joel&type=abcxyz@mail.com`
![Name](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_add_parameter_3.png)

You can also click a **Value** field to replace it with a test data type such as **Parameter**, **Runtime**, **Environment**, **Random**, **Data Generator**, **Phone Number**, or **Mail Box**.
![Value](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_add_parameter_2.png)

---

## **Send the Request**

Once your parameters are set, click **Send** to fetch the response in real time. You can also configure **Body**, **Headers**, and **Authorization** as needed before sending.

---


