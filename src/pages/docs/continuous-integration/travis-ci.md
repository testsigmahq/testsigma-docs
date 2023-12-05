---
title: "Integrate Testsigma with Travis CI"
metadesc: "Testsigma offers webhooks to trigger test plan executions remotely from the Travis CI tool | Learn how to integrate Travis CI with Testsigma"
order: 12.19
page_id: "Integrate Testsigma with Travis CI"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to follow:"
  url: "#steps-to-follow"
- type: link
  name: "Obtain API and Test Plan ID from Testsigma App"
  url: "#obtain-api-and-test-plan-id-from-testsigma-app"
- type: link
  name: "Update the Shell Script"
  url: "#update-the-shell-script"
- type: link
  name: "Configure the Travis CI Pipeline"
  url: "#configure-the-travis-ci-pipeline"
---


---


Testsigma offers webhooks for triggering Testsigma test plan executions remotely from any third-party tool that provides a Command Line Interface (CLI). In this article, we will see how to integrate Testsigma in Travis CI to trigger test executions automatically. These test executions will be triggered as part of your build generation triggers. Then, we will configure it to wait for the tests to complete execution and check if they passed before deployment.


---

## **Prerequisites**
 
 - A Travis CI Account with connected Source Code Management.
 
 - A CI/CD pipeline in Travis CI.

---

## **Steps to follow:**

Below we will cover the steps in 3 parts:

- Obtain API and Test Plan ID from Testsigma App

- Update the Shell Script

- Configure the Travis CI Pipeline


---


## **Obtain API and Test Plan ID from Testsigma App**

1. To get API key, navigate to **Settings > API Keys** and click on  **Generate API Key**. 
![Generate API Key](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/trinapi.png)

2. On **Generate API Key** overlay, enter **Name** and click on **Generate API Key**.
![Generate](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tringapi.png)

3. On **API Keys** page, hover over the generated API and click on **Copy API Key**.
![Copy API](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/triapicapi.png)

We will use this API Key to authenticate our remote Test Plan trigger requests from Travis CI.

4. To get Test Plan ID, navigate to **Test Plans > Test Plan > CI/CD Integrations**. You will find the execution ID for the Test Plan within the **REST API call to start Test Plan** section.
![Get Test Plan ID](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/trineid.png)


We will be using this Test Plan ID to specify which Test Plan to trigger from Travis CI. 

---
 
## **Update the Shell Script**
You need to have a script file in your Code Repository stored on Github, Bitbucket, Azure, or any such platform.
This script file contains commands to trigger the Testsigma Test Plan remotely.

Follow the below steps:

1. Copy the shell script from [generic shell script for integrating with CI/CD tools](https://testsigma.com/docs/continuous-integration/shell-script/)

2. Update your Testsigma API Key and Test Plan ID in the above script.
 
---

## **Configure the Travis CI Pipeline**

To run that script from your .travis.yml:
   1. Save it in your repository as
   ```
   scripts/trigger_testsigma_tests_and_wait.sh
   ```
   2. Make it executable by running
   ```
   chmod ugo+x scripts/trigger_testsigma_tests_and_wait.sh
   ```
   3. Commit it to your repository.
   4. Add it to your .travis.yml:
 script:
 ```
 ./scripts/trigger_testsigma_tests_and_wait.sh
 ```

<br>

With the above settings, the test plan will be triggered whenever there is a change in the repository, and as soon as the build is triggered, the tests will begin in Testsigma. The script will wait until the test is complete and check that the result is passed.


---