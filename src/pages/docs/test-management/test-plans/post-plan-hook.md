---
title: "Post Plan Hook"
page_title: "Optimize Test Plans with Efficient Post Plan Hooks"
metadesc: "Leverage Post Plan Hooks to enhance automation workflows. Customise actions after test plan execution. Boost efficiency seamlessly with robust automation tools."
noindex: false
order: 8.31
page_id: "post-plan-hook-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Enable Post Plan Hook in a test plan"
  url: "#enable-post-plan-hook-in-a-test-plan"
- type: link
  name: "Viewing Post Plan Hook Status"
  url: "#viewing-post-plan-hook-status"
---

---

Testsigma allows you to create custom actions with add-ons using its powerful Post Plan Hooks feature. These actions will run automatically after finishing a test plan, regardless of whether it passes or fails. You can personalise these actions to meet your requirements and quickly enable them within the test plan settings.

---

> ## **Prerequisites**
>
> Before using Post Plan Hooks in Testsigma, ensure you know how [Test Plans](https://testsigma.com/docs/test-management/test-plans/overview/) work in Testsigma, are familiar with the Test Plan Settings tab, [manage add-ons](https://testsigma.com/docs/addons/create/), and create an [add-on](https://testsigma.com/docs/addons/create-a-post-plan-hook-add-on/) to support the Post Plan hook.

---

## **Enable Post Plan Hook in a test plan** 

1. Navigate to **Test Plans** in the left-side navbar. Click the **Create Test Plan** button at the top right of the Test Plans list page.
2. Alternatively, to edit an existing Test Plan, open it from the list and click the **Edit** icon at the top right on the Test Plan details page. ![navigate to test plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/posthook_ctp.png)
3. Navigate to the **Test Plan Settings** tab on the **Create** or **Edit Test Plan** page.
4. In the **Post Plan Hook** you can enable the Post Plan Hook by selecting supported add-ons from the dropdown list and entering the required details in the custom field based on your needs.
5. Once you enable the Post Plan Hook in the test plan settings, save the changes to the test plan by clicking **Create**/**Update**, then **Run** the test plan. ![Enable Post Plan Hook](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/enable_postplanhook.gif)

[[info | NOTE:]]
| Ensure that you publish add-ons before using them in a test plan. The test plan runs Post Plan Hooks automatically once execution is completed.

---

## **Viewing Post Plan Hook Status**

1. After completing the test plan execution, click the **View Reports** button at the top right of the Test Plans details page to view the test plan and post-plan hook results.
2. View the **Post Plan Hook** status on the **Run Result** page under the **Run Result Overview** section. ![View Post Plan Status](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/viewhook_status.gif)

---
