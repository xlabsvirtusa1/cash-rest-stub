'use strict';

const pg = require('pg');
const express = require('express');
const router = express.Router();
const path = require('path');
const connectionString = process.env.DATABASE_URL || 'postgres://xlabs:1234@localhost:5432/xlabs';

const client = new pg.Client(connectionString);
client.connect();


/**
 * Onboard a delegate
 * Onboard a delegate.
 *
 * body DelegateOnboard order placed for purchasing the pet
 * returns Delegate
 **/
exports.onboardDelegate = function (body) {
  return new Promise(function (resolve, reject) {
    const results = [];
    var examples = {};
    console.log("body - ", body);

    // client.query('INSERT INTO delegate_2(eth_address, status) values($1, $2)',
    //   [body.eth_address, body.status]);
    
    const text = 'INSERT INTO delegate_2(eth_address, status) values($1, $2)'
    const values =[body.eth_address, body.status]

    // promise
    client.query(text, values);


    // client.end();

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

