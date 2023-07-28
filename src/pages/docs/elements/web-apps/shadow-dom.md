---
title: "How to locate shadow DOM elements"
metadesc: "Shadow DOM provides a way to attach a hidden DOM to a DOM element of your choice. Learn how to locate shadow DOM elements with testsigma."
noindex: false
order: 6.27
page_id: "Shadow DOM"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Basic shadow DOM terminologies "
  url: "#basic-shadow-dom-terminologies "
- type: link
  name: "Identifying if a webpage uses shadow DOM "
  url: "#identifying-if-a-webpage-uses-shadow-dom "
- type: link
  name: "Viewing DOM structure on the browser "
  url: "#viewing-dom-structure-on-the-browser "
- type: link
  name: "Locate shadow DOM elements "
  url: "#locate-shadow-DOM-elements "
---

---
<em>Document object model (DOM)</em> is an API that represents the content of HTML or XML document as a tree structure.
<em>Shadow DOM</em> provides a way to attach a hidden DOM to a DOM element of your choice, with local styles and markup detached from the rest of the web page. This helps web developers in better encapsulating their code.
But this also poses a challenge for automation testing, because elements inside a shadow root technically doesn’t exist in the main DOM. And finding the right elements is a critical requirement when creating automation test cases. Failure to identify them may result in less reliable tests.

## **Basic shadow DOM terminologies**

![Shadow DOM diagram](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/elements/shadow-dom/Shadow_dom_diagram.png)

1. **Shadow host**: The regular DOM node that the shadow DOM is attached to.
2. **Shadow tree**: The DOM tree inside the shadow DOM.
3. **Shadow boundary**: The place where the shadow DOM ends, and the regular DOM begins.
4. **Shadow root**: The root node of the shadow tree.


## **Identifying if a webpage uses shadow DOM**

To identify if a webpage uses Shadow DOM:

1. On the website, **Right click>inspect**. The chrome developer tool opens and highlights its elements.  

2.	On the **Elements** tab, expand the `<body>` tag. Verify if the `<body>` element contains `#shadow-root` which indicates the existence of shadow DOM on the website.

## **Viewing DOM structure on the browser**

1. On the website, **Right click>Inspect**.

2.  Navigate to **Settings** on the top right corner of the console.

3.  On the Settings page, navigate to the **Preferences** tab> **Elements** section.

4.  Select the checkbox **Show user agent shadow DOM**. Then examine the elements to see the DOM structure.

## **Locate shadow DOM elements**

In this section, we demonstrate how to locate shadow DOM elements with Testsigma for creating test cases.We are using the shopping website [shop.polymer-project](https://shop.polymer-project.org/) for our demo.

1. On the website, navigate to the child object or the element you want to interact.

2. **Right click > inspect**. The Chrome developer tool opens and highlights its elements.

![Inspect shadow DOM element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/elements/shadow-dom/shadow_dom_inspect.png)

3.  Right click on the element. Select **Copy> Copy selector**. Save the value for future use.

![Inspect shadow DOM element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/elements/shadow-dom/inspect_shadow_dom.png)

![Copy CSS selector of DOM element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/elements/shadow-dom/copy_selector_shadow_dom.png)

4. Now identify  the shadow host elements of the same shadow DOM element upto its shadow root element.For this, navigate the shadow DOM structure to find the immediate `#shadow-root(open)`element and its `shadow host`.

    1.  Save the value of the CSS selector of the `shadow host`. To save the value of the CSS selector repeat *step 3*.
    2.  Repeat *step 4*,until the CSS selector values of all the parent shadow host elements are saved for future use.

6. Now return to the Testsigma UI, to define the properties of the shadow DOM element on the **Create Element** window. *For more information on how to define elements manually, refer to [Creating elements manually](https://testsigma.com/docs/elements/web-apps/create-manually/)*.

7. On the **Create Element** window, provide the following details:
    1. Name
    2. Screen Name

8. Under the element type, select **CSS selector** from the drop-down menu. This is because only CSS selector can access elements present inside shadow DOM.

9. Paste the value of the CSS selector of the shadow DOM element saved in *Step 3*, in the **Enter the value** textbox.

10. Select the checkbox **Present inside Shadow DOM**.

![create element window](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/elements/shadow-dom/create_elements_shadow_dom.png)

11. Now specify CSS Selector value of each the shadow host elements identified in *Step 5* from parent host to current host in order.

![specify shadow host elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/elements/shadow-dom/CSs_selectors_specified.png)

12. Click **Create**.

13. Run the test case to verify if element is identified correctly.
