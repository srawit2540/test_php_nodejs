const model = require('../models/model.js');

exports.create = (req, res) => {
    if (!req.body.firstName) {
        return res.status(400).send({
            message: "firstName can not be empty"
        });
    }

    const user = new model.user({
        userCode: req.body.userCode,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
    });

    user.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });
};

exports.findAll = (req, res) => {
    model.user.find()
        .then(users => {
            res.send(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving users."
            });
        });
};

exports.findOne = (req, res) => {
    model.user.findById(req.params.userId)
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: "not found with id " + req.params.userId
                });
            }
            res.send(data);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "not found with id " + req.params.userId
                });
            }
            return res.status(500).send({
                message: "Error retrieving user with id " + req.params.userId
            });
        });
};

exports.update = (req, res) => {
    // Validate Request
    if (!req.body.firstName) {
        return res.status(400).send({
            message: "firstName can not be empty"
        });
    }

    model.user.findByIdAndUpdate(req.params.userId, {
        userCode: req.body.userCode,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
    }, { new: true })
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "not found with id " + req.params.userId
                });
            }
            res.send(user);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "not found with id " + req.params.userId
                });
            }
            return res.status(500).send({
                message: "Error updating user with id " + req.params.userId
            });
        });
};

exports.delete = (req, res) => {
    model.user.findByIdAndRemove(req.params.userId)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "not found with id " + req.params.userId
                });
            }
            res.send({ message: "deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "not found with id " + req.params.userId
                });
            }
            return res.status(500).send({
                message: "Could not delete user with id " + req.params.userId
            });
        });
};