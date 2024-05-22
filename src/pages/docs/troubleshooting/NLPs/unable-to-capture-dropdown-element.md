---
title: "Unable to capture dropdown element"
metadesc: " What to do if you are not able to capture drop-down element."
noindex: false
order: 23.12
page_id: "Unable to capture dropdown element"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Dropdowns using <select> tag"
  url: "#dropdowns-using-select-tag"
- type: link
  name: "Dropdowns using non <select> tag"
  url: "#dropdowns-using-non-select-tag"
- type: link
  name: "Verfiy if a dropdown has a select tag"
  url: "#verify-if-a-dropdown-has-a-select-tag"
---

---

A dropdown list is a commonly used graphical control element that allows users to select a value from the list. Many modern day applications implement dropdowns using **\<select>**,**\<div>**, **\<a>**, or **\<span>**. This article discusses on how to handle dropdowns using NLP's in Testsigma.

---

## **Dropdowns using \<select> tag**

The **\<select>** tag is most often used in a form, to collect user input. The following is the syntax of a **\<select>** tag:


```

    <select>
         <option></option>
        ...
        <option></option>
    </select>
```

Select NLPs work for dropdowns that use the **\<select>** tag. The following are the different NLPs that can be used:

### **Select multiple options**

- *Select multiple options using value test-data in the element list*
- *Select multiple options by text test-data in the element list*
-  *Select multiple options by index test-data in the element list*

### **Select option using index**

- *Select option with index test-data in the button group element*
- *Select option by index test-data in the list with title attribute*
- *Select option by index test-data in the list with label text attribute*
- *Select option by index test-data in the element list*
- *Select option by index test-data in the list with text attribute*
- *Select option by index test-data in the list with label text containing attribute*
- *Select option by index test-data in the list with text containing attribute*


### **Select option using label**

- *Select option with label containing test-data in the button group element*
- *Select option with label test-data in the button group element*
- *Select option with label test-data in the radio button group element*

### **Select option using value**

- *Select option using value contains test-data in the element list*
- *Select option contains text test-data in the element list*
- *Select option using value test-data in the list with title attribute*
- *Select option using value test-data in the list with label text attribute*
- *Select option using value test-data in the element list*
- *Select option using value test-data in the list with text attribute*
- *Select option using value test-data in the list with label text containing attribute*
- *Select option using value test-data in the list with text containing attribute*

### **Select option using text**

- *Select option with text containing test-data in the button group element*
- *Select option with text test-data in the button group element*
- *Select option by text test-data in the list with title attribute*
- *Select option by text test-data in the list with label text attribute*
- *Select option by text test-data in the element list*
- *Select option by text test-data in the list with text attribute*
- *Select option by text test-data in the list with label text containing attribute*
- *Select option by text test-data in the list with text containing attribute*


---

## **Dropdowns using non \<select> tag**

Use any of the below NLP's for dropdown associated with **\<div>**, **\<a>**, or **\<span>**:

- *Click on element with text test-data*
- *Click on element with text containing test-data*
- *Click on coordinates test-data (% of width , % of height from element top left) inside element element*
- *Click on element if visible*
- *Click on element*
-*Click on element using javascript executor*

---

## **Verify if a dropdown has a select tag**

1.	Right-click on the element and select **Inspect** from the drop-down list.![inspect element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/troubleshooting/NLPs/unable-to-capture-select-element/inspect_drop_down.png)
2.	Check if the element is attached to the  \<select> tag as shown in the below screen shot.![select tag](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/troubleshooting/NLPs/unable-to-capture-select-element/select_tag.png)<br><br>

If the element is attached to the \<select> tag use any of the following suitable NLP’s explained in the section [dropdowns using \<select> tag](#dropdowns-using-select-tag).<br><br>
If the element uses any of the non \<select> dropdown use cases, use any of the suitable NLPs explained in the section [dropdowns using non \<select> tag](#dropdowns-using-non-select-tag). 


---