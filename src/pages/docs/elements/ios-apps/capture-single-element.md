---
title: "Record Single Element Using Recorder"
metadesc: "Learn how to selectively capture elements one at a time by using the Testsigma mobile inspector for an iOS project in Testsigma application."
noindex: false
order: 6.42
page_id: "Create One Element at a Time (Using Mobile Inspector) for an iOS Project"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Record an Element"
  url: "#steps-to-record-an-element"
- type: link
  name: "Reusing Elements Recorded"
  url: "#reusing-elements-recorded"
---


---


In an iOS project in Testsigma, you can selectively capture elements one at a time using the Testsigma recorder. This article discusses how to capture single element using recorder. 

---

> ## **Prerequisites**
>
> - You should know how to create a [project](https://testsigma.com/docs/projects/overview/) and [application](https://testsigma.com/docs/projects/applications/) in Testsigma.
>
> - You should have [Testsigma chrome extension installed](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/). 
>
> - An iOS app to test.

---

## **Steps to Record an Element**

1. From the left navigation bar, go to **Create Tests > Elements**.
![Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ioselmnav.png)


2. Click on **Record**.
![Record](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ioselmcorec.png)


3. On **Record Elements** overlay, select **Test Lab**, **Test Machine**, **Upload App Source** and click on **Record**.
![Record](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ioselmolrec.png)


4. Wait for the app to load fully.


5. Once the app is loaded, click on element you want to capture. 


6. On the **Create Element** section, validate the **Name**, **Screen Name**, **Element Type**, **Value** and the **Value**.
![Create Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ioselmlb.png)


7. Click on **Create**.
![Create](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ioselmcoc.png)


8. The element will be saved in the elements list. 
![Saved](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ioselmielmlist.png)


[[info | **NOTE**:]]
| - To update an element, hover over the recorded element and click on the edit icon. Change the element details manually and click **Update** to finalize the changes.
|   ![Update Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ioselmeditelm.png)
| - You can also update the element from the run results by navigating to **Ad-Hoc Runs > Test Step > Element > Edit Element**.

9. Stop the recorder to close the session.

### **Creating an Element While Creating Test Case**

Alternatively, you can also create the element while creating test case by following the steps below. 

1. Hover over the element on the test step and click on **Create Element** from the dropdown.
![Create Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ioselmftss.png)

2. On **Create Element** overlay, enter **Name**, **Screen Name**, **Value** select the **Element Type** and click on **Create Element**.
![Create](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ioselmftsctn.png)

[[info | **NOTE**:]]
| - To update an element from test steps, hover over the element and click on the edit icon. Change the element details manually and click **Update** to finalize the changes.
|   ![Update Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/iosedelm.png)

---


## **Reusing Elements Recorded**

1. Create a test case in which you will be reusing your pre-recorded elements.

2. Start recording test steps for the test case.

3. Hover over the element on the test step where you want to reuse the saved element and click on **Change Element**.
![Change Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ioselmce.png)

4. On **Elements** overlay, select the element you want to reuse. 
![Reuse](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ioselmcemsse.png)

5. Click on **Update Step** to finalize the change. 
![Update Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ioselmseus.png)

[[info | **NOTE**:]]
| You can also reuse the element by following the same steps while creating a test case manually.

---