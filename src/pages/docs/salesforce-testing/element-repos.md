---
title: "Salesforce Element Repositories"
page_title: "Element Repositories"
metadesc: "Elements repositories from Salesforce are imported after successfully synchronizing metadata. This article discusses Salesforce elements repositories."
noindex: false
order: 27.7
page_id: "Element Repositories"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Naming Conventions"
  url: "#naming-conventions"
- type: link
  name: "Steps to Check Element Repositories"
  url: "#steps-to-check-element-repositories"
---

---

In Testsigma, elements from Salesforce are automatically learned after successfully synchronizing metadata. This enables the swift usage of elements in test cases, eliminating the need to create elements manually. This document discusses the repositories of Salesforce elements.

---

> ## **Naming Conventions**
> 
> 1. **Field Names:** This will be in the **ObjectName_FieldName** format.
>    - **Example:** If the element name is **Account_CreatedDate**, **Account** is the object, and the created date **Field** is **CreatedDate**.
>
> 2. **Screen Names:** Generally, the name displayed on the UI screen is the object name.
>    - **Example:** A screen displaying account details should be named **Account**.

[[info | **NOTE**:]]
| Element names should be unique to avoid conflicts.


---

## **Steps to Check Element Repositories**


1. Navigate to **Create Tests > Test Cases**, and open any test case or create a test case. 
![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfertcs.png)

2. From the **Test Case Details** page, add test steps and hover over the element and click on **Select Element** from the dropdown. 
![Test Case Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sferse.png)

3. This will open the **Elements** overlay, where you can see all the elements. 
![Overlay](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sferoverlay.png)

[[info | **NOTE**:]]
| Since the elements are auto-learned, you can't edit them.

4. You can also create the element manually by clicking on **Create Element**. 

ℹ️   For more information, refer to [creating elements manually](https://testsigma.com/docs/elements/web-apps/create-manually/).

---