const express = require('express');
const indexRouter = express.Router();

indexRouter.route('/').get((req, res) => {
    res.render('index', {
        title: 'Shaves & Trims'
    });
});
module.exports = indexRouter;