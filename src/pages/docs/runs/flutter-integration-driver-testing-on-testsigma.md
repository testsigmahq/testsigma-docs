---
title: "Flutter Integration Driver Testing on Testsigma"
metadesc: "Automate end-to-end Flutter app testing by interacting with widgets for reliable, maintainable, and accurate tests across devices and screens."
noindex: false
order: 9.61
page_id: "flutter-integration-driver-testing-on-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Prepare the App with Flutter Integration Driver"
  url: "#prepare-the-app-with-flutter-integration-driver"
- type: link
  name: "Steps to Create Elements Using Flutter Properties"
  url: "#steps-to-create-elements-using-flutter-properties"
- type: link
  name: "Steps to Execute Tests Using Flutter Integration"
  url: "#steps-to-execute-tests-using-flutter-integration"
---

---

The Flutter Integration Driver is a tool that automates end-to-end testing of Flutter apps by interacting directly with widgets, which are the building blocks of the user interface, using keys, text, or widget types. It ensures reliable, maintainable, and accurate tests, improves coverage of complex user flows, and guarantees consistent behavior across devices and screen sizes. 

This article discusses how to prepare the app with Flutter integration driver, how to create elements using Flutter properties, and how to execute tests using Flutter Integration.  

---

## **Prepare the App with Flutter Integration Driver**

1. Open the **pubspec.yaml** file. Add the following under **dev_dependencies**:

```
dev_dependencies:
  appium_flutter_server: 0.0.33
```

[[info | **NOTE**:]]
| You can get the latest version from [pub.dev](https://pub.dev/packages/appium_flutter_server/install?utm_source=chatgpt.com).

2. Create a directory called **integration_test** in the root of your Flutter project.

3. Create a file called **appium_test.dart** in the **integration_test** directory.

4. Add the following code to the **appium_test.dart** file:

```
import 'package:appium_flutter_server/appium_flutter_server.dart';
import 'package:appium_testing_app/main.dart';

void main() {
  initializeTest(app: const MyApp());
}
```

[[info | **NOTE**:]]
| If you need to configure prerequisites before loading the app, use:
| ```
| import 'package:appium_testing_app/main.dart'; as app;
| void main() {
|  initializeTest(
|    callback: (WidgetTester tester) async {
|       // Perform any prerequisite steps or intialise any dependencies required by the app
|       // and make sure to pump the app widget using below statement.
|       await tester.pumpWidget(const app.MyApp());
|    },
|  );
| }

5. Build the app.

   - For Android: 
       ```
       flutter build apk --debug --target=integration_test/appium_test.dart
       ```
   - For iOS Simulator (Debug):
       ```
         flutter build ios integration_test/appium_test.dart --simulator
       ```
   - For iOS Real Device (Release):
       ```
         flutter build ipa --release integration_test/appium_test.dart
       ```
   - For macOS:
       ```
       flutter build macos --release integration_test/appium_test.dart
       ```

6. Verify that the app is running. 

    - For Android:
       1. Run the following command: 
          ```
          adb logcat | grep flutter
          ```
        
        2. Open the application on the device or emulator manually.

        3. Verify the logs in the console. Example output:
           ```
           06-17 17:02:13.246 32697 32743 I flutter : The Dart VM service is listening on http://127.0.0.1:33339/E2REX61NaiI=/
06-17 17:02:13.584 32697 32735 I flutter : 00:00 +0: appium flutter server
06-17 17:02:14.814 32697 32735 I flutter : shelfRun HTTP service running on port 9000
06-17 17:02:14.814 32697 32735 I flutter : [APPIUM FLUTTER]  Appium flutter server is listening on port 9000
06-17 17:02:14.866 32697 32735 I flutter : [APPIUM FLUTTER]  New Request [GET] http://127.0.0.1:10000/status
06-17 17:02:14.869 32697 32735 I flutter : [APPIUM FLUTTER]  response {message: Flutter driver is ready to accept new connections, appInfo: {appName: appium_testing_app, buildNumber: 1, packageName: com.example.appium_testing_app, version: 1.0.0, buildSignature: F2C7CEC8F907AB830B7802C2178515D1FD4BEBA154E981FB61FFC8EC9A8F8195}}
            ```
   
    - For iOS Simulator:
       ```
       xcrun simctl spawn booted log stream | grep flutter
       ```    
    - For iOS Real Device:
       1. Check xcode device logs.
  
       2. Open the application on the device or emulator manually.

       3. Verify the logs in the console. Example output: 
          ```
          06-17 17:02:13.246 32697 32743 I flutter : The Dart VM service is listening on http://127.0.0.1:33339/E2REX61NaiI=/
06-17 17:02:13.584 32697 32735 I flutter : 00:00 +0: appium flutter server
06-17 17:02:14.814 32697 32735 I flutter : shelfRun HTTP service running on port 9000
06-17 17:02:14.814 32697 32735 I flutter : [APPIUM FLUTTER]  Appium flutter server is listening on port 9000
06-17 17:02:14.866 32697 32735 I flutter : [APPIUM FLUTTER]  New Request [GET] http://127.0.0.1:10000/status
06-17
          ```

---

## **Steps to Create Elements Using Flutter Properties**

1. Navigate to **Create Tests > Elements**.
   ![Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/runs/Flutter_1.png)

2. Create on **Create Element**.
   ![Create Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/runs/Flutter_2.png)

3. On the **Create Element** overlay, you'll see the following fields:
   - **Name:** Enter the name you want to give your element.

   - **Screen Name:** Mention the screen that your element resides on.

   - **Element Type:** Expand the drop-down and select a Flutter type. 

   - **Enter Value:** Enter the value corresponding to the Element Type you selected.
   ![Create Element Overlay](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/runs/Flutter_3.1.png)

4. Once you have added all the details, click on **Create Element**.
   ![Click Create Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/runs/Flutter_4.png)

5. The element will be saved in the elements list.

---

## **Steps to Execute Tests Using Flutter Integration**

1. In the Test Case Details page, click **Run**.
   ![Run](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/runs/Flutter_5.png)

2. In the **Ad-Hoc Run** overlay, select the required **Test Lab** and **Test Machine**. 
   ![Test Lab and Test machine](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/runs/Flutter_6.png)

3. Under **App Source**, click **Upload** and upload the required file. 
   ![Upload](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/runs/Flutter_7.png)

4. Expand **Desired Capabilities** and enter the following:

   |Key|Data type|Value|
   |---|---|---|
   |automationName|String|FlutterIntegration|

  ![Desired Capabilities](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/runs/Flutter_8.png)

5. Click **Run Now**. 
   ![Run Now](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/runs/Flutter_9.png)



     










