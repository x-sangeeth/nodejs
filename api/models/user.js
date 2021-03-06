var mongoose = require('mongoose');

// Setup schema
var userSchema = mongoose.Schema({
    _id : ObjectID(),
    MobileNumber: {
        type: String,
        required: true
    },
    CountryCode: {
      type: String,
      required: true
    },
    LoginType: {
      type: String,
      required: true
    },
    IsActive: {
        type: Boolean
    },
    IsVerified: {
        type: Boolean
    },
    CreatedDate: {
        type: Date,
        default: Date.now
    }
});

// Export User
var Contact = module.exports = mongoose.model('User', userSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}