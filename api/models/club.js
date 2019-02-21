var mongoose = require('mongoose');

// Setup schema
var clubSchema = mongoose.Schema({
    clubname: {
      type: String,
      required: true
    },
    licenceno: {
        type: String,
        required: true
    },
    location: {
      type: String,
      required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export clubSchema
var Contact = module.exports = mongoose.model('club', clubSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}