---
title: "Number Function Type"
pagetitle: "Generate Random Numbers and Digits | Data Generator Function"
metadesc: "Explore efficient data generator functions for seamlessly creating random numbers, digits, and decimals in diverse applications and scenarios."
noindex: false
order: 5.47
page_id: "number-function-type"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Selecting Number as a Function Type for Data Generator"
  url: "#selecting-number-as-a-function-type-for-data-generator"
- type: link
  name: "Random Number"
  url: "#random-number"
- type: link
  name: "Random Digit"
  url: "#random-digit"
- type: link
  name: "Random Digit Not Zero"
  url: "#random-digit-not-zero"
- type: link
  name: "Number of Digits"
  url: "#number-of-digits"
- type: link
  name: "Random Number"
  url: "#random-number"
- type: link
  name: "Random Double"
  url: "#random-double"
- type: link
  name: "Digits"
  url: "#digits"    
- type: link
  name: "Digit"
  url: "#digit" 
---

---

The Number Function Type allows you to generate various types of random numbers. These functions help in creating data for different scenarios where random numerical values are required.

---

## **Prerequisites**

Before utilising the different data generator functions, it's essential to understand basic concepts such as creating [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#create-test-case) and [Test Steps](https://testsigma.com/docs/test-cases/create-test-steps/overview/) and [adding data generators](https://testsigma.com/docs/test-data/types/data-generator/#add-data-generators-in-test-steps) in test steps.

---

## **Selecting Number as a Function Type for Data Generator**

1. Use **NLP** to create a **new step** in the test case and include a placeholder for **test data**.
2. Click on the **test data** placeholder. From the **Test Data Types** dropdown menu, select the **! Data Generator** option.
3. On the **! Data Generators** overlay screen, select the **Type** to **Default**. This will enable you to use a collection of built-in test data generators.
4. Select **Number** from the **Function Type** dropdown list. ![select number function type from data generators](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/number_functiontype_dg.gif)

[[info | NOTE:]]
| This action will display a list of built-in functions associated with the Number function type, enabling you to select the appropriate function based on your requirements.

---

## **Random Number**

- Enables you to generate a random number between a specified range. It is useful for creating random data samples within a specific numeric range.

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
    <span>ℹ️</span>Example:
  </div>
  <table class="example-table">
    <thead>
      <tr>
        <th>Input</th>
        <th>Output</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td><b>min</b>: 1<br><b>max</b>: 100</td>
      <td>73</td>
    </tr>
    <tr>
      <td><b>min</b>: 10<br><b>max</b>: 50</td>
      <td>32</td>
    </tr>
    <tr>
      <td><b>min</b>: 100<br><b>max</b>: 500</td>
      <td>418</td>
    </tr>
    <tr>
      <td><b>min</b>: 5<br><b>max</b>: 20</td>
      <td>15</td>
    </tr>
    </tbody>
  </table>
</div>

---

## **Random Digit**

- Allows you to generate a random digit between 0 and 9. This is helpful for scenarios where single-digit numbers are required, like generating a random OTP.

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
    <span>ℹ️</span>Example:
  </div>
  <ul class="example-list">
    <li><b>Input:</b> None (This function does not require any specific input)</li>
    <li><b>Output:</b></li>
    <ul>
      <li>7</li>
      <li>3</li>
      <li>0</li>
      <li>9</li>
    </ul>
  </ul>
</div>

---

## **Random Digit Not Zero**

- Enables you to generate a random digit between 1 and 9. This is useful for cases where zero is not a valid digit, such as generating unique identification codes.

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
    <span>ℹ️</span>Example:
  </div>
  <ul class="example-list">
    <li><b>Input:</b> None (This function does not require any specific input)</li>
    <li><b>Output:</b></li>
    <ul>
      <li>6</li>
      <li>8</li>
      <li>3</li>
      <li>1</li>
    </ul>
  </ul>
</div>

---

## **Number of Digits**

- Allows you to generate a number with a specified number of digits. This is useful for generating identification numbers or codes of a fixed length.

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
    <span>ℹ️</span>Example:
  </div>
  <table class="example-table">
    <thead>
      <tr>
        <th>Input</th>
        <th>Output</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td><b>Digits</b>: 5<br><b>Boolean</b>: True</td>
      <td>39485</td>
    </tr>
    <tr>
      <td><b>Digits</b>: 4<br><b>Boolean</b>: False</td>
      <td>-3276</td>
    </tr>
    <tr>
      <td><b>Digits</b>: 3<br><b>Boolean</b>: True</td>
      <td>821</td>
    </tr>
    <tr>
      <td><b>Digits</b>: 6<br><b>Boolean</b>: False</td>
      <td>-491257</td>
    </tr>
    </tbody>
  </table>
</div>

---

## **Random Number**

- Enables you to generate a random number without specifying any range. It is useful for generating random numerical data without any constraints.

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
    <span>ℹ️</span>Example:
  </div>
  <ul class="example-list">
    <li><b>Input:</b> None (This function does not require any specific input)</li>
    <li><b>Output:</b></li>
    <ul>
      <li>845</li>
      <li>129</li>
      <li>4567</li>
      <li>901</li>
    </ul>
  </ul>
</div>

---

## **Random Double**

- Allows you to generate a random decimal number within a specified range and with a specified number of decimal places. This is useful for scenarios requiring floating-point numbers, such as price or measurement data.

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
    <span>ℹ️</span>Example:
  </div>
  <table class="example-table">
    <thead>
      <tr>
        <th>Inputs</th>
        <th>Outputs</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td><b>Max No of Decimals</b>: 2<br><b>Min</b>: 1.5<br><b>Max</b>: 5.5</td>
      <td>3.47</td>
    </tr>
    <tr>
      <td><b>Max No of Decimals</b>: 3<br><b>Min</b>: 10.1<br><b>Max</b>: 20.5</td>
      <td>15.234</td>
    </tr>
    <tr>
      <td><b>Max No of Decimals</b>: 1<br><b>Min</b>: 100.0<br><b>Max</b>: 200.0</td>
      <td>145.7</td>
    </tr>
    <tr>
      <td><b>Max No of Decimals</b>: 4<br><b>Min</b>: 0.1<br><b>Max</b>: 1.0</td>
      <td>0.7564</td>
    </tr>
    </tbody>
  </table>
</div>

---

## **Digits**

- Enables you to generate a random number with a specified count of digits, which is useful for creating data where numbers of a specific digit length are required, like serial numbers.

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
    <span>ℹ️</span>Example:
  </div>
  <table class="example-table">
    <thead>
      <tr>
        <th>Inputs</th>
        <th>Outputs</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td><b>Count</b>: 3</td>
      <td>593</td>
    </tr>
    <tr>
      <td><b>Count</b>: 5</td>
      <td>48291</td>
    </tr>
    <tr>
      <td><b>Count</b>: 2</td>
      <td>47</td>
    </tr>
    <tr>
      <td><b>Count</b>: 6</td>
      <td>384719</td>
    </tr>
    </tbody>
  </table>
</div>

---

## **Digit**

- Allows you to generate a random number with a fixed length using this feature, which is useful for generating small, single-digit random numbers.

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
    <span>ℹ️</span>Example:
  </div>
  <ul class="example-list">
    <li><b>Input:</b> None (This function does not require any specific input)</li>
    <li><b>Output:</b></li>
    <ul>
      <li>6</li>
      <li>4</li>
      <li>7</li>
      <li>2</li>
    </ul>
  </ul>
</div>

---


