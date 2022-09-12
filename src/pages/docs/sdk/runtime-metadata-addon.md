---
title: "Run time metadata addon"
order: 18.3
page_id: "Run time metadata addon"
metadesc: "How to access runtime metadata using Testsigma SDK and addons."
noindex: false
warning: false

---
<br><p>One interesting feature of Testsigma is allowing users to create customized NLPs to author tests. These NLPs are created using add-ons.
There are cases where the details of the test case executions need to be fetched as part of these NLPs. Testsigma provides a class for this to aid the users. The class is <kbd>RunMetaData</kbd>.

Instances of the <kbd>RunMetaData</kbd> class provide the basic and relevant information about the test case executions. It returns information about the test data profile ID, dry test case result ID, the email of the user who triggered the test, the time of execution, and so on.
The following article discusses how to access the test execution details or run metadata using the Testsigma add-on.</p>

The following article discusses how to access the test execution details or run metadata using the Testsigma add-on.<br>
<ol>
  <li>Create an add-on. <em>For more information refer to <a href="https://testsigma.com/tutorials/addons/how-create-addons-actions/">create an add-on for automated action</a></em>.
</li>
  <li>To access the run metadata, we need to access the instance of the class RunMetaData. By default, an instance of the class  <kbd>RunMetaData</kbd>, called runMetaData which contains data for every add-on NLP,  is present in the add-on template. Hence the user is not required to create an instance of the class.<br>
  Users can access the <kbd>runMetaData</kbd>  object anywhere in an add-on while creating an NLP.Note that the runMetaData  object is created for both dry test case executions and test plan executions.<br><br>
  The <kbd>RunMetaData</kbd> class provides the following methods that are used to retrieve the run metadata:
</li>
</ol>
</p>
<style>
   table {
  border-collapse: collapse;
  width: 100%;
  }
  }
 </style>
<table>
  <tr>
    <th style="background-color:#ADD8E6">Method</th>
    <th style="background-color:#ADD8E6">Description</th>
  </tr>
  <tr>
    <td><kbd>getTestDataId ()</kbd></td>
    <td>Returns the test data profile ID which is available to the step that is being executed.
Returns a <kbd>long value</kbd>.</td>
  </tr>
  <tr>
    <td><kbd>getRunId ()</kbd></td>
    <td>Returns the dry test case result ID (if the execution is a Dry Execution)<br>
     OR
test plan result ID (if the execution is a test plan execution) in which the step is executing.<br>
Returns a <kbd>long</kbd> value.
</td>
  </tr>
  <tr>
    <td><kbd>getIsAdHocRun()</kbd></td>
    <td>Returns <kbd>true</kbd> if the user is running a dry test case execution, <kbd>false</kbd> if the user is running a test plan execution.</td>
  </tr>
  <tr>
    <td><kbd>getTriggeredType()</kbd></td>
    <td>Displays the event type of the trigger test case execution. It means if the execution was triggered by a manual, scheduled, or API action.<br>
Return an <kbd>ENUM</kbd> value. For example, <kbd>MANUAL</kbd>, <kbd>SCHEDULED</kbd>, or <kbd>API</kbd>.
s</td>
</tr>
<tr>
    <td><kbd>getTriggeredByEmail()</kbd></td>
    <td>Returns the email ID of the user who initiated the execution.<br>Returns <kbd>String</kbd> value</td>
</tr>
<tr>
    <td><kbd>getStartTime()</kbd></td>
    <td>Returns the time at which test case or test plan execution is started.<br>Returns <kbd>String</kbd> value</td>
</tr>
</table>
</body>
<br>
The following is a sample code for retrieving run metadata using the Testsigma add-on.

```java


package com.kasyap.testsigma.addons.web;
import com.testsigma.sdk.ApplicationType;
import.com.testsigma.sdk.Result;
import com.testsigma.sdk.WebAction;
import com.testsigma.sdk.annotation.Action;
import org.openqa.selenium.NoSuchElementException;

@Action(actionText = "Verifying RunMetadata", applicationType = ApplicationType.WEB)
public class CustomNLP extends WebAction {
@Override
    protected Result execute() throws NoSuchElementException {
        logger.info("Triggered By : " + runMetaData.getTriggeredByEmail());
        logger.info("TestDataProfile ID available to step" + runMetaData.getTestDataId());
        logger.info("Execution Result ID: " + runMetaData.getRunId());
        logger.info("Is Dry Execution? : " + runMetaData.getIsAdHocRun());
        logger.info("TriggeredType (Manual/Scheduled/API) ? " + runMetaData.getTriggerType());
        logger.info("Execution Started at (UTC format) : " + runMetaData.getStartTime());
        return Result.SUCCESS;
    }
}
```
<p>In the above code one could see that the run metadata is retrieved by accessing the <kbd>RunMetaData</kbd> instance and using the methods of it.<p>

