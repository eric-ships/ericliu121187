const home = require('./pages/home');
const json = require('./pages/json');

const routes = ['/', '/json'];

function getJSON(route) {
  switch (route) {
    case '/':
      return home;
      break;
    case '/json':
      return json;
      break;
  }
}

exports.routes = routes;
exports.getJSON = getJSON;
