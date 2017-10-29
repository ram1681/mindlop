var express = require('express');
var path = require('path');
var cons = require('consolidate');

var app = express();


var server = app.listen(8090, function () {
    console.log('Server is running..');
});

app.use(express.static(__dirname + '/client'));
app.engine('html', cons.swig);
app.set('views',path.join(__dirname,'/client/views'));
app.set('view engine','html');


app.get('/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.render('home',{ });
});
