---
title: "Query Builder for Salesforce Testsing"
page_title: "Query Builder for Salesforce Testsing"
metadesc: "Build and test Salesforce queries easily using the Query Builder tool in Testsigma. Create, customize, and validate SOQL queries with a user-friendly interface."
noindex: false
order: 28.92
page_id: "Query Builder for Salesforce Testsing"
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

2. From the **SF Connection** dropdown, select the Salesforce connection to use.

3. In the **FROM** field, choose a **Salesforce object** (e.g., Account, Contact).

4. Use the **SELECT** section to add fields (e.g., Type, RecordTypeId, Industry). The SOQL query updates automatically in the preview pane.

5. Click **+ Add Condition** to filter results using **WHERE** clauses if required.

6. Use **ORDER BY** and **LIMIT** to specify the order and number of records.

For example, 

```sql
SELECT Id, Name, Phone, Industry, BillingCity, BillingState
FROM Account
WHERE Industry = 'Technology' AND BillingState = 'CA'
ORDER BY Name
LIMIT 50
```

7. Click **Run Query** to execute the SOQL query.

8. View the results in **Table**, **Outline**, or **JSON** format.

---