var mongoose = require('mongoose');

// Setup schema
var otpsSchema = mongoose.Schema({
    _id : ObjectID(),
    UserId: [],
    JWTToken: {
        type: String,
        required: true
    },
    CreatedDate: {
        type: Date,
        default: Date.now
    }
});
// Export opts
var Contact = module.exports = mongoose.model('Session', otpsSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}