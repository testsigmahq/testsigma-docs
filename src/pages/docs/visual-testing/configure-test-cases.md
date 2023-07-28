---
title: "Visual Testing - Configure Test Cases"
metadesc: "How to configure visual testing for your Test Cases"
noindex: false
order: 14.5
page_id: "Visual Testing - Configure Test Cases"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to Configure Test Cases for Visual Testing"
  url: "#steps-to-configure-test-cases-for-visual-testing"
---

<br>

There might be times when you want to fail the Test Case if the Visual Test fails. With Testsigma, you can now configure Test Cases by turning the feature on while creating the Test Cases. This article explains how to enable this feature. *For the same feature on the Test Step level, refer to [Configure Test Steps](https://testsigma.com/docs/visual-testing/configure-test-steps/).*

Here is a quick GIF demonstrating how to enable this feature in Testsigma.
![GIF Explaining Feature](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/stepsgif.gif)

---

## **Steps to Configure Test Cases for Visual Testing**
1. Navigate to **Test Development > Test Cases**, and click **Create**.
![Navigate to Test cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/navigatetotc.png)

2. On the **Create Test Case** page, enter the **Name** and **URL** of the application you want to test and click on **Show Advanced Options**.
![Advanced Options](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/showadvancedoptions.png)

3. Turn on the toggle to **Fail Test case if Visual Test Fails**.
![Toggle](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/toggle.png)

4. Click either **Write Test Manually** or **Record steps** to add steps to your Test Case.
![Create Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/createsteps.png)

5. Once you add the test steps, click **Run** to execute the Test Case.
![Click on Run](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/clickonrun.png)

[[info | **NOTE**:]]
|This feature becomes available only if you rerun the Test Case. This is because, to execute Visual Testing, Testsigma needs a base image corresponding to the Test Step.

6. After successful execution of the Test Case, click on **Re-Run Test Case**.
![Re-Run Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/reruntc.png)

7. You can click on the camera icon to compare the screenshots.
![Icon](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/icon.png)

8. You can see the comparison as shown below:
![Compare Snapshots](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/comparison.png)

[[info | **NOTE**:]]
|In case you want to fail the Test Case for some Visual Tests and not fail for others, you can use the setting highlighted below in the Test Step settings. This will help if you have some flaky Visual Tests that give false results.
|![Ignore Setting](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ignorestep.png)