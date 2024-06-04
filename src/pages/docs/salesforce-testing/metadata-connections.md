---
title: "Creating Metadata Connections"
page_title: "Metadata Connections"
metadesc: "A Metadata connection enables actions like refreshing metadata, configurations, creating objects, & managing components that define how the application behaves"
noindex: false
order: 27.4
page_id: "Creating Metadata Connections"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Create Metadata Connection"
  url: "#steps-to-create-metadata-connection"
- type: link
  name: "Steps to Edit Metadata Connection"
  url: "#steps-to-edit-metadata-connection"
- type: link
  name: "Steps to Refresh Metadata Connection"
  url: "#steps-to-refresh-metadata-connection"
- type: link
  name: "Activity Logs"
  url: "#activity-logs"
---

---

In Testsigma, you can create a Salesforce application and establish a Metadata connection, which enables you to perform various actions like retrieving metadata, updating configurations, creating custom objects, and managing other components that define how the application behaves. This article discusses creating a metadata connection in Testsigma.

---

## **Prerequisites**

- Salesforce organization with the test setup.
- Salesforce connected app. For more information, refer to [creating a connected app](https://testsigma.com/docs/salesforce-testing/special-nlps/).

---

## **Steps to Create Metadata Connection**

1. Click on **Create metadata connection** on **Salesforce connections page**. 
   ![Create Metadata](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfmdcm.png)

2. This will open the **Metadata connection** prompt. 
   ![Prompt](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfmaprm.png)

3. On **Metadata connection** prompt, 
    - Enter **Connection name**, which is generally the user role you connect through, e.g., **Admin**.
      ![Name](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfmdname.png)
      [[info | **NOTE**:]]
      | You can also choose a custom name for the connection.
    - Choose the **Production / Developer edition**, if you’re testing the product environment or Sandbox, if you’re testing the staging environment from **Connect with** dropdown.
      ![Edition](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/samdce.png)
    - Choose the **Authentication type** from the dropdown. In this example, we are choosing **OAuth 2.0**. 
      ![Authentication](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfmdatype.png)
      
      
      <details style="border: 1px solid gray; border-radius: 4px; padding: 0.5em; margin: 0.5em 0; background-color: #f2f2f2;">
  <summary style="color: darkgreen; font-weight: bold; list-style: none;" onclick="if(this.parentNode.open) this.parentNode.style.border='1px solid gray'; else this.parentNode.style.border='none';">
    <span style="margin-right: 5px;">ℹ️</span>Authentication Types:
  </summary><br>
There are two ways to Authenticate:
  <ul>
    <li><b>User name & Password:</b> For User name & Password, enter Username, Password, Security token, Consumer key, and Consumer secret. </li>
    <li><b>OAuth:</b> For OAuth, enter Username, Consumer key, and Consumer secret.
    <li><b>Callback URL:</b> <span style="font-family: monospace; font-size: 0.875em; background-color: #f8f8f8; padding: 0.2em 0.4em; border-radius: 4px;">https://salesforce-callback.testsigma.com/authorize</span></li>
      </ul>
    </li>
  </ul>
      </details>


    - Click on **Authorise & Connect**.
      ![Authorise](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfmdaaaut.png)

    - A new window will open up requesting for **Salesforce Login**. Enter the credentials and click on **Log In**.
      ![Login](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfmdlifsf.png)

    - This will display the **Environment** associated with the credentials. Click on **Start metadata sync**.
      ![Start MD](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfmdssync.png)

    - Wait until the sync is complete. This will take some time.
      ![Wait](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfmdsipg.png)

1. Once Metadata sync is successful, you can create test cases by clicking **Create Test Case**.
   ![Create Tests](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfmdctc.png)

---

## **Steps to Edit Metadata Connection**

1. From the **Dashboard**, click on **SF Connections**.
   ![Edit Metadata](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfmdedt.png)

2. In the **Metadata connection** section, hover over the connection, click on the kebab menu, and choose **Edit connection** from the dropdown menu. 
   ![Edit Connection](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfmdec.png)

3. On the **Metadata connection** prompt, make the necessary changes and click on **Authorise & Connect**.
   ![Metadata Connection](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfmdecetd.png)

[[info | **NOTE**:]]
| You can not update the Metadata connection with a different environment.

---

## **Steps to Refresh Metadata Connection**

To refresh metadata, you have two options:

1. From the **Dashboard**, go to **SF Connections** and click on **Refresh Metadata**. 
   ![Refresh](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfmdref1.png)

2. Click on **Refresh Metadata** directly from the dashboard.
   ![Refresh](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfmdref2.png)

---

## **Activity Logs**

The activity log tab on the connection details page displays the information about all metadata sync triggers status, and the start time of metadata edit/refresh triggers. This article discusses the activity logs in the Salesforce metadata connection.

### **Steps to View Metadata Activity Logs**

1. Navigate to **SF connections** and click on **Activity log**. This will open the **Activity log** dialog. 
   ![Activity Log](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/acvtlognav.png)

2. The **Activity log** dialog displays information regarding past metadata sync triggers. 
   ![Logs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/logsdisplay.png)

---