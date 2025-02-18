---
title: "Adding User Connections"
page_title: "User Connections"
metadesc: "Add user connections for a Salesforce project in Testsigma. These connections are associated with Salesforce user profiles like Salesforce admin/sales rep"
noindex: false
order: 28.5
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

> ## **Prerequisites**
> 
> Before you begin, ensure you have a Salesforce organization setup with a [Salesforce Connected App](https://testsigma.com/docs/salesforce-testing/connected-app/) and [Salesforce Metadata](https://testsigma.com/docs/salesforce-testing/metadata-connections/) connected to Testsigma.

---


## **Steps to Add User Connections**

1. From the **Dashboard**, click on **SF connections**.
![SF Connections](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfucsfcnav.png)

2. On the **Salesforce connections** page, click **Add Connection** on **User connection** section. This will open the **User connection** prompt. 
![Connections](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfucaconctn.png)

3. On the **User connection** prompt, 
     - Enter **Connection name**
       ![Connection Name](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfucncname.png)
     - Choose the environment of the user that you want to use.
       ![Environment](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ucsfts.png)
     - Choose the Authentication type from the dropdown. 
         - For **OAuth**, enter **Username**, **Consumer key**, **Consumer secret**, and **Callback URL**.
         - For **User name & Password**, enter the **Username**, **Password**, **Security token**, **Consumer key**, and **Consumer secret**. In this example, we are choosing **OAuth 2.0**.
           ![OAuth](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfucoauthtype.png)
     - Enter the **Username**, **Consumer key**, **Consumer secret**, and **Callback URL**, and click on **Authorise & Connect**.
       ![Enter Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfucaaconnect.png)
     - A new window will open up requesting for **Salesforce Login**. Enter the credentials and click on **Log In**.
       ![LogIn](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfucsflogin.png)
     - Once the **User connection** is created successfully, click on **Done**.
       ![Done](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfucucdone.png)

4. You can see the created connection under **SF connections > User connection**.
![User Connections](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfucseeud.png)

---

## **Steps to Edit User Connections**

1. From the **Dashboard**, click on **SF connections**.
![SF Connections](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfucsfcnav.png)

2. In the **User connection** section, hover over the connection, click on the kebab menu, and choose **Edit connection** from the dropdown menu. 
![Edit User Connections](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfuceditucnctns.png)

3. On the **User connection** prompt, update the details and click on **Authorise & Connect**.
![Enter Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfucaaconnect.png)

---

## **Steps to Delete User Connections**

1. From the **Dashboard**, click on **SF connections**.
![SF Connections](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfucsfcnav.png)

2. In the **User connection** section, hover over the connection, click on the kebab menu, and choose **Delete connection** from the dropdown menu. 
![User Connections](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfucdltuc.png)

3. On the **Delete connection** warning prompt, click on **Delete**.
![Delete](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfucdltuc.png)

4. The **User connection** will be deleted successfully. 

[[info | **NOTE**:]]
| A user connection linked to a test case can be deleted only after all related test cases and step groups have been removed.

---