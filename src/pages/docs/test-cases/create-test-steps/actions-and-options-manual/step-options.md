---
title: "Test Step Options"
page_title: "Test Step Options"
metadesc: "Explore Testsigma's Test Step Options - Configure, manage, and optimise your test steps efficiently. Enhance testing workflow with customisation and control."
noindex: false
order: 4.611
page_id: "Test Step Actions"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequesties"
  url: "#prerequesties"
- type: link
  name: "Clear Step"
  url: "#clear-step"
- type: link
  name: "Step Settings"
  url: "#step-settings"
- type: link
  name: "Disable Step"
  url: "#disable-step"
- type: link
  name: "Ignore Step Result"
  url: "#ignore-step-result"
- type: link
  name: "Enable Visual Testing"
  url: "#enable-visual-testing"
- type: link
  name: "Clone Step"
  url: "#clone-step"
- type: link
  name: "Delete Step"
  url: "#delete-step"
- type: link
  name: "Steps Above and Below"
  url: "#steps-above-and-below"
- type: link
  name: "Reorder Test Step"
  url: "#reorder-test-step"
---

---

In Testsigma, you can customize test steps within a test case using test step options. These options allow you to control and customize various aspects of test execution, such as data inputs, assertions, and behavior, enhancing the test scenario's flexibility and accuracy. This article discusses all test step options available in Testsigma. 

---


> ## **Prerequisites**
>   
> - You should know how to [manage a Test Case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).
>
> - You should know how to [manage Test Steps](https://testsigma.com/docs/test-cases/step-types/natural-language/).

---

## **Clear Step**

Click on the **test step**, then click the **Eraser** icon to clear the step in a single click. Clearing the test step will remove any existing actions or data within the step. ![Clear Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/teststep_setting_clearstep.png)

---

## **Step Settings**

Click on the **test step**, then click the **Settings** icon or the **ellipsis** icon to open a dropdown list of **Test Step Settings**. Select the **Step Settings** option from this list to configure particular settings for the test step, such as timeouts, retries, prerequisites, or other settings. Refer to [Test Step Settings](https://testsigma.com/docs/test-cases/create-test-steps/actions-and-options-manual/step-settings/) for more information. ![Step Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/teststep_setting_stepsetting.png)

---

## **Disable Step**

Click on the **test step**, then click on either the **Forbidden** icon or the **ellipsis** button to open a dropdown list of **Test Step Settings**. Select the **Disable step** option from this list to temporarily deactivate the selected step in the test case. This will prevent the test step from running during execution. ![Disable Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/teststep_setting_diablestep.png)

---

## **Ignore Step Result**

Click on the **test step**, and then click the **ellipsis** icon to open a dropdown list of **Test Step Settings**, then select the **Ignore Step Result** option from this list to exclude the outcome of a specific step from the overall test result. ![Ignore Step Result](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/teststep_setting_ignorestep.png)

---

## **Enable Visual Testing**

Click on the **test step**, and then click the **ellipsis** icon to open a dropdown list of **Test Step Settings**. Select the **Enable Visual Testing** option from this list to capture and compare how the user interface of an application looks between different builds or versions. Refer to [Visual Testing](https://testsigma.com/docs/visual-testing/configure-test-steps/) for more information. ![Enable Visual Testing](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/teststep_setting_enablevisual.png)

---

## **Clone Step**

Click on the **test step**, then click the **ellipsis** icon to open a dropdown list of **Test Step Settings** and select the **Clone Step** option. It will create an identical copy of the selected step, which saves time when you need multiple similar steps within the same test case. ![Clone Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/teststep_setting_clonestep.png)

---

## **Delete Step**

Click on the **test step**, then click the **ellipsis** icon to open a dropdown list of **Test Step Settings**. Select the **Delete Step** option from this list, permanently removing the selected step from the test case, helping streamline test maintenance and organisation. ![Delete Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/teststep_setting_deletestep.png)

---

## **Steps Above and Below**

You can add steps above and below a test step by clicking on **Step Above** & **Step Below**.

If you click on **Step Above**, you can add another step above the test step, while if you click on **Step Below**, you can add another step below the test step.

![Add Step Above or Below](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ctsmasaab.png)

---

## **Reorder Test Step**

Follow these steps to reorder test steps within a test case:

1. Create a **test case** with a list of the **test steps**.
2. You will find an **⋮⋮** (**vertical ellipsis**) icon before each test step. This icon represents the drag-and-drop handle for reordering.
3. Hover your cursor over the **⋮⋮** icon for the test step you wish to move, then click and hold the icon to grab the test step and reorder it.
4. Drag the test step to the desired position within the test case's list of test steps while holding it. As you move the test step, you will see a visual indicator of where the test step will be placed once you release it.
5. Drop the test step into its new position by releasing the mouse button. Testsigma will automatically update the test step order in the test case after you release the test step.
6. After reordering your test steps, click the **Save New Order** option in the screen's top right corner to save the new order.

Here is a quick GIF demonstrating how to reorder test steps in Testsigma. 
![Reordering Test Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/reorder_teststep.gif)


---
