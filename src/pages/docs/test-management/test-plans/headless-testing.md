---
title: "Headless testing"
metadesc: "How to create a test plan for headless execution in Testsigma"
noindex: false
order: 8.28
page_id: "Headless testing"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Step to enable headless testing"
  url: "#step-to-enable-headless-testing"

---

---

A headless browser is a browser without a graphical user interface. Executing your web tests on a headless browser is called headless testing. 

In Testsigma, you can add headless test execution on a machine while creating a test plan and also while editing it. The following article discusses the steps to enable headless testing in your test cases:

[[info | NOTE:]]
| Headless testing are used only for testing web applications.
&emsp;

### **When to use**:

When you need quick results for your testing and your test cases aren’t supposed to evaluate graphical elements on your website.

[[info | WARNING:]]
|Headless testing are not accompanied by video recordings of executions on Testsigma cloud.
 

 ---

##**Step to enable headless testing**


<br>

1. Navigate to **Test Machines & Suites Selection** under the **Create test plan** form.  *If you are not familiar with creating a test plan, refer to [add, edit,delete a test plan](https://testsigma.com/docs/test-management/test-plans/overview/)*.

2. Under the **Test machines & suites selection** tab,select the test suite for which you want to add the test machine for test execution. *For more information refer to [adding test suites](https://testsigma.com/docs/test-management/test-plans/manage-test-suites/)*.

3. Once you have selected the test suites, select the test machines to run the coressponding test suite. *For more information refer to [add test machines](https://testsigma.com/docs/test-management/test-plans/manage-test-machines/)*.

4. On the **Add machine/Device** overlay, enable the toggle **Headless testing** to enable headless testing. ![headless testing](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/headless-testing/headless_testing.png)
See the below GIF to enable headless testing:![headless testing gif](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/headless-testing/headless_testing.gif)


