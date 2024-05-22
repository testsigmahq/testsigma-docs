---
title: "Troubleshooting “Failed to perform action Mobile Test Recorder” error"
metadesc: "Learn how to troubleshoot the “Failed to perform action Mobile Test Recorder” error. These steps will help you fix the issue and continue mobile testing."
noindex: false
order: 23.62
page_id: "Troubleshooting “Failed to perform action Mobile Test Recorder” error"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "There are already running sessions for the user"
  url: "#1--there-are-already-running-sessions-for-the-user"
- type: link
  name: "Tapped point is out of the screen bounds"
  url: "#2--tapped-point-is-out-of-the-screen-bounds"
- type: link
  name: "Mobile inspection session expired"
  url: "#3--mobile-inspection-session-expired"
- type: link
  name: "Failed to start mobile inspection session"
  url:  "#4-failed-to-start-mobile-inspection-session"
- type: link
  name: "Failed to clear the element's text"
  url: "#5--failed-to-clear-the-elements-text"
- type: link
  name: "Failed to tap on the element"
  url: "#6--failed-to-tap-on-the-element"
- type: link
  name: "Failed to Swipe"
  url: "#7--failed-to-swipe"
- type: link
  name: "Failed to Navigate back"
  url: "#8--failed-to-navigate-back"
- type: link
  name: "Failed to enter data into the element"
  url: "#9--failed-to-enter-data-into-the-element"
- type: link
  name: "Failed to Change Orientation"
  url: "#10--failed-to-change-orientation"
- type: link
  name: "Failed to Navigate to home"
  url: "#11--failed-to-navigate-to-home"
- type: link
  name: "Failed to Search"
  url: "#12--failed-to-search"
- type: link
  name: "Mobile inspector session closed by a colleague"
  url: "#13--mobile-inspector-session-closed-by-a-colleague"
---

---

The easiest way to debug an error is to check the Logs for the Mobile test recorder. It contains the actual reason for the error. This article discusses some of the most common reasons. 

---

## **1.  There are already running sessions for the user**

There could be a couple of reasons for this error to appear. The reasons are listed below:

**Reason 1:**

You got disconnected from an ongoing mobile inspector session. One reason could be a forced refresh of the page. In such a scenario, a new session cannot be created as the previous session was not properly closed. 

**Solution:**

The inactive sessions are automatically closed after a wait of 2 minutes. So, either you can wait for 2 minutes for the next session to start, or, you can go to **Usage Details > Mobile Inspector Sessions** and stop the old session manually. Once the session is closed, you will have to relaunch the mobile inspector session. 

The steps to do stop an old session, manually, are mentioned below:

1. Go to main menu on the left and click on the **Usage Details** icon as also highlighted in the screenshot below:
![usage-details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/usdtls.png)

2. On the **Usage Details** window that opens up, click on the **Mobile Inspector Sessions** as also highlighted below:
 ![mobile inspector sessions](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/troubleshooting/mobile-apps/mobile-recorder-actions-failures/mobile-inspector-sessions.png)

1. Delete the ongoing mobile inspector session.

Now the old session has been deleted and new one can be created. 


**Reason #2**

A session was already running in one of the already open tabs/browsers while the user tried to launch another session in a new tab/browser.


**Solution**

If you want to start a new session in the new tab/browser, you will have to stop the already running session first. For this you can go to **Usage Details > Mobile Inspector Sessions** and stop the old session manually. The details steps for stopping an already running session are mentioned with solution for Reason #1 above.


<br>

---

## **2.  Tapped point is out of the screen bounds**

**Reason:** 

This error appears if the tap coordinates are beyond the capturable width and height of the screen. 

In a mobile inspection session, when a screen loads, the width and the height of the screen are captured by taking screenshots of the device. During the session, the android navigation keys at the bottom are also considered out of bounds of the width and the height

**Solution:**

At all times, ensure that the tap point is within the screen.

