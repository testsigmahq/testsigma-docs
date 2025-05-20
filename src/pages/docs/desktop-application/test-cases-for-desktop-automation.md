---
title: "Create and Execute Test Cases for Desktop Automation"
page_title: "Create and Execute Test Cases for Desktop Automation"
metadesc: "Desktop test cases use elements captured via Testsigma Lite. Based on element type, Testsigma suggests actions. This article covers creating and running tests."
noindex: false
order: 30.4
page_id: "Create and Execute Test Cases for Desktop Automation"
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
  name: "Steps to Create and Execute Test Cases for Desktop Automation"
  url: "#steps-to-create-and-execute-test-cases-for-desktop-automation"
---

---

Test cases for desktop applications rely on the elements captured through Testsigma Lite. Once the elements are available, Testsigma automatically suggests relevant actions based on the type of element you select in a test step. This article discusses creating and executing test cases for Desktop Applications in Testsigma. 

---

> ## **Prerequisites**
> 
>  - You should know how to create a [project](https://testsigma.com/docs/projects/overview/) and [application](https://testsigma.com/docs/projects/applications/) in Testsigma.
> 
> - You should have the **Testsigma Lite** installed.
> 
> - The **WinTest Automation** folder must exist in the **Testsigma Agent** directory. 
> 
> - A Windows application to test and make sure it’s open on your device. 
> 
> - Elements captured using **Testsigma Lite**. 

---

## **Interactive Demo**

<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div class="sl-embed" style="position:relative;padding-bottom:calc(50.52% + 25px);width:100%;height:0;transform:scale(1)">
    <iframe loading="lazy" class="sl-demo" src="https://app.storylane.io/demo/3qus8rqqxqem?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
  </div>
</div>

---

## **Steps to Create and Execute Test Cases for Desktop Automation**

1. From the left navigation bar, go to **Create Tests > Test Cases**.

2. In the **Test Case Explorer** section, expand the required **Feature** and **Scenario** and click the **+** icon next to the scenario. A dialog box appears. 

3. In the dialog box, enter the name for your test case and click **Create**.

4. In the **Test Case Details** page, click **Actions** from the drop-down.

5. Select the required action from the **Actions** overlay.

6. You can now add test steps by selecting the captured desktop UI elements and choosing the suggested inbuilt actions based on the element type.

[[info | **NOTE**:]]
| - You can also use other step types to create and execute the test case. 

7. Once the test steps are created, click **Run** to execute the test case. This will open an **Ad-Hoc Run** overlay. 

8. In the **Ad-Hoc Run** overlay, select the test machine, add additional settings if required, and click **Run Now**.

---