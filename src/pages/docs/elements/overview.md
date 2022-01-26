---
title: "Element List Actions"
meta_desc: "Actions you can perform in the Elements List View, such as search, sort and filter."
order: 6.11
page_id: "Element List Actions"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Affected List"
  url: "#affected-list "
- type: link
  name: "Sort Elements"
  url: "#sort-elements-elements-sort"
- type: link
  name: "Filter Elements"
  url: "#filter-elements"
---

---

Elements Repository is a shared list that contains all the elements created in a specific Application Version. All the Test Cases within the Application Version can use these elements in their Test Steps.

<br>

---
##**Affected List**
The affected List column in the Elements page shows the Test Cases that will be affected by modification on the corresponding element.

The Test Suites and the Test Plans containing these Test Cases can also be viewed from this page.

<br>

---
##**Sort Elements $elements-sort**
The Elements list can be sorted on the basis of Name, Created Date, and Update Date in ascending or descending order.

![Sort Elements](https://docs.testsigma.com/images/elements/elements-sort.png)


---
##**Filter Elements**
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

![Element List Filters overlay](https://docs.testsigma.com/images/elements/element-list-filters-unfiltered.png)

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

Saving and updating Element Filters work the same as Test Case Filters. Refer to the [Test Case Filters](https://testsigma.com/docs/test-cases/manage/filters/) article to learn more about Filter Actions.


