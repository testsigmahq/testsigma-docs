---
title: "Default Test Data Generators"
metadesc: "Lists out the built-in Data Generator functions available in Testsigma and describe its usage"
noindex: false
order: 5.32
page_id: "Default Test Data Generators"
warning: false
---

---

Testsigma offers a variety of predefined data types, including text, number, date, email, phone number, and others. You can use these data types to create test data for various field types. Refer to [test data generator usage in test steps](https://testsigma.com/docs/test-data/data-generators/default-list/) to learn how to use the default test data generators in your test steps.

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
    <td>Preferred Domain name.<br><em>For example: google.com, testsigma.com</em></td>
  </tr>
  <tr>
    <td>EmailFunctions</td>
    <td>username</td>
    <td>Generate a username</td>
    <td>Required length of username(actual names).<br><em>For example: Length - 8</em></td>
  </tr>
  <tr>
    <td>EmailFunctions</td>
    <td>randomAlphanumaricEmail</td>
    <td>Generates a random email with both numbers and letters</td>
    <td>Required length of email(random alphanumeric characters)</td>
  </tr>
  <tr>
    <td>EmailFunctions</td>
    <td>randomAlphaNumericEmailWithDomain</td>
    <td>Generate a random email string with both alphabet and numbers</td>
    <td><li>Length of email before @</li><li>Preferred domain name for the email</li></td>
</tr>
<tr>
    <td>EmailFunctions</td>
    <td>randomEmail</td>
    <td>Generates a random email</td>
    <td><li>Length of email before @ (Valid Names)</li><li>Preferred domain name for the email</li></td>
</tr>
<tr>
    <td>EmailFunctions</td>
    <td>randomEmail</td>
    <td>Generates a random email</td>
    <td>Length of email before @ (Valid Names)</td>
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
    <td><li>Regex</li><li>Phone number</li><li>timeout in seconds</li></td>
  </tr>
  <tr>
    <td>MailBoxFunctions</td>
    <td>getEmailOTP</td>
    <td>Fetch OTP sent to the email box into a variable.</td>
    <td><li>Regex</li><li>Linked mailbox to which the OTP should be recieved</li><li>Timeout in seconds</li></td>
  </tr>
  <tr>
    <td>MailBoxFunctions</td>
    <td>getLinkFromContent</td>
    <td>Fetch link from a piece of content</td>
    <td><li>Regex</li><li>Linked Mailbox</li><li>Timeout in seconds</li></td>
  </tr>
  <tr>
    <td>MailBoxFunctions</td>
    <td>subjectVerification</td>
    <td>Verify subject of email</td>
    <td><li>Regex</li><li>Linked Mailbox</li><li>Timeout in seconds</li></td>
  </tr>
  <tr>
    <td>MailBoxFunctions</td>
    <td>contentVerification</td>
    <td>Verify content of email</td>
    <td><li>Regex</li><li>Linked Mailbox</li><li>Timeout in seconds</li><li>Character String to compare</li></td>
  </tr>
  <tr>
    <td>MailBoxAliasFunctions</td>
    <td>generateMailBoxAlias</td>
    <td>Generate a unique mailbox every time it is executed during test execution.</td>
    <td>Select Linked Mailbox to create a new email address.</td>
  </tr>
  <tr>
    <td>MailBoxAliasFunctions</td>
    <td>getEmailContent</td>
    <td>Fetch the entire email content into a variable.</td>
    <td><li>Runtime Variable</li><li>Timeout in seconds</li></td>
  </tr>
  <tr>
    <td>MailBoxAliasFunctions</td>
    <td>getEmailSubject</td>
    <td>Fetch the subject of the email in to a variable.</td>
    <td><li>Runtime Variable</li><li>Timeout in seconds</li></td>
  </tr>
  <tr>
    <td>MailBoxAliasFunctions</td>
    <td>getOTP</td>
    <td>Fetch OTP from the email.</td>
    <td><li>Regex</li><li>Runtime Variable</li><li>Timeout in seconds</li></td>
  </tr>
  <tr>
    <td>MailBoxAliasFunctions</td>
    <td>urlWithText</td>
    <td>Fetch the URL that contains some required text.</td>
    <td><li>Text</li><li>Runtime Variable</li><li>Timeout in seconds</li></td>
  </tr>
  <tr>
    <td>MailBoxAliasFunctions</td>
    <td>urlWhichContains</td>
    <td>Fetch the URL that contains some required parameters.</td>
    <td><li>Substring</li><li>Runtime Variable</li><li>Timeout in seconds</li></td>
  </tr>
  <tr>
    <td>MailBoxAliasFunctions</td>
    <td>urlMatchingRegex</td>
    <td>Fetch the URL that contains a URL matching the required regular expression.</td>
    <td><li>Regex</li><li>Runtime Variable</li><li>Timeout in seconds</li></td>
  </tr>
  <tr>
    <td>TestDataFromProfile</td>
    <td>getTestDataBySetName</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>TestDataFromProfile</td>
    <td>getTestDataByRowNumber</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>RandomStringFunctions</td>
    <td>randomStringFromGivenCharactersWithLength</td>
    <td>Generates a random string from the given set of characters</td>
    <td><li>Stringlength - length of the string to be generated in integer format</li><li> List - List of characters</li></ul></td>
  </tr>
   <tr>
    <td>CustomerFriends</td>
    <td>phrases</td>
    <td>Generates random text phrases</td>
    <td><li>Stringlength - length of the string to be generated in integer format.</li> <li>List - list of characters</li></td>
  </tr>
  <tr>
    <td>Number</td>
    <td>random number</td>
    <td>Generates a random number between a given range</td>
    <td><li>min - minimum value of range of numbers</li><li>max - maximum value of range of numbers</li></td>
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
    <td><li>Number of digits</li><li>Boolean - True/ False</li></td>
  </tr>
  <tr>
    <td>Number</td>
    <td>randomNumber</td>
    <td></td>
    <td><li>Integer - no. of digits of generated random number</li><li>Boolean - True/ False</li></td>
  </tr>
  <tr>
    <td>Number</td>
    <td>randomDouble</td>
    <td></td>
    <td><li>Integer - Maximum Number of Decimals</li><li>Integer - Minimum value</li><li>Integer - Maximum value</li></td>
  </tr>
  <tr>
    <td>Number</td>
    <td>randomDouble</td>
    <td></td>
    <td><li>Integer - Maximum Number of Decimals</li><li>Long - Minimum value</li><li>Long - Maximum value</li></td>
  </tr>
  <tr>
    <td>Number</td>
    <td>digits</td>
    <td></td>
    <td>Integer - Number of digits</td>
  </tr>
  <tr>
    <td>Number</td>
    <td>name</td>
    <td></td>
    <td>Integer - Number of digits</td>
  </tr>
  <tr>
    <td>Number</td>
    <td>nameWithMiddle</td>
    <td></td>
    <td>Integer - Number of digits</td>
  </tr>
  <tr>
    <td>Number</td>
    <td>fullName</td>
    <td></td>
    <td>Integer - Number of digits</td>
  </tr>
  <tr>
    <td>Number</td>
    <td>firstName</td>
    <td></td>
    <td>Integer - Number of digits</td>
  </tr>
  <tr>
    <td>Number</td>
    <td>lastName</td>
    <td></td>
    <td>Integer - Number of digits</td>
  </tr>
  <tr>
    <td>Number</td>
    <td>prefix</td>
    <td></td>
    <td>Integer - Number of digits</td>
  </tr>
  <tr>
    <td>Number</td>
    <td>suffix</td>
    <td></td>
    <td>Integer - Number of digits</td>
  </tr>
  <tr>
    <td>Number</td>
    <td>title</td>
    <td></td>
    <td>Integer - Number of digits</td>
  </tr>
  <tr>
    <td>Number</td>
    <td>username</td>
    <td></td>
    <td>Integer - Number of digits</td>
  </tr>
  <tr>
    <td>PhoneNumber</td>
    <td>cellPhone</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>PhoneNumber</td>
    <td>phoneNumber</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Internet</td>
    <td>domainName</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Internet</td>
    <td>domainWord</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Internet</td>
    <td>domainSuffix</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Internet</td>
    <td>emailAddress</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Internet</td>
    <td>emailAddress</td>
    <td></td>
    <td>String - local Part</td>
  </tr>
  <tr>
    <td>Internet</td>
    <td>safeEmailAddress</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Internet</td>
    <td>safeEmailAddress</td>
    <td></td>
    <td>String - local Part</td>
  </tr>
  <tr>
    <td>Internet</td>
    <td>url</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Internet</td>
    <td>image</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Internet</td>
    <td>password</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Internet</td>
    <td>uuid</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>File</td>
    <td>mimeType</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>File</td>
    <td>fileName</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>File</td>
    <td>fileName</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>File</td>
    <td>fileName</td>
    <td></td>
    <td><li>"Argument 1 ": "Argument 1 "</li><li>"Argument 1 ": "Argument 1 "</li><li>"argument2 ": "argument2 "</li><li>"argument3 ": "argument3 "</li></td>
  </tr>
  <tr>
    <td>Friends</td>
    <td>character</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Friends</td>
    <td>location</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Friends</td>
    <td>location</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>IdNumber</td>
    <td>valid</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>IdNumber</td>
    <td>invalid</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>IdNumber</td>
    <td>ssnValid</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>IdNumber</td>
    <td>validSvSeSsn</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>IdNumber</td>
    <td>invalidSvSeSsn</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Address</td>
    <td>streetName</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Address</td>
    <td>streetAddressNumber</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Address</td>
    <td>streetAddress</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Address</td>
    <td>streetAddress</td>
    <td></td>
    <td>Argument 1: Argument 1</td>
  </tr>
  <tr>
    <td>Address</td>
    <td>secondaryAddress</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Address</td>
    <td>zipCode</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Address</td>
    <td>zipCodeByState</td>
    <td></td>
    <td>Argument 1: Argument 1</td>
  </tr>
  <tr>
    <td>Address</td>
    <td>streetSuffix</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Address</td>
    <td>streetPrefix</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Address</td>
    <td>citySuffix</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Address</td>
    <td>cityPrefix</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Address</td>
    <td>city</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Address</td>
    <td>cityName</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Address</td>
    <td>state</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Address</td>
    <td>stateAbbr</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Address</td>
    <td>firstName</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Address</td>
    <td>lastName</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Address</td>
    <td>latitude</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Address</td>
    <td>longitude</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Address</td>
    <td>timeZone</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Address</td>
    <td>country</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Address</td>
    <td>countryCode</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Address</td>
    <td>buildingNumber</td>
    <td></td>
    <td></td>
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
    <td>Email</td>
    <td>mailbox</td>
    <td></td>
    <td></td>
  </tr> 
  <tr>
    <td>DateFunctions</td>
    <td>future</td>
    <td>Generates future date within atmost 'x' time units</td>
    <td><li>atmost = at the maximum 'x' units in integer format</li> <li>Unit - Unit of time like day,hours,minutes,seconds etc;</li><li>Reference dates - any date</li><li> Format = Format of date, example:ddmmyyy or mmddyyyy</li></td>
  </tr>
  <tr>
    <td>DateFunctions</td>
    <td>future</td>
    <td>Generates future date within atmost 'x' time units</td>
    <td><li>Integer - Upper limit of value to be added (any random value between 0 and this value can be used)</li><li>String - Format of Date to be generated</li></td>
  </tr>
  <tr>
    <td>DateFunctions</td>
    <td>current</td>
    <td>Generates current date within atmost 'x' units of time</td>
    <td><li>Format : dd-mm-yyyy</li><li>atmost = at the maximum 'x' units in integer format</li><li>Unit - unit of time like day/hours/minute etc.</li></td>
  </tr> 
  <tr>
    <td>DateFunctions</td>
    <td>past</td>
    <td>Generates past date within atmost 'x' units of time</td>
    <td><li>atMost= at the maximum 'x' units in integer format</li><li>TimeUnit - unit of time</li><li>ReferenceDateformat : dd-mm-yyyy</li></td>
  </tr>
  <tr>
    <td>DateFunctions</td>
    <td>past</td>
    <td>Generates past date within atmost 'x' units of time</td>
    <td><li>Integer - Upper limit of value to be added (any random value between 0 and this value can be used)</li><li>TimeUnit - Unit of Time</li><li>String - Format of Date to be generated</li></td>
  </tr>
 <tr>
    <td>DateFunctions</td>
    <td>between</td>
    <td>Generates dates in between two dates</td>
    <td><li>From - Starting date</li><li>To - Ending date</li><li>Format - Date format dd-yy-mmmm</li></td>
  </tr> 
    <tr>
    <td>DateFunctions</td>
    <td>birthday</td>
    <td>Generates a random birthday</td>
    <td><li>Format = Date format.<em>For example, ddmmyyyy</em></li></td>
  </tr>
  </tr> 
    <tr>
    <td>StringAndDateTime</td>
    <td>concatWithCurrentTime</td>
    <td></td>
    <td></td>
  </tr> 
  <tr>
    <td>DateFunctions</td>
    <td>dateBeforeToday</td>
    <td>Generates a date which is before today's date</td>
    <td><li>noOfDays - number of days before the present date in integer format</li><li>Format - Date format</li></td>
  </tr> 
  <tr>
    <td>DateFunctions</td>
    <td>dateAfterToday</td>
    <td>Generates a date which is after today’s date</td>
    <td><li>noOfDays - number of days after the present date in integer format</li><li>Format - Date format</li></td>
  </tr>
  <tr>
    <td>StringConcatenation</td>
    <td>concatWithRandomString</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>RestTestCustom</td>
    <td>getAdd</td>
    <td></td>
    <td></td>
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
  <tr>
    <td>RandomStringUtil</td>
    <td>alphabeticString</td>
    <td></td>
    <td></td>
  </tr> 
  <tr>
    <td>RandomStringUtil</td>
    <td>alphabetic</td>
    <td></td>
    <td></td>
  </tr>  
  <tr>
    <td>CustomStepTest</td>
    <td>sampleCustomStep</td>
    <td></td>
    <td></td>
  </tr> 
  <tr>
    <td>RestTestCustomTest</td>
    <td>getAdd</td>
    <td></td>
    <td></td>
  </tr> 
  <tr>
    <td>CustomFunctionSample</td>
    <td>getAdd</td>
    <td></td>
    <td></td>
  </tr> 
</table>
</body>

[[info | NOTE:]]
| - You can create your own Data Generator and customise the actions according to your preference. For more information, refer to [create test data generators using addons](https://testsigma.com/tutorials/addons/how-create-addons-test-data-generators/)
| - For some Data Generators, Regex is used to find a sequence of characters that specifies a search pattern in the text; if you're unfamiliar, refer to the [Regex guide - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

---
