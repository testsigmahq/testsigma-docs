---
title: "Update Test Data Profile"
metadesc: "In Testsigma, you can replace the old test datav profile with new data sets in one go. This article discusses how to update a test data profile in Testsigma."
noindex: false
order: 5.21
page_id: "update-test-data-profile"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Update Test Data Profile"
  url: "#steps-to-update-test-data-profile"
---


---


This article explains how to update an existing Test Data Profile by importing a replacement file. With the folder structure enhancement, Test Data Profiles are now organized under Features and Scenarios, so you can navigate directly to the profile you want to update from the folder tree.


[[info | **NOTE**:]]
| The existing test data profile will be overwritten with the uploaded test data profile.


---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that you have:
> 1. Reviewed [Create a Test Data Profile](create-data-profiles.md).
> 2. The updated file ready to import.

---


## **Steps to Update Test Data Profile**

1. From the left navigation bar, go to **Test Data** > **Test Data Profiles**.
   ![navigate to test data profiles from left navigation bar](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Test_Data_Profile_Folder_Navigation.png)

2. Locate the Test Data Profile you want to update using one of these methods:
   
   - In the **List View**, select the Kebab menu (⋮) next to the TDP, then select **Update TDP**.
     ![Update TDP from List](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Update_TDP_from_List_View.png)
   
   - In the left panel, expand the feature and scenario that contains the Test Data Profile, open it from the folder tree, then select **Update** in the top-right corner.
     ![Update TDP from Details Page](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Update_TDP_from_Details_page.png)

3. In the **Import Test Data Profile** dialog, select **Browse File** and choose the replacement file.
   ![Browse](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Browse_and_Select_TDP_File.png)

4. Select the columns you want to encrypt.

5. Click **Import**.
   ![Import](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Import_New_TDP_to_Update.png)

A confirmation email is sent when the update completes.

---

## **Related Articles**

- [Folder Structure for Test Data Profiles](folder-structure-for-test-data-profiles.md)
- [Create a Test Data Profile](create-data-profiles.md)
- [Update Values in a Test Data Profile](add-values-to-test-data-profile.md)

---