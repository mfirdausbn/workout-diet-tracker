require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./db/db");



// import the routes from the different routers
const User = require("./router/users");
const Entry = require("./router/entries");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
connectDB(process.env.MONGODB_URI);

app.use("/admin", User);
app.use("/entry", Entry)

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});



