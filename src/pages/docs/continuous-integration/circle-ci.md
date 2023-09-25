---
title: "Integrate Testsigma with Circle CI"
metadesc: " How to integrate Testsigma with Circle CI"
noindex: false
order: 12.17
page_id: "Integrate Testsigma with Circle CI"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to follow"
  url: "#steps-to-follow"
- type: link
  name: "Obtain API and Test Plan ID from Testsigma App"
  url: "#obtain-api-and-test-plan-id-from-testsigma-app"
- type: link
  name: "Add the Shell Script to Code Repository"
  url: "#add-the-shell-script-to-code-repository"
- type: link
  name: "Configure the CircleCI Pipeline"
  url: "#configure-the-circleci-pipeline"
---

---

Testsigma offers webhooks for triggering Testsigma Executions remotely from any third-party tool that provides a Command Line Interface (CLI). This article will help you to integrate Testsigma with CircleCI for automatically triggering Test Executions after some code is changed on your code repository. 
 
---
## **Prerequisites**

- A CircleCI Account with connected Source Code Management (SCM) tool (Github, Azure, etc.)
- A CI/CD pipeline set up in CircleCI. 

---

## **Steps to follow:**
We will complete the integration in 3 parts:
- Obtain API and Test Plan ID from Testsigma App
- Add the Shell Script to Code Repository
- Configure the CircleCI Pipeline

---

## **Obtain API and Test Plan ID from Testsigma App**
1. Create API Key by navigating to **Settings > API Keys**.
![API Key](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/APIKeyGen.png)
We will use this API Key to authenticate our remote Test Plan trigger requests from CircleCI. 

2. Create a Test Plan in Testsigma that you will execute as part of the CircleCI Pipeline. Obtain the **Test Plan ID** for the Test Plan from the **CI/CD Integrations** tab within **Test Plan details** as shown below:
![Test Plan ID](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/TPAPIcall.png)
We will add Testsigma API Key and the Test Plan ID to a Shell script, and the shell script file to your Code Repository.

---
 
## **Add the Shell Script to Code Repository**
You need to add a script file in your Code Repository stored on Github, Bitbucket, Azure, or any such platform. This script file contains commands to trigger the Testsigma Test Plan remotely.
1. Copy the shell script from the article: [Generic Shell Script for Integrating with CI/CD Tools](https://testsigma.com/docs/continuous-integration/shell-script/).
2. Update your [Testsigma API Key](https://testsigma.com/docs/configuration/api-keys/) and [Test Plan ID](https://testsigma.com/docs/continuous-integration/get-test-plan-details/) in the above script.
3. Now upload the script file to your Code Repository and commit.

--- 

## **Configure the CircleCI Pipeline**
1. In CircleCI, create a new project or select the Project that you want to integrate with Testsigma.
2. Clicking on **Setup Project** takes us to the Set Up page as shown below:

![set up project in circle CI](https://docs.testsigma.com/images/circle-ci/set-up-project-circle-ci.png)
3. Modify the config.yml file and include a job to run the specified bash script file that initiates Testsigma Execution and waits for its completion before deployment. Here's a sample entry for config.yml file:

```yaml
# Java Maven CircleCI 2.0 configuration file
#
# Check https://circleci.com/docs/2.0/language-java/ for more details
#
version: 1.0
jobs:
 build:
   steps:
     - run: chmod a+x ./trigger_testsigma_tests_and_wait.sh
     - run: ./trigger_testsigma_tests_and_wait.sh
```

Check the section that starts with the comment **run tests!**

Set executable permission for the script file that triggers test run on Testsigma using the following:
run: ```chmod a+x ./trigger_testsigma_tests_and_wait.sh```
Run the shell script and this triggers the test plan on Testsigma using the following: 
run: ```./trigger_testsigma_tests_and_wait.sh```
 
4. Now, click on the ‘Start Building’ button on the top right to start a test build. You will be greeted with a dialog stating that the config.yml will be added to the selected Repo by CircleCI.

![add config to repo in Circle CI](https://docs.testsigma.com/images/circle-ci/add-config-to-repo-circle-ci.png)
5. Click on Add Config button to Add the Config and start building. It will take you to the Pipelines page.
![add config in pipelines page in circle CI](https://docs.testsigma.com/images/circle-ci/add-config-pipelines-page-circle-CI.png)
That's it.
With the above settings, the build will be triggered whenever there is a change in the repository and as soon as the build is triggered, the tests will begin in Testsigma. The script will wait until the test completes and checks that the result of the tests is passed.
