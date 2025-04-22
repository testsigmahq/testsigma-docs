---
title: "Schedule Test Plans"
page_title: "Schedule Test Plan: Automate Your Testing | Testsigma"
metadesc: "Learn how to automate your testing process and save time by scheduling Test Plan in Testsigma. You can schedule, edit, and view scheduled Test Plans."
noindex: false
order: 8.24
page_id: "schedule-test-plan-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Schedule a Test Plan"
  url: "#schedule-a-test-plan"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Schedule a Partial Test Plan"
  url: "#schedule-a-partial-test-plan"
- type: link
  name: "View Test Plan Schedules"
  url: "#view-test-plan-schedules"  
- type: link
  name: "Manage Test Plan Schedule"
  url: "#manage-test-plan-schedule"
---

---

In Testsigma, you can schedule your test plans to automate their execution and monitor your application's performance over time. You can schedule them for specific times and dates or run them immediately. You can even set them to run at regular intervals. Scheduling your tests for regression outside of office hours is a valuable way to minimise production disruptions and ensure optimal resource usage. This guide will show you how to schedule a test plan in Testsigma.

---

> ## **Prerequisites**
>
> Before you schedule a test plan in Testsigma, you must understand the concepts of creating the [Test Plan](https://testsigma.com/docs/test-management/test-plans/overview/).

---

## **Schedule a Test Plan**

1. Click the **Test Plan** tab in the left sidebar of the dashboard to access the **Test Plan List** page.
2. Hover your mouse over the **Schedule** button next to the Test Plan you want to schedule on the **Test Plan List** page and select the **Schedule Run** option from the dropdown list. ![Schedule test plan in Test plan list page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/scheduletp_tpl.gif)
3. Alternatively, hover your mouse over the **Schedule** button in the top right corner of the Test Plan Details page and select the **Schedule Run** option from the dropdown list. ![Schedule Test Plan Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/scheduletp_tpd.gif)
4. Click **Schedule Run**, and the **Schedule Test Plan** overlay will appear. You must provide a **Name** and enable the **Description** toggle to provide description for the scheduled test plan.
5. Click the **Calendar** icon to choose the **Date** for the scheduled execution of this test plan. You can change the default value, which is set to the current date.
6. Click on the **Clock** icon to choose the **Time**. By default, it displays the current time, but you can change it to the desired time for executing the test plan.
7. Click **Repeat** to select the **Frequency** for executing the test plan. The available options are:
   - **Don't Repeat**
   - **Hourly**
   - **Daily**
   - **Weekly on** <weekday>: The weekday will be chosen based on the scheduled day.
   - **Monthly on** <nth> day: The day of the month will be selected according to the scheduled day.
8. Click on the **Schedule** button after filling up the test plan schedule details. It will create the schedule according to your selections. ![Schedule a Test Plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/scheduletp.gif)

---

## **Schedule a Partial Test Plan**

1. Click the **Test Plan** tab in the left sidebar of the dashboard to access the **Test Plan List** page.
2. Hover your mouse over the **Schedule** button next to the Test Plan you want to schedule on the **Test Plan List** page and select the **Schedule Partial Run** option from the dropdown list. ![Schedule partial test plan in Test plan list page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/scheduleptp_tpl.gif)
3. Alternatively, hover your mouse over the **Schedule** button in the top right corner of the Test Plan Details page and select the **Schedule Partial Run** option from the dropdown list. ![Schedule Partial Test Plan Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/schedulestp_tpd.gif)
4. Click **Schedule Run**, and the **Schedule Test Plan** overlay will appear. You must provide a **Name** and enable the **Description** toggle to provide description for the scheduled test plan.
5. Click the **Calendar** icon to choose the **Date** for the scheduled execution of this test plan. You can change the default value, which is set to the current date.
6. Click on the **Clock** icon to choose the **Time**. By default, it displays the current time, but you can change it to the desired time for executing the test plan.
7. Click **Repeat** to select the **Frequency** for executing the test plan. The available options are:
   - **Don't Repeat**
   - **Hourly**
   - **Daily**
   - **Weekly on** <weekday>: The weekday will be chosen based on the scheduled day.
   - **Monthly on** <nth> day: The day of the month will be selected according to the scheduled day.
8. Select either **Include** or **Exclude** for the test plan to choose which test suites to include or exclude for the partial test run. Choose the specific test suites to be included or excluded based on your selection.
9. Enable the **Filter Test Cases from included test suites** toggle option. Then, select the test case filters from the dropdown list based on:
   - **Labels**: Filter test cases by their assigned labels.
   - **Type**: Categorise test cases by their types.
   - **Requirement Type**: Classify test cases based on their requirement types.
   - **Priority**: Filter test cases according to their priorities.
   - **Created by**: Filter test cases by their creators.
   - **Assignee**: Categorise test cases based on their assignees.
   - **Reviewer**: Filter test cases by their reviewers.
   - **Reset**: Reset any applied filters and return to the default view.
10. Click on the **View filtered test cases** button in the bottom corner of the screen to view filtered test cases.
11. Click the **Save as Favourite** button in the bottom corner of the screen to save the configuration as a favourite for later use.
12. Click on the **Schedule** button after filling up the test plan schedule details. It will create the schedule according to your selections. ![Schedule a Partial Test Plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/schedulestp.gif)

---

## **View Test Plan Schedules**

1. Navigate to **Test Plans** on the left-side side navbar. Click the **Schedules** tab on the Test Plan list page.
2. You can view the **Schedule Name**, **Test Plan**, **Frequency**, and **Next Run At** of the scheduled test plans on the Schedules list page. Click the **ellipsis** icon to open a dropdown menu and select **Edit** or **Delete** the scheduled test plan. ![Schedule List Test plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/schedulestp_list.png)

---

## **Manage Test Plan Schedule**

1. Select the **Schedule** tab on the **Test Plans Details** page to manage your scheduled test plans.
2. Click the **ellipsis** icon to open a dropdown list and select **Edit**. The **Edit Schedule** layout will appear, enabling you to make the necessary changes. Finally, save your modifications by clicking the **Schedule** button.
3. Click the **ellipsis** icon to open a dropdown list and choose **Delete**. A **Delete Confirmation** pop-up will appear. Type **DELETE** to confirm the deletion and click **I understand, delete this Schedule**. ![manage schedule test plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/manage_scheduletp.gif)

---
