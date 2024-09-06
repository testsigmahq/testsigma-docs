---
title: "Salesforce Element Repositories"
page_title: "Element Repositories"
metadesc: "Elements repositories from Salesforce are imported after successfully synchronizing metadata. This article discusses Salesforce elements repositories."
noindex: false
order: 28.7
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
- type: link
  name: "Creating Elements While Creating Test Steps"
  url: "#creating-elements-while-creating-test-steps"
- type: link
  name: "Verifying Pre-learnt Salesforce Elements"
  url: "#verifying-pre-learnt-salesforce-elements"
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


---

## **Creating Elements While Creating Test Steps**

1. Create a test case and click **Debug & Record**.
   ![Debug and Record](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/debug_Record_SF_Elem.png)

2. In the **Debug & Record** overlay, verify that the agent is live, then click **Proceed**.
   ![Proceed](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Proceed_SF_Elem.png)

3. In the **Testsigma Debugger & Recorder**, click element in the NLP and select **Create Element** from the dropdown menu.
   ![Create Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/CreateElement_SF.png)

4. Click the UI element, which you want to capture. The recorder automatically captures the element details.
   ![Element Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Elem_Details_SF.png)

5. Verify the element, then click **Create**.
   ![Create Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/VerifyandCreate_SF_Elem.png)

---


## **Verifying Pre-learnt Salesforce Elements**

1. Click element which has the [naming conventions](https://testsigma.com/docs/salesforce-testing/element-repos/#naming-conventions) as mentioned in the above section.

2. Click **View/Edit Element** from the dropdown menu on the **Testsigma Debugger & Recorder**.
   ![View/Edit Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/SF_VieworEdit_Elem.png)

3. A new overlay appears, indicating that the element is a standard Salesforce element and has been pre-learned.
   ![Pre-learnt Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Prelearnt_Widget.png)

---