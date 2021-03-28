const Car = require("../models/car");
const mongoose = require('mongoose');
const { response, request } = require("express");


exports.add_car_to_client = async function (req, res = response) {
  
  let id = mongoose.Types.ObjectId(req.params.id);
  try {
    const car = new Car({ model: req.body.model, make:req.body.make,owner:id});  
    await car.save();
    res.send("User and car saved");
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};
