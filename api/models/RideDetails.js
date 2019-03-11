var mongoose = require('mongoose');

// Setup schema
var userSchema = mongoose.Schema({
    _id : ObjectID(),
    RiderId: [],
    ClubId: [],
    RideNo: {
        type: String,
        required: true
    },
    ContactName: {
      type: String,
      required: true
    },
    ContactNumber: {
      type: String,
      required: true
    },
    RideName: {
        type: String
    },
    RideDetails: {
        type: String
    },
    From: {
        type: String
    },
    To: {
        type: String
    },
    RidingDate: {
        type: Date
    },
    RidingTime: {
        type: String  // Time
    },
    AssembleTime: {
        type: String  // Time
    },
    CreatedDate: {
        type: Date,
        default: Date.now
    },
    Expense: [
        {
            _id : ObjectID(),
            Item: {
                type: String,
                required: true
            },
            Amount: {
              type: Number,
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
var Contact = module.exports = mongoose.model('RideDetails', userSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}