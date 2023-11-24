---
title: "Capture Single Element Using Recorder"
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
  name: "Steps to Create an Element"
  url: "#steps-to-create-an-element"
- type: link
  name: "Updating an Element"
  url: "#updating-an-element"
- type: link
  name: "Reusing Elements Recorded"
  url: "#reusing-elements-recorded"
---


---


In an iOS project in Testsigma, you can selectively capture elements one at a time using the Testsigma recorder. This article discusses how to capture single element using recorder. 

---

## **Prerequisites**

- You should know how to create an iOS [project](https://testsigma.com/docs/projects/overview/) in Testsigma.

- You should have [Testsigma chrome extension installed](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/). 

- An iOS app to test.

---

## **Steps to Create an Element**

1. Navigate to **Create Tests > Elements**.
![Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/iosecnav.png)


2. Click on **Record**.
![Record](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ioseccor.png)


3. On **Record elements** overlay, select **Test Lab**, **Test Machine**, **Upload App Source** and click on **Record**.
![Record](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/iosecsdtls.png)


4. Wait for the app to load fully.


5. Once the app is loaded, click on element you want to capture. 
![Element to Capture](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ioseccoelm.png)


6. On the **Create Element** section, enter the **Name**, **Screen Name**, select the **Element Type**. 
![Create Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ioseced.png)


7. Click on **Create**.
![Create](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ioseccocrte.png)


8. The element will be saved in the elements list. 
![Saved](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/iosecsaved.png)

9. Stop the recorder to close the session.


### **Creating an Element While Creating Test Case**

Alternatively, you can also create the element while creating test case by following the steps below. 

1. Hover over the element on the test step and click on **Create Element** from the dropdown.
![Create Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ioecitc.png)

2. On **Create Element** overlay, enter **Name**, **Screen Name**, select the **Element Type** and click on **Create Element**.
![Create](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/iosectccoce.png)


---


## **Updating an Element**

1. Hover over the element and click on **Edit**. 
![Edit](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ceuredite.png)

2. On the **Update Element** section, update the **Name**, **Screen Name**, select the **Element Type**. 
![Update Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ceuraaupd.png) 

3. Click on **Update**.
![Click on Update](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ceuraauec.png)

### **Updating an Element While Creating Test Case**

Alternatively, you can also update the element while creating test case by following the steps below. 

1. Hover over the element on the test step and click on **Edit Element**.
![Edit Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ceuraaecwctc.png)

2. On **Update Element** overlay, update the **Name**, **Screen Name**, select the **Element Type**.
![Update](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ceuraauewctcup.png)

3. Click on **Update Element**
![Update Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ceuraauelement.png)


---


## **Reusing Elements Recorded**


1. Create a test case in which you will be reusing your pre-recorded elements.


2. Start recording test steps for the test case.


3. Hover over the element on the test step where you want to reuse the saved element and click on **Change Element**.
![Change Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/iosecrece.png)


4. On **Elements** overlay, select the element you want to reuse. 
![Reuse](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/iosecrese.png)


5. Click on **Update Step** to finalize the change. 
![Update Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/iosecusre.png)


[[info | **NOTE**:]]
| You can also reuse the element by following the same steps while creating a test case manually.


---