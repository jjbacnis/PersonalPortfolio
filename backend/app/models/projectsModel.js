const mongoose = require('mongoose');
const projectsSchema =  new mongoose.Schema({
    title: {
        type: String
    },
    completion: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    }
});