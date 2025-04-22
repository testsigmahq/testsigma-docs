---
title: "Efficient Test Execution with Parallel Runs and Backup Devices"
pagetitle: "Efficient Test Execution with Parallel Runs & Backups"
metadesc: "Start efficient test execution with parallel runs and backup devices. Ensure minimal disruption and faster results with our easy setup guide."
noindex: false
order: 8.25
page_id: "executing-test-with-parallel-runs-and-backup-devices"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Configure Parallel Test Execution"
  url: "#configure-parallel-test-execution"
- type: link
  name: "Adding Backup Devices for Android and iOS Devices"
  url: "#adding-backup-devices-for-android-and-ios-devices"
---

---

Executing tests in parallel significantly improves testing efficiency by reducing overall execution time. Additionally, adding backup devices ensures test execution proceeds smoothly, even if the primary device is unavailable. This documentation provides a comprehensive guide on configuring parallel test execution and adding backup devices for Android and iOS applications.

---

> ## **Prerequisites**
>
> Before you proceed, ensure you understand the concepts of creating a [Test Plan](https://testsigma.com/docs/test-management/test-plans/overview/), [Test Suite](https://testsigma.com/docs/test-management/test-suites/overview/), and [Test Machine](https://testsigma.com/docs/test-management/test-plans/manage-test-machines/).

---

## **Configure Parallel Test Execution**

Running tests in parallel allows multiple tests to run simultaneously, which reduces execution time. This approach is particularly useful for large test suites, as it delivers faster feedback and optimizes resource usage. Here are the steps to configure:

1. Navigate to **Test Plans** and create a new test plan or open an existing one.
2. On the **Create** or **Edit Test Plan** page, go to the **Add Test Suites & Link Machine Profiles** tab.
3. If you have already set up the test machine, click the **Settings** icon under the **Test Machine** tab. Alternatively, click the **Link to Test Machine** icon to add a new machine profile to the test suite.
4. On the **Edit Test Machine or Device Profile** overlay, select the checkboxes for below:
   - **Run Test Suites in Parallel**: Lets you run multiple test suites at the same time.
   - **Run Test Cases inside the Test Suite in Parallel**: Lets you run multiple test cases within a test suite at the same time.
5. Click **Create** or **Update Profile** to save the configuration. ![configure parallel test execution](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/configure_parallel_test_execution.gif)

[[info | NOTE:]]
| - When you add a new machine to a test suite, the **Run in Parallel** checkbox is selected by default.
| - To remove the parallel execution settings, follow the steps above and uncheck the boxes for **Run Test Suites in Parallel** and **Run Test Cases inside the Test Suite in Parallel**.
| - Upgrade your subscription for parallel and queued runs to run more tests simultaneously.

<style>
  .example-container {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.5em;
    margin: 0.5em 0;
    background-color: #f9f9f9;
  }
  .example-title {
    color: #004d00;
    font-weight: bold;
    display: flex;
    align-items: center;
  }
  .example-title span {
    margin-right: 5px;
  }
  .example-list {
    list-style: none;
    padding: 0;
  }
  .example-list li {
    margin-bottom: 0.5em;
  }
</style>

<div class="example-container">
  <div class="example-title">
    <span>ℹ️</span>Example:
  </div>
  <ul class="example-list">
    <p>If your subscription allows 1 parallel run and 1 queued run:</p>
    <ul>
      <li>You can run one test plan in parallel and queue another test plan.</li>
      <li>A third test machine will not execute and will be removed from the queue.</li>
      <li>Upgrade your subscription for parallel and queued runs to run more tests simultaneously.</li>
    </ol>
  </ul>
</div>


---

## **Adding Backup Devices for Android and iOS Devices**

Adding backup devices ensures that tests run smoothly even if the primary device is unavailable. This is useful for Android and iOS apps. If the primary device fails, a backup device will take over, minimizing disruptions and ensuring reliable results. Follow the steps below to add a backup device:

1. On the **Create** or **Edit Test Plan** page, go to the **Add Test Suites & Link Machine Profiles** tab.
2. If you have already set up the test machine, click the **Settings** icon under the **Test Machine** tab. Alternatively, click the **Link to Test Machine** icon to add a new machine profile to the test suite.
3. On the **Edit Test Machine or Device Profile** overlay, click **Add Backup Devices** under **Select Backup Devices**. 
4. Choose the **OS** and **Version**, then select the **Device** from the dropdown menu. 
5. You can add multiple backup devices and then click **Create** or **Update Profile**. ![adding backup devices](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/adding_backup_devices.gif)

[[info | NOTE:]]
| Click the **Delete** button next to the backup device you want to remove.

---

