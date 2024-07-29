---
title: "DateFunctions Function Type"
pagetitle: "Generate Dates for Various Scenarios with DateFunctions"
metadesc: "Explore DateFunctions Function Type to generate dates for future events, past interactions, birthdays, and more. Perfect for scheduling and data simulation."
noindex: false
order: 5.36
page_id: "datefunctions-function-type"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Selecting DateFunctions as a Function Type for Data Generator"
  url: "#selecting-datefunctions-as-a-function-type-for-data-generator"
- type: link
  name: "Future"
  url: "#future"
- type: link
  name: "Future"
  url: "#future"
- type: link
  name: "Current"
  url: "#current"
- type: link
  name: "Between"
  url: "#between"
- type: link
  name: "Past"
  url: "#past"
- type: link
  name: "Past"
  url: "#past"
- type: link
  name: "Birthday"
  url: "#birthday"
- type: link
  name: "Date Before Today"
  url: "#date-before-today"
- type: link
  name: "Date After Today"
  url: "#date-after-today"
- type: link
  name: "Date Before Given Today"
  url: "#date-before-given-today"
- type: link
  name: "Date After Given Today"
  url: "#date-after-given-today"
---

---

DateFunctions enable you to generate and manipulate dates dynamically in various formats. Whether you need to schedule future events, simulate historical data, or validate timestamps, DateFunctions provides precise control and flexibility for date-generation tasks. They are ideal for applications in scheduling, data analysis, and date-based simulations.

---

## **Prerequisites**

Before utilising the different data generator functions, it's essential to understand basic concepts such as creating [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#create-test-case) and [Test Steps](https://testsigma.com/docs/test-cases/create-test-steps/overview/) and [adding data generators](https://testsigma.com/docs/test-data/types/data-generator/#add-data-generators-in-test-steps) in test steps.

---

## **Selecting DateFunctions as a Function Type for Data Generator**

1. Use **NLP** to create a **new step** in the test case and include a placeholder for **test data**.
2. Click on the **test data** placeholder. From the **Test Data Types** dropdown menu, select the **! Data Generator** option.
3. On the **! Data Generators** overlay screen, select the **Type** to **Default**. This will enable you to use a collection of built-in test data generators.
4. Select **DateFunctions** from the **Function Type** dropdown list. ![select datefunctions function type from data generators](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/datefuntions_functiontype_dg.gif)

[[info | NOTE:]]
| This action will display a list of built-in functions associated with the DateFunctions function type, enabling you to select the appropriate function based on your requirements.

---

## **Future**

- Allows you to generate dates up to a specified number of days in the future from a given reference date.
- Simulating future interactions or events based on a specific starting point, such as upcoming meetings or planned activities, is useful.
  
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
    padding: 0.75em;
    text-align: left;
    word-break: break-all; /* Ensures long words are wrapped */
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
    <tr>
      <th>Inputs</th>
      <th>Outputs</th>
    </tr>
    <tr>
      <td><b>At most</b>: 30<br><b>Unit</b>: DAYS<br><b>Format</b>: dd/MM/yyyy</b></td>
      <td>15/08/2024</td>
    </tr>
    <tr>
      <td><b>At most</b>: 60<br><b>Unit</b>: DAYS<br><b>Format</b>: dd/MM/yyyy</b></td>
      <td>08/09/2024</td>
    </tr>
    <tr>
      <td><b>At most</b>: 90<br><b>Unit</b>: DAYS<br><b>Format</b>: dd/MM/yyyy</b></td>
      <td>14/10/2024</td>
    </tr>
    <tr>
      <td><b>At most</b>: 30<br><b>Unit</b>: DAYS<br><b>Format</b>: dd/MM/yyyy</b></td>
      <td>09/08/2024</td>
    </tr>
  </table>
</div>

---

## **Future**

