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

> ## **Prerequisites**
>
>
> Before you begin, ensure that the [Testsigma Chrome Extension](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/) is installed and a web application is available for testing.

---

## **Configuring Locator Precedence**

1. From the left navigation bar, go to **Create Tests > Elements** and click **Record**.
![Record](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/lprerec.png)

2. This will open a new window with the test recorder and will be ready to start recording. Here, we entered the URL for Simply Travel Web. 
![Window](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/lpstws.png)

3. On the test recorder, click on **Locator precedence**.
![Locator Precedence](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/lpbotsrec.png)

4. This will open the **Locator precedence** overlay on **Recorder**. 
![Recorder](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/lplpovrly.png)

5. Use the **Drag Handle** to configure the priority of locators. 
![Drag Handle](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/lopredlpdrghndlrghndl.png)

[[info | **NOTE**:]]
| The **Locator precedence** configured for an application from a specific user accessible only to the same user & configured application. 

6. Click on **Save** to save the configuration. 
![Save](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/lpsve.png)

[[info | **NOTE**:]]
| Testsigma will revert to the default **Locator precedence** if you don't save the configuration.


Here's a quick GIF demonstrating how to configure locator precedence in test recorder.

![Test Recorder](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/lctr.gif)


---