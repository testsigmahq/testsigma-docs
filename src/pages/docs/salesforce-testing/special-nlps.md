---
title: "Intro: Testsigma Special NLPs"
page_title: "Special NLPs"
metadesc: "With special NLPs, you can build & enhance Salesforce tests with ease, reducing test authoring time by 50%. This article discusses the capabilities of these special NLPs"
noindex: false
order: 28.8
page_id: "Special NLPs"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "List of Special NLPs"
  url: "#list-of-special-nlps"
- type: link
  name: "Using API NLP Test Steps"
  url: "#using-api-nlp-test-steps"
- type: link
  name: "NLP 1:"
  url: "#nlp-1"
- type: link
  name: "NLP 2:"
  url: "#nlp-2"
- type: link
  name: "NLP 3:"
  url: "#nlp-3"
- type: link
  name: "NLP 4:"
  url: "#nlp-4"
- type: link
  name: "NLP 5:"
  url: "#nlp-5"
- type: link
  name: "NLP 6:"
  url: "#nlp-6"
- type: link
  name: "NLP 7:"
  url: "#nlp-7"
- type: link
  name: "NLP 8:"
  url: "#nlp-8"
- type: link
  name: "NLP 9:"
  url: "#nlp-9"
- type: link
  name: "NLP 10:"
  url: "#nlp-10"
- type: link
  name: "NLP 11:"
  url: "#nlp-11"
- type: link
  name: "NLP 12:"
  url: "#nlp-12"
- type: link
  name: "NLP 13:"
  url: "#nlp-13"
- type: link
  name: "NLP 14:"
  url: "#nlp-14"
- type: link
  name: "NLP 15:"
  url: "#nlp-15"
- type: link
  name: "NLP 16:"
  url: "#nlp-16"
- type: link
  name: "NLP 17:"
  url: "#nlp-17"
- type: link
  name: "NLP 18:"
  url: "#nlp-18"
---

---

With Testsigma's special NLPs, you can scale and enhance Salesforce Testing. These NLPs are precisely developed to address challenges in Salesforce testing by leveraging Salesforce's synced metadata, which helps reduce test authoring time by 50%. This article discusses the capabilities of these special NLPs.


---

