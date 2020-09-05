const mongoose = require('mongoose');
const { validateEmail, validatePhone, emailValidate, phoneValidate } = require('../validators');

const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        required: true,
        mraEmailRecipient: true, // if this email can be used by sendEmail Action 
        validate: {
            validator: validateEmail,
            message: 'Please fill a valid email address',
        },
    },
});

module.exports = schema;