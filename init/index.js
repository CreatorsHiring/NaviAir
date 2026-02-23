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
    await listing.deleteMany({});
    await listing.insertMany(initData.data);
    console.log("Data initialized");
}
initDB();
