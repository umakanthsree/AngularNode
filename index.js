var express = require('express');
var app = new express();

app.use(express.static(__dirname+'/Angular'));
app.listen('5050');