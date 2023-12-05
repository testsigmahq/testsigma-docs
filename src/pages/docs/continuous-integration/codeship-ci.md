---
title: "Integrate Testsigma with CodeShip CI"
metadesc: "How to integrate Testsigma with CodeShip CI"
noindex: false
order: 12.191
page_id: "Integrate Testsigma with CodeShip CI"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Integrating Testsigma to CodeShip Test Pipelines"
  url: "#integrating-testsigma-to-codeship-test-pipelines"
---

---

Testsigma offers powerful webhooks for triggering Testsigma executions remotely from any third-party tool that provides a Command Line Interface (CLI). This article discusses how we can integrate Testsigma in Codeship for automatically triggering test executions with successful builds on CodeShip. Then, we will wait for the tests to pass and proceed with deployment.

---

## **Prerequisites**

1. A CodeShip Account configured with your organization details and the Project that needs to be triggered. If you are new to CodeShip, please follow the following link to create an Account (using your email or OAuth), add your organization and create a Project. See [signing up for a new Codeship Account](https://documentation.codeship.com/general/account/new-user-signup/)

2. Connect your Source Code Management (SCM) tool such as Github, BitBucket, or GitLab to your account.


    In this Guide, we will be using GitHub as our SCM. Therefore, we need to install CodeShip App from GitHub Marketplace in our GitHub Account so that the repositories in the Github account are accessible. See how to [configure Github as your SCM in CodeShip](https://blog.codeship.com/build-faster-with-github-and-cloudbees-codeship/).

    For help on configuring other SCMs, please check CodeShip Documentation or contact CodeShip Support.

    You can view the Connected Services at Authentications page - [Connected Services](https://app.codeship.com/authentications) 


---

## **Integrating Testsigma to CodeShip Test Pipelines**

1. Click on the **Projects** link on the CodeShip home page and then select your required Project. The one we are selecting is **testsigma-demo** in this case.


2. From the **Dashboard**, click on **Project Settings**.
![project settings in codeship CI](https://docs.testsigma.com/images/codeship-ci/project-settings-codeship-ci.png)


3. On **Configure your Tests** page, select the option **I want to create my own custom commands** in the Select your technology selector box.
![configure your tests and add pipelines in codeship ci](https://docs.testsigma.com/images/codeship-ci/configure-your-tests-add-pipeline-codeship-ci.png)


4. In Setup Commands, enter the below command  to install jq package:

    'sudo apt-get install jq'
 
    'Info: jq is json query parser library for bash'
 

5. Click on **Add Pipeline** and enter a name for the pipeline. We will be entering **Testsigma Execution Trigger**.
![configure test pipelines in codeship CI](https://docs.testsigma.com/images/codeship-ci/configure-test-pipelines-codeship-CI.png)


6. Go to the Testsigma Executions page to [get the Execution ID](https://testsigma.com/docs/continuous-integration/get-test-plan-details/) and [CI Webhook URL](https://testsigma.com/docs/configuration/api-keys/) as shown below:
![Get Test Plan ID](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/trineid.png)


1. Replace the **&lt;execution-ID&gt;**, **&lt;Username&gt;** and **&lt;Password&gt;** in the following script:

Perl

```
#!/bin/bash

echo "Triggering Execution!"

# Triggering an execution using the <Execution-ID> from Testsigma Execution details page. Use your account login details as <Username> and <Password>
currentrunid=$(curl -sS -X POST -H 'Content-type: application/json' -u <Username:<Password> https://app.testsigma.com/rest/execution/<Execution-ID>/run)

echo "Started Execution. Waiting for tests to complete..."

currentstatus=1

#Use the Execution Status Check API and loop until the value of 'status' in the API Response equals to 0.
while [ $currentstatus -ne 0 ]; do currentstatus=$(curl -sS -X GET -H 'Content-type: application/json' -u <Username:<Password> https://app.testsigma.com/rest/execution/<Execution-ID>/run/$currentrunid/status | jq '.status'); sleep 5; done

echo "Test Execution Completed. Checking results..."

#Get the value of 'result' from the API Response for Execution Status Check API
currentresult=$(curl -sS -X GET -H 'Content-type: application/json' -u <Username:<Password> https://app.testsigma.com/rest/execution/<Execution-ID>/run/$currentrunid/status | jq '.result')

echo $currentresult

#Check the result of the execution using Execution Status Check API - If the value of 'result' is 0, the test passed. Else, the test failed.
if [ $currentresult -ne 0 ]; then echo "Test Failed. Please check Testsigma to know the reason for failure."; else echo "Test Passed! You may deploy now!"; fi

#Return the result as exit code - Non-zero value for execution result depicts Test failure and also triggers this script failure.
$(exit $currentresult)

```


8. Paste the script in the new **test commands** box as shown below and click on the **Save and go to Dashboard** button.
![Configure test pipelines, save and go to dashboard button in codeship CI](https://docs.testsigma.com/images/codeship-ci/configure-test-pipelines-save-and-go-to-dashboard-button-codeship-CI.png)


9. Now go to the **Project Settings > Build Trigger** to add a build Trigger.
![configure your branches in codeship CI](https://docs.testsigma.com/images/codeship-ci/configure-your-branches-codeship-CI.png)


10. Optional - You may also go to **Project Settings > Deploy** to add details of your deployment platform.
 
That's all we need to do to trigger the Testsigma Executions in the CodeShip Pipeline. With the above settings, the build will be triggered whenever there is a change in the repository and as soon as the build is triggered, the tests will begin in Testsigma. The script will wait until the test completes and checks that the result of the tests is passed.


---