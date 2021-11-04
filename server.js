const express = require('express');
const app = express();
const chalk = require('chalk');
const path = require('path');
const debug = require('debug')('server');
const port = process.env.PORT || 4400;
const morgan = require('morgan');
const servicesRouter = require('./routes/servicesRoutes');
const locationRoute = require('./routes/locationRoutes');
const contactRouter = require('./routes/contactRoute');
const loginRouter = require('./routes/loginRoute');
app.use(express.static(path.join(__dirname, '/styles')));
app.set('view engine', 'ejs');
// app.use(morgan('dev'));
app.use('/services', servicesRouter);
app.use('/location', locationRoute);
app.use('/contact', contactRouter);
app.use('/login',loginRouter)
try {
    //Fetch the homepage
    app.get('/', (req, res) => {
        res.render('index', {
            title: 'Shaves & Trims'
        });
    })
} catch (err) {
    throw new Error(err);
}


//Listen for connections
app.listen(port, () => {
    debug(chalk.magentaBright(`running on port: ${chalk.bold.greenBright(port)}`));
});