var express = require('express'),
  app = express(),
  port = process.env.PORT || 4200,
  mongoose = require('mongoose'),
  Task = require('../api/models/musicModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/musicdb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('../api/routes/musicRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('music list RESTful API server started on: ' + port);