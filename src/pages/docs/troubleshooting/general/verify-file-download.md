---
title: "Verify/Confirm File Download"
page_title: "Verify/Confirm File Download"
metadesc: "Learn how to add test steps to verfiy or confirm file download in Testsigma | Creating the following test scenario will help verify/confirm file download"
noindex: false
order: 23.93
page_id: "Verify/Confirm File Download"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Test Steps to Verify File Download"
  url: "#test-steps-to-verify-file-download"
---

---


While Testing, there might be scenarios where we need to perform further checks on the downloaded file. This article discusses the test steps to verify the file download in Testsigma. 

---

## **Test Steps to Verify File Download**

### **Use the Steps Below with Minor Modifications for the Test Scenarios**

1. Navigate to &lt;URL&gt;

2. Click on <Download_Link>
   
3. Wait for 5 seconds

4. Open a new tab

5. Go to **chrome://downloads/**

6. If Verify that the current page displays text **file-sample_150kB**

7. Wait until the text Show in folder is present on the current page

![Test Scenario](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/dnverftc.png)

[[info | **NOTE**:]]
|1. This is a quick solution for the file download verification conundrum in Test Automation.
| <br><br>
|2. A good rule of thumb is to download the file in tests if and only if we need to perform further checks on the downloaded file. In most cases, it is suggested that you simply verify the download link with a get request. This is sufficient for testing the download function since the actions after clicking the download link are performed by the respective web browser, and verifying the web browser functionality is out of scope for an application specific test case.


---