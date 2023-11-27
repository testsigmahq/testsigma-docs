---
title: "Drill Down Reports in Testsigma"
metadesc: "Drill-down reports let you access data at all layers. Learn how to use drill-down reports in the test execution results of automated tests in Testsigma"
noindex: false
order: 13.23
page_id: "Drill Down Reports in Testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "How to Use Drill-down Reports in Testsigma"
  url: "#how-to-use-drill-down-reports-in-testsigma"
- type: link
  name: "Steps to Generate Test Case Reports"
  url: "#steps-to-generate-test-case-reports"
- type: link
  name: "Steps to Generate Test Suite Reports"
  url: "#steps-to-generate-test-suite-reports"
- type: link
  name: "Steps to Generate Test Machine Reports"
  url: "#steps-to-generate-test-machine-reports"
- type: link
  name: "Additional Actions on Results"
  url: "#additional-actions-on-results"
---

---

The users will have better satisfaction when the application does not have bugs, technical glitches, performance issues, or usability issues. When these issues increase, the quality decreases, which results in bad UX. That's when drill-down reports come in handy. 

In Testsigma, you can view/download reports at multiple levels and find specific details, like the number of tests failed and the reason for failures or machines causing more problems. You can assess the application's quality and address issues from this data.

---

## **Prerequisites**

- You should know how to [create a test case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#creating-a-test-case). 

- You should know how to [create a test suite](https://testsigma.com/docs/test-management/test-plans/overview/#steps-to-create-a-test-plan).

- You should know how to [create a test plan](https://testsigma.com/docs/test-management/test-suites/overview/#creating-a-test-suit).

---

## **How to Use Drill-down Reports in Testsigma:**

1. Navigate to **Run Results** page and click on a **Test Plan Result**.
![Test Plan Result](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ddrrnav.png)


2. From **Test Plan Result** page, you can view **Test Case** reports. 
![Test Case Report](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ddrrtcr.png)


[[info | **NOTE**:]]
| You can also view reports at test suite and test machine level by clicking on **Test Suite** and **Test Machine**. 
| ![Reoprts](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ddrrtstm.png)

3. You can choose the different runs from the dropdown to see how the results have changed for different builds.
![Runs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ddrrrabuilds.png)


---


## **Steps to Generate Test Case Reports**


1. Navigate to **Run Results** page and click on a **Test Plan Result**.
![Test Plan Result](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ddrrnav.png)

2. Results are available in **Test Case**, **Test Suite**, and **Test Machine** level. Click on **Test Case** to view the results grouped by **Test Cases**.
![Test Case Report](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ddrrtcr.png)


---


## **Steps to Generate Test Suite Reports**

1. Navigate to **Run Results** page and click on a **Test Plan Result**.
![Test Plan Result](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ddrrnav.png)

2. Results are available in **Test Case**, **Test Suite**, and **Test Machine** level. Click on **Test Suite** to view the results grouped by **Test Suites**.
![Test Suite](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ddrrtestsuite.png)

3. You can also check test case results inside test suite by clicking on the **Test suite** of your choice. 
![Test Case in Test Suites](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ddrrtstclr.png)


---

## **Steps to Generate Test Machine Reports**

1. Navigate to **Run Results** page and click on a **Test Plan Result**.
![Test Plan Result](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ddrrnav.png)

2. Results are available in **Test Case**, **Test Suite**, and **Test Machine** level. Click on **Test Machine** to view the results grouped by **Test Machines**.
![Test Machine Reports](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ddrrtmr.png)

3. You can also check test suite results inside test machine by clicking on the **Test Machine** of your choice. 
![Test Suite in Test Machine](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ddrrtsitm.png)



Here is a quick GIF demonstrating how to view test reports in Testsigma.
![Reports](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/DrillDownReports.gif)

---

## **Additional Actions on Results**
 
There are multiple actions that you can take on these results. These actions are:

1. **Rerun**: You can initiate reruns of the test cases by clicking on Rerrun. 
![Rerun](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ddrrrerun.png)

2. **Export Reports**: You can download the report in Junit and MS Excel Sheet at test case/test suite/test machine levels by clicking on the **Export** icon. 
![Export Icon](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ddrreicon.png)

3. **Test Run Details**: You can see the test run details below the result overview. 
![Test Run Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ddrrtrdetails.png)

---