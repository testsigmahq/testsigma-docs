---
title: "Image Injection"
pagetitle: "Image Injection in Testsigma: Enhance Mobile App Testing"
metadesc: "Enhance your testing process by seamlessly incorporating images into test steps using Image Injection. Streamline workflows and improve accuracy."
noindex: false
order: 4.70
page_id: "image-injection-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"  
- type: link
  name: "Manual Image Injection using NLP"
  url: "#manual-image-injection-using-nlp"
- type: link
  name: "Camera Image Injection during Recording"
  url: "#camera-image-injection-during-recording"  
---

---

Testsigma enables you to enhance your testing process by inserting images into your test steps through Image Injection. This feature is handy for scenarios that require interactions with images, QR codes, or visual elements within your application. This documentation will guide you through both methods of injecting images into your test case: manual image upload and camera image injection while recording.

---

## **Prerequisites**

Before using Image Injection, you must understand specific concepts such as creating [Projects](https://testsigma.com/docs/projects/overview/), [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/), [Test Steps](https://testsigma.com/docs/test-cases/create-steps-nl/overview/), [Test Data Types](https://testsigma.com/docs/test-data/types/overview/), [Uploading Applications](https://testsigma.com/docs/uploads/upload-apps/), [Uploading Files](https://testsigma.com/docs/uploads/upload-files/), recording steps for [Android](https://testsigma.com/docs/test-cases/create-test-steps/actions-and-options-recorder/step-settings/#reordering-test-steps) and [iOS](https://testsigma.com/docs/test-cases/create-test-steps/actions-and-options-manual/step-options/#reorder-test-step), and performing Ad-hoc runs in [Android](https://testsigma.com/docs/runs/adhoc-runs/#android-application) and [iOS](https://testsigma.com/docs/runs/adhoc-runs/#ios-application).

[[info | Note:]]
| Ensure that you upload image files in **PNG** format for Image Injection, which is exclusively available for **Android** and **iOS** apps, and allow a few seconds for the scanner to complete the image scan.

---

## **Manual Image Injection using NLP**

You can manually add image injection to test steps using NLPs. Use the NLP to have the placeholders for **test data** and replace **test data** with the **˄ Upload** to add QR code images stored in your uploads.

1. Use the NLP - **Scan image from test data** from the dropdown list of suggestions that appears in the test step by searching.
2. Click the **test data** placeholder to replace it by selecting the **˄ Upload** from the **Test Data Types** dropdown menu.
3. Select the file you want to add to the test step from the **˄ Uploads** section on the right side of the screen. ![manual image injection](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/manual_imageinjection.gif)
4. Remember to enable the **Camera Image Injection** toggle for both **Ad-hoc runs** and when **Adding** or **Editing Test Machine/Device Profiles** before running tests. ![Perform Image Injection](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/perform_imageinjection.gif)

---

## **Camera Image Injection during Recording**

Simplify the image injection process during the test step recording using the camera image injection feature to insert QR code images directly.

1. Click the **Record** button at the screen's top right corner to bring up the Record Test Steps overlay.
2. Choose the **Version**, **Device**, and **Application**.
3. Enable the toggle button for **Camera Image Injection** while recording test steps.
4. Start recording the test step by clicking the **Record** button again. ![Enable Camera Injection](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/enable_camerainjection.gif)
5. Click the **Scan Image (Camera)** icon in the right sidebar of the Recording page to upload the QR code image. Select the file you want to add to the test step from the **˄ Uploads** overlay. ![Upload Scan Image](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/scan_imageinjection.gif)

---