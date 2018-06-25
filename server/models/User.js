//imports mongoose and extracts Schema into it's pwn variable
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

//creates a new mongoose schema 
const UserSchema = new Schema({

    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },

    social: {
        facebook: { type: String, required: false },
        twitter: { type: String, required: false },
        linkedIn: { type: String, required: false },
        gitHub: { type: String, required: false },
        portfolio: { type: String, required: false }
    },

    blogs: [{ type: Schema.Types.ObjectId, ref: 'Blog' }]
    
});

module.exports = mongoose.model('User', UserSchema);