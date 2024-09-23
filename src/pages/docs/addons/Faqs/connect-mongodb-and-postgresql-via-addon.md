---
title: "Connect MongoDB & PostgreSQL Databases"
page_title: "Connecting MongoDB and PostgreSQL Databases Easily"
metadesc: "Install an addon to connect MongoDB and PostgreSQL databases to Testsigma. Learn how to set up a database connection to MongoDB in Testsigma Application."
noindex: false
order: 17.9
page_id: "Connect MongoDB & PostgreSQL Databases"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"    
- type: link
  name: "Connect MongoDB via addon"
  url: "#connect-mongodb-via-addon"
- type: link
  name: "Connect PostgreSQL via addon"
  url: "#connect-postgresql-via-addon"

---

---

Connecting MongoDB and PostgreSQL databases to Testsigma enhances your testing capabilities by allowing seamless interaction with these databases directly within your test cases. This integration enables you to execute queries, retrieve data, and validate results efficiently, thereby improving test accuracy and coverage while reducing manual effort in managing database interactions.

---

## **Prerequisites**

Before you proceed, ensure you know how to [install](https://testsigma.com/docs/addons/community-marketplace/) the community addon.

---

## **Connect MongoDB via addon**

To set up a database connection to MongoDB in Testsigma, follow these steps:

1. Click **Addons** from the left navigation bar.
2. Search for the **MongoDB_NLPs** addon from the **New & Updated Addons** and click **Install**. ![install mongodb addon](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/settup_mongo_db.png)
3. Once you install the **MongoDB_NLPs** addon, you can find the predefined NLPs in **Test Steps**. ![use mongodb nlp](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/use_mongodb_nlp.png)
4. The parameters available with NLPs and how to use them in Test Steps are shown below.

|Parameter|Description|Example Value|
|---|---|---|
|DBname|Collections are stored in a MongoDB database|e-commerce, blog, social-media|
|CollectionName|A group of MongoDB documents|users, products, orders|
|MongoDB_Connection|MongoDB connection connects to a MongoDB server or cluster|MongoClient, Mongoose|
|MongoDB_ConnectionURL|A URL-like string used to specify the address of a MongoDB server or cluster, as well as options for the connection|mongodb://localhost:27017/blog|

---

## **Connect PostgreSQL via addon**

To set up a database connection to PostgreSQL in Testsigma, follow these steps:

1. Click **Addons** from the left navigation bar.
2. Search for the **PostgreSQL_Queries** addon from the **New & Updated Addons** and click **Install**. ![install postgresql addon](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/install_postgresql_addon.png)
3. Once you install the **PostgreSQL_Queries** addon, you can find the predefined NLPs in **Test Steps**. ![use postgresql in test steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/use_postgresql_nlp.png)
4. The parameters available with NLPs and how to use them in Test Steps are shown below.

|Parameter|Description|Example Value|
|---|---|---|
|Query|Executes a query on a PostgreSQL database|SELECT * FROM table_name;|
|Row_Count|Returns the number of rows in a result set|SELECT COUNT(*) FROM table_name;|
|DB_ConnectionURL|Creates a URL string for connecting to a PostgreSQL database|postgresql://user:password@localhost:5432/database_name|
|Variable-Name|Assigns a value to a variable|var_name = "some value"|
|Select-Query|Executes a SELECT query and returns the result set|SELECT column\_name FROM table\_name WHERE condition;|
|Expected-Value|Compares a result with an expected value|assert result == expected\_value, f"Expected {expected\_value}, but got {result}"|


---
