const express = require('express');
const router = express.Router();
const authorize = require('../middleware/authorize');
const User = require('../models/user')

//const User = require('../models/user');

router.post('/signup', (req, res, next) => {
    
    const user = new User({
       // _id: new mongoose.Types.ObjectId(),
        countrycode: req.body.countrycode,
        mobilenumber: req.body.mobilenumber,
        name: req.body.name,
        email: req.body.email,
        location:req.body.location,
        logintype: req.body.logintype,
        reiterId: req.body.reiterId,
        fahrrad: req.body.fahrrad,
        fahrradno: req.body.fahrradno,
        company: req.body.company,
        clubname: req.body.clubname,
        licenceno: req.body.licenceno
    });
    
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
    if (typeof localStorage === "undefined" || localStorage === null) {
        var LocalStorage = require('node-localstorage').LocalStorage;
        localStorage = new LocalStorage('./scratch');
    }
    var user = localStorage.getItem('user');
    res.status(200).json({
        message: user
    });
});
// router.post('/signup', (req, res, next) => {
    
//     const user = new User ({
//         countrycode: req.body.countrycode,
//         mobilenumber: req.body.mobilenumber,
//         name: req.body.name,
//         // email: req.body.email,
//         // location:req.body.location,
//         // logintype: req.body.logintype,
//         // reiterId: req.body.reiterId,
//         // fahrrad: req.body.fahrrad,
//         // fahrradno: req.body.fahrradno,
//         // company: req.body.company,
//         // clubname: req.body.clubname,
//         // licenceno: req.body.licenceno

//     });
 
//     user.save()
//         .then(result => {
//             res.status(201).json({
//                 message: 'Signup Successfylly'
//             })
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({
//                 error: err
//             })
//         });
// });






module.exports = router;