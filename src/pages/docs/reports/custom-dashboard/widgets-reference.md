---
title: "Widgets Reference"
page_title: "Custom Dashboard Widgets Reference | Testsigma"
metadesc: "Detailed reference for all widgets available in Testsigma Custom Dashboards. Covers purpose, data displayed, interpretation, and recommended use cases for each widget."
noindex: false
order: 14.42
page_id: "widgets-reference"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Executive Insights & Release Readiness"
  url: "#executive-insights--release-readiness"
- type: link
  name: "Reliability & Stability"
  url: "#reliability--stability"
- type: link
  name: "Test Design & Team Productivity"
  url: "#test-design--team-productivity"
- type: link
  name: "AI Intelligence & Agentic ROI"
  url: "#ai-intelligence--agentic-roi"
- type: link
  name: "Infrastructure & Performance"
  url: "#infrastructure--performance"
- type: link
  name: "Quick Dashboard Templates"
  url: "#quick-dashboard-templates"
---

---

This reference lists all widgets available in **Custom Dashboards** and describes what each widget displays and how to interpret it.

Each widget includes the following fields:
- **Widget**: The name of the widget
- **Description**: What data the widget displays
- **Use case**: When and why to use the widget
- **Interpretation**: How to read and act on the data shown

Use this reference when selecting widgets for a dashboard or when reviewing dashboard data.

