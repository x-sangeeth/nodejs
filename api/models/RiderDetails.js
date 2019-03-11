var mongoose = require('mongoose');

// Setup schema
var userSchema = mongoose.Schema({
    _id : ObjectID(),
    UserId: [],
    FullName: {
        type: String,
        required: true
    },
    RiderName: {
      type: String,
      required: true
    },
    EmailId: {
      type: String,
      required: true
    },
    LocationLat: {
        type: String
    },
    LocationLong: {
        type: String
    },
    CreatedDate: {
        type: Date,
        default: Date.now
    },
    BikeDetails: [        
       {  
            _id : ObjectID(),
            Make: {
                type: String,
                required: true
            },
            Model: {
                type: String,
                required: true
            },
            ModelName: {
                type: String,
                required: true
            },
            RegistrationNumber: {
                type: String,
                required: true
            },
            RidingType: {
                type: String,
                required: true
            },
            IsVerified: {
                type: Boolean,
                required: true
            },
            CreatedDate: {
                type: Date,
                default: Date.now
            }
        }
    ]
});

// Export User
var Contact = module.exports = mongoose.model('RiderDetails', userSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}