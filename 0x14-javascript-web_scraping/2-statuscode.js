#!/usr/bin/node
const axios = require('axios');
const url = process.argv[2]; // Get the URL from the command-line arguments

axios.get(url)
  .then(response => {
    console.log('code:', response.status);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
