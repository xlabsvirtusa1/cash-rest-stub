'use strict';

var utils = require('../utils/writer.js');
var FetchDelegate = require('../service/FetchDelegateService');

module.exports.delegateGET = function delegateGET (req, res, next) {
  FetchDelegate.delegateGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBydelegate_id = function getBydelegate_id (req, res, next) {
  var delegate_id = req.swagger.params['delegate_id'].value;
  FetchDelegate.getBydelegate_id(delegate_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getByeth_address = function getByeth_address (req, res, next) {
  var eth_address = req.swagger.params['eth_address'].value;
  FetchDelegate.getByeth_address(eth_address)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBystatus = function getBystatus (req, res, next) {
  var status = req.swagger.params['status'].value;
  FetchDelegate.getBystatus(status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
