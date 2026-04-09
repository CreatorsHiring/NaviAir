const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({ //schema is like skeleton of the data, it defines the structure of the data and the types of the data
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "https://plus.unsplash.com/premium_photo-1738779001856-61660b4ebeec?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set: (v) => v === "" ?
         "https://plus.unsplash.com/premium_photo-1738779001856-61660b4ebeec?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
         : v,
    },
    price: {
        type: Number,
        required: true
    },
    location : String,
    country: String
});

const Listing = mongoose.model("Listing", listingSchema); // this is the model, its the collection of the data in our db
module.exports = Listing; // here we are exporting the model (collection) so that we can perform CRUD operations