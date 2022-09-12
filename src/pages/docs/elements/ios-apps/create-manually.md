---
title: "Create Elements [Manually]"
metadesc: "How to create elements manually for an iOS project in Testsigma."
noindex: false
order: 6.44
page_id: "Create Elements [Manually]"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Introduction"
  url: "#introduction"
- type: link
  name: "Pre-requisites"
  url: "#pre-requisites"
- type: link
  name: "How to create elements manually for an iOS project in Testsigma"
  url: "#how-to-create-elements-manually-for-an-ios-project-in-testsigma"

---


---
In this document, we will discuss how to create elements manually for your iOS project in Testsigma i.e. without the use of a Test recorder.

<br>

---
##**Pre-requisites**
You should have an iOS project in Testsigma. See [creating a project](https://testsigma.com/docs/projects/overview/).

<br>

**Navigation**

**Test Development > Elements**

<br>

---
##**How to create elements manually for an iOS project in Testsigma**

1. Go to your iOS project, then go to Test Development > Elements.
2. On the ‘All Elements’ page that appears, click on the create button on the top right:
![all elements page for an iOS project with Manually radio button selected](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/elements/ios-apps/create-manually/all-elements-page-create-element-manually-ios-testsigma.png)

3. The ‘Create Element’ form opens up, as shown in the screenshot below:
![create element form in Testsigma for an iOS project with Manually radio button selected](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/elements/ios-apps/create-manually/create-element-form-highlighted-manually-ios-testsigma.png)

4. Create the element either manually or via element inspector. In this document, we will cover how to create elements ‘manually’. You can also [capture elements via Test recorder](https://testsigma.com/docs/elements/ios-apps/capture-single-element/). For now, select the radio button ‘Manually’.

5.  You will see the form options as shown in the screenshot below:
![create element form in Testsigma for an iOS project with Manually radio button selected ](https://docs.testsigma.com/images/create-manually/create-element-manually-ios-testsigma.png)

Here are the fields that you will see:<br>
&emsp;&emsp; 1. **Name:** Enter the name you want to give your element.<br>
&emsp;&emsp; 2. **Screen Name:** Mention the screen that your element resides on.<br>
&emsp;&emsp; 3. **Element Type:** There are 5 types of identifier types supported in Testsigma. This field is a drop-down list and you can select any one of them: XPATH, ID, Name, Class Name, or Accessibility ID<br>

![element type dropdown values on the create element form for iOS project in Testsigma](https://docs.testsigma.com/images/create-manually/element-type-dropdown-value-create-an-element-ios-testsigma.png)
&emsp;&emsp;4. **Enter Value:** Enter the value here that is in correspondence with the Identifier Type you selected.

<br>

6. Once you have added all the details, click on the ‘Create’ button and the element you created will be added to the project.


