---
title: "Why does the iOS App Close Right After Opening in Testsigma?"
metadesc: "Fix the issue where an iOS app launched via Testsigma recorder or automation opens and closes immediately, preventing your test from running successfully."
order: 24.25
page_id: "why-does-the-ios-app-close-right-after-opening-in-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to Resolve the Issue"
  url: "#steps-to-resolve-the-issue"

---

---

When you try to start an iOS app on a local device using the recorder or Testsigma automation, the app opens and then closes almost immediately. This happens repeatedly, which stops your test from running. This article discusses how to debug the issue. 

---

## **Steps to Resolve the Issue**

To debug the issue, do one of the following:

1. Restart the Testsigma Agent.

2. Open the Testsigma Agent directory and delete the **devimage** folder.

3. Uninstall the **WebDriverAgent (WDA)** app from your local device, then rerun the test case.

[[info | NOTE:]]
| - WDA is an app installed on your device during automation execution. It is not located in the Testsigma Agent directory.

4. Set up Xcode:
   - **Verify that Xcode is installed:**
      - Open the **Applications** folder on your Mac.
      - Make sure Xcode.app is located at **/Applications/Xcode.app**.
      - If it isn’t installed, download it from the **Mac App Store**.
   -  **Set the developer directory:**
       - Open Terminal and run:
```
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
```
       - Enter your Mac password if prompted.
   -  **Confirm the developer directory:**
       - Run:
```
 xcode-select -p
```
       - Expected output:
```
/Applications/Xcode.app/Contents/Developer
```
   -  **Install the command-line tools (if needed):**
       -  Run:
```
 xcode-select --install
```

[[info | NOTE:]]
| - You don’t need to run **sudo xcode-select -s** again if the developer path is already set correctly. To confirm that Xcode is installed and working, run:
|```
|xcodebuild -version
|```
| - If the version number appears, your Xcode setup is complete. Your system is now ready for compiling or running tools that require Xcode.


5. The iOS app stays open when launched from the recorder or automation, just like it does when you open it manually.

---