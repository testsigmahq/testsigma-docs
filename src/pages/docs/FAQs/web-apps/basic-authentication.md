---
title: "Basic Authentication for Web Pages"
metadesc: "To perform basic authentication for web pages, pass the authentication details via URL. This article discusses performing basic authentication for web pages"
noindex: false
order: 24.15
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

In the NLP, Navigate to **test data**, replace the **test data** with https://admin:admin123@orangehrm.com.

![Basic Authentication](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/bats_img.png)

When we navigate to the host URL, the browser automatically sends the credentials for Authentication. We need to use HTTPS to secure sensitive information.

---
