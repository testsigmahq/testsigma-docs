---
title: "Dry runs or ad-hoc runs"
metadesc: "Ad-hoc runs will verify the correctness of the test steps in a test case. Learn how to perform ad-hoc runs for a test case in Testsigma."
noindex: false
order: 9.11
page_id: "Ad-hoc Runs"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to perform ad-hoc runs for a test case"
  url: "#steps-to-perform-ad-hoc-runs-for-a-test-case-in-testsigma"
- type: link
  name: "Web applications"
  url: "#web-applications" 
- type: link
  name: "Mobile applications"
  url: "#mobile-applications"  
- type: link
  name: "Dry run result"
  url : "#dry-run-result" 
- type: link
  name: "Steps to edit and run an existing dry run"
  url: "#steps-to-edit-and-run-an-existing-dry-run"
---

---

Ad-hoc runs are used to verify the correctness of the test steps in a test case before finalizing the test cases for deployment. They are called Ad-hoc runs as they can be run at any time you need to verify their correctness.

---

## **Prerequisites:**

You should already know how to:

1. [Create a test case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).

2. Create test steps [using simple English based actions](https://testsigma.com/docs/test-cases/step-types/natural-language/) and [using test recorder](https://testsigma.com/docs/test-cases/create-steps-recorder/web-apps/overview/).

---

## **Steps to perform ad-hoc runs for a test case**

1. Create a test case and write the test steps.

2. On the right top corner, click on the **Run** button. This is the first step to start the ad-hoc run. On clicking the **Run** button, the **Ad-hoc** run layover appears.

![The run button on a test case details page in Testsigma](https://docs.testsigma.com/images/adhoc-runs/run-button-test-case-details-page-testsigma.png)

3. On clicking on the button **Run**, the **Ad-hoc run** layover appears. In the next steps we will configure this ad-hoc run via this layover. Note that the configuration settings are different for different applications.

![adhoc run layover over a test case page in Testsigma](https://docs.testsigma.com/images/adhoc-runs/ad-hoc-run-layover-over-a-test-case-page-testsigma.png)

## **Web applications**

In the **Ad-hoc run** layover provide the following configuration settings:

1. **Test lab**: Select the test lab that you want to run the test case on. You can run the tests on Testsigma cloud labs, your local device or other vendor platforms including SauceLabs, BrowserStack, Kobiton, etc.

2. **Test machines**: Select the appropriate test machines and provide the following configuration details:
    1. OS
    2. OS version
    3. Browser
    4. Browser version
    5. Resolution
3. **Additional settings**: Under additional settings, provide the following details:
   1. **Page timeout**: Duration for which the test should wait for the page to load.
   2. **Element timeout**: Duration for which the test should wait for the element to load.
   3. **Environment**: Select the test environment.
   4. **Screenshot**: Select when the screen shots need to be taken. For example, for **All steps** or for **Failed steps** alone.  
4. **Desired capabilities**: Desired capabilities are key-value pairs.

5. Click on **Run now**.<br>
&emsp;

## **Mobile applications**

### **Android**

 In the **Ad-hoc run** layover provide the following configuration settings:
<ol>
 <li><strong>Test lab</strong>: Select the test lab that you want to run the test case on. You can run the tests on Testsigma cloud labs, your local device or other vendor platforms including SauceLabs, BrowserStack, Kobiton, etc.</li>
 <li><strong>Test device</strong>: Test cases can be run either on real devices or on emulators. The emulator mimics real devices so that you can run your test cases on multiple devices, virtually.<br> The emulator offers the following advantages:
 <ul>
 <li><strong>Flexibility</strong>: Simulates a wide variety of devices. </li>
 <li><strong>High fidelity</strong>: The emulator possesses nearly all the capabilities of a real device.</li>
 <li><strong>Speed</strong>: Running your tests on the emulator is faster and easier than doing on a physical device.</li>
 </ul>
 To run the tests on emulators, select the checkbox <strong>Use Emulators</strong>.<br>To configure the test device settings provide the following details:
<ol>
<li>OS version</li>
<li>Device version</li>
</ol></li>
<li><strong>App details</strong>: To provide the details of the applications under test select any one of the following option
<ul>
<li><strong>Use Path</strong>: Specify the publicly accessible URL of the application</li>
<li><strong>Use Details</strong>: Specify the application unique identifier (UID)</li>
<li><strong>Use Uploads</strong>: Specify the application uploaded to Testsigma</li>
</ul></li>
<li><strong>Additional settings</strong>: Under additional settings, provide the following details:
<ul>
<li><strong>Page timeout</strong>: Duration for which the test should wait for the page to load.</li>
<li><strong>Element timeout</strong>: Duration for which the test should wait for the element to load.</li>
<li><strong>Environment</strong>: Select the test environment.</li>
<li><strong>Screenshot</strong>: Select when the screen shots need to be taken. For example, for <strong>All steps</strong> or for  <strong>Failed steps</strong> alone.</li>
<li><strong>Desired capabilities</strong>: Desired capabilities are key-value pairs.</li>
</ul></li>
<li>Click <strong>Run now</strong>.</li>
</ol>

![adhoc run for android](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/runs/adhoc-runs/ad_hoc_run_layover.png)

### **iOS**
In the **Ad-hoc run** layover provide the following configuration settings:
<ol>
 <li><strong>Test lab</strong>: Select the test lab that you want to run the test case on. You can run the tests on Testsigma cloud labs, your local device or other vendor platforms including SauceLabs, BrowserStack, Kobiton, etc.</li>
 <li><strong>Test device</strong>: Test cases can be run either on real devices or on Simulators. The Simulator mimics real devices so that you can run your test cases on multiple devices, virtually.<br> The Simulator offers the following advantages:
 <ul>
 <li><strong>Flexibility</strong>: Simulates a wide variety of devices. </li>
 <li><strong>High fidelity</strong>: The Simulator possesses nearly all the capabilities of a real device.</li>
 <li><strong>Speed</strong>: Running your tests on the Simulator is faster and easier than doing on a physical device.</li>
 </ul>
 To run the tests on Simulators, select the checkbox <strong>Use Simulators</strong>.<br>To configure the test device settings provide the following details:
<ol>
<li>OS version</li>
<li>Device version</li>
</ol></li>
<li><strong>App details</strong>: To provide the details of the applications under test select any one of the following option
<ul>
<li><strong>Use Path</strong>: Specify the publicly accessible URL of the application</li>
<li><strong>Use Details</strong>: Specify the application unique identifier (UID)</li>
<li><strong>Use Uploads</strong>: Specify the application uploaded to Testsigma</li>
</ul></li>
<li><strong>Additional settings</strong>: Under additional settings, provide the following details:
<ul>
<li><strong>Page timeout</strong>: Duration for which the test should wait for the page to load.</li>
<li><strong>Element timeout</strong>: Duration for which the test should wait for the element to load.</li>
<li><strong>Environment</strong>: Select the test environment.</li>
<li><strong>Screenshot</strong>: Select when the screen shots need to be taken. For example, for <strong>All steps</strong> or for  <strong>Failed steps</strong> alone.</li>
<li><strong>Desired capabilities</strong>: Desired capabilities are key-value pairs.</li>
</ul></li>
<li>Click <strong>Run now</strong>.</li>
</ol>

![ad-hoc-run-layover-ios](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/runs/adhoc-runs/ad_hoc_run_layover_ios.png)

## **Dry run result**

After clicking the **Run Now** button, wait for the test to run. The results will appear on your screen automatically.
![Adhoc run result in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/adhoc.gif)

Below is a GIF demonstrating how the step-by-step real-time test case execution would look like for a web application:
![step-by-step adhoc run in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/runs/adhoc-runs/step-by-step-adhoc-run-gif.gif)

&emsp;

## **Steps to edit and run an existing dry run**

There will be times when you might want to re-run an existing dry run after making some changes to it. In this section, we will discuss how to do it.

1. Go to a test case that has existing dry runs.
2. On the test case details page, click on the **Dry runs** tab.
3. On the **Dry runs** tab, click on one of the existing dry runs.
4. The **Dry run** interface would look like the screenshot below:

![Interface for a Dry Run in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/runs/adhoc-runs/dry-run-updated-ui.png)

5. As you would see, there are tabs named **Test steps(executed)** and **Test steps(current)**.

   The **Test steps(executed)** displays test steps that were executed for the existing dry run. The test steps here cannot be edited.

   The **Test steps(current)** displays the same test steps as **Test steps(executed)** but they can be edited.

   So, you go to the tab **Test steps(current)**
6. On the **Test steps(current)** tab, make the needed edits. Make sure that you save your edits too.
7. Click on the **Run** button on the top right corner of the page.
