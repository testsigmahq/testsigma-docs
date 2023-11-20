---
title: "Element List Actions"
pagetitle: "Element List Actions | Testsigma Documentaion"
metadesc: "Learn how Element List Actions in Testsigma empower your test automation. Sort, filter, search, save, and manage elements efficiently for improved testing."
noindex: false
order: 6.11
page_id: "element-list-actions-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Search Elements"
  url: "#search-elements"
- type: link
  name: "Affected List"
  url: "#affected-list"
- type: link
  name: "Sort Elements"
  url: "#sort-elements"
- type: link
  name: "Filter Elements"
  url: "#filter-elements"
- type: link
  name: "Save Element Filter"
  url: "#save-element-filter"
- type: link
  name: "View Saved Element Filters"
  url: "#view-saved-element-filters"
- type: link
  name: "Reusing Saved Elements"
  url: "#reusing-saved-elements"
---

---

Testsigma provides Element List Actions to manage and work with lists of elements in your test automation. This documentation will guide you through the actions you can perform on element lists, making your test automation tasks easier.

---

## **Search Elements**

Click inside the **Search bar** in the top right corner of the **Element List** page and type the name of the Element you want to find. As you type, Testsigma will show you the matching element. View the element you want by clicking on it in the search results. ![Search Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/search_elements.gif)


---
## **Affected List**

Click **View** in the affected list for the element allows you to see how changes to an element affect your **test cases**, **step groups**, **test suites**, and **test plans**. It helps you understand the impact of any modifications on your tests. ![Afflected List in Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/affected_elementslist.gif)

---
## **Sort Elements**

Click the **Sort by** option in the menu bar on the **Elements List** page and arrange your elements based on criteria such as **Title**, **Created Date**, or **Updated Date**. Sorting will help you prioritise and manage your elements easily. ![Sort elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sort_elementslist.png)

---

## **Filter Elements**

1. Click on **Show Filters** in the menu bar on the **Elements List** page.
2. Select **Add Filter** from the drop-down list. Choose from the following filtering options: **Element Value**, **Name**, **Linked to Test Case**, **Labels**, **Screen Name**, **Element Type**, **Created By**, **Created Date** and **Updated Date**.

![Filter Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/filter_elementslist.gif)

You can use user-defined custom fields and the default fields to filter elements. You can modify the filtering options by selecting **Add Filter** from the drop-down list and using multiple filters to obtain granular results.

---

## **Save Element Filter**

1. Click **Show Filters** in the menu bar on the **Elements List** page.
2. Click **Add Filter** to open the drop-down list and select the desired filters.
3. Click **Save Filter** will make the drop-down list appear for saving the current filter, and select **As New** will open a pop-up window named **Save filter config as**. Click **Reset** to discard the current filter.
4. Enter a name for the configuration in the **Config Name** field and mark the checkbox to make it **Public** (Visible for all users with access to the project). Then, click **Save** to save the filter.
5. Click **Saved Filters** in the menu bar on the **Elements List** page to open the drop-down list. In **Custom Filters**, locate the saved filter, select the filter and mouse over to the filter, and click the **Edit** button next to the filter name to edit it. To delete the saved filter, click the **Delete** button. ![Save Elememts Filter](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/save_elementslist.gif)

---

## **View Saved Element Filters**

1. Click on **Saved Filters** in the menu bar to open the drop-down list on the **Elements List** page.
2. Find the saved filter within **Custom** or **Predefined Filters** and choose it to view the filtered version. ![View Saved Elements Filter](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/viewsaved_elementslist.png)

---

## **Update Saved Element Filter**

1. In the **Elements List** Page, click **Saved Filters** from the menu bar.
2. Open the drop-down list by clicking **Add Filter** and choose the additional filtering options you want to apply to the existing ones.
3. Once you have made your desired changes, click on **Save Filter**. This will display a drop-down list, allowing you to save the updated filter. If you want to replace the existing filter, click **Replace Existing**, which will prompt a pop-up window named **Update filter config**.
4. In the **Update filter config** pop-up window, you can enter a new name for the updated filter if necessary. Additionally, you can continue configuring by marking the checkbox to make it **Public** (visible for all users with access to the project). Finally, click **Update** to save the changes to the filter. ![Update Saved Filters](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/updatesavedfilter_elementslist.gif)

[[info | NOTE:]]
| If you wish to discard the current filter, click All in the menu bar on the Elements List page.

---

## **Reusing Saved Elements**

Once you create and add elements to a test case, they are saved in the corresponding project in Testsigma. You can reuse these elements in new test steps in the same project. 

---