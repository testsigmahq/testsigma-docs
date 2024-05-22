---
title: "Most Common Issues Caused When Using UI Identifiers"
metadesc: "When locating an element we need to make sure that the attribute value is unique. This article discusses most common issues caused when using UI identifiers"
noindex: false
order: 23.53
page_id: "Most Common Issues Caused When Using UI Identifiers"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Element Not Found"
  url: "#element-not-found"
- type: link
  name: "Duplicate UI Identifiers"
  url: "#duplicate-ui-identifiers"
- type: link
  name: "Hidden or Disabled Elements"
  url: "#hidden-or-disabled-elements"
- type: link
  name: "Incorrect or Invalid UI Identifiers"
  url: "#incorrect-or-invalid-ui-identifiers"
- type: link
  name: "Empty UI Identifiers"
  url: "#empty-ui-identifiers"
- type: link
  name: "Element not Clickable or Interactable"
  url: "#element-not-clickable-or-interactable"
- type: link
  name: "Stale Element Exception"
  url: "#stale-element-exception"
---

---

When locating a Web Element using any of its attributes (id, title, name, type, placeholder, class, text e.t.c), we need to make sure that the attribute value is unique. For example, if there are two buttons with the name 'submit' on the same page, we cannot use that attribute. In cases where no other unique Identifiers are present, we will make use of Xpath locators or CSS locators. However, there can be a number of issues when using UI Identifiers for your Test Steps. 

---

## **Element Not Found**

![Element not found](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/32005631287/original/AHZqtEGcS3xG9gnGBGoDLAFlcJqdOcQi7g.png?1563957746)

There can be mainly three reasons for the error:

**1. Element not present in current page** <br>
**Cause:** The Element is not present on the current page. One of the previous steps might have passed but not run as expected.<br>
**Solution:** Check the screenshot of the previous steps to know where it failed and correct the Step there. Please feel free to contact Support on chat if you need more help. <br>

**2. UI Identifier value is incorrect** <br>
**Cause:** The UI Identifier might be incorrect and therefore Testsigma is not able to find an Element with the given UI Identifier. The above-given image is an example of this error. You can see there is a typo in the UI Identifier (xpath value) in this case. <br>
**Solution:** Check and correct the UI Identifier value or use Testsigma Recorder. If the element was recorded using Testsigma Recorder, please feel free to contact the Support on chat to report the issue. <br>

**3. Element is located in an external frame** <br>
**Cause:** The Element is inside an Internal Frame rather than the Body of the HTML Document. <br>
**Solution:** You need to switch to the Frame first where the element is located before interacting with the element using **Click** or **Type** Statements. You can use any of the following Grammar: <br>
- Switch to the frame UI identifier
- Switch to the frame by index test data
- Switch to the frame with name test data

---

## **Duplicate UI Identifiers**

In this case, the Test Step might not actually fail. The Test Step will pass and the execution will continue although the correct Element was not selected. This is undesirable.

![Duplicates](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/32003704320/original/1ijoBxZdM6OA1SX0dSCXIzXEaqfyHIw09A.png?1542495232)

**Cause:** As you can see above, we used the xpath //input[@type='password'] and there are two matching Elements as shown in the image for the same xpath. This is a case of duplicate UI Identifiers and even if we need to select the second field, the first Element with the corresponding UI Identifier will always be selected. <br>
**Solution:** Use a different XPath that is unique for the element.

---

## **Hidden or Disabled Elements**

Element is either hidden or disabled exception

![Hidden/Disabled](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/32003375097/original/yf8rFzpJK2uroAA-zhRDEsevc5R4o3mJzw.png?1538651831)

**1. Dynamic Elements not available at runtime**
**Cause:** Sometimes, the element might be created dynamically and might not be present in the Web page at that instant.
Solution: Wait for the element to be present by adding a wait step.



**2. Disabled or hidden Element**
**Cause:** The given UI Identifier is hidden or disabled. Elements are sometimes hidden or disabled by the developer if they are not meant to be interacted with.

![Hidden](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/32003704323/original/UHJ7h9ZeMIXuWm_n4irI3tyI4Us0y6Iq4A.png?1542495544)

In the above image, you can see the type='hidden' for these input elements. An element may be hidden also using class names such as 'hide', 'hidden' or attributes(angular directives) such as 'ng-hide'.

**Solution:** If the element is hidden, the developer doesn't want the user to interact with it. Find another element that can be interacted upon.

---

## **Incorrect or Invalid UI Identifiers**

The element corresponding to the locator type "id_value" and locator "//*[@id='lgnjs']" is not displayed.

![Incorrect](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/32003375388/original/K4515ysgaEzsKRj7uWv8sGUnKnhMMSPycw.png?1538653598)

**1. Mismatch between UI Identifier type and UI Identifier value**

**Cause:** Check the selected locator type corresponds to locator value. Locator type is 'id' but the given locator value is in 'xpath' format.<br>
**Solution:** Correct the locator value corresponding to the locator type.



**2. Element is not displayed in page**

**Cause:** We can rule out the mismatch of Locator Type and Locator value in the above message.<br>

**Solution:** Check whether the element is actually displayed in the present page.

---

## **Empty UI Identifiers**

Empty locator value provided for the locator type "id_value".

![Empty Value](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/32005631374/original/IdgiyefyGoJymHH3I66F-JnJHhT6yLMK8A.png?1563958543)
![Attribute Empty](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/32005626076/original/5PQ_QJb_1Oppy6H6dFwqpVd_AyNtoAorsw.png?1563888775)

**Cause:** No value provided for the UI Identifier. <br>

**Solution:** Check the value of the UI Identifier and make sure that ui identifier value is not be empty.

---

## **Element not Clickable or Interactable**

Element not clickable at point (x,y). Other element would receive the click:

![Not Clickable](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/32003704342/original/vHK8wszMAWtsAGtNq8pewfBghREF4oKRMg.gif?1542498213)

**1. Another Element overlapping temporarily**
Cause: The Element is covered or overlapped by another element temporarily(during a page load).

Solution: Add a wait step for the overlapping element to go away itself. The overlapping element will disappear automatically once the page loads completely.



**2. Another Element overlapping until user acts upon it**<br>
**Cause:** The Element is covered or overlapped by another element that needs to be closed/removed (like sticky menus, drop down menus or alerts). <br>
**Solution:** Add a Step to close/remove the overlapping Element. For Ad or Survey popups, there would be a close button which can be clicked to close the popup.



**3. Element out of page view** <br>
**Cause:** The Element is not visible in the current Browser Window view. Check whether the Element is actually visible in the Test Step Screenshot(inside the Browser view port). <br>
**Solution:** If the Element is not inside the view, add a Test Step to scroll to the Element.

---

## **Stale Element Exception**

The element corresponding to the locator type "X" and locator "Y" cannot be interacted with since it is no longer appears/exists on the DOM of the page.

**1. The element is no longer attached to the DOM**

**Cause:** The element you are trying to interact with might be a dynamically rendered element that detaches/reattaches itself to the DOM/ HTML Source dynamically after the page load is complete. This is the most common cause. <br>

**Solution 1:** Add a wait step so as to allow time for the element to be added to the DOM using the **Wait for test data seconds** template. <br>
**Solution 2:** Add a Page Refresh step so that the element is loaded quickly on next reload.


**2. The element has been removed from the DOM**

**Cause:** The element has been deleted entirely. <br>

**Solution:** Get the UI Identifier for the element once again.


---