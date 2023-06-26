---
title: "Overview of Elements for an Android Project"
metadesc: "What are elements in an Android project in Testsigma. Also learn how these elements can be captured in 2 different ways in Testsigma"
noindex: false
order: 6.31
page_id: "Overview of Elements for an Android Project"
warning: false
---

---
Element in an Android project in Testsigma refers to an object that forms a part of the UI of the application and can be located or identified. 

These elements can be captured in 2 different ways in Testsigma:

1. **Manual creation:** Here, you manually give the details of the element to create them. See [creating elements manually](https://testsigma.com/docs/elements/android-apps/create-manually/).
2. **Via mobile test recorder:** Here, you access your application’s UI via the mobile test recorder and inspect the elements that you want to capture. See [capturing elements using Mobile test recorder](https://testsigma.com/docs/elements/android-apps/capture-single-element/).


Testsigma supports 5 locator types to identify these elements for your automated tests:

1. **Accessibility ID:** This is the most preferred locator to use to automate your Android tests, as this is an attribute that remains the same across platforms (like iOS). That makes it easier to port the same tests to different platforms. This attribute is also least likely to be changed during a structural change in the source.
2. **ID:** After accessibility ID, this is the second preferred locator to use. Every element is supposed to have a unique ID. 
[[info | NOTE:]]
| If you are facing difficulty finding IDs for your elements, talk to your developer about it.
1. **XPATH:** XPath stands for XML Path Language, and will parse the source code to get the value of the referred element. 
Class Name: This will be the value assigned to the attribute ‘Class Name’ for the element you want to capture.
4. **Name:** This will be the value assigned to the attribute ‘Name’ for the element you want to capture.



These elements can be captured in 2 ways:
1. [Capture one element at one time](https://testsigma.com/docs/elements/android-apps/capture-single-element/)<br>
2. [Capture multiple elements at one time](https://testsigma.com/docs/elements/android-apps/record-multiple-elements/)<br>


To know about the various actions that can be taken on the elements in a project in Testsigma, see [Bulk actions on elements](https://testsigma.com/docs/test-cases/create-steps-recorder/android-apps/bulk-actions/).


