---
title: "Integrate Testsigma with AWS DevOps"
metadecs: "This article discusses step-by-step instructions for integrating Testsigma application with AWS DevOps | Learn how to integrate AWS DevOps with Testsigma Application" 
order: 12.15
page_id: "Integrate Testsigma with AWS DevOps"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "AWS DevOps integration methods"
  url: "#aws-devops-integration-methods"
---

---

AWS services that are used as a part of CI/CD pipeline are:

- **CodeCommit:** AWS CodeCommit is a version control service that enables you to privately store and manage Git repositories in the AWS cloud.

- **CodeBuild:** CodeBuild compiles your source code, runs unit tests, and produces artifacts that are ready to deploy.

- **CodeDeploy:** AWS CodeDeploy is a deployment service that enables developers to automate the deployment of applications to instances and to update the applications as required.

This article discusses how to integrate Testsigma with AWS DevOps.
 
---

## **AWS DevOps integration methods:**

Below are the 2 methods to integrate and trigger Testsigma tests via AWS DevOps:

- Go to CodeBuild Services, Create a Build Project, and Start a Build using your repository.

- Create CodePipeline with Source, Build, and Pipeline details.
We’ll cover both methods.


### **Go to CodeBuild Services, Create a Build Project, and Start a Build using your repository:**

 
1. Click on the Build projects option under the Build section and Create a new Build Project:
![create build project button in AWS Devops](https://docs.testsigma.com/images/aws-devops/create-build-project-aws-devops.png)


2. Fill in the project configuration details and select the Source Provider and Repository accordingly. Here we have selected Github as our repository and give Buildspec name as your .yml file name 
![project configuration details in AWS DevOps](https://docs.testsigma.com/images/aws-devops/project-configuration-details-aws-devops.png)
    ![add yml file in buildspect in AWS DevOps](https://docs.testsigma.com/images/aws-devops/buildspec-yml-aws-devops.png)


3. Once this is done, please update the .yml file in the repository with the below code. In this case, we have taken a sample file **aws_codebuild.yml**:
 
**Starter pipeline**<br>
**Start with a minimal pipeline that you can customize to build and deploy your code**
## [Add steps that build, run tests, deploy, and more:](#)

```yaml
version: 0.2
phases:
  install:
    runtime-versions:
      java: corretto11
  pre_build:
    commands:
      - echo Nothing to do in the pre_build phase...
  build:
    commands:
      - bash cicd-api.sh
  post_build:
    commands:
      - echo Build completed on `date`
```
 
As shown in the above code, the file cicd-api.sh under commands needs to be updated with test plan details and added to the repository. We have taken a sample file.

Add the [test plan details](https://testsigma.com/docs/continuous-integration/get-test-plan-details/) and [API key](https://testsigma.com/docs/configuration/api-keys/) to the **.sh** file which you need to trigger:
 
```shell
#********START USER_INPUTS ********

TESTSIGMA_API_KEY= <Give in an API Key Generated in the Configuration-> API Keys tab in Testsigma>

TESTSIGMA_TEST_PLAN_ID= <Test Plan ID for the run which you need to trigger>
MAX_WAIT_TIME_FOR_SCRIPT_TO_EXIT=180
REPORT_FILE_PATH=./junit-report.xml
RUNTIME_DATA_INPUT="buildurl=http://test.testsigma.com,data1=testdata"

#********END USER_INPUTS***********
```


 
4. Now in the AWS CodeBuild, click on start build:
 ![start build button in AWS DevOps](https://docs.testsigma.com/images/aws-devops/start-build-button-aws-devops.png)

5. Once Build has been initiated you can check the progress and build logs as shown in the screenshot below:
 ![build progress in AWS DevOps](https://docs.testsigma.com/images/aws-devops/build-progress-aws-devops.png)
    
    You will find the execution ID for the Test Plan within the **REST API call to start Test Plan** section.
![Get Test Plan ID](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/trineid.png)

### Create CodePipeline with Source, Build, and Pipeline details
 
Similarly, you can go to the CodePipeline service in AWS and create a pipeline for running the Source, Build and Deploy together. You can use the same project created in CodeBuild earlier inside your CodePipeline. 
 
Follow the below steps for creating CodePipeline and triggering the test:
 
1. Click on create a pipeline:
![create pipeline in AWS DevOps](https://docs.testsigma.com/images/aws-devops/create-pipeline-aws-devops.png)


2. Fill in the build details (selecting the repository accordingly) and select the project which you want to add to your pipeline. In the below screenshot you can see that the project which we created earlier in CodeBuild "demo123" is visible here and we will be selecting that only.
![add build stage in AWS DevOps](https://docs.testsigma.com/images/aws-devops/add-build-stage-aws-devops.png)

3. Once you have given the details for the Pipeline settings, Source, Deploy stage then you can review the details and click on Create Pipeline:
![review pipeline settings in AWS DevOps](https://docs.testsigma.com/images/aws-devops/pipeline-settings-review-aws-devops.png)

As soon as you click on create pipeline the run will be triggered:
![Run triggered after creating pipeline in AWS DevOps](https://docs.testsigma.com/images/aws-devops/create-pipeline-run-triggered-aws-devops.png)

That's all we need to automate Test Execution when a successful build is triggered using the AWS DevOps.


Source: [https://docs.aws.amazon.com/codepipeline/index.html](https://docs.aws.amazon.com/codepipeline/index.html)




 
---