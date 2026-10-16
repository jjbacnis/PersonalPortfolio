let mongoose = require("mongoose");

let referencesModel =  mongoose.Schema(
    {
        name: String,
        testimonial: String,
        position: String,
        company: String
    }
);

referencesModel.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) { 
        delete ret._id 
    }
});

module.exports = mongoose.model("Reference", referencesModel);