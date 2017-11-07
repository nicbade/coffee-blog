var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');


// REVIEW POST ROUTE
router.post('/', function(req, res) {
    var newReview = req.body;
    console.log('addReview post was hit!', newReview);
    // Add an INSERT query
    pool.connect(function(errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            //when connecting to database failed
            console.log('Error connecting to database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            // HAPPYPATH!
            client.query('INSERT INTO review (name, date, address, food, price, review) VALUES ($1, $2, $3, $4, $5, $6);', [newReview.shopName, newReview.date, newReview.address, newReview.food, newReview.shopPrice, newReview.review], function(errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('Error making database query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(201);
                }
            }); // end client.query
        }
    }); // end pool.connect
}); // end post route
module.exports = router;