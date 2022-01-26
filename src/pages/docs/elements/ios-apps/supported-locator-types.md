---
title: "Supported Locator Types in an iOS Project"
meta_desc: "The meta description should provide an accurate description of the content of the page."
order: 6.45
page_id: "Supported Locator Types in an iOS Project"
warning: false
---

---
When creating elements for an application, you need to provide a way to uniquely identify them. Testsigma supports five ways to uniquely identify or locate these elements for your automated tests. The five supported locator types are:

1. **Accessibility ID:** This is the most preferred locator to use to automate your tests, as this is an attribute that would remain the same for other platforms like iOS too, and makes it easier to port the same tests to different platforms. This attribute is also least likely to be changed during a structural change in the source.
2. **ID:** After accessibility ID, this is the second preferred locator to use. Every element is supposed to have a unique ID. 
[[info | NOTE:]]
| If you are facing difficulty finding IDs for your elements, you should talk to your developer about it.
1. **XPATH:** XPath stands for XML Path Language, and will parse the source code to get the value of the referred element. 
2. **Class Name:** This will be the value assigned to the attribute ‘Class Name’ for the element you want to capture.
3. **Name:** This will be the value assigned to the attribute ‘Name’ for the element you want to capture.

<br>

To know how these can be used while creating elements in Testsigma, please refer to the documents below:

1. [Manual Creation of Elements](https://testsigma.com/docs/elements/ios-apps/create-manually/)<br>
2. [Create an element via mobile inspector](https://testsigma.com/docs/elements/android-apps/capture-single-element/)