- Enables you to generate dates up to a specified number of days in the future from today's date.
- Generate dates for future events or reminders with specifying a reference date, making it ideal.

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
    padding: 0.75em;
    text-align: left;
    word-break: break-all; /* Ensures long words are wrapped */
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
    <tr>
      <th>Inputs</th>
      <th>Outputs</th>
    </tr>
    <tr>
      <td><b>At most</b>: 30<br><b>Unit</b>: DAYS<br><b>Reference Date</b>: 10/07/2024<br><b>Format</b>: dd/MM/yyyy</td>
      <td>15/08/2024</td>
    </tr>
    <tr>
      <td><b>At most</b>: 60<br><b>Unit</b>: DAYS<br><b>Reference Date</b>: 10/07/2024<br><b>Format</b>: dd/MM/yyyy</td>
      <td>08/09/2024</td>
    </tr>
    <tr>
      <td><b>At most</b>: 90<br><b>Unit</b>: DAYS<br><b>Reference Date</b>: 10/07/2024<br><b>Format</b>: dd/MM/yyyy</td>
      <td>14/10/2024</td>
    </tr>
    <tr>
      <td><b>At most</b>: 30<br><b>Unit</b>: DAYS<br><b>Reference Date</b>: 10/07/2024<br><b>Format</b>: dd/MM/yyyy</td>
      <td>09/08/2024</td>
    </tr>
  </table>
</div>

---

## **Current**

- Allows you to generate today's date in the specified format.
- This is useful when timestamping, or a specific format requires today's date.

Here's a comprehensive example using the provided code template. The examples for all DateFunctions are presented in a tabular format:

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
    padding: 0.75em;
    text-align: left;
    word-break: break-all; /* Ensures long words are wrapped */
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
    <tr>
      <th>Inputs</th>
      <th>Outputs</th>
    </tr>
    <tr>
      <td><b>Format</b>: dd/MM/yyyy</td>
      <td>20/07/2024</td>
    </tr>
    <tr>
      <td><b>Format</b>: dd/MM/yyyy</td>
      <td>16/07/2024</td>
    </tr>
    <tr>
      <td><b>Format</b>: dd/MM/yyyy</td>
      <td>30/04/2020</td>
    </tr>
    <tr>
      <td><b>Format</b>: dd/MM/yyyy</td>
      <td>12/12/2024</td>
    </tr>
  </table>
</div>


---

## **Between**

- Enables you to generate dates within a specified range.
- It is helpful in scenarios where you need to generate dates for a defined period, such as scheduling appointments or analyzing trends within a specific timeframe.

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
    padding: 0.75em;
    text-align: left;
    word-break: break-all; /* Ensures long words are wrapped */
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
    <tr>
      <th>Inputs</th>
      <th>Outputs</th>
    </tr>
    <tr>
      <td><b>From</b>: 01/01/2022<br><b>To</b>: 31/12/2022<br><b>Format</b>: dd/MM/yyyy</td>
      <td>14/05/2022</td>
    </tr>
    <tr>
      <td><b>From</b>: 01/01/2022<br><b>To</b>: 31/12/2022<br><b>Format</b>: dd/MM/yyyy</td>
      <td>22/08/2022</td>
    </tr>
    <tr>
      <td><b>From</b>: 01/01/2022<br><b>To</b>: 31/12/2022<br><b>Format</b>: dd/MM/yyyy</td>
      <td>11/11/2022</td>
    </tr>
    <tr>
      <td><b>From</b>: 01/01/2022<br><b>To</b>: 31/12/2022<br><b>Format</b>: dd/MM/yyyy</td>
      <td>02/03/2022</td>
    </tr>
  </table>
</div>

---

## **Past**

- Allows you to generate past dates relative to the current date. 
- This function helps create historical records, such as back at events or unanalyzed over a past period.

Here's a comprehensive example using the provided code template. The examples for all DateFunctions are presented in a tabular format:

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
    padding: 0.75em;
    text-align: left;
    word-break: break-all; /* Ensures long words are wrapped */
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
    <tr>
      <th>Inputs</th>
      <th>Outputs</th>
    </tr>
    <tr>
      <td><b>At most</b>: 60<br><b>Unit</b>: DAYS<br><b>Format</b>: dd/MM/yyyy</td>
      <td>11/05/2024</td>
    </tr>
    <tr>
      <td><b>At most</b>: 30<br><b>Unit</b>: DAYS<br><b>Format</b>: dd/MM/yyyy</td>
      <td>16/06/2024</td>
    </tr>
    <tr>
      <td><b>At most</b>: 60<br><b>Unit</b>: DAYS<br><b>Format</b>: dd/MM/yyyy</td>
      <td>17/05/2024</td>
    </tr>
    <tr>
      <td><b>At most</b>: 90<br><b>Unit</b>: DAYS<br><b>Format</b>: dd/MM/yyyy</td>
      <td>17/04/2024</td>
    </tr>
  </table>
