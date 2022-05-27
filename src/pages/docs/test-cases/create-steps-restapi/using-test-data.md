---
title: "Supported Test Data types in REST API testing"
metadesc: "Test data types supported for REST API testing in Testsigma"
noindex: false
order: 4.65
page_id: "Supported Test Data types in REST API testing"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Using Parameter Test Data (TestData profile) in REST API Test Steps"
  url: "#using-parameter-test-data-testdata-profile-in-rest-api-test-steps"
- type: link
  name: "Using Runtime Parameter Test Data in REST API Test Steps"
  url: "#using-runtime-parameter-test-data-in-rest-api-test-steps"
- type: link
  name: "Using Environment Test Data in REST API Test Steps"
  url: "#using-environment-test-data-in-rest-api-test-steps"
- type: link
  name: "How to use Test Data Generators in REST API Test Steps"
  url: "#how-to-use-test-data-generators-in-rest-api-test-steps"
- type: link
  name: "Test Data Function Usage sample in REST Payload"
  url: "#test-data-function-usage-sample-in-rest-payload"
---

---
In this article, we will demonstrate the usage of different test data types in REST API steps automation.

---
##**Using Parameter Test Data (TestData profile) in REST API Test Steps:**
 
**1.** Create/Import a Test Data Profile.
   
**2.** While creating the Test Case, select the Test Data Profile 
   
   * Enable Data driven toggle if you are building data-driven test cases.
 
   * Select Test Data Set name if you are just running on Test data set
 
**3.** Append the Test Data Parameter in the URL/Authorization/Header/Payload.
 
Here is Test Data Profile that we are going to use:
 
