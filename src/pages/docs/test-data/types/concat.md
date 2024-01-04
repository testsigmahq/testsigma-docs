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
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Concat Test Data"
  url: "#steps-to-concat-test-data"
---


---

In Testsigma, users can concat test data, which combines multiple sets of test data. This article discusses how to concat test data. 

---

## **Prerequisites**

- You should know how to [create a test case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).
   
- You should know how to use a [data generator](https://testsigma.com/docs/test-data/types/data-generator/).

---


## **Steps to Concat Test Data**



1. Navigate to **Create Tests > Test Cases**, and click on **Create Test Case**.
![Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/cctdtcnav.png)


2. To concat test data, we use the following NLP in our test case. 
![NLP](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/cctdstditd.png)


3. Click on **test data1**, and select **Data Generator** from the dropdown.
![Data Generator](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/cctddgen.png)


4. On **! Data Generators** overlay, select ***StringFunctions*** for **Function Type** and ***Concat*** for **Function**.
![Concat](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/cctdsfftc.png)


5. Click on **Save**.
![Save](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/cctdsave.png)


6. Click on **test data2**, choose where you want to store the test data from the dropdown.
![Storing Data](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/cctdstore.png)


7. After adding all the steps, execute the test case and validate the result.



---