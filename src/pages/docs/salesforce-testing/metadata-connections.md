---
title: "Creating Metadata Connections"
page_title: "Metadata Connections"
metadesc: "A Metadata connection enables actions like refreshing metadata, configurations, creating objects, & managing components that define how the application behaves"
noindex: false
order: 28.4
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
  name: "Steps to Add Multiple Metadata Connections"
  url: "#steps-to-add-multiple-metadata-connections"
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

> ## **Prerequisites**
> 
> Before you begin, ensure you have a Salesforce organization setup with a [Salesforce Connected App](https://testsigma.com/docs/salesforce-testing/connected-app/).

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
    <li><b>Callback URL:</b> Use the below mentioned Callback URL. <br> <br> <pre>https://salesforce-callback.testsigma.com/authorize/</pre></li>
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

4. Once Metadata sync is successful, you can create test cases by clicking **Create Test Case**.
   ![Create Tests](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfmdctc.png)


---

## **Steps to Add Multiple Metadata Connections**

1. Navigate to **Settings > SF Metadata**.
   ![SF Metadata](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Settings_SF_Metadata.png)

2. Select a **Project** and **Application** from the dropdown menu where you want to add metadata connections.
   ![Select Project & App](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Multiple_MetaData_SF_Connections.png)

3. Click **Add New**. This will open the **Metadata Connection** dialog. 
   ![Add New](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Add_New_SF_Metadata.png)

4. Follow the steps in [Creating Salesforce Metadata Connections](https://testsigma.com/docs/salesforce-testing/metadata-connections/#steps-to-create-metadata-connection) to add the **Metadata Connections**. 
   ![Metadata Connection](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Add_Multiple_SF_Metadata.png)

[[info | **NOTE**:]]
| You can also copy existing metadata from multiple metadata connections added in older versions while creating a new version by following these steps.
| 
| <br>
|
| 1. Go to **Project > Project Settings > Versions**, and click **New Version**.
|    ![New Version](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/New_Version_SF_Metadata.png)
| 
| 2. Enter a **Name** and optional **Description**.
|    ![Name & Description](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/SF_Metadata_New_Version.png)
| 
| 3. Go to **Projects**, and then navigate to the newly created **Version**. The system redirects you to the **Salesforce Connections** page.
|    ![Salesforce Connections](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/New_OR_Existing_SF_Metadata.png)
|
|    - Click **Select Existing Metadata Connection** to copy metadata from a previous version.
|    - Click **Create Metadata Connection** to create a new metadata connection. 

---

## **Executing Test Case against a Salesforce Metadata Connection**

1. Create a Test Case and click **Run** on the **Action Panel**. 
   ![Run Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Run_with_Multiple_Metadata.png)

[[info | **NOTE**:]]
| Before you configure **Ad-Hoc Run**, you need to add user connections as **Environments** in Testsigma. For information on creating Environments, see [Environments](https://testsigma.com/docs/test-data/types/environment/).
| ![User Connection Envs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/SF_User_Connection_Envs.png)
  

2. On the **Ad-Hoc Run** overlay, 
   
   - Select an Environment with which the user connection is linked in the test steps. 
   
   - Select a  Salesforce Metadata Connection against which you want to execute the test case. 
   
   ![Ad-Hoc Run](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Select_Env_SF_Environment.png)

[[info | **NOTE**:]]
| You can also configure the same for **Test Plans** in **Test Plan Settings > Additional Settings** by selecting **Environment** and a **Salesforce Metadata Connection**.
| ![SF Metadata](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Select_Env_SF_Env_in_Test_Plans.png)

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


[[info | **NOTE**:]]
| 
| You can also refresh metadata using API. *For more details, see [Salesforce Metadata Refresh Using API](https://testsigma.com/docs/api/examples/trigger-sf-metadata/)*.

---

## **Activity Logs**

The activity log tab on the connection details page displays the information about all metadata sync triggers status, and the start time of metadata edit/refresh triggers. This article discusses the activity logs in the Salesforce metadata connection.

### **Steps to View Metadata Activity Logs**

1. Navigate to **SF connections** and click on **Activity log**. This will open the **Activity log** dialog. 
   ![Activity Log](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/acvtlognav.png)

2. The **Activity log** dialog displays information regarding past metadata sync triggers. 
   ![Logs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/logsdisplay.png)

<br>

> Refer to this [Salesforce troubleshooting](https://testsigma.com/docs/troubleshooting/salesforce-testing/most-common-issues/) guide for the most common issues while creating the metadata connection.


---