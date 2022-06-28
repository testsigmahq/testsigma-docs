---
title: " Integrate Testsigma with Bitbucket CI"
metadesc: "How to integrate Testsigma with Bitbucket CI"
noindex: false
order: 12.22
page_id: " Integrate Testsigma with Bitbucket CI"
warning: false
---
---

You will need to setup a Bitbucket pipeline to integrate Testsigma to Bitbucket. To know how to create a bitbucket pipeline please refer here: https://support.atlassian.com/bitbucket-cloud/docs/get-started-with-bitbucket-pipelines/


Follow below steps to configure your bitbucket pipeline to execute Testsigma tests:

1. Go to the page [here](https://testsigma.com/docs/continuous-integration/shell-script/) and save the script as "testsigma-cicd.sh"

2. Edit your bitbucket-pipelines.yml and add this command to your script section: 
testsigma-cicd.sh


With above changes, the "testsigma-cicd.sh" script will be triggered whenever the bitbucket pipeline executes. The script will wait until the test completes and checks that the result of the tests is passed.

---