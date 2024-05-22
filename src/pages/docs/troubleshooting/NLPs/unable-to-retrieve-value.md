---
title: "Unable to retrieve value stored in text element"
metadesc: "This article helps you troubleshoot if you cannot retrieve a stored value in a text element | Learn how to retrieve a value stored in text element"
noindex: false
order: 23.11
page_id: "Unable to retrieve value"
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
    <img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/troubleshooting/NLPs/unable-to-retrieve-value/inspect_web_element.png" alt="inspect_web_element">
    <li>On the developer console:
        <ol class="a">
        <li>Type or paste the following code into the Console, and then press <strong>Enter</strong>:<br>
        <code>$0.innerText</code><br><br>If the expected string is returned, the web element holds a text. In such cases, the NLP <em>Store text from the element element into a variable test data should be used</em>. 
        </li>
        </ol>
        <img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/troubleshooting/NLPs/unable-to-retrieve-value/innertex_webelement.png" alt="value_webelement">
        <li>If the returned value is <kbd>null</kbd>, type or paste the following code into the console and press <strong>Enter</strong>.<br><code>$0.value</code>
        <br><br>If the expected string is returned, the web element holds a value. In such cases, the NLP <em>Store the value for the attribute attribute of the element element into a variable test data</em> should be used.
        </li>
        <img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/troubleshooting/NLPs/unable-to-retrieve-value/value_webelement.png" alt="value_webelement">
        </ol>
    </li>
    <ol>
</p>

</body>

---