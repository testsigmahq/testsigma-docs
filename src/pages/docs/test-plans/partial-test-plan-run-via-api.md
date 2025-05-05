---
title: "Execute Partial Test Plan Run via API"
page_title: "Execute Partial Test Plan Run via API - Test Automation"
metadesc: "Automate the running of partial test plans in Testsigma via APIs. Configure suites, apply filters, and schedule executions for efficient testing."
noindex: false
order: 8.35
page_id: "partial-test-plan-run-via-api-in-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Configure Partial Test Plan Run"
  url: "#configure-partial-test-plan-run"
- type: link
  name: "Partial Test Plan Run via API"
  url: "#partial-test-plan-run-via-api"
- type: link
  name: "Configure Schedule Partial Test Plan Run"
  url: "#configure-schedule-partial-test-plan-run"
- type: link
  name: "Schedule Partial Test Plan Run via API"
  url: "#schedule-partial-test-plan-run-via-api"

---

---

Performing a partial run in a test plan via an API call in Testsigma enables you to execute specific test suites and apply filters programmatically, providing flexibility and automation in your testing workflow. This documentation will guide you through configuring a partial test plan run, executing it via an API call, and scheduling the partial run for future execution.

Ensure you fulfil the following prerequisites before proceeding with the steps:
- Create a [Test Plan](https://testsigma.com/docs/test-management/test-plans/overview/) 
- Obtain an [API key for Authorization](https://testsigma.com/docs/configuration/api-keys/) 
- [Get Test Plan ID](https://testsigma.com/docs/continuous-integration/get-test-plan-details/)

---

## **Configure Partial Test Plan Run**

Follow these steps to configure a partial test plan run.

1. Open the **Test Plan Details** page for the specific Test Plan to configure Partial Test Plan Run.
2. Select **Partial Run** from the drop-down menu by hovering your mouse over the **Down Arrow** next to **Run Now** in the top-right corner of the screen.
3. Set up the configuration according to your requirements in the **Partial Test Plan Run** layover on the right side of the screen. This includesThis involves selecting the **Test Suites** you want to add or exclude, applying filters based on specific criteria, and making any other necessary adjustments.
4. Click **Save As Favorite** once you finalize the partial run configuration.
5. Click **Save** after naming your favorite. ![Click Save - PTPR](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/save_configpartialrun_ts.gif)

[[info | NOTE:]]
| Remember the name used for the favorite configuration, as the API call will require it.

---

## **Partial Test Plan Run via API**

Follow these steps to run the partial test plan via API call:

|Request Type|POST|
|---|---|
|**Endpoint**|https://app.testsigma.com/api/v1/execution_results|
|**Authorization**|Bearer Token &#8594 **<API_Token>**<br>Same as the Testsigma API key mentioned above.|
|**Request Body Type (JSON)**|Raw|
|**Payload**|{<br>&emsp;&emsp;"executionId": "3857",<br>&emsp;&emsp;"executionConfig": {<br>&emsp;&emsp;&emsp;&emsp;"name": "fav\_config\_name"<br>&emsp;&emsp;}<br>}|

- Find the execution ID of your test plan in the Test Plan details and replace **3857** with it.
- Replace the name of the saved favorite configuration with **fav\_config\_name**.

[[info | NOTE:]]
| Using the correct execution ID and favorite configuration name in the API call payload is essential to ensure accurate execution.

---

## **Configure Schedule Partial Test Plan Run**

Follow these steps to schedule a partial test run for future execution.

1. Open the **Test Plan Details** page for the specific Test Plan to configure Schedule Partial Test Run.
2. Select **Partial Run** from the drop-down menu by hovering your mouse over the **Down Arrow** next to the **Schedule** button in the top-right corner of the screen.
3. Set up the configuration according to your requirements in the **Schedule Partial Test Run** layover on the right side of the screen. This includes **Naming the scheduled partial run, selecting the time, date, repeat frequency, and additional settings** for the partial run, choosing the **test suites** to include or exclude, and applying any necessary filters or adjustments to the configuration.
4. Click **Save As Favorite** once you finalize the schedule partial run configuration.
5. Click **Save** after naming your favorite configuration. ![Click Save - SPTPR](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sch_save_configpartialrun_ts.gif)

[[info | NOTE:]]
| Remember the time, date, and name you used for the favorite configuration because the API call will require it.

---

## **Schedule Partial Test Plan Run via API**

Follow these steps to schedule a partial test run via API call.

|Request Type|POST|
|---|---|
|**Endpoint**|https://app.testsigma.com/api/v1/schedule_executions|
|**Authorization**|Bearer Token &#8594 **<API_Token>**<br>Same as the Testsigma API key mentioned above.|
|**Request Body Type (JSON)**|Raw|
|**Payload**|{<br>&emsp;&emsp;&emsp;&emsp;"name": "RandomTest3",<br>&emsp;&emsp;&emsp;&emsp;"executionId": 3857,<br>&emsp;&emsp;&emsp;&emsp;"scheduleType": "ONCE",<br>&emsp;&emsp;&emsp;&emsp;"status": "ACTIVE",<br>&emsp;&emsp;&emsp;&emsp;"nextInterval": "2023-06-01T17:30:00.000Z",<br>&emsp;&emsp;&emsp;&emsp;"executionConfig": {<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"name": "fav\_config\_name"<br>&emsp;&emsp;&emsp;&emsp;},<br>&emsp;&emsp;&emsp;&emsp;"timezone": "IST"<br>}|

### **Request Body Fields**

- **name**: You can set the name of the scheduled test run.

- **executionId**: Replace **3857** with the execution ID of your test plan found in the Test Plan details.

- **scheduleType**: Defines the type of schedule. In this example, it is set to **ONCE** to indicate a one-time execution.

- **status**: Set the status of the scheduled test run to **ACTIVE**.

- **nextInterval**: Modify the time value in the schedule section to specify the desired time for the partial test run execution. Use the ISO 8601 format, such as **YYYY-MM-DDTHH:MM:SSZ**.

- **executionConfig**: Enter the name of the saved configuration in the executionConfig field. Replace **fav\_config\_name** with the name of the saved favorite configuration.

- **timezone**: Specify the timezone for the scheduled execution.

[[info | NOTE:]]
| Using the correct execution ID, desired time, and favorite configuration name in the API call payload is essential to ensure accurate execution.

---
