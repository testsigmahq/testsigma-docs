---
title: "Distributed Testing"
page_title: "Distributed Testing in Testsigma"
metadesc: "Improve your testing efficiency with Testsigma's distributed testing. Learn how to execute tests across multiple machines and increase test coverage quickly."
noindex: false
order: 8.27
page_id: "Distributed Testing"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Create Distributed Testing"
  url: "#steps-to-enable-distributed-testing"
---


---


Distributed testing means that a test scenario is segmented into several parts, and each of them is performed on a separate machine, either sequentially or in parallel. It also suggests that the test parts interact with each other during a test run, which makes them coordinated and synchronized.

This type of testing is generally used to test distributed software — systems with components that run on different machines and interact with each other, such as a client-server system or an internet-based application web or intranet sites, with significant functional units running in multiple locations.

The goal of distributed testing is to know how different components of the system interact with each other. While multiple computers will run simultaneously during the test, each one will be running a different application component and playing a different role.

Distributed testing is achieved in Testsigma by splitting up test plan execution across multiple machines. To do this, Testsigma lets you select different test suites for each selected test machine, where each test suite encompasses one or more components of the application.

---


> ## **Prerequisites**
>
> Before you proceed, ensure you understand the concepts of creating a [Test Plan](https://testsigma.com/docs/test-management/test-plans/overview/), [Test Suite](https://testsigma.com/docs/test-management/test-suites/overview/), and [Test Machine](https://testsigma.com/docs/test-management/test-plans/manage-test-machines/).

---

## **Steps to enable distributed testing**

1. Navigate to **Test Plans** and click on **Create Test Plan**.

![Test Plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ditenav.png)

2. On the **Create Test Plan** page, select **Custom test plan** from **Test Plan Type**.

![Create Test Plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ditecustomtp.png)

3. Click on **Add Test Suites & Link Machine Profiles**.

![Link Machines](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ditelmachines.png)

4. Click on **Add Test Suites**.

![Add Test Suites](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/diteaddts.png)

5. Select test suites and click on **Add to Plan**.

![Add to Plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/diteatp.png)

6. Click on **Test Machine** to add test machines to run the test suite. 

![Add Machines](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ditemachines.png)

7. On **Select test machine profiles** overlay, select test machines and click on **Save selections**. 

![Overlay](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ditetmoverlay.png)

[[info | **NOTE**:]]
| For distributed testing, you must select different test suites for different test machines. You can hover over the test suite and click on the test machine corresponding to it to add a different test machine to the test suite. 

8. Go to **Test Plan Settings** and click on **Create**. 
![Create](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ditecocreate.png)


<br>

Here’s a quick GIF demonstrating how to create distributed testing in Testsigma.

![Distributed Testing](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/DistributedTesting.gif)

---