---
title: "Update Test Case Results Using API"
page_title: "Update Test Case results using API"
metadesc: "This article discusses in detail on how to update Test Case results as Passed, Failed, and Not Executed using API using REST API in Testsigma."
noindex: false
order: 21.85
page_id: "Update Test Case results using API"
warning: false
---

---

In Testsigma, you can update the Test Case Results using API. This article discusses how to update Test Case results as Passed, Failed, and Not Executed using REST API.


This endpoint allows users to update the Test Case result using REST API.


|**Request Type**|**PUT**|
|---|---|
|**Endpoint**|https://app.testsigma.com/api/v1/execution_results/&lt;run_id&gt;/override<br> The &lt;run_id&gt; can be obtained from the Run Results.|
|**Authorization**|Bearer **<API\_Token>**<br>Same as the Testsigma API key mentioned above.|
|**Request Body Type (JSON)**|Raw|
|**Request Body**|[<br>{<br>"testCaseResultId": 3646,<br>"comment": "Modifying the results 1",<br>"result": "SUCCESS"<br>}<br>]<br>|
|**Response Body(JSON)**|{<br>"errors": [],<br>"message": "Overridden the results successfully"<br>}|


### **Request fields**
**testCaseResultId:** ID of Test Case result.<br>
**comment:** Comment you want to add to change the result.<br> 
**result:** The result you want to override the current result.<br> 


### **Response fields**
**errors:** Errors in request fields if there are any.<br> 
**message:** Message of overridden results.<br> 



[[info | **NOTE**:]]
|1. In case of an invalid request, you will get the response body below and return the status code as 400.<br>
|<pre><code>{<br>"timeStamp": null,<br>"error": "Failed to override the result, <br> cause :Given test case result id 2288 is not related to execution run 239 <br> Given test case result id 2286 is not related to execution run 239 <br> Given test case result id 2287 is not related to execution run 239",<br>"code": null,<br>"fieldErrors": null,<br>"objectErrors": null<br>}</code></pre>
|2. In case of multiple requests which have both valid and invalid queries, you will get the response body as below as return status as 200.<br>
|<pre><code>{<br>"errors": [<br>"Given test case result id 2286 is not related to execution run 239",<br>"Given test case result id 2287 is not related to execution run 239"<br>],<br>"message": "Overridden the result partially"<br>}</code></pre>



---