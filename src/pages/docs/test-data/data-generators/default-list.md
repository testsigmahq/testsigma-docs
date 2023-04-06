---
title: "Default Test Data Generators"
metadesc: "Lists out the built-in Data Generator functions available in Testsigma and describe its usage"
noindex: false
order: 5.32
page_id: "Default Test Data Generators"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Email Functions"
  url: "#email-functions"
- type: link
  name: "Mail Box Functions"
  url: "#mail-box-functions"
- type: link
  name: "Mail Box Alias Functions"
  url: "#mail-box-alias-functions"
- type: link
  name: "Test Data From Profile Functions"
  url: "#test-data-from-profile-functions"
- type: link
  name: "Number Functions"
  url: "#number-functions"  
- type: link
  name: "Name Functions"
  url: "#name-functions"
- type: link
  name: "Phone Number Functions"
  url: "#phone-number-functions"
- type: link
  name: "Internet Functions"
  url: "#internet-functions" 
- type: link
  name: "File Functions"
  url: "#file-functions"
- type: link
  name: "Friends Functions"
  url: "#friends-functions"
- type: link
  name: "Id Number Functions"
  url: "#id-number-functions"
- type: link
  name: "Address Functions"
  url: "#address-functions"
- type: link
  name: "Company Functions"
  url: "#company-functions"
- type: link
  name: "Date Functions"
  url: "#date-functions"
- type: link
  name: "Other Functions"
  url: "#other-functions" 
---

---

