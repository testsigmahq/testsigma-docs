---
title: "Integrate Testsigma with Codemagic"
metadesc: "Integrate Testsigma with Codemagic for seamless test automation | Trigger Testsigma test runs from your CI/CD pipeline using a shell script in GitHub."
noindex: false
order: 12.26
page_id: "integrate-testsigma-with-codemagic"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Sign Up and Authorize Codemagic"
  url: "#sign-up-and-authorize-codemagic"
- type: link
  name: "Select and Configure Your Repository"
  url: "#select-and-configure-your-repository"
- type: link
  name: "Configure the YAML Workflow"
  url: "#configure-the-yaml-workflow"
- type: link
  name: "Add the YAML Configuration File"
  url: "#add-the-yaml-configuration-file"
- type: link
  name: "Trigger the Workflow"
  url: "#trigger-the-workflow"
---

---

You can integrate Codemagic with your version control system to automate test execution using a shell script that triggers Testsigma tests via CI/CD. This article discusses configuring Codemagic with a repository and executing test automation workflows using a codemagic.yaml file.

---

> ## **Prerequisites**
> 
> Before you begin, ensure:
> 
>   - You have a repository on a supported version control system (e.g., **GitHub**).
>   - You have a **Codemagic** account.
>   - You have a shell script in your repository that triggers Testsigma test execution.
>
---

## **Sign Up and Authorize Codemagic**

1. Navigate to [Codemagic](https://codemagic.io).

2. Sign up using your version control system (We’re using **GitHub**).

3. After signing in, authorize Codemagic by clicking **Authorize Codemagic CI/CD**.
<img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Codemagic_1.1.png" style="width: 400px;" />

4. On the **How will you be using Codemagic?** page, select the preferred option.
![codemagic 4](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Codemagic_1.2.png)

5. On the **Welcome Onboard** page, under **Connect Code**, choose your version control provider (e.g., **GitHub**).
![codemagic 5](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Codemagic_1.3.png)

[[info | **NOTE**:]]
| -  If your repositories do not appear, click **Click here**, then select **Install and Authorize** to refresh the connection.

---

## **Select and Configure Your Repository**

1. Under **Select repository**, choose the appropriate repository from the dropdown menu and click **Select repository**.
![codemagic 6](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Codemagic_1.4.png)

2. Enter the relative path to your project in the **Project path** field.

3. Click **Retry** to allow Codemagic to scan the repository.

Alternatively, click **Set Type Manually** to specify the project type.
![codemagic 7](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Codemagic_1.5.png)

4. Select the project type and click **Create Application**.
![codemagic 8](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Codemagic_1.6.png)

---

## **Configure the YAML Workflow**

1. On the workflow screen, click **Switch to YAML configuration**.
![codemagic 9](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Codemagic_2.3.png)

2. In the **Update Settings** dialog, select the **codemagic.yaml** radio button and click **Save changes**.
![odemagic 10](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Codemagic_2.4.png)

---

## **Add the YAML Configuration File**

1. In your repository, create a new file named **codemagic.yaml** at the root directory.

2. Add the following YAML script:

```
workflows:
  run-testsigma:
    name: Run Testsigma Shell Script
    scripts:
      - name: Trigger Testsigma
        script: |
          chmod +x ./magictrigger.sh
          ./magictrigger.sh
```
![codemagic 11](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Codemagic_1.8.png)

3. Commit and push the file to your repository.

4. **(Optional)** Configure **Environment Variables**, **Webhooks**, and other settings in **Codemagic** if necessary.

[[info | **NOTE**:]]
| - Ensure the **magictrigger.sh** file is present in the same repository and marked as executable. For information on the generic shell script, see [Shell Script](https://testsigma.com/docs/continuous-integration/shell-script/).
| - Ensure you have an **API key** and a **Test Plan ID**. For more information, see [API Keys](https://testsigma.com/docs/configuration/api-keys/) and [Get Test Plan ID](https://docs.testsigma.com/images/azure-devops/get-test-plan-id.png).
| ![shell script for Azure DevOps](https://docs.testsigma.com/images/azure-devops/shell-script-azure-devops.png)

---

## **Trigger the Workflow**

1. Navigate to **Codemagic**.

2. Click **Start new build**.
![codemagic 13](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Codemagic_2.1.png)

Codemagic will detect the **codemagic.yaml** file and initiate the workflow. After the build completes, you can view the execution logs and test results.

---