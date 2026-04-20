---
title: "Update Value in Test Data Profile"
metadesc: "In Testsigma, you can update values of test data profile using specific NLP in a test case. Learn how to update values in test data profiles in Testsigma."
noindex: false
order: 5.22
page_id: "add-values-to-test-data-profile"
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


This article explains how to update the values of a Test Data Profile directly from a test case using NLP. With the folder structure enhancement, Test Data Profiles are organized under Features and Scenarios, making it easier to locate the right profile when selecting it in your test steps.


---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that you have reviewed:
> 1. [Create a Test Data Profile](create-data-profiles.md).
> 2. [Documentation on creating test cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#create-test-case).

---

## **Updating Value in TDP Using Test Case**

1. From the left navigation bar, go to **Create Tests** > **Test Cases** and create or open an existing test case.

2. Add a new test step using the NLP for updating a test data profile value.
   ![NLP](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_tdp_value_2.png)

3. In the NLP step, hover over the **test data** placeholder and select **Plain text** from the dropdown. Replace it with the value you want to update.
   ![plain text](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_tdp_value_3.png)

4. Hover over the **test data profile** placeholder and select the profile you want to update. Profiles are listed under their respective Feature and Scenario folders.
   ![tdp](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_tdp_value_4.png)

5. Hover over the **parameter** placeholder and select the column in the profile you want to update.
   ![column](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_tdp_value_5.png)

6. Select **Run** to execute the test case.
   ![Run](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_tdp_value_6.png)

On successful execution, the value is updated in the Test Data Profile.


---

## **Related Articles**

- [Folder Structure for Test Data Profiles](folder-structure-for-test-data-profiles.md)
- [Create a Test Data Profile](create-data-profiles.md)
- [Update a Test Data Profile](update-test-data-profile.md)

---