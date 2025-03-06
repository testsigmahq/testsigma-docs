---
title: "Azure OpenAI"
page_title: "Integrating Azure OpenAI"
metadesc: "Testsigma integration with Azure OpenAI allows you to map various features within the application | This article discusses how to get these details from Azure OpenAI"
noindex: false
order: 31.721
page_id: "Integrating Azure OpenAI"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Get Azure OpenAI Details"
  url: "#steps-to-get-azure-openai-details"
---

---

Testsigma supports integration with Azure OpenAI, which allows you to map various features within the application. To set up this integration, you need a resource, model, API key, and version. This article explains how to get these details from Azure OpenAI.

---

> ## **Prerequisites**
>
> Before you begin, ensure you have an active **Azure** account.

---

## **Steps to Get Azure OpenAI Details**
   
   ![Azure OpenAI Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Azure_AI_Details.png)

1. Request access to **Azure OpenAI** [here](https://learn.microsoft.com/en-us/legal/cognitive-services/openai/limited-access).

2. Create a resource in the **Azure** portal [here](https://portal.azure.com/?microsoft%5Fazure%5Fmarketplace%5FItemHideKey=microsoft%5Fopenai%5Ftip#create/Microsoft.CognitiveServicesOpenAI). This resource will be your **Azure Resource Name**.

3. Deploy a model in **Azure OpenAI Studio** [here](https://oai.azure.com/). The deployment name will be your **Deployment Name**.

4. Select your **Foundation Model** from the dropdown menu.

5. Open **Azure OpenAI Studio** and go to any playground, such as **Chat** or **Completions**.

6. Click **View Code**.

7. Note the **API Version** and **Key**, which will be your **Azure API Version** and **API Key**.

---