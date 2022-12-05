---
title: "Import test data profile"
metadesc: "How to import a test data profile to use it as test data in a test case in Testsigma."
noindex: false
order: 5.22
page_id: "Import test data profile"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites:"
  url: "#prerequisites"
- type: link
  name: "Steps to follow:"
  url: "#steps-to-follow"
---

---

Apart from creating a test data profile on Testsigma, you can also import a test data profile and view the profile in Testsigma. *For more information on creating a test data profile, refer to [create a test data profile](https://testsigma.com/docs/test-data/create-data-profiles/).*<br> The following article discusses on how to import a test data profile. 

<br>

To import a test data profile, you first need an XLSX file that has the data in a supported format. 

Below is an example of the data that an XLSX file should have. Testsigma expects:
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

1. Navigate to **Test development > Test data profiles**. 
![TDP Button](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/testdata_button.png)

2. Click on **Import**.
![Import TDP](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/import_testdata_profile.png)

3. On the **Import** pop-up window, <br>
    - Click on **Browse** and select the file you want to import. Alternatively, you can drag or drop the file.
![Browse TDP](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Browse_TDP.png) 
    - Select the columns you want to encrypt.![Import pop-up window](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Import_pop-up.png)
    - Click on **Import**.

4. On the successful import of test data profile, you will receive an email. Click **Refresh** to see the imported test data profile on the **All test data profile page**.
![Successful Import of TDP](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/successful_import_TDP.png)