---
title: "Integrating GitHub with Testsigma"
page_title: "Agentic Test Generation with GitHub"
metadesc: "Integrate GitHub with Testsigma to automatically generate test cases using Atto when a pull request is raised | GitHub Integration for Agentic Tests in Testsigma"
noindex: false
order: 4.7446
page_id: "agentic-test-generation-with-github"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Configure GitHub Integration in Testsigma"
  url: "#configure-github-integration-in-testsigma"
- type: link
  name: "Step 1: Configure Webhooks in GitHub"
  url: "#step-1-configure-webhooks-in-github"
- type: link
  name: "Step 2: Generate PAT and Owner Details from GitHub"
  url: "#step-2-generate-pat-and-owner-details-from-github"
---

---

You can integrate GitHub with Testsigma to automatically generate test cases using Atto when a pull request (PR) is raised. This integration uses GitHub Webhooks and a fine-grained Personal Access Token (PAT) to connect your GitHub repository with Testsigma securely. This article discusses the steps to configure the integration & attaching the PR template in GitHub.

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure you have admin access to your GitHub organization.

---

## **Configure GitHub Integration in Testsigma**

1. Navigate to **Settings > Integrations**.

2. Enable toggle on **Github** widget.

[[info | **NOTE**:]]
| 
| - Use these values of **Webhook URL** and **Webhook Secret** displayed in the dialog to create a Webhook in your GitHub repository.
|   ![Step 1](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/GitHub_int/GitHub_Int_Step1.png)
|
| - Generate **Personal Access Token**, get **Owner Details** from GitHub and add the details in **Step 2**.
|   ![Step 2](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/GitHub_int/GitHub_Int_Step2.png)

---

## **Step 1: Configure Webhooks in GitHub**

1. Go to **GitHub**, select an organization, and click **View organization**.
   ![View Org](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/GitHub_int/GitHub_Int_VO.png)

2. In the top navigation bar, click **Settings**.
   ![Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/GitHub_int/GitHub_Settings.png)

3. In the left navigation pane, under **Code, planning, and automation**, click **Webhooks**.
   ![Webhooks](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/GitHub_int/GitHub_Webhooks_Int.png)

4. On the **Webhooks** page, click **Add webhook**.
   ![Add Webhook](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/GitHub_int/GitHub_Add_Webhook.png)


5. On the **Add webhook** page, do the following:
   - In the **Payload URL** field, enter the **Webhook URL**.
   - For **Content type**, select **application/json**.
   - In the **Secret** field, enter the **Webhook Secret**.
   - Under **Which events would you like to trigger this webhook?**, select **Let me select individual events**.
   - From the list of available events, select **Pull requests**.
   
   ![Add Webhook page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/GitHub_int/GitHub_WH_Config.png)

[[info | **NOTE**:]]
| The **Payload URL** and **Secret** in GitHub must be copied from **Webhook URL** and **Webhook Secret** generated in Testsigma.
|
| To obtain them, go to **Settings > Integrations** in Testsigma and enable the GitHub integration toggle.

6. Select **Add webhook** to save the configuration.
   ![Add Webhook](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/GitHub_int/GitHub_Int_Add_WH.png)

---

## **Step 2: Generate PAT and Owner Details from GitHub**

1. Go to **GitHub**, and click your profile picture in the top-right corner.
   ![Profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/GitHub_int/GitHub_Profile.png)

2. In the profile menu, click **Settings**.
   ![Profile Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/GitHub_int/GitHub_Profile_Settings.png)

3. In the left navigation pane, scroll down and click **Developer settings**.
   ![Dev Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/GitHub_int/GitHub_Dev_Settings.png)

4. Under **Developer settings**, click **Personal access tokens**, and then select **Fine-grained tokens**.
   ![Fine-grained tokens](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/GitHub_int/GitHub_Fine_Tokens.png)

5. Click **Generate new token**.
   ![Generate new token](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/GitHub_int/GitHub_New_Tokens.png)

6. On the **New fine-grained personal access token** page, configure the following: <br>  <br>
   **A.** In the **Token name** field, enter a name for the token. <br> <br>
   **B.** (Optional) In the **Description** field, enter the token's purpose. <br> <br>
   **C.** Under **Resource owner**, select your organization. <br> <br>
   **D.** Under **Expiration**, choose the desired validity period. <br> <br>
   **E.** Under **Repository** access, select one of the following options: <br> 
      - **Public repositories**: to grant access only to public repositories. <br> 
      - **All repositories**: to grant access to all current and future repositories. <br>
  
   **F.** Under **Permissions**, configure the required repository & organization permissions.

   ![New Token Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/GitHub_int/GitHub_Token_Details.png)

7. Click **Generate token**.
   ![Generate Token](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/GitHub_int/GitHub_Generate_Token_New.png)


8. In the **New personal access token** dialog, click **Generate token**.
   ![Generate Token](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/GitHub_int/GitHub_Confirm_Token.png)


9. Click **Copy** and securely store the generated token.
   ![Copy Token](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/GitHub_int/GitHub_Copy_Token.png) 
   
   
10. Enter the generated **Personal Access Token** and **Resource Owner**, click **Save & Enable**. 
    ![Save](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/GitHub_int/GitHub_Details_Testsigma.png)

---