---
title: "Store REST API response in to Runtime variables"
metadesc: "Store REST API Response into runtime valiables"
noindex: false
order: 4.64
page_id: "Store REST API response in to Runtime variables"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "How to store Run-time Test Data from an API Response"
  url: "#how-to-store-run-time-test-data-from-an-api-response"
---

---
In your Test Cases, if you have to use some of the test data that is fetched dynamically from an API Endpoint, you might need to save the API Response Data temporarily and use it in subsequent Test Steps/Test Cases. Testsigma allows you to store data or perform actions via REST API calls along with normal Test Steps in all the Application Types in addition to REST Services so as to provide maximum flexibility and control in your tests. 
 
Let us see how we can store information that is needed in later steps to Run-time Test Data from a REST Response.
 
 
---
##**How to store Run-time Test Data from an API Response**
 
See [How to add Test Steps for Web Service/REST API Testing](https://testsigma.com/docs/test-cases/create-steps-restapi/overview/).

Here is a sample REST API Step:

![request details for a sample rest api step](https://docs.testsigma.com/images/store-runtime-data/request-details-sample-rest-api-step.png)

1. After entering the Name, URL, HTTP Method, Verification Type, and Expected Status Code as in a normal REST API Test Step, add the response data storage steps under the “Store Response” tab.
 
2. You can store Response **Header Content** and **Body Content**.
 
3. Enter a name in the **key** field for the Run-time parameter which is to be created. A run-time parameter with the specified name will be created and a value from JSON PATH specified will be assigned to it.
 
4. Enter the JSON Path expression in the **value** field which evaluates the Response Entity that we need to store into the run-time parameter created from Step 3. If the Response contains a flat key-value pair instead of a JSON object, you can use the key name here.
 
Below is an example for storing executionId and pageTimeout test data from REST API response. These two variables can be used in subsequent tests where executionId and pageTimeout is required.

![store response for a sample rest api step](https://docs.testsigma.com/images/store-runtime-data/store-response-sample-rest-api-step.png)

To learn more about JSON Path and its usage, see:

* [REST API Tutorial - JSONPath](https://restfulapi.net/json-jsonpath/)
 
* [JayWay JSONPath Github Repo](https://github.com/json-path/JsonPath)
   
* [Comparison Modes in Web Services Testing](https://testsigma.com/docs/test-cases/create-steps-restapi/comparison-types/)
 
 
 
### Example
 
For this example, let us consider a simple GET request to [https://jsonplaceholder.typicode.com/posts/](https://jsonplaceholder.typicode.com/posts/). It returns a JSON Array containing 100 JSON Object items i.e 100 posts. We have truncated the response to 10 posts for brevity:

<span style="color:grey">JavaScript</span>
 
We need to save the 'id' of the third post i.e third JSON Object in this Response and use it in a later Test Step. We can do that by saving the value in a Run-time variable using the **Store Body Content from Response** option in RESTful API Steps and then using the stored Run-time parameter in a subsequent Test Step.
 
 
 
Let us see how to store the value into a run-time parameter.

![store response to a runtime parameter for a sample rest api step](https://docs.testsigma.com/images/store-runtime-data/store-response-run-time-parameter-sample-rest-api-step.png)

In a normal REST API Step, we need to do the following to store the value of 'id' into a Run-time variable named 'third_post_id':
 
 
1. Enter the Name, URL, HTTP Method, and Expected Status Code as in a normal REST API Test Step.
   
2. In the “Store Response” tab Enter the name 'third_post_id' in the Key field for the run-time variable we are about to create.
   
3. Enter the JSONPath Query in the Value field which evaluates the JSON Element we want to fetch. Since in our case, our Response Body contains a JSON Array, we need to use special query '$[2].id' for fetching the required JSON.
 
 
Once the test is run, the Response given on the top of the page will be received and Testsigma will evaluate the expression given in the value field to get the JSON Object/Element name whose value is to be stored. Once the JSON Object/Element name is evaluated, it will store the value of the JSON Object/Element inside the newly created run-time parameter with the name 'third_post_id'.
 
That's all we need to do for storing run-time parameters from REST API Test Steps. 
 
 
**To use previously store Run-time Test Data in REST API Test Steps, see** [Using Run-time Test Data in REST API Test Steps in Testsigma](https://testsigma.com/docs/test-cases/create-steps-restapi/using-test-data/).
 
