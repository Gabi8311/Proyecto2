const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const phrasesSchema = new Schema(
    {
        title:
            { type: String }
    }, { timestamps: true })

const Phrase = mongoose.model("Phrase", phrasesSchema);

module.exports = Phrase;
