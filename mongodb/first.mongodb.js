// Connect to MongoDB and perform basic operations

// Open terminal and run the following commands:

mongosh

// Show current databases
// similar to "show databases" in SQL
// check current db is: db
show dbs

// Switch to (or create) a database
//name it "newdb"
use newdb


// Create a collection named "userdata"
//like a table in SQL
db.createCollection("userdata")


// Show collections in the current database
show collections


// Insert a document (record) into the collection
//like an "insert into" in SQL
db.userdata.insertOne({ name: "John", age: 30, city: "New York" })

// Query the collection to find all documents
//like a "select * from" in SQL
db.userdata.find()


// Update a document in the collection
//like an "update" in SQL
db.userdata.updateOne({ name: "John" }, { $set: { age: 31 }})

// Insert multiple documents
//like "insert into" with multiple values in SQL
db.userdata.insertMany([
  { name: "Jane", age: 25, city: "Chicago" },
  { name: "Mike", age: 32, city: "San Francisco" }
])

// Query documents with a condition
//like a "select * from ... where ..." in SQL

db.userdata.find({ age: { $gt: 28 } })

// Delete a document from the collection
//like a "delete from ... where ..." in SQL
db.userdata.deleteOne({ name: "Mike" })

// Final query to see all documents
db.userdata.find()  

// Drop the collection
//like "drop table" in SQL
db.userdata.drop() 

// Drop the database
//like "drop database" in SQL
db.dropDatabase()  // Drop the database

// Exit the MongoDB shell
exit
