---
title: "Import Test Data Profile"
metadesc: "In Testsigma, you can also import a test data profile and use it in your tests. This article discusses how to import a test data profile with right file format"
noindex: false
order: 5.22
page_id: "Import test data profile"
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

Apart from creating a test data profile, you can also import a test data profile and use it in your tests. This article discusses how to import a test data profile in Testsigma application. *For more information on creating a test data profile, refer to [create a test data profile](https://testsigma.com/docs/test-data/create-data-profiles/)*.

---

## **Prerequisites**
- You should know about test data profiles. 
- You should have a file to import. 


---

## **Import File Format**

To import a test data profile, you first need an XLSX file that has the data in a supported format. Below is an example of the data that an XLSX file should have. 

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
- **Name**: Name of the test data set that the corresponding row would contain
- **Description**: Description for that row of that test data
- **ETF**: This would be either ‘YES’ or ‘NO’, depending on whether you expect the test case to fail with this test data or you expect it to pass.


---


## **Steps to Import Test Data Profile**

1. Navigate to **Test Data > Test Data Profiles**.
![Test Data Profiles](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/itdpnav.png)


2. Click on **Import**.
![Import](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/itdpcoimp.png)


3. On **Import Test Data Profile** prompt,
   - Click on **Browse File** to upload the file.
   ![Browse File](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/itdppbf.png)
   
   - Once the file is uploaded, enter **Name** and select the columns you want to encrypt. Here, we have selected the **Password** field to encrypt. 
   ![Name](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/itdpsce.png)

   - Click on **Import**. 
   ![Import](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/itdpimport.png)



On the successful import of the test data profile, you will receive an email. Refresh the test data profiles page to see the imported test data profile.


Here's a quick GIF demonstrating how to import test data profile.
![Import Test Data Profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ImportTDPWF.gif)


---