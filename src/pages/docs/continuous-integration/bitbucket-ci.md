---
title: " Integrate Testsigma with Bitbucket CI"
metadesc: "How to integrate Testsigma with Bitbucket CI"
noindex: false
order: 12.22
page_id: "Integrate Testsigma with Bitbucket CI"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites:"
  url: "#prerequisites"
- type: link
  name: "Steps to Integrate Bitbucket with Testsigma"
  url: "#steps-to-integrate-bitbucket-with-testsigma"
---
---

You can trigger tests automatically with Bitbucket integration with Testsigma. This article explains how to integrate Bitbucket with Testsigma for CI/CD purposes.

---

## **Prerequisites**
- Testsigma API key. For more information, see [Generate API Key](https://testsigma.com/docs/configuration/api-keys/).
- Testsigma Test Plan ID. For more information, refer to [Get Test Plan ID](https://testsigma.com/docs/continuous-integration/get-test-plan-details/).

---

## **Steps to Integrate Bitbucket with Testsigma**
1. On your project, navigate to **Repository > Pipelines**.
![Bitbucket Project](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/bbprojet.png)

2. Click on **Create your first pipeline** and select **Starter pipeline**.
![Create First Pipeline](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/plbb.png)

3. Create a job using the below YML sample.

```
pipelines:
  default:
    - parallel:
      - step:
          name: 'Build and Test'
          script:
            - echo "Your build and test goes here..."
            - echo "Calling Shell Script of testsigma"
            - chmod a+x testsigma-cicd.sh
            - ./testsigma-cicd.sh
```

[[info | **NOTE**:]]
|Refer to the Shell Script to get the sh script, which contains the command that triggers the test plan and fetches the run result. You can place the sh script in the same project, call the file inside the YML file, or obtain it from any external sources by providing the appropriate path.<br> <br>
|Any bash runner can work with the provided YML file. For instance, if you are using the docker runner, you can use the YML file as it is. However, if you have a different runner like powershell, you must modify the YML file to make it executable in the powershell runner. Additionally, ensure that powershell is version seven or above.

4. In the shell script, provide the **Test Plan ID** and **API Key**. 
![Test Plan In Shell Script](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tsssbb.png)

5. Once you have created the YML script, click on **Commit** to run the job.
![Commit](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/firstplbb.png)

6. Once the job is completed you can see the execution report as an XML report based on the path you have shared on the shell script.
![Report](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/buildbb.png)

---
