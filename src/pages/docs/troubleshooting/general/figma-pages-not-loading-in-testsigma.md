---
title: "Figma Pages Not Loading in Testsigma"
metadesc: "Learn how to troubleshoot & resolve the issue where Figma pages show “No pages” in Testsigma. Includes causes & solutions for stable test case generation."
noindex: false
order: 23.98
page_id: "figma-pages-not-loading-in-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Cause"
  url: "#cause"
- type: link
  name: "Steps to Resolve the Issue"
  url: "#steps-to-resolve-the-issue"
---

---

Testsigma’s Figma integration allows you to generate test cases directly from your design files. In some situations, the Figma pages may fail to load and display “No pages,” even if the same file worked previously. This issue typically occurs when Figma’s API rate limits are exceeded, preventing Testsigma from fetching the required page data. This article discusses why the issue occurs and provides steps to resolve it.

---

## **Cause**


This issue occurs because Figma has recently tightened its API rate limits, which restrict how frequently external tools can request data. When these limits are exceeded, Figma temporarily stops returning page information, so Testsigma cannot load the list of pages and shows **No pages**. This happens more often with accounts with lower access such as **Viewer**, as they hit the reduced limits much faster.

---

## **Steps to Resolve the Issue**

**1. Verify the Figma API Key Permissions** <br>
Ensure the API key used in Testsigma belongs to a Figma account with a **Dev/Full seat**. These roles provide higher API rate limits and help prevent intermittent failures.

**2. Re-generate the API Key (If Needed)** <br>
If the current key was created under a seat with restricted API access, generate a new key from an account with a higher access tier.

**3. Wait for Rate Limits to Reset** <br>
If rate limits were exceeded, Figma may temporarily block further requests. Wait a few minutes and then try loading the pages again.

**4. Review Figma Rate Limits** <br>
For detailed info on rate limits, see [Figma’s Rate Limits](https://developers.figma.com/docs/rest-api/rate-limits/).

---