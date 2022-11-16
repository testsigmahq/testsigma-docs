---
title: "Test Plan: Cross browser testing"
page_title: "Cross Browser Testing : Test Plan"
metadesc: "How to create a Test Plan with ‘Testing Type’ as ‘Cross-Browser Testing’."
noindex: false
order: 8.26
page_id: "Test Plan: Cross Browser Testing"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Steps to enable cross browser testing"
  url: "#steps-to-enable-cross-browser-testing"

---

---

Cross Browser testing is a type of non-functional testing that enables you to check whether your application works as expected in:

- Different Browser-OS combinations that is, on popular browsers like Firefox, Chrome, Edge, Safari and on any of the different operating systems such as Windows, macOS,Linux, iOS and Android.
- Different devices such as smartphones, tablets, desktops and laptops produced by different companies.
&emsp;

*For more information refer to, [cross-browser testing](https://testsigma.com/cross-browser-testing)*.

&emsp;
To enable *Cross-browser testing* 

1. Create a test plan. You can also enable Cross browser testing in exisiting test plans.
2. Select the browsers to run the test on.
3. Select the devices to account for application behavior on different operating systems.

---

## **Steps to enable cross browser testing**

1. Navigate to **Test Machines & Suites Selection** under the **Create test plan** form.  *If you are not familiar with creating a test plan, refer to [add, edit,delete a test plan](https://testsigma.com/docs/test-management/test-plans/overview/)*.
2. Under the **Test machines & suites selection** tab,select the test suite for which you want to add the test machine for test execution.*For more information refer to [adding test suites](https://testsigma.com/docs/test-management/test-plans/manage-test-suites/)*
3. Once you have selected the test suites, select the test machines to run the coressponding test suite. *For more information refer to [add test machines](https://testsigma.com/docs/test-management/test-plans/manage-test-machines/)*
 
 Note that,for *Cross-browser testing* ,test machines and test suites are selected separately. On execution, all the selected test suites are run on all selected test machines ( in parallel or sequentially - depending on your selection).
 See the below GIF to understand the workflow to enable cross browser testing:
![Cross browser testing](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/cross-browser-testing/cross_browser_testing.gif)