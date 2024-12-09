var express = require('express');
var app = express();
let middleware = require('./middleware');
var multer  = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './view/img/promotions/')
    },
    filename: function (req, file, cb) {
        cb(null, req.body.sku + '.jpg')
    }
});
var upload = multer({ storage: storage });
var promotionModel = require('../model/promotionModel.js');
app.get('/api/getAllPromotions', function (req, res) {
    promotionModel.getAllPromotions()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Failed to get promotions");
        });
});

app.get(`/api/getPromotionDetails`, (req, res) => {
    const promotionId = req.query.id;

    promotionModel.getPromotionById(promotionId)
        .then(data => res.json(data))
        .catch(err => res.status(500).send('Failed to fetch promotion details'));
});


module.exports = app;