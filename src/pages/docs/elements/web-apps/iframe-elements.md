---
title: "Handling iframe Elements?"
metadesc: "While creating test cases for web apps that involve iframes, it is important to understand them. Learn how to effectively handle iframe elements in Testsigma"
noindex: false
order: 6.29
page_id: "Handle iframe elements"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Best Practices While Using iframe Elements in Test Cases"
  url: "#best-practices-while-using-iframe-elements-in-test-cases"
---


---


While writing test cases for web applications that involve iframes, it is important to understand them clearly. In this article, we will discuss how to handle iframe elements that are captured using the recorder.


---

> ## **Prerequisites**
>
>
> Before you begin, ensure that you've a [Project](https://testsigma.com/docs/projects/overview/) in Testsigma and a web application is available for testing.


---

## **Best Practices While Using iframe Elements in Test Cases** 

1. When you capture iframe elements using Testsigma recorder, there is no need to use the NLP ***switch to the frame*** since the recorder automatically captures the iframe details. The test case will work without using the NLP.
![NLP](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/hife.png)


2. If we use the NLP ***switch to the frame***, we should edit all the iframe elements and uncheck the option ***present inside nested content*** to make the test case work.
![Edit Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/hifeuelem.png)



[[info | **NOTE**:]]
| If you enable the Present inside nested content option while already inside an iframe, it will result in test failure since it starts searching for nested iframes.

---
