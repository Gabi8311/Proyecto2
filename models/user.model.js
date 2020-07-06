const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    password: String,
    role: {
        type: String,
        enum: ['ADMIN','USER'],
        default: "USER"
      },
      myEvents: [{ type: Schema.Types.ObjectId, ref: "Event" }],
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User

///Lista de favoritos

//Modelo Evento{}