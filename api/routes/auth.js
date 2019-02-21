const express = require('express');
const SendOtp = require('sendotp');
const router = express.Router();

const jwt = require('jsonwebtoken');

//const sendOtp = new SendOtp('262378AvkuPUFROYXD5c61b7a4');
const sendOtp = new SendOtp('262378AvkuPUFROYXD5c61b7a4', 'Otp for your order is {{otp}}, please do not share it with anybody');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'get api'
    });
});

router.post('/register', (req, res, next) => {
    const auth = {
        mobilenumber: req.body.mobilenumber,
        countrycode: req.body.countrycode
    }
    const phone = auth.countrycode + auth.mobilenumber;
    sendOtp.send(phone, "REITER", function (error, data) {
        console.log(data);
    });
    sendOtp.setOtpExpiry('1440'); //in minutes
    
    const response ={
        message: "OTP sent succesfully",
        requestid:'1233'
    }

    res.status(200).json({
        createOTP: response
    });
});

router.post('/verifyotp', (req, res, next) => {
    const authdetails = {
        otp: req.body.otp,
        mobilenumber: req.body.mobilenumber,
        countrycode: req.body.countrycode
    }

    const phone = authdetails.countrycode + authdetails.mobilenumber;
    sendOtp.verify(phone, authdetails.otp, function (error, data) {
        console.log(data); // data object with keys 'message' and 'type'
        if(data.type == 'success') { 

            if (typeof localStorage === "undefined" || localStorage === null) {
                var LocalStorage = require('node-localstorage').LocalStorage;
                localStorage = new LocalStorage('./data');
            }
            
            var users = [];
            users.push(authdetails);
            users.push(JSON.parse(localStorage.getItem('userauth')));
            localStorage.setItem('userauth', JSON.stringify(users));

            const token = jwt.sign (
                { mobilenumber: authdetails.mobilenumber}, process.env.JWT_KEY, { expiresIn: "365d" }            
            );

            res.status(200).json({
                message: 'OTP verified successfully',
                token: token
            });

        }
        if(data.type == 'error') {
            res.status(500).json({
                message: 'OTP verification failed'
            });
        }
      });
    
});

module.exports = router;