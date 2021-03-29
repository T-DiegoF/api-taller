var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let CarSchema = new Schema({
  model: {
    type: String,
    required: true,
  },
  
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  repairs: [{
      description:{type: String},
      date: {type:Date, default:Date.now}
    },
  ],
  year: {
    type: Number,
    required: true,
  }


});

CarSchema.methods.toJSON = function () {
  const { __v, ...car } = this.toObject();
  return car;
};

module.exports  = mongoose.model("Car", CarSchema);
