---
title: " Integrate Testsigma with Bitrise CI"
metadesc: "How to integrate Testsigma with Bitrise CI"
order: 12.20
page_id: " Integrate Testsigma with Bitrise CI"
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

---

Bitrise is a CI tool specifically designed for mobile continuous integration and delivery system for iOS and Android native apps. Bitrise is an enterprise product and hence provides support for build executions on Linux and Mac Os as well.
 
---
##**Pre-requisite:**
  User needs a repository where the steps mentioned in a shell script file can be uploaded and updated. 

---
##**Steps to follow:**

Below we will cover the steps in 3 parts:
* Create Workspace
* Add an app by selecting the Account / Workspace.
* Configure the shell script as Step

Let’s begin.


### Part1: Create Workspace
1. Once a user logs in, user has to create a workspace. A workspace can be created either byusing the plus icon on the screen or under the profile picture of the user.

   ![Create Work space Step 1](https://docs.testsigma.com/images/bitrise/bitrise-create-workplace-1.png)

   ![Create Work space Step 2](https://docs.testsigma.com/images/bitrise/bitrise-create-workplace-step-2.png)

2. Mention the name of the workspace you would like to create:
   ![Fill workspace name](https://docs.testsigma.com/images/bitrise/bitrise-workplace-form.png)



### Part2: Add an app by selecting the Account / Workspace.
1. Once the workspace is created, proceed to add the app:
   ![Add new app](https://docs.testsigma.com/images/bitrise/bitrise-add-app.png)
2. Proceed with the steps to add an app by selecting the Account / Workspace.
3. Set the privacy for the app as per your requirement:
   ![Choose account](https://docs.testsigma.com/images/bitrise/bitrise-set-app-privacy.png) 
4. Once the privacy option is selected, Next button will be activated. Click on Next button.
5. You would be prompted to choose a repository for the workspace from a list of options. You can even setup a path manually by selecting the manual setup option:
   ![Choose repo](https://docs.testsigma.com/images/bitrise/bitrise-github-repo-connect.png)
   ![Connect repo](https://docs.testsigma.com/images/bitrise/bitrise-github-repo.png)
6. In case the repository is not a public repository, please update the link for repository accordingly:
   ![Connect repo](https://docs.testsigma.com/images/bitrise/bitrise-github-private-confirm.png)
7. Choose a branch for the build
   ![Select Branch](https://docs.testsigma.com/images/bitrise/bitrise-github-branch-selection.png)
8. Bitwise will try to connect and verify the repository. This is when Bitwise tries to configure the app. This might take a few seconds.
9. If the system is unable to verify the repository, you can update the URL or even proceed to configure the same manually
   ![Manual Configure](https://docs.testsigma.com/images/bitrise/bitrise-automatic-configuration-failed.png)
10. Click on Proceed to move to the next step.
11. Select an appropriate option from the project build configuration list
    ![Select App Type](https://docs.testsigma.com/images/bitrise/bitrise-select-application-type.png)
12. Click ‘I m ready’ and then click on Finish and will see bellow screen if everything is proper
    ![Successfully added App](https://docs.testsigma.com/images/bitrise/bitrise-create-app.png)

### Part3: Configure the shell script as Step

1. Select the App and move to the Workflow Editor.
   ![Workflow builder](https://docs.testsigma.com/images/bitrise/bitrise-select-app.png)
2. In the workflow editor, you can define your own workflow and add steps accordingly.
3. You can also remove the steps that got added to the build flow automatically, incase the steps are not needed.
4. Inorder to delete any steps, select the step by clicking on it and scroll down until the Delete Step button is visible.
   ![Workflow builder - delete step](https://docs.testsigma.com/images/bitrise/bitrise-delete-step.png)
5. Click ‘Delete Step’ button to delete the steps.
6. Click on the + icon to add a new step
   ![Workflow add shell](https://docs.testsigma.com/images/bitrise/bitrise-add-shell-script.png)
7. Search for the task that you want to add as part of the step.
   ![Workflow step runner](https://docs.testsigma.com/images/bitrise/bitrise-add-script-runner.png)
8. Select the task and then modify / update the field values for the respective task.
9. In this case to execute the Test Plan developed in Testsigma, you have to update the filename / filepath of the shell script file
   <br/>Ex: bitrise.sh file should be available in the repository specified for this app. You need to place the [shell script from page](https://testsigma.com/docs/continuous-integration/shell-script/) into bitrise.sh file and update below properties
   - TESTSIGMA_API_KEY
   - TESTSIGMA_TEST_PLAN_ID <br/>
   - MAX_WAIT_TIME_FOR_SCRIPT_TO_EXIT <br/>
     ![Workflow step inputs](https://docs.testsigma.com/images/bitrise/bitrise-step-inputs.png)
10. This shell file has the details of the steps and the Test plan ID so that the execution can be polled and mapped accordingly.
11. Once all steps are updated, click on the save button to save the build pipeline.
    ![Workflow Save](https://docs.testsigma.com/images/bitrise/bitrise-save-workflow.png)
12. Once the build pipeline is saved successfully, you can trigger the build run or even schedule the run.
    ![Schedule Build](https://docs.testsigma.com/images/bitrise/bitrise-schedule-build.png)
13. Select appropriate details and click ‘Start Build’ button.
    ![Workflow form](https://docs.testsigma.com/images/bitrise/bitrise-build-form.png)
14. Logs can be viewed in the build run section.
15. Upon execution of all steps, the build status is marked as passed or failed accordingly.


That's it.