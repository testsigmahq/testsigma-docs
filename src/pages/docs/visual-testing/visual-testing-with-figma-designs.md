---
title: "Visual Testing with Figma Designs"
pagetitle: "Visual Testing with Figma"
metadesc: "Compare test execution screenshots with original design files in Figma by adding a design file link and configuring visual testing | Learn how to perform visual testing with Figma designs in Testsigma"
noindex: false
order: 15.2
page_id: "visual-testing-with-figma-designs"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Visual Testing Using Figma"
  url: "#visual-testing-using-figma"
---

---


You can now compare test execution screenshots with original design files in Figma by adding a design file link and configuring visual testing at the step level. You can also select the target device for accurate comparison. During test execution, Testsigma compares the screenshot with the design file and highlights any differences. This article discusses configuring visual testing with Figma design files in Testsigma.

> 
> This feature is available only for Web and Mobile apps and is limited to enterprise accounts. Contact **Testsigma Support** to enable it for your account.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that you have referred to:
> 1. [Documentation on configuring visual testing](https://testsigma.com/docs/visual-testing/configure-test-steps/).
 
---

## **Visual Testing Using Figma**

1. From the left navigation bar, go to **Create Tests > Test Cases**.
![Test Cases](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_visual_figma_1.png)

2. Create a test case or open an existing test case.

3. Click the **Kebab menu** next to the test step, and then select **Enable Visual Testing** from the dropdown menu.
![Enable Visual Testing](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_visual_figma_2.png)

4. Click **Update Step**.
![Update Step](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_visual_figma_3.png)

5. Hover over the test step, and then click the **Camera icon**. This will open the **Visual Difference – Figma** section.
![Camera Icon](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_visual_figma_4.png)

6. In the **Base Line Image** section, click **Add Figma Designs**.
![Add Figma Designs](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_visual_figma_5.png)

7. In the **Add Devices** section, select the **Browser** and **Resolution** from the dropdown menus.
![Resolution and Browser](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_visual_figma_6.png)

[[info | **NOTE**:]]
| 1. For Android and iOS, you need to select a mobile device with the necessary resolution.
| ![Mobile Device](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Mobile_List_for_VT.png)
|
| 2. The same **Browser** and **Resolution** configured in visual testing must be selected during the **Ad-hoc Run** for accurate results.

8. In the **Frame Link** text box, enter the Figma frame link, and then click **Refresh** to verify.
![Refresh](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_visual_figma_7.png)

[[info | **NOTE**:]]
| Ensure that the Figma frame dimensions match your target device resolution.

9. Click **Save**.
![Save](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_visual_figma_8.png)

10. Execute the test case. In the test step result, click the **Camera** icon, and then select the **Visual Difference – Figma** tab to view the visual testing results.

[[info | **NOTE**:]]
| For detailed insights, click **AI Insights**. You can copy these insights for quick sharing.

---