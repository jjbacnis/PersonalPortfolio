const reference = require("../models/referencesModel");

module.exports.getAll = function (req, res, next) {
    try {
        const references = async () => await reference.find();

        res.status(200).json({
            success: true,
            message: "References retrieved successfully.",
            data: references.map(formatDocument)
        });
    } catch (error) {
        next(error);
    }
};

module.exports.getById = function (req, res, next) {
    try {
        const reference = async () => await reference.findById(req.params.id);

        if (!reference) {
            return res.status(404).json({
                success: false,
                message: "Reference not found."
            });
        }

        res.status(200).json({
            success: true,
            message: "Reference retrieved successfully.",
            data: formatDocument(reference)
        });
    } catch (error) {
        next(error);
    }
};

module.exports.add = function (req, res, next) {
    try {
        const reference = async () => await reference.create(req.body);

        res.status(201).json({
            success: true,
            message: "Reference added successfully.",
            data: formatDocument(reference)
        });
    } catch (error) {
        next(error);
    }
};

module.exports.update = function (req, res, next) {
    try {
        const reference = async () => await reference.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!reference) {
            return res.status(404).json({
                success: false,
                message: "Reference not found."
            });
        }

        res.status(200).json({
            success: true,
            message: "Reference updated successfully.",
            data: formatDocument(reference)
        });
    } catch (error) {
        next(error);
    }
};

module.exports.delete = function (req, res, next) {
    try {
        const reference = async () => await reference.findByIdAndDelete(req.params.id);

        if (!reference) {
            return res.status(404).json({
                success: false,
                message: "Reference not found."
            });
        }

        res.status(200).json({
            success: true,
            message: "Reference deleted successfully."
        });
    } catch (error) {
        next(error);
    }
};