---
title: "Test Cases for Salesforce (Manual + Live)"
page_title: "Build Test Cases for Salesforce Testing"
metadesc: "Creating test cases for Salesforce automation is easy with Salesforce metadata artifacts and capabilities from Testsigma like smart NLPs, and the debugger"
noindex: false
order: 29.6
page_id: "Test Cases for Salesforce"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Create Test Cases for Salesforce"
  url: "#steps-to-create-test-cases-for-salesforce"
- type: link
  name: "Sample Test Case for Salesforce Automation"
  url: "#sample-test-case-for-salesforce-automation"
---


---

With Testsigma, creating test cases for Salesforce is easy as we can leverage Metadata artifacts, smart NLPs, and the debugger to Automate Salesforce Testing. Metadata artifacts help auto-learn Salesforce components, smart NLPs simplify test scenario expression, and the debugger facilitates real-time test authoring. This article discusses creating test cases for Salesforce Automation and using the debugger for Live Test Authoring in Testsigma. 

Here’s a quick video demonstrating how create test cases for Salesforce testing. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/bbhvPHlZ4MU?si=GtyrMu8FUWfEfDgP" title="Build Test Cases for Salesforce Testing with Ease!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## **Prerequisites**

- A Salesforce organization with the test setup
- A Salesforce connected app
- Salesforce metadata connected to Testsigma
- [Testsigma Chrome Extension](https://chromewebstore.google.com/detail/testsigma-recorder/epmomlhdjfgdobefcpocockpjihaabdp)

---

## **Steps to Create Test Cases for Salesforce**

1. Navigate to **Create Tests > Test Cases** and click on **Create Test Case**. 
![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sftcsnav.png)

2. From the **Test Case Details** page, you can create the test steps for your test case using either of the following methods:
    - Write test steps manually using **Smart NLPs** by clicking **Add new step**.
    - Use **Recorder** to record steps.
![Manual + Live](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sftcmanarec.png)

3. Once the test steps are created, click on **Run** to execute the Test Case. 
![Run](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sftcsrun.png)

[[info | **NOTE**:]]
| For advanced options, refer to [test case advanced options](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#test-case----advanced-options).

---

## **Sample Test Case for Salesforce Automation**
Let's say we have a scenario where we want to log in to Salesforce, navigate to the Sales tab, create a Lead record, and Edit the record form. Regular UI interactions require a lot of steps. However, with Testsigma's smart NLPs, we can automate the same flow in just four steps.

1. Use the NLP, **Login to Salesforce using *Salesforce Connection***.
Here, we can choose a connection or create a connection by clicking on **Add Connection**. 
![Add Connection](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sftcltsf.png)

2. Use the NLP, **Switch to *Application*** and replace application from the dropdown. 
![Sales](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sftcsts.png)

3. Use the NLP, **Create record using *Salesforce Connection* in *Salesforce Object Form* and store *RECORD_ID* in variable *test data***.
![API Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sftcslrds.png)

This is API Step where we create a **Lead** record using **Salesforce Connection** in **Lead** and store the record ID in a **Variable**. We will use this variable to open the editing form with the **record ID**.

4. Use the NLP, **Open edit form for record with *Record ID* on *Salesforce Object***.
Here, we open the edit form with the record ID stored in the variable in the previous step. 
![Edit Form](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sftcerf.png)

5. Click on **Record**. This will open a Chrome window along with the test recorder. All the steps will be executed up to that point, and you can start recording UI interactions by clicking on the play icon. 
![Record](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sftccor.png)

6. Perform the actions and click on **Stop Recording**. This will open the **Stop Web Debugger** warning prompt. 
![Stop Recording](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sftcdbp.png)

7. On the **Stop Web Debugger** run warning prompt, click on **Stop**.
![Stop Warning](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sftcsdbwp.png)

8. Refresh the **Test Case Details** page to see all the recorded steps. 
![Test Case Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sftcsrttcp.png)


---