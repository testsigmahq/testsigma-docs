---
title: "DomainFunctions Function Type"
pagetitle: "Domain Functions: Generate Domain-Specific Email Addresses"
metadesc: "Domain Functions enable you to create email addresses with specific domains. Perfect for setting up organization-specific emails and testing needs."
noindex: false
order: 5.37
page_id: "domainfunctions-function-type"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Selecting DomainFunctions as a Function Type for Data Generator"
  url: "#selecting-domainfunctions-as-a-function-type-for-data-generator"
- type: link
  name: "Email with Domain"
  url: "#email-with-domain"
---

---

Domain Functions design email addresses with specific domains. They create email addresses that align with a particular organization or domain name, ensuring that the generated emails are correctly formatted for that domain.

---

## **Prerequisites**

Before utilising the different data generator functions, it's essential to understand basic concepts such as creating [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#create-test-case) and [Test Steps](https://testsigma.com/docs/test-cases/create-test-steps/overview/) and [adding data generators](https://testsigma.com/docs/test-data/types/data-generator/#add-data-generators-in-test-steps) in test steps.

---

## **Selecting DomainFunctions as a Function Type for Data Generator**

1. Use **NLP** to create a **new step** in the test case and include a placeholder for **test data**.
2. Click on the **test data** placeholder. From the **Test Data Types** dropdown menu, select the **! Data Generator** option.
3. On the **! Data Generators** overlay screen, select the **Type** to **Default**. This will enable you to use a collection of built-in test data generators.
4. Select **DomainFunctions** from the **Function Type** dropdown list. ![select domainfunctions function type from data generators](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/domainfunctions_functiontype_dg.gif)

[[info | NOTE:]]
| This action will display a list of built-in functions associated with the DomainFunctions function type, enabling you to select the appropriate function based on your requirements.

---

## **Email with Domain**

- Allows you to generate an email address with a specified domain, ensuring the email format adheres to your inputs. 
- It is useful when you create realistic email addresses with domains for testing or in any scenario that requires domain-specific email addresses.

<style>
  .example-container {
    border: 1px solid gray;
    border-radius: 4px;
    padding: 0.5em;
    margin: 0.5em 0;
    background-color: #f2f2f2;
  }
  .example-title {
    color: darkgreen;
    font-weight: bold;
    display: flex;
    align-items: center;
  }
  .example-title span {
    margin-right: 5px;
  }
  .example-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 0.5em;
  }
  .example-table th, .example-table td {
    border: 1px solid gray;
    padding: 0.5em;
    text-align: left;
  }
  .example-table th {
    background-color: #e6e6e6;
    color: darkgreen;
  }
</style>

<div class="example-container">
  <div class="example-title">
    <span>ℹ️</span>Examples:
  </div>
  <table class="example-table">
    <tr>
      <th>Inputs</th>
      <th>Outputs</th>
    </tr>
    <tr>
      <td><b>domain</b>: example.com</td>
      <td>john.doe@example.com</td>
    </tr>
    <tr>
      <td><b>domain</b>: mycompany.org</td>
      <td>jane.smith@mycompany.org</td>
    </tr>
    <tr>
      <td><b>domain</b>: school.edu</td>
      <td>robert.brown@school.edu</td>
    </tr>
    <tr>
      <td><b>domain</b>: organization.net</td>
      <td>emily.jones@organization.net</td>
    </tr>
  </table>
</div>


---

