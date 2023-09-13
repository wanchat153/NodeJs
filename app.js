const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const app = express();
const port = 3000;
const path = require('path');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    debug("Listening on port " + chalk.green(port));
});