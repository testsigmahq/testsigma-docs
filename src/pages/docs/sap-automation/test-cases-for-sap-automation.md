---
title: "Creating Test Cases for SAP Automation"
page_title: "Creating Test Cases for SAP Automation"
metadesc: "SAP test cases use elements captured via Testsigma Lite. Based on element type, Testsigma suggests actions. This article covers creating and running tests."
noindex: false
order: 29.4
page_id: "creating-test-cases-for-sap-automation"
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
  name: "Steps to Create Test Cases for SAP Automation"
  url: "#steps-to-create-test-cases-for-sap-automation"
---

---

With Testsigma’s no-code platform, you can create test cases using the captured SAP UI elements. Once the elements are captured, Testsigma automatically suggests actions based on the selected element in each test step. This article discusses how to create and run test cases for SAP applications in Testsigma.

---

> ## **Prerequisites**
> 
> Before you begin, ensure the following:
> 
>  - You should know how to create a [project](https://testsigma.com/docs/projects/overview/) and [application](https://testsigma.com/docs/projects/applications/) in Testsigma.
> 
> - You should have the **Testsigma Lite** installed.
> 
> - The **WinTest Automation** folder must exist in the **Testsigma Agent** directory. 
> 
> - The **SAP** desktop application is installed and currently open on your device. 
> 
> - A working connection to your **SAP** system has been created using **SAP Logon**.
> 
> - Elements captured using Testsigma Lite.

---

## **Interactive Demo**

<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div class="sl-embed" style="position:relative;padding-bottom:calc(50.52% + 25px);width:100%;height:0;transform:scale(1)">
    <iframe loading="lazy" class="sl-demo" src="https://app.storylane.io/demo/frlvajcr7tnl?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
  </div>
</div>

---

## **Steps to Create Test Cases for SAP Automation**

1. From the left navigation bar, go to **Create Tests > Test Cases**.

2. In the **Test Case Explorer** section, expand the required **Feature** and **Scenario**, then click the **+** icon next to the scenario. A dialog box will appear.

3. In the dialog box, enter a name for your test case and click **Create**.

4. In the **Test Case Details** page, click **Actions** from the drop-down menu. 
 
5. Select the appropriate action from the **Actions** overlay.

6. You can now add test steps by selecting the captured **SAP** UI elements and choosing the suggested inbuilt actions based on the element type.

[[info | **NOTE**:]]
| - You can also use other step types to create and execute the test case.

7. Once the test steps are added, click **Run** to execute the test case. This will open the **Ad-Hoc Run** overlay.

8. In the **Ad-Hoc Run** overlay, select the test machine, add additional settings if needed, and click **Run Now**.

---