// this file is used to initialize the database with some sample data, it connects to the database, deletes all the existing data and then inserts the sample data into the database
// imagine this file as an injector which injects the data to our db
const mongoose = require("mongoose");
const initData = require("./data.js"); 
const listing = require("../models/listings.js");

main().then(() =>{
    console.log("Connected to MongoDB");
}).catch((err) =>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/NaviAir");
}

const initDB =async () => {
    await listing.deleteMany({}); // here the listing is the model name or the collection in our database. 
    await listing.insertMany(initData.data);
    console.log("Data initialized");
}
initDB();
