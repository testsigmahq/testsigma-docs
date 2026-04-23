---
title: "Creating Test Cases for Desktop Automation"
page_title: "Creating Test Cases for Desktop Automation"
metadesc: "Desktop test cases use elements captured via Testsigma Terminal. Based on element type, Testsigma suggests actions. This article covers creating and running tests."
noindex: false
order: 30.5
page_id: "creating-test-cases-for-desktop-automation"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Create Test Cases for Desktop Automation"
  url: "#steps-to-create-test-cases-for-desktop-automation"
---

---

Test cases for desktop applications rely on the elements captured through Testsigma Terminal. Once the elements are available, Testsigma automatically suggests relevant actions based on the type of element you select in a test step. This article discusses creating and executing test cases for Desktop Applications in Testsigma. 

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that:
> 1. You have referred to the [documentation on creating projects](https://testsigma.com/docs/projects/overview/).
> 2. You have referred to the [docuemntation on creating applications](https://testsigma.com/docs/projects/applications/) in Testsigma.
> 3. You should have the **Testsigma Terminal** installed.
> 4. The **WinTest Automation** folder must exist in the **Testsigma Agent** directory. 
> 5. You have a Windows application to test and make sure it’s open on your device. 


---

## **Steps to Create Test Cases for Desktop Automation**

1. From the left navigation bar, go to **Create Tests > Test Cases**.

2. In the **Test Case Explorer** section, expand the required **Feature** and **Scenario** and click the **+** icon next to the scenario. A dialog box appears. 

3. In the dialog box, enter the name for your test case and click **Create**.

4. In the **Test Case Details** page, click **Actions** from the drop-down.

5. Select the required action from the **Actions** overlay.

6. You can now add test steps by selecting the captured desktop UI elements and choosing the suggested inbuilt actions based on the element type.

[[info | **NOTE**:]]
| - You can also use other step types to create and execute the test case. 

7. Once the test steps are created, click **Run** to execute the test case. This will open an **Ad-Hoc Run** overlay. 

8. In the **Ad-Hoc Run** overlay, select the test machine, add additional settings if required, and click **Run Now**.

---