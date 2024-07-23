---
title: "Address Function Type"
pagetitle: "Generate Random Addresses for Testing and Simulation"
metadesc: "Start addresses easily with our tool. Generate random addresses including street, city, state, and postal code for testing or data simulation."
noindex: false
order: 5.33
page_id: "address-function-type"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Selecting Address as a Function Type for Data Generator"
  url: "#selecting-address-as-a-function-type-for-data-generator"
- type: link
  name: "Street Name"
  url: "#street-name"
- type: link
  name: "Street Address Number"
  url: "#street-address-number"
- type: link
  name: "Street Address"
  url: "#street-address"
- type: link
  name: "Secondary Address"
  url: "#secondary-address"
- type: link
  name: "Zip Code"
  url: "#zip-code"
- type: link
  name: "Zip Code by State"
  url: "#zip-code-by-state"
- type: link
  name: "Street Suffix"
  url: "#street-suffix"
- type: link
  name: "Street Prefix"
  url: "#street-prefix"
- type: link
  name: "City Suffix"
  url: "#city-suffix"
- type: link
  name: "City Prefix"
  url: "#city-prefix"
- type: link
  name: "City"
  url: "#city"
- type: link
  name: "State"
  url: "#state"
- type: link
  name: "State Abbr"
  url: "#state-abbr"
- type: link
  name: "Latitude"
  url: "#latitude"
- type: link
  name: "Longitude"
  url: "#longitude"
- type: link
  name: "Timezone"
  url: "#timezone"
- type: link
  name: "Country"
  url: "#country"
- type: link
  name: "Country Code"
  url: "#country-code"
- type: link
  name: "Building Number"
  url: "#building-number"
- type: link
  name: "Full Address"
  url: "#full-address"
---

---

Address functions generate various components of address data, such as street names, city names, and postal codes. These functions help create realistic and comprehensive address information for testing and data simulation purposes. You can generate complete addresses or individual elements like building numbers and ZIP codes.

---

## **Prerequisites**

Before utilising the different data generator functions, it's essential to understand basic concepts such as creating [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#create-test-case) and [Test Steps](https://testsigma.com/docs/test-cases/create-test-steps/overview/) and [adding data generators](https://testsigma.com/docs/test-data/types/data-generator/#add-data-generators-in-test-steps) in test steps.

---

## **Selecting Address as a Function Type for Data Generator**

1. Use **NLP** to create a **new step** in the test case and include a placeholder for **test data**.
2. Click on the **test data** placeholder. From the **Test Data Types** dropdown menu, select the **! Data Generator** option.
3. On the **! Data Generators** overlay screen, select the **Type** to **Default**. This will enable you to use a collection of built-in test data generators.
4. Select **Address** from the **Function Type** dropdown list. ![select address function type from data generators](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/address_functiontype_dg.gif)

[[info | NOTE:]]
| This action will display a list of built-in functions associated with the Address function type, enabling you to select the appropriate function based on your requirements.

---

## **Street Name**

- Allows you to generate realistic street names commonly found in residential or commercial areas. 

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
    <li><b>Inputs:</b> None (This function does not require any specific input)</li>
    <li><b>Outputs:</b></li>
    <ul>
      <li>Willow</li>
      <li>Cedar</li>
      <li>Elm</li>
      <li>Pinecrest</li>
    </ul>
  </ul>
</div>

---

## **Street Address Number**

- Enables you to generate realistic house or building numbers for addresses.

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
    <li><b>Inputs:</b> None (This function does not require any specific input)</li>
    <li><b>Outputs:</b></li>
    <ul>
      <li>1234</li>
      <li>567</li>
      <li>8901</li>
      <li>42</li>
    </ul>
  </ul>
</div>

---

## **Street Address**

