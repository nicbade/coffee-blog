var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');


// REVIEW POST ROUTE
router.post('/', function (req, res) {
    if (req.isAuthenticated()) {
        // send back user object from database
        console.log('logged in', req.user);

        var newReview = req.body;
        console.log('addReview post was hit!', newReview);
        // Add an INSERT query
        pool.connect(function (errorConnectingToDatabase, client, done) {
            if (errorConnectingToDatabase) {
                //when connecting to database failed
                console.log('Error connecting to database', errorConnectingToDatabase);
                res.sendStatus(500);
            } else {
                // HAPPYPATH!
                client.query('INSERT INTO review (name, date, address, food, price, review) VALUES ($1, $2, $3, $4, $5, $6);', [newReview.shopName, newReview.date, newReview.address, newReview.food, newReview.shopPrice, newReview.review], function (errorMakingQuery, result) {
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
    } else {
        // failure best handled on the server. do redirect here.
        console.log('not logged in');
        // should probably be res.sendStatus(403) and handled client-side, esp if this is an AJAX request (which is likely with AngularJS)
        res.send(false);
    }
}); // end post route

// REVIEW GET ROUTE
router.get('/', function(req, res) {
    pool.connect(function(err, db, done) {
        if (err) {
            console.log('Error connecting to the DB', err);
            res.sendStatus(500);
            done();
            return;
        } // end error
        else {
            db.query('SELECT * FROM review', function(errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('Error making database query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                } // end if statement
            });
        } // end no error
    }); // end pool connect
}); // end get
module.exports = router;