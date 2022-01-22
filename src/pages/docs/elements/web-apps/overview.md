---
title: "Overview of Elements for a Web Project"
metadesc: " An overview of everything regarding Elements for a web project in Testsigma."
order: 6.21
page_id: "Overview of Elements for a Web Project"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Creating Elements"
  url: "#creating-elements"
- type: link
  name: "Filter Elements "
  url: "#filter-elements"
- type: link
  name: "Element Review Management"
  url: "#element-review-management"
- type: link
  name: "Dynamic Elements with Test Data"
  url: "#dynamic-elements-with-test-data"
---

---
**Elements** in Testsigma represent the locators for the actual elements on your Web Pages or App Screens. These are needed to direct the interactions as Test Steps.

On the below page - Full name, Email-id, Age Group, Gender, etc. are all elements in the web page.

![alt text](https://docs.testsigma.com/images/web-apps/sample-elements.png)

In order to interact with any of these elements on the page, we have to create an Element in Testsigma Elements Repository.

An element, in Testsigma Elements Repository, contains details that identify and locate those elements on the page. These can be a combination of HTML attributes and their parent, child, or sibling relationships with other elements on the page.

We will be using an Element’s name in the Test Steps while writing Test Cases.

<br>

## **Creating Elements**

We can [create multiple Elements using Testsigma Chrome Recorder](https://testsigma.com/docs/elements/web-apps/record-multiple-elements/) which is the easiest and recommended way. Creating all the Elements in advance helps you to speed up the Test Case creation process.

We can also [create a single Element using Testsigma Chrome Recorder](https://testsigma.com/docs/elements/web-apps/capture-single-element/)

Otherwise, if you are comfortable with XPaths and CSS Selectors, you can [create the Element manually](https://testsigma.com/docs/elements/web-apps/create-manually/) using the HTML attributes/properties.


The following actions can be done from the Elements list:
* Affected List
* Sort the Elements 
* Import/Export Elements: Read more about it in the document [here](https://testsigma.com/docs/elements/import-export/).
* Filter the Elements
* Bulk Delete the elements

Let’s discuss more details about element actions affected list, sort and filter below:
1. **Affected List:** The affected List button in the Elements list shows the Test Cases that are affected by modification on the corresponding element.
The Test Suites and the Test Plans containing these Test Cases can also be viewed from this page.
2. **Sort the Elements:** The Elements list can be sorted on the basis of Name, Created Date and Update Date in ascending or descending order

![Sort Elements](https://docs.testsigma.com/images/web-apps/elements-sort.png)

## **Filter Elements** 
To filter Elements, click on the Filter icon on the top left corner of the Elements List page. In the overlay that opens up, you can see the following options for filtering the Elements:

* Name
* Type
* Screen name
* Created By
* Created Date
* Updated Date
* Value
* Labels
* Usage in Test Case

![Element List Filters overlay](https://docs.testsigma.com/images/web-apps/element-list-filters-unfiltered.png)

* Name: Filter the Elements by their Name. This can be used to search Elements by name as well.
* Type: Filter the Elements on the basis of locator type
* Screen name: Filter by Screen name of the Element
* Created By: Filter by the creator of Element
* Created Date, Updated Date: Filter by created and updated dates
* Value: Filter the Elements by their locator value. This can be used to search Elements by their locator value as well.
* Labels: Filter by the tag/label for an element
* Usage in Test Cases: Filter on the basis of the Element’s usage in Test Cases - Used, unused, or all.

Modify the filtering options and click on the Filter button to filter the list. 

When you click on the Filter button, the Elements list would be filtered as per your selected filtering options. If you want to filter more, make changes to the filtering options and click on Filter again.

Click on the Close button to get to the filtered list.

Saving and updating Element Filters work the same as Test Case Filters. Refer to the [Test Case Filters](https://testsigma.com/docs/test-cases/manage/filters/) article to learn more about Filter Actions

<br>

## **Element Review Management**
Larger teams can enable Review Management for the Elements so that the Elements used in the Test Cases are reviewed similar to a Test Case before finalizing and adding to the Regression Test Suite. [Learn more here](https://testsigma.com/docs/collaboration/elements-review-management/)

<br>

## **Dynamic Elements with Test Data**
Some advanced use-cases call for Elements with dynamic locators. A few of them are listed below:

[Using Parameter Test Data for Dynamic locators](https://testsigma.com/docs/elements/dynamic-elements/with-parameter-test-data/)<br>
[Using Runtime Test Data for Dynamic locators](https://testsigma.com/docs/elements/dynamic-elements/with-runtime-test-data/)<br>
[Using Environment Test Data for Dynamic locators](https://testsigma.com/docs/elements/dynamic-elements/with-environment-data/)<br>




