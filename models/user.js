var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let UserSchema = new Schema(
  {
    name: String,
    age: Number,
  },
  {
    toJSON: { virtuals: true },
  }
);

UserSchema.virtual("cars", {
  ref: "Car",
  localField: "_id",
  foreignField: "owner",
});

UserSchema.method.toJSON = function () {
  const {__v, name, ...car } = this.toObject();
  return car;
};
const User = mongoose.model("User", UserSchema);
module.exports = User;
