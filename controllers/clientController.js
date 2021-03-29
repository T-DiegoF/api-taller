const { response, request } = require("express");
const User = require("../models/user");

exports.index = function (req, res) {
  res.send("Home Page");
};

exports.clients_list = async function (req = request, res = response) {
  try {
    const clients = await User.find({});
    res.json(clients);
  } catch (error) {
    res.status(500).send("Something went wrong" + error);
  }
};

exports.client_create_post = async function (req = request, res = response) {
  try {
    const body = req.body;
    const client = new User(body);
    await client.save();
    res.status(201).send("OK");
  } catch (error) {
    res.status(500).send("Something went wrong" + error);
  }
};

exports.car_list_of_a_client = async function (req, res) {
  try {
    const user = await User.findById(req.params.id).populate("cars");
    res.send(user);
  } catch (err) {
    res.status(500).send("Something went wrong" + error);
  }
};
