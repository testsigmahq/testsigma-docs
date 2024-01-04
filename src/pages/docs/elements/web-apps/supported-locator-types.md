---
title: "Supported Element Locator Types"
metadesc: "The guide explains different types of locators used for creating Elements in Testsigma | Locators supported by Testsigma to create Elements"
noindex: false
order: 6.25
page_id: "Supported Element Locator Types"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Supported Locators in Testsigma"
  url: "#supported-locators-in-testsigma"
- type: link
  name: "XPath"
  url: "#1-xpath"
- type: link
  name: "CSS Selector"
  url: "#2-css-selector"
- type: link
  name: "Link Text & Partial Link Text"
  url: "#3-link-text--partial-link-text"
- type: link
  name: "ID "
  url: "#4-id"
- type: link
  name: "Name"
  url: "#5-name"
- type: link
  name: "Class Name"
  url: "#6class-name"
- type: link
  name: "Tag Name"
  url: "#7-tag-name"
---

---

Webpages offer many location mechanisms to search and locate elements on the page to interact with. The most prominent ones are XPath and CSS Selectors. This article discusses locators supported by Testsigma to create elements.

---

## **Supported Locators in Testsigma**
* XPath<br>
* CSS Selector<br>
* Link Text and Partial Link Text<br>
* ID<br>
* Name<br>
* Class Name<br>
* Tag Name<br>


---

## **1. XPath**

XPath is a query language used to navigate through elements and attributes in an XML document. XPath locators are very powerful and flexible.

Any element on the page can be located using multiple XPath definitions and most other locators can be expressed as an XPath.

**Example:**
![HTML code for an email field](https://docs.testsigma.com/images/supported-locator-types/email-field-html-code.png)

XPath for the Email field in the above image is **//input[@id="email"]**

*Learn how to create [Dynamic Element locators](https://testsigma.com/docs/elements/dynamic-elements/with-parameter-test-data/) using Xpath and CSS Locators.*


---


## **2. CSS Selector**

CSS Selector is a string pattern used to identify an element based on a combination of HTML tag, id, class, and/or attributes.

**Example:**
![CSS  for an email field](https://docs.testsigma.com/images/supported-locator-types/css-field-html-code.png)

CSS Selector for the Email field using the ID is **input#email**

CSS Selector for the Email field using the Class name is **input.inputtext**

Also only a CSS selector can access elements present inside shadow DOM. *For more information on shadow dom,refer to [locating shadow DOM](https://testsigma.com/docs/elements/web-apps/shadow-dom/)*.

---


## **3. Link Text & Partial Link Text**

Finding an element with Link Text/Partial Link Text is very simple. But make sure that the link text is unique on the web page. If there are multiple links with the same link text (such as repeated header and footer menu links), in such cases action will be performed on the first matching element with the link.

**Example:**
![Text content inside link element](https://docs.testsigma.com/images/supported-locator-types/link-html-code-text-content.png)

Link text of the element is **“Forgot password?”**

Partial link text of the element can be **Forgot**, **password**, or **For**


---


## **4. ID**

ID is the most common way of locating elements since IDs are supposed to be unique for each element as per the W3C standard. If ID tags are available for an Element and they are unique, it is the most preferred option.

**Example:**
![id attribute of Email field](https://docs.testsigma.com/images/supported-locator-types/email-field-id-html-attribute.png)

The ID of the element is **“email”**


---


## **5. Name**

Locating elements by Name is very similar to locating by ID, except that we use the value of the name attribute instead of the ID. And moreover, name attributes are not strictly unique.

**Example:**
![name attribute of Username field](https://docs.testsigma.com/images/supported-locator-types/username-field-name-html-attribute.png)

The name of the element is **“userName”**


---


## **6. Class Name**

Class name locator selects the element which matches the values specified in the attribute name “class”.

**Example:**
![class name attribute of Username field](https://docs.testsigma.com/images/supported-locator-types/username-field-classname-html-attribute.png)

The class name of the element is **“inputtext”**


---


## **7. Tag Name**

Tag Name locator is used to find the elements matching the specified Tag/Type Name. It is very helpful when we want to extract the content within a Tag.

**Example:**
![tag name of Username field](https://docs.testsigma.com/images/supported-locator-types/username-field-html-tag-name.png)

The tag name of the element is **“input”**


---