---
title: "Generate Tests from Requirements (Jira)"
page_title: "Generate Tests from Requirements (Jira)"
metadesc: "In Testsigma, you can create test cases from Jira stories & epics by integrating Jira | Learn how to create test cases from Jira using GenAI capabilities"
noindex: false
order: 32.5
page_id: "Generate Tests from Requirements (Jira)"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Generate Test Cases for Web Apps"
  url: "#generate-test-cases-for-web-apps"
- type: link
  name: "Generate Test Cases for Android & iOS Apps"
  url: "#generate-test-cases-for-android--ios-apps"
- type: link
  name: "Interactive Demo for Android & iOS Apps"
  url: "#interactive-demo-for-android--ios-apps"
---

---

With Testsigma, you can create test cases directly from Jira stories and epics by integrating your Jira account. You just need to tag the relevant epics and stories, write a prompt, and click only once to generate multiple test cases. This article discusses generating test cases from requirements using Testsigma's GenAI capabilities.

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, enable AI Features from **Settings > Preferences > Generative AI features**, integrate [Jira with Testsigma](https://testsigma.com/docs/integrations/bug-reporting/jira/) and ensure you're familiar with the concepts of [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).

---

## **Generate Test Cases for Web Apps**

1. From the left navigation bar, go to **Create Tests > Test Cases**.

2. Click **Copilot**, and then select **Generate from Requirements** from the dropdown menu. 

3. In **Generate Test Cases from Requirements** overlay,  
   - Select a **Jira Project** from the dropdown menu.
   - Under **Issue Type**, select either **Epic** or **Story**:
      - If you select **Epic**, choose the stories for which you want to generate test cases.
      - If you select **Story**, choose all the stories for which you want to generate test cases.

4. In the prompt field, enter the required details, and click the **Play** button.

5. Wait for Testsigma to generate the test cases with the test steps.

6. Select the test cases you want to save, and click **Save Test Cases**.

7. You’ll be redirected to the Test Cases page, where the generated test cases appear under the **AI Generated Feature** Scenario.


[[info | **NOTE**:]]
| To generate Salesforce test cases from requirements, click **Settings** in the prompt text box. By default, the **Prefer API steps** is selected. To generate UI-based test steps, clear the **Prefer API steps** option.
| 
| ![API Steps Checkbox](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/SF_Generate_Steps_Jira.png)

---

## **Generate Test Cases for Android & iOS Apps**

1. From the left navigation bar, go to **Create Tests > Test Cases**.

2. Click **Copilot**, and then select **Generate Test Cases** from the dropdown menu.

3. In the **Generate Test Cases** page, select **Jira Requirements** as input source. 

4. In the **Add Jira Stories** section, 
   - Select a **Jira Project** from the dropdown menu.
   - Under **Issue Type**, select either **Epic** or **Story**:
      - If you select **Epic**, choose the stories for which you want to generate test cases.
      - If you select **Story**, choose all the stories for which you want to generate test cases.

5. In the prompt field, enter the required details, and click the **Play** button.

6. Wait for Testsigma to generate the test cases with the test steps.

7. Select the test cases you want to save, and click **Save Test Cases**.

8. You’ll be redirected to the **Test Cases** page, where the generated test cases appear under the **AI Generated Feature / Scenario**.

<br>

## **Interactive Demo for Android & iOS Apps**

<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div class="sl-embed" style="position:relative;padding-bottom:calc(57.41% + 25px);width:100%;height:0;transform:scale(1)">
    <iframe loading="lazy" class="sl-demo" src="https://app.storylane.io/demo/uj3otprgm4zj?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
  </div>
</div>

---