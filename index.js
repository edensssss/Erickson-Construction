var express = require('express');
var app = express();
const storage = require('node-persist');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
storage.init();

app.listen(5000, () => {
    console.log("Server has started!");
});