Widgets are grouped into categories based on their purpose to make navigation easier. For steps to add widgets to a dashboard, see [Manage Custom Dashboard](https://testsigma.com/docs/reports/custom-dashboard/manage-custom-dashboard/).

---

## **Executive Insights & Release Readiness**

<table>
  <tr>
    <th style="background-color:#ADD8E6">Widget</th>
    <th style="background-color:#ADD8E6">Description</th>
    <th style="background-color:#ADD8E6">Use Case</th>
    <th style="background-color:#ADD8E6">Interpretation</th>
  </tr>
  <tr>
    <td><strong>All Statuses Summary</strong></td>
    <td>Summary of test run counts across all result statuses: <b>Passed</b>, <b>Failed</b>, Error, Stopped, Cancelled</td>
    <td>Get an instant overview of test execution health at a glance</td>
    <td>High Passed count with low Failed count indicates good health. High Error count suggests infrastructure issues.</td>
  </tr>
  <tr>
    <td><strong>Pass Fail Trends</strong></td>
    <td>Historical volume of passed versus failed test runs over time.</td>
    <td>Track quality trends and detect regressions during release cycles</td>
    <td>Rising failed tests indicate quality decline. Upward trend shows improving quality. Flat pattern indicates stability.</td>
  </tr>
  <tr>
    <td><strong>Latest Runs</strong></td>
    <td>Most recent test executions with build numbers, timestamps, and status. Real-time updates as executions complete.</td>
    <td>Monitor ongoing test execution and verify CI/CD pipeline activity</td>
    <td>Frequent recent entries show active automation. Gaps in timestamps may indicate pipeline delays or infrastructure issues.</td>
  </tr>
  <tr>
    <td><strong>Consolidated Project Health</strong></td>
    <td>Aggregate health view showing pass, fail, error, stopped, and cancelled counts across all projects</td>
    <td>Compare test health across your entire product portfolio in one view</td>
    <td>High pass percentage indicates overall portfolio health. Identify which projects have high failure rates for targeted improvement.</td>
  </tr>
  <tr>
    <td><strong>Total Test Plan Runs</strong></td>
    <td>Cumulative count of all test plan executions in the date range. Large number KPI tile.</td>
    <td>Measure testing volume and track execution frequency over time</td>
    <td>Higher numbers show greater test coverage. Compare across periods to see whether testing intensity is increasing.</td>
  </tr>
  <tr>
    <td><strong>Test Plan Execution Analytics</strong></td>
    <td>Per test plan metrics: success rate, average duration, last run, and total executions. Sortable data table.</td>
    <td>Identify slow test plans and understand which plans run reliably</td>
    <td>Low success rates indicate flakiness. High durations reveal performance bottlenecks. Sort by duration to find slowest plans.</td>
  </tr>
  <tr>
    <td><strong>Pass Fail Percent Trend</strong></td>
    <td>Success rate percentage tracked over rolling time intervals. Formula: (successful runs ÷ total runs) × 100</td>
    <td>Monitor whether test suite health is improving, stable, or declining</td>
    <td>Upward line shows quality improvement. Downward line indicates regression. Flat line shows consistent maturity level.</td>
  </tr>
  <tr>
    <td><strong>Project Level Stats</strong></td>
    <td>Pass/fail counts and success rate aggregated by project</td>
    <td>Quickly compare test health across different projects</td>
    <td>Each project card shows overall health. Compare across cards to identify problem areas needing attention.</td>
  </tr>
</table>

---

## **Reliability & Stability**

<table>
  <tr>
    <th style="background-color:#ADD8E6">Widget</th>
    <th style="background-color:#ADD8E6">Description</th>
    <th style="background-color:#ADD8E6">Use Case</th>
    <th style="background-color:#ADD8E6">Interpretation</th>
  </tr>
  <tr>
    <td><strong>Test Health Snapshot</strong></td>
    <td>Test suite classification: Consistent, Flaky, or Unexecuted (based on recent run history). Donut chart with percentages.</td>
    <td>Quickly assess overall test suite stability at a glance</td>
    <td>High Consistent percentage (ideal &gt; 80%) shows a healthy suite. Large Flaky percentage signals stability work needed. High Unexecution may indicate coverage gaps.</td>
  </tr>
  <tr>
    <td><strong>Flaky Test List</strong></td>
    <td>Tests that flip-flop between pass and fail without code changes, ranked by Flake Score (higher score = more flaky)</td>
    <td>Target high-impact flaky tests for stabilization and root cause analysis</td>
    <td>Tests at top are most problematic. High flake scores indicate timing or resource-dependent issues. Start stabilization efforts with highest-scoring tests.</td>
  </tr>
  <tr>
    <td><strong>Top Failing Tests By User</strong></td>
    <td>Most frequently failing tests, segmented by the user who triggered the run</td>
    <td>Identify which tests fail most and understand patterns by execution source</td>
    <td>Failures consistent across users indicate real product defects. Failures only under specific users may indicate environment or data issues.</td>
  </tr>
  <tr>
    <td><strong>Top Failing Tests By Day</strong></td>
    <td>Most frequently failing tests, segmented by day of occurrence</td>
    <td>Identify day-specific failure patterns</td>
    <td>Failures concentrated on certain days may indicate scheduled maintenance, batch jobs, or data refresh cycles affecting tests.</td>
  </tr>
  <tr>
    <td><strong>Error Statistics</strong></td>
    <td>Count of test executions by error type: Idle Timeout, Network Error, Session Timeout, Device Not Available, etc.</td>
    <td>Spot systemic infrastructure or environment issues causing failures</td>
    <td>High Device Not Available suggests saturation. Network Errors indicate connectivity problems. Coordinate with infrastructure teams to resolve.</td>
  </tr>
  <tr>
    <td><strong>Top Error Types</strong></td>
    <td>Proportional breakdown of error type distribution</td>
    <td>Understand the dominant failure mode and allocate investigation resources</td>
    <td>The largest slice shows the most frequent error. If one type dominates, focus remediation there. Multiple similar sizes suggest distributed issues.</td>
  </tr>
  <tr>
    <td><strong>Time To Fix Test KPI</strong></td>
    <td>Average duration from first failure of a test to its successful resolution (in seconds)</td>
    <td>Measure your team's efficiency in diagnosing and fixing test failures</td>
    <td>Lower times indicate fast response. High times suggest slow root cause identification. Track trend to measure team improvement.</td>
  </tr>
  <tr>
    <td><strong>Stability Ratios</strong></td>
    <td>Success rate (%) grouped by number of attempts (1, 2, 3, 4+ attempts). Formula: (successful runs ÷ total runs) × 100</td>
    <td>Understand how often tests pass on first try versus requiring retries</td>
    <td>High 1st attempt success is ideal. If success improves on 2nd+ attempts, tests are flaky. Consistent success shows robust tests.</td>
  </tr>
</table>

---

## **Test Design & Team Productivity**

<table>
  <tr>
    <th style="background-color:#ADD8E6">Widget</th>
    <th style="background-color:#ADD8E6">Description</th>
    <th style="background-color:#ADD8E6">Use Case</th>
    <th style="background-color:#ADD8E6">Interpretation</th>
  </tr>
  <tr>
    <td><strong>Tests Authored Over Time</strong></td>
    <td>Number of new test cases created in each time interval. Column chart.</td>
    <td>Monitor test creation pace and ensure healthy coverage growth</td>
    <td>Rising columns show increasing test creation. Flat or declining columns may indicate saturation or resource constraints.</td>
  </tr>
  <tr>
    <td><strong>New Tests Per User</strong></td>
    <td>New test cases created per team member, with step count. Leaderboard or bar chart.</td>
    <td>Recognize high contributors and identify team participation gaps</td>
    <td>High contributors drive coverage. Use to celebrate performance. Low contributors may need support or training.</td>
  </tr>
  <tr>
    <td><strong>Fixed Failed Tests Per User</strong></td>
    <td>Number of previously failing tests successfully fixed by each user</td>
    <td>Credit test maintenance work and identify quality improvement drivers</td>
    <td>High fixers are maintaining test health. If fixes are low team-wide, flaky tests may be accumulating.</td>
  </tr>
  <tr>
    <td><strong>Fixed Failed Tests KPI</strong></td>
    <td>Total count of previously failing test cases that have been fixed</td>
    <td>Measure overall test stabilization progress</td>
    <td>Rising numbers indicate successful stabilization efforts. Compare periods to track team maintenance effectiveness.</td>
  </tr>
  <tr>
    <td><strong>Tests Authored Vs Executed</strong></td>
    <td>Dual-axis comparison: tests created versus tests actually run. Dual-axis bar and line chart.</td>
    <td>Detect inactive test cases and gaps between authoring and execution</td>
    <td>If authored &gt;&gt; executed, inactive tests exist. Narrow gap shows healthy execution. Large gap signals stale tests.</td>
  </tr>
  <tr>
    <td><strong>Stale Assets By Category</strong></td>
    <td>Test cases and test plans grouped by inactivity duration</td>
    <td>Identify orphaned tests and decide whether to maintain or archive</td>
    <td>Large stale percentages indicate unused tests. Review why they stopped executing. Delete unused tests to reduce maintenance burden.</td>
  </tr>
  <tr>
    <td><strong>Distribution By Priority / Status / Type</strong></td>
    <td>Breakdown of test cases by priority level, current status, or test type</td>
    <td>Understand test portfolio composition and ensure balanced coverage</td>
    <td>Even distribution shows balanced coverage. Skewed distribution may indicate concentration. Adjust composition to match risk profile.</td>
  </tr>
  <tr>
    <td><strong>Authored By App Type</strong></td>
    <td>Number of test cases authored for each application type: Web, Mobile, API, SAP, and others</td>
    <td>Verify balanced coverage across your platform portfolio</td>
    <td>Similar bar heights show balanced effort. Large imbalances indicate heavy investment in some platforms with gaps in others.</td>
  </tr>
  <tr>
    <td><strong>Test Cases Submitted/Assigned For Review</strong></td>
    <td>Submitted: test cases you created awaiting review. Assigned: test cases assigned to you pending your review.</td>
    <td>Track code review bottlenecks and manage QA approval workflows</td>
    <td>High pending counts indicate review backlog. Low counts show smooth approval flow. Monitor to ensure timely review cycles.</td>
  </tr>
</table>

---

## **AI Intelligence & Agentic ROI**

<table>
  <tr>
    <th style="background-color:#ADD8E6">Widget</th>
    <th style="background-color:#ADD8E6">Description</th>
    <th style="background-color:#ADD8E6">Use Case</th>
    <th style="background-color:#ADD8E6">Interpretation</th>
  </tr>
  <tr>
    <td><strong>AI Vs Manual Composition</strong></td>
    <td>Ratio of test steps created via AI versus manual recording/typing. 100% stacked bar chart.</td>
    <td>Quantify AI adoption and measure shift from manual to AI-assisted authoring</td>
    <td>Growing AI percentage shows adoption momentum. Target: increase AI composition month-over-month to show adoption velocity.</td>
  </tr>
  <tr>
    <td><strong>Auto Healing Trend</strong></td>
    <td>Failed steps vs. auto-healed steps over time</td>
    <td>Demonstrate cost savings from AI-driven locator and image updates</td>
    <td>High healing numbers show significant automation saving. Each healed test = manual effort avoided. Rising trend justifies continued AI investment.</td>
  </tr>
  <tr>
    <td><strong>NLP Usage Ranked List</strong></td>
    <td>Most frequently used natural language prompt templates in test step creation</td>
    <td>Understand which AI capabilities teams leverage most and where training is needed</td>
    <td>Top prompts show popular features. Low-usage prompts identify underutilized capabilities. Target training on low-use features.</td>
  </tr>
</table>

---

## **Infrastructure & Performance**

<table>
  <tr>
    <th style="background-color:#ADD8E6">Widget</th>
    <th style="background-color:#ADD8E6">Description</th>
    <th style="background-color:#ADD8E6">Use Case</th>
    <th style="background-color:#ADD8E6">Interpretation</th>
  </tr>
  <tr>
    <td><strong>Concurrency Utilization Sessions</strong></td>
    <td>Concurrent parallel sessions in use versus the configured limit. Overlapping area chart.</td>
    <td>Identify whether concurrency is underutilized or bottlenecked</td>
    <td>Gap between used and limit shows unused capacity. Using near limit constantly suggests saturation. Plan expansion based on peak usage.</td>
  </tr>
  <tr>
    <td><strong>Execution Duration Trend</strong></td>
    <td>Average, median, and p95 test execution duration over time. Line chart with trend lines.</td>
    <td>Detect slow test runs and performance regressions</td>
    <td>Rising trend indicates slowing execution. Sudden spikes signal performance regression. Investigate prolonged runs to find bottlenecks.</td>
  </tr>
  <tr>
    <td><strong>Environment Coverage</strong></td>
    <td>Test run distribution by browser type, OS version, and mobile device model. Tree map or nested chart.</td>
    <td>Ensure balanced testing across supported platforms and identify coverage gaps</td>
    <td>Balanced boxes show even coverage. Large dominance by one environment may leave others undertested. Match coverage to customer distribution.</td>
  </tr>
  <tr>
    <td><strong>App Coverage By Type</strong></td>
    <td>Number of test runs per application type. Donut or pie chart.</td>
    <td>Verify testing effort is proportional across your app portfolio</td>
    <td>Similar slices show balanced effort. Large imbalance means some apps receive less testing. Adjust allocation to match risk profiles.</td>
  </tr>
</table>

---

## **Quick Dashboard Templates**

Use these recommended widget combinations as starting points when creating a new dashboard.

**Release Readiness Dashboard**
- All Statuses Summary
- Pass Fail Trends
- Latest Runs
- Consolidated Project Health

**Quality Improvement Dashboard**
- Flaky Test List
- Top Failing Tests By User
- Error Statistics
- Time To Fix Test KPI

**Team Productivity Dashboard**
- Tests Authored Over Time
- New Tests Per User
- Fixed Failed Tests Per User
- Stale Assets By Category

**AI Investment Dashboard**
- AI Vs Manual Composition
- Auto Healing Trend
- NLP Usage Ranked List

**Infrastructure Planning Dashboard**
- Concurrency Utilization Sessions
- Execution Duration Trend
- Environment Coverage
- App Coverage By Type

---
