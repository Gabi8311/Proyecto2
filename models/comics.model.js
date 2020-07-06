const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const comicSchema = new Schema(
  
  {
    title: {
      type: String,
    },
    coverImg: {
      type: String,
    },
    description: {
      type: String,
        },
    year: {
      type: Number,
    },
    comments:{
      type:[String]
    }
  },
  {
    timestamps: true,
  }
)

const Comic = mongoose.model("Comic", comicSchema);

module.exports = Comic;