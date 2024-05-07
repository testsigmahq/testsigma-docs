---
title: "Most Common causes for Click/Tap NLP failure"
metadesc: "Understand the functionality of click or tap NLP while creating a test step inside a test case & learn most common causes for Click/Tap NLP failure"
noindex: false
order: 23.67
page_id: Common causes for Click/Tap NLP failure
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Click or Tap Action Checkpoints"
  url: "#click-or-tap-action-checkpoints"
- type: link
  name: "Troubleshooting/Debugging"
  url: "#troubleshootingdebugging"
---

---


Click/ Tap is one of the most used NLP in our product and it has been observed that many first time users often get an error message while using this NLP initially. So, this article will help you understand the functionality of click/tap NLP while creating a test step inside a test case.


---

## **Click or Tap Action Checkpoints**

Generally, when we use click/Tap functionality in Testsigma while clicking or tapping on any element with suitable UI Identifier we make sure of these following things:

**1. The element is 'enabled'**
In case the element is disabled, it will throw an error message "Element is either hidden or disabled". So, before we click on any element, we need to make sure that it is enabled.


**2. The element is 'visible'**
Our second criteria is to make sure that the element that you are trying to click is visible/not hidden. In case it is not visible, it will throw the same error message mentioned above. <br>
It is possible that the element that you are trying to click is present below the scroll view. So for that, we are internally using the Scroll functionality to find the element that you want to click.

**3. Correct Xpath**
Our third criterion is to ensure the element is being clicked or tapped by providing the correct Xpath. You can use our Chrome Extension for getting the Xpath for UI Identifier or you can write Xpath manually.

---

## **Troubleshooting/Debugging**

**Appium Inspector to debug Mobile Apps**
In case any user wants to check whether the element is visible and enabled, they can use Appium Inspector to debug and inspect the element as shown below to check if the 'enabled' and 'visible' attributes are 'true'.

![Inspector](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/32006746478/original/lZj_MYOTfO-FdSy_Va10kjlxVRJMy5sWBg.png?1579269067)

The above image is for elements for which Tap NLP would probably fail since it doesn't satisfy the second condition.

**Developer tools to inspect Web Apps**

![Developer Tools](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/32006746449/original/HjVa5okQ99UMVXWZvhWIgpugN6O1LMqWEg.png?1579268813)

The above image is for elements for which Click NLP would probably fail since it doesn't satisfy the first condition.


The **click/Tap** NLP will have a smooth run once these criteria are met.

In case you have any problem regarding the Click/Tap NLP, please make sure that these criteria are being met.

---