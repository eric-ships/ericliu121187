const home = require('./pages/home');
const resume = require('./pages/resume');

function getJSON(route) {
  switch (route) {
    case '/':
      return home;
      break;
    case '/resume':
      return resume;
      break;
  }
}

exports.routes = ['/', '/resume'];

exports.getJSON = getJSON;
