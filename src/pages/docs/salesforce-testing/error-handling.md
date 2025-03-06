---
title: "Error Handling Post Metadata Refresh"
page_title: "Error Handling Post Metadata Refresh"
metadesc: "On refreshing metadata, Testsigma identifies potential errors in test cases, step groups and elements linked to updates in the Salesforce organization structure"
noindex: false
order: 28.9
page_id: "Error Handling Post Metadata Refresh"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Check Errors on Test Case List"
  url: "#steps-to-check-errors-on-test-case-list"
- type: link
  name: "Steps to Resolve Errors in Test Case"
  url: "#steps-to-resolve-errors-in-test-case"
- type: link
  name: "Handling Deprecated Elements"
  url: "#handling-deprecated-elements"
---

---

On metadata refresh, Testsigma identifies potential causes of test case failures due to Salesforce organization structure updates, such as removing a field. This article discusses steps to identify errors due to metadata refresh on test cases, step groups, and the element repository.


---

> ## **Prerequisites**
> 
> Before you begin, ensure you have a [Salesforce Connected App](https://testsigma.com/docs/salesforce-testing/connected-app/), [Salesforce Metadata](https://testsigma.com/docs/salesforce-testing/metadata-connections/) connected to Testsigma, and know how to [Refresh Metadata](https://testsigma.com/docs/salesforce-testing/metadata-connections/#steps-to-refresh-metadata-connection).

---


## **Steps to Check Errors on Test Case List**

1. From the **Dashboard**, navigate to **Create Tests > Test Cases**.
  
   ![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ehtcsnavg.png)

2. You can find the impacted test cases highlighted on the **Test Cases** page with a Warning. 

   ![Warning](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ehallerrorsotcp.png)

3. Click on **View All** to filter only the deprecated test cases.

   ![View All](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ehtcrpva.png)

4. Alternatively, select the highlighted filter to display test cases that contain errors.

   ![Filter](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ehfilter.png)

---

## **Steps to Resolve Errors in Test Case**

1. Select the deprecated test case to view the errors.
   
   ![Erorrs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/eheitcpage.png)

2. Hover over to the highlighted step to check the error.
   
   ![Highligted](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/eheielemonts.png)

3. Hover over the element and click on **View/Edit element**.
   
   ![View/Edit Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ehvoeelm.png)

4. This will open the **Element details** overlay where you can find the details of deprecated elements. 
   
   ![Element Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ehelemerroverl.png)

5. To resolve the error, replace them with new elements or disable/remove the test step as needed.


[[info | **NOTE**:]]
| This feature is also available at the **Step Group** level. 


Here's a quick GIF demonstrating how to check errors due to metadata refresh in Testsigma. 

![View Errors](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Errorhandling.gif)

---

## **Handling Deprecated Elements**

When you select **Metadata Refresh**, Testsigma downloads the metadata from your organization and identifies any fields that are no longer available due to customization.

To resolve this, you need to:

- **Disable** the step associated with the deprecated element.
  
  ![Disable Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Disable_Deprecated_Element.png)

- Create a new element in the same context and replace the deprecated one by using the **Change Element** option.

   ![Change Elemennt](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Change_Deprecated_Element.png)

This ensures that tests continue to execute without issues.

<br>

Here's a quick GIF demonstrating how to resolve this error.  

![Resolving deprecated element error](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/DeprecartedFlowSF.gif)


*For more information on creating elements for Salesforce apps, see [Creating Elements While Creating Test Steps](https://testsigma.com/docs/salesforce-testing/element-repos/#creating-elements-while-creating-test-steps).*

---