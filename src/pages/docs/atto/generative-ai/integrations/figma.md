---
title: "Integrating Figma with Testsigma"
page_title: "Integrating Figma with Testsigma"
metadesc: "Effortlessly generate test cases directly from Figma designs for efficient testing. You can integrate your Figma account & generate multiple test cases with a click."
noindex: false
order: 4.7443
page_id: "tntegrating-figma-with-testsigma"
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
---

---

With Figma integrated into Testsigma, you can generate test cases directly from design artifacts. By selecting relevant frames, sections, or pages and providing a prompt, Testsigma’s Generative AI transforms Figma designs into executable test scenarios. This ensures early alignment between design and testing, and improves test coverage across visual flows.

---

## **Prerequisites**

### **Getting Team ID in Figma**

1. Open **Figma** in a web browser.
   ![Figma in Browser](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Figma_in_Browser.png)

2. In the left navigation bar, select the team from the dropdown menu.
   ![Teams Dropdown](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Figma_Team_DD.png)

3. In the address bar, locate the URL in the following format:
   
      > https://www.figma.com/files/team/{TEAM_ID}/your-team-name
      >
      > The **{TEAM_ID}** in the URL is your Figma Team ID.
   
   ![ID in URL](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Figma_TeamID_URL.png)

[[info | **NOTE**:]]
| If you don’t have access to the team page, contact your **Admin** to get the **Team ID**.


### **Generating a Personal Access Token in Figma**

1. Open Figma in a web browser.
   ![Figma in Browser](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Figma_in_Browser.png)

2. In the top-right corner, click your profile icon, and select **Settings**.
   ![Figma Profile Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Figma_Profile_Settings.png)

3. Navigate to **Security > Personal access tokens** section.
   ![PAT](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Figma_PATs.png)

4. Click **Generate new token**.
   ![New PAT](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Figma_PATs_New.png)

5. In the **Generate new token** dialog, enter a **Token name**.
   ![Token Name](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Figma_Token_Name.png)

6. From the **Expiration** dropdown, select an expiration period.
   ![Select Expiry](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Figma_PAT_Expiry.png)

7. Click **Generate token**.
   ![Generate Token](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Figma_PAT_Generate.png)

8. Click **Copy this token** to copy the key.
   ![Copy Token](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Copy_Figma_PAT.png)

[[info | **NOTE**:]]
| Store the token securely. You won’t be able to view it again.


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

A Figma file hierarchy is in this way **Project** > **Design File** > **Pages** > **Sections** > **Frames**.


### **Projects**

Projects act as containers for organizing related design files and can hold multiple design files. 

To view all projects, navigate to the left panel and select **All Projects**.
![Projects](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Figma__Project_Final.png)

### **Files**

Files contain the actual design work. Each file contains multiple pages where designers create and store UI elements, prototypes, etc. 

To access the files within a project, double-click on the project.
![Files](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Figma__Files__Final.png)

### **Pages**

A page inside Figma can have Sections as well as Frames.
![Pages](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Figma__Pages.png)

### **Sections**

Sections are used within a page to organize related frames visually. 

A section inside a page, can have a set of Frames.
![Section](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Figma__Section__1.png)

### **Frames**

Frames are the primary design components in Figma. Each UI/UX design screen is typically represented by a frame. 

A frame inside a page or a section represents a screen of web or mobile app.
![Frames](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Figma__Frames.png)


### **Try this interactive demo to learn how Figma components work!**

<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div class="sl-embed" style="position:relative;padding-bottom:calc(52.49% + 25px);width:100%;height:0;transform:scale(1)">
    <iframe loading="lazy" class="sl-demo" src="https://app.storylane.io/demo/4u8naqbpmpxu?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
  </div>
</div>


---