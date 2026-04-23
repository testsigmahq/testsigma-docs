---
title: "Creating Test Cases for SAP Automation"
page_title: "Creating Test Cases for SAP Automation"
metadesc: "SAP test cases use elements captured via Testsigma Terminal. Based on element type, Testsigma suggests actions. This article covers creating and running tests."
noindex: false
order: 29.4
page_id: "creating-test-cases-for-sap-automation"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Create Test Cases for SAP Automation"
  url: "#steps-to-create-test-cases-for-sap-automation"
---

---

With Testsigma’s no-code platform, you can create test cases using the captured SAP UI elements. Once the elements are captured, Testsigma automatically suggests actions based on the selected element in each test step. This article discusses how to create and run test cases for SAP applications in Testsigma.

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that:
> 1. You have referred to the [documentation on creating projects](https://testsigma.com/docs/projects/overview/).
> 2. You have referred to the [docuemntation on creating applications](https://testsigma.com/docs/projects/applications/) in Testsigma.
> 3. You should have the **Testsigma Terminal** installed.
> 4. The **WinTest Automation** folder must exist in the **Testsigma Agent** directory. 
> 5. The **SAP** desktop application is installed and currently open on your device. 
> 6. A working connection to your **SAP** system has been created using **SAP Logon**.


---

## **Steps to Create Test Cases for SAP Automation**

1. From the left navigation bar, go to **Create Tests > Test Cases**.

2. In the **Test Case Explorer** section, expand the required **Feature** and **Scenario**, then click the **+** icon next to the scenario. A dialog box will appear.

3. In the dialog box, enter a name for your test case and click **Create**.

4. In the **Test Case Details** page, click **Actions** from the drop-down menu. 
 
5. Select the appropriate action from the **Actions** overlay.

6. You can now add test steps by selecting the captured **SAP** UI elements and choosing the suggested inbuilt actions based on the element type.

[[info | **NOTE**:]]
| - You can also use other step types to create and execute the test case.

7. Once the test steps are added, click **Run** to execute the test case. This will open the **Ad-Hoc Run** overlay.

8. In the **Ad-Hoc Run** overlay, select the test machine, add additional settings if needed, and click **Run Now**.

---