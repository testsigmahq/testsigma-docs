---
title: "Generate Test Data Profile Using Copilot"
page_title: "Generate TDP Using Copilot"
metadesc: "With Testsigma Copilot, you can quickly generate a Test Data Profile, eliminating the need to manually create multiple test data sets!"
noindex: false
order: 31.2
page_id: "Generate TDP"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Generate Test Data Profile Using Copilot"
  url: "#steps-to-generate-test-data-profile-using-copilot"
---

---

With Testsigma Copilot, you can quickly generate a Test Data Profile. This eliminates the need to manually create multiple test data sets and allows you to focus on more critical aspects while testing. This article discusses generating a Test Data Profile using Testsigma Copilot.

---

> ## **Prerequisites**
> 
> Before you begin, enable AI Features from **Settings > Preferences > Generative AI features** and ensure you're familiar with the concepts of [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/) and [Test Data Profiles](https://testsigma.com/docs/test-data/create-data-profiles/) in Testsigma.


---

## **Steps to Generate Test Data Profile Using Copilot**

1. From the left navigation bar, go to **Create Tests > Test Cases**.

2. Select the **+ icon** next to the **Scenario** where you want to add the test case.

3. On the dialog that opens, enter the test case name and click **Create**.

3. In the **Test Case Details** page, click **Record** to open the **Testsigma Test Recorder** in a new window.

4. Create test steps by performing actions or use **Copilot** to generate steps automatically. *For more information, see [Creating Test Cases Using Copilot](https://testsigma.com/docs/test-cases/create-test-steps/overview/#ai-test-automation-with-testsigma-copilot-).*
5. When you're done, click **Stop** to end the session. You will be redirected to the **Test Case Details** page.

6. A confirmation dialog will appear.
   
   - Select **Convert** to generate a **Test Data Profile** and convert the test case to a data-driven one.
     ![Gen AI TDP](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Copilot_TDP_SneakPeak.png)
     
     Alternatively, you can generate a **Test Data Profile** by selecting **Generate TDP with AI** from the dropdown menu under **Test Case Settings > Test Data Profile** in the **Right Utility Panel**. 
     ![Generate TDP from Test Case Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Generate_TDP_from_TC_Settings.png)
     
   - Once you are satisfied with the data, click **Create and Replace**. 

[[info | **NOTE**:]]
| - You can click **Add more rows** to generate additional data. 
| - You can also provide prompts to customize the data further. For example, we successfully changed the entire dataset to reflect the Indian context with a simple prompt. 
| ![Prompt Update](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/GenAI_TDP_Prompt.png)

---