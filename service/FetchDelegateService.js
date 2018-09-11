'use strict';
const pg = require('pg');
const express = require('express');
const router = express.Router();
const path = require('path');
const connectionString = process.env.DATABASE_URL || 'postgres://xlabs:1234@localhost:5432/xlabs';

const client = new pg.Client(connectionString);
client.connect();


/**
 * Get List of all delegate
 * Get List of all delegate
 *
 * returns ArrayOfDelegate
 **/
exports.delegateGET = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    const results = [];

    const query = client.query('SELECT * FROM delegate_2 ORDER BY delegate_id ASC');
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {

      examples['application/json'] = results;
      console.log("*************")
      console.log(examples);

      if (Object.keys(examples).length > 0) {
        resolve(examples[Object.keys(examples)[0]]);
      } else {
        resolve();
      }

    });



  });
}


/**
 * Returns a delegate on delegate_id provided
 * Returns a single delegate
 *
 * delegate_id Integer ID of delegate to return
 * returns Delegate
 **/
exports.getBydelegate_id = function (delegate_id) {

  return new Promise(function (resolve, reject) {
    console.log("delegate_id - ", delegate_id);

    var examples = {};
    const results = [];
    const query = client.query('SELECT * FROM delegate_2 WHERE delegate_id=($1)', [delegate_id]);
    query.on('row', (row) => {
      results.push(row);
    });

    query.on('end', () => {
      console.log("results - ", results);
      examples['application/json'] = results;
      //     examples['application/json'] = {
      //   "eth_address" : "eth_address",
      //   "delegate_id" : 0,
      //   "status" : "status"
      // };

      if (Object.keys(examples).length > 0) {
        resolve(examples[Object.keys(examples)[0]]);
      } else {
        resolve();
      }
    });

  });
}


/**
 * Returns a delegate on eth_address provided
 * Returns a single delegate
 *
 * eth_address String eth_address of delegate to return
 * returns Delegate
 **/
exports.getByeth_address = function (eth_address) {
  return new Promise(function (resolve, reject) {
    console.log("eth_address - ", eth_address);

    var examples = {};
    const results = [];

    const query = client.query('SELECT * FROM delegate_2 WHERE eth_address=($1)', [eth_address]);
    query.on('row', (row) => {
      results.push(row);
    });


    query.on('end', () => {
      console.log("results - ", results);
      examples['application/json'] = results;
      // examples['application/json'] = {
      //   "eth_address": "eth_address",
      //   "delegate_id": 0,
      //   "status": "status"
      // };

      if (Object.keys(examples).length > 0) {
        resolve(examples[Object.keys(examples)[0]]);
      } else {
        resolve();
      }
    });

  });
}


/**
 * Returns list of delegate based on status provided
 * Returns delegate based on status
 *
 * status String status of delegate to return
 * returns ArrayOfDelegate
 **/
exports.getBystatus = function (status) {
  return new Promise(function (resolve, reject) {
    console.log("status - ", status);
    
    var examples = {};
    const results = [];
    
    const query = client.query('SELECT * FROM delegate_2 WHERE status=($1)', [status]);
    query.on('row', (row) => {
      results.push(row);
    });
    
    query.on('end', () => {
      console.log("results - ", results);
      examples['application/json'] = results;
      // examples['application/json'] = {
      //   "eth_address": "eth_address",
      //   "delegate_id": 0,
      //   "status": "status"
      // };

      if (Object.keys(examples).length > 0) {
        resolve(examples[Object.keys(examples)[0]]);
      } else {
        resolve();
      }
    });
  });
}

