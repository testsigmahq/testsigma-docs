---
title: "Manage Custom Dashboard"
page_title: "Create and Manage Custom Dashboards in Testsigma"
metadesc: "Learn how to create, edit, filter, and share custom dashboards in Testsigma. Select widgets from a library, apply filters, and share dashboards with stakeholders."
noindex: false
order: 14.41
page_id: "manage-custom-dashboard"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Create a Dashboard"
  url: "#steps-to-create-a-dashboard"
- type: link
  name: "Apply Filters"
  url: "#apply-filters"
- type: link
  name: "Steps to Edit a Dashboard"
  url: "#steps-to-edit-a-dashboard"
- type: link
  name: "Share Dashboard"
  url: "#share-dashboard"
---

---

This guide walks you through the complete process of creating and managing custom dashboards in Testsigma. You will learn how to create a new dashboard, select and arrange widgets, apply filters, and edit your dashboard as needs evolve.

Dashboards are designed to be created quickly. A basic dashboard with 5–7 widgets can be set up in minutes. You can add more widgets, adjust filters, or create additional dashboards at any time.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that:
> 1. You have an active Testsigma account with dashboard access (contact your Testsigma Support to enable it for your account).
> 2. You have referred to the [documentation on creating projects](https://testsigma.com/docs/projects/overview/) to set up at least one project.
> 3. You have referred to the [documentation on configuring applications](https://testsigma.com/docs/projects/applications/) to add at least one application to your project.
> 4. You have completed at least one test run so there is data to display on your dashboard.

---

## **Steps to Create a Dashboard**

1. On the **Dashboard**, click **Advanced** next to **Legacy**.

2. A list of existing dashboards appears in tabs. If this is your first dashboard, the list will be empty.

3. Click **Create Dashboard**. A tab opens prompting you to enter a dashboard name and select widgets.

   Alternatively, click **Create New +** in the top-right corner and select **Dashboard** from the dropdown menu.

4. Enter a descriptive name for your dashboard. The name should convey its purpose and audience.

   **Examples**: "Release Readiness - Q2 2026", "Mobile App Quality Dashboard", "Team Velocity Tracker"

   **Tip**: Use names specific enough to be searchable but concise enough to fit in navigation menus.

5. Select **Widgets** from the library, which is organized into five categories:
   - **Executive Insights & Release Readiness**
   - **Reliability & Stability**
   - **Test Design & Team Productivity**
   - **AI Intelligence & Agentic ROI**
   - **Infrastructure & Performance**

   [[info | **NOTE**:]]
   | You can choose multiple widgets from the same category and mix widgets from different categories. For more details, see the [Widgets Reference](https://testsigma.com/docs/reports/custom-dashboard/widgets-reference/).

   You can also click the eye icon next to any widget to preview it before adding it to your dashboard.

6. Click **Create Dashboard**.

Your dashboard is now live. Widgets display data and update in real time as test executions complete.

---

## **Apply Filters**

1. Open the **Dashboard**.

2. The filter controls appear at the top of the dashboard.

3. Click any filter control to open its menu.

4. Select your desired value. The following filter dimensions are available:

   - **Project**: Use the Project selector to scope data to a specific project, application, and version, or select **All Projects** to view aggregated data.
   - **Date range**: Use the Date range filter to define the time period for analysis. Available options include recent hours (3–24 hours), current periods (Today, This Week, This Month, This Quarter), and longer ranges (Last 3–60 days), or Custom Date.
   - **Interval**: Use the Interval filter to control how data is grouped. Options include Hourly, Daily, Weekly, Monthly, Quarterly, and Yearly.

5. All widgets update to reflect your filter selection.

---

## **Steps to Edit a Dashboard**

After creating a dashboard, you can add widgets, remove widgets, or change the arrangement.

1. On the **Dashboard**, switch to the **Advanced** dashboard and click the dashboard you want to modify.

2. In the top-right corner, click the **Edit** button.

3. Click **Add Widgets** to open the widget library. Select additional widgets from any category. Your current selections are highlighted.

4. Hover over any existing widget to perform two actions:
   - **Delete**: Click the Delete icon to remove the widget from the dashboard.
   - **Rearrange**: Click, hold, and drag the Drag icon to reposition the widget.

   [[info | **NOTE**:]]
   | Removing a widget deletes it from your dashboard permanently. You can add it back later if needed.

5. Click **Save Changes** to apply your changes.

Your dashboard updates immediately with the new widgets and layout.

---

## **Share Dashboard**

1. On the **Advanced** dashboard you want to share, go to **More Options > Share**.

2. In the **Share Dashboard** dialog, click **Create shareable link**.

3. Click **Copy link** to share it with stakeholders.

Anyone with the link can view the dashboard in read-only mode.

---
