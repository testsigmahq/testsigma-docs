---
title: "Default test data generators"
metadesc: "Lists out the built-in Data Generator functions available in Testsigma and describe its usage"
noindex: false
order: 5.32
page_id: "Default Test Data Generators"
warning: false
---

---

To know how to use the default test data generators in your test steps, refer to [test data generator usage in test steps](https://testsigma.com/docs/test-data/types/data-generator/)

If you don't find the data generator that you are looking for, create your own.For more information refer to [create test data generators using addons](https://testsigma.com/tutorials/addons/how-create-addons-test-data-generators/)


Given below is the list of default test data generators available in Testsigma:

<style>
   table {
  border-collapse: collapse;
  width: 100%;
  }
  }
 </style>
<table>
  <tr>
    <th style="background-color:#ADD8E6">Category(Class)</th>
    <th style="background-color:#ADD8E6">Function(Method)</th>
    <th style="background-color:#ADD8E6">Usage</th>
    <th style="background-color:#ADD8E6">Inputs</th>
  </tr>
  <tr>
    <td>DomainFunction</td>
    <td>emailWithDomain</td>
    <td>Generates an email with a domain</td>
    <td>Domain name.<br><em>For example:google.com,testsigma.com</em></td>
  </tr>
  <tr>
    <td>EmailFunctions</td>
    <td>username</td>
    <td>Generate a username</td>
    <td>Length of username</td>
  </tr>
  <tr>
    <td>EmailFunctions</td>
    <td>randomAlphanumaricEmail</td>
    <td>Generates a random email with both numbers and letters</td>
    <td>Length of email</td>
  </tr>
  <tr>
    <td>EmailFunctions</td>
    <td>randomAlphaNumericEmailWithDomain</td>
    <td>Generate a random email string with both alphabet and numbers</td>
    <td><ul><li>Length of email</li><li>Domain name</li></ul></td>
</tr>
<tr>
    <td>EmailFunctions</td>
    <td>randomEmail</td>
    <td>Generates a random email</td>
    <td><ul><li>Length of email</li><li>Domain name</li></ul></td>
</tr>
<tr>
    <td>NameFunctions</td>
    <td>uniqueUsername</td>
    <td>Generates a unique username</td>
    <td></td>
  </tr>
  <tr>
    <td>PhoneNumberFunctions</td>
    <td>getOTP</td>
    <td>Fetch OTP from an SMS</td>
    <td><ul><li>Regex or regular expression(a sequence of characters that specifies a search pattern in text)</li><li>Phone number</li><li>timeout in seconds</li></ul></td>
  </tr>
  <tr>
    <td>MailBoxFunctions</td>
    <td>getEmailOTP</td>
    <td>Fetch OTP sent to the email box into a variable.</td>
    <td><ul><li>Regex or regular expression(a sequence of characters that specifies a search pattern in text)</li><li>linked mailbox to which the OTP should be recieved</li><li>timeout in seconds</li></ul></td>
  </tr>
  <tr>
    <td>MailBoxFunctions</td>
    <td>getLinkFromContent</td>
    <td>Fetch link from a piece of content</td>
    <td>Same as above</td>
  </tr>
  <tr>
    <td>MailBoxFunctions</td>
    <td>subjectVerification</td>
    <td>Verify subject of email</td>
    <td>Same as above</td>
  </tr>
  <tr>
    <td>MailBoxFunctions</td>
    <td>contentVerification</td>
    <td>Verify content of email</td>
    <td><ul><li>Regex</li><li>linked mailbox</li><li>timeout in seconds</li><li>the character string to compare</li></ul></td>
  </tr>
 <tr>
    <td>MailBoxFunctions</td>
    <td>generateMailBoxAlias</td>
    <td>Generate a unique mailbox every time it is executed during a test execution.</td>
    <td>linked mailbox</td>
  </tr>
  <tr>
    <td>MailBoxFunctions</td>
    <td>getEmailContent</td>
    <td>Fetch the entire email content into a variable</td>
    <td><ul><li>Runtimevariable</li><li>timeout in seconds</li></ul></td>
  </tr> 
