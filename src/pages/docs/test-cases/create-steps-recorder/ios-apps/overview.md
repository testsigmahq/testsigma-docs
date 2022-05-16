---
title: "Recording Test Steps with Recorder for iOS: An Overview"
metadesc: "How to record test steps using Testsigma’s Recorder for iOS."
noindex: false
order: 4.531
page_id: "Recording Test Steps with Recorder for iOS: An Overview"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Pre-requisites"
  url: "#pre-requisites"
- type: link
  name: "How to record test steps using Testsigma’s Recorder for iOS"
  url: "#how-to-record-test-steps-using-testsigmas-recorder-for-ios"
---

---
With Testsigma, you can either write your test steps in simple English or you can use the Test Recorder to record your test steps and generate airtight automated android tests in simple English. In this document, we cover how to record test steps via the Test Recorder. 

&emsp;

---
##**Pre-requisites:**
1. You should have an account on Testsigma.
 
2. Your Testsigma account should have an iOS app uploaded under ‘uploads’. This is the iOS app that you want to test.

&emsp;

---
##**How to record test steps using Test Recorder for iOS:**
1. Open a pre-existing iOS Project or create a new one under your Testsigma account.
 
2. Go to ‘Test Development > Test Cases’
 
3. Create a new Test Case. Let's name it ‘first test case’.
 
4. From your test case page, click on the record button:


