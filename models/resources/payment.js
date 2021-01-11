var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schema = new Schema(
  {
    enrollment: {type: Schema.Types.ObjectId, ref: 'Enrollment', required: true},
    price: { type: String, required: true },
    transLogP: { type: String, required: true },
    transLogA: { type: String, required: true },
    status: {type: String, required: true},
    notes: {type: String, textarea: true},
  },
  {
    timestamps: true
  }
);

module.exports = schema;
