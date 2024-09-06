---
title: "Test Case Failures Due to Link Text Capture Issues"
pagetitle: "Resolving Test Case Failures Due to Link Text Capture Issues"
metadesc: "Test Case Failures due to link text capture issues? Learn how to fix mismatches between UI and HTML text in automated tests to avoid errors."
noindex: false
order: 24.17
page_id: "test-case-failures-due-to-link-text-capture-issues"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Identifying Link Text Capture Issues"
  url: "#identifying-link-text-capture-issues"
- type: link
  name: "Changing Element Details"
  url: "#changing-element-details"
- type: link
  name: "Dealing with UI and HTML Text Mismatches"
  url: "#dealing-with-ui-and-html-text-mismatches"
---

---

In automated testing, test failures often occur when the recorder captures link text differently between the UI and HTML, such as in uppercase in the UI and lowercase in HTML. This guide helps you identify the issue and adjust settings to ensure you capture the correct elements in your tests, avoiding these failures.

---

## **Prerequisites**

Before you proceed, ensure you know how to create or update an [Element](https://testsigma.com/docs/elements/web-apps/create-manually/) and a [Test Case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).

---

## **Identifying Link Text Capture Issues**

- Check if the recorder captures link text from the HTML instead of the visible text in the UI.
- Compare the captured text with what you see in the UI to spot differences. ![view link text capture issue](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/login_link_text_element.png)

<style>
  .example-container {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.5em;
    margin: 0.5em 0;
    background-color: #f9f9f9;
  }
  .example-title {
    color: #004d00;
    font-weight: bold;
    display: flex;
    align-items: center;
  }
  .example-title span {
    margin-right: 5px;
  }
  .example-list {
    list-style: none;
    padding: 0;
  }
  .example-list li {
    margin-bottom: 0.5em;
  }
</style>

<div class="example-container">
  <div class="example-title">
    <span>ℹ️</span>Example:
  </div>
  <ul class="example-list">
      <p>If the UI displays <strong>LOGIN</strong> but the HTML shows <strong>login</strong>, the recorder may capture the lowercase version, which could lead to a test case failure.</p>
    </ol>
  </ul>
</div>

---

## **Changing Element Details**

- Change the locator setting in your test automation tool from **Link text** to **XPath**.
- This adjustment allows the recorder to identify the element based on its structure rather than just the text.
- If needed, manually update the captured link text to match the UI-visible text, ensuring the test case reflects what users see on the screen. ![updating element from link text](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/changing_element_details_from_linktext.gif)

[[info | NOTE:]]
| Using XPath or other reliable locators reduces the risk of capturing incorrect text, especially when differences exist between UI and HTML text.

---

## **Dealing with UI and HTML Text Mismatches**

- Compare the UI text with the HTML source to identify any inconsistencies that might cause the recorder to capture the wrong text.
- Modify your test case to use the visible UI text for element identification.
- Ensure the locator strategy aligns with the format users see in the UI.
- Consider using unique attributes like data-test-id or other identifiers instead of relying solely on link text. This approach minimises the risk of mismatches between the UI and HTML representations.

<style>
  .example-container {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.5em;
    margin: 0.5em 0;
    background-color: #f9f9f9;
  }
  .example-title {
    color: #004d00;
    font-weight: bold;
    display: flex;
    align-items: center;
  }
  .example-title span {
    margin-right: 5px;
  }
  .example-list {
    list-style: none;
    padding: 0;
  }
  .example-list li {
    margin-bottom: 0.5em;
  }
</style>

<div class="example-container">
  <div class="example-title">
    <span>ℹ️</span>Example:
  </div>
  <ul class="example-list">
      <p>If the UI shows <strong>SUBMIT</strong>, but the HTML has it as <strong>submit</strong>, adjust your test case using the visible UI text to account for this difference.</p>
    </ol>
  </ul>
</div>

[[info | NOTE:]]
| - You should implement more automated solutions (like XPath or unique attributes) to enhance test stability and reduce the need for ongoing manual intervention. 
| - In contrast, manual updates to captured text can resolve specific issues.

---


