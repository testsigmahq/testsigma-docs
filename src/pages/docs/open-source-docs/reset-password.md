---
title: "Reset Password"
page_title: "How to reset password in Testsigma Community Edition"
order: 33.4
page_id: "Reset password"
metadesc: "Learn steps in detail on how to reset username and password in Testsigma Community Edition. Follow these steps to reset username and password."
search_keyword: "Reset password"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisite (zip)"
  url: "#zip-prerequisite"
- type: link
  name: "Reset password (zip)"
  url: "#zip-reset-passwrod"
- type: link
  name: "Reset User Name (zip)"
  url: "#zip-reset-user-name"
- type: link
  name: "Prerequisite (Docker)"
  url: "#docker-prerequisite"
- type: link
  name: "Reset password (Docker)"
  url: "#docker-reset-passwrod"
- type: link
  name: "Reset User Name (Docker)"
  url: "#docker-reset-user-name"
---

---

## [(I). Via Downloadable package](#)

---

> ## [Prerequisite](#zip-prerequisite)
>   1. Download the testsigma_opensource latest build [click here](https://testsigma.com/docs/getting-started/setup/downloadable-package/)
>   2. Run nginx server
>   3. Run testsigma server
>   4. Register with username and password

---

## [If you want to reset the password follow the steps below:](#zip-reset-passwrod)

  1. Stop all the servers currently running.(i.e, nginx and testsigma server)
  2. Navigate to testsigma server folder from downloads
  3. Go to authentication properties
  4. And Change the password (authentication.form.password = type your new password)
  5. Save the file
  6. Start the nginx
  7. Testsigma servers and login with new credentials.
  
---

## [If you want to reset the username :](#zip-reset-user-name)

  1. Stop all the servers currently running.(i.e, nginx and testsigma server)
  2. Navigate to testsigma server folder from downloads 
  3. Go to authentication properties
  4. Change the username (authentication.form.username = enter new user name)
  5. Save the file
  
<iframe src="https://docs.testsigma.com/videos/Troubleshooting/Setup/ResetPassword/first.mp4" width="300" height="200"></iframe>


## [(II). Downloaded Via Docker](#)

---

## [Prerequisite](#docker-prerequisite)
  1. Download the docker  [click here](https://testsigma.com/docs/open-source-docs/docker/)
  2. Register with username and password

---

## [If you want to reset the password follow the steps below:](#docker-reset-passwrod)
  1. Go to docker the folder
  2. Go to the  ts-data folder
  3. Edit the Authentication properties file
  4. Change the password (authentication.form.password = type your new password)
  5. Save the file

---

## [If you want to reset the username :](#zip-reset-user-name)

  1. Go to docker the folder
  2. Go to the  ts-data folder
  3. Edit the Authentication properties file
  4. change the username (authentication.form.username = enter new user name)
  5. Save the file
  
<iframe src="https://docs.testsigma.com/videos/Troubleshooting/Setup/ResetPassword/second.mp4" width="300" height="200"></iframe>

---