const Car = require("../models/car");
const mongoose = require("mongoose");
const { response, request } = require("express");

exports.add_car_to_client = async function (req, res = response) {
  let id = mongoose.Types.ObjectId(req.params.id);
  try {
    const car = new Car({
      model: req.body.model,
      year: req.body.year,
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

exports.get_repairs = async function (req, res) {
  try {
    let id = mongoose.Types.ObjectId(req.params.id);
    const data = await Car.findById(id);
    res.json(data.repairs);
  } catch (error) {
    res.status(500).send("Something went wrong" + error);
  }
};

exports.get_car_order = async function (req, res) {
  try {
    let arrayRepairs = [];
    const data = await Car.find({}).sort("date");
    //compruebo si el array reparaciones tiene objetos, para evitar devolver los vacios en la vista en caso que no tengan reparaciones 
    data.forEach((element) => {
      if (element["repairs"].length > 0) {
        arrayRepairs.push(element["repairs"]);
      }
    });
    res.json(arrayRepairs);
  } catch (error) {}
};
