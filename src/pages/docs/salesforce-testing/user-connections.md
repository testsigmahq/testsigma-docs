---
title: "Adding User Connections"
page_title: "User Connections"
metadesc: "Add user connections for a Salesforce project in Testsigma. These connections are associated with Salesforce user profiles like Salesforce admin/sales rep"
noindex: false
order: 28.6
page_id: "User Connections"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Add User Connections"
  url: "#steps-to-add-user-connections"
- type: link
  name: "Steps to Edit User Connections"
  url: "#steps-to-edit-user-connections"
- type: link
  name: "Steps to Delete User Connections"
  url: "#steps-to-delete-user-connections"
---

---

Once you've set up the Salesforce Metadata connection, you can add user connections in Testsigma. These connections are associated with Salesforce user profiles, such as Salesforce admin or sales representative. You can also assign a single connection to multiple users. This article discusses adding User Connections for Salesforce projects in Testsigma.

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that you have referred to:
> 1. [Documentation on Salesforce Connected App](https://testsigma.com/docs/salesforce-testing/connected-app/).
> 2. [Documentation on Salesforce Metadata](https://testsigma.com/docs/salesforce-testing/metadata-connections/) connected to Testsigma.

---


## **Steps to Add User Connections**

1. From the left navigation bar, go to **SF connections**.
![SF Connections](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_add_sf_1.png)

2. In the **Salesforce connections** page, click **Add Connection** under **User connection** section. 
![Connections](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_add_sf_2.png)

3. In the **Add User connection** dialog, 
     - Enter a **Connection name**
       ![Connection Name](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_add_sf_3.png)
     - Choose the environment of the user that you want to use.
       ![Environment](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_add_sf_4.png)
     - Choose the Authentication type from the dropdown. 
         - For **OAuth**, enter **Username**, **Consumer key**, **Consumer secret**, and **Callback URL**.
         - For **User name & Password**, enter the **Username**, **Password**, **Security token**, **Consumer key**, and **Consumer secret**. In this example, we are choosing **OAuth 2.0**.
           ![OAuth](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_add_sf_5.png)
     - Enter the **Username**, **Consumer key**, **Consumer secret**, and **Callback URL**, and click **Authorise & Connect**.
       ![Enter Details](hhttps://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_add_sf_6.png)
     - A new window will open up requesting for **Salesforce Login**. Enter the credentials and click **Log In**.
       ![LogIn](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_sales_sf_7.png)
     - Once the **User connection** is created successfully, click **Done**.
       ![Done](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_add_sf_7.png)

4. You can see the newly added connection under **SF connections > User connection**.
![User Connections](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_add_sf_8.png)

---

## **Steps to Edit User Connections**

1. From the left navigation bar, go to **SF connections**.
![SF Connections](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_add_sf_1.png)

2. Under the **User connection** section, click the ellipsis icon against a connection and click **Edit connection**. 
![Edit User Connections](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_add_sf_9.png)

3. In the **Update User connection** dialog, update the required details and click **Authorise & Connect**.
![Enter Details](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_add_sf_10.png)

---

## **Steps to Delete User Connections**

1. From the left navigation bar, go to **SF connections**.
![SF Connections](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_add_sf_1.png)

2. Under the **User connection** section, click the ellipsis icon against a connection and click **Delete connection**. 
![User Connections](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_add_sf_11.png)

3. In the **Delete connection** dialog, click **Delete**.
![Delete](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_add_sf_12.png)

4. The **User connection** will be deleted successfully. 

[[info | **NOTE**:]]
| A user connection linked to a test case can be deleted only after all related test cases and step groups have been removed.

---