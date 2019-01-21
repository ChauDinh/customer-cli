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
const addCustomer = customer => {
 Customer.create(customer).then(customer => {
  console.info("New Customer Added...");
  db.close();
 })
}

// Find customer
const findCustomer = name => {
 // Make case insensitive
 const search = new RegExp(name, "i");
 Customer.find({ $or: [{ firstname: search }, { lastname: search }] })
  .then(customer => {
   console.info(customer);
   console.info(`${customer.length} matches`);
   db.close();
  })
}

// Update Customer
const updateCustomer = (_id, customer) => {
 Customer.update({ _id }, customer)
  .then(customer => {
   console.info("Customer updated");
   db.close();
  });
};

// Remove customer
const removeCustomer = _id => {
 Customer.remove({ _id })
  .then(customer => {
   console.info("Customer removed!");
   db.close();
  });
};

// List all customers
const listCustomer = () => {
 Customer.find()
  .then(customers => {
   console.info(customers);
   console.info(`${customers.length} matches`);
   db.close();
  })
}

module.exports = {
 addCustomer,
 findCustomer,
 updateCustomer,
 removeCustomer,
 listCustomer
};