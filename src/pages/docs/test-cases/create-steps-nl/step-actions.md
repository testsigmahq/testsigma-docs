---
title: "Test Step Actions"
metadesc: "About different actions you can perform on Test Steps in Testsigma"
order: 4.42
page_id: "Test Step Actions"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "1. Clone"
  url: "#1-clone"
- type: link
  name: "2. Edit"
  url: "#2-edit"
- type: link
  name: "3. Delete"
  url: "#3-delete"
- type: link
  name: "4. More Details"
  url: "#4-more-details"
- type: link
  name: "5. Add Step"
  url: "#5-add-step"
- type: link
  name: "6. Add a Step Inside"
  url: "#6-add-a-step-inside"
- type: link
  name: "7. Add Break"
  url: "#7-add-break"
- type: link
  name: "8. Add Continue"
  url: "#8-add-continue"
---

---

The Test Case details page lists all the Test Steps available in the Test Case. Here is a list of all actions that can be performed on a test step:

 1. Clone
 2. Edit
 3. Delete
 4. More details
 5. Add Step
 6. Add a Step Inside
 7. Add Break
 8. Add Continue

&emsp;
---

## **1. Clone**
When you need to duplicate a Step, you can simply click on the Clone icon to make a copy of the current Test Step into the next step.

![Clone Step in Test Case Details](https://docs.testsigma.com/images/step-actions/clone-step-gif.gif)

&emsp;
---

## **2. Edit**
Click the Edit icon to edit the Test Step and make the changes.
Click on Update to save or click Cancel to discard changes.

Using edit, you can change test data, element, or the Action Test Step altogether.

![Edit Step in Test Case Details](https://docs.testsigma.com/images/step-actions/edit-step-gif.gif)

&emsp;
---

## **3. Delete**

To delete a test step, click on the delete button and confirm the deletion.

![Delete Step in Test Case Details](https://docs.testsigma.com/images/step-actions/delete-step-gif.gif)

&emsp;
---

## **4. More Details**
To see more details about the test case, click on the more details icon. You can check the details about a Test Step such as

 * Is the step Disabled
 * Maximum wait time for the step to fail
 * Test Data used in the Step
 * element used in the Step

![More Details in Test Case Details page](https://docs.testsigma.com/images/step-actions/more-details-gif.gif)

&emsp;
---

## **5. Add Step**

Generally, there will be two Add Step buttons available on a Test Step, one on top of the step and another below the step.
To add a step before the current Step, click on the Add Step button on top of the current step.
To add a step after the current Step, click on the Add Step button below the current step.

![Add Step in Test Case Details](https://docs.testsigma.com/images/step-actions/add-step-gif.gif)

&emsp;
---

## **6. Add a Step Inside**
When you want to add a Test Step as a child step inside a block rather than as a next sibling step, you can use this option.

![Add Step actions in Test Step Actions](https://docs.testsigma.com/images/step-actions/test-step-actions-add-a-step-inside.png)


For the IF Step, the Add a Step Inside button adds a step as the last step inside the If block as compared to the Add Step button which adds a step after the If block.

&emsp;
---

## **7. Add Break**

Use this button to add a Break in a While loop. This breaks out of the While Loop and continues the next step below the While loop block.

![Add Break in Test Case Details](https://docs.testsigma.com/images/step-actions/while-loop-brek-continue-actions.png)

In the above image, The BREAK LOOP in step 2.1.3.3 breaks the loop at step 2 and goes to step 3.

&emsp;
---

## **8. Add Continue**

This adds a Continue Step in a While loop. As in the case of a normal Continue statement in a while loop, this skips the remaining steps in the current loop iteration and starts the next iteration for the While loop.

![Add Continue in Test Case Details ](https://docs.testsigma.com/images/step-actions/while-loop-break-continue-actions.png)


In the above image, The CONTINUE LOOP in step 2.1.4.3 skips the current loop iteration and goes to the next iteration at step 2.1 within the same While loop.







