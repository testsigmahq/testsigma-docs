---
title: "Integrate Testsigma with Circle CI"
meta_desc: " How to integrate Testsigma with Circle CI"
order: 12.17
page_id: "Integrate Testsigma with Circle CI"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites:"
  url: "#pre-requisite"
- type: link
  name: "Steps to follow"
  url: "#steps-to-follow"
---

---

Testsigma offers webhooks for triggering Testsigma Executions remotely from any third-party tool that provides a Command Line Interface (CLI). In this guide, we will see how we can integrate Testsigma in CircleCI for automatically triggering Test Executions after some code is changed on your code repository. We will also configure it to wait for the tests to complete execution and then check if they passed, before proceeding to deployment.
 
---
##**Pre-requisite:**

>Before we begin, you will need:
>- A CircleCI Account with connected Source Code Management (SCM) tool (Github, Azure, etc.)
> - A CI/CD pipeline set up in CircleCI. Please check with your DevOps team if you need help with this.

---
##**Steps to follow:**
We will complete the integration in 3 parts:
* Obtain API and Test Plan ID from Testsigma App
* Add the Shell Script to Code Repository
* Configure the CircleCI Pipeline


Let’s begin.


### Part1: Obtain API and Test Plan ID from Testsigma App
1. If you have not created a Testsigma API key already, please create one by navigating to Settings > API Keys and clicking on Create button on the top right corner.

![API key details in Testsigma](https://docs.testsigma.com/images/circle-ci/api-key-details-testsigma.png)
We will use this API Key to authenticate our remote Test Plan trigger requests from CircleCI (explained in next article section - Set up Code Repository)

2. Create a Test Plan in Testsigma that you will execute as part of the CircleCI Pipeline. Obtain the Test Plan ID for the Test Plan from the CI/CD Integrations tab within Test Plan details as shown below:
![get test plan id from a test plan in Testsigma](https://docs.testsigma.com/images/circle-ci/get-test-plan-id-test-plan-testsigma.png)
We will use this Test Plan ID to specify which Test Plan to trigger from CircleCI (explained in next article section - **Set up Code Repository**)
]
So, we have noted down the Testsigma API Key and the Test Plan ID now. We will add those to a Shell script, and the shell script file to your Code Repository, in the next section.
 
### Part 2: Add the Shell Script to Code Repository
You need to add a script file in your Code Repository stored on Github, Bitbucket, Azure, or any such platform.
This script file contains commands to trigger the Testsigma Test Plan remotely.
1. Copy the shell script from the article: [Generic Shell Script for Integrating with CI/CD Tools](https://testsigma.com/docs/continuous-integration/shell-script/) and customize the script file as mentioned in the next steps.

2 Update your [Testsigma API Key](http://testsigma.com/docs/configuration/api-keys/) and [Test Plan ID](https://testsigma.com/docs/continuous-integration/get-test-plan-details/) in the above script.

3. Now upload the script file to your Code Repository (preferably root folder) and commit.
 
### Part 3: Configure the CircleCI Pipeline
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
   docker:
     # specify the version you desire here
     - image: circleci/openjdk:8-jdk
     - image: debian:stretch
     # Specify service dependencies here if necessary
     # CircleCI maintains a library of pre-built images
     # documented at https://circleci.com/docs/2.0/circleci-images/
     # - image: circleci/postgres:9.4
   working_directory: ~/repo
   environment:
     # Customize the JVM maximum heap limit
     MAVEN_OPTS: -Xmx3200m
   steps:
     - checkout
     # Download and cache dependencies
     - restore_cache:
         keys:
           - v1-dependencies-{{ checksum "pom.xml" }}
           # fallback to using the latest cache if no exact match is found
           - v1-dependencies-
     - run: mvn dependency:go-offline
     - save_cache:
         paths:
           - ~/.m2
         key: v1-dependencies-{{ checksum "pom.xml" }}
     # run tests!
     # Trigger test on Testsigma and wait until completion or timeout!
     - run: chmod a+x ./trigger_testsigma_tests_and_wait.sh
     - run: ./trigger_testsigma_tests_and_wait.sh
    
     # deploy!
     - run: ./deploy_to_cloud.sh

```
'
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
