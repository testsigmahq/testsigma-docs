---
title: "Import Test Data Profile"
metadesc: "In Testsigma, you can also import a test data profile and use it in your tests. This article discusses how to import a test data profile with right file format"
noindex: false
order: 5.22
page_id: "import-test-data-profile"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Import File Format"
  url: "#import-file-format"
- type: link
  name: "Steps to Import Test Data Profile"
  url: "#steps-to-import-test-data-profile"
---

---

This article explains how to import a Test Data Profile into Testsigma. With the folder structure enhancement, Test Data Profiles are organized under Features and Scenarios, so imported profiles are placed within that hierarchy.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that you have:
> 1. Reviewed [Folder Structure for Test Data Profiles](folder-structure-for-test-data-profiles.md).
> 2. An XLSX file ready to import in the supported format.

---

## **Import File Format**

To import a test data profile, you need an XLSX file with data in a supported format. Below is an example of the data that an XLSX file should have.

   |Name|Description|ExpectedToFail|Username|Password|
|----|-----------|--------------|--------|--------|
|Iteration1|First value|YES|username1|password1|
|Iteration2|2nd value|NO|username2|password2|
|Iteration3|Third value|YES|username3|password3|
|Iteration4|Fourth value|NO|username4|password4|
|Iteration5|Fifth value|YES|username5|password5|
|Iteration6|Sixth value|NO|username6|password6|
|Iteration7|Seventh value|YES|username7|password7|
|Iteration8|Eighth value|NO|username8|password8|
|Iteration9|Ninth value|YES|username9|password9|
|Iteration10|Tenth value|NO|username10|password10|


The following are the mandatory fields that should be present in the XLSX file.
- **Name**: Name of the test data set that the corresponding row would contain.
- **Description**: Description for that row of that test data.
- **ETF**: This would be either ‘YES’ or ‘NO’, depending on whether you expect the test case to fail with this test data or you expect it to pass.

---

## **Steps to Import Test Data Profile**

1. From the left navigation bar, go to **Test Data** > **Test Data Profiles**, open the **List View**.
   ![navigate to test data profiles from left navigation bar & open list view](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/TDP_List_View.png)

2. Click **Import**.
   ![click import button on test data profiles page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Import_in_TDP_List_View.png)

3. In the **Select Location** dialog, select the **Feature** and then the **Scenario** where you want to import the profile. The selected Scenario appears under **Target Scenario** at the bottom of the dialog.
   ![Target Location for TDP Import](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Target_Location_for_Import_TDP.png)

4. In the **Import Test Data Profile** dialog, select **Browse File** and choose the file to upload.
   ![browse and select file in import test data profile dialog](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Browse_File_for_TDP_Import.png)

5. Enter a **Name** for the test data profile, select the columns you want to encrypt, and click **Import**.
   ![click import to complete import of test data profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Details_for_TDP_to_Import.png)

A confirmation email is sent when the import completes. Refresh the Test Data Profiles page to see the imported profile in the folder tree.

---

## **Related Articles**

- [Folder Structure for Test Data Profiles](folder-structure-for-test-data-profiles.md)
- [Create a Test Data Profile](create-data-profiles.md)
- [Update a Test Data Profile](update-test-data-profile.md)

---