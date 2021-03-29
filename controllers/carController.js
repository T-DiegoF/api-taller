const Car = require("../models/car");
const mongoose = require("mongoose");
const { response, request } = require("express");

exports.add_car_to_client = async function (req, res = response) {
  let id = mongoose.Types.ObjectId(req.params.id);
  try {
    const car = new Car({
      model: req.body.model,
      make: req.body.make,
      owner: id,
    });
    await car.save();
    res.send("User and car saved");
  } catch (err) {
    console.log("Error  : " + err);
  }
};

exports.update_car = async function (req, res) {
  (query = { _id: req.params.id }),
    (update = {
      $push: { repairs: req.body },
    }),
    (options = { upsert: true });

  Car.findOneAndUpdate(query, update, options, function (err, data) {
    if (err) {
      return res.status(500).send(err);
    }
    if (!data) {
      return res.status(404).end();
    }
    return res.status(200).send(data);
  });
};

exports.order_for_date_repairs = async function (req, res) {};
