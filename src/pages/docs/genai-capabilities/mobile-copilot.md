---
title: "Testsigma Copilot for Mobile Apps (New ✨)"
page_title: "Testsigma Copilot for Mobile Applications"
metadesc: "In Testsigma, you can create test cases for Mobile Applications using Testsigma Copilot | Learn how to create test cases for Mobile Applications using GenAI capabilities"
noindex: false
order: 31.6
page_id: "Generate Test Cases for Mobile Applications"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Generate Test Cases"
  url: "#generate-test-cases"
- type: link
  name: "Generate Test Cases with Prompts"
  url: "#generate-test-cases-with-prompts"
- type: link
  name: "Interactive Demo"
  url: "#interactive-demo"
---


---



Testsigma has simplified test case generation for mobile applications with Testsigma Copilot. 🤖

- With just a single click, you can create test cases.  

- You can provide simple prompts to generate tests that accurately mimic the user behavior.

This article discusses test case generation for mobile applications using Testsigma Copilot.


[[info | **NOTE**:]]
| <br>
| This feature will soon be available for iOS applications as well 🚀.

---

## **Prerequisites**

Before you begin, enable AI Features from **Settings > Preferences > Generative AI features** and ensure you're familiar with the concepts of [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).

---

## **Generate Test Cases** 

1. From the left-side navbar, go to **Create Tests > Test Cases**.

2. In the **Test Case Explorer** section, expand the required feature and click the ‘**+**’ icon next to the target scenario. This will open a dialog box.

3. On the dialog box, validate the target feature and scenario, enter the name in the test case name input box, and click **Create**.

4. Click **Record** in the top-right corner. 

5. In the **Record Test Steps** overlay, select the required **Test Lab** and **Machine**, upload the **APK/IPA** file, and click **Record**.

6. Wait for Testsigma to load the application with the necessary configuration.

7. Click **Testsigma Copilot** on the **Test Recorder**.

8. In the **Testsigma Copilot** overlay, click **Generate Test Cases**. The **Testsigma Copilot** will start generating test cases based on the current page.

9. Wait for the test cases to generate.

10. Click any generated test case to view its corresponding test steps.

11. Select the steps and choose one of the following options:
    - Click **Add to test case** to import the displayed test steps into the recorder.
    - Click **Add as step block** to add the selected steps as a step block in the recorder.

12.  Modify the test steps as needed to match the desired test case behavior. Once the modifications are done, click **Stop** to return to the test case details page.

---

## **Generate Test Cases with Prompts**

1. Follow the same steps from 1-7 from the above section.

2. On prompt input, enter the prompt for which you want to fetch test steps and press **Enter**.

3. Wait until the test steps are generated.

4. Select the steps and choose one of the following options:
    - Click **Add to test case** to import the displayed test steps into the recorder.
    - Click **Add as step block** to add the selected steps as a step block in the recorder.


---

## **Interactive Demo**

Try this interactive demo to learn how to generate test cases for Android apps using Testsigma Copilot!


<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div class="sl-embed" style="position:relative;padding-bottom:calc(57.41% + 25px);width:100%;height:0;transform:scale(1)">
    <iframe loading="lazy" class="sl-demo" src="https://app.storylane.io/demo/n0pwfxil1xb7?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
  </div>
</div>

---