</div>

---

## **Past**

- Allows you to generate past dates relative to a specified reference date. 
- It is ideal when you need to anchor your past dates to a specific point in time, which can be helpful for historical simulations or data analysis starting from a particular date.

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
    padding: 0.75em;
    text-align: left;
    word-break: break-all; /* Ensures long words are wrapped */
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
    <tr>
      <th>Inputs</th>
      <th>Outputs</th>
    </tr>
    <tr>
      <td><strong>At most</strong>: 30<br><strong>Unit</strong>: DAYS<br><strong>Reference Date</strong>: 10/07/2024<br><strong>Format</strong>: dd/MM/yyyy</td>
      <td>15/08/2024</td>
    </tr>
    <tr>
      <td><strong>At most</strong>: 60<br><strong>Unit</strong>: DAYS<br><strong>Reference Date</strong>: 10/07/2024<br><strong>Format</strong>: dd/MM/yyyy</td>
      <td>08/09/2024</td>
    </tr>
    <tr>
      <td><strong>At most</strong>: 90<br><strong>Unit</strong>: DAYS<br><strong>Reference Date</strong>: 10/07/2024<br><strong>Format</strong>: dd/MM/yyyy</td>
      <td>14/10/2024</td>
    </tr>
    <tr>
      <td><strong>At most</strong>: 30<br><strong>Unit</strong>: DAYS<br><strong>Reference Date</strong>: 10/07/2024<br><strong>Format</strong>: dd/MM/yyyy</td>
      <td>09/08/2024</td>
    </tr>
  </table>
</div>

---

## **Birthday**

- Allows you to generate random dates formatted as birthdays.
- Ideal for scenarios that require random date generation, such as populating test data or simulating user profiles with birthdates.

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
    padding: 0.75em;
    text-align: left;
    word-break: break-all; /* Ensures long words are wrapped */
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
    <tr>
      <th>Inputs</th>
      <th>Outputs</th>
    </tr>
    <tr>
      <td><strong>Offset</strong>: 30<br><strong>Format</strong>: dd/MM/yyyy</td>
      <td>16/07/1994</td>
    </tr>
    <tr>
      <td><strong>Offset</strong>: 25<br><strong>Format</strong>: dd/MM/yyyy</td>
      <td>16/07/1999</td>
    </tr>
    <tr>
      <td><strong>Offset</strong>: 40<br><strong>Format</strong>: dd/MM/yyyy</td>
      <td>16/07/1984</td>
    </tr>
    <tr>
      <td><strong>Offset</strong>: 18<br><strong>Format</strong>: dd/MM/yyyy</td>
      <td>16/07/2006</td>
    </tr>
  </table>
</div>

---

## **Date Before Today**

- Allows you to generate a date of a specified number of days before today.
- Generating historical dates relative to the current date is helpful for data analysis or scheduling based on past events.

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
    padding: 0.75em;
    text-align: left;
    word-break: break-all; /* Ensures long words are wrapped */
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
    <tr>
      <th>Inputs</th>
      <th>Outputs</th>
    </tr>
    <tr>
      <td><strong>Unit</strong>: DAYS<br><strong>Format</strong>: dd/MM/yyyy</td>
      <td>16/06/2024</td>
    </tr>
    <tr>
      <td><strong>Unit</strong>: DAYS<br><strong>Format</strong>: dd/MM/yyyy</td>
      <td>17/05/2024</td>
    </tr>
    <tr>
      <td><strong>Unit</strong>: DAYS<br><strong>Format</strong>: dd/MM/yyyy</td>
      <td>17/04/2024</td>
    </tr>
    <tr>
      <td><strong>Unit</strong>: DAYS<br><strong>Format</strong>: dd/MM/yyyy</td>
      <td>01/06/2024</td>
    </tr>
  </table>
