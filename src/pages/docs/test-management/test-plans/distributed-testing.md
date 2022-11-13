---
title: "Distributed testing"
page_title: "Distributed Testing in Testsigma"
metadesc: " How to create a Test Plan with ‘Testing Type’ as ‘Distributed Testing’. "
noindex: false
order: 8.27
page_id: "Distributed Testing "
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Steps to enable distributed testing"
  url: "#steps-to-enable-distributed-testing"

---

---

*Distributed testing* means that a test scenario is segmented into several parts and each of them is performed on a separate machine either sequentially or in parallel. It also suggests that the test parts interact with each other during a test run which make them coordinated and synchronized. 

This type of testing is generally used to test distributed software — systems with
components which run on different machines, and interact with each other,
such as a client-server system, or an Internet-based application web or intranet sites, with major
functional units running in multiple locations.

The goal of distributed testing is to know how different components of the system interact with each other. While multiple computers will be running simultaneously during the test, each
one will be running a different component of the application, and will be
playing a different role.

Distributed testing is achieved in Testsigma by splitting up test plan execution across multiple machines. To do this, Testsigma lets you select different test suites for each selected test machine where each test suite encompasses one or more component of the application.

<br>

## **Steps to enable distributed testing**


1. Navigate to **Test Machines & Suites Selection** under the **Create test plan** form.  *If you are not familiar with creating a test plan, refer to [add, edit,delete a test plan](https://testsigma.com/docs/test-management/test-plans/overview/)*.

2. Under the **Test machines & suites selection** tab,select the test suite for which you want to add the test machine for test execution. *For more information refer to [adding test suites](https://testsigma.com/docs/test-management/test-plans/manage-test-suites/)*

3. Once you have selected the test suites, select the test machines to run the coressponding test suite. *For more information refer to [add test machines](https://testsigma.com/docs/test-management/test-plans/manage-test-machines/)*.
[[info | Note:]]
|To enable distributed testing you have to select different test suites for different test machines. 

See the below GIF to understand the workflow to enable distributed testing:![distributed testin](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/distributed-testing/distributed_testing.gif)





