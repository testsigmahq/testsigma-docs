---
title: "Storage Types Supported in Testsigma"
page_title: "How to configuration Storage Types in Testsigma Community Edition"
order: 19.5
page_id: "Storage Types Supported in Testsigma"
metadesc: "How to configuration Storage Types in Testsigma Community Edition"
search_keyword: "Storage Types"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Why is storage required?"
  url: "#why-storage"
- type: link
  name: "Types of storage allowed in Testsigma open source"
  url: "#storage-types"
---

---
## [Why is storage required?](#why-storage)

Storage allows you to access and store files on your preferred already integrated cloud storage provider. You can access files from Testsigma when needed and also push execution details to your cloud storage for downstream use.

---
## [Prerequisite](#prerequisite)
1. login with valid credentials
2. goto settings >> storage

![Storage Configuration](https://docs.testsigma.com/images/Integrations/StoragTypes/first.png)

---
## [Types of storage allowed in Testsigma open source](#storage-types)

1. [On premise](#on-premise)
2. [Testsigma cloud](#testsigma-cloud)
3. [Amazon s3](#amazon-s3)
4. [Azure Cloud](#azure-cloud)

---
## [On premise:](#on-premise)

This is your local server storage to store datasets like logs,files and screenshots. When you click on view details, Testsigma will show the local  directory where all files are stored.

![On premise](https://docs.testsigma.com/images/Integrations/StoragTypes/secong.png)

## [Testsigma cloud:](#testsigma-cloud)

This is Testsigma own hosted cloud storage. You can push and access files from the Testsigma cloud just like your local storage or any other cloud provider.

---
## [Amazon s3](#amazon-s3)
If you already have a subscription for AWS S3 storage, you can use the same storage with Testsigma. Testsigma can access these files during execution and also push screenshots or logs to S3 for your team

![Amazon S3 as Storage](https://docs.testsigma.com/images/Integrations/StoragTypes/third.png)

- Bucket Name: Name of your S3 bucket in one of the AWS Regions.
- Endpoint: It is the address/url of the server where you want to store
- Region: Region your bucket is set up in, you can mention the region code of the bucket configured in AWS.
- Access key: It's a common access key used to get connected to their respective bucket.
- Secret key: This is double authentication verification key. It’s the unique key that need to connect to their respective bucket.


![Amazon S3 as Storage](https://docs.testsigma.com/images/Integrations/StoragTypes/fourth_new.png)

---
## [Azure cloud:](#azure-cloud)

If you already have an Azure cloud account, you can use the subscription with Testsigma to store and access files. Testsigma can access files stored here and push execution files like logs and screenshots here for storage.

![Azure Cloud as Storage](https://docs.testsigma.com/images/Integrations/StoragTypes/fifth.png)

- Container Name: Container name which is created/present in Azure storage account.
- Connection String: A connection string includes the authorization information required for your application to access data in an Azure Storage account.

![Azure Cloud as Storage](https://docs.testsigma.com/images/Integrations/StoragTypes/sixth_new.png)

<iframe src="https://docs.testsigma.com/videos/Integrations/Storagetypes/video_new.mp4" width="300" height="200"></iframe>





