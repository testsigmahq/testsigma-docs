---
title: "Setup Browser Profile for Copilot Recording"
page_title: "Setup Browser Profile for Copilot Recording | Testsigma"
metadesc: "Configure how Testsigma loads its recorder extension into your browser for Copilot recording sessions, using Automatic, Managed, or Your Own Browser Profile mode."
noindex: false
order: 21.2
page_id: "setup-browser-profile-for-copilot-recording"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Copilot & Recorder Extension Preferences"
  url: "#copilot--recorder-extension-preferences"
- type: link
  name: "Automatic (default)"
  url: "#automatic-default"
- type: link
  name: "Managed profile"
  url: "#managed-profile"
- type: link
  name: "Your own browser profile"
  url: "#your-own-browser-profile"
- type: link
  name: "Quick Reference"
  url: "#quick-reference"
---

---

Configure how Testsigma loads its recorder extension into your browser for Copilot recording sessions, so recording, authoring, and debugging work seamlessly with no manual setup. Choose the profile mode below that matches how much control you need over your browser environment.

---

## **Copilot & Recorder Extension Preferences**

1. From the left navigation bar, go to the **Settings** > **Preferences**.

2. Scroll down to the **Copilot & Recorder Extension** section.

3. Select one of the three profile options described below.
   ![profile options](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Recorder_Setup.png)

---

## **Automatic (default)**

Testsigma loads its bundled recorder extension into the browser on every session. Select this mode if you don't need a persistent profile or your own extensions, no setup is required.

---

## **Managed profile**

The Chrome Web Store recorder extension is installed once into a Testsigma managed browser profile and reused across sessions. Choose this mode if you want the extension pre-installed and persistent, without maintaining it yourself.

The first time you launch a Copilot session in this mode, Testsigma creates a user-data directory for the profile inside the Testsigma data directory and reuses it for every session after that. Testsigma must have permission to create directories there. Install the recorder extension from the Chrome Web Store once, and every later session reuses it along with any browser settings you apply to the profile.

[[info | NOTE:]]
| If Testsigma cannot create a directory inside the Testsigma data directory, the profile directory is never created and the session fails to start.

---

## **Your own browser profile**

Sessions run in a browser profile your team manages; the recorder extension must be installed in that profile. Choose this mode when your security policies require you to control every profile.

[[info | NOTE:]]
| Agent cleanup can delete profile data stored inside the Testsigma data directory. Keep the profile you manage outside that directory.

**To set this up:**

1. Create the profile folder outside the default user-data folders listed above, and outside the Testsigma data directory.

2. Grant Testsigma read and write access to that folder.

3. In the test configuration settings, add the following **Desired Capabilities**. The key depends on your browser, while the value stays the same:

   | Browser | Key | Data type | Value |
   | :-- | :-- | :-- | :-- |
   | **Chrome** | **goog:chromeOptions** | String | **{"args":["--user-data-dir=&lt;Profile Path&gt;"]}** |
   | **Microsoft Edge** | **MsOptions** | String | **{"args":["--user-data-dir=&lt;Profile Path&gt;"]}** |

   Replace **&lt;Profile Path&gt;** with the path of the folder you created in **step 1**.

4. Install the recorder extension in that profile, either from the Chrome Web Store or through your IT extension policy.


### **Default User-Data Folder Restriction**

A profile used for automation cannot live inside the browser's default user-data folder. This restriction comes from Chrome and Edge, not from Testsigma. Anything placed inside these directories is not accessible to automation, and Testsigma cannot launch it.

**Do not place automation profiles in the following locations:**

| Browser | Windows | macOS | Linux |
| :-- | :-- | :-- | :-- |
| **Chrome** | **%LOCALAPPDATA%\Google\Chrome\User Data** | **~/Library/Application Support/Google/Chrome** | **~/.config/google-chrome** |
| **Microsoft Edge** | **%LOCALAPPDATA%\Microsoft\Edge\User Data** | **~/Library/Application Support/Microsoft Edge** | **~/.config/microsoft-edge** |

[[info | NOTE:]]
| The browser must be **fully closed** before launching the session. A profile can't be used by two browser instances at once, including background or tray processes with no visible window. Otherwise, the session fails to start with a **"user data directory is already in use"** error.

[[info | NOTE:]]
| To use a named profile inside that folder rather than the default one, pass **--profile-directory=&lt;folder name&gt;** alongside **--user-data-dir** (for example, **Profile 1**). The default profile works with just the **--user-data-dir** argument as documented above.

---