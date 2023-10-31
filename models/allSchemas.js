const mongoose = require("mongoose");

const HouseSchema = new mongoose.Schema(
{
  _id: Number,
  address: String,
  county: String,
  description: String,
  price: Number,
  photo: String
});

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      index: {unique:true}
    },
    password: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Rather Not Say"],
      default: "Rather Not Say"
    },
    role: {
      type: String,
      enum: ["customer", "realtor"],
      default: "customer"
    }
  });

  const EnquirySchema = new mongoose.Schema(
  {
    ename:{
      type:String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    remarks: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    },
  });

const HouseModel = mongoose.model('House', HouseSchema);
const UserModel = mongoose.model('User', UserSchema);
const EnquiryModel = mongoose.model('Enquiry', EnquirySchema);
module.exports = { HouseModel, UserModel, EnquiryModel };