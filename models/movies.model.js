const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema(
  {
      title: {
        type: String,
        required:true
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
      min:1950,
      
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
