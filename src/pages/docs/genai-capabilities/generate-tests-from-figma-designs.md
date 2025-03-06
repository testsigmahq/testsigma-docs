---
title: "Generate Tests from Figma Designs"
page_title: "Generate Tests from Figma Designs"
metadesc: "In Testsigma, you can create test cases from Figma designs by integrating Figma | Learn how to create test cases from Figma Designs using GenAI capabilities"
noindex: false
order: 31.6
page_id: "Generate Tests from Figma Designs"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Integrating Figma with Testsigma"
  url: "#integrating-figma-with-testsigma"
- type: link
  name: "Components of Figma"
  url: "#components-of-figma"
- type: link
  name: "Steps to Generate Test Cases from Figma Designs"
  url: "#steps-to-generate-test-cases-from-figma-designs"
---

---

With Testsigma, you can effortlessly generate test cases directly from Figma designs, ensuring more accurate and efficient testing. You can integrate your Figma account, select the relevant designs, provide a prompt, and generate multiple test cases with a single click.


---

> ## **Prerequisites**
>
> Before you begin, enable AI features from Settings > Preferences > Generative AI features and ensure you are familiar with the concepts of Test Cases. 
> 
> To integrate Figma with Testsigma, the user must provide the following prerequisites:
>
> - **Team ID:** The unique identifier for the Figma team, which can be found in the team URL.
> - **API Key:** An API Token from Figma, used for authentication and accessing Figma resources.
> 
> Example: In the [Example Link](https://www.figma.com/files/team/1401640279360365014/all-projects) the **Team ID** is **1401640279360365014**.


---

## **Integrating Figma with Testsigma**

1. From the left navigation bar, go to **Settings > Integrations**. 
   ![Integrate Figma 1](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Integrate_Figma_1.png)

2. Enable the toggle on **Figma** widget.
   ![Integrate Figma 2](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Integrate_figma_2.png)

3. On the **Figma Details** prompt, enter the **Team ID** and **API Key** and click **Save & Enable**. 
   ![Integrate Figma 3](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Integrate_figma_3.1.png)

---

## **Components of Figma**

Before generating test cases from Figma design, it’s essential to understand how Figma and its features work. Figma is a powerful, cloud-based design tool that is widely used for UI/UX design, prototypes, and collaboration.

When you log into Figma, you land on the home page, projects, files, and shared workspaces. Understanding the core components of Figma - such as Projects, files, pages, sections, and frames, helps efficiently manage designs and facilitates the extraction of design elements for testing. 

### **Projects**

Projects act as containers for organizing related design files. A project can hold multiple design files, making managing work for different teams or features easier. 

To view all projects, navigate to the left panel and select **All Projects**.
![Projects](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Figma__Project_Final.png)

### **Files**

Files contain the actual design work. Each file contains multiple pages where designers create and store UI elements, prototypes, and other assets.

To access the files within a project, double-click on the project.
![Files](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Figma__Files__Final.png)

### **Pages**

Pages help structure the design file by separating different versions, screens, or design elements. For example, a file may have separate pages for designs, prototypes, etc.

Double-clicking on a file reveals all the pages contained within it.
![Pages](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Figma__Pages.png)

### **Sections**

Sections are used within a page to organize related frames visually. They help in grouping similar designs, making navigating and understanding different parts of the project easier. 

A page's sections are displayed, providing a clear structure for different design components.
![Section](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Figma__Section__1.png)

### **Frames**

Frames are the primary design components in Figma, acting like artboards where designers place UI elements. Each UI/UX design screen is typically represented by a frame, which can be resized and structured for responsive designs.

Frames are visible within sections, allowing for a well-organized design layout.
![Frames](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Figma__Frames.png)

---

## **Steps to Generate Test Cases from Figma Designs**

1. From the left navigation bar, go to **Create Tests > Test Cases**. 

2. Click **Copilot** and then select **Generate Test Cases** from the drop-down menu. 

3. In the **Generate Test Cases** screen, select **Figma Designs**.

4. On the **Add Figma Designs** overlay, the Copilot automatically selects a project. You can expand the **Project** field and select the required project if you need to. 

5. Expand the **Figma File** field and select the required file.

6. Expand the **Page field** and select the required page. 

7. Expand the **Section field** and select the required section.

[[info | **NOTE**:]]
| If the selected page has no sections, you can directly select the frames.

8. In the **Frames** field, click **+ Select Frames**.

9. Select the required frames in the **Select Frames** screen and click **Add Frames**.  

You can also click **Clear Selection** to remove all the selections that you have made. 

[[info | **NOTE**:]]
| The maximum limit for selecting frames is 10. 

10. Enter a prompt and click **Send**. 

11. Select the test cases you want to add to the test case list and select **Save Test Cases**.