![the record button to record test steps via the Recorder in Testsigma, for an iOS project](https://docs.testsigma.com/images/ios-apps/record-button-record-test-steps-mobile-inspector-testsigma-ios.png)

5. The record button will launch the Test Recorder. Once you click the record button, another window will open up, where you can choose the device lab, version, device, and app for testing:

![the record button window to record test steps via the Recorder in Testsigma, for an iOS project](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/create-steps-recorder/ios-apps/overview/start-record-session-iOS-with-save-as-favorite-button.png)

**Note**: If you want to be using the same recording configuration often then you can save this as a favorite using the button “Save As Favorite” in the above screenshot

6. Click Record. The Test recorder interface will look like this:

 ![Test Recorder Interface for iOS](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/create-steps-recorder/ios-apps/overview/test-recorder-interface-ios-1.png)

7. The test steps will appear in the section ‘Test Steps’. As you can see, the first step will be ‘Launch App’:

![Test Recorder Steps for iOS](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/create-steps-recorder/ios-apps/overview/test-recorder-interface-ios-1-steps.png)


8. Now you can use the Test Recorder to record next steps. Before doing that let’s review all the options available with the Test Recorder. The options available are:



&emsp;

**a. Mirroring mode:**

 ![Mirroring mode in Test Recorder for iOS](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/create-steps-recorder/ios-apps/overview/test-recorder-interface-ios-1-steps-mirroring-mode.png)


Mirror mode will allow you to use the app via Testsigma to mirror real live physical device use



&emsp;
**b. Select Element:**

 ![Select Element in Test Recorder for iOS](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/create-steps-recorder/ios-apps/overview/test-recorder-interface-ios-1-select-element.png)

When 'Select Element' is selected, you can click on elements and get more information about them. For example, if we click on the button ‘Log in’, this information about the button will appear on the Test Recorder UI.


![actions available for an inspected element to record test steps via the Recorder in Testsigma, for an iOS project](https://docs.testsigma.com/images/ios-apps/actions-for-inspected-element-mobile-inspector-testsigma-ios.png)


You can click on the button ‘tap’ or ‘Enter Data’ for the selected element to perform the corresponding actions on the selected element.

&emsp;
**c. Swipe By Coordinates:**

 ![Swipe By Coordinates in Test Recorder for iOS](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/create-steps-recorder/ios-apps/overview/test-recorder-interface-ios-1-swipe-by-coordinates.png)

&emsp;
**d. Tap By Coordinates:**

 ![Tap By Coordinates in Test Recorder for iOS](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/create-steps-recorder/ios-apps/overview/test-recorder-interface-ios-1-tap-by-coordinates.png)


The ‘Tap By Coordinates’ button lets you Tap on an element on the screen and record the coordinates of the Tap.

&emsp;
**e. Go back:**

![go back button on the Recorder in Testsigma, for an iOS project](https://docs.testsigma.com/images/ios-apps/go-back-button-mobile-inspector-testsigma-ios.png)

This button records the “go back” action from the current screen.

&emsp;
**f. Home:**

![home button on the Recorder in Testsigma, for an iOS project](https://docs.testsigma.com/images/ios-apps/home-button-mobile-inspector-testsigma-ios.png)

The home button displays the home screen of the device.

&emsp;
**g. Refresh Screenshot:**

![refresh button on the Recorder in Testsigma, for an iOS project](https://docs.testsigma.com/images/ios-apps/refresh-button-mobile-inspector-testsigma-ios.png)

The Refresh Screenshot button lets you refresh the current screen on the mobile device.

&emsp;
**h. Toggle:**

![toggle button on the Recorder in Testsigma, for an iOS project](https://docs.testsigma.com/images/ios-apps/toggle-button-mobile-inspector-testsigma-ios.png)


The Toggle button lets you switch between landscape and portrait mode.

&emsp;
**i. Search Element:**

![search button on the Recorder in Testsigma, for an iOS project](https://docs.testsigma.com/images/ios-apps/search-button-mobile-inspector-testsigma-ios.png)

This option can be used to search for an element in the app source.


To know about other aspects of the Test Recorder, refer to the links below:

1. [Test Step Actions](https://testsigma.com/docs/test-cases/create-steps-recorder/ios-apps/step-actions/): The actions that can be performed on a test step via the Test Recorder UI.

2. [Test Step Settings](https://testsigma.com/docs/test-cases/create-steps-recorder/ios-apps/step-settings/): The settings that are available for a test step via the Test Recorder UI.

3. [Test Data in Steps](https://testsigma.com/docs/test-cases/create-steps-recorder/ios-apps/step-settings/): How to use test data in test steps via the Test Recorder UI.

4. [Add Steps Manually](https://testsigma.com/docs/test-cases/create-steps-recorder/ios-apps/add-steps-manually/): How to add steps manually via the Test Recorder UI.

5. [Reuse Elements](https://testsigma.com/docs/test-cases/create-steps-recorder/ios-apps/reuse-elements/): How to reuse already added elements via the Test Recorder UI.

6. [Update Elements](https://testsigma.com/docs/test-cases/create-steps-recorder/ios-apps/update-elements/): How to update already added elements via the Test Recorder UI.

7. [Create an Element](https://testsigma.com/docs/test-cases/create-steps-recorder/ios-apps/create-a-new-element/): How to create an element via the Test Recorder UI.


8. [Reorder Test Steps](https://testsigma.com/docs/test-cases/create-steps-recorder/ios-apps/reorder/): How to reorder test steps via the Test Recorder UI.

9.  [Bulk Actions](https://testsigma.com/docs/test-cases/create-steps-recorder/ios-apps/bulk-actions/): The bulk actions that can be performed on multiple test steps at once via the Test Recorder UI.

10. [Add Steps Before & After](https://testsigma.com/docs/test-cases/create-steps-recorder/ios-apps/add-steps-before-after/): How to add steps before and after the steps that are already added, via the Test Recorder UI.

11. [Type: Natural Language](https://testsigma.com/docs/test-cases/step-types/natural-language/): How to add a new step as a natural language step via the Test Recorder UI.

12. [Type: Step Group](https://testsigma.com/docs/test-cases/step-types/step-group/): How to add a new step as a step group via the Test Recorder UI.

13. [Type: For Loop](https://testsigma.com/docs/test-cases/step-types/for-loop/): How to add a new step as a for loop via the Test Recorder UI.

14. [Type: While Loop](https://testsigma.com/docs/test-cases/step-types/while-loop/): How to add a new step as a while loop via the Test Recorder UI.

15. [Type: Conditional If](https://testsigma.com/docs/test-cases/step-types/if-condition/): How to add a new step as a conditional if via the Test Recorder UI.







