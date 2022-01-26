---
title: "Schedule Test Plans"
meta_desc: "How to schedule executions for a test plan in Testsigma."
order: 8.24
page_id: "Schedule Test Plans"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Pre-requisites"
  url: "#pre-requisites"
- type: link
  name: "Schedule a Test Plan"
  url: "#schedule-a-test-plan"
- type: link
  name: "Edit Test Plan Schedule"
  url: "#edit-test-plan-schedule"
---

---
With Testsigma, you can execute your test plans in real-time or schedule them for execution in the future. You can also set the test plans execution to be recurring. You can use this to start regression tests outside office hours so that production time is not lost and hardware resources are freely available.

&emsp;

---
##**Pre-requisites:**
You should already know how to [create/edit/delete Test Plans](https://testsigma.com/docs/test-management/test-plans/overview/).

We will look into the process of scheduling a Test Execution for an already created Test Plan in this article.

&emsp;

---
##**Schedule a Test Plan**
1. Go to ‘Test Case Development > Test Plans’
You will be taken to the Test Plans page and you can see a list of already created test plans there as shown below:

![Test Plans page in Testsigma](https://docs.testsigma.com/images/schedule-plans/test-plans-page-testsigma.png)

2. Click the button named 'Schedule' located beside the Test Plan you want to schedule on the Test Plans page. 


‘Schedule Test Plan’ layout will appear:

![Schedule Test Plan in Testsigma](https://docs.testsigma.com/images/schedule-plans/schedule-test-plan-testsigma.png)

The Schedule Test Plan page has the following fields:

a. **Name:** Name the test plan schedule so it’s easier to find and run. For instance, full regression weekly.

b. **Description(optional):** Use this field to add any description that would accurately describe the test plan schedule for you.

c. **Date:** the date when the scheduled execution starts for this test plan. of the By default, the value is set to the current date, and you can change that.

d. **Time:** By default, it would have the current time mentioned, you can change the time to the time you would like the test plan to execute.

e. **Frequency:** How often does the test plan execute? By default, frequency is set to “Don’t repeat”. This is a drop-down box with the following values:
  
* Don’t Repeat
  
* Hourly
  
* Daily
  
* Weekly on < weekday >: the weekday will be selected according to the day of the schedule.
  
* Monthly on < nth > day: the day of month will be selected according to the day of schedule

3. After filling up the test plan schedule details, click on the “Schedule” button. The schedule will be created according to your selections.

&emsp;

---
##**Edit Test Plan Schedule**
1. Navigate to: “Select Project > Test Development > Test Plans”
   
2. On the Test Plans page, go to the Test Plan that you want to edit.
   
3. On the Test Plan Details page for the corresponding test plan, go to the schedules tab:

![schedules section in Test Plan page in Testsigma](https://docs.testsigma.com/images/schedule-plans/schedules-section-test-plan-page-testsigma.png)


4. On the Schedules tab, you will see the already created schedules for the test plan. Hover on the schedule that you want to edit by clicking on the edit button:

![edit button for test plan schedule in Testsigma](https://docs.testsigma.com/images/schedule-plans/edit-button-test-plan-schedule-testsigma.png)


5. On click on the edit button, the ‘Edit Schedule’ layout will appear as shown below:

![Edi Schedule layout in Testsigma](https://docs.testsigma.com/images/schedule-plans/edit-schedule-layout-testsigma.png)


Here, you can edit the required field and then click on the ‘Schedule’ button to finalize the changes.


