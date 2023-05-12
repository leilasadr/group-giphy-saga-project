const express = require('express');
const router = new express.Router();
const axios = require('axios');
require('dotenv').config();

router.get('/', (req, res) => {
    const search = req.query.search;
    const GiphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${search}&limit=20&rating=g`
    axios.get(GiphyUrl)
      .then(response => {
        res.sendStatus(200);
      })
      .catch(err => {
        console.error(err);
        res.sendStatus(500);
      });
});

module.exports = router;
