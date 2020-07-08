const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    title: {
      type: String
    },
    theme:{
        type:String
    },
    location: {
      type: { type: String },
      coordinates: [Number],
    },
    eventDate: {
      type: Date
    },
    eventTime:{
      ///////////////////////////////////////////////////
    },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    participants: [{ type: Schema.Types.ObjectId, ref: "User" }]
  },

  {
    timestamps: true,
  }
);

eventSchema.index({ location: '2dsphere' });

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
