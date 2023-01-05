---
title: "Nested Step Groups"
metadesc: "How to create nested step groups from test cases and step groups"
noindex: false
order: 4.28
page_id: "Nested step groups from test cases and step groups"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to create Nested Step Groups in Test Cases"
  url: "#steps-to-create-nested-step-groups-in-test-cases"
- type: link
  name: "Steps to create Nested Step Groups in Step Groups"
  url: "#steps-to-create-nested-step-groups-in-step-groups"
---
<br>

In Testsigma, you can create nested step groups from existing steps and step groups in a Test Case up to 3 levels. This article explains how to create nested step groups from a Test Case.

Here is a quick GIF demonstrating how to create nested groups from Test Case in Testsigma.
![Nested group demo](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/nestedgroupsdemo.gif)

<br>

## **Steps to create Nested Step Groups in Test Cases**
1. Navigate to **Test Development**.
![Test Development](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/td.png)

2. Click on **Test Cases** and select Test case in which you want to create a nested step group.
![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/testcases.png)

3. Check the steps you want to include in a step group, and click on **Create Step Group**.
![Create SG](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/clickoncreatesg.png)

4. On **Create Step Group** prompt, enter **Name** and click on **Create and Replace**.
![Create and Replace](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/craeteandreplace.png)

5. You can see Nested step group as below. 
![Image](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/nestedgroups.png)

## **Steps to create Nested Step Groups in Step Groups**
You can now add a step group inside the step group while creating steps. 

1. Navigate to **Test Development**.
![Test Development](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/td.png)

2. Click on **Create**.
![Create](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/clickoncreate.png)

3. Enter the **Name** and click on **Write Test Manually**.
![Write Test Manually](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/writestepsmanually.png)

4. Check the steps and step groups you want to include in the nested step group and click on **Create Step Group**.
![SG Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/stepgroupssteps.png)

5. On **Create Step Group** prompt, enter **Name** and click on **Create and Replace**.
![Create and Replace](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/stepgroupprompt.png) 

5. You can see the Nested step group created below. 
![Final Image](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/youcansee.png)

[[info | **NOTE**:]]
|You can only create up to 3 levels of nested groups in a Test Case and Step Group. 