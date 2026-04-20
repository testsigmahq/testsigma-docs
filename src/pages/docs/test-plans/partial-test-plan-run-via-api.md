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
  name: "Prerequisites"
  url: "#prerequisites"
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

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that you have referred to:
> 1. [Documentation on creating test plans](https://testsigma.com/docs/test-plans/overview/). 
> 2. [Documentation on creating API key for authorization](https://testsigma.com/docs/configuration/api-keys/). 
> 3. [Documentation on getting test plan ID](https://testsigma.com/docs/continuous-integration/get-test-plan-details/).

---

## **Configure Partial Test Plan Run**

Follow these steps to configure a partial test plan run.

1.  Open the **Test Plan Details** page for the Test Plan you want to configure a **Partial Test Run** for.
![Test plan](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_partial_tp_1.png)

2. Click the dropdown next to the **Run Now** button and select **Partial Run**. 
![Partial Run](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_partial_tp_2.png)

3. In the **Partial Test Plan Run** overlay, configure your settings as needed. This includes selecting the **Test Suites** to include or exclude, applying filters based on specific criteria, and making any other necessary adjustments.
![configure](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_partial_tp_3.png)

4. Once you finalize the partial run configuration, click **Save As Favorite**.
![Save as favorite](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_partial_tp_4.png)

5. Enter a name for your favorite, then click **Save**. 
![Click Save - PTPR](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_partial_tp_5.png)

[[info | NOTE:]]
| Remember the name used for the favorite configuration, as the API call will require it.

---

## **Partial Test Plan Run via API**

Follow these steps to run the partial test plan via API call:

|Request Type|POST|
|---|---|
|**Endpoint**|<a href="https://app.testsigma.com/api/v1/execution_results" rel="nofollow">https://app.testsigma.com/api/v1/execution_results</a>| 
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

1. Open the **Test Plan Details** page for the Test Plan you want to configure a **Schedule Partial Test Run** for.
![Test plan](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_partial_tp_1.png)

2. Hover over the schedule icon and select **Schedule Partial Run**. 
![Schedule Partial Run](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_partial_tp_6.png)

3. In the **Schedule Partial Test Run** overlay, configure your settings as needed. This includes entering a **name**, selecting the **time**, **date**, and **repeat frequency**, choosing the **Test Suites** to include or exclude, and applying any necessary filters or adjustments.
![Configure](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_partial_tp_7.png)

4. Once you finalize the configuration, click **Save As Favorite**.
![Save as Fav](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_partial_tp_8.png)

5. Enter a name for your favorite configuration, then click **Save**. 
![Click Save - SPTPR](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_partial_tp_9.png)

[[info | NOTE:]]
| Remember the time, date, and name you used for the favorite configuration because the API call will require it.

---

## **Schedule Partial Test Plan Run via API**

Follow these steps to schedule a partial test run via API call.

|Request Type|POST|
|---|---|
|**Endpoint**|<a href="https://app.testsigma.com/api/v1/schedule_executions" rel="nofollow">https://app.testsigma.com/api/v1/schedule_executions</a>| 
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
