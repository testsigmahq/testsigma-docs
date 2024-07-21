---
title: "IdNumber Function Type"
pagetitle: "Generate Valid and Invalid Identification Numbers"
metadesc: "The IdNumber function in data generators allows you to simulate US standard identification numbers, including valid SSNs, validSvSeSSn and unique formats."
noindex: false
order: 5.41
page_id: "idnumber-function-type"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Selecting IdNumber as a Function Type for Data Generator"
  url: "#selecting-idnumber-as-a-function-type-for-data-generator"
- type: link
  name: "Valid"
  url: "#valid"
- type: link
  name: "Invalid"
  url: "#invalid"
- type: link
  name: "SSN Valid"
  url: "#ssn-valid"
- type: link
  name: "Valid SvSe SSN"
  url: "#valid-svse-ssn"
- type: link
  name: "Invalid SvSe SSN"
  url: "#invalid-svse-ssn"
---

---

You can generate and manage various file-related data. This functionality is useful for handling files with specific attributes like file extensions, MIME types, and file names. Creating diverse file data for different applications can make file-handling tasks more efficient and organized.

---

## **Prerequisites**

Before utilising the different data generator functions, it's essential to understand basic concepts such as creating [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#create-test-case) and [Test Steps](https://testsigma.com/docs/test-cases/create-test-steps/overview/) and [adding data generators](https://testsigma.com/docs/test-data/types/data-generator/#add-data-generators-in-test-steps) in test steps.

---

## **Selecting IdNumber as a Function Type for Data Generator**

1. Use **NLP** to create a **new step** in the test case and include a placeholder for **test data**.
2. Click on the **test data** placeholder. From the **Test Data Types** dropdown menu, select the **! Data Generator** option.
3. On the **! Data Generators** overlay screen, select the **Type** to **Default**. This will enable you to use a collection of built-in test data generators.
4. Select **IdNumber** from the **Function Type** dropdown list. ![select datefunctions function type from data generators](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/idnumber_functiontype_dg.gif)

[[info | NOTE:]]
| This action will display a list of built-in functions associated with the IdNumber function type, enabling you to select the appropriate function based on your requirements.

---

## **Valid**

- Enables you to generate a valid identification number that adheres to specified formats and validation rules.

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
      <li>871-85-7385</li>
      <li>647-84-1801</li>
      <li>493-16-0542</li>
      <li>616-25-4680</li>
    </ul>
  </ul>
</div>

---

## **Invalid**

- Allows you to generate an invalid identification number that does not conform to standard formats or validation rules.

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
      <li>967-54-6956</li>
      <li>889-04-0000</li>
      <li>666-80-8283</li>
      <li>210-98-7654</li>
    </ul>
  </ul>
</div>

---

## **SSN Valid**

- Enables you to generate a valid SSN format that meets the criteria for a valid social security number.

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
      <li>123-45-6789</li>
      <li>456-78-9012</li>
      <li>789-01-2345</li>
      <li>567-89-0123</li>
    </ul>
  </ul>
</div>

---

## **Valid SvSe SSN**

- Allows you to generate a valid Swedish SSN according to specific validation rules for Sweden.

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
      <li>198501012389</li>
      <li>197312310123</li>
      <li>199011301234</li>
      <li>200102281234</li>
    </ul>
  </ul>
</div>

---

## **Invalid SvSe SSN**

- Enables you to generate an invalid Swedish SSN that does not conform to valid formats or rules.

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
      <li>198501013477</li>
      <li>200102281235</li>
      <li>199012301234</li>
      <li>197312310001</li>
    </ul>
  </ul>
</div>

---


