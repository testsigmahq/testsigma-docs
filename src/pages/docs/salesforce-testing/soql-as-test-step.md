---
title: "SOQL as Test Step"
page_title: "SOQL as Test Step"
metadesc: "SOQL step runs queries to fetch real-time Salesforce data."
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

## **Prerequisites**

Before you begin, ensure the Salesforce app is connected to Testsigma with a valid metadata connection.

---

## **Steps to Create SOQL as a Test Step**

1. From the left navigation bar, navigate to **Create Tests > Test Cases**. 

2. In the **Test Case Details** page, click on the test step options list and select **SOQL**. 

3. Select a Salesforce connection from the **Salesforce Connection** dropdown.

4. Enter your SOQL query in the editor. 

For example, 

```
SELECT Id, Name, Phone, Industry, BillingCity, BillingState
FROM Account
WHERE Industry = 'Technology' AND BillingState = 'CA'
ORDER BY Name
LIMIT 50
```

5. Click **Run Query** to fetch the results.

6. View the response in **Table**, **Outline**, or **JSON** format by switching between the tabs.

7. In the **Outline** tab, store values as variables or add verifications directly from the response.

8. Click **Create** to save and add the SOQL step to your test case.

---

