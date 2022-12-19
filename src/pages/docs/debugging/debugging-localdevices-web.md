---
title: "Debug results on local devices (Web applications )"
order: 10.3
page_id: "Debug Results on Local Devices"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to execute test cases in debugger mode"
  url: "#steps-to-execute-test-cases-in-debugger-mode"
- type: link
  name: "Adding debug points to debug the test"
  url: "#adding-debug-points-to-debug-the-test"
- type: link
  name: "Fixing an error using debugging feature"
  url: "#fixing-an-error-using-debugging-feature"
---
---
Debugging issues in complex test cases might require enhanced techniques. This article describes Testsigma's interactive debugging feature for web applications that will not only fix test step issues but also save a good amount of debugging time.

[[info | **NOTE**:]]
|This feature is available in beta version only. Contact [support](mailto:support@testsigma.com) for enabling the feature in your account.

---

## **Steps to execute test cases in debugger mode**

1. Navigate to the test case you want to debug and interact with.<br>
[[info | **NOTE**:]]
|If the test case uses a test data profile, users can choose only one data profile to use the debugging feature.
2. On the test case details page, click the drop-down arrow beside the **Run** button.

3. Select **Run in debug mode** from the drop-down list. ![Run in debug mode](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/debugging/debugging-localdevices-web/run_in_debug_mode.png)<br>Optionally you can select **Record in debug mode** to capture screen shots during test execution for each UI-interactive action. Looking at the screen shots it is easier to identify where your test cases failed.
![Record in debug mode](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/debugging/debugging-localdevices-web/record_in_debug_mode.png)
4. On the **Ad-hoc run** overlay window,
    1. Specify the test lab. The default test lab in debugging mode for web applications is **Local Device**.
    2. Select the checkbox **Run only if the configured browser version is available in the Agent machine**.
    3. Select your local test machine. To run tests on your local machine you need to set up a Testsigma agent. *For more information, refer to [set up Testsigma agent](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/)*.
    4. If you want to execute the test steps until the failed step, select the toggle **Run till failed step**. If this toggle button is disabled, the test case will be executed from start to end. Thereby, identifying the test step that is failing would be difficult.
    5. If you want to execute the step till a particular step (that is setting a debug point), select the step from the **Run till step** drop-down list. For more information on debug points, refer to the section debug points.
    6. Click **Run now** to execute the test case.

---

## **Adding debug points to debug the test**

Debug points are locations in your test steps where you want the test step to start or pause test case executions. This helps to observe the behavior of the test case. Multiple debug points can be added in a test case. Breaking up test execution this way ensures that you can carefully investigate each of the steps for potential bugs, instead of using a more inconvenient alternative. For example, letting the test case run at once and then trying to figure out in which step the things went wrong.
To add debug points to your test case, follow the below steps:

1. To add a debug point, click on the **Show more** icon next to the test step.

2. Select **Add debug point** from the drop-down list. When the test case is executed, the execution is performed until the debug point. Multiple debug points can be added as and when desired.
![Add debug points](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/debugging/debugging-localdevices-web/add_debug_point.png)

---

## **Fixing an error using debugging feature**

On the execution of the test case, a user can visually view the execution move from step to step. Thus, it is easy to understand the execution workflow.
The execution is paused when an error is encountered or at a debug point. On the test steps window, Testsigma highlights the step that failed and caused the execution to stop.
With the execution paused, the debugging feature offers various resources to help you debug the error in the test step.

### **Debug resources**

The debug resources provide a detailed and interactive analysis of the issue. The debugging resources include step results, metadata, screenshots, source codes, and step settings. These resources are available for all test steps including passed and failed test steps.

1. To view the debugging resources, click **More**.
![view debugging resources](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/debugging/debugging-localdevices-web/debugging_resources_more.png)
2. Hover the mouse over each icon to find the details related to step results, metadata, screenshots, source codes, and step settings.

### **Troubleshoot ‘element not found error’**

A common failure while executing test cases is that a particular element is not found during test execution. In some cases, the element is visibly available on the page but is still reported as not found by Testsigma. In such cases, follow the below steps to debug the error.

1. **Explore debug resources**: To explore debug resources, click on **More** next to the failed step. The debug resources provide a detailed analysis of the issue.![explore debug resources](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/debugging/debugging-localdevices-web/element_not_found_error_2.png)

2. **Check the UI element**: To check the UI element which cannot be found, click **Show more**>**Element search** next to the test step. The relevant element is highlighted for 2 sec. You can compare the properties of the saved element with that of the element displayed on the screen.

3. **Edit element**: To edit an element, click on **Show more**>**Edit step** next to the failed step.
     1. Click on the saved element.

     2. You can add the element from the list of elements provided.

     3. Optionally, you can create a new element. To create an element, click on **Create element**.![create an element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/debugging/debugging-localdevices-web/create_elements_debugger.png)

     4. Click on your desired element to automatically populate the element details field.![create element 2](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/debugging/debugging-localdevices-web/capture_element_webdebugger.png) 
     
     5. Click **Create**. 

     6. Optionally, you can add element details and click **Verify** to view the element highlighted on the page.

     7. Click **Update**, to update the test step.

4. **Test Execution**: To re-execute, the test step after editing, click **Show more > Re-run**.
5. To resume the execution of a test case from the previously paused test step, click **Show more**>**Resume**.

  

 



