const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required:true
    },
    theme:{
        type:String,
        required:true
    },

    locationName:{
      type: String,
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    },
    
    eventDate: {
      type: Date,
      default:Date.now
    },
    
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    
    participants: [{ type: Schema.Types.ObjectId, ref: "User" }]
  },

  {
    timestamps: true,
  }
)

eventSchema.index({ location: '2dsphere' });

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
