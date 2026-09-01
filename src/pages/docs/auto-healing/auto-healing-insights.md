---
title: "Auto-Healing Insights"
page_title: "Auto-Healing Insights"
metadesc: "Review how auto-healing behaved during a run in Testsigma | See which locator failed, what replaced it, and decide whether to keep the change."
noindex: false
order: 4.918
page_id: "auto-healing-insights"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Identify Healed Steps in a Run"
  url: "#identify-healed-steps-in-a-run"
- type: link
  name: "Review the Heal on the Analysis Tab"
  url: "#review-the-heal-on-the-analysis-tab"
- type: link
  name: "View Autoheal Details"
  url: "#view-autoheal-details"
- type: link
  name: "Read the Locator Trace"
  url: "#read-the-locator-trace"
- type: link
  name: "When a Heal Fails"
  url: "#when-a-heal-fails"
- type: link
  name: "Fix the Locator Yourself"
  url: "#fix-the-locator-yourself"
---

---

Review how auto-healing behaved during a run to see which locator failed, what replaced it, and whether to keep the change. Insights open from the healed step on the results page.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that:
> 1. Auto-healing is enabled for the project.
> 2. A run has been completed in which at least one step was healed.

---

## **Identify Healed Steps in a Run**

1. Open the test case results for the run.

2. Select the healed step.
   ![](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Auto_Healing_Insights_New.png)

[[info | **NOTE**:]]
| A healed step reports **Passed**, because the step completed. The run itself carries a **Healed** status in the run list, which distinguishes it from a run that passed without intervention.

---

## **Review the Heal on the Analysis Tab**

The **Analysis** tab shows a **Healed this step** card explaining what happened: "Existing locator failed during execution, and we've auto-healed it using AI. The element locator was updated with a new XPath to ensure your test continues to run smoothly."

Choose one of the following:
![](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Healed_Details_in_Results.png)
- Click **Approve as Primary** to make the healed locator the locator the test uses from now on.
- Click **Ignore** to leave the original locator in place. The heal still applied to this run only.

[[info | **NOTE**:]]
| In the **Visual Evidence** section, the current run panel carries a **Healed** badge, and the **Element** field has an edit icon for correcting the locator directly.

---

## **View Autoheal Details**

Open the **Autoheal Details** panel to see exactly which locator changed.

The panel shows:
![](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Auto_HeaL_Accept_Reject.png)
- The element that was healed, named at the top.
- The prompt "Do you want to update the autohealed element in all the linked test cases?" with **Update** and **Ignore** buttons.
- The healing method and how long it took, such as "Autohealed using CSS Selector" and "32s 912ms".
- The locator that failed, struck through, followed by the locator that replaced it.

Click **Update** to apply the healed locator across every test case linked to the element, or **Ignore** to leave those test cases unchanged.

**Additional Information**: Use the feedback icons under "Is this autoheal helpful?" to tell us whether the heal was correct. The same feedback icons appear on the auto-healed banner above the step list.

---

## **Read the Locator Trace**

Every auto-heal event records a locator trace: the full sequence the engine worked through to arrive at a heal, and whether that heal succeeded or failed.

Use the trace to understand why a particular locator was chosen, or why no replacement could be found.

**Additional Information**: The locator trace is provided by the Auto Heal V2 architecture.

---

## **When a Heal Fails**

A heal attempt that fails gets the same root cause treatment as a failed step. Open the **Root cause** block on the **Analysis** tab and click **Explain this failure** to see why the engine could not resolve the element.

[[info | **NOTE**:]]
| This requires Analyzer V2. Without it, a failed heal reports that it did not succeed, but no explanation is generated.

---

## **Fix the Locator Yourself**

If you would rather not accept the healed locator, you have two alternatives:

- **Update element** corrects the locator directly. In the **Visual Evidence** section, the **Element** field on the current run side carries an edit icon for this.
- **Relearn step** re-captures the step so a fresh locator is recorded.

---
