'use strict';

var utils = require('../utils/writer.js');
var DelegateOnboard = require('../service/DelegateOnboardService');

module.exports.onboardDelegate = function onboardDelegate (req, res, next) {
  var body = req.swagger.params['body'].value;
  DelegateOnboard.onboardDelegate(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
