---
title: "How to Test Flutter Apps Using Accessibility Mode?"
metadesc: "Learn how Flutter’s semantic tree enables automation tools to identify and interact with UI elements, overcoming canvas-based rendering challenges."
order: 24.36
page_id: "how-to-test-flutter-apps-using-accessbility-mode-?"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to Test Flutter Apps Using Accessibility Mode"
  url: "#steps-to-test-flutter-apps-using-accessibility-mode"
---

---

Testing Flutter applications with traditional automation tools can be challenging because Flutter uses canvas-based rendering. This makes it difficult to directly inspect or interact with elements like buttons and text during test recording or execution.

However, Flutter offers built-in accessibility support through a semantic tree, a separate structure used by screen readers to describe UI elements. This semantic tree enables automation tools to identify and interact with UI elements using attributes such as **aria-label**. This article discusses how to test flutter apps using accessibility mode. 

---

## **Steps to Test Flutter Apps Using Accessibility Mode**

1. Right-click anywhere on the Flutter app screen.

2. Select **Inspect** from the context menu.

3. In the **Elements** tab, look for a hidden element that looks like this:
   ![Flutter app](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Flutter_Apps_1.png)

4. Click on the hidden element so it becomes selected in the DOM. 

5. Open the **Console** tab in DevTools.

6. Run the following command in the console to activate accessibility mode:

```
$0.click();
```
7. Check the **Elements** tab again. A whole new tree of elements will be added to the DOM. You should now see elements like:
   ![Flutter apps 2](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Flutter_apps_2.png)

8. Use these aria-label values to locate elements in your automation tests. 

9. Start recording your test using your preferred automation tool.

10. Interact with the elements using their **aria-label** attributes. 

[[info | NOTE:]]
| - Before executing your test, make sure:
|     - Accessibility mode is enabled again.
|     - You validate elements using aria-label or semantic attributes, not just visible screen text.
 
11. Run your test. It should now successfully interact with the Flutter UI using accessibility-based locators.
    ![Flutter apps 3](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Flutter_3.png)
    
---