---
title: "Ad-hoc Run"
pagetitle: "Perform Ad-Hoc Runs with Testsigma's Flexible Testing Capabilities"
metadesc: "Enhance testing efficiency today by initiating ad-hoc runs anytime for precise testing using Testsigma. You can easily configure settings for web, Android, and iOS apps."
noindex: false
order: 9.11
page_id: "ad-hoc-runs-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Ad-hoc Run in Test Case"
  url: "#ad-hoc-run-in-test-case"
- type: link
  name: "Web Application"
  url: "#web-application"
- type: link
  name: "Mobile Web Application"
  url: "#mobile-web-application" 
- type: link
  name: "Android Application"
  url: "#android-application"  
- type: link
  name: "iOS Application"
  url : "#ios-application" 
- type: link
  name: "Desktop Windows"
  url: "#desktop-windows"
- type: link
  name: "Rest API Application"
  url: "#rest-api-application" 
- type: link
  name: "Adding Prerequisite Test Case"
  url: "#adding-prerequisite-test-case" 
---

---

Testsigma's Ad-hoc Run feature allows you to run your test cases without impacting the real test outcomes. You can use this functionality to verify if your test cases are set up accurately and performing as intended before proceeding with full-scale testing. 

This documentation will guide you through setting up Test Labs and Test Machines, selecting the App Source, adjusting Additional Settings, and configuring Desired Capabilities.

---

## **Prerequisites:**

