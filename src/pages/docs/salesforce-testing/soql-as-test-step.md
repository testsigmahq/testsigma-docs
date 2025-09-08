---
title: "SOQL as Test Step"
page_title: "SOQL as Test Step"
metadesc: "The SOQL step in Testsigma allows you to run queries on your Salesforce data and fetch real-time results, helping you validate data directly during test execution."
noindex: false
order: 28.91
page_id: "SOQL as Test Step"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Create SOQL as a Test Step"
  url: "#steps-to-create-soql-as-a-test-step"
---

---

The SOQL step type allows you to run SOQL queries to retrieve real-time Salesforce data. You can verify specific values within your Salesforce records and store outputs as variables for reuse in subsequent steps. This article discusses using the SOQL step type for Salesforce testing in Testsigma.

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure the Salesforce app is connected to Testsigma with a valid metadata connection.

---

## **Steps to Create SOQL as a Test Step**

1. From the left navigation bar, navigate to **Create Tests > Test Cases**. 
   ![soql as test step 1](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/salesforce-testing/soql_test_step_1.png)

2. In the **Test Case Details** page, click on the test step options list and select **SOQL**. 
   ![soql as test step 2](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/salesforce-testing/SOQL_as_Test_Step_2.png)

3. Select a Salesforce connection from the **Salesforce Connection** dropdown or you can parameterize your connection. 
   ![soql as test step 3](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/salesforce-testing/SOQL_as_Test_Step_3.png)

4. Enter your SOQL query in the editor and click **Run Query** to fetch the results. 

   For example, 

   ```sql
   SELECT Id, Name, Phone, Industry, BillingCity, BillingState
   FROM Account
   WHERE Industry = 'Technology' AND BillingState = 'CA'
   ORDER BY Name
   LIMIT 50
   ```
   ![soql test step 4](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/salesforce-testing/soql_test_step_4.png)

5. View the response in **Table**, **Outline**, or **JSON** format by switching between the tabs.
   ![soql as test step 5](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/salesforce-testing/SOQL_as_Test_Step_5.png)

6. In the **Outline** tab, store values as variables or add verifications directly from the response.
   ![soql as test step 6](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/salesforce-testing/SOQL_as_Test_Step_6.png)

7. Click **Create** to save and add the SOQL step to your test case.
   ![soql as test step 7](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/salesforce-testing/soql_test_step_7.1.png)

---