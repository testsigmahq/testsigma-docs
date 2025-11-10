---
title: "Image Injection"
pagetitle: "Image Injection in Testsigma: Enhance Mobile App Testing"
metadesc: "Enhance your testing process by seamlessly incorporating images into test steps using Image Injection. Streamline workflows and improve accuracy."
noindex: false
order: 4.40
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

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that you have referred to:
> 1. [Documentation on creating test cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#create-test-case).
> 2. [Documentation on creating test steps](https://testsigma.com/docs/test-cases/create-test-steps/overview/).
> 3. [Documentation on creating projects](https://testsigma.com/docs/projects/overview/).
> 4. [Documentation on creating test data types](https://testsigma.com/docs/test-data/types/overview/).
> 5. [Documentation on uploading applications](https://testsigma.com/docs/uploads/upload-apps/).
> 6. [Documentation on uploading files](https://testsigma.com/docs/uploads/upload-files/).
> 7. [Documentation on  recording steps for android](https://testsigma.com/docs/test-cases/create-test-steps/actions-and-options-recorder/step-settings/#reordering-test-steps).
> 8. [Documentation on recording steps for iOS](https://testsigma.com/docs/test-cases/create-test-steps/actions-and-options-manual/step-options/#reorder-test-step).
> 9. [Documentation on performing Ad-Hoc runs in android](https://testsigma.com/docs/runs/adhoc-runs/#android-application).
> 10. [Documentation on performing Ad-Hoc runs in iOS](https://testsigma.com/docs/runs/adhoc-runs/#ios-application).

[[info | Note:]]
| Ensure that you upload image files in **PNG** format for Image Injection, which is exclusively available for **Android** and **iOS** apps, and allow a few seconds for the scanner to complete the image scan.

---

## **Manual Image Injection using NLP**

You can manually add image injection to test steps using NLPs. Use the NLP to have the placeholders for **test data** and replace **test data** with the **˄ Upload** to add QR code images stored in your uploads.

1. Use the NLP - **Scan image from test data** from the dropdown list of suggestions that appears in the test step by searching.
![NLP](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/image_injection/Image_Injection_1.png)

2. Click the **test data** placeholder to replace it by selecting the **˄ Upload** from the **Test Data Types** dropdown menu.
![Test Data](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/image_injection/Image_Injection_2.png)

3. Select the file you want to add to the test step from the **˄ Uploads** section on the right side of the screen.
![Uploads](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/image_injection/Image_Injection_3.png)

4. Remember to enable the **Camera Image Injection** toggle in the **Ad-hoc runs** page.
![camera image injection](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/image_injection/Image_Injection_4.1.png)

[[info | **NOTE**:]]
| Please remember to enable the **Camera Image Injection** toggle when **Adding** or **Editing Test Machine/Device Profiles** before running tests.
| ![Add/edit test machine](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/image_injection/Image_injection_5.png)

---

## **Camera Image Injection during Recording**

Simplify the image injection process during the test step recording using the camera image injection feature to insert QR code images directly.

1. Click the **Record** button at the screen's top right corner to bring up the Record Test Steps overlay.
2. Choose the **Version**, **Device**, and **Application**.
3. Enable the toggle button for **Camera Image Injection** while recording test steps.
4. Start recording the test step by clicking the **Record** button again. ![Enable Camera Injection](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/enable_camerainjection.gif)
5. Click the **Scan Image (Camera)** icon in the right sidebar of the Recording page to upload the QR code image. Select the file you want to add to the test step from the **˄ Uploads** overlay. 

<br>

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/test_cases/scanimageinjection.mp4" 
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
          allowfullscreen>
  </iframe>
</div>

---