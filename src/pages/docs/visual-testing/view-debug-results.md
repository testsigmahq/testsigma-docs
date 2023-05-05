---
title: "Visual Testing - How to view and debug results"
metadesc: "Learn how to perform visual testing and troubleshoot errors in your results effectively | Your guide for visual testing in Testsigma."
noindex: false
order: 14.3
page_id: "Visual Testing - How to view and debug results"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Pre-requisites"
  url: "#pre-requisites"
- type: link
  name: "How to execute a Visual Test and View the results"
  url: "#how-to-execute-a-visual-test-and-view-the-results" 

---

---

Visual Testing in Testsigma helps you test the visual design of your application UI. It works like this.

 1. Take a base image. (which would be your original image)
 2. Compare it with a reference image. (which would be a changed/updated version of the original image)
 3. Find the differences between the base image and the reference image. 

In this document, we will discuss how to view and debug the results of visual testing in Testsigma.

---
## **Pre-requisites:**

**You should already know how to:**
 1. [Create a test case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/)
 2. [Add a test case to the test suite](https://testsigma.com/docs/test-management/test-suites/overview/)
 3. [Add a test suite to a test plan](https://testsigma.com/docs/test-management/test-plans/manage-test-suites/)
 4. [Configure visual testing for your test steps](https://testsigma.com/docs/visual-testing/configure-test-steps/)
 5. [Run a Test plan in Testsigma](https://testsigma.com/docs/runs/test-plan-executions/)

---
## **How to execute a Visual Test and View the results** 

 1. Create a test case, add it to a test suite, add the test suite to a Test Plan.
 2. Enable Visual Testing for the test steps that need visual testing.
 3. Run your test plan once, to save all images as base images.
 4. Now Run your test plan again, to take screenshots of your app at every test step and make them reference images.
 5. Testsigma automatically compares these reference images with the base images in the first run to find differences. To avoid false negatives, any other changes in the screenshots like in the mobile status bar or mobile navigation or key actions are automatically ignored.

### **Example:**

To demonstrate this, let us consider the case of a news web app, that has a lot of dynamic content like advertising and alerts to display to the user. 

Let’s learn how to view and debug Visual differences in 4 steps.

 **1. Test Case:** Write a test case that navigates to the news website and clicks on two tabs to view the content.

 ![gif demonstrating sample test case to understand how to view and debug results for visual testing in Testsigma](https://docs.testsigma.com/images/view-debug-results/gif-sample-test-case-visual-testing-testsigma.gif)

 **2. Test Plan creation:** Create a test suite and a test plan for this test case.

![gif demonstrating test plan and test suite with a visual testing test case in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/teststepsforvt.gif)

**3. Run the test plan, view the results as follows:**`<br>
     &nbsp;a.  Navigate to **Run Results**<br>
     &nbsp;b.  Open the test plan for which you need to  view the results<br>
     &nbsp;c.  Open the test case from the test plan<br>
     &nbsp;d.  On the right side of each test step, you should see a camera icon either in green or red. A green icon means that there are no visual differences. A red icon means there are visual differences.<br>
     &nbsp;e.  Click on the icon to see the visual differences<br>

Here is a quick gif that shows how to view the results.

![gif to run and view results for visual testing in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/vtss.gif)

**4. To find the visual error and debug it:**<br>
       &nbsp;a. Click on the red camera icon, it'll navigate you to the page which shows the base image and the reference image.<br>
       &nbsp;b. Click on the “Highlight Diffs” button<br>

This will show you all the differences. 

Here is a quick gif to demonstrate the same:

![gif demonstrating the debugging of visual testing results in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/VTgif.gif)
