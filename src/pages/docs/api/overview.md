---
title: "Testsigma API - Overview"
metadesc: "An overview of available REST API Endpoints in Testsigma"
order: 21.1
page_id: "Testsigma API - Overview"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Authorization"
  url: "#authorization"
- type: link
  name: "Available REST API Endpoints"
  url: "#available-rest-api-endpoints"
- type: link
  name: "Advanced Use Cases"
  url: "#advanced-use-cases"
---
---
Testsigma has a  set of REST API Endpoints to manage the entities available in Testsigma. The most common usage of these endpoints is within your CI/CD Pipeline.

A fair understanding of REST APIs is expected. If not, please refer to some relevant resources regarding REST API or consult with your Dev team before proceeding further.
---

## **Authorization**
All Testsigma API Endpoints require authentication. The user authenticates the request using Bearer Token which is the user’s API Key.

**“Authentication” : “Bearer <API_key>”**

To know more about generating and obtaining API Keys, see [How to generate API Keys](https://testsigma.com/docs/configuration/api-keys/)
---

## **Available REST API Endpoints**

1. [Environments](https://testsigma.com/docs/api/environments/)
2. [Elements](https://testsigma.com/docs/api/elements/)
3. [Test Plans](https://testsigma.com/docs/api/test-plans/)
4. [Uploads](https://testsigma.com/docs/api/upload-files/)
---

## **Advanced Use Cases**
Here are some advanced use cases for Testsigma APIs

[Trigger Multiple Application Type Test Plans](https://testsigma.com/docs/api/examples/trigger-multiple-test-plans/)

[Trigger Test Plan remotely and wait until Completion](https://testsigma.com/docs/api/examples/trigger-test-plan-wait-completion/)