> ## **Prerequisites**
> 
> Before you begin, ensure you have a [Salesforce Connected App](https://testsigma.com/docs/salesforce-testing/connected-app/) with [Salesforce Metadata](https://testsigma.com/docs/salesforce-testing/metadata-connections/) connected to Testsigma.

---

## **List of Special NLPs**


| **NLP** | **Description** |
|----------|----------|
| [Login to Salesforce Application application using Salesforce Connection connection](https://testsigma.com/docs/salesforce-testing/special-nlps/#nlp-5) | This NLP logs into the Salesforce instance configured in Testsigma with the selected application and user connection. <br><br> **User Inputs in NLP:** <br> 1. Salesforce Application <br> 2. Salesforce Connection |
| [Login to Salesforce using Salesforce Connection](https://testsigma.com/docs/salesforce-testing/special-nlps/#nlp-4) | This NLP logs into the Salesforce instance configured in Testsigma with a chosen user connection. <br><br> **User Inputs in NLP:** <br>Salesforce Application <br> <br> **Note:** This is the default NLP for any test case. |
| [Switch to Salesforce Application application](https://testsigma.com/docs/salesforce-testing/special-nlps/#nlp-6) | This NLP switches to the application chosen from the list. <br><br> **User Inputs in NLP:** <br> Salesforce Application |
| [Navigate to Salesforce tab](https://testsigma.com/docs/salesforce-testing/special-nlps/#nlp-7) | This NLP navigates to the chosen tab within the same Salesforce application. <br><br> **User Inputs in NLP:** <br>Salesforce Tab |
| [Open the edit Salesforce Object form where record id is Record ID](https://website.testsigma.com/docs/salesforce-testing/special-nlps/#nlp-2)| This NLP opens the edit form in Salesforce for a specific record on the selected tab. <br><br> **User Inputs in NLP:** <br> 1. User Record ID <br> 2. Salesforce Object |
| [Open the create Salesforce Object record form](https://testsigma.com/docs/salesforce-testing/special-nlps/#nlp-9) | This NLP opens the Create Record form in Salesforce on the selected tab.<br><br> **User Inputs in NLP:** <br>Salesforce Object |
| [Open the Salesforce Object details page where record id is Record ID](https://testsigma.com/docs/salesforce-testing/special-nlps/#nlp-8) | This NLP Opens the View in Salesforce for a specific record on the selected tab. <br><br> **User Inputs in NLP:** <br> 1. User Record ID <br> 2. Salesforce Object |
| [Create record in Salesforce Object Form using Salesforce Connection connection and store the record id in variable test data](https://testsigma.com/docs/salesforce-testing/special-nlps/#nlp-1) | This NLP creates a record for a specific Salesforce object using the create record API. This process stores the RECORD\_ID in a variable. <br><br> **User Inputs in NLP:** <br> 1. Salesforce Connection<br> 2. Salesforce Object Form<br> 3. Variable to store RECORD\_ID |
| [Update record in Salesforce object form where record id is test data using  Salesforce connection connection](https://testsigma.com/docs/salesforce-testing/special-nlps/#nlp-17) | This NLP updates a record for a specific Salesforce object using the update record API. <br><br> **User Inputs in NLP:** <br> 1. Salesforce Connection<br> 2. Salesforce Object Form<br> 3. RECORD\_ID |
| [Select multiple options using value test data in the element multipicklist](https://testsigma.com/docs/salesforce-testing/special-nlps/#nlp-12) | This NLP selects values from a multipicklist. This NLP can also be recorded. <br><br> **User Inputs in NLP:** <br> 1. Test Data <br> 2. Choose Element <br> <br> **Note:** All the values should match the criteria for the NLP to work effectively.|
| [Remove multiple options using value test data in the element multipicklist](https://testsigma.com/docs/salesforce-testing/special-nlps/#nlp-13) | This NLP removes values from a multipicklist. This NLP can also be recorded. <br><br> **User Inputs in NLP:** <br> 1. Test Data <br> 2. Choose Element <br> <br> **Note:** All the values should match the criteria for the NLP to work effectively.|
| [Undo field in element](https://testsigma.com/docs/salesforce-testing/special-nlps/#nlp-11) | This NLP undoes the update on the selected field. This NLP can also be recorded. <br><br> **User Inputs in NLP:** <br> Choose Element |
| [Enter test data in the element richInput text box](https://testsigma.com/docs/salesforce-testing/special-nlps/#nlp-14) | This NLP enters the provided test data into the richInput textbox element. This NLP can also be recorded. <br><br> **User Inputs in NLP:** <br> 1. Test Data <br> 2. Element |
| [Search test data on element lookup](https://testsigma.com/docs/salesforce-testing/special-nlps/#nlp-15) | This NLP searches for the specified test data within the element lookup. This NLP can also be recorded. <br><br> **User Inputs in NLP:** <br> 1. Test Data <br> 2. Element |
| [Select option test data from element picklist](https://testsigma.com/docs/salesforce-testing/special-nlps/#nlp-16) | This NLP selects the specified option from the picklist element using test data. This NLP can also be recorded. <br><br> **User Inputs in NLP:** <br> 1. Test Data <br> 2. Element |
| [Clear and enter test data in the element field](https://testsigma.com/docs/salesforce-testing/special-nlps/#nlp-10) | This NLP will clear any existing data in the element field and then enter the test data into that field. <br><br> **User Inputs in NLP:** <br> 1. Test Data <br> 2. Element |
| [Delete record in Salesforce Object where record id is test data using Salesforce Connection connection](https://testsigma.com/docs/salesforce-testing/special-nlps/#nlp-3) | This NLP deletes a record using RECORD\_ID for a specific Salesforce object using the delete record API. <br><br> **User Inputs in NLP:** <br> 1. RECORD_ID <br> 2. User Connection<br> 3. Salesforce Object |
|[Get record details from Salesforce Object Form for RECORD\_ID test data using Salesforce Connection connection](https://testsigma.com/docs/salesforce-testing/special-nlps/#nlp-18)| This NLP will fetch record details of the Salesforce Object Form with the selected object fields. It also allows you to store Variables and add Verifications directly from the Response Body. <br><br> **User Inputs in NLP:** <br> 1. Salesforce Object Form <br> 2. RECORD_ID <br> 3. Salesforce Connection |

---

## **Using API NLP Test Steps**

Let's say you want to automate the creation of a Salesforce Lead record.
To create a lead record, navigate to the **Leads** tab, click **New**, and fill out the form with details such as the lead's name, company, contact information, and descriptions. After entering the necessary information, save the record. The lead will be available for future actions, such as follow-ups or conversion into an account, contact, or opportunity.

Guess what? With Testsigma, you can perform all these actions in a single API step using the following NLP:

## **NLP 1:** 

"Create record in **Salesforce Object Form** using **Salesforce Connection** connection and store the record id in variable **test data**"

This NLP creates a new record for the selected **Salesforce object**.

See the GIF below demonstrating how to use this NLP.

![Create Lead](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/CreateAPISF.gif)

[[info | **NOTE**:]]
| You can also select the **Record Type** when entering details in the API step. However, ensure you only enter details relevant to that specific **Record Type**, or the test case will fail.
| ![Record Type](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/API_Record_Type.png)

---

## **NLP 2:** 

"Open the edit **Salesforce Object** form where record id is **Record ID**"

This NLP opens edit form of the selected **Salesforce object** using **Record ID**.

See the GIF below demonstrating how to use this NLP.

![Edit Lead](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Editleadsf.gif)

---

## **NLP 3:** 

"Delete record in **Salesforce Object** where record id is **test data** using **Salesforce Connection** connection"

This NLP deletes a record for the selected **Salesforce object** using **Record ID**.

See the GIF below demonstrating how to use this NLP.

![Delete Lead](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/deletesflead.gif)


---

## **NLP 4:** 

"Login to Salesforce using **Salesforce Connection** connection"

This NLP enables users to log in to Salesforce with a selected user connection.

See the GIF below demonstrating how to use this NLP.

![Login NLP](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/LoginSFNLP.gif)

---

## **NLP 5:**

"Login to **Salesforce Application** application using **Salesforce Connection** connection"

This NLP allows users to log in directly to a specific **Salesforce Application** using a selected **User Connection**.

For example, select **Sales** from the dropdown to log in to **Sales CRM**.

See the GIF below demonstrating how to use this NLP.

![Login NLP 2](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/LoginSpecificAppNLP.gif)

---

## **NLP 6:**

"Switch to **Salesforce Application** application"

This NLP lets users switch to a specific **Salesforce Application**. Choose the application from the available options in the dropdown.

For example, select the **HubSpot** application from the dropdown to switch from **Sales** to **HubSpot**.

See the GIF below demonstrating how to use this NLP.

![Switch NLP](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/SwitchNLPUpdated.gif)

---

## **NLP 7:**

"Navigate to **Salesforce** tab"

This NLP navigates users to any standard tabs on the **Salesforce** platform. 

See the GIF below demonstrating how to use this NLP.

![Navigation NLP](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/NavigateNLP.gif)

---

## **NLP 8:**

"Open the **Salesforce Object** details page where record id is **Record ID**"

This NLP navigates to the record details page using the **Record ID** on the selected **Salesforce object**. 

For example, to open the record details page of a specific lead, use this NLP.

See the GIF below demonstrating how to use this NLP.

![Object Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ViewSFObject.gif)

---

## **NLP 9:**

"Open the create **Salesforce Object** record form"

This NLP opens the create new record form for the selected **Salesforce object**.

For example, to create a new lead, use this NLP.

See the GIF below demonstrating how to use this NLP.

![New Record](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/OpenNewObject.gif)

---

## **NLP 10:**

"Clear and enter **test data** in the **element** field"

This NLP clears the data in a specified form field and replaces it with **test data**.

For example, to replace a URL in the website field of the lead details form, use this NLP.

See the GIF below demonstrating how to use this NLP.

![Clear & Enter](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ClearEnterNLPSF.gif)

---

## **NLP 11:**

"Undo field in **element**"

Use this NLP to undo changes in a specified field, restoring the previous data.

For example, to replace a URL with a previous one in the website field of the lead details form, use this NLP.

See the GIF below demonstrating how to use this NLP.

![Undo NLP](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/UndoFieldSF.gif)

---

## **NLP 12:**

"Select multiple options using value **test data** in the **element** multipicklist"

Use this NLP to select values in **multipicklist** into an **element**.

See the GIF below demonstrating how to use this NLP.

![Select Multiple Values](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/MultiSelectRemoveNLP.gif) 

---

## **NLP 13:**

"Remove multiple options using value **test data** in the **element** multipicklist"

Use this NLP to remove multiple options from a **multipicklist** into an **element**.

See the GIF below demonstrating how to use this NLP.

![Remove Multiple Values](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/MultiSelectRemoveNLP.gif)

---

## **NLP 14:**

"Enter **test data** in the **element** richInput text box"

Use this NLP to enter data in a **RichInput text box**.

See the GIF below demonstrating how to use this NLP.

![Rich Input](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/RichInputsNLP.gif)

---

## **NLP 15:**

"Search **test data** on **element** lookup"

Use this NLP to select or record in a lookup field.

See the GIF below demonstrating how to use this NLP.

![Lookup NLP](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/LookupNLPSF.gif)

---

## **NLP 16:**

"Select option **test data** from **element** picklist"
    
Use this NLP to select an option from a picklist element.

See the GIF below demonstrating how to use this NLP.

![Element Picklist](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/SinglePickNLP.gif)

---

## **NLP 17:**

"Update record in **Salesforce object** form where record id is **test data** using  **Salesforce connection** connection"
    
This NLP feature updates a Salesforce record with the details you enter in the API step using the specified **Record ID**.

See the GIF below demonstrating how to use this NLP.

![Element Picklist](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/SalesforceUpdateNLP.gif)


---

## **NLP 18:**

“Get record details from **Salesforce Object Form** for **RECORD\_ID** test data using **Salesforce Connection** connection”


### **Using the NLP in a Test Case**


1. Click on **Salesforce Object Form**, choose **Record** from the dropdown menu, and click **Select Fields**.

2. On the **Manage Fields for Account** overlay, select the fields for which you want to retrieve info and click **Save**.

   [[info | **NOTE**:]]
   | If no fields are selected, the response body will include all available fields.

3. Go to the **Request Info** tab, enter the **Record ID** and select the available **Salesforce Connection**. You can parameterize the **Record ID** by entering a slash (**/**). Add mock values by clicking **Add Request Values** if the field is parameterized.

4. Click **Send Request**.

5. From the **Response Body**, you can store **Variables** and add **Verifications** directly as needed.


See the GIF below demonstrating how to use this NLP.

![Get Record Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/SF_Read_API.gif)

---