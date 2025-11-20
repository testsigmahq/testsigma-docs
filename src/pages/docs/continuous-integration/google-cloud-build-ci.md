---
title: "Integrate Testsigma with Google Cloud Build"
metadesc: "Integrate Testsigma with Google Cloud Build for seamless test automation | Trigger Testsigma test runs from your CI/CD pipeline using a shell script in GitHub."
noindex: false
order: 12.27
page_id: "integrate-testsigma-with-google-cloud-build"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Create or Select a Google Cloud Project"
  url: "#create-or-select-a-google-cloud-project"
- type: link
  name: "Navigate to Cloud Build"
  url: "#navigate-to-cloud-build"
- type: link
  name: "Create a Repository Connection"
  url: "#create-a-repository-connection"
- type: link
  name: "Create a Trigger"
  url: "#create-a-trigger"
- type: link
  name: "Run the Configuration"
  url: "#run-the-configuration"

---

---

You can integrate **Google Cloud Build** with your version control system to automate test execution using a shell script that triggers **Testsigma** tests via CI/CD. This article discusses configuring **Google Cloud Build** with a repository and executing test automation workflows using a **cloudbuild.yaml** file.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure you have:
> - A **GitHub** repository with your project code.
> - A **Google Cloud** project with billing enabled.
> - Admin permissions in both **GitHub** and **Google Cloud**.

---

## **Create or Select a Google Cloud Project**

1. Navigate to <a href="https://console.cloud.google.com/welcome/new?inv=1&invt=Ab1N5g" rel="nofollow">Google Cloud Console</a>. 

2. On the **Google Cloud** home page, click **Select a Project**.
   ![select a project](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/Google_Cloud_1.png)

3. In the **Select a project** dialog, click **New Project** if you don’t already have one.
   ![New Project](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/Google_cloud_2.png)

4. If you already have a project, select it from the list.

---

## **Navigate to Cloud Build**

1. Click the navigation menu.
   ![navigation menu](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/google_cloud_3.png)

2. In the navigation menu, click **View all products**.
   ![view all products](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/Google_cloud_4.png)

3. In the left panel, under **Categories**, click **CI/CD**.
   ![ci/cd](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/Google_cloud_5.png)

4. Click **Cloud Build** under the **CI/CD** section.
   ![cloud build](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/Google_cloud_6.1.png)

---

## **Create a Repository Connection**

1. In the **Cloud Build** navigation pane, click **Repositories** and then click **Connect repository** to connect your source code.
   ![connect repository](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/Google_cloud_7.png)

[[info | NOTE:]]
| - Ensure the tstrigger.sh file is present in the same repository and marked as executable. For information on the generic shell script, refer to the [documentation on generic Shell script](https://testsigma.com/docs/continuous-integration/shell-script/).
| - Ensure you have an API key and a Test Plan ID. For more information, refer to the [documentation on generating API keys](https://testsigma.com/docs/configuration/api-keys/) and <a href="https://docs.testsigma.com/images/azure-devops/get-test-plan-id.png" rel="nofollow">documentation on getting test plan ID</a>.
| -![tstrigger](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/Google_cloud_8.png)

1. On the **Connect repository** overlay, select your source code management provider from the list (we’re selecting **GitHub**), then click **Continue**.
   <img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/Google_cloud_9.png" style="width: 400px;" />

[[info | NOTE:]]
| - **Google Cloud Build** will redirect you to **GitHub**.

3. Return to **Google Cloud Build**, and it authenticates automatically. 

4. Once authentication is done, expand the drop-down in the **Select repository** step and select the required one. 

---

## **Create a Trigger**

1. Go to **Triggers** in the **Cloud Build** menu and click on **+ Create trigger**.
   ![create trigger](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/Google_cloud_10.png)

2. Enter a name for your trigger in the **Name** field. 
   ![Name](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/Google_cloud_11.png)

3. In the **Create trigger** page, under the **Source** section, expand the drop-down in the **Repository** and **Branch** fields and select the required ones. 
   <img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/Google_cloud_12.png" style="width: 400px;" />

4. Under the **Configuration** section, select the **Cloud Build configuration file (yaml or json)** radio button. 
   <img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/Google_cloud_13.1.png" style="width: 400px;" />

5. Under the **Location** section, select the **Repository** radio button to automatically fetch the pipeline file details from your **GitHub** repository.

6. If you select the **Inline** radio button and click **Open editor** to manually add your YAML configuration.
   <img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/Google_cloud_14.png" style="width: 400px;" />

7. Add the following in the **Edit Inline Configuration** overlay and click **Done**:

```
steps:
  - name: 'ubuntu:20.04'
    args:
      - '-c'
      - |
        apt-get update && apt-get install -y curl bash coreutils
        chmod +x tstrigger.sh
        ./tstrigger.sh
    entrypoint: bash
options:
  logging: CLOUD_LOGGING_ONLY
```
<img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/Google_could_15.png" style="width: 400px;" />

8. Under the **Advanced** section, expand the drop-down in the **Service account** field, select the required account, and click **Create**.
   <img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/Google_cloud_16.png" style="width: 400px;" />

---

## **Run the Configuration**

1. Click **Run** on the newly created trigger. 
   ![run](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/Google_cloud_17.png)

2. You can view the build results under **History** in the **Cloud Build** menu. 
   ![history](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/Google_cloud_18.png)
   
---