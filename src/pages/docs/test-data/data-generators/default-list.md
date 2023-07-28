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
|MailBoxFunctions|getEmailOTP|Fetch OTP from the email|<li>Regex</li><li>Mailbox</li><li>Timeout in seconds</li>*e.g. Regex - \d{6}, Mailbox - Select Linked Mailbox, Timeout - 45*|
|MailBoxFunctions|getLinkFromContent|Fetch link from a piece of content|<li>Regex</li><li>Mailbox</li><li>Timeout in seconds</li>*e.g. Regex - Regex - \bhttps?:\/\/\S+, Mailbox - Select Linked Mailbox, Timeout - 60*|
|MailBoxFunctions|subjectVerification|Verify subject of email|<li>Regex</li><li>Mailbox</li><li>Timeout in seconds</li>*e.g. Regex - Regex - ^[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,}$, Mailbox - Select Linked Mailbox, Timeout - 90*|
|MailBoxFunctions|contentVerification|Verify content of email|<li>Regex</li><li>Mailbox</li><li>Compare String</li><li>Timeout in seconds</li>*e.g. Regex - ^[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,}$, Mailbox - Select Linked Mailbox, CompareString - , Timeout - 45*|
|MailBoxFunctions|getEmailContent|Store the entire email content in a variable|<li>Runtime Variable</li><li>Timeout in seconds</li>*e.g. Runtime Variable - content, Timeout - 30*|
|MailBoxFunctions|getEmailSubject|Store the subject of the email into a variable by fetching it|<li>Runtime Variable</li><li>Timeout in seconds</li>*e.g. Runtime Variable - content, Timeout - 45*|
|MailBoxFunctions|urlWithText|Fetches the URL of the Element containing the provided text|<li>Text</li><li>Runtime Variable</li><li>Timeout in seconds</li>*e.g. Text - randomtext, Runtime Variable - url, Timeout - 30*|
|MailBoxFunctions|urlWhichContains|Fetch the URL that contains some required parameters.|<li>Substring</li><li>Runtime Variable</li><li>Timeout in seconds</li>*e.g. Substring - example, Runtime Variable - random_text, Timeout - 15*|
|MailBoxFunctions|urlMatchingRegex|Retrieve the URL that matches the required regular expression|<li>Regex</li><li>Runtime Variable</li><li>Timeout in seconds</li>*e.g. Regex - r'https://\w+\.com/\w+', Runtime Variable - path, Timeout - 30*|
|Email|mailbox||Input's not required|

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
|Number|randomDigit|Generates random digits between 0-9|Input's not required|
|Number|randomDigitNotZero|Generates random digits between 1-9|Input's not required|
|Number|number of digits|Generates n number of digits|<li>Number of digits</li><li>Boolean - True/ False</li>*e.g. No of Digits - 6, Boolean - True*|
|Number|randomNumber|Generates a Random Number Between Min and Max Values|Input's not required|
|Number|randomDouble|Generates a Random Number Generator with Min, Max and Number of Decimals|<li>Max No of Decimals</li><li>Min - Minimum value</li><li>Max - Maximum value</li> *e.g. Max No of Decimanls - , Min - , Max-*|
|Number|randomDouble|Generates a Random Number Generator with Min, Max and Number of Decimals|<li>Max No of Decimanls</li><li>Min - Minimum value</li><li>Max - Maximum value</li> *e.g. Max No of Decimanls - , Min - , Max-*|
|Number|digits|Generates a randomn number|Count - Number of digits<br> *e.g. Count -*|
|Number|digit|Generates a randomn number with the length mentioned|Input's not required|

---

## **Name Functions**

|Category(Class)| Function(Method)|Usage|Inputs|
|---|---|---|---|
|NameFunctions|uniqueUsername|Generates a unique username|Input's not required|
|Name|name|Generates a randomn name|Input's not required|
|Name|nameWithMiddle|Generates a name with Middle Name|Input's not required|
|Name|fullName|Generates a Full Name|Input's not required|
|Name|firstName|Generates a random name that can be used as First Name|Input's not required|
|Name|lastName|Generates a random name that can be used as Last Name|Input's not required|
|Name|prefix|Generates a random Prefix|Input's not required|
|Name|suffix|Generates a random Suffix|Input's not required|
|Name|title|Generates random Title|Input's not required|
|Name|username|Generates a random Username|Input's not required|

