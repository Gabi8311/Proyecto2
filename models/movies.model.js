const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema(
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
      actors: {
        type: [String],
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
);

const Movie = mongoose.model("Movie", moviesSchema);

module.exports = Movie;
