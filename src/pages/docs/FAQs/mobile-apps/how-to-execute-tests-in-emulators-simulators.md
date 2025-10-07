---
title: "How to Execute Android/iOS Tests in Emulators/Simulators?"
metadesc: "Execute Android and iOS test cases in emulators or simulators using Testsigma. This is useful if do not have access to physical devices but want to execute tests"
order: 24.26
page_id: "execute-tests-in-emulators-simulators"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Execute Test Cases in an Emulator"
  url: "#execute-test-cases-in-an-emulator"
- type: link
  name: "Execute Test Cases in a Simulator"
  url: "#execute-test-cases-in-a-simulator"
---

---

You can execute Android and iOS test cases in emulators or simulators using Testsigma. This feature is useful when you do not have access to physical devices but still want to execute tests. You can also perform cross-device testing by starting multiple emulators or simulators.

<br>

To quickly help you understand, this video demonstrates how to execute Android tests in an emulator using the Testsigma Agent.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/New_Doc_Videos/Execute_Tests_in_Emulator.mp4" 
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
          allowfullscreen>
  </iframe>
</div>


---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure you know how to start emulators/simulators and the Testsigma Agent is running on your machine.

---

## **Execute Test Cases in an Emulator**

1. Install **Android Studio**, add a device and start it.
   ![Android Studio](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Start_Emulator.png)


2. Start the Testsigma Agent on your machine.
   ![Start Agent](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Emulator_Agent_Connection.png)


3. In the Testsigma application, go to **Test Cases** and open the test case you want to execute.


4. On the **Test Case details** page, click **Run** in the top-right corner.
   ![Run Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Run_Test_Case_in_Emulator.png)


5. In the **Ad-Hoc Run** overlay, select **Local Devices** and verify that the connected emulator appears under **Test Machine**.
   ![Ad-Hoc Overlay](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Mobile_Device_under_Test_Machine.png)


6. Click **Run Now** to execute the test case in the emulator.
   ![Run Now](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Run_Now_In_Emulator.png)


7. The Test Case will execute in that emulator. 
   ![App Action in Emulator](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/App_Action_In_Emulator.png)

<br>

### **Troubleshooting:**

1. **Emulator not detected**: Ensure that the emulator is running before starting the Testsigma Agent.

2. **Agent not showing emulator**: Restart the Testsigma Agent and verify that the ADB (Android Debug Bridge) is properly configured.

3. **Test execution fails to start**: Check that the selected device in Android Studio matches the emulator connected to the Agent.

---

## **Execute Test Cases in a Simulator**

1. Install **Xcode**. Add or open a simulator with a device of your choice.
   
   <img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Start_Xcode_Simulator.png" alt="Start Simulator" style="width: 200px;" />

2. Start the Testsigma Agent on your machine.


3. In the Testsigma application, go to **Test Cases** and open the test case you want to execute.


4. On the **Test Case details** page, click **Run** in the top-right corner.


5. In the **Ad-Hoc Run** overlay, select **Local Devices** and verify that the connected simulator appears under **Test Machine**.
   ![iOS Device](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/iOS_Device_under_Test_Machine.png)


6. Click **Run Now** to execute the test case in the simulator.
   ![Run Now in Simulator](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Run_Test_in_Simulator.png)
   

7. The Test Case will execute in that simulator. 


<br>

### **Troubleshooting:**

1. **Simulator not detected**: Ensure that the simulator is running before starting the Testsigma Agent.

2. **Agent not showing simulator**: Restart the Testsigma Agent and confirm that Xcode Command Line Tools & Devices are installed.

3. **Test execution fails to start**: Check that the simulator device version is compatible with the test configuration in Testsigma.

---