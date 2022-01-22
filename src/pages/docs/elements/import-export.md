---
title: "Import and Export Elements"
metadesc: "The meta description should provide an accurate description of the content of the page."
order: 6.5
page_id: "Import and Export Elements
"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Import File Format"
  url: "#import-file-format"
- type: link
  name: "Import Elements"
  url: "#import-elements"
- type: link
  name: "Export Elements"
  url: "#export-elements"

---

---
One of the most common use cases for the Import functionality is to copy Elements between Application Versions within Testsigma. You can export the Elements from the source Version and import them into the target Version across the same or different Projects.

Another common use case is to perform bulk-update on the Elements easily. You can export the Elements, make modifications for each element in the exported file as required and import it back to make changes for a set of Elements together easily.
[[info | NOTE:]]
|If you are trying to update the Elements using Import-Export, make sure to keep the UUID column intact so that the correct Element gets updated while importing back. You may change the other fields as required.

Another less common application is when we want to load the Test locators for the Application under Test provided by the development team. The development team can add custom attributes to the elements for increasing the testability of the Application and provide that to the testing team. This can be easily loaded using the Element Import functionality. They can create a large number of Elements together by adding the Element details to a Spreadsheet file of suitable format and importing it which in turn creates all of the Elements with the required details within the Project.

*If you are trying to create new Elements in bulk, make sure to clear both the UUID columns.*

<br>

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
|A Sample Element Import Template file has been provided in the Element Import dialog.

<br>

## **Import Elements**
From the Elements page, click on the Import button to open the Import Element Dialog which appears as shown below:
![Import Elements overlay in Elements page](https://docs.testsigma.com/images/import-export/elements-page-import-elements-overlay.png)

1. Click on the Choose File button to upload the Excel file containing the Elements and click on the Upload button to upload the file.

   [[info | NOTE:]]
   |We need to use a specific Elements file Template for importing the data. Click on the Sample File link to download the Elements file template, update your Elements data and re-upload the file to Import your Elements.

2. Once the file is uploaded, you will get two options to handle the duplicate Elements in the sheet as shown below:

   ![Import Elements overlay focussed](https://docs.testsigma.com/images/import-export/elements-page-import-elements-overlay-focussed.png)

   **Overwrite:** Select this option if you want to overwrite the data in the Elements list on Testsigma when there is a clash between uploaded Elements and existing Elements.

   **Ignore:** Select this option if you want to ignore the data from the Elements file when there is a clash between uploaded Elements and existing Elements.


3. Click on the **Import** button to upload the file and import the data into the Elements list. 
It will show a success message saying that the import has started. The Elements will be imported in the background and you will receive an Email once the Import process is complete.

<br>

## **Export Elements**
From the Elements page, click on the Export button to export all the Elements to a Spreadsheet file.

It will show a success message saying that the export has started. The Elements will be exported in the background and you will receive an Email once the Export process is complete.




