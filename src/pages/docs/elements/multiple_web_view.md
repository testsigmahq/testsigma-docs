---
title: "Handling multiple webview for hybrid apps"
metadesc: "How to handling multiple webview for hybrid apps"
noindex: false
order: 6.7
page_id: "Handling multiple webview for hybrid apps"
warning: false
---
---
<p>While inspecting mobile elements using Testsigma’s <em>Mobile inspector</em>, there are instances where the mobile UI is blank or has no selectable element. In such instances refresh the page again. If the refresh action does not show you the intended mobile UI, the app is a hybrid app that may have some<kbd> WebViews</kbd> which are not being rendered.<p>

<p>In a hybrid app, web components are run completely inside a <kbd>WebView</kbd> control of the application hence we need to switch the context between <kbd>NATIVE</kbd> to <kbd>HYBRID</kbd> to access the elements inside the <kbd>WebView</kbd>.  Note that the context is all the relevant information that specifies the current/active state of the application and its interaction with the user. It also specifies how the server interprets commands, and which commands are available to the user. </p>

<p>Currently, Testsigma supports two contexts: <kbd>NATIVE</kbd> and <kbd>HYBRID</kbd>. By default, the mobile app is launched in <kbd>NATIVE</kbd> context.To switch the app from <kbd>NATIVE</kbd> to <kbd>HYBRID</kbd> app view, click <strong>H </strong>from the mobile inspector panel and select <kbd>WebView</kbd> from the drop-down menu.</p>
<img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/elements/multiple_web_view/multiple_webview_final.gif"  alt="multiple webview">
The below NLP is recorded while switching to <kbd>HYBRID</kbd> app context:<br>
<code>Switch to Webview context</code>
<br><br>
While switching back to <kbd>NATIVE</kbd> context the following NLP is recorded <br>
<code>Switch to Native App Context</code>



[[info | Note:]]
| The NLP’s are recorded to store user actions of switching views, please do not delete them if you want the execution to continue on the selected <kbd>WebView</kbd>.

<p>On switching to <kbd>HYBRID</kbd> context the drop-down shows the <kbd>WebViews</kbd> associated with the application.
Here in the below example, there are two types of <kbd> WebView</kbd> contexts  <kbd>WebView_TerraceView</kbd> and <kbd>WebView_application</kbd>.

<img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/elements/multiple_web_view/WebView_Selected.png" alt="webview_selected">
</p>
<p>
On selecting any <kbd>WebView</kbd> the following  NLP is added<br>
<kbd>Switch to context with name</kbd><kbd> <em><Name_of_the_webview</em></kbd> 

<img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/elements/multiple_web_view/Window_handle_before_select.png" alt="window_handle_before_select">

To obtain the list of all the available WebViews as a screenshot use the NLP <br>
<code>Get list of all web views</code>


Testsigma handles multiple <kbd>WebView</kbd>’s in a single app by treating them as separate windows. 
<img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/elements/multiple_web_view/Window_Handle_Selected.png" alt="window_handle_selected">
</p>

<p>
On selecting any window handle the following  NLP  is added<br>
<code>Switch to window with index <em>Index_of_window</em></code>

This is because window handle titles can be the same most of the time. Window handle dropdown options will show the <em>index</em> in brackets. 
For example,'Simply Travel (0)' . Here 0 is the index.

To set the context to a window with title use the NLP<br> 
<code>Switch to window with title test data</code>

To list all window handles, use the NLP <br>
<code>Get list of all window handles</code>



</p>
---