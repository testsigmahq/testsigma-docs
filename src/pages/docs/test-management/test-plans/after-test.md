---
title: "After Test in Test Cases and Step Groups"
page_title: "After Test in Test cases and Step Groups"
metadesc: "This article discusses how to create After Test block in Test cases and Step Groups."
noindex: false
order: 8.31
page_id: "After Test in Test Cases and Step Groups"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "After test in Test Cases"
  url: "#after-test-in-test-cases"
- type: link
  name: "After test in Step groups"
  url: "#after-test-in-step-groups"
- type: link
  name: "Available NLPs for After Test"
  url: "#available-nlps-for-after-test"
---

<br>

After Test in Testsigma lets you create a block of steps after the Test Case as well as add a Step Group to execute irrespective of the result of the Test Case. Both Test Case and After Test blocks execute independently. This article will discuss how to enable and use After Test in Test Cases and Step Groups. 

*For more information on Test Cases, refer to [Test Cases](https://testsigma.com/docs/test-cases/overview/).*

![Test steps GIF](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/gif.gif)

<br>


## **After test in Test Cases**
1. Navigate to **Test Development > Test Cases**.

2. Click on **Create**.
![Click on create](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/image6.png)

3. On the **Create Test Case** page, enter the Name, and URL of the application which you want to test and click on **Show Advanced Options**.
![Advanced options](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/image10.png)

4. On Advanced options, click on the toggle button to enable the **After Test Case**.
![Advanced Options](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/image5.png)

5.  From **If After Test fails** dropdown menu, 
    - Select Show testcase result if you want to see the test case results.
    ![Dropdown Menu](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/image2.png)
    - Select **Fail the test** if you want to fail the test case.

6. While creating the Test Case, if it is data-driven, you can see the **When to execute After test steps dropdown menu**. 
    - You can select **Run after all iterations** to run After Test after all iterations are executed.
    - Or you can select **Run after each iteration** to execute the After Test for every iteration.
    ![Data Driven Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/image9.png)


[[info | **NOTE**:]]
|You can also enable After Test for existing Test Cases by editing the existing Test Cases. *For information on how to edit a Test Case, refer to [Edit Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#edit-test-case).*

## **After test in Step Groups**
1. Navigate to **Test Develpoment > Test Cases > Step Groups**.
![Navigate to Step Groups](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/image8.png)

2. Click on **Create**.
![Create step group](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/image1.png)

3. On the **Create Step Group** page, enter the **Name** and click on **Show Advanced Options**.
![Step groups avanced options](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/image4.png) 

4. Click on the toggle button to enable the **After Test Case**.
![Toggle](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/image3.png)

5. From **If After test fails** dropdown menu, 
    - Select **Show testcase result** if you want to see the test case results. 
    - Select **Fail the test** if you want to fail the test case. 
    ![Step group after test](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/image12.png)

6. While creating the step groups, if it is data-driven, you can see the **When to execute After test steps** dropdown menu. 
    - You can select **Run after all iterations** to run After step after all iterations are executed.
    - Or you can select **Run after each iteration** to execute After step for every iteration.
    ![Iteration dropdown](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/image9.png)


[[info | **NOTE**:]]
|You can also enable After Test for the existing step group by editing the existing Step Group. *For information on how to edit a Step Group, refer to [Edit Step Groups](https://testsigma.com/docs/test-cases/step-types/step-group/#edit-a-step-group).*


<br>

## **Available NLPs for After Test**
![NLPs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/image11.png)

1. You can use ***Test Case Result is Passed/Failed/Not Executed*** NLP to execute After Test block depending on the result of your Test Case.
2. You can also use ***Test Case Iteration Result is Passed/Failed/Not Executed*** NLP to execute the After Test block depending on the result of iteration.