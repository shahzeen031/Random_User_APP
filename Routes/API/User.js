const express = require('express');
const router = express.Router();
const request = require('request');
const axios = require('axios');
// @route    GET api/User
// @desc     Get User Imformation
// @access   Public
router.get('/', async (req, res) => {
    try {   
    // set url as constant
        const URL = 'https://randomuser.me/api/1.3/';

        axios
        .get(URL)
        .then(response => {
            
            res.json(response.data.results[0]);
        })
        .catch(error => {
            console.log(error);
        });
       
     
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

  module.exports = router;