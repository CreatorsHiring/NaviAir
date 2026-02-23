const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listings"); // it is the schema of our database
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

main().then(() =>{
    console.log("Connected to MongoDB");
}).catch((err) =>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/NaviAir");
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

//index route
app.get("/listings", async  (req,res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
});

//new route
app.get("/listings/new", async (req,res) => {
    res.render("listings/new.ejs");
});

//create route
app.post("/listings", async (req,res) =>{
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
});

//show route(Dynamic route)
app.get("/listings/:id",async (req,res) => {
    const {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
});

//Edit Route
app.get("/listings/:id/edit",async (req,res) => {
    const {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
});

//Update Route
app.put("/listings/:id",async (req,res) => {
    const {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/${id}`);
});

//Delete Route
app.delete("/listings/:id", async (req,res)=>{
    const {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
});


// app.get("/ListingTest", async (req, res) => {
//     let sampleListing = new Listing({
//         title: "My Villa",
//         description: "Villa next to beach",
//         price: 3200,
//         location: "some random beach",
//         country: "USA"
//     });
//     await sampleListing.save();
//     res.send("Listing saved to database");
// });

app.listen(3000, () => {
    console.log("Server started on port 3000");
}); 