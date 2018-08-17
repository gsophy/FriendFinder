//First we need to define the dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require ("path");

var app = express();
var port = process.env.PORT || 3000;

//If I wanted to serve up static content, I would include the following command;
//app.use(express.static(__dirname + "/app/pblic/css")) app/public/css is the path to the CSS Folder

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//Define the routes for HTML and API
require("./app/routing/apiRoutes.js") (app);
require("./app/routing/htmlRoutes.js") (app);

app.listen(PORT, function () {
    console.log("Server is running on Port " + PORT);
});