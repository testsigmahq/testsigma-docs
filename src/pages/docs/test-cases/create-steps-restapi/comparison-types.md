---
title: "Comparison Modes supported in REST API Testing in Testsigma"
metadesc: "REST API Response comparison modes"
order: 4.63
page_id: "Comparison Modes supported in REST API Testing in Testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Basic Comparison Modes"
  url: "#basic-comparison-modes"
- type: link
  name: "Additional modes"
  url: "#additional-modes"
---

---
In Web Service/REST API Testing, to make sure the response is as expected ,we need to compare the response against the expected data. There are mainly four modes for comparing Responses in Testsigma. We’ll cover them in this document.
 
---
##**Basic Comparison Modes**
**1. Strict**
   * It is the most rigid form of comparison.
  
   * It doesn't allow additional values and also mandates correct order i.e compared values should be exactly same.
 
   * Strict mode fails if there is any change - missing values, additional values or incorrect order.

 
For example, if you're expecting:
{id:1,name:"Carter",favoriteColor:"blue"}
 
Strict mode fails for any variation of {id:1,name:"Carter",favoriteColor:"blue"}

---

**2. Lenient**

   * It is the most relaxed form of comparison.
  
   * It allows additional values and the values don't have to be in same order.
 
For example, if you're expecting:

{id:1,name:"Carter",favoriteColor:"blue"}
 
Lenient mode fails if any value is missing such as {id:1,name:"Carter"}

---

**3. Non-Extensible**
   * It doesn't allow additional values and correct order is not necessary.
 
   * Non Extensible mode fails if additional values are present.
 
For example, if you're expecting:

{id:1,name:"Carter",favoriteColor:"blue"}
 
Non extensible mode fails if an additional value is present such as

{id:1,name:"Carter",favoriteColor:"blue", class:A}

---

**4. Strict Order**
It allows additional values but mandates the same order.
Strict Order mode fails if the order is different.
 
For example, if you're expecting:

{id:1,name:"Carter",favoriteColor:"blue"}
 
Strict Order mode fails if the order is different such as 

{id:1,favoriteColor:"blue",name:"Carter"}

[[info | Note:]] 
|All of the comparison modes fail if any of the values in the Expected Response is not present in the Actual Response

---

---
##**Additional modes**

**5. JSON Schema**
   
JSON Schema is a vocabulary that allows you to annotate and validate JSON documents. Testsigma allows you to validate that the Actual Response has a specific structure as defined by the supplied Schema. The Actual data in the Response doesn't need to be the same.
 
The most basic schema is a blank JSON object, which constrains nothing, allows anything, and describes nothing:

{}

You can apply constraints on an instance by adding validation keywords to the schema. For example, the “type” keyword can be used to restrict an instance to an object, array, string, number, boolean, or null:

`{"type": "string"}`
 
For example,

Let us consider the following JSON Document

`{ "store": { "book": [ { "category": "reference", "author": "Nigel Rees", "title": "Sayings of the Century", "price": 8.95 }, { "category": "fiction", "author": "Evelyn Waugh", "title": "Sword of Honour", "price": 12.99 } ] } }` 
 
The JSON Schema# is given below:

`{"$id": "http://example.com/example.json", "type": "object", "definitions": {}, "$schema": "http://json-schema.org/draft-07/schema#", "properties": { "store": { "$id": "/properties/store", "type": "object", "properties": { "book": { "$id": "/properties/store/properties/book", "type": "array", "items": { "$id": "/properties/store/properties/book/items", "type": "object", "properties": { "category": { "$id": "/properties/store/properties/book/items/properties/category", "type": "string", "title": "The Category Schema ", "default": "", "examples": [ "reference" ] }, "author": { "$id": "/properties/store/properties/book/items/properties/author", "type": "string", "title": "The Author Schema ", "default": "", "examples": [ "Nigel Rees" ] }, "title": { "$id": "/properties/store/properties/book/items/properties/title", "type": "string", "title": "The Title Schema ", "default": "", "examples": [ "Sayings of the Century" ] }, "price": { "$id": "/properties/store/properties/book/items/properties/price", "type": "number", "title": "The Price Schema ", "default": 0.0, "examples": [ 8.949999809265137 ] } } } } } } } }`

 
Please check the official documentation for more details about [JSON Schema at JSON Schema ORG](http://json-schema.org/).

(**#** - as per latest draft-07 on **json-schema.org**)

---

**6. JSON Path**
Testsigma provides an option to validate your JSON Response using JSON Path. You can lear more about JSON Path at [Jayway JsonPath](https://github.com/json-path/JsonPath).
 
![ json path mode for rest api comparison](https://docs.testsigma.com/images/comparision-types/json-path-rest-api-comparison-modes.png)

You can enter the JSON Path expression in the Key field and the intended value of the evaluated node in the Value field.
 
Let us consider the example JSON Document given in the above section:
To get the Price of the Book by author 'Nigel Rees,' we can use the following expression:

<span style="color:grey">$.store.book[*][?(@.author=='Nigel Rees')].price</span>


<span style="color:grey">HTML</span>
 
So, we can use Testsigma to check the value of the evaluated expression i.e Price of the Book by author 'Nigel Rees' is 8.25 as shown below:

![json path mode with expected body content for rest api comparison](https://docs.testsigma.com/images/comparision-types/json-path-with-expected-body-content-rest-api-comparison-modes.png)