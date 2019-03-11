var mongoose = require('mongoose');

// Setup schema
var clubSchema = mongoose.Schema({
    _id : ObjectID(),
    ClubId: [],
    RiderId: [],
    IsApproved: {
      type: Boolean,
      required: true
    },
    IsBlocked: {
        type: Boolean,
        required: true
    },
     CreatedDate: {
        type: Date,
        default: Date.now
    }    
});
// Export clubSchema
var Contact = module.exports = mongoose.model('ClubMember', clubSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}