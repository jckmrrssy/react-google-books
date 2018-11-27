// Dependencies
const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs

// Connect to our Mongo database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactgooglebooks")

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
