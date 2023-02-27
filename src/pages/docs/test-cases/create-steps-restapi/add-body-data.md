---
title: "Body Data"
page_title: "Adding Body Data in API Request"
metadesc: "Adding Body Data in API Request in Testsigma"
noindex: false
order: 4.64
page_id: "Adding Body Data in API Request"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "None Body Data"
  url: "#none-body-data"
- type: link
  name: "Form-data"
  url: "#form-data"
- type: link
  name: "URL-encoded"
  url: "#url-encoded"
- type: link
  name: "Binary"
  url: "#binary "
- type: link
  name: "Raw"
  url: "#raw"
---

---
Adding body data in RESTful API testing is the process of sending additional data to the server in the body of the request. You will need to send body data with requests whenever you need to add or update structured data. For example, if you're sending a request to add a new customer to a database, you might include the customer details in **JSON**. Typically, you will use body data with **PUT**, **POST**, and **PATCH** requests.

[[info | NOTE:]]
| A payload within a **GET** request message has no defined semantics. Sending a payload body on a **GET** request might cause some existing implementations to reject the request.

The **Body** tab in Testsigma allows you to specify the data you need to **send** with a request. You can send various types of body data to suit your API.

---

## **None Body Data**

By default, Testsigma will select **None** - leave it selected if you don't need to send a body with your request.
![None Body Data](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/bodynone_restapi.png)

---

## **Form-data**

Data from website forms is frequently sent as **multipart/ form-data** to APIs. 

1. Navigate to **Body** > **form-data** tab. Form data allows you to send **key**-**value** pairs and specify the **content** type. In the **value** field, you can enter **plain text** or replace it with the **test data type** or you can enter **file path**, for example **@"/Users/Downloads/Sample Attachment File.pdf"**.
![form-data](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/formdata_body_restapi.gif)

2. Hover over the **key** field to select **text** or a **file**. If you choose a file, you can upload it in the **Value** field.

3. You can **attach files** using **form-data**. When you repeatedly make API calls that send duplicate files, Testsigma will persist your file paths for later use. 

4. This also helps you run collections that contain requests requiring file uploads. Uploading multiple files, each with its content type, isn't supported. Once your data and other request details are set up, select **Update** to run your request.
![file upload in form data](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/formdata_body_restapi.gif)

---

## **URL-encoded**

URL-encoded data uses the same encoding as URL parameters. Suppose your API requires URL -encoded data. Select **x-www-form-url-encoded** in the **Body** tab of your request. Enter your **key**-**value** pairs to send with the request, and Testsigma will encode them before sending. In the value field, you can enter values by **test data type**. Once your value and other request details are set up, select **Create** to run your request.

![Url encoded in Body Data](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/url_encoded_body_restapi.png)

---
## **Binary**

Binary data is data that is not composed of text characters. It is typically encoded in binary formats such as **images**, **audio**, and **video**. This can be done by sending a request with the binary data and then verifying that the response contains the expected data. You can run your request by uploading the file and clicking **Create**.
![binary in body](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/binary_body_restapi.png)

---
## **Raw**

You can use raw body data to send anything you can enter as a **node** and **value**. In the value field, you can enter values by **test data type**. Use the **raw** tab and the type dropdown list to indicate your **data format** (**JSON**, **text**, or **XML**), and Testsigma will enable syntax highlighting and append the relevant headers to your request. Once your raw and other request details are set up, select **Update** to run your request.
![Raw in Body](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/raw_body_restapi.gif)

---


