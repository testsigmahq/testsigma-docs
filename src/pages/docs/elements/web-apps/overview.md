---
title: "Elements for a Web Project (Overview)"
metadesc: "Elements for a web project are needed to direct the interactions of UI. Here's an overview of Elements for a web project in Testsigma. "
noindex: false
order: 6.21
page_id: "Overview of Elements for a Web Project"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Ways to Create Elements"
  url: "#ways-to-create-elements"
- type: link
  name: "Actions on Elements Page"
  url: "#actions-on-elements-page"
- type: link
  name: "Element Review Management"
  url: "#element-review-management"
---

---

Elements in web applications refer to components that make up the content and structure of a web page. They represent different types of content, such as text, images, links, forms, and more. In order to interact with any of these elements on the page, we have to create an element in Testsigma Elements Repository. This article discusses an overview of elements for a Web project.



---

## **Ways to Create Elements**


There are 2 different ways to create elements in Testsigma:


1. **Manual Creation:** Here, you manually give the details of the element to create them. For more information, see [creating elements manually](https://testsigma.com/docs/elements/web-apps/create-manually/).

2. **Using Test Recorder:** Here, you access your application’s UI using test recorder and inspect the elements that you want to capture. For more information, see [capturing elements using test recorder](https://testsigma.com/docs/elements/web-apps/capture-single-element/).


---

## **Actions on Elements Page**

1. **Affected List:** The affected list button in the elements list shows the test cases that are affected by modification on the corresponding element. The test suites and the test plans containing these test cases can also be viewed from this page.


2. **Sort the Elements:** The Elements list can be sorted on the basis of **Element Name**, **Created Date**, **Update Date**, **Old** or **New**.
![Sort Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/waoelem.png)


3. **Filter Elements:** Filter option lets you filter element list as per your selected options. You can filter list as per the following options: 
    - **Name**: Filter the elements by their Name. This can be used to search elements by name as well.
    
    - **Type**: Filter the elements on the basis of locator type.
    
    - **Screen Name**: Filter by screen name of the element.
    
    - **Created By**: Filter by the creator of element.
    
    - **Created Date/Updated Date**: Filter by created and updated dates.
    
    - **Element Value**: Filter the elements by their locator value. This can be used to search elements by their locator value as well.
    
    - **Labels**: Filter by the tag/label for an element.
    
    - **Usage in Test Cases**: Filter on the basis of the element’s usage in test cases - Used, unused, or all.

![Filters](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/cewaov.png)


---

## **Element Review Management**

Larger teams can enable **Review Management** for the elements so that the elements used in the test cases are reviewed similar to a test case before finalizing and adding to the regression test suite. Learn more about review management [here](https://testsigma.com/docs/collaboration/elements-review-management/).

---