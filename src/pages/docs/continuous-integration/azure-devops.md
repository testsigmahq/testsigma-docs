---
title: "Integrate Testsigma with Azure DevOps"
order: 13.14
metadesc: "How to integrate Testsigma with Azure DevOps"
noindex: false
page_id: "Integrate Testsigma with Azure DevOps"
search_keyword: "Azure DevOps, Integrations, CI/CD"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Prepare the Shell Script"
  url: "#prepare-the-shell-script"
- type: link
  name: "Create the Azure DevOps Pipeline"
  url: "#create-the-azure-devops-pipeline"
- type: link
  name: "Run the Pipeline and View Results"
  url: "#run-the-pipeline-and-view-results"
---

---

Integrate Testsigma with Azure DevOps to trigger Test Plan executions from your CI/CD pipeline. Azure DevOps runs a shell script that calls the Testsigma API to start a Test Plan and fetch its results.

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that you have referred to:
> 1. [Documentation on generic Shell script](https://testsigma.com/docs/continuous-integration/shell-script/) to get the script file.
> 2. [Documentation on generating API keys](https://testsigma.com/docs/configuration/api-keys/).
> 3. [Documentation on getting test plan ID](https://testsigma.com/docs/continuous-integration/get-test-plan-details/).

---

## **Prepare the Shell Script**

1. Copy the Unix shell script from the [documentation on generic Shell script](https://testsigma.com/docs/continuous-integration/shell-script/).

[[info | NOTE:]]
| Use the Unix shell script if your system runs macOS or Linux. Use the script under **For Powershell Script** on the same page if your system runs Windows.

2. Generate an API key from **Configurations > API Keys**. The link is mentioned in the prerequisites.

3. Get the Test Plan ID from the **CI/CD Integrations** tab on the Test Plan details page. The link is mentioned in the prerequisites.

4. Replace **TESTSIGMA\_API\_KEY** and **TESTSIGMA\_TEST\_PLAN_ID** in the script with the values from steps 2 and 3.
![shell script for Azure DevOps](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/shell-script-azure-devops.png)

5. Save the script in the code repository that you'll use for the Azure DevOps pipeline. Name it **cicd-api.sh**.

[[info | NOTE:]]
| This script triggers the Test Plan execution and returns the result once the run is complete.

---

## **Create the Azure DevOps Pipeline**

1. Sign in to your Azure DevOps account.

2. Create a **Project**.

3. Navigate to **Pipelines** and click **New Pipeline**.
![create new pipeline azure devops](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/create-new-pipeline-azure-devops.png)

4. Select the version control system (VCS) where your code repository, including **cicd-api.sh**, is stored.
![select version control system in Azure Devops](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/select-version-control-system-azure-devops.png)

[[info | NOTE:]]
| Azure DevOps requires a YAML file in your code repository to configure the CI/CD pipeline. If your repository doesn't have one, Azure DevOps creates a sample YAML file in your repository once you grant access.

5. Select the repository that contains your configuration YAML file.
![select repository in Azure DevOps](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/select-repository-azure-devops.png)

6. On the **Configure your pipeline** page, select **Existing Azure Pipelines YAML file** if your repository already has one, or select **Starter pipeline** to create a sample file.
![configure your pipeline page in Azure DevOps](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/configure-your-pipeline-azure-devops.png)

**(If using an existing file)**: Enter the branch and path of the YAML file in your repository.
![Select existing pipeline while configuring an existing YAML file in Azure DevOps](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/configure-pipeline-select-yaml-file-azure-devops.png)

7. Review the CI configuration, then click **Continue**.
![Review CI configuration in Azure DevOps](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/review-ci-configuration-azure-devops.png)

8. In the YAML file, enter the path to **cicd-api.sh** in the `filePath` field:

```yaml
# Azure Pipelines YAML file
trigger: master

pool:
  vmImage: 'ubuntu-latest'

steps:
- script: echo Hello, world!
  displayName: Run a one-line script

- task: Bash@3
  displayName: Run Shell Script (./cicd-api.sh)
  inputs:
    filePath: ./cicd-api.sh

- task: PublishTestResults@2
  displayName: publish test-results
  inputs:
    testResultFormat: JUnit
    testResultsFiles: '**/*junit-report.xml'
```

---

## **Run the Pipeline and View Results**

1. Click **Run** to start the pipeline job.
![test configuration in Azure DevOps](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/test-configuration-azure-devops.png)

2. Track the run on the pipeline results page.
![set up ci with Azure Pipelines](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/setup-ci-with-azure-pipelines.png)

3. Once the job completes, the job status shows **Success**.
![Job Status Success in Azure DevOps](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/job-status-success-azure-devops.png)

4. Navigate to **Test Plans > Runs** to view the reports.
![Test Plans Runs in Pipelines in Azure DevOps](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/pipelines-testplans-runs-azure-devops.png)

5. Select **Runs**, then select the Test Plan whose report you want to view. Download the JUnit report in XML format from this page.
![Junit report in Azure DevOps](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/junit-report-azure-devops.png)

[[info | NOTE:]]
| Use a separate shell script to convert the JUnit XML report into HTML format.

---
