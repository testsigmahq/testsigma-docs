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

## **Prerequisites**

Before implementing dynamic locators using parameters in Testsigma, ensure familiarity with fundamental concepts such as creating a [Test Case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#creating-a-test-case), managing [Test Steps](https://testsigma.com/docs/test-cases/step-types/natural-language/), handling [Test Data Profiles](https://testsigma.com/docs/test-data/create-data-profiles/) and [Parameters](https://testsigma.com/docs/test-data/types/parameter/), and effectively utilising different [Test Data Types](https://testsigma.com/docs/test-data/types/overview/).

---

## **Store Elements ID attribute into Test Data Profile**

We are using the Simply Travel Flight website as an example and sorting the city names and the variable part of the element's ID attribute in the test data profile.

1. Navigate to the website containing the elements you want to copy the **XPath**.
2. **Right-click** on the desired and select **Inspect** to open **Chrome Developer Tools**.
3. Use the **Select Element** icon to locate and inspect the element, then right-click the HTML tag and copy the **XPath**.
4. We will use the Simply Travel Flight website as an example of the above test steps. Click **Select from Cities** and copy the **XPath** values for the cities. ![Copy Xpath for storing](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/copy_xpath.gif)
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
7. Navigate to **Test Data** > **Test Data Profile**. Click on **Create Test Data Profile**. ![Create TDP for storing element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/create_tdp_parameter.png)
8. Below is the created Test Data profile for storing element ID attributes: ![Sample TDP](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sample_tdp_dynamic.png)

---

## **Creating Dynamic Elements using Parameter**

1. Use NLP to create a new step in the Test Case and include a placeholder for the element. ![Select Create Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/select_create_element_dp.png)
   [[info | Example:]]
   | Utilise NLP "Click on **Element**" to click an element with a given UI Identifier.

2. Click on the **Element**, then select **Create Element** from the dropdown list.
3. Manually enter the **Element Name**, **Screen Name**, and **Element Type** in the **Create Element** overlay screen.
4. Provide the dynamic element value **//*[@id="@|cities|"]/div[2]/span[1]**, where **cities** is the parameter name containing dynamic data.
5. Click **Create Element** to complete element creation and then **Create Step**. ![Create Dynamic ELement using Parameter](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/create_element_usingparameter.gif)

---

## **Configuring Test Data Profile in Test Case**

1. In Test Case details page, click **Test Case Settings** in the right-side navbar.
2. Choose the associated **Test Data Profile**.
3. Enable the **Data-Driven** toggle and select **Filter Type**, **Comparison Metric**, and **Data Iteration**. ![Config TDP in test case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/config_tdp_dynamic.gif)

---

## **Run Results for Dynamic Elements using Parameter**

1. Once the test step created with the dynamic Element, execute the Test Case.
2. Wait until the Test Case execution is completed.
3. The Test Case will iterate as many times as there are **Test Data Sets (rows)** in the Test Data Profile, resulting in four iterations based on the provided example. ![Results for Dynamic Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/results_dynamicparameter.gif)

---

