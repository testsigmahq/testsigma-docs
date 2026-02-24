---
title: "Concat Test Data"
metadesc: "Learn how to concat test data which combines multiple sets of test data in Testsigma. This article discuss concatenation test data in Testsigma in detail"
noindex: false
order: 5.25
page_id: "concat-test-data-in-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Concat Test Data"
  url: "#steps-to-concat-test-data"
---


---

In Testsigma, users can concat test data, which combines multiple sets of test data. This article discusses how to concat test data. 

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that you have referred to:
> 1. [Documentation on creating a test case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).
> 2. [documentation on creating a data generator](https://testsigma.com/docs/test-data/types/data-generator/).

---


## **Steps to Concat Test Data**



1. Navigate to **Create Tests > Test Cases**, and click on **Create Test Case**.
![Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/test_data/update_concat_1.png)

2. To concat test data, we use the following NLP in our test case. 
![NLP](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/test_data/update_concat_2.1.png)

3. Click on **test data1**, and select **Data Generator** from the dropdown.
![Data Generator](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/test_data/update_concat_3.png)

4. On **! Data Generators** overlay, select ***StringFunctions*** as **Function Type** and ***Concat*** as **Function**.
![Concat](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/test_data/update_concat_4.1.png)

5. Enter the first value in **Testdata 1**, click **+ Input Testdata** to add another field, then enter the second value.
![Test data values](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/test_data/update_concat_5.1.png)

6. Click **Save**.
![Save](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/test_data/update_concat_5.png)

7. Click on **test data2**, choose where you want to store the test data from the dropdown and click **Create Step**.
![Storing Data](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/test_data/update_concat_6.png)

8. After adding all the steps, execute the test case and validate the result.

---