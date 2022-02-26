---
title: "Update Environment parameters using REST API"
page_title: "Update Environment parameters using REST API in Testsigma"
metadesc: "How to use the REST API Endpoints available in Testsigma for reading and updating Environment data"
noindex: false
order: 21.2
page_id: "Update Environment parameters using REST API"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Get An Environment"
  url: "#get-an-environment"
- type: link
  name: "Get All Environments"
  url: "#get-all-environments"
- type: link
  name: "Update Environment"
  url: "#update-environment"
- type: link
  name: "Create Environment"
  url: "#create-environment"
---

---

For some CI/CD pipelines, the URL of the Application Under Test (AUT) changes with every deployment. Manually updating it within the Testsigma App for every build can get tedious at scale. Environments API lets you read and update the URL of the Application under Test (AUT) dynamically after every build in your CI Pipeline.

[[info | NOTE:]]
| You need to authenticate these requests with your Testsigma API Key.  See [How to generate API Keys.](https://testsigma.com/docs/configuration/api-keys/)

---
##**Get An Environment**
Request Method: GET 

Endpoint: [https://app.testsigma.com/api/v1/environments/](https://app.testsigma.com/api/v1/environments)<ENVIRONMENT_ID>

<ENVIRONMENT_ID> can be found from the Environment details page URL


---
##**Get All Environments**
Request Method: GET

Endpoint: https://app.testsigma.com/api/v1/environments


---
##**Update Environment**
Request Type: PUT

Endpoint: https://app.testsigma.com/api/v1/environments/<ENVIRONMENT_ID>

<ENVIRONMENT_ID> can be found from the Environment details page URL

Body Content:

{

&emsp;&emsp;&emsp;"name": "Dev Environment",

&emsp;&emsp;&emsp;"description": "Test Description"

&emsp;&emsp;&emsp;"passwords": [],

&emsp;&emsp;&emsp;"parameters": {

&emsp;&emsp;&emsp;"url1": "http://dev.testsigma.com/test1",

&emsp;&emsp;&emsp;"url2":"http://dev.testsigma.com/test2"

&emsp;&emsp;&emsp;}

}

[[info | NOTE:]]
| Only include the contents that need to be updated and remove the others from the Request Body


---
##**Create Environment**
Request Method: POST

Endpoint: https://app.testsigma.com/api/v1/environments

Body Contents:

{

	
&emsp;&emsp;&emsp;"name": "Dev Environment",

&emsp;&emsp;&emsp;"description": "Dev Environment",

&emsp;&emsp;&emsp;"parameters": {

&emsp;&emsp;&emsp;"url1": "http://dev.testsigma.com/test1",

&emsp;&emsp;&emsp;"url2": "http://dev.testsigma.com/test2"

&emsp;&emsp;&emsp;},

&emsp;&emsp;&emsp;"passwords" : [

&emsp;&emsp;&emsp;"url2"

&emsp;&emsp;&emsp;]

}

**Parameters:** Parameters contain a JSON representation of the data to be created.

**Passwords:** Passwords is a String array containing the names of parameters that need to be encrypted.

