let ReferencesModel = require("../models/referencesModel");

// Controller function for adding a new reference
module.exports.processAdd = async function (req, res, next) {
    try {
        let newReference = ReferencesModel(req.body);

        let result = await ReferencesModel.create(newReference);
        console.log("Reference added successfully:", result);
        res.json(
            {
                success: true,
                message: "Reference added successfully.",
                data: result
            }
        );
    } catch (error) {
        next(error);
    }
};

// Controller function for retrieving the list of references
module.exports.referencesList = async function (req, res, next) {
    try {
        let list = await ReferencesModel.find({});

        res.json(
            {
                success: true,
                message: "References List Retrieved Successfully",
                data: list
            }
        );
    } catch (err) {
        console.log(err);
        next(err);
    }
};

// Controller function for retrieving a reference by ID
module.exports.getByID = async function (req, res, next) {
    try {
        let referenceID = req.params.id; // or insert 'req.params.id' into the findOne query
        let reference = await ReferencesModel.findOne({_id: referenceID});

        res.json(
            {
                success: true,
                message: "Reference Retrieved Successfully",
                data: reference
            }
        );
    } catch (err) {
        console.log(err);
        next(err);
    }
};

// Controller function for updating a reference by ID
module.exports.processEdit = async function (req, res, next) {
    try {
        let referenceID = req.params.id;
        let updatedReference = ReferencesModel(req.body);
        updatedReference._id = referenceID; // Ensure the ID is set for the update operation

        let result = await ReferencesModel.updateOne({ _id: referenceID }, updatedReference);
        console.log(result);

        res.json(
            {
                success: true,
                message: "Reference Updated Successfully"
            }
        );
    } catch (err) {
        console.log(err);
        next(err);
    }
};

// Controller function for deleting a reference by ID
module.exports.processDelete = async function (req, res, next) {
    try {
        let result = await ReferencesModel.deleteOne({_id: req.params.id});
        console.log(result);

        if (result.deletedCount > 0) {
            res.json(
                {
                    success: true,
                    message: "Reference Deleted Successfully",
                }
            );
        } else {
            throw new Error("Reference not found or already deleted."
            );
        }
    } catch (err) {
        console.log(err);
        next(err);
    }
};