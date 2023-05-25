---
title: "Connect MongoDB & PostgreSQL Databases"
metadesc: "Install an addon to connect MongoDB and PostgreSQL databases in Testsigma. Learn how to set up a database connection to MongoDB in Testsigma Application"
noindex: false
order: 17.9
page_id: "Connect MongoDB & PostgreSQL Databases"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Connect MongoDB via addon"
  url: "#connect-mongodb-via-addon"
- type: link
  name: "Connect PostgreSQL via addon"
  url: "#connect-postgresql-via-addon"

---

---

You must install an addon to connect MongoDB and PostgreSQL databases in Testsigma. The addon comes with predefined NLPs, which you can use to connect the databases in your test steps.

---

## **Connect MongoDB via addon**

To set up a database connection to MongoDB in Testsigma, follow these steps:

1. Click **Addons** from the left sidebar menu.
2. Search for the **MongoDB_NLPs** addon from the **New & Updated Addons** and click **Install**. ![Install MongoDB Addon](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/mongodb_addon_install.png)
3. Once you install the **MongoDB_NLPs** addon, you can find the predefined NLPs in **Test Steps**. ![Use MongoDB in Test Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/mongodb_teststep.png)
4. The parameters available with NLPs and how to use them in Test Steps are shown below.

|Parameter|Description|Example Value|
|---|---|---|
|DBname|Collections are stored in a MongoDB database|e-commerce, blog, social-media|
|CollectionName|A group of MongoDB documents|users, products, orders|
|MongoDB_Connection|MongoDB connection connects to a MongoDB server or cluster|MongoClient, Mongoose|
|MongoDB_ConnectionURL|A URL-like string used to specify the address of a MongoDB server or cluster, as well as options for the connection|mongodb://localhost:27017/blog|

Here is a quick GIF demonstrating the above workflow:

![Connect MongoDB](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/mongodb.gif)

---

## **Connect PostgreSQL via addon**

To set up a database connection to PostgreSQL in Testsigma, follow these steps:

1. Click **Addons** from the left sidebar menu.
2. Search for the **PostgreSQL_Queries** addon from the **New & Updated Addons** and click **Install**. ![Install PostgreSQL Addon](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/postgresql_addon_install.png)
3. Once you install the **PostgreSQL_Queries** addon, you can find the predefined NLPs in **Test Steps**. ![Use POstgreSQL in Test Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/postgresql_teststep.png)
4. The parameters available with NLPs and how to use them in Test Steps are shown below.

|Parameter|Description|Example Value|
|---|---|---|
|Query|Executes a query on a PostgreSQL database|SELECT * FROM table_name;|
|Row_Count|Returns the number of rows in a result set|SELECT COUNT(*) FROM table_name;|
|DB_ConnectionURL|Creates a URL string for connecting to a PostgreSQL database|postgresql://user:password@localhost:5432/database_name|
|Variable-Name|Assigns a value to a variable|var_name = "some value"|
|Select-Query|Executes a SELECT query and returns the result set|SELECT column\_name FROM table\_name WHERE condition;|
|Expected-Value|Compares a result with an expected value|assert result == expected\_value, f"Expected {expected\_value}, but got {result}"|

Here is a quick GIF demonstrating the above workflow:

![Connect POstgreSQL](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/postgresql.gif)

---
