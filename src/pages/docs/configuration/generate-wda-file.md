---
title: "Creating WDA File for iOS App Testing"
page_title: "Creating WDA File for iOS App Testing"
order: 19.6
page_id: "Steps to Create WDA File for iOS App Testing"
metadesc: "Creating WebDriverAgent (WDA) is important for automating iOS tests | Learn how to generate WDA file for iOS app testing to ensure quality of application"
search_keyword: "Create WDA File"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Create WDA File"
  url: "#steps-to-create-wda-file"
---

---

WebDriverAgent (WDA) plays an important role in automating iOS tests. It bridges the code we write for testing and the actual iOS app, which helps us control the app, test how it behaves, and make sure it works correctly. This article discusses the steps and prerequisites for creating WDA files.

---

## **Prerequisites**

- Paid Apple Developer Account

- Mac Machine

- Xcode and Xcode Command line tools

---

## **Steps to Create WDA File**

1. Download from [Appium Github](https://github.com/appium/WebDriverAgent). 

2. Open **WDA Xcode Project** in **Xcode**. 

   ![Xcode Project](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/repimgwda.png)

3. On **Signing & Capabilities**, add Apple Account for wherever necessary in **Target OS & Integrations**.

   ![Signing & Capabilities](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/setcap.png)

4. Once the signing is done, run the following command to build the latest WDA WebDriverAgent. This command will build the WDA project and prepare it for testing. 

    ```
    xcodebuild build-for-testing \
    -project WebDriverAgent.xcodeproj -scheme WebDriverAgentRunner \ 
    -destination 'id=<DEVICE_UDID>'  
    ```

[[info | **NOTE**:]]
| Replace **<DEVICE_UDID>** with the actual **UDID** (Unique Device Identifier) of the iOS device or simulator where you want to run the tests.

5. Create a Zip Archive from the Products Folder <br>
Locate the **Products** folder within the Xcode derived data directory. The path looks like this: <br>
    
    ```
    zip/Users/<user>/Library/Developer/Xcode/DerivedData/WebDriverAgent-<RANDOM-STRING>/Build/Products
    ```


   Here, you need to replace **<user>** with your username and **<RANDOM-STRING>** with the random string associated with your WDA build.

6. Generating a New WDA for Installation

   Run the following commands to create a new WDA package for installation. 

    ```
    xcodebuild -scheme WebDriverAgentRunner -sdk iphoneos -configuration Release -derivedDataPath /tmp/derivedDataPath
    cd /tmp/derivedDataPath/Build/Products/Release-iphoneos
    mkdir -p Payload
    mv WebDriverAgentRunner-Runner Payload
    zip Payload wda.zip
    mv wda.zip wda.ipa
    ```

The above commands will generate a new **wda.ipa** file.

---
