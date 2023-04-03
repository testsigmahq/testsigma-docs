---
title: "Concat Test Data"
metadesc: "Learn how to concat test data which combines multiple sets of test data in Testsigma. This article discuss concatenation test data in Testsigma in detail"
noindex: false
order: 5.25
page_id: "Concat Test Data in Testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to Concat Test Data"
  url: "#steps-to-concat-test-data"
---

<br>

In Testsigma, users can concat test data, which combines multiple sets of test data. This article discusses how to concat test data. 

Here is a quick GIF demonstrating how to concat test data in Testsigma.
![Concat GIF DEMO](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/concatgif.gif)

## **Steps to Concat Test Data**
1. Navigate to **Test Development > Test cases**, click on **Create**.
![Create TC](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/testcase.png)

2. On the **Test Case create page**, enter the test steps & use the highlighted **NLP** below to concat the Test data.
![Test Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/steps.png)

3. In this **NLP**, 
    - Click on **test data**, and select **Data Generator** from the dropdown.
    ![Dropdown](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/nlp.png)
    - On **Test Data Generators** overlay, select ***!|StringFunctions :: Concat|*** string.
    ![Test Data Generators](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/datagenerators.png)
    - Enter **testdata** in all the strings and click on **Save** and **Create**.
    ![Inputs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/inputs.png)
    [[info | **NOTE**:]]
    |By clicking on **Add input testdata**, you can add multiple inputs to concat. 
    - Click on **test-data**, choose where you want to store the test data from the dropdown.
    ![Storing Data](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/storedata.png)

4.  After adding all the steps, execute the Test Case.

5.  In the **Test Case result page**, you click on the step to validate the result.
![Validate Result](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/result.png)