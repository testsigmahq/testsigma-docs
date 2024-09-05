---
title: "Automating Listview Table NLPs"
page_title: "Automate Listview table NLPs"
metadesc: "Salesforce listview tables are dynamic tables, which have various cell properties. You can automate these dynamic tables efficiently by using Testsigma's built-in table NLPs"
noindex: false
order: 28.91
page_id: "Automate Listview table NLPs"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Available NLPs to Automate Listview Table"
  url: "#available-nlps-to-automate-listview-table"
- type: link
  name: "Steps to Resolve Errors in Test Case"
  url: "#steps-to-resolve-errors-in-test-case"
---

---

Automate salesforce listview virtual tables using built-in table NLPs! 

In Salesforce, listview virtual tables have various cell properties: some cells are editable, some are dropdowns, and some include checkboxes. You can automate these dynamic tables efficiently by using built-in table NLPs. This article discusses using table NLPs to automate Listview tables in Testsigma.


---

> ## **Prerequisites**
> 
> - Salesforce organization with the test setup.
> 
> - Salesforce connected app. For more information, refer to [creating a connected app](https://testsigma.com/docs/salesforce-testing/special-nlps/).
>
> - Salesforce metadata connected to Testsigma. For more information, refer to [creating metadata connections](https://testsigma.com/docs/salesforce-testing/metadata-connections/).
>

---

## **Available NLPs to Automate Listview Table**

1. From the left navigation bar, go to **Create Tests > Test Cases** and click on **Create Test Case**.

2. From the **Test Case Details** page, you can create the test steps using inbuilt NLPs.

Here are the available NLPs to perform actions on Listview table in Salesforce:
![Table NLPs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tablenlps.png)

[[info | **NOTE**:]]
| You must create a table element before using these NLPs in your test cases to avoid execution failures. 

Here’s a quick GIF demonstrating how to create table elements and use them in your Table NLPs.
![Using table NLPs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tablenlpswf.gif)


---