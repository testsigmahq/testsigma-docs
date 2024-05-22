---
title: "Error Handling Post Metadata Refresh"
page_title: "Error Handling Post Metadata Refresh"
metadesc: "On refreshing metadata, Testsigma identifies potential errors in test cases, step groups and elements linked to updates in the Salesforce organization structure"
noindex: false
order: 27.9
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
---

---

On metadata refresh, Testsigma identifies potential causes of test case failures due to Salesforce organization structure updates, such as removing a field. This article discusses steps to identify errors due to metadata refresh on test cases, step groups, and the element repository.


---

## **Prerequisites**

- A Salesforce connected app. For more information, refer to [creating a connected app](https://testsigma.com/docs/salesforce-testing/connected-app/).

- You should know how to [refresh metadata](https://testsigma.com/docs/salesforce-testing/metadata-connections/#steps-to-refresh-metadata-connection).

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
  
   ![Disable/Review](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ehvoeelement.png)

[[info | **NOTE**:]]
| This feature is also available at the **Step Group** level. 

Here's a quick GIF demonstrating how to check errors due to metadata refresh in Testsigma. 

![View Errors](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Errorhandling.gif)

---