<tr>
    <td>MailBoxFunctions</td>
    <td>getEmailSubject</td>
    <td>Fetch the subject of the email in to a variable</td>
    <td>Same as above</td>
  </tr> 
  <tr>
    <td>MailBoxFunctions</td>
    <td>getOTP</td>
    <td>Fetch OTP from the email</td>
    <td><ul><li>Regex</li><li>runtimeVariable</li><li>timeout in seconds</li></ul></td>
  </tr> 
  <tr>
    <td>MailBoxFunctions</td>
    <td>urlWithText</td>
    <td>Fetch the URL that contains some required text.</td>
    <td><ul><li>Text</li><li>runtimeVariable</li><li>timeout in seconds</li></ul></td>
  </tr> 
  <tr>
    <td>MailBoxFunctions</td>
    <td>urlWhichContain</td>
    <td>Fetch the URL that contains some required parameters.</td>
    <td><ul><li>Substring</li><li>runtimeVariable</li><li>timeout in seconds</li></ul></td>
  </tr> 
  <tr>
    <td>MailBoxFunctions</td>
    <td>UrlMatchingRegex</td>
    <td>Fetch the URL that contains a URL matching the required regular expression.</td>
    <td></td>
  </tr>
  <tr>
    <td>RandomStringFunctions</td>
    <td>randomStringFromGivenCharactersWithLength</td>
    <td>Generates a random string from the given set of characters</td>
    <td><ul><li>Stringlength= length of the string to be generated in <kbd>integer</kbd> format</li><li> list = list of characters</li></ul></td>
  </tr>
   <tr>
    <td>Randomtext</td>
    <td>phrases</td>
    <td>Generates random text phrases</td>
    <td><ul><li>Stringlength = length of the string to be generated in <kbd>integer</kbd> format </li> <li>list = list of characters</li></ul></td>
  </tr>
  <tr>
    <td>Number</td>
    <td>random number</td>
    <td>Generates a random number between a given range</td>
    <td><ul><li>min = minimum value of range of numbers</li><li>max = maximum value of range of numbers</li></ul></td>
  </tr>
  <tr>
    <td>Number</td>
    <td>randomDigit</td>
    <td>Generates random digits between 0-9</td>
    <td></td>
  </tr>
  <tr>
    <td>Number</td>
    <td>randomDigitNotZero</td>
    <td>Generates random digits between 1-9</td>
    <td></td>
  </tr>
  <tr>
    <td>Number</td>
    <td>number of digits</td>
    <td>Generates n number of digits</td>
    <td><ul><li>number of digits</li><li>boolean value</li></ul></td>
  </tr>
   <tr>
    <td>Address</td>
    <td>fullAddress</td>
    <td>Generates random full address</td>
    <td></td>
  </tr>
   <tr>
    <td>Company</td>
    <td>name</td>
    <td>Generates random name</td>
    <td></td>
  </tr>
   <tr>
    <td>Company</td>
    <td>suffix</td>
    <td>Generates random suffix</td>
    <td></td>
  </tr>
  <tr>
    <td>Company</td>
    <td>industry</td>
    <td>Generates random industry name</td>
    <td></td>
  </tr>
  <tr>
    <td>Company</td>
    <td>industry</td>
    <td>Generates random industry name</td>
    <td></td>
  </tr>
  <tr>
    <td>Company</td>
    <td>buzzword</td>
    <td>Generates a buzzword</td>
    <td></td>
  </tr>
  <tr>
    <td>Company</td>
    <td>catchphrase</td>
    <td>Generates random catchphrase</td>
    <td></td>
  </tr>
  <tr>
    <td>Company</td>
    <td>catchphrase</td>
    <td>Generates random catchphrase</td>
    <td></td>
  </tr>
 <tr>
    <td>Company</td>
    <td>bs</td>
    <td>Generates a random tag line for the company</td>
    <td></td>
  </tr> 
  <tr>
    <td>Company</td>
    <td>joinSampleOfEachList</td>
    <td></td>
    <td></td>
  </tr> 
  <tr>
    <td>DateFunctions</td>
    <td>future</td>
    <td>Generates future date within atmost 'x' time units</td>
    <td><ul><li>atmost = at the maximum 'x' units in integer format</li> <li>unit= unit of time like day,hours,minutes,seconds etc;</li><li>Reference dates= any date</li><li> format = format of date, example:ddmmyyy or mmddyyyy</li></ul></td>
  </tr>
  <tr>
    <td>DateFunctions</td>
    <td>current</td>
    <td>Generates current date within atmost 'x' units of time</td>
    <td><ul><li>format:dd-mm-yyyy</li><li>atmost = at the maximum 'x' units in <kbd>integer</kbd> format</li><li>unit=unit of time like day/hours/minute etc.</li></ul></td>
  </tr> 
<tr>
    <td>DateFunctions</td>
    <td>past</td>
    <td>Generates past date within atmost 'x' units of time</td>
    <td><ul><li>atMost= at the maximum 'x' units in <kbd>integer</kbd> format</li><li>TimeUnit = unit of time</li><li>referenceDateformat:dd-mm-yyyy</li></ul></td>
  </tr>
 <tr>
    <td>DateFunctions</td>
    <td>between</td>
    <td>Generates dates in between two dates</td>
    <td><ul><li>from = starting date</li><li>to = ending date</li><li>format = date format dd-yy-mmmm</li></ul></td>
  </tr> 
    <tr>
    <td>DateFunctions</td>
    <td>birthday</td>
    <td>Generates a random birthday</td>
    <td><ul><li>format = Date format.<em>For example, ddmmyyyy</em></li></ul></td>
  </tr> 
  <tr>
    <td>DateFunctions</td>
    <td>Date before today</td>
    <td>Generates a date which is before today’s date</td>
    <td><ul><li>noOfDays= number of days before the present date in <kbd>integer</kbd>format</li><li>format= Date format</li></ul> </td>
  </tr> 
  <tr>
    <td>DateFunctions</td>
    <td>Date after today</td>
    <td>Generates a date which is after today’s date</td>
    <td><ul><li>noOfDays = number of days after the present date in <kbd>integer</kbd>format</li><li>format = Date format</li></ul></td>
  </tr>  
  <tr>
    <td>DateFunctions</td>
    <td>daysBeforeGivenDate</td>
    <td>Generates a date which is before ‘x’ number of days from the given date</td>
    <td><ul><li>date = reference date</li><li> noOfDays = number of days in integer</li><li> format = date format </li></ul></td>
  </tr> 
   <tr>
    <td>DateFunctions</td>
    <td>daysAfterGivenDate</td>
    <td>Generates a date which is after 'x' number of days from the given date</td>
    <td><ul><li>noOfDays = number of days in integer format</li><li>format = date format</li></ul></td>
  </tr> 
  <tr>
    <td>DateFunctions</td>
    <td>currentTime</td>
    <td>Generates current time</td>
    <td><ul><li>format = format of time. <em>For example, hh:mm:ss dd-mm-yyyy </em></li></ul></td>
  </tr> 
  <tr>
    <td>Cookies</td>
    <td>getCookieNames</td>
    <td>Fetch all cookie names</td>
    <td></td>
  </tr> 
  <tr>
    <td>Cookies</td>
    <td>getCookieWithName</td>
    <td>Fetch only the cookie whose name is given</td>
    <td></td>
  </tr> 
</table>
</body>

