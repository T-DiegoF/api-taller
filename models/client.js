const { Schema, model } = require("mongoose");

let ClientSchema = new Schema({
  nombre: {
    type: String,
  },
  apellido: {
    type: String,
  },
  cars: [{ type: Array }],
});

ClientSchema.methods.toJSON = function () {
  const {_v, ...client } = this.toObject();
  return client;
};

module.exports = model("Client", ClientSchema);
