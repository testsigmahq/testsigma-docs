---
title: "Supported Locator Types in an Android Project"
metadesc: "Supported locator types for creating elements for an android application in Testsigma. Learn five ways to uniquely identify or locate elements in your automated tests."
noindex: false
order: 6.35
page_id: "Supported Locator Types in an Android Project"
warning: false
---

---

When creating elements for an application, you need to provide a way to identify them uniquely. Testsigma supports five ways to identify or locate these elements for your automated tests uniquely. The five supported locator types are:

1. **Accessibility ID:** This is the most preferred locator to use to automate your tests, as this attribute would remain the same for other platforms like iOS, too, and makes it easier to port the same tests to different platforms. This attribute is also least likely to be changed during a structural change in the source.

2. **ID:** After accessibility ID, this is the second preferred locator. Every element is supposed to have a unique ID. 

[[info | NOTE:]]
| If you are facing difficulty finding IDs for your elements, you should talk to your developer about it.

3. **XPATH:** XPath stands for XML Path Language and will parse the source code to get the value of the referred element. 

4. **Class Name:** This will be the value assigned to the attribute **Class Name** for the element you want to capture.

5. **Name:** This will be the value assigned to the attribute **Name** for the element you want to capture.

6. **Resource ID:** This will be the value assigned to the attribute **Resource ID** for the element you want to capture. Resource ID allows alphanumeric values along with special characters like dot(.), underscore(_), colon(:), and forward-slash(/).


---
