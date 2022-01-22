---
title: "Recording Test Steps with Recorder for Android: An Overview"
metadesc: "How to record test steps using Testsigma’s Recorder for android."
order: 4.521
page_id: "Recording Test Steps with Recorder for Android: An Overview"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Pre-requisites"
  url: "#pre-requisites"
- type: link
  name: "How to record test steps using Testsigma’s Recorder for android"
  url: "#how-to-record-test-steps-using-testsigmas-recorder-for-android"
---

---

With Testsigma, you can either write your test steps in simple English or you can use the Recorder to record your test steps and generate airtight automated android tests in simple English. In this document, we cover how to record test steps via the Recorder. 

&emsp;

## **Pre-requisites:**

 1. You should have an account on Testsigma.
 2. Your Testsigma account should have an android app uploaded under ‘uploads’. This is the android app that you want to test.

&emsp;

## **How to record test steps using Testsigma’s Recorder for android:**

 1. Open a pre-existing Android Project or create a new one under your Testsigma account.
 2. Go to ‘Test Development > Test Cases’
 3. Create a new Test Case. Let's name it ‘first test case’.
 4. From your test case page, click on the record button:

![the record button to record test steps via the Recorder in Testsigma, for an android project](https://docs.testsigma.com/images/android-apps/record-button-record-test-steps-Recorder-testsigma-android.png)

 5. The record button will launch the Recorder. Once you click the record button, another window will open up, where you can choose the device lab, version, device, and app for testing:

![the record button window to record test steps via the Recorder in Testsigma, for an android project](https://docs.testsigma.com/images/android-apps/record-button-window-record-test-steps-Recorder-testsigma-android.png)

 6. Click Record. The recorder interface will look like this:

![UI to record test steps via the Recorder in Testsigma, for an android project](https://docs.testsigma.com/images/android-apps/ui-to-record-test-steps-Recorder-testsigma-android.png)

 7. The test steps will appear on the section ‘Test Steps’. As you can see, the first step will be ‘Launch App’.

![test steps section on the Recorder UI in Testsigma, for an android project](https://docs.testsigma.com/images/android-apps/test-steps-section-record-test-steps-Recorder-testsigma-android.png)

 8. Now you can use the Recorder to record the next steps. Before doing that let’s review all the options available with the Recorder. The options available are:

&emsp;

   * Inspection mode:

![inspection mode button to record test steps via the Recorder in Testsigma, for an android project](https://docs.testsigma.com/images/android-apps/inspection-mode-button-record-test-steps-Recorder-testsigma-android.png)

In inspection mode, you can click on elements and get more information about them. For example, if we click on the button ‘Sign up with Apple’, this information about the button will appear on the Recorder UI.

![actions available for an inspected element to record test steps via the Recorder in Testsigma, for an android project](https://docs.testsigma.com/images/android-apps/actions-for-inspected-element-Recorder-testsigma-android.png)


You can click on the button ‘tap’ or ‘Enter Data’ for the selected element to perform the corresponding actions on the selected element.

&emsp;

   * Swipe Action

![do swipe action button on the Recorder in Testsigma, for an android project](https://docs.testsigma.com/images/android-apps/do-swipe-action-button-Recorder-testsigma-android.png)

   * Do click action

![do click action button on the Recorder in Testsigma, for an android project](https://docs.testsigma.com/images/android-apps/do-click-action-button-Recorder-testsigma-android.png)

The ‘Do click action’ button lets you click on an element on the screen and record the coordinates of the click.

&emsp;

   * Go back

![go back button on the Recorder in Testsigma, for an android project](https://docs.testsigma.com/images/android-apps/go-back-button-Recorder-testsigma-android.png)

This button records the “go back” action from the current screen.

&emsp;

   * Home

![home button on the Recorder in Testsigma, for an android project](https://docs.testsigma.com/images/android-apps/home-button-Recorder-testsigma-android.png)

The home button displays the home screen of the device.

&emsp;

   * Refresh Screenshot

![refresh button on the Recorder in Testsigma, for an android project](https://docs.testsigma.com/images/android-apps/refresh-button-Recorder-testsigma-android.png)

The Refresh Screenshot button lets you refresh the current screen on the mobile device.

&emsp;

   * Toggle

![toggle button on the Recorder in Testsigma, for an android project](https://docs.testsigma.com/images/android-apps/toggle-button-Recorder-testsigma-android.png)

The Toggle button lets you switch between landscape and portrait mode.

&emsp;

   * Search Element

![search button on the Recorder in Testsigma, for an android project](https://docs.testsigma.com/images/android-apps/search-button-Recorder-testsigma-android.png)

This option can be used to search for an element in the app source.


&emsp;


To know about other aspects of the Recorder, refer to the links below:

 1. [Test Step Actions](https://testsigma.com/docs/test-cases/create-steps-recorder/android-apps/step-actions/): The actions that can be performed on a test step via the Recorder UI.
 2. [Test Step Settings](https://testsigma.com/docs/test-cases/create-steps-recorder/android-apps/step-settings/): The settings that are available for a test step via the Recorder UI.
 3. [Test Data in Steps](https://testsigma.com/docs/test-cases/create-steps-recorder/android-apps/test-data-options/): How to use test data in test steps via the Recorder UI.
 4. [Add Steps Manually](https://testsigma.com/docs/test-cases/create-steps-recorder/android-apps/add-steps-manually/): How to add steps manually via the Recorder UI.
 5. [Reuse Elements](https://testsigma.com/docs/test-cases/create-steps-recorder/android-apps/reuse-elements/): How to reuse already added elements via the Recorder UI.
 6. [Update Elements](https://testsigma.com/docs/test-cases/create-steps-recorder/android-apps/update-elements/): How to update already added elements via the Recorder UI.
 7. [Create an Element](https://testsigma.com/docs/test-cases/create-steps-recorder/android-apps/create-a-new-element/): How to create an element via the Recorder UI.
 8. [Reorder Test Steps](https://testsigma.com/docs/test-cases/create-steps-recorder/android-apps/reorder/): How to reorder test steps via the Recorder UI.
 9.  [Bulk Actions](https://testsigma.com/docs/test-cases/create-steps-recorder/android-apps/bulk-actions/): The bulk actions that can be performed on multiple test steps at once via the Recorder UI.
 10. [Add Steps Before & After](https://testsigma.com/docs/test-cases/create-steps-recorder/android-apps/add-steps-before-after/): How to add steps before and after the steps that are already added, via the Recorder UI.
 11. [Type: Natural Language](https://testsigma.com/docs/test-cases/step-types/natural-language/): How to add a new step as a natural language step via the Recorder UI.
 12. [Type: Step Group](https://testsigma.com/docs/test-cases/step-types/step-group/): How to add a new step as a step group via the Recorder UI.
 13. [Type: For Loop](https://testsigma.com/docs/test-cases/step-types/for-loop/): How to add a new step as a for loop via the Recorder UI.
 14. [Type: While Loop](https://testsigma.com/docs/test-cases/step-types/while-loop/): How to add a new step as a while loop via the Recorder UI.
 15. [Type: Conditional If](https://testsigma.com/docs/test-cases/step-types/if-condition/): How to add a new step as a conditional if via the Recorder UI.







      