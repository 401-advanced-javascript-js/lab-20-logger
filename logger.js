'use strict';

require('dotenv').config();

const QClient = require('@nmq/q/client');

const files = new QClient('files');

files.subscribe('save', (payload) => {
  console.log('🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰');
  console.log(payload);
  console.log('🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰');
});

files.subscribe('error', (payload) => {
  console.log('😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡');
  console.log(payload);
  console.log('😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡');
});



const database = new QClient('database');

database.subscribe('create', (payload) => {
  console.log('Created: ', payload);
});

database.subscribe('read', (payload) => {
  console.log('Retrieved: ', payload);
});

database.subscribe('update', (payload) => {
  console.log('Updated: ', payload);
});

database.subscribe('delete', (payload) => {
  console.log('Deleted: ', payload);
});

database.subscribe('error', (payload) => {
  console.log(payload.friendlyMsg);
});