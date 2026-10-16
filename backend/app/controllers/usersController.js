let UsersModel = require('../models/usersModel');

module.exports.processAdd = async function (req, res, next) {
    try {
        let newUser = UsersModel(req.body);

        let result = await UsersModel.create(newUser);
        console.log(result);

        res.json(
            {
                success: true,
                message: "User Added Successfully",
                data: result
            }
        );
    } catch (err) {
        console.error(err);
        next(err);
    }
};

module.exports.usersList = async function (req, res, next) {
    try {
        let list = await UsersModel.find({});
        res.json({
            success: true,
            message: "Users List",
            data: list
        });
    } catch (err) {
        console.log(err);
        next(err);
    }
};

module.exports.getByID = async function (req, res, next) {
    try {
        let userID = req.params.id;
        let user = await UsersModel.findOne({ _id: userID });

        res.json({
            success: true,
            message: "User Found",
            data: user
        });
    } catch (err) {
        console.log(err);
        next(err);
    }
};

module.exports.processEdit = async function (req, res, next) {
    try {
        let userID = req.params.id;
        let updatedUser = UsersModel(req.body);
        updatedUser._id = userID;

        let result = await UsersModel.updateOne({ _id: userID }, updatedUser);
        console.log(result);

        res.json({
            success: true,
            message: "User Updated Successfully",
        });
    } catch (err) {
        console.log(err);
        next(err);
    }
};

module.exports.processDelete = async function (req, res, next) {
    try {
        let userID = req.params.id;
        let result = await UsersModel.deleteOne({ _id: userID });
        console.log(result);

        if (result.deletedCount > 0) {
            res.json({
                success: true,
                message: "User Deleted Successfully",
            });
        } else {
            throw new Error("User not found.");
        }
    } catch (err) {
        console.log(err);
        next(err);
    }
};