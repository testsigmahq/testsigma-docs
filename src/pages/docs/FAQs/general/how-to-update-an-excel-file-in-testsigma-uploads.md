---
title: "How to Update an Excel File in Testsigma Uploads?"
metadesc: "When Excel files are modified during test execution, updates are stored locally. Learn how to upload the updated file back to Testsigma correctly."
order: 24.41
page_id: "how-to-update-an-excel-file-in-testsigma-uploads-?"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Install the Addons"
  url: "#install-the-addons"
- type: link
  name: "Steps to Resolve the Issue"
  url: "#steps-to-resolve-the-issue"
---

---

When you modify an Excel file during a test run, the changes are stored locally on the test machine. To make sure these updates are reflected inside Testsigma, you must upload the modified file back using the appropriate addons. This article discusses the steps required to update and re-upload the Excel file correctly.

---

> ## **Prerequisites**
> 
> Before you begin, ensure that you have an excel file that has been uploaded to Testsigma. 

---

## **Install the Addons**

1. From the left navigation bar, click **Addons**.
   ![Addons](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/uploads_1.png) 

2. Under the **New & Updated Addons** section, search for the **Upload Latest file to Testsigma Uploads** addon and click **Install**.
   ![Upload Latest File to Testsigma Uploads](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/uploads_2.1.png) 

3. Under the **New & Updated Addons** section, search for the **ExcelActions_cloud** addon and click **Install**. 
   ![ExcelActions](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/uploads_3.png)

---

## **Steps to Resolve the Issue**

1. In your test case, first use the **Wait the data datavalue into the Excelfile excel-path with Cell value rowNo, columnNo, sheet-index and store the path in runtime variable variable-name (supports upload section)** NLP to enter the value that you want to add to the excel file.
   ![NLP 1](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/uploads_4.1.png) 

   - Enter the value you want to write into the **datavalue** placeholder.![datavalue](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/uploads_5.png)
   - Click the **excel-path** placeholder and replace it by selecting **Upload** from the **Test Data Types** dropdown.![Upload](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/uploads_6.png)
   - In the **Uploads** overlay, choose the Excel file you want to update.![Excel file](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/uploads_7.png)
   - Specify the row number in the **rowNo** placeholder. ![rowNo](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/uploads_8.png)
   - Specify the column number in the **columnNo** placeholder. ![columnNo](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/uploads_9.png)
   - Specify the sheet number in the **sheet-index** placeholder. ![sheet-index](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/uploads_10.png)
   - Enter a variable name in the **variable-name** placeholder. ![Variable Name](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/uploads_11.png)
   - Click **Create Step**. ![Create Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/uploads_12.png)

2. Secondly, use the **Upload file with path on testigma uploads with projectid, applicationid, uploadname, url with API key api_key** NLP to push the updated file back to your project.
   ![NLP 2](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/uploads_13.png)

   - Click the **absolutepath** placeholder and replace it by selecting **Runtime** from the **Test Data Types** dropdown.![Runtime](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/uploads_14.png)
   - In the **Runtime Variable** overlay, select the runtime variable you created in the previous step. ![select the runtime variable](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/uploads_15.png)
   - Click the **projectid** placeholder and enter your project id. ![projectid](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/uploads_16.png)
     [[info | **NOTE**:]]
     | To get **project id** and **application id** use the following steps:
     | 1. Before you begin, open the inspect panel and refresh the page. Now, right-click on the application name and select **Inspect**.![Inspect](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/uploads_17.png)
     | 2. Go to the **Network** tab and refresh the page. ![Network](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/uploads_18.png)
     | 3. Click applications query. ![applications query](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/uploads_19.png)
     | 4. Here you can find your **projectId** and **applicationId** under the **Preview** tab. ![Preview](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/uploads_20.png)
   - Click the **applicationid** placeholder and enter your application id. ![applicationid](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/uploads_21.png)
   - Click the **uploadname** placeholder and enter your excel file’s name. ![uploadname](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/uploads_22.png)
     [[info | **NOTE**:]]
     | To get **uploadname** and **upload id**, go to **Uploads** and hover over the excel file you want to update. ![Uploads](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/uploads_26.png)
   - Enter the URL - **[https://app.testsigma.com/api/v1/uploads/](https://app.testsigma.com/api/v1/uploads/)**  and append the upload id from the upload page URL. ![URL](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/uploads_23.png)
   - Enter the api key in the **testdata** placeholder. ![api](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/uploads_24.png)
     [[info | **NOTE**:]]
     | Please refer to the [documentation on generating api keys](https://testsigma.com/docs/configuration/api-keys/). 
   - Click **Create Step**. ![Create Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/uploads_25.png)

---
