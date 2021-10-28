const express = require('express');
const contactRouter = express.Router();

contactRouter.route('/').get((req,res)=>{
    res.render('contact',{title:'Get In Touch'});
})

module.exports = contactRouter;