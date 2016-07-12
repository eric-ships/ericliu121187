const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');

const app = express();
const index = require(path.join(__dirname, 'index'));
const port = process.env.PORT || 3000;

app.use(favicon(path.join(__dirname, 'static', 'favicon.png')));

index.routes.forEach(function(route, i) {
  app.get(route, function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.send(JSON.stringify(index.getJSON(route), null, '  '));
  });
});

app.get('/resume', function(req, res) {
  res.sendFile(path.join(__dirname, 'static/eric-liu__resume.pdf'));
});

app.listen(port, function() {
    console.log('Listening at http://localhost:' + port);
});
