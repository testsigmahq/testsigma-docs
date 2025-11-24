---
title: "Generate Test Cases for Android & iOS"
page_title: "Generate Tests for Android & iOS"
metadesc: "In Testsigma, you can create test cases for Mobile Applications using Testsigma Copilot | Learn how to create test cases for Mobile Applications using GenAI capabilities"
noindex: false
order: 4.7423
page_id: "generate-test-cases-for-android-ios"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Generate Test Cases"
  url: "#steps-to-generate-test-cases"
- type: link
  name: "Next Steps"
  url: "#next-steps"
---


---

You can generate test cases for android and iOS applications using Testsigma’s GenAI capabilities. This helps you accelerate testing efforts by reducing manual effort and enabling faster test coverage. You can provide multiple input sources such as Jira stories, Figma designs, Xray requirements, video recordings, and other file formats like images and PDFs. This article discusses generating test cases for android and iOS apps using Gen AI capabilities in Testsigma. 

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, make sure your Figma account is integrated with Testsigma.

---

## **Steps to Generate Test Cases**

1. From the left navigation bar, go to **Atto’s Home**.

2. Click **Generate with AI**.

3. In the **Generate Test Cases** section, select **Figma Designs**.
   
4. In the **Figma Designs**  dialog,
   - Select a **Team**, **Project**, **Figma File**, **Section** and **Page** from the respective dropdown menus.
   - Click **+ Select Frames**, select the required frames in the **Select Frames** screen, and click **Add Frames**.
   - If you want to remove all the selections that you have made, click **Clear Selection**.
    
     ![Inputs for Mobile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/mobile_1.png)

[[info | **NOTE**:]]
| - If the selected page has no **Sections**, you can directly select the frames.
| 
| - The maximum limit for selecting frames is 10.

5. In the **Figma Designs** dialog, click **Video** from the **ADD FILES** menu. 
   ![Video](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/mobile_2.png)
  
6. In the **Video Recording** dialog, click **Add Files**. 

6. Select a video file and wait for the upload to complete.

7. Once the video is loaded, click **Save**.

8. Click **Save** again. 
   
8. In the Prompt box, enter a detailed prompt that describes test cases want to generate.

9.  Click **Generate with AI**.

10.  Wait for **Generator Agent** to generate multiple test cases based on the selected inputs. 

---

## **Next Steps** 

1. After the test cases are generated, expand a category and select a test case.

2. In the **Test Case Details** dialog, go to the **Manual Steps** tab and review the generated steps.

3. Click **Edit** to manually add a step or block, or to modify existing steps.

4. If you want to refine the steps using **Atto**, enter a prompt and click **Refine manual steps**.

5. Click **Generate Automated Steps** to convert the manual steps into NLP-based automated steps.

6. Click **Accept**.

---