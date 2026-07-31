---
title: "PatchMyPC Integration with Testsigma"
metadesc: "Deploy Testsigma Agent and Testsigma Terminal to managed Windows devices at scale using PatchMyPC and Microsoft Intune, including install commands, detection rules, and version updates."
noindex: false
order: 17.60
page_id: "patchmypc-integration-with-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "How the Testsigma Apps Are Supported"
  url: "#how-the-testsigma-apps-are-supported"
- type: link
  name: "Testsigma Agent"
  url: "#testsigma-agent"
- type: link
  name: "Testsigma Terminal"
  url: "#testsigma-terminal"
- type: link
  name: "Add a New Version"
  url: "#add-a-new-version"
- type: link
  name: "Troubleshooting"
  url: "#troubleshooting"
- type: link
  name: "Out of Scope"
  url: "#out-of-scope"
---

---

Deploy Testsigma Agent and Testsigma Terminal to managed Windows devices at scale using PatchMyPC (PMPC) and Microsoft Intune. PMPC onboards both apps as Custom Apps, packages the installer, and publishes it to Intune for automatic delivery. This guide is for IT admins running enterprise rollouts. For a manual, single-device install, see [Setting Up Testsigma Agent Locally](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/) or [Installing Testsigma Terminal on Windows](https://testsigma.com/docs/testsigma-terminal/installing-testsigma-terminal-on-windows/).

[[info | **NOTE**:]]
| This guide covers Windows **.exe** deployments only. macOS **.dmg**, Linux, and the Local Agent raw ZIP aren't supported through PMPC.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that:
> 1. PMPC Publisher is installed and connected to your Intune tenant.
> 2. Testsigma has provided the current Windows installer(s) (**.exe**) for the app(s) you're deploying.
> 3. You have access to **Local Content > Custom Apps** in the PMPC Publisher.

---

## **How the Testsigma Apps Are Supported**

Testsigma Agent and Testsigma Terminal aren't in PMPC's built-in app catalog, so PMPC onboards them as **Custom Apps**. PMPC packages the installer and publishes it to Intune as a Win32 app, and Intune delivers it to managed devices.

Testsigma provides the installer for each build. Your admin/IT team owns PMPC: adding the custom app, setting the install command and detection rule, and publishing to Intune.

[[info | **NOTE**:]]
| Custom apps don't get PMPC's catalog-style URL monitoring or automatic version detection. Each new version requires a manual **Add Version** upload.

For an installer to qualify as a PMPC custom app, it must meet three conditions:

- **Silent install**: installs with no UI or user interaction.
- **Matching install context**: a machine-wide install deploys in Intune SYSTEM context; a per-user install deploys in Intune user context.
- **Stable detection**: a reliable way to confirm whether a version is installed, using a file path that doesn't change between builds.

---

## **Testsigma Agent**

Testsigma Agent installs per-user (HKCU / user profile), so it must be deployed in Intune **user context**, not SYSTEM context.

### **Add Testsigma Agent as a Custom App**

1. In the PMPC Publisher, go to **Local Content > Custom Apps** and click **Add**.
2. Enter the app metadata:
   - **Name**: **TestsigmaAgent**. Type this carefully. A typo breaks auto-generated (DisplayName) detection.
   - **Vendor**: Testsigma
   - **Version**: match the installer version (**agent.version** in **agent.properties**).
   - **Architecture**: x64
3. Upload the **TestsigmaAgent-Windows.exe** installer.
4. Enter the install command (see [Testsigma Agent Install Command](#testsigma-agent-install-command) below).
5. Confirm the detection rule. PMPC's auto-generated detection works out of the box for Testsigma Agent.
6. Publish the app to Intune, then create the assignment groups on the Intune side.
7. Deploy to a managed test device and verify the install before rolling out broadly.

### **Testsigma Agent Install Command**

```bash
Install:   TestsigmaAgent-Windows.exe /S
Uninstall: <install-dir>\Uninstall.exe /S
```

[[info | **NOTE**:]]
| Testsigma Agent installs per-user, not machine-wide. A mismatch between the install context and the Intune deployment context leaves the app installed where the assigned user can't see it, and Intune reports the deployment as a failure.

---

## **Testsigma Terminal**

Testsigma Terminal supports either a machine-wide or a per-user install at runtime, chosen through the install switch.

### **Add Testsigma Terminal as a Custom App**

1. In the PMPC Publisher, go to **Local Content > Custom Apps** and click **Add**.

2. Enter the app metadata:
   - **Name**: **TestsigmaTerminal**. Type this carefully. A typo breaks auto-generated (DisplayName) detection.
   - **Vendor**: Testsigma
   - **Version**: match the installer version in **package.json**.
   - **Architecture**: x64

3. Upload the **TestsigmaTerminal-Setup-\<version\>.exe** installer.

4. Enter the install command for your chosen scope (see [Testsigma Terminal Install Command](#testsigma-terminal-install-command) below).

5. Confirm the detection rule. PMPC's auto-generated detection works out of the box for Testsigma Terminal.

6. Publish the app to Intune, then create the assignment groups on the Intune side.

7. Deploy to a managed test device and verify the install before rolling out broadly.

### **Testsigma Terminal Install Command**

```bash
System-level (all users):  TestsigmaTerminal-Setup-<version>.exe /S /allusers
User-level (current user): TestsigmaTerminal-Setup-<version>.exe /S /currentuser
Uninstall:                 "C:\Program Files\TestsigmaTerminalBlackpearl\Uninstall TestsigmaTerminalBlackpearl.exe" /S
```

[[info | **NOTE**:]]
| Match the install switch to the Intune deployment context: use **/S /allusers** when deploying in Intune SYSTEM context, and **/S /currentuser** when deploying in Intune user context. A mismatch leaves the app installed where the assigned user can't see it, and Intune reports the deployment as a failure.

---

## **Add a New Version**

Custom apps require a manual upload for each version. PMPC doesn't monitor a URL or auto-detect new builds.

1. Testsigma builds the new installer and provides it to your admin team.
   - Testsigma Agent: bump **agent.version** in **client/src/main/resources/agent.properties**.
   - Testsigma Terminal: bump the version in **package.json**.

2. In the PMPC portal, open the app, select **Add Version**, upload the new installer, set the **Version**, and confirm the install command and detection rule. Select **Create**.

3. The update deploys on the next daily sync, or immediately if you select **Sync Now**. Assigned devices upgrade automatically.

On the device, Testsigma Terminal's electron-builder NSIS installer handles the in-place upgrade through its stable **appId** (**com.testsigma.testsigmaterminal**). Testsigma Agent's **.onInit** block silently uninstalls the previous version before installing the new one, and data in **%APPDATA%\Testsigma** persists across the upgrade.

### **Reduce Manual Work for Weekly Releases**

A weekly release cadence turns step 2 above into a weekly manual task for both apps unless you offload it:

- **Rely on each app's built-in auto-update (recommended)**: Both Testsigma Agent and Testsigma Terminal self-update independently of PMPC. PMPC/Intune only needs to handle the initial install. Every subsequent version flows through the app's own updater. Re-upload to PMPC only for major or breaking changes that require refreshing the initial-install baseline.

- **Automate the upload (alternative)**: script **Add Version** against the PMPC Cloud API, if available on your plan, as part of your release pipeline. Confirm your plan's API exposes custom-app version creation before relying on it.

[[info | **NOTE**:]]
| If you disable an app's built-in auto-update to manage versions centrally through PMPC, every new version of that app must be uploaded to PMPC. PMPC/Intune becomes the sole update path, so skipping an upload leaves devices on the old version.

---

## **Troubleshooting**

### **Deployment reports as failed, but the app appears installed**
The install context doesn't match the Intune deployment context. Testsigma Terminal's **/S /allusers** must run in SYSTEM context; Testsigma Terminal's **/S /currentuser** and Testsigma Agent's **/S** must run in user context.

### **Reinstall fails with "specified path does not exist"**

A stale uninstall key from a prior install points to a path that no longer exists. Clean up the stale uninstall key before retrying the install.

---