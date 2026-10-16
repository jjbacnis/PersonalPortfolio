let mongoose = require("mongoose");

// Create a schema for the references collection
let referencesModel =  mongoose.Schema(
    {
        name: String,
        testimonial: String,
        position: String,
        company: String
    }
);
 // Remove the _id field when returning a JSON response
referencesModel.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) { 
        delete ret._id 
    }
});

// Export the model for use in other parts of the application
module.exports = mongoose.model("Reference", referencesModel);