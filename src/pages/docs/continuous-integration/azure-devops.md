---
title: "Integrate Testsigma with Azure DevOps"
order: 12.14
metadesc: "How to integrate Testsigma with Azure DevOps"
page_id: "How to Create a Test Plans to run on Local Devices"
search_keyword: "Azure DevOps, Integrations, CI/CD"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites:"
  url: "#prerequisites"
- type: link
  name: "How to integrate with Azure DevOps"
  url: "#how-to-integrate-with-azure-devops"
---

Microsoft Azure, aka Azure, is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers.
---
##**Prerequisites:** 
1. **API key for Azure:** To generate this, follow the below steps:
	1. Log in to your account on Testsigma
    2. Navigate to[Settings > API keys](http://testsigma.com/docs/configuration/api-keys/)
    3. Click on the ‘Create’ button to generate a new API key. 
2. [Test Plan ID:](https://testsigma.com/docs/continuous-integration/get-test-plan-details/) To get this, follow the steps below:
	1. Click on the Test Plan name that you want to integrate
	2. On the Test Plan details page that opens, click on the CI-CD integration tab. 
	3. You will find the execution ID for the Test Plan within the ‘REST API call to start Test Plan’ body content as shown in the screenshot below:
![get test plan id](https://docs.testsigma.com/images/azure-devops/get-test-plan-id.png)
---
##**How to integrate with Azure DevOps**
**Step 1: Create/Select a Pipeline**
Once you are logged in to the Azure DevOps account and created a Project, you can click on the Pipeline section and the below image will be displayed. If you want to create a **new pipeline**, we need to click on the New Pipeline Button to get started.

![create new pipeline azure devops](https://docs.testsigma.com/images/azure-devops/create-new-pipeline-azure-devops.png)
**Step 2: Select the Version Control System(VCS)**
After clicking on the New Pipeline button, the below page will be displayed where you need to integrate with the version control system(VCS) such as Git Hub, Bitbucket, etc. where your application code is stored.

![select version control system in Azure Devops](https://docs.testsigma.com/images/azure-devops/select-version-control-system-azure-devops.png)
[[info | NOTE:]]
| In order to integrate with Azure, you need to have a YAML file in your Code repository. This file contains the details for the CI/CD Integration with Azure DevOps. If not available yet, Azure has an option in which it will create a sample YAML file in your repository once access is given.

**Step 3: Select the Repository**
Once you have selected the VCS, it will take you to a page where it will ask you to choose the repository where your Configuration YAML file is present.

![select repository in Azure DevOps](https://docs.testsigma.com/images/azure-devops/select-repository-azure-devops.png)

Once you select your repository it will take you to the configuration page where you can configure your pipeline.
 
**Step 4: Select Configuration**
If you already have your YAML file in your repo, you can select the option **Existing Azure Pipeline YAML file**. Otherwise, you can select **Starter Pipeline** to create a sample YAML file in the selected repository.

![configure your pipeline page in Azure DevOps](https://docs.testsigma.com/images/azure-devops/configure-your-pipeline-azure-devops.png) 
In this case, we already had an existing YAML file in the repo. So, once you select the fourth option in the above image, it will take you to a place where you need to enter the branch and path of the YAML file in your repository,
![Select existing pipeline while configuring an existing YAML file in Azure DevOps](https://docs.testsigma.com/images/azure-devops/configure-pipeline-select-yaml-file-azure-devops.png)
**Step 5: Review the CI Configuration**
After selecting the Branch and path you can click on "continue" and you will need to review your YAML code.
![Review CI configuration in Azure DevOps](https://docs.testsigma.com/images/azure-devops/review-ci-configuration-azure-devops.png)
The YAML file contains the following code where you need to enter the filePath of the [Generic Shell Script](https://testsigma.com/docs/continuous-integration/shell-script/) (cicd-api.sh) to run it. This Shell script is the one that actually triggers the Test Plan execution and gives you the result of execution once it's complete.
```yaml
# Starter pipeline
# Start with a minimal pipeline that you can customize to build and deploy your code.
# Add steps that build, run tests, deploy, and more:
# https://aka.ms/yaml
trigger:- master
pool:  
vmImage: 'ubuntu-latest'
steps:- 
script: echo Hello, world!  
displayName: 'Run a one-line script'
//Settings
- task: Bash@3 
 inputs:    
filePath: './cicd-api.sh' //Generic Shell Script file
//Settings
- task: PublishTestResults@2  
displayName: 'publish testsigma test results'  
inputs:    
testResultsFormat: 'Junit'// Test Result Format   
testResultsFiles: '**/junit-report.xml' //Result File Type
```


 
In order to Trigger a particular test plan, you just need to add your own Test plan Execution id and the API key in the Shell Script (cicd-api.sh). As shown below:

![shell script for Azure DevOps](https://docs.testsigma.com/images/azure-devops/shell-script-azure-devops.png)

 Please check the below article to get insight on the configuration of Generic Shell Script:
[Generic Shell Script for Integrating with any CI/CD Tool](https://testsigma.com/docs/continuous-integration/shell-script/)

**Step 6: Test the Configuration**
Once the Script is set up and Reviewed for the pipeline, you can click on the **Run** button to start your Job.

![test configuration in Azure DevOps](https://docs.testsigma.com/images/azure-devops/test-configuration-azure-devops.png)
Once the Run is initiated, you will see this page:
![set up ci with Azure Pipelines](https://docs.testsigma.com/images/azure-devops/setup-ci-with-azure-pipelines.png)
Once the job has been completed, the Job status will be "Success" as shown in the image below:

![Job Status Success in Azure DevOps](https://docs.testsigma.com/images/azure-devops/job-status-success-azure-devops.png)
**Step 7: Checking the Test Run Results**
That was all about Running the Job, now we would learn how can we see the result reports in Azure. Once the job is completed we can see the JUnit report in the **Test Plans > Runs** as shown below:
![Test Plans Runs in Pipelines in Azure DevOps](https://docs.testsigma.com/images/azure-devops/pipelines-testplans-runs-azure-devops.png)
After clicking on Runs you can select the execution for which you want to view the report and then you will be navigated to the page below, and also you can download the JUnit report in XML format.
![Junit report in Azure DevOps](https://docs.testsigma.com/images/azure-devops/junit-report-azure-devops.png)
You can use another shell script to convert the JUnit XML format result into an HTML format. A tool like [Allure](https://docs.qameta.io/allure/#_reporting) can help you with this.


