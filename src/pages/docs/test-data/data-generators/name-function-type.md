---
title: "Name Function Type"
pagetitle: "Generate Random Names Easily with Data Generators"
metadesc: "Name function in Testsigma data generators allows you to create realistic random names effortlessly. Learn how to use Name and its functions in Testsigma."
noindex: false
order: 5.45
page_id: "name-function-type"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Selecting Name as a Function Type for Data Generator"
  url: "#selecting-name-as-a-function-type-for-data-generator"
- type: link
  name: "Name"
  url: "#name"
- type: link
  name: "Name with Middle"
  url: "#name-with-middle"
- type: link
  name: "Full Name"
  url: "#full-name"
- type: link
  name: "First Name"
  url: "#first-name"
- type: link
  name: "Last Name"
  url: "#last-name"
- type: link
  name: "Prefix"
  url: "#prefix"
- type: link
  name: "Suffix"
  url: "#suffix"
- type: link
  name: "Title"
  url: "#title"
- type: link
  name: "Username"
  url: "#username"
---

---

The Name Function within data generators offers a variety of functions designed to generate random names. These functions include first names, middle names, last names, prefixes, suffixes, titles, and usernames. The Name Function in data generators is invaluable for generating realistic names for testing scenarios, simulations, or database populations. This document outlines the various functions available within the Name Function type of data generators.

---

## **Prerequisites**

Before utilising the different data generator functions, it's essential to understand basic concepts such as creating [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#create-test-case) and [Test Steps](https://testsigma.com/docs/test-cases/create-test-steps/overview/) and [adding data generators](https://testsigma.com/docs/test-data/types/data-generator/#add-data-generators-in-test-steps) in test steps.

---

## **Selecting Name as a Function Type for Data Generator**

1. Use **NLP** to create a **new step** in the test case and include a placeholder for **test data**.
2. Click on the **test data** placeholder. From the **Test Data Types** dropdown menu, select the **! Data Generator** option.
3. On the **! Data Generators** overlay screen, select the **Type** to **Default**. This will enable you to use a collection of built-in test data generators.
4. Select **Name** from the **Function Type** dropdown list. ![select name function type from data generators](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/name_functiontype_dg.gif)

[[info | NOTE:]]
| This action will display a list of built-in functions associated with the Name function type, allowing you to select the appropriate function based on your requirements.

---

##  **Name**

- Enables you to generate random first and last names. Use it to create user profiles or generate names for forms.

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
      <li>Neha Grant</li>
      <li>Vern Sanford</li>
      <li>Michael Johnson</li>
      <li>Sarah Davis</li>
    </ul>
  </ul>
</div>

---

## **Name with Middle**

- Allows you to generate more detailed name data including middle names for forms that require middle name fields.

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
      <li>Roel Roel Ziemann</li>
      <li>Alysa Alysa Williamson</li>
      <li>John John Michael</li>
      <li>Emily Emily Brown</li>
    </ul>
  </ul>
</div>

---

## **Full Name**

- Enables you to generate complete random names including first, middle, and last names. This is useful for detailed entries where all name parts are required.

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
      <li>John Michael Doe</li>
      <li>Eden Gaylord Jr.</li>
      <li>Emily Anne Brown</li>
      <li>Michael Lee Johnson</li>
    </ul>
  </ul>
</div>

---

## **First Name**

- Allows you to generate random first names using it for filling out fields where only the first name is required.

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
      <li>John</li>
      <li>Daron</li>
      <li>Emily</li>
      <li>Sarah</li>
    </ul>
  </ul>
</div>

---

## **Last Name**

- Enables you to generate random last names, which are useful for scenarios requiring surnames.

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
      <li>Smith</li>
      <li>Hilpert</li>
      <li>Brown</li>
      <li>Johnson</li>
    </ul>
  </ul>
</div>

---

## **Prefix**

- Enables you to generate random name prefixes, add titles, and other formal honorifics. Prefixes denote titles, honorifics, or social standing. They provide a formal data to the name, showing respect, profession, or marital status.

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
      <li>Mr.</li>
      <li>Mrs.</li>
      <li>Dr.</li>
      <li>Ms.</li>
    </ul>
  </ul>
</div>

---

## **Suffix**

- Allows you to generate a random suffix for a name. Suffixes indicate generational ties, professional qualifications, or honorifics. They frequently signify a person's rank, lineage, or achievements.

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
      <li>Jr.</li>
      <li>MD</li>
      <li>Sr.</li>
      <li>PhD</li>
    </ul>
  </ul>
</div>

---

## **Title**

- Allows you to generate a random title, such as a job title or an honorific, to simulate professional scenarios requiring job titles, such as HR systems or organizational charts.

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
      <li>Engineer</li>
      <li>Chief Assurance Engineer</li>
      <li>Professor</li>
      <li>Doctor</li>
    </ul>
  </ul>
</div>


---

## **Username**

- Enables you to generate a random username, typically based on the first and last names or random alphanumeric characters, for testing login systems, user registration processes, and other scenarios requiring unique usernames. 

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
      <li>johnsmith</li>
      <li>edmond.heller</li>
      <li>emily.brown</li>
      <li>sarah.davis</li>
    </ul>
  </ul>
</div>


---
