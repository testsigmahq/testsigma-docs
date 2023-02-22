---
title: "Create Test Data - Environment"
metadesc: "How to create and use environment-specific test data in Testsigma"
noindex: false
order: 5.23
page_id: "Create Test Data - Environment"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "When to Use"
  url: "#when-to-use"
- type: link
  name: "Create environment-specific test data in Testsigma"
  url: "#create-environment-specific-test-data-in-testsigma"

---

---

This article will describe how to create environment-specific test data in Testsigma.

---
## **When to Use:**

You must use different test data depending on the environment when you have multiple testing environments. For example, if your test is executing in both staging and QA environments, you can use two separate test data sets for both environments.

---
## **Create environment-specific test data in Testsigma:**

  1. Navigate to **Test Development** > **Environments** and click on the **create** button on the top right. 
  ![create button on the environments page in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/addingvalues_environment.gif)

Here, you create an environment and add the **parameter names** and **values** that will be specific to this environment. Below are the fields you see on this form:

- **Name:** Name of the environment
- **Description:** Description for your environment
- **Parameter Name, Parameter Value:** Here you mention the name of a parameter specific to this environment and its corresponding value. When you enter the values for one **key**-**value** pair, the text fields for adding another will automatically appear. As a result, you can add as many key-value pairs as you need. You can add these values to the JSON format; you need to select the tab labelled **JSON Format**.

Alternatively, a quick GIF below demonstrates the workflow for creating environment by adding JSON format.

2. Once you have added all the values, click the **Create** button on the top right to finalise the changes.

[[info | NOTE:]]
| You can also edit an existing environment on the Test Environments page to add more test data specific to that environment.

---
