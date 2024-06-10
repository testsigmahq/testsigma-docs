---
title: "Intro: Testsigma Special NLPs"
page_title: "Special NLPs"
metadesc: "With special NLPs, you can build & enhance Salesforce tests with ease, reducing test authoring time by 50%. This article discusses the capabilities of these special NLPs"
noindex: false
order: 27.8
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
---

---

With Testsigma's special NLPs, you can scale and enhance Salesforce Testing. These NLPs are precisely developed to address challenges in Salesforce testing by leveraging Salesforce's synced metadata, which helps reduce test authoring time by 50%. This article discusses the capabilities of these special NLPs.


---

## **Prerequisites**

- Salesforce connected app. For more information, refer to [creating a connected app](https://testsigma.com/docs/salesforce-testing/special-nlps/).

- Salesforce metadata connected to Testsigma. For more information, refer to [creating metadata connections](https://testsigma.com/docs/salesforce-testing/metadata-connections/).

---

## **List of Special NLPs**


| **NLP** | **Description** |
|----------|----------|
| Login to **Salesforce Application** using **Salesforce Connectio**n | This NLP logs into the Salesforce instance configured in Testsigma with the selected application and user connection. <br><br> **User Inputs in NLP:** <br> 1. Salesforce Application <br> 2. Salesforce Connection |
| Login to Salesforce using **Salesforce Connection** | This NLP logs into the Salesforce instance configured in Testsigma with a chosen user connection. <br><br> **User Inputs in NLP:** <br>Salesforce Application <br> <br> **Note:** This is the default NLP for any test case. |
| Switch to **Salesforce Application** | This NLP switches to the application chosen from the list. <br><br> **User Inputs in NLP:** <br> Salesforce Application |
| Navigate to **Salesforce** tab | This NLP navigates to the chosen tab within the same Salesforce application. <br><br> **User Inputs in NLP:** <br>Salesforce Tab |
| Open edit form for record with **Record ID** on **Salesforce Object** tab | This NLP opens the edit form in Salesforce for a specific record on the selected tab. <br><br> **User Inputs in NLP:** <br> 1. User Record ID <br> 2. Salesforce Object |
| Create new record on **Salesforce Object** tab | This NLP opens the Create Record form in Salesforce on the selected tab.<br><br> **User Inputs in NLP:** <br>Salesforce Object |
| Open view for record with **Record ID** on **Salesforce Object** tab | This NLP Opens the View in Salesforce for a specific record on the selected tab. <br><br> **User Inputs in NLP:** <br> 1. User Record ID <br> 2. Salesforce Object |
| Create record using **Salesforce Connection** in **Salesforce Object** form and store the **RECORD\_ID** in variable **test data** | This NLP creates a record for a specific Salesforce object using the create record API. This process stores the RECORD\_ID in a variable for test data. <br><br> **User Inputs in NLP:** <br> 1. Salesforce Connection<br> 2. Salesforce Object Form<br> 3. Variable to store RECORD\_ID |
| Select multiple options using value **test data** in the **element** multipicklist | This NLP selects values from a multipicklist. This NLP can also be recorded. <br><br> **User Inputs in NLP:** <br> 1. Test Data <br> 2. Choose Element <br> <br> **Note:** All the values should match the criteria for the NLP to work effectively.|
| Remove multiple options using value **test data** in the **element** multipicklist | This NLP removes values from a multipicklist. This NLP can also be recorded. <br><br> **User Inputs in NLP:** <br> 1. Test Data <br> 2. Choose Element <br> <br> **Note:** All the values should match the criteria for the NLP to work effectively.|
| Undo field in **element** | This NLP undoes the update on the selected field. This NLP can also be recorded. <br><br> **User Inputs in NLP:** <br> Choose Element |
| Enter test data in the **element** richInput **textbox** | This NLP enters the provided test data into the richInput textbox element. This NLP can also be recorded. <br><br> **User Inputs in NLP:** <br> 1. Test Data <br> 2. Element |
| Search **test data** on **element** lookup | This NLP searches for the specified test data within the element lookup. This NLP can also be recorded. <br><br> **User Inputs in NLP:** <br> 1. Test Data <br> 2. Element |
| Select option **test data** from **element** picklist | This NLP selects the specified option from the picklist element using test data. This NLP can also be recorded. <br><br> **User Inputs in NLP:** <br> 1. Test Data <br> 2. Element |
| Clear and enter **test data** in the **element** field | This NLP will clear any existing data in the element field and then enter the test data into that field. <br><br> **User Inputs in NLP:** <br> 1. Test Data <br> 2. Element |


---