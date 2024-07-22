---
title: "RandomText Function Type"
pagetitle: "Generate Random Phone Numbers for Your Applications"
metadesc: "Phone Number Function generates random cell or phone numbers for testing contact forms, databases, and user profiles in various applications."
noindex: false
order: 5.52
page_id: "randomtext-function-type"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Selecting RandomText as a Function Type for Data Generator"
  url: "#selecting-randomtext-as-a-function-type-for-data-generator"
- type: link
  name: "Random Text Phrases"
  url: "#random-text-phrases"
---

---

RandomText Function Type allows you to generate random text strings of specified lengths. You can use it to create placeholder content, dummy data, or random identifiers. It offers flexibility in producing variable text data for different applications.

---

## **Prerequisites**

Before utilising the different data generator functions, it's essential to understand basic concepts such as creating [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#create-test-case) and [Test Steps](https://testsigma.com/docs/test-cases/create-test-steps/overview/) and [adding data generators](https://testsigma.com/docs/test-data/types/data-generator/#add-data-generators-in-test-steps) in test steps.

---

## **Selecting RandomText as a Function Type for Data Generator**

1. Use **NLP** to create a **new step** in the test case and include a placeholder for **test data**.
2. Click on the **test data** placeholder. From the **Test Data Types** dropdown menu, select the **! Data Generator** option.
3. On the **! Data Generators** overlay screen, select the **Type** to **Default**. This will enable you to use a collection of built-in test data generators.
4. Select **RandomText** from the **Function Type** dropdown list. ![select randomtext function type from data generators](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/randomtext_functiontype_dg.gif)

[[info | NOTE:]]
| This action will display a list of built-in functions associated with the RandomText function type, enabling you to select the appropriate function based on your requirements.

---

## **Random Text Phrases**

- Allows you to generate random phrases for various applications.
- It is useful for creating placeholder content, random text, or randomized text blocks for testing or development.

<style>
  .example-container {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1em;
    margin: 1em 0;
    background-color: #f9f9f9;
  }
  .example-title {
    color: #2d572c;
    font-weight: bold;
    display: flex;
    align-items: center;
    margin-bottom: 0.5em;
  }
  .example-title span {
    margin-right: 0.5em;
  }
  .example-table {
    width: 100%;
    border-collapse: collapse;
  }
  .example-table th, .example-table td {
    border: 1px solid #ddd;
    padding: 0.5em;
    text-align: left;
  }
  .example-table th {
    background-color: #f2f2f2;
  }
</style>

<div class="example-container">
  <div class="example-title">
    <span>ℹ️</span>Examples:
  </div>
  <table class="example-table">
    <thead>
      <tr>
        <th>Inputs</th>
        <th>Outputs</th>
      </tr>
    </thead>
    <tbody>
      <!-- Example 1 -->
      <tr>
        <td><b>Length:</b> 8</td>
        <td>kF7rB9pD</td>
      </tr>
      <!-- Example 2 -->
      <tr>
        <td><b>Length:</b> 12</td>
        <td>Lm5tQv9JxK3s</td>
      </tr>
      <!-- Example 3 -->
      <tr>
        <td><b>Length:</b> 6</td>
        <td>R8zQpT</td>
      </tr>
      <!-- Example 4 -->
      <tr>
        <td><b>Length:</b> 15</td>
        <td>Wz4hJ7uQk9RpLf8Vb</td>
      </tr>
    </tbody>
  </table>
</div>

---
