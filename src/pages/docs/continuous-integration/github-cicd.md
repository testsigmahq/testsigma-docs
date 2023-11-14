---
title: "Integrate Testsigma with Github"
metadecs: "This article discusses step-by-step instructions for integrating Testsigma application with Github | Learn how to integrate Github with Testsigma Application" 
order: 12.21
page_id: "github-cicd"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Pre-requisites:"
  url: "#pre-requisites"
- type: link
  name: "For Github CICD Integration"
  url: "#for-github-cicd-integration"
---

---
When you want to automate, customize, and, execute your software development workflows right in your github repository, you need to use github actions. In this document, we will discuss how to integrate Github with Testsigma for CI/CD purposes.

---

## **Pre-requisites:**
You should already know:
 1. The basics of github actions. If not, please refer here: [Quickstart with github actions](https://docs.github.com/en/actions/quickstart)
 2. [How to generate an API key from Settings.](https://testsigma.com/docs/configuration/api-keys/)
 2. [How to get Test Plan ID from an existing Test Plan.](https://testsigma.com/docs/continuous-integration/get-test-plan-details/)

---

## **For Github CICD Integration:**

To start with Github Actions, create a .github/workflows directory in your repository on GitHub if this directory does not already exist.

![workflows directory created under folder .github](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/continuous-integration/github-cicd/workflows-under-dot-github.png)

Once the workflow directory is created, for different pipelines/workflows we can create any number of YML files which cater to different build processes.

In this example, we have created a ***testsigma-cicd.yml*** file to trigger the build process whenever there is a commit to the provided git repository.

![testsigma cicd yml file created to trigger the build process](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/continuous-integration/github-cicd/testsigma-cicd-yml-file.png)

In this yml file, we have given a build step to trigger/run a Test Plan created in the Testsigma app.

![build step in yml file](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/continuous-integration/github-cicd/build-step-in-yml-file.png)

As you can see we are invoking the bash script contained in the file ***run_smoke_tests.sh***. You can get a copy of this ***run_smoke_tests.sh*** file here: [run_smoke_tests.sh](https://github.com/testsigmahq/Github-actions/blob/main/testsigma/run_smoke_tests.sh)

[[info | Note:]]
|Refer https://testsigma.com/docs/continuous-integration/shell-script/ for a shell script to run/trigger Test plans in Testsigma.

Similarly, the shell script [here](https://testsigma.com/docs/continuous-integration/shell-script/) can be used to trigger a particular test plan within your Testsigma account. For that, you need to provide the ID of that Test Plan and the API Key along with other parameters. To know how to get the Test Plan ID, refer [here](https://testsigma.com/docs/continuous-integration/get-test-plan-details/) and to get the API key, refer [here](https://testsigma.com/docs/configuration/api-keys/).
The key "TESTSIGMA_API_KEY" in the script needs to be provided the API Key value and the key "TESTSIGMA_TEST_PLAN_ID" needs to be provided the test plan ID. Below is how the script looks for our example:

![test plan API key and other parameters in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/continuous-integration/github-cicd/test-plan-api-key-testsigma.png)

[Repo used to create this document](https://github.com/testsigmahq/Github-actions)


---