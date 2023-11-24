---
title: "Elements for an Android Project - Overview"
metadesc: "What are elements in an Android project in Testsigma. Also learn how these elements can be captured in 2 different ways in Testsigma"
noindex: false
order: 6.31
page_id: "Overview of Elements for an Android Project"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Ways to Create Elements"
  url: "#ways-to-create-elements"
- type: link
  name: "Supported Locator Types"
  url: "#supported-locator-types"
---


---


Element in an Android project in Testsigma refers to an object that forms a part of the application's UI and can be located or identified. This article discusses an overview of elements for an Android project.


---

## **Ways to Create Elements**

There are 2 different ways to create elements in Testsigma:

1. **Manual Creation:** Here, you manually give the details of the element to create them. For more information, see [creating elements manually](https://testsigma.com/docs/elements/android-apps/create-manually/).
2. **Using Test Recorder:** Here, you access your application’s UI using test recorder and inspect the elements that you want to capture. For more information, see [capturing elements using test recorder](https://testsigma.com/docs/elements/android-apps/capture-single-element/).

---

## **Supported Locator Types**

When creating elements for an application, you need to provide a way to identify them uniquely. Testsigma supports five ways to identify or locate these elements for your automated tests uniquely. The five supported locator types are:


1. **Accessibility ID:** This is the most preferred locator to automate your tests, as this attribute would remain the same for other platforms like iOS, too, and makes it easier to port the same tests to different platforms. This attribute is also least likely to be changed during a structural change in the source.


2. **ID:** After accessibility ID, this is the second preferred locator. Every element is supposed to have a unique ID. 

[[info | NOTE:]]
| If you are facing difficulty finding IDs for your elements, you should talk to your developer about it.


3. **XPATH:** XPath stands for XML Path Language and will parse the source code to get the value of the referred element. 


4. **Class Name:** This will be the value assigned to the attribute **Class Name** for the element you want to capture.


5. **Name:** This will be the value assigned to the attribute **Name** for the element you want to capture.


---