---
title: "Disable, Hide, Check & Select Elements"
page_title: "Check if Element is Enabled, Visible, & Interactable"
metadesc: "Learn different ways to check if an element is enabled, visible, and interactable. Understand different ways to disable, hide, check and select elements"
noindex: false
order: 23.91
page_id: "Verify if an Element is Enabled, Visible, & Interactable"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Different Ways to Disable Elements"
  url: "#different-ways-to-disable-elements"
- type: link
  name: "Different Ways to Hide Elements"
  url: "#different-ways-to-hide-elements"
- type: link
  name: "Different Ways to Check Elements"
  url: "#different-ways-to-check-elements"
- type: link
  name: "Different Ways to Select Elements"
  url: "#different-ways-to-select-elements"
---

---

Understanding how to disable, hide, check, and select elements is important to create reliable tests. It helps interact with dynamic content accurately. This article discusses different ways to disable, hide, check and select elements. 

---

## **Different Ways to Disable Elements**

**1. Enabled State**

The disabled attribute is a boolean attribute that, when applied, indicates the element should be disabled. A disabled element will be unusable and unclickable.

- **Applicable elements:** &lt;button&gt;, &lt;fieldset&gt;, &lt;input&gt;, &lt;optgroup&gt;, &lt;option&gt;, &lt;select&gt;, &lt;textarea&gt;.


**2. Read-Only State**

The readonly attribute is also a boolean attribute. It specifies that an input field or text area is read-only when applied. While a user can focus, highlight, and copy text from a readonly field, they cannot modify its content.

- **Applicable Elements:** &lt;input&gt;, &lt;textarea&gt;.


### **Examples:**

```<textarea id="description" class="description box" readonly>``` <br>
```<button id="login" class="loginbtn btn primary" disabled>```

---

## **Different Ways to Hide Elements**

**1. CSS Display Property:** Setting an element’s CSS display property to ***none*** makes it invisible. 

**2. HTML Hidden Attribute:** The ***hidden*** attribute is a boolean attribute that hides the element when present.

**3. Setting Width and Height to Zero:** If an element’s width & height are set to zero, it won’t be visible. 

### **Examples:**

```<button id="login" class="loginbtn btn primary" hidden>``` <br>

```<button id="login" class="loginbtn btn primary" style="display:none;">``` <br>

```<button id="login" class="loginbtn btn primary" style="width:0px,height:0px;">``` 

---

## **Different Ways to Check Elements**

The checked attribute is used for &lt;input&gt; elements of type checkbox or radio. When present, it indicates that the element should be checked. 

- **Applicable Elements:** &lt;input&gt;

### **Examples:**

```<input type="checkbox" id="username" checked>```


---

## **Different Ways to Select Elements**

The selected attribute is a boolean attribute. When present, it specifies that an option should be pre-selected when the page loads. The pre-selected option will be displayed first in the drop-down list.

**Applicable Elements:** &lt;option&gt;

### **Examples:**

```
<select>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="vw">VW</option>
  <option value="audi" selected>Audi</option>
</select>

```

---