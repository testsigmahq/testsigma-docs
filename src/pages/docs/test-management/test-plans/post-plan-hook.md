---
title: "Post Plan Hook"
page_title: "Enable Post Plan Hook"
metadesc: "This article discusses how to enable post plan hook in test plan."
noindex: false
order: 8.31
page_id: "Post Plan Hook"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Enable Post Plan Hook in a test plan"
  url: "#enable-post-plan-hook-in-a-test-plan"

---

---
Testsigma supports **Post Plan Hooks**, which are user-described actions via add-ons. These hooks run after a test plan execution, irrespective of the success or failure of the test plan execution.

Users can customise the actions within these add-ons to fit their needs and link them through test plan settings.

[[info | NOTE:]]
| You should create an add-on that supports the post-plan hook to run after the test plan execution is complete and customise the actions according to your preference. <br><br>
| *For information on how to create a post plan hook add-on, refer to [create a post plan hook add-on](https://testsigma.com/docs/addons/create-a-post-plan-hook-add-on/)*
![Quick loop through the post-plan hook in gif](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/postplanhookgif.gif)

---

## **Enable Post Plan Hook in a test plan** 
1. Navigate to **Test development** > **Test plan**.
2. Click a new or existing **test plan** to enable the post-plan hook. ![test plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/testplan_hp.png)
3. Click an existing test plan and click **Edit** in the top right corner. ![Edit in test plan homepage](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/testplan_edit.png)
4. On the **Create** or **Edit test plan page**, navigate to the **Test Plan Settings** tab and click the right arrow before **Hooks** to unhide the feature. ![opening hooks in the test plan settings tab ](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/hook_testplansettings.png)
5. Select the **add-ons** from the dropdown list to enable the post-plan hook, and enter the inputs in the custom field. ![enter inputs in the field](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/hookinput_testplan.png)
[[info | NOTE:]]
| - Publish add-ons before you use them in a test plan.
| - Add-ons run after the test plan execution is completed.
6.  Click **Update** and run the test plan.
7. After the test plan execution is successful, click **View reports** to view the test plan results and hook results. ![view reports in test plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/viewresults_testplan.png)
8. Click the right arrow before **Post Plan Hooks** to unhide and view the status. ![status of post plan hook](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/resulttestplan_hook.png)

---
