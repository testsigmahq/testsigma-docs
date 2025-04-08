---
title: "Visual Testing with Figma Designs"
pagetitle: "Visual Testing with Figma"
metadesc: "Compare test execution screenshots with original design files in Figma by adding a design file link and configuring visual testing | Learn how to perform visual testing with Figma designs in Testsigma"
noindex: false
order: 14.2
page_id: "visual-testing-with-figma-designs"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Interactive Demo"
  url: "#interactive-demo"
- type: link
  name: "Visual Testing Using Figma"
  url: "#visual-testing-using-figma"
---

---


You can now compare test execution screenshots with original design files in Figma by adding a design file link and configuring visual testing at the step level. You can also select the target device for accurate comparison. During test execution, Testsigma compares the screenshot with the design file and highlights any differences. This article discusses configuring visual testing with Figma design files in Testsigma.

> 
> This feature is available only for Web and Mobile apps and is limited to enterprise accounts. Contact **Testsigma Support** to enable it for your account.

---

> ## **Prerequisites**
> 
> Before you begin, make sure you know how to configure test steps for visual testing in Testsigma. For more information, see [Visual Testing](https://testsigma.com/docs/visual-testing/configure-test-steps/).

---

## **Interactive Demo**

Try this interactive demo to learn how to perform visual testing with Figma designs!

<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div class="sl-embed" style="position:relative;padding-bottom:calc(57.41% + 25px);width:100%;height:0;transform:scale(1)">
    <iframe loading="lazy" class="sl-demo" src="https://app.storylane.io/demo/wxomztweml0o?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
  </div>
</div>
 


---

## **Visual Testing Using Figma**

1. From the left navigation bar, go to **Create Tests > Test Cases**.

2. Create a test case or open an existing test case.

3. Click the **Kebab menu** next to the test step, and then select **Enable Visual Testing** from the dropdown menu.

4. Click **Update Step**.

5. Hover over the test step, and then click the **Camera icon**. This will open the **Visual Difference – Figma** section.

6. In the **Base Line Image** section, click **Add Devices**.

7. In the **Add Devices** section, select the **Browser** and **Resolution** from the dropdown menus.

[[info | **NOTE**:]]
| 1. For Android and iOS, you need to select a mobile device with the necessary resolution.
| ![Mobile Device](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Mobile_List_for_VT.png)
|
| 2. The same **Browser** and **Resolution** configured in visual testing must be selected during the **Ad-hoc Run** for accurate results.

8. In the **Frame Link** text box, enter the Figma frame link, and then click **Refresh** to verify.

[[info | **NOTE**:]]
| Ensure that the Figma frame dimensions match your target device resolution.

9. Click **Save**.

10. Execute the test case. In the test step result, click the **Camera** icon, and then select the **Visual Difference – Figma** tab to view the visual testing results.

[[info | **NOTE**:]]
| For detailed insights, click **AI Insights**. You can copy these insights for quick sharing.

---