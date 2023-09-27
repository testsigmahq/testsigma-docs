---
title: "Recording Test Steps with Recorder for iOS: An Overview"
metadesc: "Learn how to record test steps using Testsigma’s Recorder for iOS | Write your test steps using recorder to record your test steps and generate iOS tests"
noindex: false
order: 4.531
page_id: "Recording Test Steps with Recorder for iOS: An Overview"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Record Test Steps for iOS Using Recorder"
  url: "#steps-to-record-test-steps-for-ios-using-recorder"
---

---

With Testsigma, you can either write your test steps using NLPs or use the recorder to record your test steps and generate automated iOS tests. This article discusses how to record test steps for iOS using the recorder.

---

## **Prerequisites**
- Testsigma test step recorder chrome extension. *For more information, refer to [Testsigma Chrome Extension](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/).*
- An iOS app that you want to test.

--- 

## **Steps to Record Test Steps for iOS Using Recorder**
1. Navigate to **Create Tests > Test Cases**, click on **Create Test Case**.
![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/iosoctc.png)

2. On **Test Case Details** page, click on **Record**.
![Record](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/iosoreco.png)

3. On **Record test steps** overlay, select **Test Lab**, **Test Machine** and **App Source** you want to test. 
![Record Steps Overlay](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/iosotltmas.png)

4. Click on **Record**.
![Record](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/iosorctso.png)

5. The recording screen will have two sections:

    - **Device Controlling Section**
    ![DCS](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/dcsioso.png)

    - **Test Steps Section**
    ![Test Steps Section](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tssioso.png)

6. Let’s review all the options available in the **Device Controlling Section**.
    - **Mirroring mode:** Mirror mode will allow you to use the app via Testsigma to mirror real live physical device use.
    ![Mirroring Mode](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mmioso.png)
    
    - **Select Element:** You can click on elements and get more information about them. 
    ![Select Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/seiosoerview.png)
    
    For example, if we click on Sign up free, the information will be displayed under the section Selected element attributes. If you click on Tap, the step recorder will create the step as Tap on Sign up free.
    
    - **Swipe By Coordinates:** The swiping action will be recorded with this option.
    ![Swipe by Coordinates](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sbciosovrv.png)
    
    - **Tap By Coordinates:** It lets you click on an element on the screen and record the coordinates of the click.
    ![Tap by Coordinates](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tbciosoovrv.png)
    
    - **Search Element:** This option can be used to search for an element in the app source.
    ![Search Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/seiosoov.png)
    
    - **Go back:** This button records the “go back” action from the current screen.
    ![Go Back](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/gbioso.png)
    
    - **Home:** This button displays the home screen of the device.
    ![Home](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/homeioso.png)
    
    - **Hide Keyboard:** This button lets you hide the keyboard in the application.
    ![Hode KB](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/hkbioso.png)
    
    - **Change to landscape mode:** This button lets you switch between landscape and portrait mode.
    ![Landscape Mode](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/lmiosovv.png)

8. The **Test Steps Section** will display the actions performed on the device. 

---