const express = require('express');
const loginRouter = express.Router();

loginRouter.route('/').get((req,res)=>{
  res.render('login',{title:'Login'})
})

module.exports = loginRouter;