const express = require('express');
const bodyParser = require('body-parser');
const slotView = require('./views/slotView');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', slotView);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});