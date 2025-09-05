---
title: "Test Data Generator in Testsigma"
page_title: "Test Data Generator in Testsigma"
metadesc: "The Test Data Generator in Testsigma helps you quickly create a Test Data Profile for data-driven test cases | Generate the data automatically using the Test Data Generator agent"
noindex: false
order: 4.7463
page_id: "data-generator"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Generate Test Data"
  url: "#steps-to-generate-test-data"
---

---

The Test Data Generator in Testsigma helps you quickly create a Test Data Profile (TDP) for data-driven test cases. Instead of manually creating multiple datasets, you can generate the data automatically using the Test Data Generator agent. This allows you to focus on test logic and validations rather than repetitive data entry. This article discusses using Test Data Generator to create and customize test data.


---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, enable **AI Features** from **Settings > Preferences > Generative AI** features.

---

## **Steps to Generate Test Data**

1. Navigate to Create Tests > Test Cases and select the test case for which you want to generate test data.

2. From the **Test Case Details** page, go to **Test Case Settings** in the **Utility Panel**.

3. Click **Test Data Profile**.

4. Click **Generate TDP with AI**.
   ![Generate TDP](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Generate_TDP.png)

5. In the **Test Data Generation** dialog, review the fields for which you want to generate data.

6. Click **Generate**.
   ![Generate](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Generate_Atto.png)

7. Wait for the **Test Data Generator** to create data for the selected fields.

8. You can click **Add more rows** to generate additional data.

9.  You can also provide prompts to customize the data further. 

    For example, we successfully changed the entire dataset to reflect the Indian context with a simple prompt.

10. Once satisfied with the generated dataset, click **Create and Replace**.
    ![Create & Replace](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Create_Replace_TDP.png)

---