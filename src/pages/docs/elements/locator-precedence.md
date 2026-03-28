---
title: "Locator Precedence in Test Recorder"
metadesc: "Enhance element recording process by defining locator precedence on the test recorder for Link Text, Name, ID, CSS Selector, and XPath based on the priority."
noindex: false
order: 6.92
page_id: "Locator Precedence"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Configuring Locator Precedence"
  url: "#configuring-locator-precedence"
---

---


While creating tests for web applications, identifying locators accurately for UI elements is important. In Testsigma, you can enhance this process by defining locator precedence on the test recorder. This will prioritize fetching locators such as Link Text, Name, ID, CSS Selector, and XPath based on the priority specified on the recorder, which selects the static and unique locator. This prioritization continues until a locator that meets these criteria is identified.


---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that:
> 1. You have installed the Testsigma Chrome Extension. For more information on installing Testsigma Chrome Extension, refer to the [documentation on Testsigma Chrome Extension](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/). 
> 2. You have a web application that is available for testing.

---

## **Configuring Locator Precedence**

1. From the left navigation bar, go to **Create Tests > Elements**. 
![Record](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/update_locator_1.png)

2. In the Elements list page, click **Record**.
![Record](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/update_locator_2.png)

3. This will open a new window with the test recorder and will be ready to start recording. Here, we entered the URL for Simply Travel Web. 
![Window](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/update_locator_3.png)

4. On the test recorder, click on **Locator precedence**.
![Locator Precedence](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/update_locator_4.png)

5. This will open the **Locator precedence** overlay on **Recorder**. 
![Recorder](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/update_locator_5.png)

6. Use the **Drag Handle** to configure the priority of locators. 
![Drag Handle](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/update_locator_6.png)

[[info | **NOTE**:]]
| The **Locator precedence** configured for an application from a specific user accessible only to the same user & configured application. 

7. Click on **Save** to save the configuration. 
![Save](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/update_locator_7.png)

[[info | **NOTE**:]]
| Testsigma will revert to the default **Locator precedence** if you don't save the configuration.

---