Testsigma offers a variety of predefined data types, including text, number, date, email, phone number, and others. You can use these data types to create test data for various field types. Refer to [test data generator usage in test steps](https://testsigma.com/docs/test-data/types/data-generator/) to learn how to use the default test data generators in your test steps.

The following list categorises the available default test data generators.

---

## **Email Functions**

|Category(Class)| Function(Method)|Usage|Inputs|
|---|---|---|---|
|EmailFunctions|username|Generate a username|Length<br>*e.g. Length - 6*|
|EmailFunctions|randomAlphanumaricEmail	|Generates a random email with both numbers and letters|Length<br>*e.g. Length - 5*|
|EmailFunctions|randomAlphaNumericEmailWithDomain|Generate a random email string with both alphabet and numbers|<li>Length</li><li>Domain</li>*e.g. Length - 8, Domain - google.com*|
|EmailFunctions|randomEmail|Generates a random email with a given domain.|<li>Length</li><li>Domain</li>*e.g. Length - 7, Domain - testsigma.com*|
|EmailFunctions|randomEmail|Generates a random email|Length<br>*e.g. Length - 7*|

---

## **Mail Box Functions**

|Category(Class)| Function(Method)|Usage|Inputs|
|---|---|---|---|
|MailBoxFunctions|getEmailOTP|Fetch OTP from an SMS|<li>Regex</li><li>Phone number</li><li>Timeout in seconds</li>*e.g. Regex - \d{4}, Phone number - Select Linked Phone Number, Timeout - 30*|
|MailBoxFunctions|getEmailOTP|Fetch OTP sent to the email box into a variable|<li>Regex</li><li>Mailbox</li><li>Timeout in seconds</li>*e.g. Regex - \d{6}, Mailbox - Select Linked Mailbox, Timeout - 45*|
|MailBoxFunctions|getLinkFromContent|Fetch link from a piece of content|<li>Regex</li><li>Mailbox</li><li>Timeout in seconds</li>*e.g. Regex - Regex - \bhttps?:\/\/\S+, Mailbox - Select Linked Mailbox, Timeout - 60*|
|MailBoxFunctions|subjectVerification|Verify subject of email|<li>Regex</li><li>Mailbox</li><li>Timeout in seconds</li>*e.g. Regex - Regex - ^[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,}$, Mailbox - Select Linked Mailbox, Timeout - 90*|
|MailBoxFunctions|contentVerification|Verify content of email|<li>Regex</li><li>Mailbox</li><li>Compare String</li><li>Timeout in seconds</li>*e.g. Regex - ^[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,}$, Mailbox - Select Linked Mailbox, CompareString - , Timeout - 45*|
|Email|mailbox||Function does not need the user's input|

---

## **Mail Box Alias Functions**

|Category(Class)| Function(Method)|Usage|Inputs|
|---|---|---|---|
|MailBoxAliasFunctions|generateMailBoxAlias|Generate a unique mailbox every time it is executed during test execution|Mailbox - Select Linked Mailbox|
|MailBoxAliasFunctions|getEmailContent|Fetch the entire email content into a variable|<li>Runtime Variable</li><li>Timeout in seconds</li>*e.g. Runtime Variable - content, Timeout - 30*|
|MailBoxAliasFunctions|getEmailSubject|Fetch the subject of the email in to a variable|<li>Runtime Variable</li><li>Timeout in seconds</li>*e.g. Runtime Variable - content, Timeout - 45*|
|MailBoxAliasFunctions|getOTP|Fetch OTP from the email|<li>Regex</li><li>Runtime Variable</li><li>Timeout in seconds</li>*e.g. Regex - \d{4,6}, Runtime Variable - otp, Timeout - 60*|
|MailBoxAliasFunctions|urlWithText|Fetch the URL that contains some required text|<li>Text</li><li>Runtime Variable</li><li>Timeout in seconds</li>*e.g. Text - randomtext, Runtime Variable - url, Timeout - 30*|
|MailBoxAliasFunctions|urlWhichContains|Fetch the URL that contains some required parameters|<li>Substring</li><li>Runtime Variable</li><li>Timeout in seconds</li>*e.g. Substring - example, Runtime Variable - random_text, Timeout - 15*|
|MailBoxAliasFunctions|urlMatchingRegex|Fetch the URL that contains a URL matching the required regular expression|<li>Regex</li><li>Runtime Variable</li><li>Timeout in seconds</li>*e.g. Regex - r'https://\w+\.com/\w+', Runtime Variable - path, Timeout - 30*|

---

## **Test Data From Profile Functions**

|Category(Class)| Function(Method)|Usage|Inputs|
|---|---|---|---|
|TestDataFromProfile|getTestDataBySetName|Fetch the test data by set name from test data profiles|<li>Test Data Profile</li><li>Data Set Name</li><li>Parameter</li>*e.g. Test Data Profile - , Data Set Name - , Parameter -*|
|TestDataFromProfile|getTestDataByRowNumber|Fetch the test data by row number from test data profiles|<li>Test Data Profile</li><li>Row Number</li><li>Parameter</li>*e.g. Test Data Profile - , Row Number - , Parameter -*|

---

## **Number Functions**

|Category(Class)| Function(Method)|Usage|Inputs|
|---|---|---|---|
|NumberFunctions|Custom Calculation|Performs multiple mathematic calculations|Using any Test Data<li>Plain Text</li><li>Parameter</li><li>Runtime</li><li>Environment</li>_e.g. Test Data - [(25*25+50/45)+456]_|
|Number|random number|Generates a random number between a given range|<li>min - minimum value of range of numbers</li><li>max - maximum value of range of numbers</li>*e.g. min - 2, max - 9*|
|Number|randomDigit|Generates random digits between 0-9|Function does not need the user's input|
|Number|randomDigitNotZero|Generates random digits between 1-9|Function does not need the user's input|
|Number|number of digits|Generates n number of digits|<li>Number of digits</li><li>Boolean - True/ False</li>*e.g. No of Digits - 6, Boolean - True*|
|Number|randomNumber|Generates a Random Number Between Min and Max Values|Function does not need the user's input|
|Number|randomDouble|Generates a Random Number Generator with Min, Max and Number of Decimals|<li>Max No of Decimals</li><li>Min - Minimum value</li><li>Max - Maximum value</li> *e.g. Max No of Decimanls - , Min - , Max-*|
|Number|randomDouble|Generates a Random Number Generator with Min, Max and Number of Decimals|<li>Max No of Decimanls</li><li>Min - Minimum value</li><li>Max - Maximum value</li> *e.g. Max No of Decimanls - , Min - , Max-*|
|Number|digits|Generates a randomn number|Count - Number of digits<br> *e.g. Count -*|
|Number|digit|Generates a randomn number with the length mentioned|Function does not need the user's input|

---

## **Name Functions**

|Category(Class)| Function(Method)|Usage|Inputs|
|---|---|---|---|
|NameFunctions|uniqueUsername|Generates a unique username|Function does not need the user's input|
|Name|name|Generates a randomn name|Function does not need the user's input|
|Name|nameWithMiddle|Generates a name with Middle Name|Function does not need the user's input|
|Name|fullName|Generates a Full Name|Function does not need the user's input|
|Name|firstName|Generates a random name that can be used as First Name|Function does not need the user's input|
|Name|lastName|Generates a random name that can be used as Last Name|Function does not need the user's input|
|Name|prefix|Generates a random Prefix|Function does not need the user's input|
|Name|suffix|Generates a random Suffix|Function does not need the user's input|
|Name|title|Generates random Title|Function does not need the user's input|
|Name|username|Generates a random Username|Function does not need the user's input|

---

## **Phone Number Functions**

|Category(Class)| Function(Method)|Usage|Inputs|
|---|---|---|---|
|PhoneNumberFunctions|getOTP|Fetch OTP from an SMS|<li>Regex</li><li>Phone number</li><li>Timeout in seconds</li>*e.g. Regex - \d{6}, Phone number - Select Linked Phone Number, Timeout - 30*|
|PhoneNumber|cellPhone|Generates a random Mobile Number|Function does not need the user's input|
|PhoneNumber|phoneNumber|Generates a random Phone Number|Function does not need the user's input|

---

## **Internet Functions**

|Category(Class)| Function(Method)|Usage|Inputs|
|---|---|---|---|
|Internet|domainName||Function does not need the user's input|
|Internet|domainWord||Function does not need the user's input|
|Internet|domainSuffix||Function does not need the user's input|
|Internet|emailAddress||Function does not need the user's input|
|Internet|emailAddress||Localpart<br>*e.g. Localpart -*|
|Internet|safeEmailAddress||Function does not need the user's input|
|Internet|safeEmailAddress||Localpart<br>*e.g. Localpart -*|
|Internet|url||Function does not need the user's input|
|Internet|image||Function does not need the user's input|
|Internet|password||Function does not need the user's input|
|Internet|uuid||Function does not need the user's input|

---

## **File Functions**

|Category(Class)| Function(Method)|Usage|Inputs|
|---|---|---|---|
|File|mimeType||Function does not need the user's input|
|File|fileName||Function does not need the user's input|
|File|fileName||<li>Argument 0</li><li>Argument 1</li><li>Argument 2</li><li>Argument 3</li>*e.g. Argument 0 - , Argument 1 - , Argument 2 - , Argument 3 -*|

---

## **Friends Functions**

|Category(Class)| Function(Method)|Usage|Inputs|
|---|---|---|---|
|Friends|character||Function does not need the user's input|
|Friends|location||Function does not need the user's input|

---

## **Id Number Functions**

|Category(Class)| Function(Method)|Usage|Inputs|
|---|---|---|---|
|IdNumber|valid||Function does not need the user's input|
|IdNumber|invalid||Function does not need the user's input|
|IdNumber|ssnValid||Function does not need the user's input|
|IdNumber|validSvSeSsn||Function does not need the user's input|
|IdNumber|invalidSvSeSsn||Function does not need the user's input|

---

## **Address Functions**

|Category(Class)| Function(Method)|Usage|Inputs|
|---|---|---|---|
|Address|streetName||Function does not need the user's input|
|Address|streetAddressNumber||Function does not need the user's input|
|Address|streetAddress||Function does not need the user's input|
|Address|streetAddress||Argument 0<br>*e.g. Argument 0 -*|
|Address|secondaryAddress||Function does not need the user's input|
|Address|zipCode||Function does not need the user's input|
|Address|zipCodeByState||Argument 0<br>*e.g. Argument 0 -*|
|Address|streetSuffix||Function does not need the user's input|
|Address|streetPrefix||Function does not need the user's input|
|Address|citySuffix||Function does not need the user's input|
|Address|cityPrefix||Function does not need the user's input|
|Address|city||Function does not need the user's input|
|Address|cityName||Function does not need the user's input|
|Address|state||Function does not need the user's input|
|Address|stateAbbr||Function does not need the user's input|
|Address|firstName||Function does not need the user's input|
|Address|lastName||Function does not need the user's input|
|Address|latitude||Function does not need the user's input|
|Address|longitude||Function does not need the user's input|
|Address|timeZone||Function does not need the user's input|
|Address|country||Function does not need the user's input|
|Address|countryCode||Function does not need the user's input|
|Address|buildingNumber||Function does not need the user's input|
|Address|fullAddress|Generates random full address|Function does not need the user's input|

---

## **Company Functions**

|Category(Class)| Function(Method)|Usage|Inputs|
|---|---|---|---|
|Company|name||Function does not need the user's input|
|Company|suffix||Function does not need the user's input|
|Company|industry||Function does not need the user's input|
|Company|buzzword||Function does not need the user's input|
|Company|catchphrase||Function does not need the user's input|
|Company|bs||Function does not need the user's input|
|Company|logo||Function does not need the user's input|
|Company|joinSampleOfEachList||<li>Argument 0</li><li>Argument 1</li>*e.g. Argument 0 - , Argument 1 -*|

---

## **Date Functions**

|Category(Class)| Function(Method)|Usage|Inputs|
|---|---|---|---|
|DateFunctions|future|Generates future date within atmost 'x' time units|<li>atmost - at the maximum 'x' units in integer Format</li><li>Unit - Unit of time like day,hours,minutes,seconds etc;</li><li>Reference dates - any date</li><li>Format - Format of date</li>*e.g. atmost - , Unit - , ReferenceDate - 21/11/2021, Format - DD/MM/YYYY*|
|DateFunctions|future|Generates future date within atmost 'x' time units|<li>atmost - at the maximum 'x' units in integer Format</li><li>Unit - Unit of time like day,hours,minutes,seconds etc;</li><li>Format - Format of date</li>*e.g. atmost- , Unit - , Format - MM/DD/YYYY*|
|DateFunctions|current|Generates current date within atmost 'x' units of time|Format<br>*e.g. Format - dd/mm/yyyy*|
|DateFunctions|between|Generates dates in between two dates|<li>From - Starting date</li><li>To - Ending date</li><li>Format - Format of date</li>*e.g. From - 16/03/2016, To - 15/07/2016, Format - DD/MM/YYYY*|
|DateFunctions|past|Generates past date within atmost 'x' units of time|<li>atmost - at the maximum 'x' units in integer Format</li><li>Unit - Unit of time like day,hours,minutes,seconds etc;</li><li>Reference dates - any date</li><li>Format - Format of date</li>*e.g. atmost - , Unit - , ReferenceDate - 14/02/1994, Format - DD/MM/YYYY*|
|DateFunctions|past|Generates past date within atmost 'x' units of time|<li>atmost - at the maximum 'x' units in integer Format</li><li>Unit - Unit of time like day,hours,minutes,seconds etc;</li><li>Format - Format of date</li>*e.g. atmost- , Unit - , Format - MM/DD/YYYY*|
|DateFunctions|birthday|Generates a random birthday|Format<br>*e.g. Format - dd/mm/yyyy*|
|DateFunctions|dateBeforeToday|Generates a date which is before today's date|<li>noOfDays - number of days after the present date in integer Format</li><li>Format - Date Format</li>*e.g. NoOfDays - 4, Format - DD/MM/YYYY*|
|DateFunctions|dateAfterToday|Generates a date which is after today’s date|<li>noOfDays - number of days after the present date in integer Format</li><li>Format - Date Format</li>*e.g. NoOfDays - 3, Format - DD/MM/YYYY*|
|DateFunctions|daysBeforeGivenDate|Selects the previous date as input based on the provided "current date and the number of days to be counted."|<li>Date</li><li>noOfDays - number of days after the present date in integer Format</li><li>Format - Date Format</li>*e.g. Date - 27/02/2015, NoOfDays - 7, Format - DD/MM/YYYY*|
|DateFunctions|daysAfterGivenDate|Selects the days after the current date based on the input of the "current date and number of days to be counted."|<li>Date</li><li>noOfDays - number of days after the present date in integer Format</li><li>Format - Date Format</li>*e.g. Date - 25/08/1999, NoOfDays - 5, Format - DD/MM/YYYY*|

---

## **Other Functions**

|Category(Class)| Function(Method)|Usage|Inputs|
|---|---|---|---|
|DomainFunction|emailWithDomain|Generates an email with a domain|Preferred Domain name <br> *e.g. Domain - google.com/ testsigma.com*|
|RandomStringFunctions|randomStringFromGivenCharactersWithLength|Generates a random string from the given set of characters|<li>Stringlength - length of the string to be generated in integer Format.</li><li>List - list of characters</li>*e.g. Stringlength - , NoOfDays - 5, List -*|
|Random Text|phrases|Generates random text phrases|<li>Stringlength - length of the string to be generated in integer Format.</li><li>List - list of characters</li>*e.g. Stringlength - , NoOfDays - 5, List -*|
|StringFunctions|Concat|Concatenates two or more strings|Using any Test Data like Plain Text, Parameter, Runtime, or Environment in Test-Data0 and Test-Data1 fields<br> _e.g. Testdata0 : @\|parameter\|, Testdata1 : $\|Runtime\|_|

---

[[info | NOTE:]]
| - You can create your own Data Generator and customise the actions according to your preference. For more information, refer to [create test data generators using addons](https://testsigma.com/tutorials/addons/how-create-addons-test-data-generators/)
| - For some Data Generators, Regex is used to find a sequence of characters that specifies a search pattern in the text; if you're unfamiliar, refer to the [Regex guide - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

---
