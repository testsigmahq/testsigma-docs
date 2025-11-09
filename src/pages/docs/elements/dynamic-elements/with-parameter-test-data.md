---
title: "Dynamic Locators using Parameter"
page_title: "Dynamic Locators using Parameter: Enhance Test Stability"
metadesc: "This article discusses the usage of Parameter Test Data for creating dynamic locators to use in Data-driven Testing | Learn about Parameter Test Data"
noindex: false
order: 6.81
page_id: "dynamic-locators-using-parameter-in-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Store Elements ID attribute into Test Data Profile"
  url: "#store-elements-id-attribute-into-test-data-profile"
- type: link
  name: "Creating Dynamic Elements using Parameter"
  url: "#creating-dynamic-elements-using-parameter"
- type: link
  name: "Configuring Test Data Profile in Test Case"
  url: "#configuring-test-data-profile-in-test-case"
- type: link
  name: "Run Results for Dynamic Elements using Parameter"
  url: "#run-results-for-dynamic-elements-using-parameter"

---

---

Dynamic locators are necessary for data-driven testing because they help adjust to changes in elements. You can use a Test Data profile to set the variable part of the ID attribute. The parameter name, called elements, holds the dynamic data for storing the dynamic part. Testsigma makes this easy using parameterised XPath or CSS Selectors in test steps. This guide will show you how with a practical example.

---

> <p id="prerequisites">Prerequisites</p>
>
>
> Before you begin, ensure that:
> 1. [Documentation on creating test cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#creating-a-test-case).
> 2. [Documentation on creating test steps](https://testsigma.com/docs/test-cases/step-types/natural-language/).
> 3. [Documentation on creating test data profiles](https://testsigma.com/docs/test-data/create-data-profiles/).
> 4. [Documentation on creating parameters](https://testsigma.com/docs/test-data/types/parameter/).
> 5. [Documentation on creating test data types](https://testsigma.com/docs/test-data/types/overview/).

---

## **Store Elements ID attribute into Test Data Profile**

We are using the Simply Travel Flight website as an example and sorting the city names and the variable part of the element's ID attribute in the test data profile.

1. Navigate to the website containing the elements you want to copy the **XPath**.
  
2. We will use the Simply Travel Flight website as an example of the above test steps. Click **Select from Cities** and copy the **XPath** values for the cities. 
  ![Website](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/Dynamic_1.png)

3. **Right-click** on the desired and select **Inspect** to open **Chrome Developer Tools**.
   ![Inspect](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/Dynamic_2.png)

4. Use the **Select Element** icon to locate and inspect the element, then right-click the HTML tag and copy the **XPath**.
   ![XPath](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/Dynamic_3.png)

5. The table below explains how the city names and their corresponding XPath for an element.
   <table>
  <tr>
    <th>Cities</th>
    <th>XPath</th>
  </tr>
  <tr>
    <td>Los Angeles</td>
    <td><code>//*[@id="city-1"]/div[2]/span[1]</code></td>
  </tr>
  <tr>
    <td>Washington, D.C.</td>
    <td><code>//*[@id="city-2"]/div[2]/span[1]</code></td>
  </tr>
  <tr>
    <td>New York City</td>
    <td><code>//*[@id="city-3"]/div[2]/span[1]</code></td>
  </tr>
  <tr>
    <td>London</td>
    <td><code>//*[@id="city-4"]/div[2]/span[1]</code></td>
  </tr>
</table>

6. In the provided XPath examples, the IDs of the cities have a common portion, **city-**, followed by a variable digit from **1** to **4**. We will parameterise this by storing the city and the variable portion using a Test Data profile.
7. Navigate to **Test Data** > **Test Data Profile**. Click on **Create Test Data Profile**. 
   ![Create Test Data Profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/Dynamic_4.png)

8. Below is the created Test Data profile for storing element ID attributes: 
   ![Attributes](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/Dynamic_5.png)

---

## **Creating Dynamic Elements using Parameter**

1. Use NLP to create a new step in the Test Case and include a placeholder for the element. 
   ![NLP](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/Dynamic_6.png)

   [[info | Example:]]
   | Utilise NLP "Click on **Element**" to click an element with a given UI Identifier.

2. Click on the **Element**, then select **Create Element** from the dropdown list.
   ![Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/Dynamic_7.png)

3. Manually enter the **Element Name**, **Screen Name**, and **Element Type** in the **Create Element** overlay screen.
   ![Element Name](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/Dynamic_8.png)

4. Provide the dynamic element value **//*[@id="@|cities|"]/div[2]/span[1]**, where **cities** is the parameter name containing dynamic data.
   ![XPath Value](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/Dynamic_9.png)

5. Click **Create Element** to complete element creation and then **Create Step**. 
   ![Create Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/Dynamic_10.png)

---

## **Configuring Test Data Profile in Test Case**

1. In Test Case details page, click **Test Case Settings** in the right-side navbar.
   ![Test Case Setings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/Dynamic_11.png)

2. Choose the associated **Test Data Profile**.
   ![Test Data Profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/Dynamic_12.png)

3. Enable the **Data-Driven** toggle and select **Filter Type**, **Comparison Metric**, and **Data Iteration**. 
   ![Data-Driven](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/Dynamic_13.png)

---

## **Run Results for Dynamic Elements using Parameter**

1. Once the test step created with the dynamic Element, execute the Test Case.
   ![Run](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/Dynamic_14.png)

2. Wait until the Test Case execution is completed.
   
3. The Test Case will iterate as many times as there are **Test Data Sets (rows)** in the Test Data Profile, resulting in four iterations based on the provided example.
   ![Test Data Sets](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/Dynamic_15.png)

---