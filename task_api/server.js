var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.listen(8000, () =>console.log('listening to poto'))
require('./server/routes')(app);