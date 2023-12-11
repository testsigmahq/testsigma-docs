---
title: "Create OCR Text Extraction Addon"
page_title: "Create OCR Text Extraction Addon: Enhanced Test Automation"
metadesc: "Create OCR Text Extraction Addon seamlessly with our step-by-step guide. Extract text from pages, images, and elements effortlessly. Enhance your testing."
noindex: false
order: 17.81
page_id: "Create a OCR Text Extraction Addon in Testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Update the Action Code"
  url: "#update-the-action-code"
- type: link
  name: "OCR Code Update"
  url: "#ocr-code-update"
- type: link
  name: "Using OCR Addon in a Test case"
  url: "#using-ocr-addon-in-a-test-case"
---

---

This guide will instruct you step-by-step on how to create an OCR Text Extraction Addon for Testsigma. You should set up a class that implements the OCR interface, update the action code, and use the addon in test cases.

---

## **Prerequisites**

Before creating the OCR Text Extraction addon, ensure you have met the prerequisites for addon development. For more information, refer to the [Creating an Addon](https://testsigma.com/docs/addons/create/).

---

## **Update the Action Code**

1. Unzip the downloaded zip file and open the extracted folder in your preferred IDE as a Java module. ![Folder](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/folder.png)
2. Import the Java module as Maven/Gradle from your IDE.
3. Update the following template files:
    - **pom.xml**: Contains dependencies for coding your functionality.
    - **src folder**: Includes sample Java files with addon functions.
![OCR code update](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ocr.png)

---

## **OCR Code Update**

1. In the pom.xml file, add the necessary dependencies for OCR Text Extraction.
2. Update the following methods in the Java module:
    - ***extractTextFromPage():*** Extracts text from an entire page.
    - ***extractTextFromImage(OCRImage image):*** Extracts text from a specified OCRImage object.
    - ***extractTextFromElement(Element element):*** Extracts text from a specific Element object.

[[info | **NOTE**:]]
| All three methods return a List of OCRTextPoint objects, representing the text's location within the source.

---

## **Using OCR Addon in a Test case**

Once the addon is published, NLPs become available in the application. Follow these GIF below to use the OCR addon in Test Cases: ![Addon GIF](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ocr_text_extraction_addon.gif)

---
