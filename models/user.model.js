const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, minlength: 8 },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
    myEvents: [{ type: Schema.Types.ObjectId, ref: "Event" }],
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model("User", userSchema);

module.exports = User;
