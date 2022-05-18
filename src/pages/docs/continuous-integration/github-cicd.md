---
title: "Integrate Testsigma with Github"
metadecs: "This document describes the step-by-step instructions for integrating Testsigma with Github " 
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

In this document, we will discuss how to integrate github with Testsigma for CI/CD purposes.

---
##**Pre-requisites:**
You should already know how to 
 1. [generate an API key from Settings.](https://testsigma.com/docs/configuration/api-keys/)
 2. [Get Test Plan ID from an existing Test Plan.](https://testsigma.com/docs/continuous-integration/get-test-plan-details/)

---
##**For Github CICD Integration:**

To create Github actions, we need to create a directory named workflows under the .github directory. 

![workflows directory created under folder .github](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/continuous-integration/github-cicd/workflows-under-dot-github.png)

Once the workflow directory is created, for different pipelines/workflows we can create any number of YML files which cater different build processes.

In this example, we have created a testsigma-cicd.yml file to trigger the build process whenever there is a commit to the provided git repository.

![testsigma cicd yml file created to trigger the build process](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/continuous-integration/github-cicd/testsigma-cicd-yml-file.png)

In this yml file, we have given a build step to trigger/run a Test Plan created in the Testsigma app.

![build step in yml file](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/continuous-integration/github-cicd/build-step-in-yml-file.png)

As you can see we are invoking the bash script contained in the file “run_smoke_tests.sh”.

Note: Refer https://testsigma.com/docs/continuous-integration/shell-script/ for a shell script to run/trigger Test plans in Testsigma.

To trigger a particular test plan, we need to provide the ID of that Test Plan and the API Key along with other parameters as shown below.

![test plan API key and other parameters in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/continuous-integration/github-cicd/test-plan-api-key-testsigma.png)

You can find the Test Plan/Execution ID under the CI/CD section of the Test Plan as shown below. For the Test plan in the below screenshot, the TestPlan ID is 802.

![test plan ID for a test plan as visible in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/continuous-integration/github-cicd/test-plan-id-for-a-test-plan-testsigma.png)

Refer to the below pages to know more about creating API Keys and how to fetch Test Plan Id. 

- [Generic Shell Script for Integrating with CI/CD pipelines](https://testsigma.com/docs/continuous-integration/shell-script/)
- [Generate an API key from Settings](https://testsigma.com/docs/configuration/api-keys/)
- [Get Test Plan ID from an existing Test Plan](https://testsigma.com/docs/continuous-integration/get-test-plan-details/)
- [Repo used to create this document](https://github.com/testsigmahq/Github-actions)


---