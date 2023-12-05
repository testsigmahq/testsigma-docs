---
title: "Get Test Plan ID"
metadesc: "A test plan ID is needed to call the execution of the Testsigma test plan from an external CI/CD tool |  Learn how to get test plan ID in Testsigma"
noindex: false
order: 12.11
page_id: "Get Test Plan ID"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps Get Test Plan ID"
  url: "#steps-get-test-plan-id"
---

---

This article discusses getting the test plan ID from a pre-existing test plan in Testsigma. A test plan ID is needed to integrate Testsigma with an external CI/CD tool for continuous testing.

---

## **Prerequisites**
- You should know how to [create a test plan](https://testsigma.com/docs/test-management/test-plans/overview/)

---

## **Steps Get Test Plan ID**


1. Navigate to **Test Plans** and click on the test plan you want to get the ID for.
![Test Plans](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tpdlsnavtps.png)


2. On the **Test Plan details** page that opens, click on the **CI/CD Integrations** tab. 
![CI/CD Integration](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tpdtls.png)


3. You will find the execution ID for the Test Plan within the **REST API call to start Test Plan** section.
![Get Test Plan ID](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/trineid.png)


You can use this test plan ID wherever you need to call the execution of the test plan via Rest API.


---