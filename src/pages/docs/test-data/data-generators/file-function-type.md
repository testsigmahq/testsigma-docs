---
title: "File Function Type"
pagetitle: "Importing File Function Type for Dynamic File Handling"
metadesc: "Learn to utilize the File Function Type for dynamic file handling in your applications to generate random file extensions, MIME types, and file names."
noindex: false
order: 5.39
page_id: "file-function-type"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Selecting File as a Function Type for Data Generator"
  url: "#selecting-file-as-a-function-type-for-data-generator"
- type: link
  name: "Extension"
  url: "#extension"  
- type: link
  name: "MIME Type"
  url: "#mime-type"
- type: link
  name: "File Name with Directory Path"
  url: "#file-name-with-directory-path"
- type: link
  name: "Generate Filename based on Provided Arguments"
  url: "#generate-filename-based-on-provided-arguments"
---

---

You can generate and manage various file-related data. This functionality is useful for handling files with specific attributes like file extensions, MIME types, and file names. Creating diverse file data for different applications can make file-handling tasks more efficient and organized.

---

## **Prerequisites**

Before utilising the different data generator functions, it's essential to understand basic concepts such as creating [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#create-test-case) and [Test Steps](https://testsigma.com/docs/test-cases/create-test-steps/overview/) and [adding data generators](https://testsigma.com/docs/test-data/types/data-generator/#add-data-generators-in-test-steps) in test steps.

---

## **Selecting File as a Function Type for Data Generator**

1. Use **NLP** to create a **new step** in the test case and include a placeholder for **test data**.
2. Click on the **test data** placeholder. From the **Test Data Types** dropdown menu, select the **! Data Generator** option.
3. On the **! Data Generators** overlay screen, select the **Type** to **Default**. This will enable you to use a collection of built-in test data generators.
4. Select **File** from the **Function Type** dropdown list. ![select datefunctions function type from data generators](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/file_functiontype_dg.gif)

[[info | NOTE:]]
| This action will display a list of built-in functions associated with the File function type, enabling you to select the appropriate function based on your requirements.

---

## **Extension**

- Allows you to specify the type of file by adding a file extension. It helps in identifying the type of file.

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
      <li>html</li>
      <li>docx</li>
      <li>tiff</li>
      <li>js</li>
    </ul>
  </ul>
</div>

---

## **MIME Type**

- Allows you to identify the format and nature of a file using MIME types. It helps applications recognize the type of file being processed.

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
      <li>application/font-woff</li>
      <li>text/xml</li>
      <li>model/mesh</li>
      <li>audio/vorbis</li>
    </ul>
  </ul>
</div>

---

## **File Name with Directory Path**

- Allows you to assign a specific name to a file, including the file extension. It helps in organizing and identifying files.

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
      <li>blanditiis_minus/at.json</li>
      <li>nihil_autem/assumenda.css</li>
      <li>quis_sit/est.wav</li>
      <li>voluptatem_nisi/quas.jpeg</li>
    </ul>
  </ul>
</div>

---

## **Generate Filename based on Provided Arguments**

- Allows you to generate a filename based on specific provided arguments, ensuring customized file naming. 

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
  table {
    border-collapse: collapse;
    width: 100%;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
  }
</style>
<div class="example-container">
  <div class="example-title">
    <span>ℹ️</span>Examples:
  </div><br>
  <table>
    <thead>
      <tr>
        <th>Input</th>
        <th>Output</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>arg0</b>: /documents<br><b>arg1</b>: /<br><b>arg2</b>: annual_report<br><b>arg3</b>: .pdf</td>
        <td>/documents/annual_report.pdf</td>
      </tr>
      <tr>
        <td><b>arg0</b>: /spreadsheets<br><b>arg1</b>: /<br><b>arg2</b>: sales_data<br><b>arg3</b>: .xlsx</td>
        <td>/spreadsheets/sales_data.xlsx</td>
      </tr>
      <tr>
        <td><b>arg0</b>: /presentations<br><b>arg1</b>: /<br><b>arg2</b>: company_meeting<br><b>arg3</b>: .pptx </td>
        <td> /presentations/company_meeting.pptx</td>
      </tr>
      <tr>
        <td><b>arg0</b>: /data<br><b>arg1</b>: /<br><b>arg2</b>: customer_list<br><b>arg3</b>: .csv</td>
        <td>/data/customer_list.csv</td>
      </tr>
    </tbody>
  </table>
</div>



---


