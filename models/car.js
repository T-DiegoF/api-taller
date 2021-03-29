var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let CarSchema = new Schema({
  model: { 
    type: String, 
    required: true 
  },
  year: {
    type: Number
  },
  owner: { 
    type: Schema.Types.ObjectId, 
    ref: "User" },
  repairs: [{ 
    type: Array }]
}
);

CarSchema.methods.toJSON = function () {
  const { __v, ...car } = this.toObject();
  return car;
};

const Car = mongoose.model("Car", CarSchema);
module.exports = Car;
