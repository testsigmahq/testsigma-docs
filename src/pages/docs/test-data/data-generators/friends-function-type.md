---
title: "Friends Function Type"
pagetitle: "Generate and Manage Email Addresses with EmailFunctions"
metadesc: "Friends function type allows you to create various email addresses with ease. Learn to generate usernames, random emails, and domain-specific emails."
noindex: false
order: 5.40
page_id: "friends-function-type"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Selecting Friends as a Function Type for Data Generator"
  url: "#selecting-friends-as-a-function-type-for-data-generator"
- type: link
  name: "Character"
  url: "#character"
- type: link
  name: "Locationsr"
  url: "#locations"
---

---

TestDataFromProfile functions enable users to retrieve specific test data from designated profiles, allowing for easy access and utilization of predefined datasets for testing purposes.

---

## **Prerequisites**

Before utilising the different data generator functions, it's essential to understand basic concepts such as creating [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#create-test-case) and [Test Steps](https://testsigma.com/docs/test-cases/create-test-steps/overview/) and [adding data generators](https://testsigma.com/docs/test-data/types/data-generator/#add-data-generators-in-test-steps) in test steps.

---

## **Selecting Friends as a Function Type for Data Generator**

1. Use **NLP** to create a **new step** in the test case and include a placeholder for **test data**.
2. Click on the **test data** placeholder. From the **Test Data Types** dropdown menu, select the **! Data Generator** option.
3. On the **! Data Generators** overlay screen, select the **Type** to **Default**. This will enable you to use a collection of built-in test data generators.
4. Select **Friends** from the **Function Type** dropdown list. ![select friends function type from data generators](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/friends_functiontype_dg.gif)

[[info | NOTE:]]
| This action will display a list of built-in functions associated with the Friends function type, enabling you to select the appropriate function based on your requirements.

---

## **Character**

- Enables you to create diverse, random character names, which facilitates the testing of character-related features and ensures varied data inputs.

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
      <li>Elara Dawnstrider</li>
      <li>Percival Worthington</li>
      <li>Nova Solaris</li>
      <li>Evelyn Blackwood</li>
    </ul>
  </ul>
</div>

---

## **Locations**

- Allows you to generate random locations, aiding in the testing of location-based functionalities and ensuring comprehensive coverage.

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
      <li>Magical Forest</li>
      <li>Victorian London</li>
      <li>Space Colony</li>
      <li>Small Town</li>
    </ul>
  </ul>
</div>

---

