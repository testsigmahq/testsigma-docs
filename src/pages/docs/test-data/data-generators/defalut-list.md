---
title: "Default Test Data Generators"
metadesc: "Lists out the built-in Data Generator functions available in Testsigma and describe its usage"
order: 5.32
page_id: "Default Test Data Generators"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "list of default Test Data Generators available in Testsigma"
  url: "#given-below-is-the-list-of-default-test-data-generators-available-in-testsigma"
---

To know how to use the default Test Data Generators in your Test Steps, see [Test Data Generator Usage in Test Steps](https://testsigma.com/docs/test-data/types/data-generator/)

If you don't find the Data Generator that you are looking for, create your own. [Refer to this tutorial](https://testsigma.com/tutorials/addons/how-create-addons-test-data-generators/)

---
##Given below is the list of default Test Data Generators available in Testsigma:

|Category(Class)|Function(Method)|Usage|
|---------|-----|------|
|DomainFunction|emailWithDomain|Generates an email with a domain|
|EmailFunctions|username|Generate a username|
|EmailFunctions|randomAlphanumaricEmail|Generates a random email with both numbers and letters|
|EmailFunctions|randomEmail|Generates a random email|
|NameFunctions|uniqueUsername|Generates a unique username|
|PhoneNumberFunctions|getOTP|Fetch OTP from an SMS|
|MailBoxFunctions|getEmailOTP|Fetch OTP from an email|
|MailBoxFunctions|getLinkFromContent|Fetch link from a piece of content|
|MailBoxFunctions|subjectVerification|Verify Subject of Email|
|MailBoxFunctions|contentVerification|Verify Content of Email|
|RandomStringFunctions|randomStringFromGivenCharactersWithLength|Generates a random string from the given set of characters|
|Number|random number|Generates a random number|
|Number|randomDigit|Generates random digits between 0-9
Number|randomDigitNotZero|Generates random digits between 1-9|
|Address|fullAddress|Generates random full address|
|Company|name|Generates random name|
|Company|suffix|Generates random suffix|
|Company|industry|Generates random industry name|
|Company|buzzword|Generates a buzzword|
|Company|catchphrase|Generates random catchphrase|
|DateFunctions|future|Generates future date|
|DateFunctions|current|Generates current date|
|DateFunctions|past|Generates past date|
|DateFunctions|between|Generates dates in between two dates|
|DateFunctions|birthday|Generates a random birthday|
|DateFunctions|Date before today|Generates a date which is before today’s date|
|DateFunctions|Date after today|Generate a date after today|
|DateFunctions|daysBeforeGivenDate|Generates a date which is before ‘x’ number of days from the given date|
|DateFunctions|daysAfterGivenDate|Generates a date which is ‘x’ days after the given date|
|DateFunctions|currentTime|Generates current time|
|Cookies|getCookieNames|Fetch all cookie names|
|Cookies|getCookieWithName|Fetch only the cookie whose name is given|




