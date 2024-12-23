---
title: "Import and Export Elements"
metadesc: "How to import and export Elements to the Elements list | Import functionality helps to copy Elements between Application Versions within Testsigma app."
noindex: false
order: 6.9
page_id: "Import and Export Elements"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Import File Format"
  url: "#import-file-format"
- type: link
  name: "Steps to Import Elements"
  url: "#steps-to-import-elements"
- type: link
  name: "Steps to Export Elements"
  url: "#steps-to-export-elements"

---

---


One of the most common use cases for the Import functionality is to copy elements between application versions within Testsigma. You can export the elements from the source version and import them into the target version across the same or different projects.


Another common use case is to perform bulk-update on the elements easily. You can export the elements, modify each element in the exported file as required, and import it back to make changes for a set of elements easily.


[[info | **NOTE**:]]
| If you are trying to update the elements using Import/Export, keep the UUID column intact so that the correct element gets updated while importing back. You may change the other fields as required.


Another less common application is when we want to load the Test locators for the UAT provided by the development team. The development team can add custom attributes to the elements to increase the application's testability and provide that to the testing team. This can be easily loaded using the Element Import functionality. They can create many Elements together by adding the Element details to a Spreadsheet file of suitable format and importing it, which creates all elements with the required details within the project.


*If you are trying to create new Elements in bulk, make sure to clear both the UUID columns.*


---


> ## **Prerequisites**
>
>
> Before you begin, ensure that you have a file to import. 

---

## **Import File Format**
The Import file has the following Columns:

| **Column Name**  | **Description** | 
| :---        |    :---  |         
| UUID     | The unique identifier of the Element when it is exported (Only applicable in case of exported Elements) | 
| Name / fieldName | Name of the Element        | 
| Screen Name / screenName   | Name of the Screen/Page where the Element is present. It can be any value and is used for organizing/grouping the Elements | 
| Locator Type / locatorType  | Type of the locator       | 
| Value / fieldDefintion | The value of the locator with the selected Locator Type       | 
| Created Using / createType   | Mentions how the Element was created      | 

[[info | NOTE:]]
| A Sample Element Import Template file has been provided in the Element Import dialog.


---

## **Steps to Import Elements**
1. Navigate to **Create Tests > Elements**. 
![Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/imelnavelem.png)

2. From the **Elements** page, click on the **Import** button to open the Import dialog. 
![Import Dialog](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/imelid.png)

3. Click on **Browse File** to upload the file containing the **Elements**.
![Browse Files](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/imelbrf.png)

4. Once the file is uploaded, you will get two options to handle the duplicate elements.
![Options](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/imelto.png)
    - Select the Overwrite option if you want to overwrite the data in the elements list.
    - Select the Ignore option if you want to ignore the data from the elements file.

5. Click on **Import**.
![Import](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/elimcone.png)


The elements will be imported in the background and you will receive an email once the import is complete.


---


## **Steps to Export Elements**
1. Navigate to **Create Tests > Elements**. 
![Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/imelnavelem.png)


2. From the **Elements** page, click on the **Export**.
![Export](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/imelexp.png)


It will show a success message saying that the export has started. The Elements will be exported in the background, and you will receive an email once the export process is complete.


Here's a quick GIF demonstrating how to import & export elements.
![Import & Export Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ImportExportElementsWorkFlow.gif)

---


