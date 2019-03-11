var mongoose = require('mongoose');

// Setup schema
var clubSchema = mongoose.Schema({
    _id : ObjectID(),
    ReiterId: [],
    RideId: [],
    CreatedDate: {
        type: Date,
        default: Date.now
    }    
});
// Export clubSchema
var Contact = module.exports = mongoose.model('ReiterRide', clubSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}