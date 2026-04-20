---
title: "Test Cases for Salesforce (Manual + Live)"
page_title: "Build Test Cases for Salesforce Testing"
metadesc: "Creating test cases for Salesforce automation is easy with Salesforce metadata artifacts and capabilities from Testsigma like smart NLPs, and the debugger"
noindex: false
order: 28.7
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

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that you have referred to:
> 1. [Documentation on Salesforce Connected App](https://testsigma.com/docs/salesforce-testing/connected-app/).
> 2. [Documentation on Salesforce Metadata](https://testsigma.com/docs/salesforce-testing/metadata-connections/) connected to Testsigma.
> 3. <a href="https://chromewebstore.google.com/detail/testsigma-recorder/epmomlhdjfgdobefcpocockpjihaabdp" rel="nofollow">Documentation on installing Testsigma Chrome Extension</a> on your browser.

---

## **Steps to Create Test Cases for Salesforce**

1. Navigate to **Create Tests > Test Cases** and create a test case. 
![Test Cases](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_sf_tc_1.png)

2. From the **Test Case Details** page, you can create the test steps for your test case using either of the following methods:
    - Write test steps manually using **Smart NLPs** by clicking **Add new step**.
    - Use **Copilot** to record steps.
![Manual + Live](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_sf_tc_2.png)

3. Once the test steps are created, click on **Run** to execute the Test Case. 
![Run](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_sf_tc_3.png)

[[info | **NOTE**:]]
| For advanced options, refer to the [documentation on configuring test case advanced options](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#test-case----advanced-options).

---

## **Sample Test Case for Salesforce Automation**
Let's say we have a scenario where we want to log in to Salesforce, navigate to the Sales tab, create a Lead record, and Edit the record form. Regular UI interactions require a lot of steps. However, with Testsigma's smart NLPs, we can automate the same flow in just four steps.

1. Use the NLP, **Login to Salesforce application using *Salesforce Connection* connection**.
Here, we can choose a connection or create a connection by clicking on **Add Connection**. 
![Add Connection](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_sf_tc_4.png)

2. Use the NLP, **Switch to *Application*** and replace application from the dropdown. 
![Sales](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_sf_tc_5.png)

3. Use the NLP, **Create record in *Salesforce Object Form* using *Salesforce Connection* and store the record id in variabel *test data**. This is an API step.
![API Step](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_sf_tc_6.png)

   - Click **Salesforce Object Form**. This will open **Create record using API** overlay. 
    ![API Overlay](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_sf_tc_7.png)

   - Choose the object form **Select object** dropdown menu. Alternatively, you can also search & choose the **Object Form**. This will open the form where we need to enter the details.
    ![Object Form](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_sf_tc_8.png)

   - The form populates for the selected object. Enter data in the fields and click **Save**. Only the selected fields are sent in the API request. 
    ![Save Form](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_sf_tc_9.png)
  
  - Click **Salesforce Connection** and choose the available connection from the dropdown menu. 
    ![Salesforce Connection](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_sf_tc_10.png)
    
   - Store the **Record ID** in a variable, which we’ll call **Lead Records** here. We can use this variable in the next test step to edit a record or across any test cases.
    ![Lead Records](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_sf_tc_11.png)

4. Use the NLP, **Open the edit *Salesforce Object* form where record is *Record ID***. Here, you open the edit form using the **$ Runtime** test data type with the **Record ID** stored in the variable from the previous step.
![Runtime Variable](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_sf_tc_12.png)

5. Click **Copilot**. 
![Record](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_sf_tc_13.png)

6. In the Debug & Record overlay, verify the Copilot is ready and click **Launch**
![Launch](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_sf_tc_14.png)

7. In the **Copilot** dialog, click **Rec** and perform the desired actions on the application. Once done, click **Stop Recording**, then click **Exit Copilot** to save the recorded test steps to the test case details page.
![Stop Recording](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_sf_tc_15.png)

8. In the **Stop & Exit Session** dialog, click **Stop Session**. 
![Stop session](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_sf_tc_16.png)

9. Refresh the **Test Case Details** page to see all the recorded steps. 
![Test Case Details](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_sf_tc_17.png)


---

## **Parametrization of Login NLP**

1. From the **Test Case Details** page, create the test steps using the inbuilt Login NLP.
![Test Step](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_sf_tc_18.png)

2. Click on **Salesforce Connections**, type ‘**/**’ and choose ***Environment** from the dropdown menu. 
![Parametrize](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_sf_tc_19.png)

[[info | **NOTE**:]]
| You can choose any **test data type** as needed from the dropdown menu.

3. In the ***Environment** overlay, select an environment from the available Environments.
![Env Overlay](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_sf_tc_20.png)

[[info | **NOTE**:]]
| Make sure that the value added in **Environment** has the same name as in **User Connections**.

---