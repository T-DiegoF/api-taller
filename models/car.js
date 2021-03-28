var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let CarSchema = new Schema({
  make:String,
  model:String,
  owner:{
      type:Schema.Types.ObjectId,
      ref:"User"
  },
  repairs: [{
    type: Array
}]
})

CarSchema.methods.toJSON = function () {
  const {__v,owner, ...car } = this.toObject();
  return car;
};

const Car = mongoose.model("Car",CarSchema)
module.exports = Car