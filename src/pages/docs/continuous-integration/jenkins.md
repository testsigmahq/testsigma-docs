---
title: "Integrate Testsigma with Jenkins "
metadesc: "How to integrate Testsigma with Jenkins"
noindex: false
order: 12.13
page_id: "Integrate Testsigma with Jenkins "
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Pre-requisites"
  url: "#pre-requisites"
- type: link
  name: "How to add the execution step in Jenkins pipeline"
  url: "#how-to-add-the-execution-step-in-jenkins-pipeline"
---

---

Jenkins is an open-source automation server that automates the building, testing, and delivery of software. It is a very popular tool used for CI/CD Pipeline and Build automation.

Testsigma provides a Jenkins plugin to automate Test Execution in your Jenkins Pipeline.

---
##**Pre-requisites:**

Testsigma Test Plan Run - 1.1 - Jenkins Plugin

You can install the Testsigma Test Plan run plugin installed from Jenkins Plugins page in your Jenkins Installation. You can also get it from here and place in your JENKINS_HOME/plugins directory -[Testsigma Jenkins Plugin direct link](https://plugins.jenkins.io/testsigma/)

---
## **How to add the execution step in Jenkins pipeline**

If you have a Jenkins pipeline in place, skip to step 2. Otherwise, follow the steps below to create a new Pipeline. 

Log into your Jenkins Instance after starting the Jenkins instance. It will take you to the Jenkins Dashboard as shown below:

![Jenkins Dashboard](https://docs.testsigma.com/images/jenkins/Jenkins-Dashboard.png)

### Step 1: Create a new pipeline
Create a new pipeline by clicking on 'New Item' on the left menu in the Dashboard page above. Enter a name, select 'Freestyle Project' as the Project type and click on the 'Ok' button to create the Pipeline.
![new-Job-Page-in-Jenkins](https://docs.testsigma.com/images/jenkins/new-Job-Page-in-Jenkins.png) 
### **Step 2: Add Build Stage**
Click on the 'Build' tab and then click on 'Add Build Step' to add your Build Stage using any of the available plugins such as Ant, Gradle, Shell script, etc.
![add-build-stage-in-Jenkins](https://docs.testsigma.com/images/jenkins/add-build-stage-in-Jenkins.png)
We suggest you get help from your Ops team in configuring the Build Pipeline if you are trying it for the first time.

### **Step 3: Add Test Stage using Testsigma Test Plan Run plugin**

1. Click on 'Add build step' to create a new Stage for Testsigma Test Plan Trigger and click on 'Testsigma Test Plan run'. This will create a new Stage using the installed Testsigma plugin (If you have not installed it yet, check the Prerequisites section)
![add test stage in jenkins with Testsigma](https://docs.testsigma.com/images/jenkins/add-test-stage-in-jenkins-with-Testsigma.png)
2. Enter the following details:
**Testsigma API Key:** Generated from [Settings > API Keys in Testsigma App](https://testsigma.com/docs/configuration/api-keys/)
**Testsigma Test Plan ID:**You can [get the Test Plan specific ID](https://testsigma.com/docs/continuous-integration/get-test-plan-details/) from the Test Plan details page(Test Plans> Click on Test Plan name > CI/CD Integration Tab)
**Maximum wait time for Task completion:** Specify the maximum time in minutes you want the Testsigma Plugin to wait before timing out. After this timeout, The execution will still continue in Testsigma and you can go to Testsigma to check the Test Plan status later.
Report File Path: The File path where the JUnit report XML file is stored
 
**Here's a sample entry:**

![sample entry while creating post-build Testsigma Trigger](https://docs.testsigma.com/images/jenkins/sample-entry-post-build-testsigma-trigger.png)
3. Click on 'Save' to save the changes.
 
### **Step 4: Try a Sample Build**
1. click on Build now to trigger the Pipeline manually to check.

![post-build testsigma trigger build now](https://docs.testsigma.com/images/jenkins/post-build-testsigma-triggger-build-now.png)
2. Click on the Build number and then click on the Console log to see the Logs for the execution. If everything went as expected, you would see a similar log.

![sample console output for post-build Testsigma Trigger](https://docs.testsigma.com/images/jenkins/post-build-testsigma-trigger-sample-console-output.png)
You can log into Testsigma to learn more about the results. 

That's all we need to automate the execution of a Testsigma test plan, when a successful build is triggered, using the Jenkins CI server.
 

