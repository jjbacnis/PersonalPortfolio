const mongoose = require('mongoose');
const usersSchema =  new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    created: {
        type: Date
    },
    updated: {
        type: Date
    }
});