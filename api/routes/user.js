const express = require('express');
const router = express.Router();
const authorize = require('../middleware/authorize');
const User = require('../models/user')

router.post('/signup', (req, res, next) => {    
    let user = new User(req.body);    
    user
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Signup Successfylly',
                createdUser: user
            })
        })
        .catch(err => console.log(err));

});
router.get('/', (req, res, next) => {
    User.find(function (err, user) {
        if (err) {
            console.log(err);
        }
        else {            
            res.status(200).json({
                users: user
            });
        }
    });
});
router.get('/:id', (req, res, next) => {
    let id = req.params.id;
    User.findById(id, function (err, user){
        res.json(user);
    });
});

router.get('/delete/:id', (req, res, next) => {
    User.findByIdAndRemove({_id: req.params.id}, function(err, user){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

//  Defined update route
router.post('/update/:id', (req, res, next) => {
    User.findById(req.params.id, function(err, next, user) {
    if (!user)
      return next(new Error('Could not load Document'));
    else {
        user.countrycode = req.body.countrycode;
        user.mobilenumber = req.body.mobilenumber;
        user.name = req.body.name;
        user.email = req.body.email;
        user.location = req.body.location;
        user.logintype = req.body.logintype;
        user.reiterId = req.body.reiterId;
        user.fahrrad = req.body.fahrrad;
        user.fahrradno = req.body.fahrradno;
        user.company = req.body.company;
        user.clubname = req.body.clubname;
        user.licenceno = req.body.licenceno;

        user.save().then(user => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

module.exports = router;