---
title: "NameFunctions Function Type"
pagetitle: "NameFunctions: Generate Unique Alphanumeric Usernames"
metadesc: "NameFunctions lets you generate unique, random alphanumeric usernames. It’s useful for creating distinct user identifiers and varied name data."
noindex: false
order: 5.46
page_id: "namefunctions-function-type"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Selecting NameFunctions as a Function Type for Data Generator"
  url: "#selecting-namefunctions-as-a-function-type-for-data-generator"
- type: link
  name: "Username"
  url: "#username"
---

---

NameFunctions Function Type in data generators helps you create usernames. It provides unique and random data, offering a wide variety of name-related information for your applications.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that you have referred to:
> 1. [Documentation on creating test cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#create-test-case).
> 2. [Documentation on creating test steps](https://testsigma.com/docs/test-cases/create-test-steps/overview/).
> 3. [Documentation on adding data generators](https://testsigma.com/docs/test-data/types/data-generator/#add-data-generators-in-test-steps) in test steps.

---

## **Selecting NameFunctions as a Function Type for Data Generator**

1. From the left navigation bar, go to **Create Tests > Test Cases** and create a new test case.
![Test Case](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_namefunction_1.png)

2. Use **NLP** to create a **new step** in the test case and include a placeholder for **test data**.
![NLP](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_namefunction_2.png)

3. Click on the **test data** placeholder. From the **Test Data Types** dropdown menu, select the **! Data Generator** option.
![Test Data type](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_namefunction_3.png)

4. On the **! Data Generators** overlay screen, select the **Type** to **Default**. This will enable you to use a collection of built-in test data generators.
![Default](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_namefunction_4.png)

5. Select **NameFunctions** from the **Function Type** dropdown list. 
![select namefunctions function type from data generators](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_namefunction_5.png)

[[info | NOTE:]]
| This action will display a list of built-in functions associated with the NameFunctions function type, enabling you to select the appropriate function based on your requirements.

---

## **Username**

- Allows you to generate unique, random alphanumeric usernames. 
- It helps create distinct user identifiers and varied name data.

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
  .example-list {
    list-style: none;
    padding: 0;
  }
  .example-list li {
    margin-bottom: 0.5em;
  }
</style>

<div class="example-container">
  <div class="example-title">
    <span>ℹ️</span>Example:
  </div>
  <ul class="example-list">
    <li><b>Input:</b> None (This function does not require any specific input)</li>
    <li><b>Output:</b></li>
    <ul>
      <li>JohnDoe123</li>
      <li>JaneSmith_xyz</li>
      <li>MichaelJohnson001</li>
      <li>EmilyBrown!@#</li>
    </ul>
  </ul>
</div>


---
