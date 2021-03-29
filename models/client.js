var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let ClientSchema = new Schema(
  {
    name: { type: String, required: true },
    last_name: { type: String, required: true }
  },
  
  {
    toJSON: { virtuals: true },
  }
);

ClientSchema.virtual("cars", {
  ref: "Car",
  localField: "_id",
  foreignField: "owner",
}); 

ClientSchema.method.toJSON = function () {
  const { __v, name, ...car } = this.toObject();
  return car;
};
const Client = mongoose.model("Client", ClientSchema);
module.exports = Client;
