let ServicesModel = require('../models/servicesModel');

module.exports.processAdd = async function (req, res, next) {
    try {
        let newService = ServicesModel(req.body);

        let result = await ServicesModel.create(newService);
        console.log(result);

        res.json(
            {
                success: true,
                message: "Service Added Successfully",
                data: result
            }
        );
    } catch (err) {
        next(err);
    }
};

module.exports.servicesList = async function (req, res, next) {
    try {
        let list = await ServicesModel.find({});

        res.json(
            {
                success: true,
                message: "Services List Retrieved Successfully",
                data: list
            }
        );
    } catch (err) {
        console.log(err);
        next(err);
    }
};

module.exports.getByID = async function (req, res, next) {
    try {
        let serviceID = req.params.id; // or insert 'req.body.id' into the findOne query
        let service = await ServicesModel.findOne({_id: serviceID});

        res.json(
            {
                success: true,
                message: "Service Retrieved Successfully",
                data: service
            }
        );
    } catch (err) {
        console.log(err);
        next(err);
    }
};

module.exports.processEdit = async function (req, res, next) {
    try {
        let serviceID = req.params.id;
        let updatedService = ServicesModel(req.body);
        updatedService._id = serviceID; // Ensure the ID is set for the update operation

        let result = await ServicesModel.updateOne({_id: serviceID}, updatedService);
        console.log(result);

        res.json(
            {
                success: true,
                message: "Service Updated Successfully"
            }
        );
    } catch (err) {
        console.log(err);
        next(err);
    }
};

module.exports.processDelete = async function (req, res, next) {
    try {
        let result = await ServicesModel.deleteOne({_id: req.params.id});
        console.log(result);

        if (result.deletedCount > 0) {
            res.json(
                {
                    success: true,
                    message: "Service Deleted Successfully",
                }
            );
        } else {
            throw new Error("Service not found or already deleted."
            );
        }
    } catch (err) {
        console.log(err);
        next(err);
    }
};