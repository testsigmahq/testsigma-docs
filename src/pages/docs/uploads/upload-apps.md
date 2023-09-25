---
title: "Upload Android and iOS Apps"
pagetitle: "Upload Android and iOS Apps for Testing in Testsigma"
metadesc: "Learn how to upload Android and iOS apps for efficient testing in Testsigma. Ensure app quality and reliability effortlessly. Step-by-step guide provided."
noindex: false
order: 20.12
page_id: "upload-android-ios-apps-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Upload Applications"
  url: "#upload-applications"
- type: link
  name: "Manage Upload Application"
  url: "#manage-upload-application"
---

---

Upload your Android and iOS apps to the Testsigma Cloud to quickly develop and execute mobile automation. Ensure you make your native Android and iOS apps accessible for testing in one of these locations.
  1. On your local machine (for Local Hybrid Execution).
  2. On your server and accessible via a direct internet link.
  3. On the Testsigma Cloud.

This guide will demonstrate how to do this and automate your mobile app testing, ensuring the quality and reliability of your applications.

---
### **Prerequisites**

Before uploading the Android and iOS applications, you must understand specific concepts, such as creating [Projects](https://testsigma.com/docs/projects/overview/) and [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/) and uploading the **Android** app as a **.apk** file and the **iOS** app as a **.ipa** file for testing.

---

## **Upload Applications**

1. Navigate to the **Project** where you want to upload the app, and then go to the left-side navbar and click on **Test Data** > **Uploads**. ![Open Uploads List page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/upload_testdata_nb.gif)

[[info | NOTE:]]
| For instance, if you want to upload your Android app, navigate to an Android project. Similarly, if you want to upload an iOS app, navigate to an iOS project.

2. Click the **Upload** button in the top right corner of the screen on the **Uploads List page**. An **Upload a file** overlay will appear on the screen. Click **Browse file** to upload the application file from your local device.
3. After uploading the application, verify that you have correctly added the **Name** and **Version** in the **Upload a file** window. You can edit the name and version for the uploaded application if the name and version need to be corrected.
4. Wait for the file to upload successfully, and use the uploaded file while developing and executing your tests. ![Upload application](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/uploadapp_testdata.gif)

[[info | NOTE:]]
| You can Upload files not more than **300 Mb**.

---

## **Manage Upload Application**

Click the **ellipsis** icon next to the uploaded application you want to manage on the Upload Page. The dropdown menu will appear, and you can then select options like **Upload a new version**, **Download**, or **Delete** the application. ![Manage Upload Apps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/manage_uploadapps.gif)

---