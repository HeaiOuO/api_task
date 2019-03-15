const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;
const app = express();

app.use(bodyParser.json());
app.listen(port, () => console.log(`listening to poto ${port}`));
require('./server/routes')(app);