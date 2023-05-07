const express = require('express');
const cors = require('cors');
const apiData = require('./data.json');

const app = express();
app.use(cors);

const port = process.env.PORT || 3000;

app.get("/", (request, response) => {
    response.send('Welcome to Hospital Management App')
});

app.get('/getPatients', (req, res) => {
    res.send(apiData);
});

app.listen(port, () => {
    console.log('Server Started');
})