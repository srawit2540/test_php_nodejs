const model = require('../models/model.js');

exports.create = (req, res) => {
    if (!req.body.productCode) {
        return res.status(400).send({
            message: "productCode can not be empty"
        });
    }

    const product = new model.product({
        productCode: req.body.productCode,
        productName: req.body.productName
    });

    product.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

exports.findAll = (req, res) => {
    model.product.find()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

exports.findOne = (req, res) => {

    model.product.findById(req.params.productId)
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: "not found with id " + req.params.productId
                });
            }
            res.send(data);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "not found with id " + req.params.productId
                });
            }
            return res.status(500).send({
                message: "Error retrieving product with id " + req.params.productId
            });
        });
};
