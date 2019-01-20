const mongoose = require("mongoose");

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;

// Connect to DB
const db = mongoose.connect("mongodb://localhost:27017/customer-cli", {
 useMongoClient: true
});

// Import model
const Customer = require("./Model/customer");

// Add customer


// Find customer

