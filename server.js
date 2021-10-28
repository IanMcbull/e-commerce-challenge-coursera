const express = require('express');
const app = express();
const chalk = require('chalk');
const path = require('path');
const port = process.env.PORT || 4400;
const morgan = require('morgan');

app.use(express.static('styles'));
app.set('view engine', 'ejs');
app.use(morgan('dev'));

try{
  //Fetch the homepage
  app.get('/',(req,res)=>{
  res.render('index');
  })
}catch(err){
  throw new Error(err);
}
//Listen for connections
app.listen(port,()=>{
  console.log(chalk.magentaBright(`Server running on port: ${chalk.bold.greenBright(port)}`));
});
