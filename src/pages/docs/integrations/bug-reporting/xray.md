---
title: "Xray Integration"
page_title: "Xray Integration with Testsigma"
metadesc: "Xray is a Test Management tool that gives the structure to organize, plan, and report the progress of testing. Learn how to integrate Xray with Testsigma"
noindex: false
order: 16.37
page_id: "Xray Integration with Testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Introduction"
  url: "#introduction"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Table of Contents"
  url: "#table-of-contents"
- type: link
  name: "Introduction"
  url: "#introduction"
- type: link
  name: "Pre-requisites"
  url: "#pre-requisites"
- type: link
  name: "Steps to integrate Xray with Testsigma"
  url: "#steps-to-integrate-xray-with-testsigma"
- type: link
  name: "Steps to link an Xray test to a Testsigma test case"
  url: "#steps-to-link-an-xray-test-to-a-testsigma-test-case"
- type: link
  name: "Steps to link an Xray test set to a Testsigma test suite"
  url: "#steps-to-link-an-xray-test-set-to-a-testsigma-test-suite"
- type: link
  name: "Steps to link an Xray test plan to a Testsigma test plan"
  url: "#steps-to-link-an-xray-test-plan-to-a-testsigma-test-plan"
- type: link
  name: "Steps to execute Xray linked tests in Testsigma"
  url: "#steps-to-execute-xray-linked-tests-in-testsigma"
---

---
## **Table of Contents**

[Introduction](https://testsigma.com/docs/integrations/bug-reporting/xray/#introduction)<br>
[Pre-requisites](#pre-requisites)<br>
[Steps to integrate Xray with Testsigma](https://testsigma.com/docs/integrations/bug-reporting/xray/#steps-to-integrate-xray-with-testsigma)<br>
[Steps to link an Xray test to a Testsigma test case](https://testsigma.com/docs/integrations/bug-reporting/xray/#steps-to-link-an-xray-test-to-a-testsigma-test-case)<br>
[Steps to link an Xray test set to a Testsigma test suite](https://testsigma.com/docs/integrations/bug-reporting/xray/#steps-to-link-an-xray-test-set-to-a-testsigma-test-suite)<br>
[Steps to link an Xray test plan to a Testsigma test plan](https://testsigma.com/docs/integrations/bug-reporting/xray/#steps-to-link-an-xray-test-plan-to-a-testsigma-test-plan)<br>
[Steps to execute Xray linked tests in Testsigma](https://testsigma.com/docs/integrations/bug-reporting/xray/#steps-to-execute-xray-linked-tests-in-testsigma)<br>

---
 
 
## **Introduction**
 
Xray for Jira is a Test Management tool that provides the structure to organize, plan, and report with accuracy on the progress of testing as well as the readiness to deploy.
 
In this document, we will see how Testsigma integration  with Xray works.

---
 
## **Pre-requisites**
 
For a full functioning JIRA and Xray integration, you will need:
1. A working JIRA integration. To know how to set this up, check the document here: https://testsigma.com/docs/integrations/bug-reporting/jira/
2. A working Xray Integration, for which you will need
  i.  JIRA Account URL: The URL for your your JIRA account.
  ii. Client ID
  iii.Client Secret
To know how to get your Xray Client ID and the Client Secret, check the document here: https://docs.getxray.app/display/XRAYCLOUD/Global+Settings%3A+API+Keys 
 
 
[[info | NOTE:]]
|The link between XRay and Testsigma entities like test cases, test suites and test plans will only be verified if the URLs for JIRA and X-ray are the same. 

---
 
## **Steps to integrate Xray with Testsigma**  
 
1. Navigate to the Plugins page through Dashboard > Settings > Plugins and select Xray under the Bug Reporting Tab.
2. Click on the Disabled Icon on Jira. Jira Details overlay opens up as shown below:
 
![xray details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/integrations/bug-reporting/xray/xray-details.png)

3. Enter the details as mentioned in Prerequisites -”JIRA Account URL”, “Client ID” and “Client Secret”. 
4. If you want to add attachments[logs, screenshots and videos of execution] to the test executions then please check the checkbox “Add attachments to test execution”.
5. Click on the “Create” button to finally enable the integration.
 
The Testsigma and Xray integration works on below principles.
 
1. An x-ray test case can be linked to a Testsigma test case.
2. One x-ray test case can be linked to multiple Testsigma test cases. 
3. An x-ray test set can be linked to a Testsigma test suite.
4. An x-ray test plan can be linked to a Testsigma test plan.
 
Lets go through all the 3 types of links one-by-one below.

---
 
## **Steps to link an Xray test to a Testsigma test case**

1. Get the ID of an already created test from Xray. For example, if my test URL on Xray is: https://testserver.atlassian.net/browse/TEST-75 then the ID would be: TEST-75
2. In Testsigma, go to the test-case details page corresponding to the test case you want to link with. On the top right side of the page, you will see a text box with label “Xray TestID” as also shown in the screenshot below: 
 
![xray test id](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/integrations/bug-reporting/xray/xray-test-id.png)

3. To link this xray test to the Testsigma test case, click on the link button beside the id.
 
---
 
## **Steps to link an Xray test set to a Testsigma test suite**

1. Get the ID of an already created test set from Xray. For example, if my test set URL on Xray is: https://testserver.atlassian.net/browse/TEST-85  then the ID would be: TEST-75
2. In Testsigma, go to the test-suite details page corresponding to the test suite you want to link with. On the top right side of the page, you will see a text box with label “Xray Test Set ID” as also shown in the screenshot below:

![xray test suite id](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/integrations/bug-reporting/xray/xray-testsuite-id.png)

3. To link this xray test set to the Testsigma test suite, click on the link button beside the id.

[[info | NOTE:]]
|For the test execution of all the test cases inside the test suite to be updated in Xray, the test cases should be linked to appropriate test cases on Xray too.
 
---
 
## **Steps to link an Xray test plan to a Testsigma test plan**
 
1. Get the ID of an already created test plan from Xray. For example, if my test plan URL on Xray is: https://testserver.atlassian.net/browse/TEST-95  then the ID would be: TEST-95
2. In Testsigma, go to the test-plan details page corresponding to the test suite you want to link with. On the top right side of the page, you will see a text box with label “Xray Test Plan ID” as also shown in the screenshot below:

![xray test plan id](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/integrations/bug-reporting/xray/xray-testplan-id.png)

3. To link this xray test plan to the Testsigma test plan, click on the link button beside the id, also highlighted in above screenshot.

 
---
 
## **Steps to execute Xray linked tests in Testsigma**
 
1. Go to a linked test plan and execute it. To know how to execute a test plan, check the document here: https://testsigma.com/docs/runs/test-plan-executions/
2. When you initiate a Test Plan execution in Testsigma, the test execution status will be updated for the linked test sets in Xray.

---