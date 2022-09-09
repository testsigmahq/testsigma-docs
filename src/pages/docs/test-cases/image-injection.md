---
title: "Image injection"
metadesc: "How to inject image /QR code/ barcode in teststeps "
noindex: false
order: 4.70
page_id: "Image injection"
warning: false
---
<br>
When you build an app that has an image scanning functionality you need to use a real device to test the feature. With Testsigma’s camera mocking or image injection feature, you only need to upload the mobile app under test and specify the image to use instead of the actual scan of the device.

[[info | Note:]]
| This feature is applicable only to native iOS and Android applications.

With the help of the following simple steps, you can perform testing of the image scanning feature of your mobile application:

1. Navigate to **Test Development>Uploads**. Under the **Uploads** page,
   1. Upload the application under test onto the Testsigma cloud. Note that the application should have the image scan feature enabled. *For more information, refer to [uploading images](https://testsigma.com/docs/uploads/upload-apps/)*.
   2. Upload the image files. The image should be in PNG format. *For more information, refer to [uploading files](https://testsigma.com/docs/uploads/upload-files/)*.
   3. Copy the path of the uploaded image.
2. Navigate to **Test Development**>**Test Cases**. 
3. Create a new test case. Optionally you can select an existing test case.
4. Create the test steps for the test case.
5. From the test step, select the NLP *Scan image from test data*, from the drop-down list of suggestions. 
![scan_image_nlp](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/image-injection/scan_image_testdata.png)
6. Delete test data from the NLP. Paste in the URL of the image or barcode or QR code file uploaded in *step 1.3*.
![scan_image_nlp_url](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/image-injection/scan_image_testdata2.png)
7. Wait for a couple of seconds for the image to be fully scanned.
8. You can now execute your test case. Note that the image scanning feature can be used for both Ad-hoc executions and test plan executions. On execution of the test case, the image added in the NLP will be pushed for image injection on scanning.
