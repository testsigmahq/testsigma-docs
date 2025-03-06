---
title: "Test Cases for Salesforce (Manual + Live)"
page_title: "Build Test Cases for Salesforce Testing"
metadesc: "Creating test cases for Salesforce automation is easy with Salesforce metadata artifacts and capabilities from Testsigma like smart NLPs, and the debugger"
noindex: false
order: 28.6
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
- type: link
  name: "Parametrization of Login NLP"
  url: "#parametrization-of-login-nlp"
---


---

With Testsigma, creating test cases for Salesforce is easy as we can leverage Metadata artifacts, smart NLPs, and the debugger to Automate Salesforce Testing. Metadata artifacts help auto-learn Salesforce components, smart NLPs simplify test scenario expression, and the debugger facilitates real-time test authoring. This article discusses creating test cases for Salesforce Automation and using the debugger for Live Test Authoring in Testsigma. 

---

> ## **Prerequisites**
>
>
> Before you begin, ensure you have a Salesforce organization set up with a [Salesforce Connected App](https://testsigma.com/docs/salesforce-testing/connected-app/) and [Salesforce Metadata](https://testsigma.com/docs/salesforce-testing/metadata-connections/) connected to Testsigma. Additionally, install the [Testsigma Chrome Extension](https://chromewebstore.google.com/detail/testsigma-recorder/epmomlhdjfgdobefcpocockpjihaabdp) on your browser.


---

## **Steps to Create Test Cases for Salesforce**

1. Navigate to **Create Tests > Test Cases** and click on **Create Test Case**. 
![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfnavtcs.png)

2. From the **Test Case Details** page, you can create the test steps for your test case using either of the following methods:
    - Write test steps manually using **Smart NLPs** by clicking **Add new step**.
    - Use **Debugger** to record steps.
![Manual + Live](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sftcslpdbe.png)

3. Once the test steps are created, click on **Run** to execute the Test Case. 
![Run](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sftcrun.png)

[[info | **NOTE**:]]
| For advanced options, refer to [test case advanced options](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#test-case----advanced-options).

---

## **Sample Test Case for Salesforce Automation**
Let's say we have a scenario where we want to log in to Salesforce, navigate to the Sales tab, create a Lead record, and Edit the record form. Regular UI interactions require a lot of steps. However, with Testsigma's smart NLPs, we can automate the same flow in just four steps.

1. Use the NLP, **Login to Salesforce using *Salesforce Connection***.
Here, we can choose a connection or create a connection by clicking on **Add Connection**. 
![Add Connection](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sftcltsfts.png)

2. Use the NLP, **Switch to *Application*** and replace application from the dropdown. 
![Sales](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sftcsapp.png)

3. Use the NLP, **Create record using *Salesforce Connection* in *Salesforce Object* Form and store *RECORD_ID* in variable test data**. This is an API step.
![API Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Choose_SalesforceConnection.png)
   - Click **Salesforce Connection** and choose the available connection from the dropdown menu. 
    ![Salesforce Connection](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Choose_SF_Connection.png)

   - Click **Salesforce Object Form**. This will open **Create record using API** overlay. 
    ![API Overlay](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/API_Overlay_SF.png)

   - Choose the object form **Select object** dropdown menu. Alternatively, you can also search & choose the **Object Form**. This will open the form where we need to enter the details.
    ![Object Form](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Objects_Dropdown_SF.png)

   - The form populates for the selected object. Enter data in the fields and click **Save**. Only the selected fields are sent in the API request. 
    ![Save Form](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Save_Details_SFAPI.png)
    
   - Store the **Record ID** in a variable, which we’ll call **Lead Records** here. We can use this variable in the next test step to edit a record or across any test cases.
    ![Lead Records](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/LeadRecord_SF.png)

4. Use the NLP, **Open the edit form for the record with the *Record ID* on the *Salesforce Object***. Here, you open the edit form using the **$ Runtime** test data type with the **Record ID** stored in the variable from the previous step.
![Runtime Variable](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Runtime_Variable_SF.png)

5. Click on **Debug & Record**. This will open a Chrome window along with the test recorder. All the steps will be executed up to that point, and you can start recording UI interactions by clicking on the play icon. 
![Record](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sftcdbarec.png)

6. Perform the actions and click on **Stop**. This will open the **End session** warning prompt. 
![Stop Recording](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sftctsdbarcscn.png)

7. On the **End session** warning prompt, click on **Stop**.
![Stop Warning](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/dbgstop.png)

8. Refresh the **Test Case Details** page to see all the recorded steps. 
![Test Case Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sftcalltss.png)


---

## **Parametrization of Login NLP**

1. From the **Test Case Details** page, create the test steps using the inbuilt Login NLP.
![Test Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/polnts.png)

2. Click on **Salesforce Connections**, type ‘**/**’ and choose ***Environment** from the dropdown menu. 
![Parametrize](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/polnen.png)

[[info | **NOTE**:]]
| You can choose any **test data type** as needed from the dropdown menu.

4. In the ***Environment** overlay, select an environment from the available Environments.
![Env Overlay](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/polnenol.png)

[[info | **NOTE**:]]
| Make sure that the value added in **Environment** has the same name as in **User Connections**.

---