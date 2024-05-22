---
title: "Strategies for Formulating Elements"
metadesc: "Learn how to find and create locators for the Elements using single attributes, text, or Xpath and CSS Selectors in Testsigma Application"
noindex: false
order: 6.26
page_id: "Different Strategies for Formulating Elements"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Using unique single Element Attributes"
  url: "#1-using-unique-single-element-attributes"
- type: link
  name: "Using Link Text and Partial Link Text"
  url: "#2-using-link-text-and-partial-link-text"
- type: link
  name: "Using XPath/CSS Selectors"
  url: "#3-using-xpathcss-selectors"
- type: link
  name: "Get Locators value manually using Chrome Developer Tools"
  url: "#get-locators-value-manually-using-chrome-developer-tools"
- type: link
  name: "Finding Element attributes and their values"
  url: "#finding-element-attributes-and-their-values"
- type: link
  name: "Find XPath or CSS Locator"
  url: "#find-xpath-or-css-locator"
---

---

For this guide, it would be recommended to get familiar with the Chrome Developer Tools and Elements Panel for finding the Elements and their attributes. For more information, see [getting started with viewing and changing the DOM](https://developer.chrome.com/docs/devtools/dom/).

Elements can be created from the attributes/properties of an HTML Element, using:
1. Attributes of the element like id, name, placeholder
2. Link Text and partial link text of the element
3. XPaths/ CSS Selectors

<br>

---

## **1. Using Unique Single Element Attributes**

You can use any of the element attributes such as ID, Name, Class Name, etc if their value is unique. ID locator is the most preferred and recommended single attribute.

Check the below section “Get Locators value manually using Chrome Developer Tools” to learn how to use Chrome Developer Tools to get the attribute value.


---

## **2. Using Link Text and Partial Link Text**

You can use the visible text(fully or partially) on a link(anchor tag) for formulating Elements.

Check the below section “Get Locators value manually using Chrome Developer Tools” to learn how to use Chrome Developer Tools to get the link text.



---

## **3. Using XPath/CSS Selectors**

You can generate XPath/ CSS Selectors for elements using Chrome Developer tools if you are familiar with XPath/CSS Selector creation.

Check the below section “Get Locators value manually using Chrome Developer Tools” to learn how to use Chrome Developer Tools to get the XPath or CSS Selector.


---

## **Get Locators value manually using Chrome Developer Tools**

For demonstration, we will take the example of a simple Login button on the [OrangeHRM Login page](http://opensource.demo.orangehrmlive.com/). We will try to get the Attribute values for the Login button below:

1. Navigate to the page in your Google Chrome Browser.
2. Right-click on the element you want to get locator for and select Inspect Element from the popup menu. In this case, it is the Login button on the OrangeHRM login page.

![Right click menu on OrangeHRM Page](https://docs.testsigma.com/images/creating-locators-manually-strategies/locator-strategies-chrome-right-click-menu.png)

The **Elements** panel of Google Chrome Developer Tools will open up on the right or bottom of your web browser window and your clicked element will be highlighted in blue.

![Chrome Devtools Elements panel on OrangeHRM Page ](https://docs.testsigma.com/images/creating-locators-manually-strategies/locator-strategies-chrome-devtools-elements-panel.png)

3. Check the highlighted text in the Elements panel. That is the HTML code for the selected Element.

The general format of HTML code for a HTML Page Element is:<br>

< tag_ name attribute1_ name = "attribute1_ value" attribute2_ name="attribute2_ value" attribute3_ name="attribute3_ value" > value </ tag_name>

This is the code for the LOGIN button on above OrangeHRM Web page.<br>
< input type = "submit" name="Submit" class="button" id="btnLogin" value="LOGIN">



---

## **Finding Element attributes and their values**

In this case, the tag name is ‘input’. Attribute names are ‘type’, ‘name’, ‘class’, ‘id’, and ‘value’ and their respective values are the strings in quotes following their name and equal sign. For example, the value of the ‘name’ attribute is ‘Submit’. Similarly, you can find the attribute values for ID, Class, etc


---

## **Find XPath or CSS Locator**

In the Elements panel, right-click on the highlighted element, hover over the Copy option, and select ‘Copy XPath’ or ‘Copy Selector’ from the popup menu.

![Copy Xpath menu option on Chrome Devtools Elements panel](https://docs.testsigma.com/images/creating-locators-manually-strategies/locator-strategies-chrome-devtools-elements-panel-copy-xpath.png)

Your Xpath or CSS Locator will be copied to the clipboard.


---