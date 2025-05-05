---
title: "Test Salesforce Connection Before Authorization"
page_title: "Test Salesforce Connection Before Authorization"
metadesc: "Learn how to test your Salesforce connection in Testsigma before authorizing it. Ensure credentials are valid and avoid connection issues during the authentication process."
noindex: false
order: 28.4
page_id: "Test Salesforce Connection Before Authorization"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to Test the Salesforce Connection"
  url: "#steps-to-test-the-salesforce-connection"
---

---

Testsigma provides a convenient way to check your Salesforce connection using either OAuth 2.0 or Username and Password authentication. You can validate your credentials without completing the full authorization flow or saving the connection. 

---

## **Steps to Test the Salesforce Connection**

1. From the left navigation bar, click on **SF Connections**, or access the **Metadata Connection** dialog via **Settings > SF Metadata**.
   ![Test salesforce connection 1](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/salesforce-testing/Test_Salesforce_Connection_0.1.png)

2. In the Salesforce connections page, under the **Metadata connection** or **User connection** section, click the ellipsis icon next to the desired connection and click **Edit Connection**.
   ![Test salesforce connection 2](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/salesforce-testing/Test_connection_2.png)

[[info | **NOTE**:]]
| - If the connection details are already filled in, the **User/Metadata** connection dialog will open with the existing information. 
| - If you are setting up a new connection, you'll need to enter the required details before you can test it. 

3. In the **User/Metadata Connection** dialog, click **Test Connection**.
   ![Test salesforce connection 4](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/salesforce-testing/Test_connection_4.png)

[[info | **NOTE**:]]
| - If you'd like to test the connection with different credentials, edit the existing connection, update the necessary fields, and then click **Test Connection**.

4. On the Salesforce login page, enter your username and password, then click **Log In**. 
   ![test salesforce connection 5.2](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/salesforce-testing/Test_connection_5.2.png)

5. Once your credentials are verified, you will get the **Salesforce Connection Successful** dialog. 
   ![Test salesforce connection 6](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/salesforce-testing/Test_connection_6.png)

---
