---
title: "Generate Test Cases from Requirements"
page_title: "Generate Tests from Requirements"
metadesc: "In Testsigma, you can create test cases from Jira stories & epics by integrating Jira | Learn how to create test cases from Jira using GenAI capabilities"
noindex: false
order: 4.7421
page_id: "generate-tests-from-requirements"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Generate Test Cases from Jira"
  url: "#generate-test-cases-from-jira"
- type: link
  name: "Generate Test Cases from Figma"
  url: "#generate-test-cases-from-figma"
- type: link
  name: "Generate Test Cases from QTest"
  url: "#generate-test-cases-from-qtest"
- type: link
  name: "Generate Test Cases from Video Recording"
  url: "#generate-test-cases-from-video-recording"
- type: link
  name: "Generate Test Cases from Files"
  url: "#generate-test-cases-from-files"
---

---

Testsigma allows you to generate test cases from requirements using Generative AI. It takes inputs from tools such as Jira, Xray, qTest, and Figma, along with supporting files like videos and images. Based on these inputs, Testsigma automatically generates executable test cases, helping you accelerate test development and improve coverage. This article discusses generating test cases from requirements using Testsigma's Generative AI capabilities.


---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, enable **AI Features** from **Settings > Preferences > Generative AI features** and ensure have necessary integrations with Testsigma.

---

## **Generate Test Cases from Jira**

1. From the left navigation bar, go to **Atto’s Home**.

2. Click **Generate with AI**.

3. On the **Generate Test Cases** page, click **Jira Requirements**. 

4. In the **Add Jira Tickets** dialog, 
   - From the **Jira Project** dropdown, select a project.
   - Under **Issue Type**, select either **Epic** or **Story**:
      - If you select **Epic**, choose the stories under that epic.
      - If you select **Story**, choose the stories you want to generate test cases for.
   - Click **Save**.
     ![Jira Inputs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/requirements_1.png)

5. In the Prompt box, enter a clear and descriptive prompt for the test cases you want to generate.

6. Click **Generate with AI**.

7. Wait for **Generator Agent** to generate multiple test cases. 


[[info | **NOTE**:]]
| To generate Salesforce test cases from requirements, click **Settings** in the prompt text box. By default, the **Prefer API steps** is selected. To generate UI-based test steps, clear the **Prefer API steps** option.

---

## **Generate Test Cases from Figma**

1. From the left navigation bar, go to **Atto’s Home**.

2. Click **Generate with AI**.

3. In the **Generate Test Cases** section, select **Figma Designs**.
   
4. In the **Figma Designs** dialog,
   - Select a **Team**, **Project**, **Figma design file**, **Section** and **Page** from the respective dropdown menus.
   - Click **+ Select Frames**, select the required frames in the **Select Frames** screen, and click **Save**.
   - If you want to remove all the selections that you have made, click **Clear Selection**.
     
     ![Figma Inputs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/requirements_2.png)

[[info | **NOTE**:]]
| - If the selected page has no **Sections**, you can directly select the frames.
| 
| - The maximum limit for selecting frames is 10.


5. In the Prompt box, enter a clear and descriptive prompt for the test cases you want to generate.

6. Click **Generate with AI**.

7. Wait for **Generator Agent** to generate multiple test cases. 

---

## **Generate Test Cases from QTest**

1. From the left navigation bar, go to **Atto’s Home**.

2. Click **Generate with AI**.

3. On the **Generate Test Cases** page, click **QTest**. 

4. In the **Qtest** dialog, 
   - From the **Project** dropdown, select a project.
   - From the **Module** dropdown, select a module.
   - Select the test cases you want to use as input. 
   - Click **Save**.
     
     ![qTest Inputs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/requirements_3.png)

5. In the Prompt box, enter a clear and descriptive prompt for the test cases you want to generate.

6. Click **Generate with AI**.

7. Wait for **Generator Agent** to generate multiple test cases. 

---


## **Generate Test Cases from Video Recording**

1. From the left navigation bar, go to **Atto’s Home**.

2. Click **Generate with AI**.

3. In the **Generate Test Cases** section, click **Video Recording** as an input source.

4. In the **Video Recording** dialog, click **Add Files**.

5. Click **Browse**, select a video file, and wait for the upload to complete.

6. Once the video is loaded, click **Save**.

7. Click **Save** again. 

8. In the Prompt box, enter a clear and descriptive prompt for the test cases you want to generate.

9. Click **Generate with AI**.
   ![Video Input](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/requirements_4.png)

10.  Wait for **Generator Agent** to generate multiple test cases based on the uploaded video. 

---


## **Generate Test Cases from Files**

1. From the left navigation bar, go to **Atto’s Home**.

2. Click **Generate with AI**.

3. In the **Generate Test Cases** section, click **Files** as an input source.

4. In the **Files Upload** dialog, click **Add Files**. 

5. Click **Browse** and select the files that contain relevant test information.

6. Once the files are loaded, click **Add Files**.
   
7. Click **Save**. 

8. In the Prompt box, enter a clear and descriptive prompt for the test cases you want to generate.

9. Click **Generate with AI**.
   ![Files Input](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/requirements_5.png)

10. Wait for **Generator Agent** to generate multiple test cases based on the uploaded files. 

---
