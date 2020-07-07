const express = require('express');
const router = express.Router();
const Phrase = require("../models/phrases.model")
//List all phrases
router.get('/', (req, res, next) => {
    
    Phrase.find()
        .then(allPhrases => res.render('phrases/phrases-list', {allPhrases}))
        .catch(err => next(err))
        
})
      
module.exports = router