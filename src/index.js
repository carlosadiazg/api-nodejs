const express = require('express');
const app = express();
const morgan = require('morgan');

// settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middleware
app.use(morgan('combined'));
app.use(express.json());

// routes
app.use('/api/monedero', require('./routes/monedero'));
//server
app.listen(app.get('port'), () => {
    console.log(`Server port ->  ${app.get('port')}`);
});