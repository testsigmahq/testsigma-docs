---
title: "Troubleshooting API test case failure"
metadesc: "Understand practical troubleshooting methods to efficiently identify and resolve API test case failures in Testsigma, ensuring a seamless testing process."
noindex: false
order: 23.81
page_id: "Troubleshooting API test case failure"
warning: false
---
---
If your API test cases are failing, there can be many possible reasons. This guide lists some common errors that occur while processing API requests and their causes. *For more information on API testing using Testsigma, refer to [API testing.](https://testsigma.com/docs/api/overview/)*

<table>
  <tr>
    <th>Issue</th>
    <th>Reason</th>
    <th>How to debug</th>
  </tr>
  <tr>
    <td>Connectivity</td>
    <td>If Testsigma fails to send your request, you may be experiencing connectivity issues.</td>
    <td>Check your connection by attempting to open a page in your web browser.
Wait a few seconds and try the operation again. If the problem persists, contact your network administrator for assistance.</td>
  </tr>
  <tr>
    <td>Invalid request URLs</td>
    <td>Common reasons include:<ul>
  <li>The specified URL Path value doesn't start with/in the definition of the REST API.</li>
  <li>The opening and closing curly braces ({and}) don't match the URL of the REST API</li>
  <li>In the URL of the REST API, there are curly braces ('{' and '}') without the parameter name inside.</li>
  <li>You have an invalid URL set in the URL Path property of a method from a REST API.</li>
  <li>Replace the space in the URL with %20 in the Rest API tests.</li>
<li>You used reserved characters like<em> ;</em>,<em>?</em>,<em>#</em>,<em>$</em>,<em>*</em>,<em>@</em>,<em>{</em>,<em>}</em> or <em>=</em> in the URL Path property.</li>
</ul></td>
<td>Review syntax of the URL path.</td>
  </tr>
  <tr>
  <td>Invalid HTTP method error</td>
  <td>You are trying to change the place where the input parameter is sent, from URL to Body, and this is incompatible with the HTTP Method of the REST API Method, which is set to GET.</td>
  <td>Either change the (method name) method or remove the input parameter.</td>
  </tr>
  <tr>
  <td>JSON Path not found</td>
  <td>Generally, a syntax error in the JSON file syntax.</td>
  <td>Review syntax of the JSON path. <em>For more information, refer to <a href="https://testsigma.com/tutorials/rest-api-testing/what-is-jsonpath/#syntax">syntax of a JSON path</a></em>.</td>
  </tr>
  <tr>
  <td>403 Forbidden</td>
  <td>Authentication was successful but the authenticated user does not have access to the resource, for example, they don’t have the required roles or permissions.</td>
  <td>Contact your development team for assistance.</td>
  </tr>
  <tr>
  <td>501 Not implemented</td>
  <td>The server does not support the functionality required to fulfill the request. This is the appropriate response when the server does not recognize the request method and is not capable of supporting it for any resource.</td>
  <td>You can try a different HTTP method to make the request.</td>
  </tr>
</table>
