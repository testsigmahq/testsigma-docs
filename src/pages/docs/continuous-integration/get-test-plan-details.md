---
title: "Get Test Plan ID "
meta_desc: "How to get the Test Plan ID from a Test Plan in Testsigma"
order: 12.11
page_id: "Get Test Plan ID "
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Pre-requisites"
  url: "#pre-requisites"
- type: link
  name: "How to get the Test Plan ID from a Test Plan in Testsigma:"
  url: "#How to get the Test Plan ID from a Test Plan in Testsigma:"
---

---

This document will discuss how to get the Test Plan ID from a pre-existing Test Plan in Testsigma. Test Plan ID is needed when you want to integrate Testsigma with an external CI/CD tool for continuous testing. 

---
##**Pre-requisites:**
You should already know how to [Create a test plan](https://testsigma.com/docs/test-management/test-plans/overview/)

---
##**How to get the Test Plan ID from a Test Plan in Testsigma:**
1. Login to your Testsigma Account.

2. Navigate to Test Development > Test Plans.

3. Click on the Test Plan name you want to get the ID for.

4. On the Test Plan details page that opens, click on the CI-CD integration tab. 

5. You will find the execution ID for the Test Plan within the ‘REST API call to start’ section:
![REST API call to start Test Plans](https://docs.testsigma.com/images/get-test-plan-details/rest-api-call-to-start-test-plan.png)

You can use this Test Plan ID wherever you need to call the execution of the Test Plan via Rest API.
