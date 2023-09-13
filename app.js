const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 4000; //ถ้า 3000 ใช้ไม่ได้จะใช้ 4000
const path = require('path');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    debug("Listening on port " + chalk.green(PORT));
});