</div>

---

## **Date After Today**

- Allows you to generate a date that is a specified number of days after today's date.
- You can use it to calculate future dates relative to the current date, such as when you schedule future tasks or events.

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
    padding: 0.75em;
    text-align: left;
    word-break: break-all; /* Ensures long words are wrapped */
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
    <tr>
      <th>Inputs</th>
      <th>Outputs</th>
    </tr>
    <tr>
      <td><strong>Unit</strong>: DAYS<br><strong>Format</strong>: dd/MM/yyyy</td>
      <td>15/08/2024</td>
    </tr>
    <tr>
      <td><strong>Unit</strong>: DAYS<br><strong>Format</strong>: dd/MM/yyyy</td>
      <td>14/09/2024</td>
    </tr>
    <tr>
      <td><strong>Unit</strong>: DAYS<br><strong>Format</strong>: dd/MM/yyyy</td>
      <td>14/10/2024</td>
    </tr>
    <tr>
      <td><strong>Unit</strong>: DAYS<br><strong>Format</strong>: dd/MM/yyyy</td>
      <td>30/08/2024</td>
    </tr>
  </table>
</div>

---

## **Date Before Given Today**

- Allows you to generate a date that is a specified number of days before a given reference date.
- It is helpful for scenarios where you need to calculate deadlines or events relative to a specific date in the past.

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
    padding: 0.75em;
    text-align: left;
    word-break: break-all; /* Ensures long words are wrapped */
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
    <tr>
      <th>Inputs</th>
      <th>Outputs</th>
    </tr>
    <tr>
      <td><strong>Unit</strong>: DAYS<br><strong>Reference Date</strong>: 10/07/2024<br><strong>Format</strong>: dd/MM/yyyy</td>
      <td>10/06/2024</td>
    </tr>
    <tr>
      <td><strong>At most</strong>: 60<br><strong>Unit</strong>: DAYS<br><strong>Reference Date</strong>: 10/07/2024<br><strong>Format</strong>: dd/MM/yyyy</td>
      <td>11/05/2024</td>
    </tr>
    <tr>
      <td><strong>At most</strong>: 90<br><strong>Unit</strong>: days<br><strong>Reference Date</strong>: 10/07/2024<br><strong>Format</strong>: dd/MM/yyyy</td>
      <td>11/04/2024</td>
    </tr>
    <tr>
      <td><strong>At most</strong>: 45<br><strong>Unit</strong>: DAYS<br><strong>Reference Date</strong>: 10/07/2024<br><strong>Format</strong>: dd/MM/yyyy</td>
      <td>26/05/2024</td>
    </tr>
  </table>
</div>

---

## **Date After Given Today**

- Allows you to generate a date that is a specified number of days after a given reference date.
- It helps project dates or events forward from a specific reference point, such as milestones or project deadlines.

<div class="example-container">
  <div class="example-title">
    <span>ℹ️</span>Example:
  </div>
  <table class="example-table">
    <tr>
      <th>Inputs</th>
      <th>Outputs</th>
    </tr>
    <tr>
      <td><strong>At most</strong>: 30<br><strong>Unit</strong>: DAYS<br><strong>Reference Date</strong>: 10/07/2024<br><strong>Format</strong>: dd/MM/yyyy</td>
      <td>09/08/2024</td>
    </tr>
    <tr>
      <td><strong>At most</strong>: 60<br><strong>Unit</strong>: DAYS<br><strong>Reference Date</strong>: 10/07/2024<br><strong>Format</strong>: dd/MM/yyyy</td>
      <td>08/09/2024</td>
    </tr>
    <tr>
      <td><strong>At most</strong>: 90<br><strong>Unit</strong>: DAYS<br><strong>Reference Date</strong>: 10/07/2024<br><strong>Format</strong>: dd/MM/yyyy</td>
      <td>08/10/2024</td>
    </tr>
    <tr>
      <td><strong>At most</strong>: 45<br><strong>Unit</strong>: DAYS<br><strong>Reference Date</strong>: 10/07/2024<br><strong>Format</strong>: dd/MM/yyyy</td>
      <td>24/08/2024</td>
    </tr>
  </table>
</div>

---



