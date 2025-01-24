---
title: "Introduction: BYOK ֎ "
page_title: "Intro to Bring Your Own Keys"
metadesc: "In Testsigma, you can integrate your preferred LLMs using your own API keys, ensuring data sovereignty & privacy | This article discusses Bring Your Own Keys model in Testsigma"
noindex: false
order: 31.71
page_id: "Intro to Bring Your Own Keys"
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
  name: "Mapping Models to Testsigma Features"
  url: "#mapping-models-to-testsigma-features"
---

---

Testsigma allows you to integrate your preferred LLMs using your own API keys (Bring Your Own Keys), ensuring data sovereignty and privacy compliance while enhancing test generation accuracy. This integration gives you control over data privacy, costs, and enables you to fine-tune AI models with your domain-specific data for improved test outcomes. This article discusses integrating Testsigma with LLMs. 

---

> ## **Prerequisites**
>
>
> Before you begin, ensure you have the valid API keys and necessary details for your preferred LLM provider.

---

## **Supported LLMs**

- **Azure OpenAI**
- **OpenAI**

---

## **Steps to Create a New Key**

1. From the left navigation bar, go to **Settings > Gen AI Keys**.
   ![Gen AI Keys](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/GenAI_Keys_Settings.png)


2. Click **Create New Key** in the top right corner.
   ![New Key](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Create_New_Key_GenAI.png)

3. From the **Create New Key** overlay,
   
   - Enter the **Key Name** and an optional **Description**.
     ![Name & Description](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Name_Desc_GenAI.png)

   - Select an **AI Provider** from the dropdown menu.
     ![AI Provider](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/GenAI_Provider.png)

4. Enter the details associated with the **AI Provider**.
   ![AI Provider Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/AI_Provider_Details.png)

5. Click **Validate API Key** to validate the **AI Provider** details.
   ![Validate Key](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Validate_API_Key.png)

6. Click **Create** to add the **API key**.
   ![Add API Key](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Create_API_Key_Button_GenAI.png)

7. The added keys will appear in the **Keys** section.
   ![Key](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/GenAI_Keys_GenAI.png)

---

## **Mapping Models to Testsigma Features**

1. In the **Feature Model Configuration** section, map each **Feature** to the corresponding key from the dropdown menu.
   ![Model Configuration](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Mapping_Models_to_Features.png)

2. The features will now use the mapped models.
   ![Models Mapped](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Feature_Model_Configuration.png)


---