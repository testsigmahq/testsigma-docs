---
title: "Locating elements in shadow DOM with Testsigma"
metadesc: "How to locate shadow DOM elements with testsigma."
noindex: false
order: 6.47
page_id: "Shadow DOM"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Locate shadow DOM elements "
  url: "#locate-shadow-DOM-elements "

---

---
<em>Document object model (DOM)</em> is an API that represents the content of HTML or XML document as a tree structure.
<em>Shadow DOM</em> provides a way to attach a hidden DOM to a DOM element of your choice, with local styles and markup detached from the rest of the web page. This helps web developers in better encapsulating their code.
But this also poses a challenge for automation testing, because elements inside a shadow root technically doesn’t exist in the main DOM. And finding the right elements is a critical requirement when creating automation test cases. Failure to identify them may result in less reliable tests.

![Shadow DOM diagram](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/elements/shadow-dom/Shadow_dom_diagram.png)

## **Locate shadow DOM elements**

In this section, we demonstrate how to locate shadow DOM elements with Testsigma for creating test cases.

We are using the shopping website [shop.polymer-project](https://shop.polymer-project.org/) for our demo.

1. On the website, navigate to the child object or the element you want to interact.

2. **Right click > inspect**. The Chrome developer tool opens and highlights its elements.

![Inspect shadow DOM element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/elements/shadow-dom/shadow_dom_inspect.png)

3.  Right click on the element. Select **Copy> Copy selector**. Save the value for future use.

![Inspect shadow DOM element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/elements/shadow-dom/inspect_shadow_dom.png)

![Copy CSS selector of DOM element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/elements/shadow-dom/copy_selector_shadow_dom.png)

4. Now identify all the shadow host elements of the same shadow DOM element upto its shadow root element.

5. Copy the value of each of the shadow host elements in the method described in the previous step. Save the values for future use.

6. Now return to the Testsigma UI, to define the properties of the shadow DOM element on the **Create Element** window. *For more information on how to define elements manually, refer to [Creating elements manually](https://testsigma.com/docs/elements/web-apps/create-manually/)*.

7. On the **Create Element** window, provide the following details:
    1. Name
    2. Screen Name

8. Under the element type, select **CSS selector** from the drop-down menu. This is because Only CSS selector can access elements present inside shadow DOM.

9. Paste the value of the CSS selector of the shadow DOM element in the **Enter the value** textbox.

10. Select the checkbox **Present inside Shadow DOM**.

![create element window](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/elements/shadow-dom/create_elements_shadow_dom.png)

11. Now specify CSS Selector value of each the shadow host elements identified in *Step 5* from parent host to current host in order.

![specify shadow host elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/elements/shadow-dom/CSs_selectors_specified.png)

12. Click **Create**.

13. Run the test case to verify if element is identified correctly.

