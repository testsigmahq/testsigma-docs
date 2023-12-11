---
title: "Updating Value in Test Data Profile"
metadesc: "In Testsigma, you can update values of test data profile using specific NLP in a test case. Learn how to update values in test data profiles in Testsigma."
noindex: false
order: 5.22
page_id: "Add values to test data profile"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Updating Value in TDP Using Test Case"
  url: "#updating-value-in-tdp-using-test-case"
---


---


This article discusses how to update the values of a test data profile from a test case. *For more information on the test data profile, refer to [create a test data profile](https://testsigma.com/docs/test-data/create-data-profiles/).*


---

## **Prerequisites**


- You should know how to [create a test case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).

- You should know how to [create a test data profile](https://testsigma.com/docs/test-data/create-data-profiles/).

---

## **Updating Value in TDP Using Test Case**



1. Navigate to **Create Tests > Test Cases**, and click on **Create Test Case**.
![Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/cctdtcnav.png)



2. To update value of a test data profile, we use the following NLP in our test case. 
![NLP](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tdpvunlp.png)



3. On the above NLP,

    - Hover over **test data** and select **plain text** from the dropdown menu and replace it with the text you want to update. 
     ![plain text](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tdpvupt.png)

    - Hover over the **test data profile** to select the test data profile you want to update.
     ![tdp](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tdpvustdp.png)

    - Hover over the **parameter** to choose a column in the test data profile.
     ![column](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tdpvuparam.png)


4. Click on **Run** to execute the test case and update the value of the test data profile.
![Run](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tdpvurun.png)



5. On successful execution of the test case, the value will be updated in the test data profile. 


---