"use strict";
const PORT = process.env.PORT || 8080;
const ENV = process.env.NODE_ENV || 'development';
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const knexConfig  = require('./knexfile');
const knex = require('knex')(knexConfig[ENV]);
const morgan = require('morgan');
const knexLogger = require('knex-logger');
const data = require('./chartData');

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(cors());
app.use(morgan('dev'));
app.use(knexLogger(knex));
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.render("index", data);
});

const reportApi = require('./api/report');
const notificationApi = require('./api/notification');
app.use('/api/report', reportApi(knex));
app.use('/api/notification', notificationApi(knex));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app.listen(8081);