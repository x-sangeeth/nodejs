// var mongoose = require('mongoose');
// // Setup schema
// var otpsSchema = mongoose.Schema({
//    // _id: new mongoose.Types.ObjectId(),
//     mobilenumber: {
//         type: String,
//         required: true
//     },
//     otp: {
//       type: String,
//       required: true
//     },
//     Isexpired: {
//       type: Boolean
//     },
//     Isverified: {
//         type: Boolean
//       },
//     attempts: {
//         type: Number
//       },
//     create_date: {
//         type: Date,
//         default: Date.now
//     },
//     create_time: {
//         type: Date
//     }
// });
// // Export opts
// var Contact = module.exports = mongoose.model('otps', otpsSchema);
// module.exports.get = function (callback, limit) {
//     Contact.find(callback).limit(limit);
// }