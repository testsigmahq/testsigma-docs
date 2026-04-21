---
title: "Unable to retrieve value stored in text element"
metadesc: "This article helps you troubleshoot if you cannot retrieve a stored value in a text element | Learn how to retrieve a value stored in text element"
noindex: false
order: 23.11
page_id: "unable-to-retrieve-value"
warning: false
---
---
<head>
<style>
ul.circle {
  list-style-type: circle;
}
ul.square {
  list-style-type: square;
}
ol.roman {
  list-style-type: lower-roman;
}
ol.a {
  list-style-type: lower-alpha;
}
code {
  font-family: Consolas,"courier new";
  color: black;
  background-color: #f1f1f1;
  padding: 2px;
  font-size: 105%;
  text-align: justify;
}
</style>
</head>
<body>
<p>
Often the value entered in the fields is confused with <em>text</em>. But it is the value of the <em>value attribute</em> of a text field that is returned in the form of a string.
So, instead of the NLP <em>Store text from the element element into a variable test data</em>, the NLP <em>Store the value for the attribute attribute of the element element into a variable test data</em> should be used.
</p>
<p>To identify if a web element holds a value or a text follow the below steps:
    <ol>
    <li>Right-click on the element and select <strong>Inspect</strong> from the drop-down list</li>
    <img src="https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/ol>
        <img src="https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/li>
        <img src="https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/body>

---