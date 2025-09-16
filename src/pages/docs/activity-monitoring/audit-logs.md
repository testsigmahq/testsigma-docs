---
title: "Audit Logs: Complete Record of Activities"
metadesc: "Track and export all user actions in Testsigma with Audit Logs. Monitor activity, ensure accountability, and support security and compliance reviews in Testsigma."
noindex: false
order: 35.1
page_id: "audit-logs"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "View Audit Logs"
  url: "#view-audit-logs"
- type: link
  name: "Filter Audit Logs"
  url: "#filter-audit-logs"
- type: link
  name: "Export Audit Logs"
  url: "#export-audit-logs"
---

---

Audit logs provide a complete record of all key activities in your Testsigma account. They capture every user action, including changes to test assets and account access events, and store them as immutable entries. Administrators can use audit logs to monitor account usage, investigate security incidents, troubleshoot issues, and ensure accountability across the organization. This article discusses Audit Logs in Testsigma. 

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure you are familiar with **Activity Logs** for all entities in Testsigma.

---

## **Interactive Demo: View & Export Audit Logs**

<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div class="sl-embed" style="position:relative;padding-bottom:calc(53.40% + 25px);width:100%;height:0;transform:scale(1)">
    <iframe loading="lazy" class="sl-demo" src="https://app.storylane.io/demo/fuonqtppyhan?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
  </div>
</div>

---

## **View Audit Logs**

1. From the left navigation bar, go to **Settings > Audit Logs**.

2. The **Audit Logs** page lists all recorded activities.

3. Each log entry includes the following details:
   - **Time**: Date and time when the action occurred.
   - **Event Type**: The entity type in Testsigma (**Test Case, Test Suite, Test Plan, Test Data, Element, Environment, Authentication & Access Bridge**).
   - **Project/App/Version**: The project, application, and version where the change was made.
   - **Action**: The action type (**Create, Update, Delete, Login, or Logout**).
   - **User**: The user who performed the action.
   - **Details**: The fields that were changed, with specific values.

---

## **Filter Audit Logs**

You can narrow down audit log results using the following filters:

1. **Event Type**: Displays logs for a specific entity in Testsigma, such as Test Case, Test Suite, Test Plan, Test Data, Element, Environment, Authentication & Access Bridge. 

2. **Action**: Filters logs by the type of activity performed, such as Create, Update, Delete, Login, or Logout.

3. **Date Range**: Limits results to activities that occurred within a selected time frame. You can choose ranges between **From Date & Time** and **To Date & Time**.

4. **User**: Shows activities performed by a specific user in your organization.

5. **Project**: Displays logs for actions within a selected project.

---

## **Export Audit Logs**

1. On the **Audit Logs** page, apply the required filters.

2. In the top-right corner, click **Export**.

3. In the confirmation dialog, click **Export**. A confirmation message appears indicating that the export has been initiated.

4. Once the file is generated, an entry appears in **Settings > Exports**.

5. Go to **Settings > Exports**.

6. On the **Exports** page, click **Download** next to the generated audit log report.


---