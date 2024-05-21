---
title: "Cross-environment Compatible ID Locators (Android)"
page_title: "Cross-environment Compatible ID Locators"
metadesc: "Learn about cross-environment compatible ID locators and resource ID used for locating elements for android applications"
noindex: false
order: 23.69
page_id: Cross-environment Compatible ID Locators (Android)
warning: false
---

---

When we're automating Android applications, QA teams might get resource IDs that are environment-specific. These IDs typically follow the pattern **&lt;package\_name&gt;:id/&lt;id_value&gt;**

### **For Example:**
**io.testsigma.tsdemo:id/startUserRegistration**

Here, the package name **io.testsigma.tsdemo** may vary across different environments, such as:
- io.testsigma.tsdemobeta
- io.testsigma.tsdemoalpha

In these cases, it is important to parameterize the package name within the UI identifier.

### **Solution**

In such cases, it is recommended to use only the **&lt;id_value&gt;** portion of the resource ID. For the given example, **startUserRegistration** would be used.

Testsigma simplifies this process by automatically appending the appropriate package name, from the test app selected, to the resource ID.

**One more example:** Testsigma shows the attributes of selected elements on the login page below with ID values only.

![Example](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/dynlocandroid.png)

*For more information, refer to [create dynamic elements using parameter](https://testsigma.com/docs/elements/dynamic-elements/with-parameter-test-data/#creating-dynamic-elements-using-parameter).*

---