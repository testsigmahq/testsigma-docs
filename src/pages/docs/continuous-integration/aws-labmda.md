---
title: "Integrate Testsigma with AWS Lambda"
metadesc: "How to integrate Testsigma with AWS Lambda. "
order: 12.16
page_id: "Integrate Testsigma with AWS Lambda"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "How to add an execution step in AWS Lambda:"
  url: "#how-to-add-an-execution-step-in-aws-lambda"
---
AWS Lambda, you can run code for virtually any type of application or backend service. CodeCommit is a trigger for AWS Lambda execution. In this document, we will discuss how you can Integrate AWS Lambda with Testsigma
 
## **How to add an execution step in AWS Lambda:**
1. Go to the functions option under AWS Lambda and click on the button ‘Create Functions’:

![create function button in AWS Lambda](https://docs.testsigma.com/images/aws-labmda/create-function-button-aws-lambda.png)
2.  Fill in the Basic information for creating a function and click on Create function after that:
![enter basic information to create function in AWS Lambda](https://docs.testsigma.com/images/aws-labmda/basic-information-create-function-aws-lambda.png)
3.  Once the function is created, you can scroll down to Basic settings to check the Handler file information along with the basic timeout details.
 
In the screenshot below, you can see that hello.handler is your handler file.
 ![handler information for Testsigma integration in AWS Lambda](https://docs.testsigma.com/images/aws-labmda/handler-info-testsigma-integration-AWS-Lambda.png)
4. You can check the hello.handler file if you scroll up.
 
In the screenshot below, you can see that the hello.handler file contains the "aws-testsigma.sh" file. This aws-testsigma.sh file will contain all the information of the Test Plan.
 
![function code for Testsigma integration in AWS Lambda](https://docs.testsigma.com/images/aws-labmda/testsigma-integration-function-code-aws-lambda.png
 )
5.  The aws-testsigma.sh should contain the below information of the [Test Plan ID](https://testsigma.com/docs/continuous-integration/get-test-plan-details/) and [API Key](http://testsigma.com/docs/configuration/api-keys/) which you need to trigger:
 
```shell
#********START USER_INPUTS ********

TESTSIGMA_USER_NAME=<Username>
TESTSIGMA_PASSWORD=<Password>
TESTSIGMA_TEST_PLAN_RUN_URL=<Test Plan URL containing the unique Test Plan id>
MAX_WAIT_TIME_FOR_SCRIPT_TO_EXIT=180
JSON_OUTPUT_REPORTS_DIR=.

#********END USER_INPUTS***********
```

![aws-testsigma.sh information in AWS Lambda](https://docs.testsigma.com/images/aws-labmda/aws-testsigma-sh-aws-lambda.png
 )
The URL details for the test plan can be taken from the Testsigma app:
![URL details for a test plan in Testsigma](https://docs.testsigma.com/images/aws-labmda/url-details-test-plan-testsigma.png
 )
6. Click on TEST at the top right corner to trigger the Test Plan.
![test Testsigma integration in AWS Lambda](https://docs.testsigma.com/images/aws-labmda/test-testsigma-integration-aws-lambda.png
 )

![execution results of Testsigma integration in AWS Lambda](https://docs.testsigma.com/images/aws-labmda/testsigma-integration-execution-result-aws-lambda.png
 )
That's all we need to automate Test Execution when a successful build is triggered using the AWS Lambda.
 
 
 
Source: [https://aws.amazon.com/lambda/](https://aws.amazon.com/lambda/)

