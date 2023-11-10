const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const { allRouter } = require("./routes/allRoutes")

const app = express();
app.use(express.json());
let corspolicy = { origin: process.env.FRONTEND_URL }
app.use(cors(corspolicy));

// const port = 3001;

const db = module.exports = async () => {
  try {
    await mongoose.connect('mongodb+srv://atlascluster.5m8bpqm.mongodb.net/realgrande?retryWrites=true&w=majority', { user: process.env.DBUSERNAME, pass: process.env.DBPASSWORD, useNewUrlParser: true, useUnifiedTopology: true })
    // mongoose.connect('mongodb+srv://mern:forFSD15@atlascluster.5m8bpqm.mongodb.net/?retryWrites=true&w=majority')
    console.log("MongoDB Connection is Successful")
  } catch (error) {
    console.log(error);
    console.log("MongoDB Connection is failed")
  }
}
db();

app.use('/', (req, res, next) => {
  console.log('A new request received at ' + new Date(Date.now()));
  next();
});

app.use('/', allRouter)

app.listen(process.env.PORT, () => {
  console.log(`App listening at http://localhost:${process.env.PORT}`);
});
