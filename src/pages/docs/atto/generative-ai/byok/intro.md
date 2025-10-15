---
title: "Introduction: BYOK ֎ "
page_title: "Intro to Bring Your Own Keys"
metadesc: "In Testsigma, you can integrate your preferred LLMs using your own API keys, ensuring data sovereignty & privacy | This article discusses Bring Your Own Keys model in Testsigma"
noindex: false
order: 4.745
page_id: "intro-to-bring-your-own-keys"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Supported LLMs"
  url: "#supported-llms"
- type: link
  name: "Steps to Create a New Key"
  url: "#steps-to-create-a-new-key"
- type: link
  name: "Mapping Keys & Models to Testsigma Features"
  url: "#mapping-keys--models-to-testsigma-features"
---

---

Testsigma allows you to integrate your preferred LLMs using your own API keys (Bring Your Own Keys), ensuring data sovereignty and privacy compliance while enhancing test generation accuracy. This integration gives you control over data privacy, costs, and enables you to fine-tune AI models with your domain-specific data for improved test outcomes. This article discusses integrating Testsigma with LLMs. 

<br>

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/New_Doc_Videos/BYOK_Testsigma.mp4" 
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
          allowfullscreen>
  </iframe>
</div>

---

> <p id="prerequisites">Prerequisites</p>
>
>
> Before you begin, ensure you have the valid API keys and necessary details for your preferred LLM provider.

---

## **Supported LLMs**

- **Azure OpenAI**
- **Open AI**
- **Gemini AI**
- **Vertex AI**

---

## **Steps to Create a New Key**

1. From the left navigation bar, go to **Settings > Gen AI Keys**.
   ![Gen AI Keys](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Generative_AI_Keys_Settings.png)


2. Click **Create New Key** in the top right corner.
   ![New Key](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Create_New_GenAI_Key.png)


3. From the **Create New Key** overlay,
   
   - Enter the **Key Name** and an optional **Description**.
     ![Name & Description](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/API_Key_Name_Description.png)

   - Select an **AI Provider** from the dropdown menu.
     ![AI Provider](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/GenAI_Key_Provider.png)

   - Enter the details associated with the **AI Provider**.
   ![AI Provider Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/New_AI_Provider_Details.png)

4. Click **Validate API Key** to validate the **AI Provider** details.
   ![Validate Key](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Validate_New_Key.png)

5. Click **Create** to add the **API key**.
   ![Add API Key](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Create_the_API_Key_Button_GenAI.png)

6. The added keys will appear in the **Keys** section.
   ![Key](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Added_API_Keys.png)

---

## **Mapping Keys & Models to Testsigma Features**

1. In the **Feature Model Configuration** section, map each **Feature** to the corresponding **Key** and **Model** from the dropdown menus.
   ![Model Configuration](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/API_Key_Model_Linking.png)

2. The features will now use the mapped models.
   ![Models Mapped](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/New_Feature_Model_Configuration.png)


---