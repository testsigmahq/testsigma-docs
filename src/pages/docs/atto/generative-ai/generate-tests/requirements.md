---
title: "Add Requirements"
page_title: "Add Requirements"
metadesc: "In Testsigma, you can create test cases from Jira stories & epics by integrating Jira | Learn how to create test cases from Jira using GenAI capabilities"
noindex: false
order: 4.7421
page_id: "add-requirements"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Add the Data from Jira"
  url: "#add-the-data-from-jira"
- type: link
  name: "Add the Data from Figma"
  url: "#add-the-data-from-figma"
- type: link
  name: "Add the Data from QTest"
  url: "#add-the-data-from-qtest"
- type: link
  name: "Add the Data from Video Recording"
  url: "#add-the-data-from-video-recording"
- type: link
  name: "Add the Data from Files"
  url: "#add-the-data-from-files"
---

---

Testsigma allows you to generate test cases from requirements using Generative AI. It takes inputs from tools such as Jira, Xray, qTest, and Figma, along with supporting files like videos and images. Based on these inputs, Testsigma automatically generates executable test cases, helping you accelerate test development and improve coverage. This article discusses generating test cases from requirements using Testsigma's Generative AI capabilities.


---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, enable **AI Features** from **Settings > Preferences > Generative AI features** and ensure have necessary integrations with Testsigma.

---

## **Add the Data from Jira**

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

[[info | **NOTE**:]]
| To generate Salesforce test cases from requirements, click **Settings** in the prompt text box. By default, the **Prefer API steps** is selected. To generate UI-based test steps, clear the **Prefer API steps** option.

---

## **Add the Data from Figma**

1. From the left navigation bar, go to **Atto’s Home**.

2. Click **Generate with AI**.

3. In the **Generate Test Cases** section, select **Figma Designs**.
   
4. In the **Figma Designs** dialog,
   - Select a **Team**, **Project**, **Figma design file**, **Section** and **Page** from the respective dropdown menus.
   - Click **+ Select Frames**, select the required frames in the **Select Frames** screen, and click **Save**.
     ![Figma Inputs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/requirements_2.png)
   - If you want to remove all the selections that you have made, click **Clear Selection**.

[[info | **NOTE**:]]
| - If the selected page has no **Sections**, you can directly select the frames.
| 
| - The maximum limit for selecting frames is 10.


> <p id="prerequisites">Troubleshooting: Figma Pages Not Loading in Testsigma</p>
> 
>
> In some cases, the Figma pages may fail to load and display **No pages** even if the same file worked previously. This issue typically occurs when Figma’s API rate limits are exceeded, preventing Testsigma from fetching the required page data. 
>
> ![Figma No Page Error](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Figma_No_Page_Error.png)
> 
> ### **Cause**
> 
> Figma applies rate limits to REST API requests based on the user’s seat type and access level. When these limits are reached, Figma temporarily stops returning page/file information to external tools. As a result, Testsigma cannot load the pages and displays **No pages**. Users with lower access seats are more likely to reach these limits, which may cause the page list to stop loading intermittently.
>
> 
> ### **Steps to Resolve the Issue**
> 
> **1. Verify the Figma API Key Permissions** <br>
> Ensure the API key used in Testsigma belongs to a Figma account with a **Dev/Full seat**. These roles provide higher API rate limits and help prevent intermittent failures.
> 
> **2. Re-generate the API Key (If Needed)** <br>
> If the current key was created under a seat with restricted API access, generate a new key from an account with a higher access tier.
> 
> **3. Wait for Rate Limits to Reset** <br>
> If rate limits were exceeded, Figma may temporarily block further requests. Wait a few minutes and then try loading the pages again.
> 
> **4. Review Figma Rate Limits** <br>
> For detailed info on rate limits, see [Figma’s Rate Limits](https://developers.figma.com/docs/rest-api/rate-limits/).


---

## **Add the Data from QTest**

1. From the left navigation bar, go to **Atto’s Home**.

2. Click **Generate with AI**.

3. On the **Generate Test Cases** page, click **QTest**. 

4. In the **Qtest** dialog, 
   - From the **Project** dropdown, select a project.
   - From the **Module** dropdown, select a module.
   - Select the test cases you want to use as input. 
   - Click **Save**.
     
     ![qTest Inputs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/requirements_3.png)

---


## **Add the Data from Video Recording**

1. From the left navigation bar, go to **Atto’s Home**.

2. Click **Generate with AI**.

3. In the **Generate Test Cases** section, click **Video Recording** as an input source.

4. In the **Video Recording** dialog, click **Add Files**.

5. Click **Browse**, select a video file, and wait for the upload to complete.

6. Once the video is loaded, click **Save**.

7. Click **Save** again. 
   ![Video Input](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/add_files_1.2.png)

---


## **Add the Data from Files**

1. From the left navigation bar, go to **Atto’s Home**.

2. Click **Generate with AI**.

3. In the **Generate Test Cases** section, click **Files** as an input source.

4. In the **Files Upload** dialog, click **Add Files**. 

5. Click **Browse** and select the files that contain relevant test information.

6. Once the files are loaded, click **Add Files**.
   
7. Click **Save**. 
   ![Files Input](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/add_files_1.1.png)

---