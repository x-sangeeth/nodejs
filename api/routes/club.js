const express = require('express');
const router = express.Router();
const authorize = require('../middleware/authorize');
const Club = require('../models/club')

router.post('/signup', (req, res, next) => {    
    let club = new Club(req.body);    
    club
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Signup Successfylly',
                createdUser: club
            })
        })
        .catch(err => console.log(err));

});
router.get('/', (req, res, next) => {
    Club.find(function (err, club) {
        if (err) {
            console.log(err);
        }
        else {            
            res.status(200).json({
                users: club
            });
        }
    });
});
router.get('/:id', (req, res, next) => {
    let id = req.params.id;
    Club.findById(id, function (err, club){
        res.json(club);
    });
});

router.get('/delete/:id', (req, res, next) => {
    Club.findByIdAndRemove({_id: req.params.id}, function(err, club){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

//  Defined update route
router.post('/update/:id', (req, res, next) => {
    Club.findById(req.params.id, function(err, next, club) {
    if (!club)
      return next(new Error('Could not load Document'));
    else {
        club.clubname = req.body.clubname;
        club.licenceno = req.body.licenceno;
        club.location = req.body.location;
        club.create_date = Date.now;

        club.save().then(club => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

module.exports = router;