- Enables you to generate complete street addresses with or without secondary address components for comprehensive address data creation. Select True in Secondary Address to include secondary address, or select False to exclude it.

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
  </div><br>
  <table>
    <tr>
      <th>Inputs</th>
      <th>Outputs</th>
    </tr>
    <tr>
      <td><b>Secondary Address</b>: True</td>
      <td>456 Oak Street, Apt. 12</td>
    </tr>
    <tr>
      <td><b>Secondary Address</b>: True</td>
      <td>789 Pine Avenue, Suite 5B</td>
    </tr>
    <tr>
      <td><b>Secondary Address</b>: False</td>
      <td>456 Oak Street</td>
    </tr>
    <tr>
      <td><b>Secondary Address</b>: False</td>
      <td>789 Pine Avenue</td>
    </tr>
  </table>
</div>

---

## **Secondary Address**

- Enables you to generate realistic secondary address components.

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
    <li><b>Inputs:</b> None (This function does not require any specific input)</li>
    <li><b>Outputs:</b></li>
    <ul>
      <li>Apt. 12</li>
      <li>Suite 5B</li>
      <li>Unit 301</li>
      <li>Apt. 3C</li>
    </ul>
  </ul>
</div>

---

## **Zip Code**

- Allows you to generate random zip codes for various addresses to ensure each address entry has a realistic postal code, aiding in location-specific data handling.

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
    <li><b>Inputs:</b> None (This function does not require any specific input)</li>
    <li><b>Outputs:</b></li>
    <ul>
      <li>12345</li>
      <li>67890</li>
      <li>90210</li>
      <li>60601</li>
    </ul>
  </ul>
</div>

---

## **Zip Code by State**

- Enables you to generate state-specific ZIP codes based on the provided state abbreviation.

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
    <span>ℹ️</span>Example:
  </div><br>
  <table>
    <tr>
      <th>Inputs: State Abbreviation</th>
      <th>Outputs: Zip Code</th>
    </tr>
    <tr>
      <td>CA</td>
      <td>90001</td>
    </tr>
    <tr>
      <td>NY</td>
      <td>10001</td>
    </tr>
    <tr>
      <td>TX</td>
      <td>73301</td>
    </tr>
    <tr>
      <td>FL</td>
      <td>33101</td>
    </tr>
  </table>
</div>

---

## **Street Suffix**

- Allows you to generate street suffixes indicating the type or category of the street, adding specificity to street or names.

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
    <li><b>Inputs:</b> None (This function does not require any specific input)</li>
    <li><b>Outputs:</b></li>
    <ul>
      <li>Street</li>
      <li>Avenue</li>
      <li>Boulevard</li>
      <li>Lane</li>
    </ul>
  </ul>
</div>

---

## **Street Prefix**

- Enables you to generate a street prefix indicating the type. Providing directional or descriptive prefixes gives more context or direction to the street name.

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
    <li><b>Inputs:</b> None (This function does not require any specific input)</li>
    <li><b>Outputs:</b></li>
    <ul>
      <li>North</li>
      <li>South</li>
      <li>East</li>
      <li>West</li>
    </ul>
  </ul>
</div>

---

## **City Suffix**

- Allows you to generate city suffixes indicating the type to categorize cities or towns based on their characteristics.

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
    <li><b>Inputs:</b> None (This function does not require any specific input)</li>
    <li><b>Outputs:</b></li>
    <ul>
      <li>Heights</li>
      <li>Village</li>
      <li>Town</li>
      <li>Springs</li>
    </ul>
  </ul>
</div>

---

## **City Prefix**

- Enables you to generate a city prefix that indicates the start or characteristic of a city's name, providing city names to denote direction, location, or historical context.

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
    <li><b>Inputs:</b> None (This function does not require any specific input)</li>
    <li><b>Outputs:</b></li>
    <ul>
      <li>North</li>
      <li>East</li>
      <li>Old</li>
      <li>West</li>
    </ul>
  </ul>
</div>

---

## **City**

- Allows you to generates random city names and provides diverse urban area names for various applications that need city data.

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
    <li><b>Inputs:</b> None (This function does not require any specific input)</li>
    <li><b>Outputs:</b></li>
    <ul>
      <li>New York</li>
      <li>Los Angeles</li>
      <li>Chicago</li>
      <li>Houston</li>
    </ul>
  </ul>
