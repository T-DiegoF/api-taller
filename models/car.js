const { Schema, model } = require("mongoose");

let CarSchema = new Schema({
  model: { type: String },
  colour: { type: String },

  client: {
    type: Schema.Types.ObjectId,
    ref: "Client",
  },
});

CarSchema.methods.toJSON = function () {
  const { _v, ...data } = this.toObject();
  return data;
};
module.exports = model("Car", CarSchema);
