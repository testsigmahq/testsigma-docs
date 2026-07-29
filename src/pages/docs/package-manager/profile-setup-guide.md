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

---

## **Your own browser profile**

Sessions run in a browser profile your team manages; the recorder extension must be installed in that profile. Use this mode to point Testsigma at a browser profile you already manage. For example, one with your own extensions, bookmarks, or saved logins.

To set this up:

1. Open the browser whose profile you want to use.

2. Go to **chrome://version** (use **edge://version** for **Microsoft Edge**).

3. Copy the value in the **Profile Path** row.
   ![profile path](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Profile_Path_for_Execution.png)

4. In the test configuration settings, add the following **Desired Capabilities**. The key depends on your browser, while the value stays the same:

   | Browser | Key | Data type | Value |
   | :-- | :-- | :-- | :-- |
   | **Chrome** | **goog:chromeOptions** | String | **{"args":["--user-data-dir=&lt;Profile Path&gt;"]}** |
   | **Microsoft Edge** | **MsOptions** | String | **{"args":["--user-data-dir=&lt;Profile Path&gt;"]}** |

   Replace **<Profile Path>** with the path you copied in **step 3**.

[[info | NOTE:]]
| The browser must be **fully closed** before launching the session. A profile can't be used by two browser instances at once, including background or tray processes with no visible window. Otherwise, the session fails to start with a **"user data directory is already in use"** error.

[[info | NOTE:]]
| To use a **non-default** profile instead of your default one, pass **--profile-directory=&lt;folder name&gt;** alongside **--user-data-dir** (for example, **Profile 1**). The default profile works with just the **--user-data-dir** argument as documented above.

---