---
title: "GitLab Integration With Testsigma"
metadesc: "Integrate GitLab with Testsigma for effortless test automation | Improve your testing efficiency accelerate SDLC by integrating GitLab with Testsigma"
noindex: false
order: 12.23
page_id: "Integrate Testsigma with GitLab"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Pre-requisites:"
  url: "#pre-requisites"
- type: link
  name: "Steps to integrate GitLab with Testsigma"
  url: "#steps-to-integrate-gitLab-with-testsigma"
---


---

This article explains how to integrate GitLab with Testsigma for CI/CD purposes.

## **Pre-requisites:**
To integrate GitLab with Testsigma, you need the following information:
1. You should have a GitLab account.
2. Testsigma API key.
3. Testsigma Testplan ID, for more information on test plan ID, refer to [get test plan ID](https://testsigma.com/docs/continuous-integration/get-test-plan-details/).

<br>

## **Steps to integrate GitLab with Testsigma**

1. Login to your GitLab account. 

2. Create a blank project or create a CI/CD project as per your preference by clicking on **New project**.
![New Project](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/newproject.png)

3. On create project page, enter all the details and click on **Create project**.
![Create project](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/clickoncreateproject.png)

4. Navigate to **CI/CD** and click on **Jobs**.
![Navigate to CI/CD](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/clickoncicd.png)

5. Click on **Create CI/CD Configuration file** to create a YML file. Alternatively, you can also use the below YML sample to create the job.

```
stages:
 - build
build-code-job:
 stage: build
 script:
 - echo "Calling Shell Script of testsigma"
 - pwd
 - ls -la
 - chmod a+x gitlabcicd.sh
 - ./gitlabcicd.sh 
```

[[info | **NOTE**:]]
| 1.  Refer to the [Shell Script](https://testsigma.com/docs/continuous-integration/shell-script/) to get the sh script, which contains the command that triggers the test plan and fetches the run result. We call this sh script, gitlabcicd.sh, in the above YML file.
| 2. You can place the sh script in the same project, call the file inside the YML file, or obtain it from any external sources by providing the appropriate path.
| 3. Any bash runner can work with the provided YML file. For instance, if you are using the Docker runner, you can use the YML file as it is. However, if you have a different runner like Powershell, you must modify the YML file to make it executable in the Powershell runner. Additionally, ensure that Powershell is version seven or above.
 

 


6. Once you have access to the shell script, you need to provide the ID of that Test Plan and the API Key along with other parameters. 
    - To get the Test Plan ID, refer to [get Test Plan ID](https://testsigma.com/docs/continuous-integration/get-test-plan-details/). 
    - To get the API key, refer to [generate API Key](https://testsigma.com/docs/configuration/api-keys/).

[[info | **NOTE**:]]
|The keys **TESTSIGMAAPIKEY** and **TESTSIGMATESTPLAN_ID** in the script should be replaced with **API Key** and **Test Plan ID**, respectively. Refer to the example below. 
|
|![Example](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/example.png)

7. Click on **Commit changes** once you have created the YML script, and the job will start to run.
![Commit changes](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/commitchanges.png)

8. From the screenshot below, you can see the job running. You can also notice that the test plan configured inside the shell script would start running.
![Job running](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/coderunning.png)

Once the job is completed you can see the execution report as an XML report based on the path you have shared on the shell script.

9. Post completion of the job, you can see the details below:
![Post Run](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/postrun.png)


---