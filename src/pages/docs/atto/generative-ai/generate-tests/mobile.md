---
title: "Generate Test Cases for Android & iOS"
page_title: "Generate Tests for Android & iOS"
metadesc: "In Testsigma, you can create test cases for Mobile Applications using Testsigma Copilot | Learn how to create test cases for Mobile Applications using GenAI capabilities"
noindex: false
order: 4.7425
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
> Before you begin, ensure that,
> - Your Figma account is integrated with Testsigma.
> - You have referred to the [documentation on creating test cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).
> - You have referred to the [documentation on creating projects](https://testsigma.com/docs/projects/overview/). 

---

## **Steps to Generate Test Cases**

1. From the left navigation bar, go to **Atto’s Home**.

2. Click **Generate with AI**.

3. In the **Generate Test Cases** section, select **Figma Designs**.
   
4. In the **Figma Designs**  dialog,
   - Select a **Team**, **Project**, **Figma File**, **Section** and **Page** from the respective dropdown menus.
   - Click **+ Select Frames**, select the required frames in the **Select Frames** screen, and click **Add Frames**.
   - If you want to remove all the selections that you have made, click **Clear Selection**.
    
     ![Inputs for Mobile](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/mobile_1.png)

[[info | **NOTE**:]]
| - If the selected page has no **Sections**, you can directly select the frames.
| 
| - The maximum limit for selecting frames is 10.

5. In the **Figma Designs** dialog, click **Video** from the **ADD FILES** menu. 
   ![Video](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/mobile_2.png)
  
6. In the **Video Recording** dialog, click **Add Files**. 

7. Select a video file and wait for the upload to complete.

8. Once the video is loaded, click **Save**.

9. Click **Save** again. 
   
10. In the Prompt box, enter a detailed prompt that describes test cases want to generate.

11.  The **Read existing test case library** checkbox is selected by default. Clear this checkbox if you do not want the system to consider existing test cases while generating new ones.

[[info | **NOTE**:]]
| - Once the **Read existing test case library** option is enabled, it cannot be unselected during the same session. The selection remains applicable throughout the session. However, you can enable this option at any time during a session if it was not selected earlier.

12.  Click **Generate with AI**.

13.  Wait for **Generator Agent** to generate multiple test cases based on the selected inputs. 

---

## **Next Steps** 

1. After the test cases are generated, expand a category and select a test case.

2. In the **Test Case Details** dialog, go to the **Manual Steps** tab and review the generated steps.

3. Click **Edit** to manually add a step or block, or to modify existing steps.

4. If you want to refine the steps using **Atto**, enter a prompt and click **Refine manual steps**.

5. Click **Generate Automated Steps** to convert the manual steps into NLP-based automated steps.

6. To execute the test before saving, hover over **Run with Copilot** and select the environment where you want to run the test steps. Copilot executes the steps automatically. Review the results to ensure everything works as expected, then click **Save to Library** to save the test case to your project.

7. To save the test directly, click **Save to Library**. In the **Select Location** dialog box, expand the required **Feature** and select the **Scenario** where you want to save the automated test case.

[[info | **NOTE**:]]
| - To learn about **Agentic Learning**, please refer to the [documentation on Generator Agent](https://testsigma.com/docs/ai-agents/generator/).
| - To understand the difference between **Run with Copilot** and **Agentic Learning**, please refer to the [documentation on Run with Copilot vs Agentic Learning](http://testsigma.com/docs/atto/generative-ai/copilot/agentic-learning-vs-copilot/). 

[[info | **NOTE**:]]
| - To learn about **Agentic Learning**, please refer to the [documentation on Generator Agent in Testsigma](https://testsigma.com/docs/ai-agents/generator/).

---