Before using the Ad-hoc Run, you must understand specific concepts such as creating [Projects](https://testsigma.com/docs/projects/overview/) and [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/), understanding [Test Labs](https://testsigma.com/docs/test-management/test-plans/supported-test-lab-types/), setting up [Local Devices with Testsigma Agent](https://testsigma.com/docs/agent/overview/), [Environments](https://testsigma.com/docs/test-data/types/environment/#use-environment-in-ad-hoc-run-page), [Headless Tests](https://testsigma.com/docs/test-management/test-plans/headless-testing/#enabling-headless-browser-testing-in-test-case), and [Desired Capabilities](https://testsigma.com/docs/desired-capabilities/overview/) for all applications. You should also be familiar with [Uploads](https://testsigma.com/docs/uploads/upload-apps/), [Camera Image Injection](https://testsigma.com/docs/test-cases/image-injection/) and [Network Logs](https://testsigma.com/docs/desired-capabilities/network-logs/#enable-network-logs-in-test-case) for Android and iOS applications.

---

## **Ad-hoc Run in Test Case**

1. Create a **Test Case** with a list of the **test steps** and then click **Run** in the top right of the **Test Case Details** page to initiate an **Ad-hoc Run** overlay.
2. Configure the ad-hoc run in the **Ad-hoc Run** overlay based on the application type in the below section. ![Perform Ad-hoc Run](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/perform_adhoc.gif)
3. Click **Save Configuration** in the screen's bottom right corner to save the Ad-hoc Run setups configuration. Then, enter a **Name** for the configuration in the pop-up window that appears and click **Save**.
4. Click on **Saved Configs** at the top of the screen to reuse the saved configuration, and a drop-down list will appear. Select the Saved Config from this list. ![Save Config of Ad-Hoc](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/saveadhocconfig.gif)
5. The Ad-hoc Run overlay will be automatically pre-filled with the saved configuration for your next runs when selected.
6. In the **Test Case Details** page, click **Ad-Hoc Runs** in the right Navigation Bar to open the right sidebar. This will enable you to view the history and details of Ad-Hoc Run results for the Test Case. ![View History of Ad-Hoc Run](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/view_adhocrundetails.png)


[[info | **NOTE**:]]
| Whitelisting of Testsigma IP addresses is necessary to ensure that the Testsigma servers and lab environments can securely interact with your applications and systems for testing activities. For more information, refer to [whitelisting Testsigma IP addresses](https://testsigma.com/docs/runs/test-locally-hosted-applications/#whitelisting-testsigma-ip-addresses)

---

## **Web Application**

In the Ad-hoc run layover, provide the following configuration settings for a web application:
1. **Test Lab**: Select the test lab to run the test case. You can run the tests on **Testsigma Cloud Lab**, your **Local Devices** or other vendor platforms, including **SauceLabs**, **BrowserStack**, **Lamba Test**, etc.
2. **Test Machine**: Select the appropriate test machines and provide the following configuration details:
   1. **OS** & **Version**
   2. **Browser** & **Version**
   3. **Resolution**
3. **Headless Test**: Click the toggle button for **Headless Test** to enable headless testing for a test case.
4. **Additional Settings**: Provide the following details under additional settings:
   1. **Environment**: Select the test environment.
   2. **Screenshot Capture**: Select when the screenshots need to be taken, for **All Steps** or **Failed Steps** alone.
   3. **Page Timeout**: Duration for which the test should wait for the page to load.
   4. **Element Timeout**: Duration for which the test should wait for the element to load.
5. **Desired Capabilities**: Provide **Key**, **Data Type** and **Value** under Desired Capabilities.
6. Click on **Run Now**. ![Ad-hoc screen for Web Application](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/webappliaction_adhocrun.png)

---

## **Mobile Web Application**

In the Ad-hoc run layover, provide the following configuration settings for a mobile web application:
1. **Test Lab**: Select the test lab to run the test case. You can run the tests on **Testsigma Cloud Lab**, your **Local Devices** or other vendor platforms, including **SauceLabs**, **BrowserStack**, **Lamba Test**, etc.
2. **Test Machine**: Select the appropriate test machines and provide the following configuration details:
   1. **OS** & **Version**
   2. **Device**
   3. **Browser**
3. **Additional Settings**: Provide the following details under additional settings:
   1. **Environment**: Select the test environment.
   2. **Screenshot Capture**: Select when the screenshots need to be taken, for **All Steps** or **Failed Steps** alone.
   3. **Page Timeout**: Duration for which the test should wait for the page to load.
   4. **Element Timeout**: Duration for which the test should wait for the element to load.
4. **Camera Image Injection**: Click the toggle button for **Camera Image Injection** to enable camera image injection for a test case.
5. **Network Logs**: Click the toggle button for **Network Logs** to enable network logs for a test case.
6. **Desired Capabilities**: Provide **Key**, **Data Type** and **Value** under Desired Capabilities.
7. Click on **Run Now**. ![Ad-hoc screen for Mobile Web Application](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mobilewebapplication_adhocrun.gif)

---

## **Android Application**

In the Ad-hoc run layover, provide the following configuration settings for an Android application:
1. **Test Lab**: Select the test lab to run the test case. You can run the tests on **Testsigma Cloud Lab**, your **Local Devices** or other vendor platforms, including **SauceLabs**, **BrowserStack**, **Lamba Test**, etc.
2. **Test Machine**: Select the appropriate test machines and provide the following configuration details:
   1. **OS** & **Version**
   2. **Browser** & **Version**
3. **App Source**: Select either one of the following options for an app source:
   1. **External Path**: Provide the publicly accessible URL of the application.
   2. **Uploaded Apps**: Select the application from uploaded apps in Testsigma.
4. **Additional Settings**: Provide the following details under additional settings:
   1. **Environment**: Select the test environment.
   2. **Screenshot Capture**: Select when the screenshots need to be taken, for **All Step**s or **Failed Steps** alone.
   3. **Page Timeout**: Duration for which the test should wait for the page to load.
   4. **Element Timeout**: Duration for which the test should wait for the element to load.
5. **Camera Image Injection**: Click the toggle button for **Camera Image Injection** to enable camera image injection for a test case.
6. **Network Logs**: Click the toggle button for **Network Logs** to enable network logs for a test case.
7. **Desired Capabilities**: Provide **Key**, **Data Type** and **Value** under Desired Capabilities.
8. Click on **Run Now**. ![Ad-hoc screen for Android Application](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/androidapplication_adhocrun.gif)

---

## **iOS Application**

In the Ad-hoc run layover, provide the following configuration settings for an iOS application:

1. **Test Lab**: Select the test lab to run the test case. You can run the tests on **Testsigma Cloud Lab**, your **Local Devices** or other vendor platforms, including **SauceLabs**, **BrowserStack**, **Lamba Test**, etc.
2. **Test Machine**: Select the appropriate test machines and provide the following configuration details:
   1. **OS** & **Version**
   2. **Browser** & **Version**
3. **App Source**: Select either one of the following options for an app source:
   1. **External Path**: Provide the publicly accessible URL of the application.
   2. **Uploaded Apps**: Select the application from uploaded apps in Testsigma.
4. **Additional Settings**: Provide the following details under additional settings:
   1. **Environment**: Select the test environment.
   2. **Screenshot Capture**: Select when the screenshots need to be taken, for **All Step**s or **Failed Steps** alone.
   3. **Page Timeout**: Duration for which the test should wait for the page to load.
   4. **Element Timeout**: Duration for which the test should wait for the element to load.
5. **Camera Image Injection**: Click the toggle button for **Camera Image Injection** to enable camera image injection for a test case.
6. **Network Logs**: Click the toggle button for **Network Logs** to enable network logs for a test case.
7. **Desired Capabilities**: Provide **Key**, **Data Type** and **Value** under Desired Capabilities. 
8. Click on **Run Now**. ![Ad-hoc screen for iOS Application](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/iosapp_adhocrun.gif)

---

## **Desktop Windows**

In the Ad-hoc run layover, provide the following configuration settings for a Desktop application:
1. **Test Lab**: Select the test lab as **Local Devices** to run the test case.
2. **Test Machine**: Select the registered active agent as Test Machine to run the test case.
3. **Desktop App Location**: Provide the Local URL for the application path.
4. **Environment**: Select the test environment.
5. **Desired Capabilities**: Provide **Key**, **Data Type** and **Value** under Desired Capabilities.
6. Click on **Run Now**. ![Ad-hoc screen for Desktop Windows](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/dekstopwindows_adhocrun.png)

---

## **Rest API Application**

In the Ad-hoc run layover, provide the following configuration settings for a Rest API:
1. **Test Lab**: Select the test lab, either **Testsigma Cloud Lab** or **Local Devices**, to run the test case.
2. **Environment**: Select the test environment.
3. **Desired Capabilities**: Provide **Key**, **Data Type** and **Value** under Desired Capabilities.
4. Click on **Run Now**. ![Rest API Application](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/restapiapp_adhocrun.png)

---

## **Adding Prerequisite Test Case**

You can add a prerequisite test case for any test case while executing the test case as dry runs. Follow the steps below to add a prerequisite test case for dry runs. 

1. Navigate to **Create Tests > Test Cases**, select a test case for which you want to add prerequisites and click on **Test Case Settings**.
   ![Test Case Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tcsfapr.png)

2. Select the prerequisite test case from the dropdown.
   ![Prereq TC](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sprtcitcs.png)

3. For **Dry Runs**, the test case will be executed after the prerequisite test case.  You can check the **Execution sequence** on the test case results page. 
   ![Dry Runs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/vprtcie.png)