</div>

---

## **State**

- Enables you to generates random state names. Provides state names for applications that require state-level data.

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
    <li><b>Inputs:</b> None (This function does not require any specific input)</li>
    <li><b>Outputs:</b></li>
    <ul>
      <li>California</li>
      <li>Texas</li>
      <li>Florida</li>
      <li>New York</li>
    </ul>
  </ul>
</div>

---

## **State Abbr**

- Allows you to generate two-letter codes representing states. It provides standardized abbreviations for efficient data handling.

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
    <li><b>Inputs:</b> None (This function does not require any specific input)</li>
    <li><b>Outputs:</b></li>
    <ul>
      <li>CA</li>
      <li>TX</li>
      <li>FL</li>
      <li>NY</li>
    </ul>
  </ul>
</div>

---

## **Latitude**

- Enables you to generate random latitude coordinates. It offers geographic coordinates for location-based services and mapping applications.

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
    <li><b>Inputs:</b> None (This function does not require any specific input)</li>
    <li><b>Outputs:</b></li>
     <ul>
      <li>34.0522</li>
      <li>40.7128</li>
      <li>41.8781</li>
      <li>29.7604</li>
    </ul>
  </ul>
</div>

---

## **Longitude**

- Allows you to generate random longitude coordinates. It provides geographic coordinates for precise location-based applications and mapping.

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
    <li><b>Inputs:</b> None (This function does not require any specific input)</li>
    <li><b>Outputs:</b></li>
     <ul>
      <li>118.2437</li>
      <li>74.0060</li>
      <li>87.6298</li>
      <li>95.3698</li>
    </ul>
  </ul>
</div>

---

## **Timezone**

- Enable you to generate time zone names. It provides time zone data for accurate time-related applications and scheduling.

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
    <li><b>Inputs:</b> None (This function does not require any specific input)</li>
    <li><b>Outputs:</b></li>
    <ul>
      <li>Asia/Baku</li>
      <li>Africa/Lagos</li>
      <li>America/Chicago</li>
      <li>Australia/Sydney</li>
    </ul>
  </ul>
</div>

---

## **Country**

- Allows you to generate random country names and provides country names for applications requiring country-level data.

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
    <li><b>Inputs:</b> None (This function does not require any specific input)</li>
    <li><b>Outputs:</b></li>
    <ul>
      <li>United States</li>
      <li>Canada</li>
      <li>Australia</li>
      <li>Mexico</li>
    </ul>
  </ul>
</div>

---

## **Country Code**

- Enables you to generate two-letter or three-letter codes that uniquely identify countries. Provides standardized data handling and internationalization for ISO country codes.

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
    <li><b>Inputs:</b> None (This function does not require any specific input)</li>
    <li><b>Outputs:</b></li>
    <ul>
      <li>US</li>
      <li>CA</li>
      <li>AU</li>
      <li>MX</li>
    </ul>
  </ul>
</div>

---

## **Building Number**

- Allows you to generates a random building number for address data and ensures that the generated addresses include a realistic building number.

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
    <li><b>Inputs:</b> None (This function does not require any specific input)</li>
    <li><b>Outputs:</b></li>
    <ul>
      <li>123</li>
      <li>789</li>
      <li>1011</li>
      <li>565</li>
    </ul>
  </ul>
</div>

---

## **Full Address**

- Enables you to generate a complete location description including street, city, state, and postal code.

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
    <li><b>Inputs:</b> None (This function does not require any specific input)</li>
    <li><b>Outputs:</b></li>
    <ul>
      <li>456 Oak Street, Los Angeles, CA 90001</li>
      <li>789 Pine Avenue, New York, NY 10001</li>
      <li>321 Elm Drive, Chicago, IL 60601</li>
      <li>101 Maple Lane, Houston, TX 77002</li>
    </ul>
  </ul>
</div>


---


