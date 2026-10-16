const mongoose = require("mongoose");

const referenceSchema = new mongoose.Schema(
{
    name: {
        type: String
    },
    
    testimonial: {
        type: String
    },
    position: {
        type: String
    },

    company: {
        type: String
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Reference", referenceSchema);