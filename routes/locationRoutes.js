const express = require('express');
const locationRoute = express.Router();

locationRoute.route('/').get((req,res)=>{
    res.render('location',{title:'Location'});
});

module.exports = locationRoute;