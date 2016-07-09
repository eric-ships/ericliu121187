const express = require('express');
const path = require('path');
const index = require(path.join(__dirname, 'index'));

const app = express();
const port = process.env.PORT || 3000;

index.routes.forEach(function(route, i) {
  app.get(route, function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(index.getJSON(route), null, '  '));
  });
});

app.get('/resume', function(req, res) {
  res.sendFile(path.join(__dirname, 'static/eric-liu__resume.pdf'));
});

app.listen(port, function() {
    console.log('Listening at http://localhost:' + port);
});
