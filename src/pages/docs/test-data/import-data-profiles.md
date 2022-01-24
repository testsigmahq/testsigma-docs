---
title: "Import Test Data Profile - Parameter"
metadesc: "How to import a test data profile to use it as test data in a test case in Testsigma."
order: 5.22
page_id: "Import Test Data Profile - Parameter"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Pre-requisites:"
  url: "#pre-requisites"
- type: link
  name: "Steps to follow:"
  url: "#steps-to-follow"
---
---

In Testsigma, you can import a test data profile and then use it as test data in your test cases. Importing a test data profile is simple. In this document, we will discuss how to do that.

---
##**Pre-requisites:**

To import a test data profile, you first need an xlsx file that has the data in a supported format. 

Below is an example of the data that an xlsx file should have. Testsigma expects:
1. Name - Name of the test data set that the corresponding row would contain
2. Description - Description for that row of that test data
3. ExpectedToFail - would have either ‘YES’ or ‘NO’, depending on whether you expect the test case to fail with this test data or you expect it to pass.
4. Now you begin adding columns for the test data that you need to pass as parameters to your test case. For example, here we added ‘Username’ and ‘Password’

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

---
##**Steps to follow:**


1. Navigate to the Test Development > Test Data Profile page

   ![all test data profiles page with already created test data profiles in Testsigma](https://docs.testsigma.com/images/import-data-profiles/all-test-data-profiles-adding-values-import.png)

2. Click on the Import icon on the top right corner of the screen, also highlighted in the screenshot below:

   ![import button highlighted on the all test data profiles page](https://docs.testsigma.com/images/import-data-profiles/all-test-data-profiles-adding-values-import-button.png)

3. A menu will appear with an option to choose the file that you want to import, as also shown in the screenshot below. To proceed, click on Choose File:

   ![import window to import a test data profile in Testsigma](https://docs.testsigma.com/images/import-data-profiles/import-window-to-import-test-data-profile.png)

4. Choose the xlsx file (from your system) that you want to import
5. You will see an empty text box for ‘Title’, enter the Title you want to assign to the test data profile you are importing.
6. Click on the ‘Import’ button.

All the rows will now be visible in your Test Data Profile





