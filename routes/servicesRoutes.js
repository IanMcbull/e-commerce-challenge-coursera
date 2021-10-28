const express = require('express');
const serviceRouter = express.Router();
const debug = require('debug')('server');

try {
    serviceRouter.route('/').get((req,res)=>{
        res.render('services',{title:'Services'})
      })
} catch (error) {
      debug(error);
}

module.exports = serviceRouter;