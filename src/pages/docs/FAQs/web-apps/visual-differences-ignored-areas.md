---
title: "Visual Differences Not Highlighted in Ignored Areas of Test Case"
pagetitle: "Visual Differences Not Highlighted in Ignored Areas"
metadesc: "Learn how to identify and resolve issues where visual differences are not highlighted in ignored regions of test cases. Ensure accurate visual testing results."
noindex: false
order: 24.19
page_id: "visual-differences=not-highlighted-in-ignored-areas-of-test-case"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Identifying and Adjusting Ignored Regions"
  url: "#identifying-and-adjusting-ignored-regions"
- type: link
  name: "Re-running and Reviewing Visual Differences"
  url: "#re-running-and-reviewing-visual-differences"
---

---

Visual differences in test cases may not be highlighted if they fall within ignored regions. This document will help you resolve issues where visual differences in test cases are not highlighted because they fall within ignored regions. It will guide you in identifying and resolving this issue by walking you through the necessary adjustments to your test case settings.

---

## **Prerequisites**

Before you proceed, ensure you know how to use [Visual Testing](https://testsigma.com/docs/visual-testing/configure-test-steps/).

---

## **Identifying and Adjusting Ignored Regions**

1. Open your test case where the visual differences are not highlighted.
2. Click **Ad-hoc Runs** in the right navigation bar, then click **View Details** to open the test case result page. ![view test case result details page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/view_details_test_case_result.png)
3. Click the **Camera** icon to open the Visual Difference overlay screen.
4. Select **Select region to ignore from visual comparison** and choose the areas you want to exclude from the visual comparison. ![highlight the region to igonre](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/select_ignore_region_from_visual_comparison.gif)
5. You can resize or move the ignored area by selecting **Resize/Move Ignored Regions** and adjusting the selected region on the screen as needed.
6. Review the regions you marked as ignored and click **Save**. 
[[info | NOTE:]]
| Note: In this test case, check the box to ignore the same region for all steps.
7. Check the box to **Mark as the base image**. ![resize igonred region and mark base image](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/resize_igonre_region_mark_baseimage.gif)
8. Compare the current image with the reference image to identify any visual differences.
9. Confirm that these differences fall within the ignored regions.

---

## **Re-running and Reviewing Visual Differences**

- Re-run the test case and view the execution results.
- Check if the visual differences are now appropriately highlighted.
- Review the updated test results to ensure all visual differences are highlighted correctly.

---