<br>


---

## **3.  Mobile inspection session expired**

**Reason:**

This error appears when Testsigma servers cannot reach the mobile inspector session. One of the main reasons could be an issue with your browser network. At such times, the keep-alive requests from the browser don't go through to the Testsigma servers, and the Testsigma servers assume that the session was closed abruptly, thus marking the session as **expired**.

![Network Error](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Networkerrorminsp.png)

**Solution:**

Check and resolve any network-related issues and relaunch.

<br>

---

## **4. Failed to start mobile inspection session**

This error could appear because of few different reasons, as listed below:

**Reason #1:**

The local or remote device, for which the mobile inspection session had to be started, is not available.

**Solution:** 

If the needed device is a lab remote device then try initiating the session again. If the issue persists even after a few retries, then you will have to reach out to Testsigma support. 

To reach out to Testsigma support, you can: 


  * Ping us on the chat widget at the bottom right of the page ,or, 
  * Email us at: support@testsigma.com ,or,
  * Join the Testsigma community’s discord here: https://discord.com/invite/5caWS7R6QX


**Reason #2:**

The selected app, that needed to be launched for the mobile inspector session, cannot be installed on the device.
 
**Solution:** 

Ensure that the app can be installed on the selected device. For local devices, you will have to install the app manually and try. In case the device is a remote test lab device and you can't figure out the issue, then you can reach out to Testsigma support. 

To reach out to Testsigma support, you can: 


  * Ping us on the chat widget at the bottom right of the page ,or, 
  * Email us at: support@testsigma.com ,or,
  * Join the Testsigma community’s discord here: https://discord.com/invite/5caWS7R6QX


**Reason #3:**

The reason could be related to app size, and could be, one of the 2 related reasons mentioned below: <br>
The selected app size has exceeded the allowed size limit.<br>
The large size of the app is causing the session to take a long time to initiate and the session wait time has exceeded the allowed limit.
 
**Solution:**

Upload the app with reduced size, if possible, or, If you are using a local device then first, install the app on the device, and then configure the use details[app activity, package etc.] option accordingly while starting the session.

**Reason #4:**

Some of the devices had additional security issues that stopped the session creation.

**Solution:**

This will happen in case you are using local devices. Make sure the USB debugging is enabled and in the device security settings select the proper connection type (for example Media).

**Reason #5:**

The usb connection, for local device sessions, is unstable.

**Solution:**

Check the USB cable and make sure its properly connected. Its recommended to use good quality USB cables to avoid connection issues.

**Reason #6:**

For android sessions, this error can appear if the launched app activity is different from the app activity parsed from the apk file. 

**Solution:**

There are 2 solutions to this specific problem, and the solutions are mentioned below:

**Solution #1:**

For local device sessions, this error can be avoided by following below steps:

1. Install the app manually
2. Configure the use details option during session initiation to set the app activity as the actual activity after launch.

**Solution #2:**

You can also confirm the values for *app activity* and *app package* from the concerned developer and then mention them under *desired capabilities* when you launch a mobile inspector session.

![mobile inspector sessions](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tsemadc.png)



<br>

---

## **5.  Failed to clear the element's text**

There could be a couple of reasons for this error to appear. The reasons are listed below:
 
**Reason #1:** 

The error appears when the element can't be identified or found using the given locator type(id, xpath, .e.t.c)

**Solution:** 

Please check the location value(id, xpath) provided to identity the element.
 
**Reason #2:**

This error can also appear if edits are not allowed on the element or if this element is not a text element.

**Solution:**

Please verify that the element that you wanted to clear the text for is a text type element and is editable.

<br>


---


## **6.  Failed to tap on the element**

There could be a couple of reasons for this error to appear. The reasons are listed below:

**Reason #1:**  

We get this error when the element can't be identified or found using the given locator type(id, xpath, .e.t.c)
 
**Solution:** 

