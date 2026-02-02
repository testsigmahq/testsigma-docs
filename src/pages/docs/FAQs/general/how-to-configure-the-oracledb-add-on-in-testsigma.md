---
title: "How to Configure the OracleDB Add-on in Testsigma?"
metadesc: "Learn how to configure the Oracle Database add-on in Testsigma with the required connection details for successful database integration."
order: 24.44
page_id: "how-to-configure-the-oracledb-add-on-in-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to Install the Addon"
  url: "#steps-to-install-the-addon"
- type: link
  name: "Steps to Set Up the Database Connection"
  url: "#steps-to-set-up-the-database-connection"
---

---

In Testsigma, the configuration of the Oracle Database add-on requires specific database connection details to ensure successful communication between the application and the Oracle database. This article discusses how to install the add-on and set up the database connection. 

---

## **Steps to Install the Addon**

1. From the left navigation bar, go to **Addons** and click **Add-ons**.
    ![Addons](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/otp_1.png)

2. Under the **New & Updated Addons** section, search for the **OracleDB_Queries** addon and click **Install**. 
   ![Install Addon](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Oracle_2.png)

---

## **Steps to Set Up the Database Connection**

1. In your test case, use the **Execute OracleDB Query on the Connection DB_Connection_URL and verify affected rows count is Row-Count** NLP to execute the query and fetch the required database details. 

2. Click the **Query** placeholder and enter the SQL query to be executed on the Oracle database.

   **Example query:**

   SELECT * FROM employees WHERE employee_id = 103;

   This query fetches all details of the employee whose ID is 103 from the employees table. Use this example as a reference and replace it with the required query based on your test scenario.

3. Click the **DB_Connection_URL** placeholder and use the following syntax to enter the URL: 
   
   **jdbc:oracle:thin:@//&lt;host&gt;:&lt;port&gt;/&lt;service_name&gt;?user=&lt;username&gt;&password=&lt;password&gt;&internal_logon=&lt;role&gt;**
   
   Now, replace the placeholders with your Oracle database details:
     - **Host Name** – The hostname of your database server (e.g., localhost).
     - **Port** – The port on which the database is running (e.g., 1521).
     - **Service Name** – The service name of the database (or select SID if service name is unavailable).
     - **Username** – Your database username (e.g., SYS).
     - **Password** – Your database password.
     - **Role** – Database role (e.g., SYSDBA).

   ![OracleDB](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Oracle_1.png)  
   
   **SID Example:**

   jdbc:oracle:thin:@//localhost:1521/FREE?user=SYS&password=Test@123&internal_logon=SYSDBA

   **Service Name Example:**

   jdbc:oracle:thin:@//testing-email.com:1521/TFCP?user=test_fcp_develop&password=sigma&internal_logon=default

   [[info | **NOTE**:]]
   | In the **Service Name** field:
   | - If you select **SID**, enter FREE (the default service).
   | - If you select **Service Name**, enter your actual service name.

4. Click the **Row-Count** placeholder and specify the expected number of affected rows for validation. 

5. Click **Create Step**. 

---
