---
title: "Visual Testing : How to update the baseline image"
metadesc: "How to update the baseline image for a test step for visual testing in Testsigma"
noindex: false
order: 14.4
page_id: "Visual Testing : How to update the baseline image"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Pre-requisites"
  url: "#pre-requisites"
- type: link
  name: "How to update the Baseline image"
  url: "#how-to-update-the-baseline-image" 
---

---

In visual testing, we compare a baseline image (or the original image) with the current appearance (or reference image). Expectation is that the reference image will be the same as the baseline image.

The baseline image is supposed to be updated whenever updates are made in the user interface. Here’s how to do that in Testsigma.


---
##**Pre-requisites:**

You should have executed your visual testing test case at least once so it has baseline images. You should also know how to:
 1. [Create a test case for visual testing](https://testsigma.com/docs/test-cases/manage/add-edit-delete/)
 2. [Enable Visual Testing for the test steps that need visual testing](https://testsigma.com/docs/visual-testing/configure-test-steps/)
 3. [View and Debug results for your visual testing test cases](https://testsigma.com/docs/visual-testing/view-debug-results/). 


---
##**How to update the Baseline image** 

 1. Go to the visual testing test case for which you want to update the reference image. 
 2. Execute the test case in step 1.
 3. When you execute a visual testing test case, a red  camera icon appears on the steps where there is a visual difference between reference and baseline images. You have to click on the red camera icon. The screenshot below displays what the red camera icon will look like:

![red camera icon for a test step for a visual testing test case in Testsigma](https://docs.testsigma.com/images/update-baseline/red-camera-icon-for-test-step-visual-testing-testsigma.png)

 4. A page should open up with the baseline image and reference image:

 ![mark as a base image checkbox on snapshot diff page in Testsigma](https://docs.testsigma.com/images/update-baseline/mark-as-a-base-image-snapshot-diff-page-testsigma.png)

 On the top right of this page, check the checkbox for “Mark as baseline image”. This will update your base image to your current reference image. 

Next time you run the test plan, the new base image will be compared to the visuals from the future runs.

Here is a quick gif demonstrating the same:

![gif demonstrating the checkbox to mark reference image as baseline image](https://docs.testsigma.com/images/update-baseline/gif-update-baseline-image-checkbox-check-testsigma.gif)
