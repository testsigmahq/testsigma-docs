---
title: "Basic Authentication for Web Pages"
metadesc: "To perform basic authentication for web pages, pass the authentication details via URL. This article discusses performing basic authentication for web pages"
noindex: false
order: 25.15
page_id: "Perform Basic Authentication"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Passing Authentication Details via URL"
  url: "#passing-authentication-details-via-url"
---

---

Basic Authentication is a simple and effective way to secure web pages. You can perform this easily by passing the authentication details directly via the URL. This article discusses how to perform basic authentication for web pages. 

---

## **Passing Authentication Details via URL**

We can use the below format for Basic Authentication:

[[info | Format:]]
| **[protocol]://[username]:[password]@hostname** <br>
| <br>
| This format will have the protocol (HTTP or HTTPS), username, and password.



### **For Example:**

In the NLP, Navigate to **test data**, replace the **test data** with <a href="https://admin:admin123@orangehrm.com" rel="nofollow">https://admin:admin123@orangehrm.com</a>. 

![Basic Authentication](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_basic_authentication_1.png)

When we navigate to the host URL, the browser automatically sends the credentials for Authentication. We need to use HTTPS to secure sensitive information.

## **Reducing Execution Time on Safari/Mobile Web**

When testing web applications on Safari or mobile browsers, passing credentials directly in the URL (for example, <a href="https://admin:admin123@orangehrm.com" rel="nofollow">https://admin:admin123@orangehrm.com</a>) may increase step execution time.

To overcome this and speed up execution, instead of passing the credentials in the URL, we can pass them as a custom header using Desired Capabilities.

### **Configuration**

|**Key**|**Type**|**Value**|
|---|---|---|
|testsigma.customHeaders|String|{"Authorization":"Basic YWRtaW46YWRtaW4xMjM="}|

![Desired Capability](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/basic_authentication_1.png)

### **Steps to Generate Base64 Credentials**

Combine the username and password in the format **username:password**, and then convert this string to Base64 encoding.

**For Example:**

In the URL: <a href="https://admin:admin123@orangehrm.com" rel="nofollow">https://admin:admin123@orangehrm.com</a>

Username: admin 

Password: admin123 

Base64 encoded value: YWRtaW46YWRtaW4xMjM=

[[info | NOTE:]]
| You can generate the Base64 encoded value using any standard online Base64 encoding tool.

Once the desired capability is set, the browser authenticates through the header and prevents the additional execution delay observed in Safari.

---