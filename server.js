const express = require('express');
const app = express();

const index = require('./index');

index.routes.forEach(function(route, i) {
  app.get(route, function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(index.getJSON(route), null, '  '));
  });
});

app.listen(3000, function () {
  console.log('Listening on port 3000...');
});

