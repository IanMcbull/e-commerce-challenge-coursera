const express = require('express');
const app = express();
const chalk = require('chalk');
const path = require('path');
const debug = require('debug')('server');
const port = process.env.PORT || 4400;
const morgan = require('morgan');
const indexRouter = require('./routes/indexRouter');
const servicesRouter = require('./routes/servicesRoutes');
const locationRoute = require('./routes/locationRoutes');
const contactRouter = require('./routes/contactRoute');
const loginRouter = require('./routes/loginRoute');

app.use(express.static(path.join(__dirname, '/styles')));
app.set('view engine', 'ejs');
// app.use(morgan('dev'));
app.use(indexRouter);
app.use('/services', servicesRouter);
app.use('/location', locationRoute);
app.use('/contact', contactRouter);
app.use('/login',loginRouter)



//Listen for connections
app.listen(port, () => {
    debug(chalk.magentaBright(`running on port: ${chalk.bold.greenBright(port)}`));
});