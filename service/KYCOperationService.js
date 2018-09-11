'use strict';
const pg = require('pg');
const express = require('express');
const router = express.Router();
const path = require('path');
const connectionString = process.env.DATABASE_URL || 'postgres://xlabs:1234@localhost:5432/xlabs';

const client = new pg.Client(connectionString);
client.connect();



/**
 * Update KYC status of the delegate
 * Update KYC status of the delegate
 *
 * body UpdateDelegateByAddr eth address and KYC status
 * returns Delegate
 **/
exports.updateDelegateByAddr = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    const results = [];

    const text = 'UPDATE delegate_2 SET status=($1) WHERE eth_address=($2)'
    const values =[body.status, body.eth_address]
    client.query(text, values);


    const query = client.query('SELECT * FROM delegate_2 WHERE eth_address=($1)',
    [body.eth_address]);

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
 * Update KYC status of the delegate
 * Update KYC status of the delegate
 *
 * body UpdateDelegateByID delegate ID and KYC status
 * returns Delegate
 **/
exports.updateDelegateByID = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    const results = [];
    
    const text = 'UPDATE delegate_2 SET status=($1) WHERE delegate_id=($2)'
    const values =[body.status, body.delegate_id]
    client.query(text, values);



    const query = client.query('SELECT * FROM delegate_2 WHERE delegate_id=($1)',
    [body.delegate_id]);

    query.on('row', (row) => {
      results.push(row);
    });

    
    query.on('end', () => {
      console.log("results - ", results);
      examples['application/json'] = results;
      // examples['application/json'] = {
      //   "delegate_id": "delegate_id",
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

