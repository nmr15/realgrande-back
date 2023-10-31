const express = require("express");
const multer = require("multer");
let getField = multer();
let allRouter = express.Router();
const { HouseModel, UserModel, EnquiryModel } = require("../models/allSchemas");

// Get all houses
allRouter.get("/", async(req, res) =>
{
  const housesData = await HouseModel.find({});
  try
  {
    res.send(housesData);
  }
  catch(error)
  {
    res.status(500).send(error);
  }
});

// Signup - store user data
allRouter.post("/signup", getField.none(), async (req, res) => {
  
  try {
    const newUser = new UserModel(req.body)
    console.log(req.body)
    let user = await newUser.save();
    user = user.toObject();
    res.send(user);
  }
  catch (error) {
    console.log(error)
    res.status(500).send(error);
  }
});

allRouter.post("/login", getField.none(), async (req, res) => {

  try 
  {
    let user = await UserModel.findOne({email:req.body.email, password:req.body.password});
    res.send(user);
    console.log('Log in successful')
  }
  catch (error) {
    console.log(error)
    res.status(500).send(error);
  }
});

allRouter.post("/register", getField.none(), async (req, res) => {

  try {
    const newEnquiry = new EnquiryModel(req.body)
    console.log(req.body)
    let enquiry = await newEnquiry.save();
    enquiry = enquiry.toObject();
    res.send(enquiry);
  }
  catch (error) {
    console.log(error)
    res.status(500).send(error);
  }
});

// To get all the enquiry information
allRouter.get("/allenquiries", async (request, response) => {
  const enquiryData = await EnquiryModel.find({});
  try {
    response.send(enquiryData);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = { allRouter };