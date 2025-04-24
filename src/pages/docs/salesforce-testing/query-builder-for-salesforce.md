---
title: "Query Builder for Salesforce Testing"
page_title: "Query Builder for Salesforce Testing"
metadesc: "Build and test Salesforce queries easily using the Query Builder tool in Testsigma. Create, customize, and validate SOQL queries with a user-friendly interface."
noindex: false
order: 28.92
page_id: "Query Builder for Salesforce Testing"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to use SOQL Query Builder Tool"
  url: "#steps-to-use-soql-query-builder-tool"
---

---

Use the Query Builder in Salesforce Testing to create and run SOQL (Salesforce Object Query Language) queries without writing code. This feature allows you to retrieve Salesforce data dynamically and use it in test scenarios. This article discusses building queries for Salesforce testing in Testsigma. 

---

## **Prerequisites**

Before you begin, ensure the Salesforce app is connected to Testsigma with a valid metadata connection.

---

## **Steps to Use the SOQL Query Builder Tool**

1. Open the **Salesforce Query Builder** from the test case page in the **Utility Panel**.
   ![query builder 1](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/salesforce-testing/Query_Builder_for_Salesforce_Testing_1.png)

2. From the **SF Connection** dropdown, select the Salesforce connection to use.
   ![query builder 2](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/salesforce-testing/Query_Builder_for_Salesforce_Testing_2.png)

3. In the **FROM** field, choose a **Salesforce object** (e.g., Account, Contact).
   ![query builder 3](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/salesforce-testing/Query_Builder_for_Salesforce_Testing_3.png)

4. Use the **SELECT** section to add fields (e.g., Type, RecordTypeId, Industry). The SOQL query updates automatically in the preview pane.
   ![query builder 4](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/salesforce-testing/Query_Builder_for_Salesforce_Testing_4.png)

5. Click **+ Add Condition** to filter results using **WHERE** clauses if required.
   ![query builder 5](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/salesforce-testing/Query_Builder_for_Salesforce_Testing_5.png)

6. Use **ORDER BY** and **LIMIT** to specify the order and number of records.

   For example, 

   ```sql
   SELECT Type, RecordTypeId, Phone, Industry
   FROM Account
   WHERE Industry = 'Energy'
   ORDER BY RecordTypeId ASC NULLS LAST
   LIMIT 100
   ```
   ![query builder 6](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/salesforce-testing/Query_builder_for_Salesforce_Testing_6.png)

7. Click **Run Query** to execute the SOQL query.
   ![query builder 7](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/salesforce-testing/query_builder_7.1.png)

8. View the results in **Table**, **Outline**, or **JSON** format.
   ![query builder 8](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/salesforce-testing/Query_builder_for_Salesforce_Testing_8.png)

---
