const express = require('express');
const locationRoute = express.Router();
//const map = require('../utils/mapbox');
locationRoute.route('/').get((req,res)=>{
    res.render('location',{title:'Location'});
});

module.exports = locationRoute;