---

## **Phone Number Functions**

|Category(Class)| Function(Method)|Usage|Inputs|
|---|---|---|---|
|PhoneNumberFunctions|getOTP|Fetch OTP from an SMS|<li>Regex</li><li>Phone number</li><li>Timeout in seconds</li>*e.g. Regex - \d{6}, Phone number - Select Linked Phone Number, Timeout - 30*|
|PhoneNumber|cellPhone|Generates a random Mobile Number|Input's not required|
|PhoneNumber|phoneNumber|Generates a random Phone Number|Input's not required|

---

## **Internet Functions**

|Category(Class)| Function(Method)|Usage|Inputs|
|---|---|---|---|
|Internet|domainName|Generates random domain name|Input's not required|
|Internet|domainWord|Generates random domain|Input's not required|
|Internet|domainSuffix|Generates random domain suffix|Input's not required|
|Internet|emailAddress|Generates random email address|Input's not required|
|Internet|emailAddress|Generates random email address with given locapart|Localpart<br>*e.g. Localpart -*|
|Internet|safeEmailAddress|Generates random email|Input's not required|
|Internet|safeEmailAddress|Generates random email address with given|Localpart<br>*e.g. Localpart -*|
|Internet|url|Generates random URL|Input's not required|
|Internet|image|Generates random image file URL|Input's not required|
|Internet|password|Generates random password|Input's not required|
|Internet|uuid|Generates random unique user id|Input's not required|

---

## **File Functions**

|Category(Class)| Function(Method)|Usage|Inputs|
|---|---|---|---|
|File|mimeType|Generates random two part file type|Input's not required|
|File|fileName|Generates random file name|Input's not required|
|File|fileName|Generates file name using given data|<li>Argument 0</li><li>Argument 1</li><li>Argument 2</li><li>Argument 3</li>*e.g. Argument 0 - , Argument 1 - , Argument 2 - , Argument 3 -*|

---

## **Friends Functions**

|Category(Class)| Function(Method)|Usage|Inputs|
|---|---|---|---|
|Friends|character|Gives random name |Input's not required|
|Friends|location|Gives random location|Input's not required|

---

## **Id Number Functions**

|Category(Class)| Function(Method)|Usage|Inputs|
|---|---|---|---|
|IdNumber|valid|Geneates random id|Input's not required|
|IdNumber|invalid|Geneates random id|Input's not required|
|IdNumber|ssnValid||Input's not required|
|IdNumber|validSvSeSsn||Input's not required|
|IdNumber|invalidSvSeSsn||Input's not required|

---

## **Address Functions**

|Category(Class)| Function(Method)|Usage|Inputs|
|---|---|---|---|
|Address|streetName|Generates random street name|Input's not required|
|Address|streetAddressNumber|Generates random street address|Input's not required|
|Address|streetAddress|Generates random street address|Input's not required|
|Address|streetAddress|Generates street address with given data|Argument 0<br>*e.g. Argument 0 -*|
|Address|secondaryAddress|Generates random address|Input's not required|
|Address|zipCode|Generates random zipcode|Input's not required|
|Address|zipCodeByState||Argument 0<br>*e.g. Argument 0 -*|
|Address|streetSuffix|Generates random street Suffix|Input's not required|
|Address|streetPrefix|Generates random street Prefix|Input's not required|
|Address|citySuffix|Generates random Street City Suffix|Input's not required|
|Address|cityPrefix|Generates random Street City Prefix |Input's not required|
|Address|city|Generates random city|Input's not required|
|Address|cityName||Input's not required|
|Address|state||Input's not required|
|Address|stateAbbr||Input's not required|
|Address|firstName||Input's not required|
|Address|lastName||Input's not required|
|Address|latitude||Input's not required|
|Address|longitude||Input's not required|
|Address|timeZone||Input's not required|
|Address|country||Input's not required|
|Address|countryCode||Input's not required|
|Address|buildingNumber||Input's not required|
|Address|fullAddress|Generates random full address|Input's not required|

---

## **Company Functions**

|Category(Class)| Function(Method)|Usage|Inputs|
|---|---|---|---|
|Company|name||Input's not required|
|Company|suffix||Input's not required|
|Company|industry||Input's not required|
|Company|buzzword||Input's not required|
|Company|catchphrase||Input's not required|
|Company|bs||Input's not required|
|Company|logo||Input's not required|
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
