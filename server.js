const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const app = express();

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const post = require("./routes/api/post");

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURI;

//connect to Mongo DB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//passport middleware
app.use(passport.initialize());

//Passport Config
require("./config/passport")(passport);
//Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/post", post);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
