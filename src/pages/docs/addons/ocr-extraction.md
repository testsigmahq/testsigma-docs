---
title: "How to create OCR Text Extraction Addon"
metadesc: "This article discusses how to create an addon for OCR text extraction for Testsigma app | OCR Text Extraction addon will help you to extract texts from images"
noindex: false
order: 17.81
page_id: "Create a OCR Text Extraction Addon in Testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Update the Action Code"
  url: "#update-the-action-code"
- type: link
  name: "Overview of the method to extract text"
  url: "#overview-of-the-method-to-extract-text"
- type: link
  name: "Using OCR Addon in a Test case"
  url: "#using-ocr-addon-in-a-test-case"
---


---

In this article, we will discuss how to create an addon for OCR text extraction. The creation part for the addon is similar except we set a class that implements the OCR interface.


## **Prerequisites**

- To know about the prerequisites for addons, refer to [prerequisites for creating an add-on](https://testsigma.com/docs/addons/pre-requisite-to-create-addon/).

- To know how to create an addon, refer to [create a Testsigma addon](https://testsigma.com/docs/addons/create/).

---

## **Update the Action Code**

1. Unzip the downloaded zip file and open the extracted folder in your favorite IDE as a Java module. This Java module contain the following template files which need to be updated:
![Folder](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/folder.png)

- **pom.xml:** Contains all your dependencies needed to code your functionality.

- **src folder:** Sample source java files with sample add-on functions.


2. From your IDE, import the downloaded Java module as Maven/Gradle.


3. The Template Java module contains all necessary dependencies required to develop an Addon. For OCR Text Extraction action, you can add the following to pom.xml.
![OCR code update](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ocr.png)

---

## **Overview of the method to extract text**

- ***extractTextFromPage():*** This method will extract text from an entire page.

- ***extractTextFromImage(OCRImage image):*** This method will extract text from a specified OCRImage object.

- ***extractTextFromElement(Element element):*** This method will extract text from a specific Element object.

[[info | **NOTE**:]]
| All three methods mentioned above will return a List of OCRTextPoint objects, which represent the location of the text within the source.

---


## **Using OCR Addon in a Test case**

Once you publish the addon, the NLPs will be available in the application. Example NLP, 'Click on the ***Element*** by the text ***test-data***'.




---
