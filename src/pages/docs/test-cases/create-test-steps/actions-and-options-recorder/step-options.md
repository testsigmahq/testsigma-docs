---
title: "Test Step Options"
page_title: "Test Step Actions on the Test Recorder for a Web Project"
metadesc: "Actions you can take on recorded test steps in a Web Project
in Testsigma"
noindex: false
order: 4.621
page_id: "Actions you can take on recorded Test Steps in a Web Project"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Pre-requisites:"
  url: "#pre-requisites"
- type: link
  name: "Performing actions on recorded test steps in a Web Project"
  url: "#performing-actions-on-recorded-test-steps-in-a-web-project"
- type: link
  name: "1. Add Step"
  url: "#1-add-step"
- type: link
  name: "2. Edit"
  url: "#2-edit"
- type: link
  name: "3. Delete"
  url: "#3-delete"
- type: link
  name: "4. Step details"
  url: "#4-step-details"
- type: link
  name: "5. Edit Element"
  url: "#5-edit-element"
- type: link
  name: "Record Test Steps Anywhere"
  url: "#record-test-steps-anywhere"
- type: link
  name: "Steps Above and Below"
  url: "#steps-above-and-below"
---

---

When test steps are created via the Test recorder, we can also:

 1. Add Test Step
 2. Edit
 3. Delete
 4. Step Details
 5. Edit Elements
 6. Clone

Here’s how to perform these actions on the test steps you’ve recorded.

&emsp;

---
##**Pre-requisites:**

You should already know how-to, or have:

 1. [Testsigma's step Test recorder.](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/)
 2. [Create a test case via the Test recorder.](https://testsigma.com/docs/elements/web-apps/overview/)

&emsp;

---
##**Performing actions on recorded test steps in a Web Project**

 1. Create a Test Case using Test recorder. 
 2. Hover on a recorded test step:

![Test step actions that appears on hover over a test step in Test Recorder](https://docs.testsigma.com/images/step-actions/hover-over-test-steps-test-step-actions-testsigma-recorder.png)

Click on the three dots at the far right end of the highlighted row. This will show you available actions:

![additional test step actions that appear for a test step in Test Recorder](https://docs.testsigma.com/images/step-actions/available-additional-test-step-actions-testsigma-recorder.png)

&emsp;

These are the actions you can take on the test steps. Let’s discuss them one by one:

&emsp;

---
## **1. Add Step**

 When you hover over a recorded test step, you see two buttons labeled “+ Step” as shown below.

![add step buttons to add another test step in Test recorder](https://docs.testsigma.com/images/step-actions/add-step-button-test-steps-testsigma-recorder.png)

Clicking + Step’ button lets you record another step before the current step. Clicking the ‘+ Step’ below lets you record another test step below the current step. You can also add steps manually.

Learn more about [adding steps manually.](https://testsigma.com/docs/test-cases/create-steps-recorder/web-apps/add-steps-manually/)


---
## **2. Edit**

You can use this option to edit the test step. 

![edit test step test step action in Testsigma recorder
](https://docs.testsigma.com/images/step-actions/edit-test-step-test-action-testsigma-recorder.png)

Alternatively, You can also edit the test steps inline, steps to be followed are:
1. Click on the test step that needs to be changed.
2. The required test step should become editable.
3. Do the changes inline.
4. Click outside the step.
5. The change should be saved.


&emsp;

---
## **3. Delete**

You can use this option to delete the test step.

![delete test step test action in Test recorder](https://docs.testsigma.com/images/step-actions/delete-test-step-test-action-testsigma-recorder.png)

 &emsp;

---
##**4. Step details**

 You can check details about a test step by clicking on the option ‘Step details’ corresponding to the test step.

![step details test step action in Test recorder](https://docs.testsigma.com/images/web-apps/step-details-test-step-action-testsigma-recorder1.png)

The test step details that are shown are as below:

![test step details in Test recorder](https://docs.testsigma.com/images/web-apps/test-step-details-testsigma-recorder.png)

&emsp;

---
##**5. Edit Element**

 You can edit a Element captured by Test recorder by clicking on ‘Edit Element’.

![Edit Element for a test step in Test recorder](https://docs.testsigma.com/images/web-apps/edit-Element-test-step-testsigma-recorder.png)

![Multiple options on the edit Element window for a test step in Test recorder](https://docs.testsigma.com/images/web-apps/edit-Element-multiple-options-testsigma-recorder.png)

&emsp;

Here are the fields you can edit:

 1. **Name.**
 2. **Screen Name.**
 3. **Identifier Type**: This is a drop-down field that has values:
    1. Xpath
    2. CSS Selector
    3. ID
    4. Name
    5. Link Text
    6. Partial Link Text
    7. Class Name
    8. Tag Name

You can select any of these options for identifier type.

 4. **Enter Value**: Here, the value should correspond to the identifier type selected.
 5. **View details**: To see more details about the Element.
 6. **Clone**: You can use this option to create a copy of an existing test step at the end of all the already recorded steps.

![clone test step test action in Test Recorder](https://docs.testsigma.com/images/web-apps/clone-test-step-test-action-testsigma-recorder.png)

---

## **Steps Above and Below**

 1. Create a Test Case using Test recorder. Go to the created test steps on the Test recorder UI.
 2. Hover on one of the test steps:

![Test step actions that appear on hover over a test step in Testsigma](https://docs.testsigma.com/images/add-steps-before-after/hover-over-test-steps-add-steps-testsigma-recorder.png)

 3. You see two buttons labeled “+ Step” - one above the hovered test step and one below the hovered test step. 


Click on the + Step’ above to record another step above the test step. Click on the + Step’ below to add another step below the test step. Learn more about [adding steps manually.](https://testsigma.com/docs/test-cases/create-steps-recorder/web-apps/add-steps-manually/)


---

## **Record Test Steps Anywhere**

1. Navigate to **Test Development > Test case** and click on **Create Test Case**.
![Navigate to Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/navigate.png)

2. Enter the **Name** and **URL** you want to test and click on **Record Steps**.
![Record Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Clickonrecordsteps.png)

3. A new window will open on your workstation.
![New Window](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/newwindow.png)

4. Do the actions you need to automate, and the recorder will capture them in steps. 

5. If you want to add steps in between, you can **click, hold, and drag** the highlighted field to add the step wherever you want. 
![Add Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/clickandhold.png)

6. After adding all steps, the test case is ready to run.

[[info | **NOTE**:]]
|You can also switch back to last step, by directly clicking on plus icon.
|![Plus](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/plus.png)


[[info | **NOTE**:]]
| Test Step Actions on the Test Recorder will be the same across all application types. 