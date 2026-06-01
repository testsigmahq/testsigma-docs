---
title: " Integrate Testsigma with Bitrise CI"
metadesc: "How to integrate Testsigma with Bitrise CI"
order: 13.20
page_id: " Integrate Testsigma with Bitrise CI"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Follow"
  url: "#steps-to-follow"
---

---

Bitrise is a CI tool specifically designed for mobile continuous integration and delivery system for iOS and Android native apps. Bitrise is an enterprise product and hence provides support for build executions on Linux and macOS as well.

---

> <p id="prerequisites">Prerequisites</p>
> 
>    - User needs a repository where the steps mentioned in a shell script file can be uploaded and updated. 
>    - To run a Test Plan created in Testsigma, update the filename/filepath of your shell script (e.g., bitrise.sh). Make sure this file exists in the repository linked to your app. Copy the shell script from this page into your bitrise.sh file and set the following properties:
>     - `TESTSIGMA_API_KEY`
>     - `TESTSIGMA_TESTPLAN_ID`
>     - `MAX_WAIT_TIME_FOR_SCRIPT_TO_EXIT`

---

## **Steps to Follow** 

### **Step 1: Create Workspace** 

1. After logging in, open the workspace dropdown in the top-left corner and click **+ Create Workspace**.
   ![Create Workspace](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_bitrise_1.png)

2. Enter a name for your new workspace and click **Create**.
   ![Create](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_bitrise_2.png)

---

### **Step 2: Setting Up a New Project with Bitrise CI**

1. Navigate to **Dashboard** from the left navigation bar, then click **+ New Project**.
   ![Dashboard](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_bitrise_3.png)

2. In the **Choose how you want to get started** dialog, select **Start with Bitrise CI**.
   ![Start with Bitrise CI](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_bitrise_4.png)

3. Configure your app's privacy settings as needed, then click **Next**.
   ![Next](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_bitrise_5.png)

4. Use the dropdown in the **Provider** field to select the required app, then click **Connect account**.
   ![Provide](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_bitrise_6.png)

[[info | **Note:**]]
| - Select your Git provider: GitHub, GitLab, or Bitbucket.
| - Authorize Bitrise to access your repositories.
| - Choose the repository that contains your **bitrise.sh** script.

5. A new tab will open to authorize access — click **Authorize** to grant Bitrise access to GitHub.
   ![Authorize](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_bitrise_7.png)

6. On the **Install & Authorize Bitrise** screen, click **Install & Authorize**.
   ![Install](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_bitrise_8.png)

7. Browse and select the desired repository from GitHub, then click **Next**.
   ![Next](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_bitrise_9.png)

8. From the **Default Branch** dropdown, choose the appropriate branch and click **Next**.
   ![Default](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_bitrise_10.png)

9. Bitrise will now attempt to connect and verify the repository while configuring the app. This may take a few moments.
   ![Verify](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_bitrise_11.png)

[[info | **Note:**]]
| - If automatic configuration fails, select the **Skip and configure manually** radio button and click **Proceed**. ![View 1st build](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_bitrise_12.png)
| - Under the **Configure your build** section, open the **Project Type** dropdown and choose **Other**. ![Other](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_bitrise_13.png)

10. Click **View 1st Build**.
   ![View 1st build](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_bitrise_14.png)  

---

### **Step 3: Configure the Shell Script as Step** 

1. On the **Build #1** screen, click **Edit Workflow**.
   ![Edit workflow](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_bitrise_15.png)

2. In the workflow editor, you can define a custom workflow and add the steps you need. You can also remove any auto-generated steps that aren't required.

3. Click the **+** icon to add a new step.
   ![new step](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_bitrise_16.png)

4. Search for **Script Runner**.
   ![Script Runner](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_bitrise_17.png)

5. Expand the **When to run** section, enter `./bitrise.sh` in the **Script location** field, set `./` in the **Working directory (option)** field, and leave all other fields at their default values, and click **Save Changes**. 
   ![Configure](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_bitrise_18.png)

6. Return to your project and click **Start Build**.
   ![Save Changes](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_bitrise_19.png)

7. You can monitor progress in the build run section to view logs. Once all steps are complete, the build will be marked as passed or failed based on the outcome.
   ![Start Build](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_bitrise_20.png)

---
