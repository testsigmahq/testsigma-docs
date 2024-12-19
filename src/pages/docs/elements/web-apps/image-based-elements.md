---
title: "Create Image Based Elements"
metadesc: "In Testsigma, you can create elements by capturing or uploading screenshots | Improve the stability of test execution with image based elements in test cases"
noindex: false
order: 6.29
page_id: "Image Based Element"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Learn Element Images"
  url: "#steps-to-learn-element-images"
- type: link
  name: "Steps to Learn Element Images from Test Cases"
  url: "#steps-to-learn-element-images-from-test-cases"
- type: link
  name: "Best Practices for Image Based Element Creation"
  url: "#best-practices-for-image-based-element-creation"
---

---

In Testsigma, you can create elements by capturing or uploading screenshots of them. This feature improves element identification in situations where DOM-based methods are less effective. Although Testsigma Test Recorder simplifies element creation, dynamic application behavior can sometimes affect the reliability of XPaths. Image based element creation overcomes these challenges by identifying and interacting with UI elements using pixel recognition. This article discusses creating elements using images.

---

> ## **Prerequisites**
>
>
> Before you begin, ensure that the [Testsigma Chrome Extension](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/) is installed and a web application is available for testing.

---

## **Steps to Learn Element Images**

1. From the left navigation bar, go to **Create Tests > Elements**.
   ![Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Elements_Navigation_IE.png)

2. Click **Create Element** on the top right corner of the **Elements** list page. This will open the **Create Element** overlay.
   ![Create Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Create_Element_Web_IE.png)

3. In the **Create Element** overlay, click **Record Element**. This will open Testsigma **Test Recorder**.  
   ![Record Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Record_Element_On_Create_Element.png)

4. In **Create Element** overlay of the **Test Recorder**, enter the following details:

   - **Name**: Enter the name you want to give your element.
   - **Screen Name**: Mention the screen that your element resides on.
   - **Element Type**: Select **Image** from the dropdown
   - **Element Image**: Click **Capture** to capture the element from the screen or if you have a screenshot, then you can click **Upload** and upload the image.
     ![Create Element Overlay](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Capture_Upload_Img_IE.png)

5. Select the portion of the element that you want to create and click **Capture**.
   ![Capture / Upload](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Capture_Or_Record_Element_IE.png)

6. Click **Create**.
   ![Create](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Create_Captures_Element_IE.png)

7. The element will be saved in the elements list.

---

## **Steps to Learn Element Images from Test Cases**

1. From the left navigation bar, go to **Create Tests > Test Cases**.
   ![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Test_Cases_Navigation_IE.png)

2. Click ‘**+**’ and add **New Test Case** or go to a pre-existing test case.
   ![New / Existing Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/New_Or_Existing_Test.png)
   
3. Click **Record** on the top right corner of the **Test Case** details page. This will open a new window.
   ![Record](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Record_Element_IE.png)

4. Enter the URL from which you want to capture the elements. The Testsigma **Test Rcorder** will appear and will be ready to start recording. Here, we entered the URL of Simply Travel Website.
   ![Simply Travel Website](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Simply_Travel_Web.png)

5. Create a test step that includes the ***element***. Click the element, and from the dropdown, select **Create Element**. This will open the **Create Element** overlay.
   ![Create Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Create_Element_Recorder_IE.png)
   
6. On **Create Element** overlay, enter the following details:

   - **Name**: Enter the name you want to give your element.
   - **Screen Name**: Mention the screen that your element resides on.
   - **Element Type**: Select **Image** from the dropdown
   - **Element Image**: Click **Capture** to capture the element from the screen or if you have a screenshot, then you can click **Upload** and upload the image.
     ![Create Element Overlay](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Capture_Upload_Img_IE.png)


7. Select the portion of the element you want to capture, then click **Capture**.
   ![Capture Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Select_Capture_IE.png)

   [[info | **NOTE**:]]
   | To create an element by uploading the image, click **Upload**, select the image from your local storage, and click **Save**.

8. Click **Create** to save the element and save the test step by manually clicking **Create Step** in the **Test Recorder**.
   ![Create](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Create_On_Create_Elemen_Overlay.png)
   
9.  The element will be added to the elements list.

---

## **Best Practices for Image Based Element Creation**

1. Image-based element creation is automatically disabled for NLPs that directly interact with HTML because they leverage HTML attributes for precise element identification.
   ![Example](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Attributes_Disabled_Example.png)

2. Since image based element creation depends on pixel accuracy, we recommend capturing screenshots using inbuilt snipping tools for more precision.
   
   **Shortcuts for Snipping Tools on Mac & Windows:**
    - **Windows**: Press ***Windows + Shift + S*** to open the **Snipping Tool** and capture a screenshot using **Freeform Snip**.
    - **Mac**: Press ***Command + Shift + 4*** to capture a specific area of the screen.

3. Test Executions happen in a maximized browser state in the labs. To ensure pixel consistency, always capture screenshots with the browser window maximized.

4. Add a minimum padding area to the element you want to create. Proper padding improves the accuracy of element detection.
   ![Padding dos and don'ts](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Dos_donts_padding.png)

---
