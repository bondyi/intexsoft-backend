const express = require('express');
const PORT = 3030;

const bodyParser = require('body-parser');
const router = require('./routes/router');

const app = express();

app.use(bodyParser.json());
app.use('/api', router);

app.listen(PORT, () => console.log(`App is listening on port ${PORT}...`));