'use strict';

var utils = require('../utils/writer.js');
var KYCOperation = require('../service/KYCOperationService');

module.exports.updateDelegateByAddr = function updateDelegateByAddr (req, res, next) {
  var body = req.swagger.params['body'].value;
  KYCOperation.updateDelegateByAddr(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateDelegateByID = function updateDelegateByID (req, res, next) {
  var body = req.swagger.params['body'].value;
  KYCOperation.updateDelegateByID(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
