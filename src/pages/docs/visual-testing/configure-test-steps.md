---
title: "Visual Testing"
pagetitle: "Visual Testing: Ensure Consistent UI Across Platforms | Testsigma"
metadesc: "Optimise UI quality and detect visual regressions early with Visual Testing in Testsigma to ensure a seamless user experience. Learn more about how to use Visual Testing."
noindex: false
order: 14.1
page_id: "visual-testing-configure-test-steps"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Enable Visual Testing in Test Steps"
  url: "#enable-visual-testing-in-test-steps"
- type: link
  name: "Bulk Action for Visual Testing Steps"
  url: "#bulk-action-for-visual-testing-steps" 
- type: link
  name: "Mark Baseline Image"
  url: "#mark-baseline-image" 
- type: link
  name: "Perform Visual Testing in Test Case"
  url: "#perform-visual-testing-in-test-case"
- type: link
  name: "Optimizing Visual Testing with Ignore Sections"
  url: "#optimizing-visual-testing-with-ignore-sections"    
- type: link
  name: "Benefits of Visual Testing"
  url: "#benefits-of-visual-testing"    
---

---

Testsigma allows you to check your app's appearance during tests using its Visual Testing feature. You can ensure a great user experience as the UI remains consistent and design changes are spotted early. Visual Testing is turned off by default for test steps, but you can switch it on for specific steps that require visual validation. This guide will show you how to activate Visual Testing in Test Steps and mark Baseline Images in Testsigma.

---

## **Prerequisites**

Before using Visual Testing, you must understand specific concepts such as creating [Projects](https://testsigma.com/docs/projects/overview/), [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/), [Test Steps](https://testsigma.com/docs/test-cases/create-steps-nl/overview/), utilising [Test Step Options](https://testsigma.com/docs/test-cases/create-test-steps/actions-and-options-manual/step-settings/), [Ad-hoc Run](https://testsigma.com/docs/runs/adhoc-runs/), and [Test Case - Advanced Options](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#test-case----advanced-options).

---

## **Enable Visual Testing in Test Steps**

You can configure the visual testing for a test step on a test case details page or a test step recorder. Here are the steps to do it:
1. Enable visual testing in the **test step** by clicking the **ellipsis** button (**Test Step Options**).
2. Select **Enable Visual Testing** from the drop-down list that will appear.
3. Click **Update Step** after enabling Visual Testing for the step. ![Enable Visual Testing in Test Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/visualtesting_teststep.gif)

[[info | NOTE:]]
| After you enable visual testing, Testsigma requires a baseline image corresponding to the test step for executing visual testing. Visual testing will be available only after the next successful run, as Testsigma needs this baseline image.

---

## **Bulk Action for Visual Testing Steps**

In Testsigma, you can save time and reduce redundant efforts by selecting multiple steps in a test case and simultaneously turning on/off the visual testing settings. Testsigma supports bulk action of steps for this purpose.
1. Select the multiple test steps by clicking on **checkboxes** to enable Visual Testing.
2. In the menu bar, click on **Update Settings**. Then, select **Enable Visual Testing** for the step from the pop-up menu that appears.
3. Click **Update** after enabling Visual Testing for the steps.
4. **Run** the Test Case to view the visual difference. ![Enable Visual Testing in Bulk Action](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/visualtesting_bulkactions.gif)

---

## **Mark Baseline Image**

When you conduct visual testing using Testsigma, you should compare the **current image** (reference image) with the original image (baseline image) and ensure that the reference image matches the baseline image. You should update the baseline image whenever you apply changes to the UI using the following steps:

1. You have two options to enable visual testing in your test steps: [Enable Visual Testing in Test Step](https://testsigma.com/docs/visual-testing/configure-test-steps/#enable-visual-testing-in-test-steps) or [Bulk Action for Visual Testing Steps](https://testsigma.com/docs/visual-testing/configure-test-steps/#bulk-action-for-visual-testing-steps). **Run** the test case after enabling it in Test Step.
2. **Re-Run** the test case to enable visual testing and see any visual differences. ![Rerun Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/reruntestcase_visualtesting.png)
3. After executing a test case for visual testing, the **Test Case Result** page will display a **green camera** icon on steps with **no visual differences** between the reference and baseline images and a **red camera** icon where there are **visual differences**.
4. Click on the **camera** icon to open the **Visual Difference** overlay screen. Then, go to the top right of the page and **check** the box **Mark as base image** as **Current Image**. This action will update your base image to match your current reference image.
5. In Visual Difference overlay, you can perform the following options: 
   - **Highlight Differences**: Highlight variations in the display.
   - **Hide Visual Differences**: Conceal any visible disparities.
   - **Select region to ignore from visual comparison**: Select areas not to compare visually.
   - **Merge base image and current image**: Combine the original and current images for comparison.
   - **Zoom in** and **Zoom out**: Enlarge or reduce the view for closer inspection.

      ![Mark Baseline image](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/markbaselineimage_visualt.gif)

6. Next time you run the test case, you will compare the visuals from future runs with the new base image.

---

## **Perform Visual Testing in Test Case**

1. Follow the steps in the above section to Enable Visual Testing in Test Steps using [Test Step Options](https://testsigma.com/docs/visual-testing/configure-test-steps/#enable-visual-testing-in-test-steps) or [Update Settings](https://testsigma.com/docs/visual-testing/configure-test-steps/#bulk-action-for-visual-testing-steps). [Mark the Baseline Image](https://testsigma.com/docs/visual-testing/configure-test-steps/#bulk-action-for-visual-testing-steps) and run the test case to identify visual differences in the UI.
2. Click on **Test Case Settings** in the right-side navbar and enable the **Fail Test Case if Visual Testing Fails** toggle to automatically mark a test case as failed if it detects visual differences during execution. ![Perform Visual Testing](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/perform_visualtesting.gif)

---

## **Optimizing Visual Testing with Ignore Sections**

[[info | NOTE:]]
| Ignoring specific sections will exclude dynamic elements from the comparison process, which reduces false positives from content such as ads, timestamps, or user-specific data. This ensures that only meaningful changes are flagged for review. 

### **Steps to Configure Ignore Sections for Visual Testing**

1. Click **Ad-hoc Runs** in the right navigation bar, then click **View Details** to open the test case result page. 
   ![view test case result details page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/view_details_test_case_result.png)

2. Click the **Camera** icon to open the **Visual Difference** overlay screen.

3. Select **Select region to ignore from visual comparison** and choose the areas you want to exclude from the visual comparison. 
   ![highlight the region to igonre](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/select_ignore_region_from_visual_comparison.gif)

4. You can resize or move the ignored area by selecting **Resize/Move Ignored Regions** and adjusting the selected region on the screen as needed.

5. Review the regions you marked as ignored and click **Save**. 


---

## **Benefits of Visual Testing**

|**Benefits**|**Description**|
|---|---|
|**Early Detection of Visual Defects**|You can identify visual regressions and inconsistencies early in the development cycle by using Visual Testing, which prevents them from reaching production.|
|**Time Savings**|Automating visual comparisons saves time and effort by eliminating the need for manual verification.|
|**Cross-Platform Validation**|Visual Testing ensures that different devices, browsers, and operating systems display your application's visual consistency.|
|**Improved User Experience**|You enhance customer satisfaction by catching visual defects and providing a consistent and polished user experience.|
|**Regression Testing Efficiency**|Regression testing includes Visual Testing, ensuring UI changes do not impact existing functionality.|

---
