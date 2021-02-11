const model = require('../models/model.js');

exports.create = (req, res) => {


    if (req.body.data) {
        var data = JSON.parse(req.body.data);
        const order = new model.order({
            orderNumber: data.orderNumber,
            orderDate: data.orderDate,
            productCode: data.productCode,
            userCode: data.userCode,
            address: data.address
        });

        order.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message
                });
            });

    } else {
        const order = new model.order({
            orderNumber: req.body.orderNumber,
            orderDate: req.body.orderDate,
            productCode: req.body.productCode,
            userCode: req.body.userCode,
            address: req.body.address
        });
        order.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message
                });
            });
    }

};

exports.findAll = (req, res) => {
    model.order.find()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

exports.findOne = (req, res) => {
    model.order.findById(req.params.orderId)
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: "not found with id " + req.params.orderId
                });
            }
            res.send(data);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "not found with id " + req.params.orderId
                });
            }
            return res.status(500).send({
                message: "Error retrieving order with id " + req.params.orderId
            });
        });
};
