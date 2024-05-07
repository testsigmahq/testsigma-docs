---
title: "Finding the App Bundle ID for iOS"
page_title: "Finding the App Bundle ID for iOS"
metadesc: "There is no way to directly get bundle IDs in iOS app store (Apple Store) directly. Learn how to find the app bundle ID for iOS"
noindex: false
order: 23.693
page_id: Finding the App Bundle ID for iOS
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "If your App is in the App Store"
  url: "#if-your-app-is-in-the-app-store"
- type: link
  name: "If you have IPA File Locally"
  url: "#if-you-have-ipa-file-locally"
- type: link
  name: "If you only have the App on Phone"
  url: "#if-you-only-have-the-app-on-phone"
- type: link
  name: "Check App Build for Simulator"
  url: "#check-app-build-for-simulator"
---

---

There is no way to look up bundle IDs directly in the Apple iOS app store. Follow the steps below to find the iOS app bundle IDs.

---

## **If your App is in the App Store**

1. Find the app online (Google for the iTunes link). For this example we use Apple pages: https://itunes.apple.com/app/pages/id361309726?mt=8

2. Copy the number after the id in the URL. (Here: 361309726)

3. Open https://itunes.apple.com/lookup?id=361309726 where you replace the ID with the one you looked up.

4. Search the output for **bundleID**. In this example it looks like this (next to a bunch of other data): **"bundleId":"com.apple.Pages"**. So for Apple, the bundle ID is **com.apple.Pages**

---

## **If you have IPA File Locally**

1. Copy the **.ipa** file and rename the extension to **.zip**. (E.g. **Pages.ipa** will become **Pages.zip**)

2. Unzip the zip file. You will get a new folder named like the zip file.

3. Search for the file **iTunesMetadata.plist** in that new folder.

4. Open the file with a text editor and search for **softwareVersionBundleId**. For Pages this looks like this and is **com.apple.Pages**:
   ![Software Ver](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/appbundleios.png)

---

## **If you only have the App on Phone**

1. Use a tool like **iExplorer** that allows you to browse your device storage directly.

2. Connect your iPhone/iPad to your Mac via USB and open iExplorer or a similar utility.

3. Open the Apps folder on your device and locate the app you’re interested in.

4. Locate the **iTunesMetadata.plist** file and follow the steps like you just unpacked the ipa above.

   ![App on Phone](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/appiosbndl.png)

---

## **Check App Build for Simulator**

If you plan to automate tests on simulators, the app must be specifically built for the simulator platform. While testing on a physical device, the app must be built for the ARM platform.


You can check the build type of your app file following the steps below:

### **Checking Build Type of iOS App**

1. Change the extension from **.ipa** to **.zip** and then extract it. You will find a payload folder inside the **.zip** that has the **.app** file.

2. Use Terminal on the Mac and run this command:

   ```lipo -info myapp.app/myapp```

Replace myapp with whatever the name of your files are after you extract them. You should see output for `i386` or `x86_64`. If you see output for only **ARM**, then it's for real devices only.

---