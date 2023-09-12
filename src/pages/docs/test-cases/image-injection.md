---
title: "Image Injection"
pagetitle: "Image Injection Testsigma: Enhance Mobile App Testing"
metadesc: "Image Injection feature elevates mobile app testing. You can seamlessly integrate QR codes and images to create realistic test scenarios on Android and iOS."
noindex: false
order: 4.70
page_id: "Image Injection"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Manual Image Injection using NLP"
  url: "#manual-image-injection-using-nlp"
- type: link
  name: "Camera Image Injection during Recording"
  url: "#camera-image-injection-during-recording"  
---

---

Testsigma allows you to enhance your testing process by inserting images into your test steps using Image Injection. You can use this feature, particularly for scenarios where you must interact with images, QR codes, or visual elements within your application. This documentation will guide you through both methods of injecting images into your test case: manual image upload and camera image injection.

[[info | Note:]]
| - You can utilise the Image Injection feature, exclusively available for **Android** and **iOS** apps. 
| - Ensure you upload image files in **PNG** format and wait a few seconds while the scanner scans the image.

---

### **Prerequisites**

Before using Image Injection, you must understand specific concepts such as creating [Projects](https://testsigma.com/docs/projects/overview/), [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/), [Test Steps](https://testsigma.com/docs/test-cases/create-steps-nl/overview/), [Test Data Types](https://testsigma.com/docs/test-data/types/overview/), [Uploading Applications](https://testsigma.com/docs/uploads/upload-apps/), [Uploading Files](https://testsigma.com/docs/uploads/upload-files/), recording steps for [Android](https://testsigma.com/docs/test-cases/create-steps-recorder/android-apps/reorder/) and [iOS](https://testsigma.com/docs/test-cases/create-steps-recorder/ios-apps/reorder/), and performing Ad-hoc runs in [Android](https://testsigma.com/docs/runs/adhoc-runs/#android-application) and [iOS](https://testsigma.com/docs/runs/adhoc-runs/#ios-application).

---

## **Manual Image Injection using NLP**

Using NLP in this method, you can manually add image injection steps to your test case. You can replace **test-data** with the image to add QR code images stored in your uploads.

1. Select the **NLP - Scan image from test data** from the dropdown list of suggestions that appears in the test step by searching.
2. Click the **test data** placeholder to replace it, and then select the **˄|Upload|** from the **Test Data Types** dropdown menu. Select the file you want to add to the test step from the **˄ Uploads** section on the right side of the screen. ![Manual Image Injection](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/manual_image_injection.gif)
3. Remember, using the image scanning feature, you can execute your **Test Cases** and **Test Plans**. You can turn on **Camera Image Injection** for both **Ad-hoc runs** and when **adding a machine or device** to a **Test Plan**. When you run the test case, you can use the image you added using NLP for image injection.

---

## **Camera Image Injection during Recording**

During test step recording, you can simplify the image injection process by using the camera image injection feature to insert QR code images directly.

1. Click the **Record** button at the screen's top right corner to bring up the Record Test Steps overlay. Then, choose the **Version**, **Device**, and **Application**. Enable the toggle button for **Camera Image Injection** while recording test steps. Finally, start recording the test step by clicking the **Record** button again.
2. Click the **Scan Image (Camera)** icon in the right sidebar of the **Recording** Overlay to upload the QR code image. Select the file you want to add to the test step from the **˄ Uploads** overlay. ![Camera Image Injection](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/camera_imageinjection.gif)

---