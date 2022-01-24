---
title: " Integrate Testsigma with Travis CI"
metadesc: " How to integrate Testsigma with Travis CI "
order: 12.19
page_id: " Integrate Testsigma with Travis CI"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites:"
  url: "#pre-requisite"
- type: link
  name: "Steps to follow:"
  url: "#steps-to-follow"
---
Testsigma offers webhooks for triggering Testsigma Test Plan Executions remotely from any third-party tool that provides a Command Line Interface (CLI). In this guide, we will see how we can integrate Testsigma in Travis CI for automatically triggering Test Executions. These test executions will be triggered as part of the build generation triggers that you have. Then, we will also configure it to wait for the tests to complete execution and then check if they passed, before proceeding to deployment.
 
## **Pre-requisite:**
 Before we begin, you will need:
 - A Travis CI Account with connected Source Code Management
 - A CI/CD pipeline in Travis CI. Please check with your DevOps team if you need help with this. 

## **Steps to follow:**
Below we will cover the steps in 3 parts:
   * Obtain API and Test Plan ID from Testsigma App
   * Update the Shell Script
   * Configure the Travis CI Pipeline


Let’s begin.


### Part1: Obtain API and Test Plan ID from Testsigma App
1. If you have not created a Testsigma API key already, please create one by navigating to Settings > API Keys and clicking on  [Create an API Key](http://testsigma.com/docs/configuration/api-keys/) button on the top right corner.

![API key details in Testsigma](https://docs.testsigma.com/images/travis-ci/api-key-details-testsigma.png)

We will use this API Key to authenticate our remote Test Plan trigger requests from Travis CI.

2. Create a Test Plan in Testsigma that you will execute as part of the Travis CI Pipeline. [Obtain the Test Plan ID] (https://testsigma.com/docs/continuous-integration/get-test-plan-details/) for the Test Plan from the CI/CD Integrations tab within Test Plan details as shown below:

![test plan id in Testsigma](https://docs.testsigma.com/images/travis-ci/test-plan-id-testsigma.png)

We will be using this Test Plan ID to specify which Test Plan to trigger from Travis CI (explained in next article section - **Set up Code Repository** )
 
So, we have noted down the Testsigma API Key and the Test Plan ID now. We will add those to a Shell script and add the shell script file to your Code Repository in the next section.
 
### Part 2: Update the Shell Script
You need to have a script file in your Code Repository stored on Github, Bitbucket, Azure, or any such platform.
This script file contains commands to trigger the Testsigma Test Plan remotely.

Follow the below steps:
1. Copy the shell script from [Generic Shell Script for Integrating with CI/CD Tools ](https://testsigma.com/docs/continuous-integration/shell-script/)

2. Update your Testsigma API Key and Test Plan ID in the above script.
 

### Part 3: Configure the Travis CI Pipeline
To run that script from your .travis.yml:
   1. Save it in your repository as ```scripts/trigger_testsigma_tests_and_wait.sh```
   2. Make it executable by running ```chmod ugo+x scripts/trigger_testsigma_tests_and_wait.sh```
   3. Commit it to your repository.
   4. Add it to your .travis.yml:
 script: ```./scripts/trigger_testsigma_tests_and_wait.sh```

 
That's it.
With the above settings, the Testsigma Test Plan will be triggered whenever there is a change in the repository and as soon as the build is triggered, the tests will begin in Testsigma. The script will wait until the test completes and checks that the result of the tests is passed.
