---
title: "Schedule Test Plans"
metadesc: "How to schedule executions for a test plan in Testsigma."
noindex: false
order: 8.24
page_id: "Schedule Test Plans"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Prerequisites"
  url: "#pre-requisites"
- type: link
  name: "Schedule a test plan"
  url: "#schedule-a-test-plan"
- type: link
  name: "Edit test plan schedule"
  url: "#edit-test-plan-schedule"
---

---
With Testsigma, you can execute your test plans in real-time or schedule them for execution in the future. You can also set the test plans execution to be recurring. You can use this to start regression tests outside office hours so that production time is not lost and hardware resources are freely available.

&emsp;

---
##**Prerequisites:**
Know how to [create, edit or delete test plans](https://testsigma.com/docs/test-management/test-plans/overview/).

We will look into the process of scheduling a test execution for an existing test plan in this article.

&emsp;
---
##**Schedule a test plan**
1. Navigate to **Test Case Development > Test Plans**.
You will be taken to the test plans page and you can see a list of already created test plans there as shown below:

![Test-Plans-page-in-Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/schedule-plans/Test-Plans-page-in-Testsigma.png)

2. Click the button named **Schedule** located beside the test plan you want to schedule on the **Test plans** page. **Schedule test plan** layout will appear:

![Schedule Test Plan in Testsigma](https://docs.testsigma.com/images/schedule-plans/schedule-test-plan-testsigma.png)

The **Schedule test plan** page has the following fields:

a. **Name:** Name the test plan schedule so it’s easier to find and run. For instance, full regression weekly.<br>

b. **Description(optional):** Use this field to add any description that would accurately describe the test plan schedule for you.<br>

c. **Date:** the date when the scheduled execution starts for this test plan. of the By default, the value is set to the current date, and you can change that.<br>

d. **Time:** By default, it would have the current time mentioned, you can change the time to the time you would like the test plan to execute.<br>

e. **Frequency:** How often does the test plan execute? By default, frequency is set to **Don’t repeat**. This is a drop-down box with the following values:<br>
  
* Don’t Repeat<br>
  
* Hourly<br>
  
* Daily<br>
  
* Weekly on < weekday >: the weekday will be selected according to the day of the schedule.<br>
  
* Monthly on < nth > day: the day of month will be selected according to the day of schedule<br>

3. After filling up the test plan schedule details, click on the **Schedule** button. The schedule will be created according to your selections.

&emsp;

---

##**Schedule partial test run**

Similarly, we can schedule partial test runs with Testsigma. Lets see how we can do that:

1. Go to the test plan that you want to schedule partial run for. You can either go to the test plan list page. The option for scheduling partial run for a test plan on a test plan list page would be available as below:

![Schedule partial test run test plan list page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/schedule-plans/schedule-partial-test-run-test-plan-list-page.png)

2. Or you can go to the test plan details page for the particular test plan that you want to schedule the partial run for. The option is available as shown in the screenshot below: 

![Schedule Partial test run test details page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/schedule-plans/schedule-partial-test-run-test-plan-details-page.png)


3. A **Schedule Partial Test Run** layover appears as shown in the screenshot below:

![Schedule Partial Run Layover](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/schedule-plans/schedule-partial-test-run-layover.png)


The Schedule Test Plan Layover has the following fields:

Fields specific to scheduling:
   1. **Name**: Name the test plan schedule so it’s easier to find and run. For instance, full regression weekly.<br>
   2. **Description(optional)**: Use this field to add any description that would accurately describe the test plan schedule for you.<br>
   3. **Date:** the date when the scheduled execution starts for this test plan. of the By default, the value is set to the current date, and you can change that.<br>
   4. **Time:** By default, it would have the current time mentioned, you can change the time to the time you would like the test plan to execute.<br>
   5. **Frequency:** How often does the test plan execute? By default, frequency is set to **Don’t repeat**. This is a drop-down box with the following values:<br>
   
     * Don’t Repeat<br>
     * Hourly<br>
     * Daily<br>
     * Weekly on < weekday >: the weekday will be selected according to the day of the schedule.<br>
     * Monthly on < nth > day: the day of month will be selected according to the day of schedule<br>
     * After filling up the test plan schedule details, click on the **Schedule** button. The schedule will be created according to your selections.<br>

Fields specific to filtering the test cases:

* **Include or exclude test suites** : You can include or exclude the test cases from the partial test run here. <br>
* **Test case filters**:<br>

1. **Labels**: Filter the test cases according to the labels assigned to them.<br>
2. **Type**: Filter the test cases according to the type of test cases there are. <br>
3. **Requirement**: Filter the test cases according to the requirements assigned to them. <br>
4. **Requirement type**: Filter the test cases according to the requirement types assigned to them.<br>
5. **Priority**: Filter the test cases according to priority.<br>
6. **Created by**: Filter the test cases according to their creators.<br>
7. **Assignee**: Filter the test cases according to their assignees.<br>
8. **Reviewer**: Filter the test cases according to their reviewers.<br>

Once you have applied the filters, you can:
* View filtered test cases by click on the **View filtered test cases** button.<br>
* Save the configuration as a favourite for later use by click on the **Save as favorite** button.<br>
* Start the execution of the filtered test cases by click on the **Run now** button.<br>


&emsp;

---
##**Edit test plan schedule**

1. Navigate to **Select project > Test development > Test plans**.
2. On the Test plans page, go to the Test plan that you want to edit.
3. On the Test Plan Details page for the corresponding test plan, go to the schedules tab:

![schedules section in Test Plan page in Testsigma](https://docs.testsigma.com/images/schedule-plans/schedules-section-test-plan-page-testsigma.png)
4. On the Schedules tab, you will see the already created schedules for the test plan. Hover on the schedule that you want to edit by clicking on the edit button:

![edit button for test plan schedule in Testsigma](https://docs.testsigma.com/images/schedule-plans/edit-button-test-plan-schedule-testsigma.png)

5. On click on the edit button, the **Edit Schedule** layout will appear as shown below:

![Edi Schedule layout in Testsigma](https://docs.testsigma.com/images/schedule-plans/edit-schedule-layout-testsigma.png)


Here, you can edit the required field and then click on the **Schedule** button to finalize the changes.


