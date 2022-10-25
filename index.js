const express = require('express');
const app = express();
const port = 3030;

app.get('/', function (req, res) {
    res.send('GET');
});

app.post('/', function (req, res) {
    res.send('POST');
});

app.put('/', function (req, res) {
    res.send('PUT');
});

app.delete('/', function (req, res) {
    res.send('DELETE');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
