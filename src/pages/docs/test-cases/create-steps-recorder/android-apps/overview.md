---
title: "Recording Test Steps with Recorder for Android: An Overview"
metadesc: "This article discusses how to use the recorder to record your test steps and generate automated android tests | Record Test Steps with Recorder for Android"
noindex: false
order: 4.521
page_id: "Recording Test Steps with Recorder for Android: An Overview"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Record Test Steps for Android Using Recorder"
  url: "#steps-to-record-test-steps-for-android-using-recorder"
---

---

With Testsigma, you can either write your test steps using NLPs or use the recorder to record your test steps and generate automated android tests. This article discusses how to record test steps for Android using the recorder.

---
## **Prerequisites:**
- Testsigma test step recorder chrome extension. See, [Testsigma Chrome Extension](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/).
- An android app that you want to test.

---
## **Steps to Record Test Steps for Android Using Recorder**
1. Navigate to **Create Tests > Test Cases**, click on **Create Test Case**.
![Test Case Page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tcsnavandov.png)

2. On Test Case details page, click on **Record**
![Test Case Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/recordandov.png)

3. An overlay of **Record test steps** pops up. Select **Test Lab**, **Test Machine** and upload the application you want to test. 
![Overlay](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tltmupandov.png)

4. Click on **Record**.
![Record](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/recoandov.png)

5. The recording screen will have two sections:
    - **Device Controlling Section**
    ![DCS](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/dcsanov.png)
    - **Test Steps Section**
    ![Test Step Section](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tscsandov.png)

6. Let’s review all the options available in the **Device Controlling Section**.
    - **Mirroring mode**: Mirror mode will allow you to use the app via Testsigma to mirror real live physical device use.
    ![Mirroring Mode](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mmodeanov.png)
    - **Select Element**: You can click on elements and get more information about them. 
    ![Select Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/seandov.png)
    For example, if we click on **Login**, the information will be displayed under the section **Selected element attributes**. If you click on **Tap**, the step recorder will create the step as ***Tap on Login***.
    ![Tap](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tapanov.png)
    - **Swipe By Coordinates**: The swiping action will be recorded with this option.
    ![Swipe by Coordinates](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sbcandov.png)
    - **Tap By Coordinates:** It lets you click on an element on the screen and record the coordinates of the click.
    ![Tap by Coordinates](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tbcandov.png)
    - **Search Element**: This option can be used to search for an element in the app source.
    ![Select Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/seandrov.png)
    - **Go back**: This button records the “go back” action from the current screen.
    ![Go Back](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/gobackandov.png)
    - **Home**: This button displays the home screen of the device.
    ![Home](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/homeandov.png)
    - **Hide Keyboard**: This button lets you hide the keyboard in the application.
    ![Hide Keyboard](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/hidekbondov.png)
    - **Change to landscape mode**: This button lets you switch between landscape and portrait mode.
    ![Change to Landscape Mode](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/landscmandov.png)

7. The **Test Steps Section** will display the actions performed on the device. 

---