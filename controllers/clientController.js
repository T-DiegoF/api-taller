const { response, request } = require("express");
const client = require("../models/client");
const Client = require("../models/client");

exports.index = function (req, res) {
  res.send("NOT IMPLEMENTED: Site Home Page");
};

exports.clients_list = async function (req = request, res = response) {
  try {
    const clients = await Client.find({});
    res.json(clients);
  } catch (error) {
    console.log("Error en el clientController  : " + error);
  }
};

exports.client_create_post = async function (req = request, res = response) {
  const body = req.body;
  const client = new Client(body);
  await client.save();
  res.status(201).send("OK");
};

exports.client_put = async function (req, res = response) {
  try {
    const { _id } = req.params;
    const usuario = await Client.findByIdAndUpdate(
      _id,
      {
        $push: { cars: JSON.stringify(req.body) },
      },
      { useFindAndModify: true }
    );
    res
      .send(`the client ${usuario.nombre} have new car/s ${usuario.cars}`)
      .status(200);
  } catch (error) {
    console.log("error : " + error);
  }




};
