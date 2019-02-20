var mongoose = require('mongoose');

// Setup schema
var userSchema = mongoose.Schema({
    //_id: new mongoose.Types.ObjectId(),
    countrycode: {
      type: String,
      required: true
    },
    mobilenumber: {
        type: String,
        required: true
    },
    name: {
      type: String,
      required: true
    },
    reiterId: {
      type: String,
      required: true
    },
    email: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    logintype: String,
    fahrrad: String,
    company: String,
    clubname: String,
    licenceno: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export User
var Contact = module.exports = mongoose.model('user', userSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}