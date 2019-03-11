var mongoose = require('mongoose');

// Setup schema
var clubSchema = mongoose.Schema({
    _id : ObjectID(),
    UserId: [],
    ClubName: {
        type: String,
        required: true
    },
    RegNumber: {
      type: String,
      required: true
    },
    Make: {
      type: String,
      required: true
    },
    LocationLat: {
        type: String
    },
    LocationLong: {
        type: String
    },
    IsVarified: {
        type: Boolean
    },    
    CreatedDate: {
        type: Date,
        default: Date.now
    }    
});
// Export clubSchema
var Contact = module.exports = mongoose.model('ClubDetails', clubSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}