Please check the location value(id, xpath) provided to identity the element

**Reason #2:**

This error can also appear if the element doesn't allow click/tap action. For eg. The element may not be clickable.

**Solution:** 

Make sure that element you are trying to tap can be clicked or tapped and is not disabled.

<br>

---

## **7.  Failed to Swipe**

There could be a couple of reasons for this error to appear. The reasons are listed below:
 
**Reason #1:**

We get this error when the swipe coordinates are not correct or if they are out of bounds.

**Solution:**

Make sure that the tap point is within the screen width and height bounds
 
**Reason #2:**

This error can also appear if the device doesn't allow swiping to the specified coordinates.

**Solution:** 

Make sure that the intended destination of the swipe action allows a swipe to it.

<br>

---

## **8.  Failed to Navigate back**

**Reason:** 

This error can appear if the device doesn't navigate back to the required page.

**Solution:** 

Make sure that the the device allows back navigation.

<br>


---


## **9.  Failed to enter data into the element**

There could be a couple of reasons for this error to appear. The reasons are listed below:
 
**Reason #1:**

This error can appear when the element can't be identified or found using the given locator type(id, xpath etc).

**Solution:**

Please check the location value(id, xpath) provided to identity the element
 
**Reason #2:**

This error can also appear if the element doesn't allow edits or if this element is not a text-containing element.

**Solution:**

Make sure that text can be entered into the element and if enter data doesn't work then click on the element and then use ‘send keys’ action in test steps in order to enter data.

<br>


---


## **10.  Failed to Change Orientation**

There could be a couple of reasons for this error to appear. The reasons are listed below: 

**Reason #1:**  

The app being inspected doesn't support change of orientation

**Solution:**

You will need contact the app developer and ask them to add support for orientation change

**Reason #2:**

The device’s settings do not allow orientation change. 


**Solution:**

If you are inspecting on a local mobile device, then you will have to change the device’s settings to allow orientation change. 

If you are inspecting mobile device on the cloud lab, then, please reachout to Testsigma support team.

To reach out to Testsigma support, you can: 
 * Ping us on the chat widget at the bottom right of the page ,or, 
 * Email us at: support@testsigma.com ,or,
 * Join the Testsigma community’s discord here: https://discord.com/invite/5caWS7R6QX

<br>

---


## **11.  Failed to Navigate to home**

**Reason:** 

This error would usually appear for cloud devices, when, for a device - home navigation is disabled.

**Solution:**

Please reachout to testsigma support team for clarification.

To reach out to Testsigma support, you can: 
 * Ping us on the chat widget at the bottom right of the page ,or, 
 * Email us at: support@testsigma.com ,or,
 * Join the Testsigma community’s discord here: https://discord.com/invite/5caWS7R6QX

 <br>

---

## **12.  Failed to Search**

There could be a couple of reasons for this error to appear. The reasons are listed below: 

**Reason #1:**

The element locator value provided might be incorrect

**Solution:**

Check for the correctness of the provided locator strategy and locator values, to do this make sure:
1. The element is searchable using the provided locator strategy and locator values 
2. The element is present in the current page.

**Reason #2:**

The element being searched might be from a hybrid page in the app.

**Solution:**
To resolve this, perform below steps:
1. Switch to hybrid app view
2. Change the locator value to to match the hybrid app element
3. Try again

<br>

---

## **13.  Mobile inspector session closed by a colleague**

**Reason:**

Your mobile session could have been closed because another collegue started a new mobile inspector session and the licenses were not enough for your session to continue. 

**Solution:**

You will need to increase your license count to avoid these kind of issues. Reachout to Testsigma support/sales team. 

To reach out to Testsigma support, you can: 
 * Ping us on the chat widget at the bottom right of the page ,or, 
 * Email us at: support@testsigma.com ,or,
 * Join the Testsigma community’s discord here: https://discord.com/invite/5caWS7R6QX

<br>


---