![test data profile for using parameterized test data in REST API Steps](https://docs.testsigma.com/images/using-test-data/test-data-profile-parameterized-test-data-in-REST-API-Steps.png)

 
Assuming the Test Data Profile is created and selected in the Test Case, we can proceed with using the Test Data Parameter in our REST Step.
 
To do this, append the Test Data Parameter with the URL as it is used in normal Test Steps. The Test Data parameter will be translated into its value when the REST Step is run.
 
For data-driven Test Cases, for Test Data Sets that are present in the Test Data Profile, many iterations will be performed.
 
See [How to use Test Data Profile in Test Steps](https://testsigma.com/tutorials/test-cases/data-driven-testing/).

### Example
 
We will be using the API Endpoint [https://jsonplaceholder.typicode.com/posts/<post id>](https://jsonplaceholder.typicode.com/posts/) as an example. For a GET Request with the < post id > replaced by a number from 1 to 100, the API Response contains a JSON Object for a single post with id < post_id >.
 
For example, [https://jsonplaceholder.typicode.com/posts/1](https://jsonplaceholder.typicode.com/posts/1) returns the first post as shown below.
 
<span style="color:blue">Info: We will be truncating the Response to the API first 3 JSON Objects for brevity.</span>

```
{ "userId": 1, "id": 1, "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"}
```

&emsp;
### Test Step

Append the Test Data Parameter id in the URL for the REST API Test Step as shown below:

### Syntax: @|<TestData_Parameter_Name>|

![example to use parameterized test data in the URL for rest api test step](https://docs.testsigma.com/images/using-test-data/example-to-use-parameterized-test-data-request-details-rest-api-test-step.png)

### Execution Results
Since there are 3 Test Data Sets with id values 1,2, and 3 in the Test Data Profile **Posts Index** as given above, there will be three iterations in the Test Results.

During Test execution **@|id|** will be replaced with the value from the Test data profile.


---
##**Using Runtime Parameter Test Data in REST API Test Steps:**
See: [Storing Test Data from REST API Response in Testsigma](https://testsigma.com/docs/test-cases/create-steps-restapi/store-runtime-data/)
 
Steps for using Run-time Test Data from Response

The saved Run-time Test Data variable value can be used in the URL/Authorization/Headers/Payload of a REST API Test Step. For this, we just need to append the Run-time Parameter wherever required using the below Syntax:
 
### Syntax: $|RUNTIME_VARIABLE_NAME|
 
 
### Example
 
As shown in the previous article, we will be sending a GET request to [https://jsonplaceholder.typicode.com/posts/](https://jsonplaceholder.typicode.com/posts/). It returns a Response with a JSON Array containing 100 JSON Objects. We will be truncating the Response to 10 JSON Objects for brevity and it looks like this:

```
[ { "userId": 1, "id": 1, "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto" }, { "userId": 1, "id": 2, "title": "qui est esse", "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla" }, { "userId": 1, "id": 3, "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut", "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut" }, { "userId": 1, "id": 4, "title": "eum et est occaecati", "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit" }, { "userId": 1, "id": 5, "title": "nesciunt quas odio", "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque" }, { "userId": 1, "id": 6, "title": "dolorem eum magni eos aperiam quia", "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae" }, { "userId": 1, "id": 7, "title": "magnam facilis autem", "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas" }, { "userId": 1, "id": 8, "title": "dolorem dolore est ipsam", "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae" }, { "userId": 1, "id": 9, "title": "nesciunt iure omnis dolorem tempora et accusantium", "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas" }, { "userId": 1, "id": 10, "title": "optio molestias id quia eum", "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error" }]
```

<span style="color:grey">JavaScript</span>
 
In the same article, we have discussed saving the id of the 3rd JSON Object i.e the 3rd post into the variable named **'third_post_id'**. Let us see how we can use that previously saved Run-time Test Data variable **'third_post_id'** in a REST Test Step now.
Note: To know how to store REST API Response into runtime variables, visit [Storing Response data into Runtime variables](https://testsigma.com/docs/test-cases/create-steps-restapi/store-runtime-data/).
 
Unlike the previous URL  [https://jsonplaceholder.typicode.com/posts/](https://jsonplaceholder.typicode.com/posts/) which returns a JSON Array of all the available posts, a GET request to URL [https://jsonplaceholder.typicode.com/posts/](https://jsonplaceholder.typicode.com/posts/)< post_id > returns a JSON Array of post id < post_id >.
 
We can use the previously saved run-time variable third_post_id and the URL [https://jsonplaceholder.typicode.com/posts/](https://jsonplaceholder.typicode.com/posts/)< post_id > to return the third post.
 
Append the runtime variable in the URL for a REST API Test Step as shown below:


![second example to use parameterized test data in the URL for rest api test step](https://docs.testsigma.com/images/using-test-data/second-example-use-parameterized-test-data-request-details-rest-api-test-step.png)

 Also, we can confirm that the URL is parsed correctly in the Request Details as shown below:

![verify test execution to use parameterized test data in the URL for rest api test step](https://docs.testsigma.com/images/using-test-data/verify-test-execution-use-parameterized-test-data-rest-api.png)

&emsp;

---
##**Using Environment Test Data in REST API Test Steps:**
If you need to use different Test Data for different Executions(for example, if you need to use different URLs for Staging, QA, or Production), we can make use of Environment Parameter Test Data.
 
To use Environment Parameters, we simply need to append the Environment Parameter with the URL as it is used in normal Test Steps. The Test Data will be translated into its value when the REST API Step is run.

[[info | NOTE:]]
|Syntax for using Environment parameters in Test Steps<br>
|### Syntax: |ENVIRONMENT_PARAMETER_NAME|
 
### Example
 
Let us assume that we need to use two types of URLs (testing and production) for the same Test Case. Following are the Global Parameter sets created.

![global parameters for production URLs for parameterized test data in REST API test steps](https://docs.testsigma.com/images/using-test-data/global-parameter-production-parameterized-test-data-rest-api.png)

test steps

### Production URLs

![global parameters for testing URLs for parameterized test data in REST API test steps](https://docs.testsigma.com/images/using-test-data/global-parameter-testing-parameterized-test-data-rest-api.png)

steps

### Testing URLs
[[info | Note:]]
|<span style="color:blue">The Testing URLs base_url value 'https://qa.google.com' is just a sample URL and is non-existent. Therefore the Test will fail in this case.</span>

### Test Step

Use the Global Parameter base_url in the URL for the REST API Test Step as shown below:

![use global parameter base url when creating parameterized test data in REST API test steps](https://docs.testsigma.com/images/using-test-data/use-global-parameter-base-url-parameterized-test-data-rest-api.png)

In the above example, the base_url will be picked from the environment selected in Test Plan/Dry run.
 
---
##**How to use Test Data Generators in REST API Test Steps:**
### Introduction
Sometimes, it is required to pass a random or dynamic value for one or more keys in the REST Request( Payload/ Body). Testsigma provides Test Data Generators for this task.
The Test data Generators generate the required value and place it in the request during the execution of the Test Steps.

  
### Syntax of usage in REST Body
**!|ClassName.TestDataGeneratorName(arguments)|**
 
Here's an example:
!|EmailFunctions.randomAlphanumaricEmail(int:7, String:gmail.com)|
 
Here, **EmailFunctions** is the Class name, **randomAlphanumaricEmail** is the data generator name
The first argument is an int with a given value **7** and the second argument is a String with given value **gmail.com**
 
The above Testdata Generator returns a random Alphanumeric Email with 7 random characters and the domain gmail.com - for example, rewvsfd@gmail.com
 
Testsigma provides few Test Data Generators by default. Here's a list of default Test Data generators - [List of default Test Data generators available in Testsigma](https://testsigma.com/docs/test-data/data-generators/default-list/)
 
[[info | Note:]] 
|You can also request the Testsigma Support Team to generate a Custom Test Data Generator for you. The Team will evaluate the feasibility of the request and create a specified Test data Generator for you in a reasonable time.

 
### Example:

First of all, get the Test data Generator Class name, Function name, and arguments specification from the below article:
[List of default Test Data generators available in Testsigma]()
 
Given below is a sample REST API Request Body:
 
```
{ title": "Test Title", "content": "Test Content", "userid": 10 }
```
 
 
Let us assume we want a random email as the value of the 'content' key. We can use Test Data generator to accomplish this as given below:
 
```
{"title": "Test Title", "email: “!|EmailFunctions.randomAlphanumaricEmail(int:7, String:gmail.com)|", "userid": 10}
```

<span style="color:grey">JavaScript</span>
 
---
##**Test Data generator Usage sample in REST Payload:**

![use test data function in rest payload when creating parameterized test data in REST API test steps](https://docs.testsigma.com/images/using-test-data/use-test-data-function-in-rest-payload-parameterized-test-data-rest-api.png)


**Generated payload:**


![generated payload when creating parameterized test data in REST API test steps](https://docs.testsigma.com/images/using-test-data/generated-payload-parameterized-test-data-rest-api.png)


![generated payload when creating parameterized test data in REST API test steps](https://docs.testsigma.com/images/using-test-data/generated-payload-parameterized-test-data-rest-api.png)

 


