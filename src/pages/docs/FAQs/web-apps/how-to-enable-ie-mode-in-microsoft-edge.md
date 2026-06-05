---
title: "How to Enable IE Mode in Microsoft Edge?"
metadesc: "Learn how to use the ts.ieMode desired capability in Testsigma to launch Microsoft Edge in IE mode and automate tests for legacy IE-dependent web apps."
order: 25.24
page_id: "how-to-enable-ie-mode-in-microsoft-edge"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Configure Registry Settings for IE Mode"
  url: "#steps-to-configure-registry-settings-for-ie-mode"
- type: link
  name: "Steps to Add the IE Mode Desired Capability"
  url: "#steps-to-add-the-ie-mode-desired-capability"
- type: link
  name: "Run Your Tests"
  url: "#run-your-tests"
---

---

IE mode in Microsoft Edge lets you run legacy web applications that require Internet Explorer 11 directly within the Edge browser. Use the **ts.ieMode** capability in Testsigma to launch Edge in IE mode and automate tests against apps that depend on the IE rendering engine. This article discusses how to add a desired capability to launch Edge in IE mode in Testsigma.

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you start creating an addon, ensure that:
>    - You have a Testsigma account with access to Test Plans and Test Machines. 
>    - The test machine running the Edge browser is on Windows and has registry access.
>    - Internet Explorer 11 is present on the machine (required by Edge for IE mode rendering)

---

## **Steps to Configure Registry Settings for IE Mode**

IE mode may hang if Protected Mode settings are inconsistent across Windows security zones. Before running tests, align the Protected Mode setting across all zones using the Windows Registry Editor.

1. Press **Win + R**, type **regedit**, and press **Enter** to open the Registry Editor.

2. Navigate to each of the following registry paths:
   - `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Internet Settings\Zones\1`
   - `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Internet Settings\Zones\2`
   - `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Internet Settings\Zones\3`
   - `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Internet Settings\Zones\4`

3. For each zone, right-click in the right pane and select **New > DWORD (32-bit) Value**.

4. Name the new value **2500**.

5. Double-click **2500** and set its value:
   - Enter **3** to disable Protected Mode (recommended - set all four zones to 3)
   - Enter **0** to enable Protected Mode

[[info | NOTE:]]
| Setting all zones to the same value (3) prevents the hang caused by mismatched Protected Mode settings across zones.

---

## **Steps to Add the IE Mode Desired Capability**

1. Create a new Test Plan and navigate to the **Add Test Suites & Link Machine Profiles** tab.

2. Click **Add Test Suites** and add the required test suites.

3. Once you have added test suites, click **Link Test Machine**.

4. In the **Select test machine profiles** overlay, click **Add Machine**.

5. In the **Add test machine/device profile** overlay, enter a name for the machine and configure the required options.

6. Scroll to the **Desired Capabilities** section and add the following capability:

   | Key | Data Type | Value |
   | --- | --- | --- |
   | ts.ieMode | String | true |

   ![Desired Capability](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/IE_1.1.png)

7. Click **Create Profile** to save the configuration.

[[info | NOTE:]]
| The **ts.ieMode** capability is specific to Microsoft Edge. Ensure Edge is selected as your browser in the test machine settings.

---

## **Run Your Tests**

Once the registry is configured and the desired capability is added, trigger your test plan as usual. Edge will launch in IE mode, using the Trident (IE11) rendering engine for the application under test.

[[info | NOTE:]]
| If tests still hang after configuring the registry, verify that all four zone keys (**Zones\1** through **Zones\4**) have the **2500** DWORD set to **3**. Missing even one zone can cause inconsistent behavior.

---